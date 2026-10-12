"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  /** Pre-highlighted HTML produced by src/lib/highlight.ts. */
  highlightedCode: string;
  /** Accessible label announced for the copy button. */
  copyLabel: string;
  className?: string;
}

/**
 * Terminal-styled code panel with a genuine copy-to-clipboard action.
 * Uses the async Clipboard API with a textarea fallback, reports
 * success/failure through an aria-live region, and never relies on
 * color alone to communicate state.
 */
export function CodeBlock({ highlightedCode, copyLabel, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [failed, setFailed] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  async function handleCopy() {
    // Recover the raw text from the highlighted HTML (entities decoded,
    // tags stripped) so the clipboard receives exactly the source code.
    const container = document.createElement("div");
    container.innerHTML = highlightedCode;
    const raw = container.textContent ?? "";

    let succeeded = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(raw);
        succeeded = true;
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = raw;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        succeeded = document.execCommand("copy");
        document.body.removeChild(textarea);
      }
    } catch {
      succeeded = false;
    }

    setCopied(succeeded);
    setFailed(!succeeded);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCopied(false);
      setFailed(false);
    }, 2600);
  }

  return (
    <div className={cn("overflow-hidden rounded-lg border border-line-strong bg-[#0d1014]", className)}>
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <span className="flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-mist">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-ember" />
          Example
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copyLabel}
          className="inline-flex items-center gap-1.5 rounded-md border border-line-strong px-2.5 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-mist transition-colors hover:border-[rgba(255,107,74,0.6)] hover:text-paper"
        >
          {copied ? (
            <Check aria-hidden="true" className="h-3.5 w-3.5 text-ember" />
          ) : (
            <Copy aria-hidden="true" className="h-3.5 w-3.5" />
          )}
          {copied ? "Copied" : "Copy code"}
        </button>
      </div>
      <pre className="code-lines overflow-x-auto px-4 py-4 font-mono text-[0.82rem] leading-[1.7] text-mist">
        <code>
          {highlightedCode.split("\n").map((line, index) => (
            <span
              key={index}
              className="code-line"
              dangerouslySetInnerHTML={{ __html: line === "" ? "&nbsp;" : line }}
            />
          ))}
        </code>
      </pre>
      <p aria-live="polite" className="sr-only">
        {copied ? "Code copied to clipboard." : failed ? "Copy failed. Please select the code manually." : ""}
      </p>
    </div>
  );
}
