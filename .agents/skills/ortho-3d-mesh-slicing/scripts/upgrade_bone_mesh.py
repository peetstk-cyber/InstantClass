#!/usr/bin/env python3
"""CLI utility for auditing, upgrading, and verifying 3D anatomical bone meshes (.glb).

Performs manifold topology verification, boundary-preserving Loop-Taubin
volume-preserving mesh subdivision with exact bounding-box alignment, smooth
area-weighted vertex normal computation, indexed GLB packing, and static
integrity verification of Bone3DViewerModal.tsx.
"""

import argparse
import glob
import json
import math
import os
import re
import struct
import sys
from typing import Dict, List, Set, Tuple

Vec3 = List[float]
TriIdx = Tuple[int, int, int]


def read_glb(path: str) -> Tuple[dict, bytes]:
    with open(path, "rb") as f:
        buf = f.read()
    if len(buf) < 20 or buf[:4] != b"glTF":
        raise ValueError(f"Invalid GLB header in {path}")
    json_len = struct.unpack("<I", buf[12:16])[0]
    gltf = json.loads(buf[20 : 20 + json_len].decode("utf-8"))
    bin_data = buf[28 + json_len :]
    return gltf, bin_data


def extract_mesh_from_glb(gltf: dict, bin_data: bytes, mesh_idx: int) -> Tuple[str, List[Vec3], List[TriIdx], bool, bool]:
    mesh = gltf["meshes"][mesh_idx]
    name = mesh.get("name") or f"mesh_{mesh_idx}"
    prim = mesh["primitives"][0]
    bv = gltf["bufferViews"]
    acc_pos = gltf["accessors"][prim["attributes"]["POSITION"]]
    pos_off = bv[acc_pos["bufferView"]].get("byteOffset", 0) + acc_pos.get("byteOffset", 0)
    pos_count = acc_pos["count"]
    raw_verts = [list(struct.unpack_from("<fff", bin_data, pos_off + i * 12)) for i in range(pos_count)]

    has_indices = "indices" in prim
    is_flat_norm = True
    if "NORMAL" in prim["attributes"] and not has_indices and pos_count >= 3:
        acc_norm = gltf["accessors"][prim["attributes"]["NORMAL"]]
        norm_off = bv[acc_norm["bufferView"]].get("byteOffset", 0) + acc_norm.get("byteOffset", 0)
        n0 = struct.unpack_from("<fff", bin_data, norm_off)
        n1 = struct.unpack_from("<fff", bin_data, norm_off + 12)
        is_flat_norm = (n0 == n1)
    elif has_indices:
        is_flat_norm = False

    if has_indices:
        acc_idx = gltf["accessors"][prim["indices"]]
        idx_off = bv[acc_idx["bufferView"]].get("byteOffset", 0) + acc_idx.get("byteOffset", 0)
        idx_count = acc_idx["count"]
        ctype = acc_idx["componentType"]
        fmt, step = ("<H", 2) if ctype == 5123 else ("<I", 4)
        flat_idx = [struct.unpack_from(fmt, bin_data, idx_off + i * step)[0] for i in range(idx_count)]
        faces = [(flat_idx[i], flat_idx[i + 1], flat_idx[i + 2]) for i in range(0, len(flat_idx), 3)]
        return name, raw_verts, faces, has_indices, is_flat_norm

    # Weld non-indexed triangle soup into indexed manifold
    v_map: Dict[Tuple[int, int, int], int] = {}
    verts: List[Vec3] = []
    faces: List[TriIdx] = []
    for i in range(0, pos_count, 3):
        f_idx = []
        for j in range(3):
            v = raw_verts[i + j]
            key = (round(v[0] * 1000), round(v[1] * 1000), round(v[2] * 1000))
            if key not in v_map:
                v_map[key] = len(verts)
                verts.append(v)
            f_idx.append(v_map[key])
        faces.append((f_idx[0], f_idx[1], f_idx[2]))
    return name, verts, faces, has_indices, is_flat_norm


def check_manifold_edges(faces: List[TriIdx]) -> Tuple[int, int]:
    edge_counts: Dict[Tuple[int, int], int] = {}
    for a, b, c in faces:
        for u, v in ((a, b), (b, c), (c, a)):
            e = (min(u, v), max(u, v))
            edge_counts[e] = edge_counts.get(e, 0) + 1
    non_two = sum(1 for c in edge_counts.values() if c != 2)
    return len(edge_counts), non_two


