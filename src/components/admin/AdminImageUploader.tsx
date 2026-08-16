import { useState } from "react";
import type { Language } from "../../App";
import type { BoneData, FractureClassificationType, BoneRegion } from "../../types";
import { X, Upload, Image as ImageIcon, CheckCircle, Download, RefreshCw, Layers, BookOpen } from "lucide-react";

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
}

export function AdminImageUploader({
  darkMode,
  language,
  bones,
  onClose,
}: AdminImageUploaderProps) {
  const [activeTab, setActiveTab] = useState<"xrays" | "concepts">("xrays");
  const [selectedBoneId, setSelectedBoneId] = useState<string>(bones[0]?.id || "femur");
  const [selectedRegionId, setSelectedRegionId] = useState<string>("");
  const [selectedSystemIdx, setSelectedSystemIdx] = useState<number>(0);
  const [xrayUploads, setXrayUploads] = useState<Record<string, UploadItem>>({});
  const [conceptUploads, setConceptUploads] = useState<Record<string, UploadItem>>({});

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

  const handleXRayFileDrop = (type: FractureClassificationType, files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file (PNG, JPG, WebP)");
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    const defaultFolder = type.illustrationId
      ? type.illustrationId.replace("/images/", "").split("/")[0]
      : selectedBoneId;
    
    const baseFilename = type.illustrationId
      ? type.illustrationId.split("/").pop() || `${type.type.toLowerCase().replace(/[^a-z0-9]/g, "_")}.png`
      : `${type.type.toLowerCase().replace(/[^a-z0-9]/g, "_")}.png`;

    const targetPath = `/images/xrays/${defaultFolder}/${baseFilename}`;

    setXrayUploads(prev => ({
      ...prev,
      [type.type]: {
        file,
        previewUrl,
        targetPath,
        suggestedFilename: baseFilename,
        title: type.name[language],
      },
    }));
  };

  const handleConceptFileDrop = (region: BoneRegion, files: FileList | null) => {
    if (!files || files.length === 0) return;
    const file = files[0];
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file (PNG, JPG, WebP)");
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    const baseFilename = region.regionConcept?.imageUrl
      ? region.regionConcept.imageUrl.split("/").pop() || `anatomy_${region.name.en.toLowerCase().replace(/[^a-z0-9]/g, "_")}.png`
      : `anatomy_${region.name.en.toLowerCase().replace(/[^a-z0-9]/g, "_")}.png`;

    const targetPath = `/images/concepts/${baseFilename}`;

    setConceptUploads(prev => ({
      ...prev,
      [region.id]: {
        file,
        previewUrl,
        targetPath,
        suggestedFilename: baseFilename,
        title: `${region.name[language]} Concept Anatomy`,
      },
    }));
  };

  const currentUploads = activeTab === "xrays" ? xrayUploads : conceptUploads;

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
          width: 950,
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
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <Upload size={20} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-extrabold tracking-tight">
                  Media Manager & Batch Uploader
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-teal-500/10 text-teal-400 border border-teal-500/30 uppercase tracking-widest">
                  Admin Tool
                </span>
              </div>
              <p className="text-xs" style={{ color: muted }}>
                Drag and drop X-Rays or Anatomy Concept diagrams. Files will automatically be mapped to the project structure.
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

        {/* Tab Switcher */}
        <div style={{ background: cardBg, borderColor: border }} className="px-6 pt-3 border-b flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setActiveTab("xrays")}
            style={{
              background: activeTab === "xrays" ? bg : "transparent",
              color: activeTab === "xrays" ? "#00CED1" : muted,
              borderColor: activeTab === "xrays" ? border : "transparent",
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-t-xl font-extrabold text-xs border-t border-l border-r -mb-[1px] transition-all cursor-pointer"
          >
            <Layers size={15} />
            <span>X-Ray Classification Films</span>
            {Object.keys(xrayUploads).length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-teal-500/20 text-teal-300 text-[10px]">
                {Object.keys(xrayUploads).length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab("concepts")}
            style={{
              background: activeTab === "concepts" ? bg : "transparent",
              color: activeTab === "concepts" ? "#00CED1" : muted,
              borderColor: activeTab === "concepts" ? border : "transparent",
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-t-xl font-extrabold text-xs border-t border-l border-r -mb-[1px] transition-all cursor-pointer"
          >
            <BookOpen size={15} />
            <span>Region Concept Anatomy (Left Sidebar)</span>
            {Object.keys(conceptUploads).length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-teal-500/20 text-teal-300 text-[10px]">
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
          {activeTab === "xrays" && regions.length > 0 && (
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

          {/* Classification System Select (X-rays only) */}
          {activeTab === "xrays" && systems.length > 0 && (
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
              <span>Download Batch ({Object.keys(currentUploads).length})</span>
            </button>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 flex flex-col gap-4">
          {activeTab === "xrays" ? (
            /* ── X-Ray Types Grid ── */
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-teal-400 flex items-center gap-2">
                  <Layers size={16} />
                  <span>{currentSystem?.fullName[language] || currentSystem?.system}</span>
                  <span className="text-xs font-normal" style={{ color: muted }}>
                    ({types.length} Classification Types)
                  </span>
                </h3>
                <span className="text-xs" style={{ color: muted }}>
                  Drop X-Ray images onto each classification card:
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {types.map(t => {
                  const upload = xrayUploads[t.type];
                  const targetFolder = t.illustrationId
                    ? t.illustrationId.replace("/images/", "").split("/")[0]
                    : selectedBoneId;
                  const targetFilename = t.illustrationId
                    ? t.illustrationId.split("/").pop() || `${t.type.toLowerCase().replace(/[^a-z0-9]/g, "_")}.png`
                    : `${t.type.toLowerCase().replace(/[^a-z0-9]/g, "_")}.png`;

                  return (
                    <div
                      key={t.type}
                      style={{ background: cardBg, borderColor: upload ? "#00CED1" : border }}
                      className="rounded-xl border p-4 flex flex-col gap-3 transition-all relative group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-extrabold text-sm text-teal-400">{t.type}</div>
                          <div className="text-xs font-semibold leading-snug line-clamp-1" style={{ color: text }}>
                            {t.name[language]}
                          </div>
                        </div>
                        {upload && (
                          <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0">
                            <CheckCircle size={14} />
                          </span>
                        )}
                      </div>

                      <label
                        onDragOver={e => { e.preventDefault(); e.stopPropagation(); }}
                        onDrop={e => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleXRayFileDrop(t, e.dataTransfer.files);
                        }}
                        style={{
                          height: 150,
                          borderColor: upload ? "#00CED1" : border,
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
                          onChange={e => handleXRayFileDrop(t, e.target.files)}
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
                                <RefreshCw size={12} /> Replace Image
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center text-center gap-2 p-3">
                            <div className="w-9 h-9 rounded-full bg-slate-800/50 flex items-center justify-center text-slate-400">
                              <ImageIcon size={18} />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-300">Drag & Drop X-Ray</div>
                              <div className="text-[10px]" style={{ color: muted }}>or click to browse</div>
                            </div>
                          </div>
                        )}
                      </label>

                      <div
                        style={{ background: darkMode ? "#0B0F17" : "#F1F5F9", borderColor: border }}
                        className="p-2 rounded-lg border text-[11px] font-mono flex flex-col gap-1"
                      >
                        <div className="flex items-center justify-between text-[10px]" style={{ color: muted }}>
                          <span>Destination Folder:</span>
                          {upload && (
                            <button
                              onClick={() => handleDownloadSingle(upload)}
                              className="text-teal-400 hover:underline flex items-center gap-0.5 cursor-pointer font-sans font-bold"
                            >
                              <Download size={10} /> Save File
                            </button>
                          )}
                        </div>
                        <div className="text-slate-300 font-bold truncate">
                          public/images/xrays/{targetFolder}/{targetFilename}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            /* ── Region Anatomy Concepts Grid ── */
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-teal-400 flex items-center gap-2">
                  <BookOpen size={16} />
                  <span>{selectedBone.name[language]} ({selectedBone.name.en}) — All Regions</span>
                  <span className="text-xs font-normal" style={{ color: muted }}>
                    ({regions.length} Anatomy Regions)
                  </span>
                </h3>
                <span className="text-xs" style={{ color: muted }}>
                  Drop Anatomy / Diagram illustrations for the Left Sidebar Clinical Guide:
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {regions.map(r => {
                  const upload = conceptUploads[r.id];
                  const targetFilename = r.regionConcept?.imageUrl
                    ? r.regionConcept.imageUrl.split("/").pop() || `anatomy_${r.name.en.toLowerCase().replace(/[^a-z0-9]/g, "_")}.png`
                    : `anatomy_${r.name.en.toLowerCase().replace(/[^a-z0-9]/g, "_")}.png`;

                  return (
                    <div
                      key={r.id}
                      style={{ background: cardBg, borderColor: upload ? "#00CED1" : border }}
                      className="rounded-xl border p-4 flex flex-col gap-3 transition-all relative group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <div className="font-extrabold text-sm text-teal-400">{r.name[language]}</div>
                          <div className="text-xs font-semibold leading-snug" style={{ color: muted }}>
                            {r.name.en} Anatomy Frame
                          </div>
                        </div>
                        {upload && (
                          <span className="w-6 h-6 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center flex-shrink-0">
                            <CheckCircle size={14} />
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
                          borderColor: upload ? "#00CED1" : border,
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
                                <RefreshCw size={12} /> Replace Image
                              </span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center text-center gap-2 p-3">
                            <div className="w-9 h-9 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">
                              <BookOpen size={18} />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-slate-300">Drag & Drop Anatomy Diagram</div>
                              <div className="text-[10px]" style={{ color: muted }}>or click to browse</div>
                            </div>
                          </div>
                        )}
                      </label>

                      <div
                        style={{ background: darkMode ? "#0B0F17" : "#F1F5F9", borderColor: border }}
                        className="p-2 rounded-lg border text-[11px] font-mono flex flex-col gap-1"
                      >
                        <div className="flex items-center justify-between text-[10px]" style={{ color: muted }}>
                          <span>Destination Folder:</span>
                          {upload && (
                            <button
                              onClick={() => handleDownloadSingle(upload)}
                              className="text-teal-400 hover:underline flex items-center gap-0.5 cursor-pointer font-sans font-bold"
                            >
                              <Download size={10} /> Save File
                            </button>
                          )}
                        </div>
                        <div className="text-slate-300 font-bold truncate">
                          public/images/concepts/{targetFilename}
                        </div>
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
            <span>💡 <strong>Tip:</strong> Images for the Left Sidebar go to <code>public/images/concepts/</code> and will show up automatically in the Clinical Guide frame.</span>
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
