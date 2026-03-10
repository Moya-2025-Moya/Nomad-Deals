import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2.5 text-lg font-bold text-text-primary tracking-tight">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/15">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-accent">
                  <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor"/>
                </svg>
              </div>
              NomadDeals
            </Link>
            <p className="mt-3 text-sm text-text-muted leading-relaxed max-w-[240px]">
              Flight deals that respect your time and wallet. No ads, no paywall.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-text-muted">Product</div>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-text-secondary">
              <Link href="/" className="transition hover:text-text-primary w-fit">Browse Deals</Link>
              <Link href="/how-it-works" className="transition hover:text-text-primary w-fit">How It Works</Link>
              <Link href="/resources" className="transition hover:text-text-primary w-fit">Travel Hacks</Link>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-text-muted">Company</div>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-text-secondary">
              <Link href="/about" className="transition hover:text-text-primary w-fit">About Us</Link>
              <span className="text-text-muted cursor-default">Contact</span>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-text-muted">Legal</div>
            <div className="mt-4 flex flex-col gap-2.5 text-sm text-text-secondary">
              <span className="text-text-muted cursor-default">Privacy</span>
              <span className="text-text-muted cursor-default">Terms</span>
            </div>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-between border-t border-border/50 pt-6">
          <div className="text-xs text-text-muted">&copy; 2026 NomadDeals. Built for bold travellers.</div>
          <div className="flex items-center gap-1 text-xs text-text-muted">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-green animate-pulse-dot" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
