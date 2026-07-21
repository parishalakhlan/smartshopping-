// app/careers/components/ResumeUploader.tsx
"use client";

import React, { useRef, useState } from "react";

interface ResumeUploaderProps {
  file: File | null;
  onChange: (file: File | null) => void;
  error?: string;
}

export const ResumeUploader: React.FC<ResumeUploaderProps> = ({
  file,
  onChange,
  error,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragActive, setIsDragActive] = useState(false);

  const processFile = (selectedFile: File | null) => {
    if (!selectedFile) return;
    onChange(selectedFile);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setIsDragActive(true);
    else if (e.type === "dragleave") setIsDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="w-full">
      <label className="block text-xs uppercase tracking-widest text-neutral-500 font-medium mb-2">
        Resume / CV (PDF Only, Max 5MB) *
      </label>

      <div
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={`w-full border cursor-pointer transition-all duration-300 py-8 px-6 text-center bg-transparent flex flex-col items-center justify-center min-h-[140px]
          ${isDragActive ? "border-neutral-900 bg-neutral-50/50" : error ? "border-red-400" : "border-neutral-200 hover:border-neutral-400"}`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={(e) => processFile(e.target.files?.[0] || null)}
        />

        {!file ? (
          <>
            <p className="text-sm font-light text-neutral-600">
              Drag and drop your document, or{" "}
              <span className="underline underline-offset-4 font-normal text-neutral-950">
                browse files
              </span>
            </p>
          </>
        ) : (
          <div
            className="w-full flex items-center justify-between px-2 max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center space-x-3 truncate">
              <svg
                className="w-5 h-5 text-neutral-800 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="text-sm text-neutral-800 font-medium truncate">
                {file.name}
              </span>
              <span className="text-xs text-neutral-400">
                ({(file.size / 1024 / 1024).toFixed(2)} MB)
              </span>
            </div>
            <button
              type="button"
              onClick={() => onChange(null)}
              className="text-xs uppercase tracking-wider text-neutral-400 hover:text-neutral-950 transition-colors duration-200 underline underline-offset-4"
            >
              Replace
            </button>
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1.5 text-xs text-red-600 tracking-wide font-light">
          {error}
        </p>
      )}
    </div>
  );
};
