"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type CopyButtonProps = {
  text: string;
};

export default function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm font-medium transition hover:border-teal-400 hover:text-teal-400"
      aria-label={copied ? "Copied project details" : "Copy project details"}
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? "Copied" : "Copy details"}
    </button>
  );
}