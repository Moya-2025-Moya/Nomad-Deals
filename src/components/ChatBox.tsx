export default function ChatBox() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <div className="rounded-2xl border border-border bg-bg-card overflow-hidden">
        {/* Chat messages area */}
        <div className="p-6 space-y-4 min-h-[280px]">
          {/* AI greeting */}
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1l2 3h3l-2 3 1 3-4-1-4 1 1-3-2-3h3l2-3z" fill="currentColor"/>
              </svg>
            </div>
            <div className="space-y-2">
              <div className="rounded-2xl rounded-tl-md bg-bg-elevated px-4 py-3 text-sm text-text-primary leading-relaxed">
                Hey! Where are you dreaming of going? Tell me your destination, or describe what kind of trip you want and I&apos;ll find the best deals.
              </div>
              <div className="flex gap-2">
                <button className="rounded-full border border-border bg-bg px-3 py-1.5 text-xs text-text-secondary transition hover:border-border-light hover:text-text-primary">
                  I want to go to Tokyo
                </button>
                <button className="rounded-full border border-border bg-bg px-3 py-1.5 text-xs text-text-secondary transition hover:border-border-light hover:text-text-primary">
                  Somewhere sunny &amp; cheap
                </button>
                <button className="rounded-full border border-border bg-bg px-3 py-1.5 text-xs text-text-secondary transition hover:border-border-light hover:text-text-primary">
                  Beach under &pound;400
                </button>
              </div>
            </div>
          </div>

          {/* Example user message */}
          <div className="flex justify-end">
            <div className="rounded-2xl rounded-tr-md bg-accent/15 px-4 py-3 text-sm text-text-primary max-w-[80%]">
              I want sunshine and beaches, budget around &pound;400 from London
            </div>
          </div>

          {/* AI response */}
          <div className="flex gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1l2 3h3l-2 3 1 3-4-1-4 1 1-3-2-3h3l2-3z" fill="currentColor"/>
              </svg>
            </div>
            <div className="rounded-2xl rounded-tl-md bg-bg-elevated px-4 py-3 text-sm text-text-primary leading-relaxed">
              <p>Found <strong className="text-green">3 great deals</strong> for you! Here are sunny beach destinations from London under &pound;400:</p>
              <div className="mt-3 space-y-2">
                <div className="flex items-center justify-between rounded-lg bg-bg-card px-3 py-2 border border-border">
                  <div>
                    <span className="font-medium">Dubai (DXB)</span>
                    <span className="ml-2 text-text-muted text-xs">BA &middot; Direct &middot; 6.5h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">&pound;279</span>
                    <span className="text-xs text-green bg-green-dim rounded-full px-1.5 py-0.5">-42%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-bg-card px-3 py-2 border border-border">
                  <div>
                    <span className="font-medium">Cancun (CUN)</span>
                    <span className="ml-2 text-text-muted text-xs">Norse &middot; Direct &middot; 11h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">&pound;349</span>
                    <span className="text-xs text-green bg-green-dim rounded-full px-1.5 py-0.5">-38%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-bg-card px-3 py-2 border border-border">
                  <div>
                    <span className="font-medium">Bali (DPS)</span>
                    <span className="ml-2 text-text-muted text-xs">Qatar &middot; 1 stop &middot; 16h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">&pound;389</span>
                    <span className="text-xs text-green bg-green-dim rounded-full px-1.5 py-0.5">-35%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Input area */}
        <div className="border-t border-border p-4">
          <div className="flex items-center gap-3 rounded-xl bg-bg-input px-4 py-3">
            <input
              type="text"
              placeholder="Where do you want to go? Or describe your dream trip..."
              className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-muted outline-none"
              readOnly
            />
            <button className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-white transition hover:bg-accent-hover">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 2L7 9M14 2l-5 12-2-5-5-2 12-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
