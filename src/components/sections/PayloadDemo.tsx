"use client";

import { useEffect, useState } from "react";
import { highlightJson } from "@/lib/highlight";
import { PAYLOAD_FEED, PAYLOAD_SOURCE } from "@/lib/constants";

/**
 * Illustrative payload demo. The timestamp is a real Unix time read
 * from the visitor's local clock and the price drifts gently around a
 * fixed base — both are clearly labelled as illustrative. Nothing here
 * is live data, and nothing is cryptographically verified.
 */
export function PayloadDemo() {
  const [price, setPrice] = useState(2500.0);
  const [timestamp, setTimestamp] = useState(1735689600); // fixed seed avoids hydration mismatch

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice((previous) => {
        const next = previous + (Math.random() - 0.5) * 1.4;
        return Math.min(2600, Math.max(2400, next));
      });
      setTimestamp(Math.floor(Date.now() / 1000));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const payload = `{
  "feed": "${PAYLOAD_FEED}",
  "price": "${price.toFixed(2)}",
  "timestamp": ${timestamp},
  "source": "${PAYLOAD_SOURCE}"
}`;

  return (
    <div>
      <div className="overflow-hidden rounded-lg border border-line-strong bg-[#0d1014]">
        <div className="flex items-center justify-between gap-2 border-b border-line px-4 py-2.5">
          <span className="flex items-center gap-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-mist">
            <span aria-hidden="true" className="pulse-dot inline-block h-2 w-2 rounded-full bg-ember" />
            feed.json
          </span>
          <span className="rounded border border-ember/40 px-1.5 py-0.5 font-mono text-[0.56rem] uppercase tracking-[0.18em] text-ember">
            Illustrative
          </span>
        </div>
        <pre className="overflow-x-auto px-4 py-4 font-mono text-[0.82rem] leading-[1.7] text-mist">
          <code dangerouslySetInnerHTML={{ __html: highlightJson(payload) }} />
        </pre>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-mist/80">
        Sample payload rendered from a local demo clock — <code className="font-mono">timestamp</code> is
        Unix time in seconds from your device. Values are illustrative, update locally every
        two seconds, and are neither live nor cryptographically verified.
      </p>
    </div>
  );
}