def compute_smooth_normals(verts: List[Vec3], faces: List[TriIdx]) -> List[Vec3]:
    norms = [[0.0, 0.0, 0.0] for _ in verts]
    for a, b, c in faces:
        va, vb, vc = verts[a], verts[b], verts[c]
        ux, uy, uz = vb[0] - va[0], vb[1] - va[1], vb[2] - va[2]
        vx, vy, vz = vc[0] - va[0], vc[1] - va[1], vc[2] - va[2]
        nx = uy * vz - uz * vy
        ny = uz * vx - ux * vz
        nz = ux * vy - uy * vx
        for idx in (a, b, c):
            norms[idx][0] += nx
            norms[idx][1] += ny
            norms[idx][2] += nz
    for n in norms:
        length = math.sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2])
        if length > 1e-12:
            n[0] /= length
            n[1] /= length
            n[2] /= length
        else:
            n[1] = 1.0
    return norms


def subdivide_loop_taubin(verts: List[Vec3], faces: List[TriIdx], mu: float = -0.34) -> Tuple[List[Vec3], List[TriIdx]]:
    orig_min = [min(v[d] for v in verts) for d in range(3)]
    orig_max = [max(v[d] for v in verts) for d in range(3)]

    edge_opp: Dict[Tuple[int, int], List[int]] = {}
    adj: List[Set[int]] = [set() for _ in verts]
    for a, b, c in faces:
        adj[a].update((b, c))
        adj[b].update((a, c))
        adj[c].update((a, b))
        for u, v, w in ((a, b, c), (b, c, a), (c, a, b)):
            e = (min(u, v), max(u, v))
            edge_opp.setdefault(e, []).append(w)

    boundary_adj: List[List[int]] = [[] for _ in verts]
    for (u, v), opps in edge_opp.items():
        if len(opps) != 2:
            boundary_adj[u].append(v)
            boundary_adj[v].append(u)

    new_verts: List[Vec3] = []
    for i, v in enumerate(verts):
        b_nbrs = boundary_adj[i]
        if b_nbrs:
            # Boundary crease rule: preserve open mesh boundaries without shrinkage
            if len(b_nbrs) == 2:
                b0, b1 = b_nbrs[0], b_nbrs[1]
                new_verts.append([
                    0.75 * v[0] + 0.125 * (verts[b0][0] + verts[b1][0]),
                    0.75 * v[1] + 0.125 * (verts[b0][1] + verts[b1][1]),
                    0.75 * v[2] + 0.125 * (verts[b0][2] + verts[b1][2]),
                ])
            else:
                new_verts.append(list(v))
            continue

        nbrs = list(adj[i])
        k = len(nbrs)
        if k == 0:
            new_verts.append(list(v))
            continue
        if k == 3:
            beta = 3.0 / 16.0
        else:
            beta = (1.0 / k) * (5.0 / 8.0 - (3.0 / 8.0 + 0.25 * math.cos(2.0 * math.pi / k)) ** 2)
        w0 = 1.0 - k * beta
        nx = w0 * v[0] + beta * sum(verts[j][0] for j in nbrs)
        ny = w0 * v[1] + beta * sum(verts[j][1] for j in nbrs)
        nz = w0 * v[2] + beta * sum(verts[j][2] for j in nbrs)
        new_verts.append([nx, ny, nz])

    edge_idx: Dict[Tuple[int, int], int] = {}
    is_boundary_vert: List[bool] = [bool(boundary_adj[i]) for i in range(len(verts))]
    for e, opps in edge_opp.items():
        u, v = e
        if len(opps) == 2:
            w1, w2 = opps
            mx = 0.375 * (verts[u][0] + verts[v][0]) + 0.125 * (verts[w1][0] + verts[w2][0])
            my = 0.375 * (verts[u][1] + verts[v][1]) + 0.125 * (verts[w1][1] + verts[w2][1])
            mz = 0.375 * (verts[u][2] + verts[v][2]) + 0.125 * (verts[w1][2] + verts[w2][2])
            is_boundary_vert.append(False)
        else:
            mx = 0.5 * (verts[u][0] + verts[v][0])
            my = 0.5 * (verts[u][1] + verts[v][1])
            mz = 0.5 * (verts[u][2] + verts[v][2])
            is_boundary_vert.append(True)
        edge_idx[e] = len(new_verts)
        new_verts.append([mx, my, mz])

    new_faces: List[TriIdx] = []
    for a, b, c in faces:
        eab = edge_idx[(min(a, b), max(a, b))]
        ebc = edge_idx[(min(b, c), max(b, c))]
        eca = edge_idx[(min(c, a), max(c, a))]
        new_faces.append((a, eab, eca))
        new_faces.append((b, ebc, eab))
        new_faces.append((c, eca, ebc))
        new_faces.append((eab, ebc, eca))

    adj2: List[Set[int]] = [set() for _ in new_verts]
    for a, b, c in new_faces:
        adj2[a].update((b, c))
        adj2[b].update((a, c))
        adj2[c].update((a, b))

    inflated: List[Vec3] = []
    for i, v in enumerate(new_verts):
        if is_boundary_vert[i]:
            inflated.append(list(v))
            continue
        nbrs = list(adj2[i])
        k = len(nbrs)
        if k > 0:
            avg_x = sum(new_verts[j][0] for j in nbrs) / k
            avg_y = sum(new_verts[j][1] for j in nbrs) / k
            avg_z = sum(new_verts[j][2] for j in nbrs) / k
            inflated.append([
                v[0] + mu * (avg_x - v[0]),
                v[1] + mu * (avg_y - v[1]),
                v[2] + mu * (avg_z - v[2]),
            ])
        else:
            inflated.append(list(v))

    cur_min = [min(v[d] for v in inflated) for d in range(3)]
    cur_max = [max(v[d] for v in inflated) for d in range(3)]
    for v in inflated:
        for d in range(3):
            if cur_max[d] - cur_min[d] > 1e-6:
                t = (v[d] - cur_min[d]) / (cur_max[d] - cur_min[d])
                v[d] = orig_min[d] + t * (orig_max[d] - orig_min[d])

    return inflated, new_faces


