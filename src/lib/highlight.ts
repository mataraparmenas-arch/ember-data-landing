/**
 * Minimal, dependency-free syntax highlighting for the static code
 * samples on this site. Inputs MUST be trusted, site-owned strings —
 * the output is injected as HTML. Both helpers escape HTML entities
 * before wrapping tokens in spans.
 */

function escapeHtml(code: string): string {
  return code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const CODE_TOKEN =
  /(\/\/[^\n]*)|("(?:[^"\\\n]|\\.)*")|(\b(?:import|from|const|let|var|new|await|async|interface|function|return|returns|external|view|pure|public|private|immutable|constructor|pragma|solidity|contract|export|default|true|false|null)\b)|(\b\d+(?:\.\d+)?\b)/g;

/** Highlight a TypeScript / Solidity style snippet. */
export function highlightCode(code: string): string {
  return escapeHtml(code).replace(
    CODE_TOKEN,
    (match, comment: string | undefined, str: string | undefined, keyword: string | undefined, num: string | undefined) => {
      if (comment) return `<span class="tok-comment">${comment}</span>`;
      if (str) return `<span class="tok-string">${str}</span>`;
      if (keyword) return `<span class="tok-keyword">${keyword}</span>`;
      if (num) return `<span class="tok-number">${num}</span>`;
      return match;
    },
  );
}

const JSON_TOKEN =
  /("(?:[^"\\\n]|\\.)*")(\s*:)?|(\b\d+(?:\.\d+)?\b)|(\b(?:true|false|null)\b)/g;

/** Highlight a JSON payload, distinguishing object keys from values. */
export function highlightJson(code: string): string {
  return escapeHtml(code).replace(
    JSON_TOKEN,
    (match, str: string | undefined, colon: string | undefined, num: string | undefined, literal: string | undefined) => {
      if (str) {
        const cls = colon ? "tok-key" : "tok-string";
        return `<span class="${cls}">${str}</span>${colon ?? ""}`;
      }
      if (num) return `<span class="tok-number">${num}</span>`;
      if (literal) return `<span class="tok-keyword">${literal}</span>`;
      return match;
    },
  );
}
