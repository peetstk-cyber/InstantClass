import { useState } from "react";
import type { Language } from "../../App";
import type { BoneData, FractureClassificationType, BoneRegion } from "../../types";
import { X, Upload, CheckCircle, Download, RefreshCw, BookOpen, Loader2, AlertCircle, Check, Palette, Film } from "lucide-react";

interface AdminImageUploaderProps {
  darkMode: boolean;
  language: Language;
  bones: BoneData[];
  onClose: () => void;
}

interface UploadItem {
  file: File;
  previewUrl: string;
  targetPath: string;
  suggestedFilename: string;
  title: string;
  status: "idle" | "saving" | "saved" | "error";
  statusMessage?: string;
  updatedFile?: string;
}

export function AdminImageUploader({
  darkMode,
  language,
  bones,
  onClose,
}: AdminImageUploaderProps) {
  const [activeTab, setActiveTab] = useState<"illustrations" | "xrays" | "concepts">("illustrations");
  const [selectedBoneId, setSelectedBoneId] = useState<string>(bones[0]?.id || "femur");
  const [selectedRegionId, setSelectedRegionId] = useState<string>("");
  const [selectedSystemIdx, setSelectedSystemIdx] = useState<number>(0);
  const [illustrationUploads, setIllustrationUploads] = useState<Record<string, UploadItem>>({});
  const [xrayUploads, setXrayUploads] = useState<Record<string, UploadItem>>({});
  const [conceptUploads, setConceptUploads] = useState<Record<string, UploadItem>>({});
  const [globalBanner, setGlobalBanner] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const selectedBone = bones.find(b => b.id === selectedBoneId) || bones[0];
  const regions = selectedBone?.regions || [];
  const currentRegion = regions.find(r => r.id === selectedRegionId) || regions[0];
  const systems = currentRegion?.classifications || [];
  const currentSystem = systems[selectedSystemIdx] || systems[0];
  const types = currentSystem?.types || [];

  // Colors
  const bg = darkMode ? "#111827" : "#FFFFFF";
  const cardBg = darkMode ? "#1E293B" : "#F8FAFC";
  const border = darkMode ? "#334155" : "#E2E8F0";
  const text = darkMode ? "#F1F5F9" : "#0F172A";
  const muted = darkMode ? "#94A3B8" : "#64748B";

  // API helper to save image to public directory and update bone typescript file
  const saveImageToServer = async (
    file: File,
    targetPath: string,
    boneId: string,
    regionId: string,
    systemIdx: number,
    typeIdx: number,
    typeCode: string,
    updateType: "illustration" | "xray" | "concept"
  ): Promise<{ success: boolean; updatedFile?: string; error?: string }> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async () => {
        const imageData = reader.result as string;
        try {
          const res = await fetch("/api/admin/save-image", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              targetPath,
              imageData,
              boneId,
              regionId,
              systemIdx,
              typeIdx,
              typeCode,
              updateType,
            }),
          });
          const json = await res.json();
          if (json.success) {
            resolve({ success: true, updatedFile: json.updatedFile });
          } else {
            resolve({ success: false, error: json.error || "Server error" });
          }
        } catch (err: any) {
          resolve({ success: false, error: err.message || "Failed to communicate with dev server" });
        }
      };
      reader.onerror = () => resolve({ success: false, error: "Failed to read image file" });
      reader.readAsDataURL(file);
    });
  };

  // 1. Handle Classification Diagram Illustration Drop
  const handleIllustrationFileDrop = async (type: FractureClassificationType, typeIdx: number, files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file (PNG, JPG, WebP, SVG)");
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    const defaultFolder = type.illustrationId && type.illustrationId.startsWith("/images/") && !type.illustrationId.startsWith("/images/xrays/")
      ? type.illustrationId.replace("/images/", "").split("/")[0]
      : selectedBoneId;
    
    const baseFilename = type.illustrationId && type.illustrationId.includes("/")
      ? type.illustrationId.split("/").pop() || `${type.type.toLowerCase().replace(/[^a-z0-9]/g, "_")}.png`
      : `${type.type.toLowerCase().replace(/[^a-z0-9]/g, "_")}.png`;

    const targetPath = `/images/${defaultFolder}/${baseFilename}`;

    setIllustrationUploads(prev => ({
      ...prev,
      [type.type]: {
        file,
        previewUrl,
        targetPath,
        suggestedFilename: baseFilename,
        title: type.name[language],
        status: "saving",
        statusMessage: "Saving diagram & updating illustrationId...",
      },
    }));

    const result = await saveImageToServer(
      file,
      targetPath,
      selectedBoneId,
      currentRegion?.id || "",
      selectedSystemIdx,
      typeIdx,
      type.type,
      "illustration"
    );

    if (result.success) {
      type.illustrationId = targetPath;
      setIllustrationUploads(prev => ({
        ...prev,
        [type.type]: {
          ...prev[type.type],
          status: "saved",
          updatedFile: result.updatedFile,
          statusMessage: `Auto-saved to ${targetPath} & updated illustrationId!`,
        },
      }));
      setGlobalBanner({
        type: "success",
        message: `✅ Classification Diagram saved to ${targetPath} and updated in ${result.updatedFile}!`,
      });
      setTimeout(() => setGlobalBanner(null), 5000);
    } else {
      setIllustrationUploads(prev => ({
        ...prev,
        [type.type]: {
          ...prev[type.type],
          status: "error",
          statusMessage: result.error,
        },
      }));
      setGlobalBanner({
        type: "error",
        message: `⚠️ Auto-save error: ${result.error}`,
      });
    }
  };

  // 2. Handle Real X-Ray Film Drop
  const handleXRayFileDrop = async (type: FractureClassificationType, typeIdx: number, files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file (PNG, JPG, WebP)");
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    const defaultFolder = type.xrayUrl && type.xrayUrl.startsWith("/images/xrays/")
      ? type.xrayUrl.replace("/images/xrays/", "").split("/")[0]
      : selectedBoneId;
    
    const baseFilename = type.xrayUrl && type.xrayUrl.includes("/")
      ? type.xrayUrl.split("/").pop() || `${type.type.toLowerCase().replace(/[^a-z0-9]/g, "_")}_xray.png`
      : `${type.type.toLowerCase().replace(/[^a-z0-9]/g, "_")}_xray.png`;

    const targetPath = `/images/xrays/${defaultFolder}/${baseFilename}`;

    setXrayUploads(prev => ({
      ...prev,
      [type.type]: {
        file,
        previewUrl,
        targetPath,
        suggestedFilename: baseFilename,
        title: type.name[language],
        status: "saving",
        statusMessage: "Saving X-Ray film & updating xrayUrl...",
      },
    }));

    const result = await saveImageToServer(
      file,
      targetPath,
      selectedBoneId,
      currentRegion?.id || "",
      selectedSystemIdx,
      typeIdx,
      type.type,
      "xray"
    );

    if (result.success) {
      type.xrayUrl = targetPath;
      setXrayUploads(prev => ({
        ...prev,
        [type.type]: {
          ...prev[type.type],
          status: "saved",
          updatedFile: result.updatedFile,
          statusMessage: `Auto-saved to ${targetPath} & updated xrayUrl!`,
        },
      }));
      setGlobalBanner({
        type: "success",
        message: `✅ Real X-Ray film saved to ${targetPath} and updated in ${result.updatedFile}!`,
      });
      setTimeout(() => setGlobalBanner(null), 5000);
    } else {
      setXrayUploads(prev => ({
        ...prev,
        [type.type]: {
          ...prev[type.type],
          status: "error",
          statusMessage: result.error,
        },
      }));
      setGlobalBanner({
        type: "error",
        message: `⚠️ Auto-save error: ${result.error}`,
      });
    }
  };

  // 3. Handle Anatomy Concept Drop (Multi-image support)
  const handleConceptFileDrop = async (region: BoneRegion, files: FileList | null) => {
    if (!files || files.length === 0) return;
    const validFiles = Array.from(files).filter(f => f.type.startsWith("image/"));
    if (validFiles.length === 0) {
      alert("Please upload image files (PNG, JPG, WebP)");
      return;
    }

    const existingCount = Array.isArray(region.regionConcept?.images) 
      ? region.regionConcept.images.length 
      : (region.regionConcept?.imageUrl ? 1 : 0);

    for (let i = 0; i < validFiles.length; i++) {
      const file = validFiles[i];
      const previewUrl = URL.createObjectURL(file);
      const idxSuffix = (existingCount > 0 || validFiles.length > 1) ? `_${existingCount + i + 1}` : "";
      const baseFilename = `anatomy_${region.name.en.toLowerCase().replace(/[^a-z0-9]/g, "_")}${idxSuffix}.png`;
      const targetPath = `/images/concepts/${baseFilename}`;

      setConceptUploads(prev => ({
        ...prev,
        [region.id]: {
          file,
          previewUrl,
          targetPath,
          suggestedFilename: baseFilename,
          title: `${region.name[language]} Concept Anatomy ${existingCount + i + 1}`,
          status: "saving",
          statusMessage: `Saving image ${i + 1} of ${validFiles.length}...`,
        },
      }));

      const result = await saveImageToServer(
        file,
        targetPath,
        selectedBoneId,
        region.id,
        0,
        0,
        "",
        "concept"
      );

      if (result.success) {
        if (!region.regionConcept) {
          region.regionConcept = {};
        }
        region.regionConcept.imageUrl = targetPath;
        if (!Array.isArray(region.regionConcept.images)) {
          region.regionConcept.images = [targetPath];
        } else if (!region.regionConcept.images.some((img: any) => (typeof img === 'string' ? img === targetPath : img?.url === targetPath))) {
          region.regionConcept.images.push(targetPath);
        }

        setConceptUploads(prev => ({
          ...prev,
          [region.id]: {
            ...prev[region.id],
            status: "saved",
            updatedFile: result.updatedFile,
            statusMessage: `Auto-saved image(s) to ${targetPath}!`,
          },
        }));
      } else {
        setConceptUploads(prev => ({
          ...prev,
          [region.id]: {
            ...prev[region.id],
            status: "error",
            statusMessage: result.error,
          },
        }));
        setGlobalBanner({
          type: "error",
          message: `⚠️ Auto-save error: ${result.error}`,
        });
        return;
      }
    }

    setGlobalBanner({
      type: "success",
      message: `✅ Saved ${validFiles.length} anatomy concept image(s)!`,
    });
    setTimeout(() => setGlobalBanner(null), 5000);
  };

  const currentUploads = activeTab === "illustrations" 
    ? illustrationUploads 
    : activeTab === "xrays" 
    ? xrayUploads 
    : conceptUploads;

  const handleDownloadSingle = (item: UploadItem) => {
    const a = document.createElement("a");
    a.href = item.previewUrl;
    a.download = item.suggestedFilename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleDownloadAll = () => {
    const uploadList = Object.values(currentUploads);
    if (uploadList.length === 0) {
      alert("No images uploaded in this tab yet.");
      return;
    }
    uploadList.forEach((item, idx) => {
      setTimeout(() => {
        handleDownloadSingle(item);
      }, idx * 250);
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 md:p-6 animation-fadeIn">
      <div
        style={{
          background: bg,
          borderColor: border,
          color: text,
          width: 980,
          maxWidth: "100%",
          maxHeight: "92vh",
        }}
        className="rounded-2xl border flex flex-col shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div
          style={{ borderColor: border }}
          className="px-6 py-4 border-b flex items-center justify-between flex-shrink-0"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-700 dark:text-teal-400">
              <Upload size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-extrabold tracking-tight">
                  Auto-Sync Media Manager & X-Ray Uploader
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-teal-500/10 text-teal-800 dark:text-teal-400 border border-teal-600/30 dark:border-teal-500/30 uppercase tracking-widest flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 animate-pulse" />
                  Auto-Save Active
                </span>
              </div>
              <p className="text-xs" style={{ color: muted }}>
                Drag and drop X-Rays or Anatomy Concept diagrams. Images are automatically saved to disk (<code>public/images/</code>) and updated into the bone data files.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-all cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Global Notification Banner */}
        {globalBanner && (
          <div
            className={`px-6 py-2.5 text-xs font-semibold flex items-center justify-between flex-shrink-0 transition-all ${
              globalBanner.type === "success"
                ? "bg-teal-500/15 border-b border-teal-500/30 text-teal-300"
                : "bg-red-500/15 border-b border-red-500/30 text-red-300"
            }`}
          >
            <div className="flex items-center gap-2">
              {globalBanner.type === "success" ? <Check size={14} /> : <AlertCircle size={14} />}
              <span>{globalBanner.message}</span>
            </div>
            <button onClick={() => setGlobalBanner(null)} className="opacity-70 hover:opacity-100">
              <X size={14} />
            </button>
          </div>
        )}

        {/* Tab Switcher */}
        <div style={{ background: cardBg, borderColor: border }} className="px-6 pt-3 border-b flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setActiveTab("illustrations")}
            style={{
              background: activeTab === "illustrations" ? bg : "transparent",
              color: activeTab === "illustrations" ? (darkMode ? "#00CED1" : "#0F766E") : muted,
              borderColor: activeTab === "illustrations" ? border : "transparent",
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-t-xl font-extrabold text-xs border-t border-l border-r -mb-[1px] transition-all cursor-pointer"
          >
            <Palette size={15} />
            <span>Classification Diagrams (รูปวาดการ์ด)</span>
            {Object.keys(illustrationUploads).length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 text-[10px]">
                {Object.keys(illustrationUploads).length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("xrays")}
            style={{
              background: activeTab === "xrays" ? bg : "transparent",
              color: activeTab === "xrays" ? (darkMode ? "#00CED1" : "#0F766E") : muted,
              borderColor: activeTab === "xrays" ? border : "transparent",
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-t-xl font-extrabold text-xs border-t border-l border-r -mb-[1px] transition-all cursor-pointer"
          >
            <Film size={15} />
            <span>Real X-Ray Films (ภาพฟิล์มจริง)</span>
            {Object.keys(xrayUploads).length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 text-[10px]">
                {Object.keys(xrayUploads).length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("concepts")}
            style={{
              background: activeTab === "concepts" ? bg : "transparent",
              color: activeTab === "concepts" ? (darkMode ? "#00CED1" : "#0F766E") : muted,
              borderColor: activeTab === "concepts" ? border : "transparent",
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-t-xl font-extrabold text-xs border-t border-l border-r -mb-[1px] transition-all cursor-pointer"
          >
            <BookOpen size={15} />
            <span>Region Concept Anatomy (ภาพซ้ายมือ)</span>
            {Object.keys(conceptUploads).length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-teal-500/20 text-teal-700 dark:text-teal-300 text-[10px]">
                {Object.keys(conceptUploads).length}
              </span>
            )}
          </button>
        </div>

        {/* Filters Bar */}
        <div
          style={{ background: bg, borderColor: border }}
          className="px-6 py-3 border-b flex flex-wrap items-center gap-3 text-xs flex-shrink-0"
        >
          {/* Bone Select */}
          <div className="flex items-center gap-2">
            <span className="font-bold" style={{ color: muted }}>Bone:</span>
            <select
              value={selectedBoneId}
              onChange={e => {
                setSelectedBoneId(e.target.value);
                setSelectedRegionId("");
                setSelectedSystemIdx(0);
              }}
              style={{ background: cardBg, borderColor: border, color: text }}
              className="px-3 py-1.5 rounded-lg border font-semibold outline-none cursor-pointer"
            >
              {bones.map(b => (
                <option key={b.id} value={b.id}>
                  {b.name[language]} ({b.name.en})
                </option>
              ))}
            </select>
          </div>

          {/* Region Select */}
          {activeTab !== "concepts" && regions.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="font-bold" style={{ color: muted }}>Region:</span>
              <select
                value={selectedRegionId || regions[0]?.id}
                onChange={e => {
                  setSelectedRegionId(e.target.value);
                  setSelectedSystemIdx(0);
                }}
                style={{ background: cardBg, borderColor: border, color: text }}
                className="px-3 py-1.5 rounded-lg border font-semibold outline-none cursor-pointer"
              >
                {regions.map(r => (
                  <option key={r.id} value={r.id}>
                    {r.name[language]}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Classification System Select */}
          {activeTab !== "concepts" && systems.length > 0 && (
            <div className="flex items-center gap-2">
              <span className="font-bold" style={{ color: muted }}>Classification:</span>
              <select
                value={selectedSystemIdx}
                onChange={e => setSelectedSystemIdx(Number(e.target.value))}
                style={{ background: cardBg, borderColor: border, color: text }}
                className="px-3 py-1.5 rounded-lg border font-semibold outline-none cursor-pointer"
              >
                {systems.map((s, idx) => (
                  <option key={s.system} value={idx}>
                    {s.system} — {s.fullName[language]}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Download All Button */}
          {Object.keys(currentUploads).length > 0 && (
            <button
              onClick={handleDownloadAll}
              className="ml-auto px-3.5 py-1.5 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
            >
              <Download size={14} />
              <span>Download Batch Backup ({Object.keys(currentUploads).length})</span>
            </button>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-4">
          {activeTab === "illustrations" ? (
            /* ── TAB 1: Classification Diagram Illustrations ── */
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-teal-400 flex items-center gap-2">
                  <Palette size={16} />
                  <span>{currentSystem?.fullName[language] || currentSystem?.system}</span>
                  <span className="text-xs font-normal" style={{ color: muted }}>
                    ({types.length} Types — Diagram Illustrations)
                  </span>
                </h3>
                <span className="text-xs font-medium" style={{ color: muted }}>
                  Drag & drop medical diagram images to update <code>illustrationId</code>:
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {types.map((t, typeIdx) => {
                  const upload = illustrationUploads[t.type];
                  const targetFolder = t.illustrationId && t.illustrationId.startsWith("/images/") && !t.illustrationId.startsWith("/images/xrays/")
                    ? t.illustrationId.replace("/images/", "").split("/")[0]
                    : selectedBoneId;
                  const targetFilename = t.illustrationId && t.illustrationId.includes("/")
                    ? t.illustrationId.split("/").pop() || `${t.type.toLowerCase().replace(/[^a-z0-9]/g, "_")}.png`
                    : `${t.type.toLowerCase().replace(/[^a-z0-9]/g, "_")}.png`;

                  return (
                    <div
                      key={t.type}
                      style={{ 
                        background: cardBg, 
                        borderColor: upload?.status === "saved" 
                          ? "#2ECC71" 
                          : upload?.status === "saving"
                          ? (darkMode ? "#00CED1" : "#0F766E")
                          : upload?.status === "error"
                          ? "#EF4444"
                          : border 
                      }}
                      className="rounded-xl border p-4 flex flex-col gap-3 transition-all relative group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-extrabold text-sm text-teal-700 dark:text-teal-400">{t.type}</div>
                          <div className="text-xs font-semibold leading-snug line-clamp-1" style={{ color: text }}>
                            {t.name[language]}
                          </div>
                        </div>
                        {upload && (
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 flex-shrink-0 ${
                            upload.status === "saved"
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                              : upload.status === "saving"
                              ? "bg-teal-500/20 text-teal-300 border border-teal-500/30 animate-pulse"
                              : "bg-red-500/20 text-red-300 border border-red-500/30"
                          }`}>
                            {upload.status === "saving" && <Loader2 size={10} className="animate-spin" />}
                            {upload.status === "saved" && <CheckCircle size={10} />}
                            {upload.status === "error" && <AlertCircle size={10} />}
                            <span>{upload.status === "saving" ? "Saving..." : upload.status === "saved" ? "Diagram Saved" : "Error"}</span>
                          </span>
                        )}
                      </div>

                      <label
                        onDragOver={e => { e.preventDefault(); e.stopPropagation(); }}
                        onDrop={e => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleIllustrationFileDrop(t, typeIdx, e.dataTransfer.files);
                        }}
                        style={{
                          height: 150,
                          borderColor: upload?.status === "saved" ? "#2ECC71" : upload ? (darkMode ? "#00CED1" : "#0F766E") : border,
                          background: darkMode ? "#0B0F17" : "#FFFFFF",
                        }}
                        className={`rounded-lg border-2 border-dashed flex flex-col items-center justify-center p-2 cursor-pointer transition-all hover:border-teal-400 overflow-hidden relative ${
                          upload ? "border-solid" : ""
                        }`}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={e => handleIllustrationFileDrop(t, typeIdx, e.target.files)}
                        />

                        {upload ? (
                          <div className="w-full h-full flex flex-col items-center justify-center relative">
                            <img
                              src={upload.previewUrl}
                              alt={t.name[language]}
                              className="max-h-full max-w-full object-contain rounded"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 rounded">
                              <span className="text-[11px] font-bold text-white bg-teal-600/90 px-2.5 py-1 rounded-md flex items-center gap-1 shadow">
                                <RefreshCw size={12} /> Replace Diagram
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center text-center gap-2 p-3">
                            <div className="w-9 h-9 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-700 dark:text-teal-400">
                              <Palette size={18} />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-700 dark:text-slate-300">Drag & Drop Classification Diagram</div>
                              <div className="text-[10px]" style={{ color: muted }}>Saves to public/images/{targetFolder}/</div>
                            </div>
                          </div>
                        )}
                      </label>

                      <div
                        style={{ background: darkMode ? "#0B0F17" : "#F1F5F9", borderColor: border }}
                        className="p-2.5 rounded-lg border text-[11px] font-mono flex flex-col gap-1.5"
                      >
                        <div className="flex items-center justify-between text-[10px]" style={{ color: muted }}>
                          <span className="font-bold">Target illustrationId:</span>
                          {upload && (
                            <button
                              onClick={() => handleDownloadSingle(upload)}
                              className="text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-0.5 cursor-pointer font-sans font-bold"
                            >
                              <Download size={10} /> Backup
                            </button>
                          )}
                        </div>
                        <div className="text-slate-700 dark:text-slate-300 font-bold truncate text-[10px]">
                          public/images/{targetFolder}/{targetFilename}
                        </div>
                        {upload?.statusMessage && (
                          <div className={`text-[9.5px] font-sans font-semibold leading-tight ${
                            upload.status === "saved" 
                              ? "text-emerald-700 dark:text-emerald-400" 
                              : upload.status === "saving" 
                              ? "text-teal-700 dark:text-teal-400" 
                              : "text-red-700 dark:text-red-400"
                          }`}>
                            {upload.statusMessage}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : activeTab === "xrays" ? (
            /* ── TAB 2: Real X-Ray Films ── */
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-teal-400 flex items-center gap-2">
                  <Film size={16} />
                  <span>{currentSystem?.fullName[language] || currentSystem?.system}</span>
                  <span className="text-xs font-normal" style={{ color: muted }}>
                    ({types.length} Types — Real X-Ray Films)
                  </span>
                </h3>
                <span className="text-xs font-medium" style={{ color: muted }}>
                  Drag & drop real X-Ray radiographs to update <code>xrayUrl</code>:
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {types.map((t, typeIdx) => {
                  const upload = xrayUploads[t.type];
                  const targetFolder = t.xrayUrl && t.xrayUrl.startsWith("/images/xrays/")
                    ? t.xrayUrl.replace("/images/xrays/", "").split("/")[0]
                    : selectedBoneId;
                  const targetFilename = t.xrayUrl && t.xrayUrl.includes("/")
                    ? t.xrayUrl.split("/").pop() || `${t.type.toLowerCase().replace(/[^a-z0-9]/g, "_")}_xray.png`
                    : `${t.type.toLowerCase().replace(/[^a-z0-9]/g, "_")}_xray.png`;

                  return (
                    <div
                      key={t.type}
                      style={{ 
                        background: cardBg, 
                        borderColor: upload?.status === "saved" 
                          ? "#2ECC71" 
                          : upload?.status === "saving"
                          ? (darkMode ? "#00CED1" : "#0F766E")
                          : upload?.status === "error"
                          ? "#EF4444"
                          : border 
                      }}
                      className="rounded-xl border p-4 flex flex-col gap-3 transition-all relative group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-extrabold text-sm text-teal-700 dark:text-teal-400">{t.type}</div>
                          <div className="text-xs font-semibold leading-snug line-clamp-1" style={{ color: text }}>
                            {t.name[language]}
                          </div>
                        </div>
                        {upload && (
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 flex-shrink-0 ${
                            upload.status === "saved"
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                              : upload.status === "saving"
                              ? "bg-teal-500/20 text-teal-300 border border-teal-500/30 animate-pulse"
                              : "bg-red-500/20 text-red-300 border border-red-500/30"
                          }`}>
                            {upload.status === "saving" && <Loader2 size={10} className="animate-spin" />}
                            {upload.status === "saved" && <CheckCircle size={10} />}
                            {upload.status === "error" && <AlertCircle size={10} />}
                            <span>{upload.status === "saving" ? "Saving..." : upload.status === "saved" ? "X-Ray Saved" : "Error"}</span>
                          </span>
                        )}
                      </div>

                      <label
                        onDragOver={e => { e.preventDefault(); e.stopPropagation(); }}
                        onDrop={e => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleXRayFileDrop(t, typeIdx, e.dataTransfer.files);
                        }}
                        style={{
                          height: 150,
                          borderColor: upload?.status === "saved" ? "#2ECC71" : upload ? (darkMode ? "#00CED1" : "#0F766E") : border,
                          background: darkMode ? "#0B0F17" : "#FFFFFF",
                        }}
                        className={`rounded-lg border-2 border-dashed flex flex-col items-center justify-center p-2 cursor-pointer transition-all hover:border-teal-400 overflow-hidden relative ${
                          upload ? "border-solid" : ""
                        }`}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={e => handleXRayFileDrop(t, typeIdx, e.target.files)}
                        />

                        {upload ? (
                          <div className="w-full h-full flex flex-col items-center justify-center relative">
                            <img
                              src={upload.previewUrl}
                              alt={t.name[language]}
                              className="max-h-full max-w-full object-contain rounded"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 rounded">
                              <span className="text-[11px] font-bold text-white bg-teal-600/90 px-2.5 py-1 rounded-md flex items-center gap-1 shadow">
                                <RefreshCw size={12} /> Replace X-Ray
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center text-center gap-2 p-3">
                            <div className="w-9 h-9 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-700 dark:text-teal-400">
                              <Film size={18} />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-700 dark:text-slate-300">Drag & Drop True Radiograph</div>
                              <div className="text-[10px]" style={{ color: muted }}>Saves to public/images/xrays/{targetFolder}/</div>
                            </div>
                          </div>
                        )}
                      </label>

                      <div
                        style={{ background: darkMode ? "#0B0F17" : "#F1F5F9", borderColor: border }}
                        className="p-2.5 rounded-lg border text-[11px] font-mono flex flex-col gap-1.5"
                      >
                        <div className="flex items-center justify-between text-[10px]" style={{ color: muted }}>
                          <span className="font-bold">Target xrayUrl:</span>
                          {upload && (
                            <button
                              onClick={() => handleDownloadSingle(upload)}
                              className="text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-0.5 cursor-pointer font-sans font-bold"
                            >
                              <Download size={10} /> Backup
                            </button>
                          )}
                        </div>
                        <div className="text-slate-700 dark:text-slate-300 font-bold truncate text-[10px]">
                          public/images/xrays/{targetFolder}/{targetFilename}
                        </div>
                        {upload?.statusMessage && (
                          <div className={`text-[9.5px] font-sans font-semibold leading-tight ${
                            upload.status === "saved" 
                              ? "text-emerald-700 dark:text-emerald-400" 
                              : upload.status === "saving" 
                              ? "text-teal-700 dark:text-teal-400" 
                              : "text-red-700 dark:text-red-400"
                          }`}>
                            {upload.statusMessage}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            /* ── TAB 3: Region Anatomy Concepts Grid ── */
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-teal-800 dark:text-teal-400 flex items-center gap-2">
                  <BookOpen size={16} />
                  <span>{selectedBone.name[language]} ({selectedBone.name.en}) — All Regions</span>
                  <span className="text-xs font-normal" style={{ color: muted }}>
                    ({regions.length} Anatomy Regions)
                  </span>
                </h3>
                <span className="text-xs font-medium" style={{ color: muted }}>
                  Drag & drop Anatomy illustrations to auto-update Clinical Guide:
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {selectedBone.regions.map((r) => {
                  const upload = conceptUploads[r.id];
                  const targetFilename = r.regionConcept?.imageUrl && r.regionConcept.imageUrl.includes("/")
                    ? r.regionConcept.imageUrl.split("/").pop() || `anatomy_${r.name.en.toLowerCase().replace(/[^a-z0-9]/g, "_")}.png`
                    : `anatomy_${r.name.en.toLowerCase().replace(/[^a-z0-9]/g, "_")}.png`;

                  return (
                    <div
                      key={r.id}
                      style={{ 
                        background: cardBg, 
                        borderColor: upload?.status === "saved" 
                          ? "#2ECC71" 
                          : upload?.status === "saving"
                          ? (darkMode ? "#00CED1" : "#0F766E")
                          : upload?.status === "error"
                          ? "#EF4444"
                          : border 
                      }}
                      className="rounded-xl border p-4 flex flex-col gap-3 transition-all relative group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-extrabold text-sm text-teal-700 dark:text-teal-400">{r.name[language]}</div>
                          <div className="text-xs font-semibold leading-snug" style={{ color: muted }}>
                            {r.name.en} Anatomy Frame
                          </div>
                        </div>
                        {upload && (
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1 flex-shrink-0 ${
                            upload.status === "saved"
                              ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                              : upload.status === "saving"
                              ? "bg-teal-500/20 text-teal-300 border border-teal-500/30 animate-pulse"
                              : "bg-red-500/20 text-red-300 border border-red-500/30"
                          }`}>
                            {upload.status === "saving" && <Loader2 size={10} className="animate-spin" />}
                            {upload.status === "saved" && <CheckCircle size={10} />}
                            {upload.status === "error" && <AlertCircle size={10} />}
                            <span>{upload.status === "saving" ? "Saving..." : upload.status === "saved" ? "Anatomy Saved" : "Error"}</span>
                          </span>
                        )}
                      </div>

                      <label
                        onDragOver={e => { e.preventDefault(); e.stopPropagation(); }}
                        onDrop={e => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleConceptFileDrop(r, e.dataTransfer.files);
                        }}
                        style={{
                          height: 150,
                          borderColor: upload?.status === "saved" ? "#2ECC71" : upload ? (darkMode ? "#00CED1" : "#0F766E") : border,
                          background: darkMode ? "#0B0F17" : "#FFFFFF",
                        }}
                        className={`rounded-lg border-2 border-dashed flex flex-col items-center justify-center p-2 cursor-pointer transition-all hover:border-teal-400 overflow-hidden relative ${
                          upload ? "border-solid" : ""
                        }`}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          className="hidden"
                          onChange={e => handleConceptFileDrop(r, e.target.files)}
                        />

                        {upload ? (
                          <div className="w-full h-full flex flex-col items-center justify-center relative">
                            <img
                              src={upload.previewUrl}
                              alt={r.name[language]}
                              className="max-h-full max-w-full object-contain rounded"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 rounded">
                              <span className="text-[11px] font-bold text-white bg-teal-600/90 px-2.5 py-1 rounded-md flex items-center gap-1 shadow">
                                <RefreshCw size={12} /> Add / Replace Images
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center text-center gap-2 p-3">
                            <div className="w-9 h-9 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-700 dark:text-teal-400">
                              <BookOpen size={18} />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-700 dark:text-slate-300">Drag & Drop Diagram(s)</div>
                              <div className="text-[10px]" style={{ color: muted }}>Supports multiple files (Gallery View)</div>
                            </div>
                          </div>
                        )}
                      </label>

                      {/* Existing Concept Images Strip if multiple exist */}
                      {Array.isArray(r.regionConcept?.images) && r.regionConcept.images.length > 0 && (
                        <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                          <span className="text-[10px] font-bold text-slate-500 flex-shrink-0">
                            {r.regionConcept.images.length} in gallery:
                          </span>
                          {r.regionConcept.images.map((imgItem, imgIdx) => {
                            const imgUrl = typeof imgItem === "string" ? imgItem : imgItem.url;
                            return (
                              <img
                                key={imgIdx}
                                src={imgUrl}
                                alt={`concept ${imgIdx + 1}`}
                                title={imgUrl}
                                className="w-7 h-7 object-contain rounded border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 flex-shrink-0"
                              />
                            );
                          })}
                        </div>
                      )}

                      <div
                        style={{ background: darkMode ? "#0B0F17" : "#F1F5F9", borderColor: border }}
                        className="p-2.5 rounded-lg border text-[11px] font-mono flex flex-col gap-1.5"
                      >
                        <div className="flex items-center justify-between text-[10px]" style={{ color: muted }}>
                          <span className="font-bold">Target Path / Images:</span>
                          {upload && (
                            <button
                              onClick={() => handleDownloadSingle(upload)}
                              className="text-teal-700 dark:text-teal-400 hover:underline flex items-center gap-0.5 cursor-pointer font-sans font-bold"
                            >
                              <Download size={10} /> Backup
                            </button>
                          )}
                        </div>
                        <div className="text-slate-700 dark:text-slate-300 font-bold truncate text-[10px]">
                          public/images/concepts/{targetFilename}
                        </div>
                        {upload?.statusMessage && (
                          <div className={`text-[9.5px] font-sans font-semibold leading-tight ${
                            upload.status === "saved" 
                              ? "text-emerald-700 dark:text-emerald-400" 
                              : upload.status === "saving" 
                              ? "text-teal-700 dark:text-teal-400" 
                              : "text-red-700 dark:text-red-400"
                          }`}>
                            {upload.statusMessage}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div
          style={{ background: cardBg, borderColor: border }}
          className="px-6 py-3.5 border-t flex items-center justify-between text-xs flex-shrink-0"
        >
          <div style={{ color: muted }} className="flex items-center gap-2">
            <span>⚡ <strong>Auto-Sync Active:</strong> เมื่อลากรูปใส่ การ์ดจะทำการเซฟไฟล์ลง <code>public/images/</code> และอัปเดตโค้ดใน <code>src/data/bones/</code> ให้อัตโนมัติทันที</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg font-bold border hover:bg-slate-800 transition-all cursor-pointer"
            style={{ borderColor: border, color: text }}
          >
            Close Manager
          </button>
        </div>
      </div>
    </div>
  );
}