def cmd_audit(args: argparse.Namespace) -> None:
    target = args.input
    paths = sorted(glob.glob(os.path.join(target, "**", "*.glb"), recursive=True)) if os.path.isdir(target) else [target]
    results = []
    for p in paths:
        sz_kb = round(os.path.getsize(p) / 1024.0, 2)
        gltf, bin_data = read_glb(p)
        meshes_report = []
        unpacked_offset = 0
        for m_idx in range(len(gltf.get("meshes", []))):
            name, verts, faces, has_idx, is_flat = extract_mesh_from_glb(gltf, bin_data, m_idx)
            edges_cnt, non_manifold = check_manifold_edges(faces)
            unpacked_cnt = len(faces) * 3
            meshes_report.append({
                "mesh_index": m_idx,
                "name": name,
                "triangles": len(faces),
                "unique_vertices": len(verts),
                "unpacked_vertex_range": [unpacked_offset, unpacked_offset + unpacked_cnt],
                "indexed_in_glb": has_idx,
                "flat_normals": is_flat,
                "total_edges": edges_cnt,
                "non_manifold_or_boundary_edges": non_manifold,
                "bounds_min": [round(min(v[d] for v in verts), 3) for d in range(3)],
                "bounds_max": [round(max(v[d] for v in verts), 3) for d in range(3)],
            })
            unpacked_offset += unpacked_cnt
        results.append({"file": p, "size_kb": sz_kb, "meshes": meshes_report})

    with open(args.output, "w", encoding="utf-8") as f:
        json.dump({"audited_files": results}, f, indent=2)
    print(f"Success! Audit report written to: {args.output}")


