
"use client";

import { useState } from "react";

type CopyButtonProps = {
  text: string;
};

export default function CopyButton({
  text,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);

      setCopied(true);
      setError(false);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setError(true);
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-col items-end gap-1">
      <button
        type="button"
        onClick={handleCopy}
        className="rounded-md border border-line px-3 py-2 text-sm font-medium transition hover:bg-muted/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {copied ? "Copied!" : "Copy project"}
      </button>

      {error && (
        <span role="status" className="text-xs text-red-600">
          Copy failed. Please try again.
        </span>
      )}
    </div>
  );
}
