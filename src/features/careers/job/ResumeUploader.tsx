"use client";

import React, { useRef } from "react";
import { Plus, X } from "lucide-react";

interface UploaderProps {
  file: File | null;
  onChange: (file: File | null) => void;
  error?: string;
}

export const ResumeUploader: React.FC<UploaderProps> = ({
  file,
  onChange,
  error,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onChange(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-1.5 text-left text-xs font-sans">
      <span className="text-text-secondary font-medium block">
        Resume Upload (PDF only, Max 5MB) <span className="text-accent">*</span>
      </span>

      <input
        type="file"
        ref={fileInputRef}
        accept=".pdf"
        onChange={handleFileChange}
        className="hidden"
        aria-invalid={!!error}
      />

      {!file ? (
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className={`w-full py-4 border border-dashed flex items-center justify-center gap-2 bg-background-secondary/20 hover:bg-background-secondary/40 transition-colors focus:outline-none ${
            error ? "border-accent" : "border-border-main"
          }`}
        >
          <Plus className="w-3.5 h-3.5 text-text-primary/60" />
          <span className="text-text-primary font-medium uppercase tracking-wider text-[10px]">
            Attach Document
          </span>
        </button>
      ) : (
        <div className="w-full p-3 border border-text-primary flex items-center justify-between bg-background-main font-medium">
          <span className="truncate text-text-primary text-[11px] pr-4">
            {file.name}
          </span>
          <button
            type="button"
            onClick={() => {
              onChange(null);
              if (fileInputRef.current) fileInputRef.current.value = "";
            }}
            className="p-1 text-text-secondary hover:text-text-primary transition-colors focus:outline-none"
            aria-label="Remove uploaded file"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {error && (
        <span className="text-[10px] text-accent font-medium block pt-0.5">
          {error}
        </span>
      )}
    </div>
  );
};