def cmd_upgrade(args: argparse.Namespace) -> None:
    gltf, bin_data = read_glb(args.input)
    old_sz_kb = os.path.getsize(args.input) / 1024.0

    bin_chunks = bytearray()
    buffer_views = []
    accessors = []
    meshes = []
    summary = []
    unpacked_offset = 0

    for m_idx in range(len(gltf.get("meshes", []))):
        orig_mesh = gltf["meshes"][m_idx]
        mat_idx = orig_mesh["primitives"][0].get("material", 0)
        node_name = None
        for nd in gltf.get("nodes", []):
            if nd.get("mesh") == m_idx and nd.get("name"):
                node_name = nd["name"]
                break
        name, verts, faces, _, _ = extract_mesh_from_glb(gltf, bin_data, m_idx)
        if node_name:
            name = node_name

        orig_tris = len(faces)
        levels = 0
        while len(faces) < args.min_tris and levels < args.max_levels:
            verts, faces = subdivide_loop_taubin(verts, faces)
            levels += 1
        norms = compute_smooth_normals(verts, faces)

        # 1. POSITION
        while len(bin_chunks) % 4 != 0:
            bin_chunks.append(0)
        pos_off = len(bin_chunks)
        for v in verts:
            bin_chunks.extend(struct.pack("<fff", v[0], v[1], v[2]))
        pos_bv_idx = len(buffer_views)
        buffer_views.append({"buffer": 0, "byteOffset": pos_off, "byteLength": len(bin_chunks) - pos_off, "target": 34962})
        pos_acc_idx = len(accessors)
        accessors.append({
            "bufferView": pos_bv_idx,
            "componentType": 5126,
            "count": len(verts),
            "type": "VEC3",
            "min": [min(v[d] for v in verts) for d in range(3)],
            "max": [max(v[d] for v in verts) for d in range(3)],
        })

        # 2. NORMAL
        while len(bin_chunks) % 4 != 0:
            bin_chunks.append(0)
        norm_off = len(bin_chunks)
        for n in norms:
            bin_chunks.extend(struct.pack("<fff", n[0], n[1], n[2]))
        norm_bv_idx = len(buffer_views)
        buffer_views.append({"buffer": 0, "byteOffset": norm_off, "byteLength": len(bin_chunks) - norm_off, "target": 34962})
        norm_acc_idx = len(accessors)
        accessors.append({
            "bufferView": norm_bv_idx,
            "componentType": 5126,
            "count": len(norms),
            "type": "VEC3",
            "min": [min(n[d] for n in norms) for d in range(3)],
            "max": [max(n[d] for n in norms) for d in range(3)],
        })

        # 3. INDICES
        while len(bin_chunks) % 4 != 0:
            bin_chunks.append(0)
        idx_off = len(bin_chunks)
        flat_idx = [idx for f in faces for idx in f]
        use_u32 = len(verts) > 65535
        fmt = "<I" if use_u32 else "<H"
        ctype = 5125 if use_u32 else 5123
        for idx in flat_idx:
            bin_chunks.extend(struct.pack(fmt, idx))
        idx_bv_idx = len(buffer_views)
        buffer_views.append({"buffer": 0, "byteOffset": idx_off, "byteLength": len(bin_chunks) - idx_off, "target": 34963})
        idx_acc_idx = len(accessors)
        accessors.append({
            "bufferView": idx_bv_idx,
            "componentType": ctype,
            "count": len(flat_idx),
            "type": "SCALAR",
            "min": [min(flat_idx)],
            "max": [max(flat_idx)],
        })

        meshes.append({
            "name": name,
            "primitives": [{
                "mode": 4,
                "attributes": {"POSITION": pos_acc_idx, "NORMAL": norm_acc_idx},
                "indices": idx_acc_idx,
                "material": mat_idx,
            }],
        })

        unpacked_cnt = len(faces) * 3
        summary.append({
            "name": name,
            "orig_triangles": orig_tris,
            "new_triangles": len(faces),
            "subdivision_levels": levels,
            "unpacked_vertex_range": [unpacked_offset, unpacked_offset + unpacked_cnt],
        })
        unpacked_offset += unpacked_cnt

    while len(bin_chunks) % 4 != 0:
        bin_chunks.append(0)

    gltf["meshes"] = meshes
    gltf["bufferViews"] = buffer_views
    gltf["accessors"] = accessors
    gltf["buffers"] = [{"byteLength": len(bin_chunks)}]

    json_bytes = json.dumps(gltf, separators=(",", ":")).encode("utf-8")
    while len(json_bytes) % 4 != 0:
        json_bytes += b" "

    total_len = 12 + 8 + len(json_bytes) + 8 + len(bin_chunks)
    out = bytearray()
    out.extend(struct.pack("<4sII", b"glTF", 2, total_len))
    out.extend(struct.pack("<I4s", len(json_bytes), b"JSON"))
    out.extend(json_bytes)
    out.extend(struct.pack("<I4s", len(bin_chunks), b"BIN\x00"))
    out.extend(bin_chunks)

    with open(args.output, "wb") as f:
        f.write(out)

    new_sz_kb = len(out) / 1024.0
    if args.report:
        with open(args.report, "w", encoding="utf-8") as rf:
            json.dump({
                "input": args.input,
                "output": args.output,
                "old_size_kb": round(old_sz_kb, 2),
                "new_size_kb": round(new_sz_kb, 2),
                "meshes": summary,
            }, rf, indent=2)
    print(f"Success! Upgraded GLB written to: {args.output} ({old_sz_kb:.1f} KB -> {new_sz_kb:.1f} KB)")


