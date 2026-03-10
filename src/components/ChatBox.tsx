export default function ChatBox() {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="rounded-2xl border border-border bg-bg-card overflow-hidden glow-accent">
        {/* Chat header */}
        <div className="flex items-center gap-3 border-b border-border/50 px-6 py-3.5">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20">
            <div className="h-2 w-2 rounded-full bg-accent animate-pulse-dot" />
          </div>
          <span className="text-xs font-medium text-text-secondary">NomadDeals AI</span>
          <span className="rounded-full bg-green-dim px-2 py-0.5 text-[10px] text-green border border-green-border">Online</span>
        </div>

        {/* Chat messages area */}
        <div className="p-6 space-y-5 min-h-[320px]">
          {/* AI greeting */}
          <div className="flex gap-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-purple/20 text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" opacity="0.9"/>
              </svg>
            </div>
            <div className="space-y-3 flex-1 max-w-[85%]">
              <div className="rounded-2xl rounded-tl-lg bg-bg-elevated/80 px-5 py-3.5 text-[14px] text-text-primary leading-relaxed border border-border/30">
                Where are you headed? Tell me a destination, or describe your ideal trip and I&apos;ll find the best deals for you.
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Fly me to Tokyo", icon: "JP" },
                  { label: "Somewhere sunny & cheap", icon: "SU" },
                  { label: "Beach vibes under \u00A3400", icon: "BE" },
                ].map((chip) => (
                  <button
                    key={chip.label}
                    className="group flex items-center gap-2 rounded-xl border border-border bg-bg px-4 py-2.5 text-sm text-text-secondary transition hover:border-accent/40 hover:bg-accent/5 hover:text-text-primary"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-md bg-bg-elevated text-[9px] font-bold text-text-muted group-hover:bg-accent/15 group-hover:text-accent transition">
                      {chip.icon}
                    </span>
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* User message */}
          <div className="flex justify-end">
            <div className="rounded-2xl rounded-tr-lg bg-accent/10 border border-accent/20 px-5 py-3.5 text-[14px] text-text-primary max-w-[75%]">
              I want sunshine and beaches, budget around &pound;400 from London
            </div>
          </div>

          {/* AI response with results */}
          <div className="flex gap-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-purple/20 text-accent shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" opacity="0.9"/>
              </svg>
            </div>
            <div className="rounded-2xl rounded-tl-lg bg-bg-elevated/80 px-5 py-4 text-[14px] text-text-primary leading-relaxed border border-border/30 flex-1 max-w-[85%]">
              <p>Found <span className="font-semibold text-green">3 deals</span> matching your vibe:</p>
              <div className="mt-3.5 space-y-2">
                {[
                  { city: "Dubai", code: "DXB", info: "BA \u00B7 Direct \u00B7 6.5h", price: "279", pct: "42" },
                  { city: "Cancun", code: "CUN", info: "Norse \u00B7 Direct \u00B7 11h", price: "349", pct: "38" },
                  { city: "Bali", code: "DPS", info: "Qatar \u00B7 1 stop \u00B7 16h", price: "389", pct: "35" },
                ].map((r) => (
                  <div key={r.code} className="flex items-center justify-between rounded-xl bg-bg-card/80 px-4 py-3 border border-border/50 transition hover:border-accent/30 cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-bg-elevated text-xs font-bold text-text-muted group-hover:text-accent transition">
                        {r.code}
                      </div>
                      <div>
                        <span className="font-medium text-sm">{r.city}</span>
                        <span className="ml-2 text-text-muted text-xs">{r.info}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-sm font-bold">&pound;{r.price}</span>
                      <span className="rounded-md bg-green-dim text-green text-xs font-medium px-1.5 py-0.5 border border-green-border">
                        -{r.pct}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-text-muted">Click any deal to see dates and booking options.</p>
            </div>
          </div>
        </div>

        {/* Input area */}
        <div className="border-t border-border/50 bg-bg-card/50 p-4">
          <div className="flex items-center gap-3 rounded-xl border border-border bg-bg-input px-4 py-3 transition focus-within:border-accent/40">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 text-text-muted">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Where do you want to go? Or describe your dream trip..."
              className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none"
              readOnly
            />
            <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-white transition hover:bg-accent-hover shadow-[0_0_12px_var(--color-accent-glow)]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