def cmd_verify(args: argparse.Namespace) -> None:
    issues: List[str] = []
    viewer_checks: Dict[str, bool] = {}

    if args.viewer and os.path.isfile(args.viewer):
        with open(args.viewer, "r", encoding="utf-8") as vf:
            code = vf.read()

        # Extract partitionBoneMesh body
        part_start = code.find("const partitionBoneMesh = useCallback")
        part_end = code.find("// When subregion changes, re-partition bone", part_start)
        part_body = code[part_start:part_end] if part_start != -1 and part_end != -1 else code

        # 1. Check that no hardcoded loop index comparisons (e.g., i >= 8472, i < 12600) exist
        hardcoded_idx = re.findall(r"\bi\s*(?:>=|>|<=|<)\s*\d{3,}", part_body)
        viewer_checks["no_hardcoded_vertex_index_checks"] = len(hardcoded_idx) == 0
        if hardcoded_idx:
            issues.append(f"Found hardcoded vertex index comparisons in partitionBoneMesh: {hardcoded_idx}")

        # 2. Check required CSG symbols
        for sym in ("getBoneRange", "splitBoneSolid", "extractBoneSolid", "fOrganic", "chainAndTriangulateCutSegs"):
            present = sym in part_body
            viewer_checks[f"has_{sym}"] = present
            if not present:
                issues.append(f"Missing required CSG symbol '{sym}' in partitionBoneMesh")

        # 3. Check balanced braces in Bone3DViewerModal.tsx
        open_braces = code.count("{")
        close_braces = code.count("}")
        viewer_checks["balanced_braces"] = (open_braces == close_braces)
        if open_braces != close_braces:
            issues.append(f"Unbalanced braces in {args.viewer}: '{{'={open_braces}, '}}'={close_braces}")

    models_checked = []
    if args.models_dir and os.path.exists(args.models_dir):
        paths = (
            sorted(glob.glob(os.path.join(args.models_dir, "**", "*.glb"), recursive=True))
            if os.path.isdir(args.models_dir)
            else [args.models_dir]
        )
        for p in paths:
            gltf, bin_data = read_glb(p)
            mesh_names = [m.get("name", "") for m in gltf.get("meshes", [])]
            models_checked.append({
                "file": p,
                "size_kb": round(os.path.getsize(p) / 1024.0, 2),
                "mesh_count": len(mesh_names),
                "mesh_names": mesh_names,
            })

    report = {
        "passed": len(issues) == 0,
        "issues": issues,
        "viewer_checks": viewer_checks,
        "models_checked": models_checked,
    }
    if args.output:
        with open(args.output, "w", encoding="utf-8") as out_f:
            json.dump(report, out_f, indent=2)
    if issues:
        print(f"Verification FAILED with {len(issues)} issue(s):", file=sys.stderr)
        for iss in issues:
            print(f"  - {iss}", file=sys.stderr)
        sys.exit(1)
    print(f"Success! Verification passed with 0 issues ({len(models_checked)} GLB model(s) checked).")


def main() -> None:
    parser = argparse.ArgumentParser(description="Audit, upgrade, and verify 3D bone GLB meshes and CSG fracture slicing.")
    sub = parser.add_subparsers(dest="command", required=True)

    p_audit = sub.add_parser("audit", help="Audit GLB bone mesh topology, normals, and triangle density.")
    p_audit.add_argument("--input", required=True, help="Path to a .glb file or directory of .glb files.")
    p_audit.add_argument("--output", required=True, help="Path to output JSON audit report.")

    p_upg = sub.add_parser("upgrade", help="Subdivide low-poly meshes, compute smooth normals, and pack as indexed GLB.")
    p_upg.add_argument("--input", required=True, help="Path to input .glb file.")
    p_upg.add_argument("--output", required=True, help="Path to output .glb file.")
    p_upg.add_argument("--min-tris", type=int, required=True, help="Subdivide any sub-mesh with fewer than this many triangles.")
    p_upg.add_argument("--max-levels", type=int, default=1, help="Maximum Loop-Taubin subdivision levels per mesh (default: 1).")
    p_upg.add_argument("--report", help="Optional path to write JSON upgrade summary.")

    p_ver = sub.add_parser("verify", help="Verify GLB models and Bone3DViewerModal.tsx CSG guardrails.")
    p_ver.add_argument("--viewer", default="src/components/anatomy3d/Bone3DViewerModal.tsx", help="Path to Bone3DViewerModal.tsx.")
    p_ver.add_argument("--models-dir", default="public/models/bones", help="Path to GLB file or models directory.")
    p_ver.add_argument("--output", help="Optional path to write JSON verification report.")

    args = parser.parse_args()
    try:
        if args.command == "audit":
            cmd_audit(args)
        elif args.command == "upgrade":
            cmd_upgrade(args)
        elif args.command == "verify":
            cmd_verify(args)
    except Exception as exc:
        print(f"Error: {exc}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
