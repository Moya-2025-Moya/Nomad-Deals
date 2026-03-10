import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="text-lg font-semibold text-text-primary">NomadDeals</div>
            <p className="mt-2 text-sm text-text-muted">Bold flights for bold travellers.</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">About</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-text-secondary">
              <Link href="/about" className="transition hover:text-text-primary">About Us</Link>
              <Link href="/how-it-works" className="transition hover:text-text-primary">How It Works</Link>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">Explore</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-text-secondary">
              <Link href="/resources" className="transition hover:text-text-primary">Travel Hacks</Link>
              <Link href="/" className="transition hover:text-text-primary">Browse Deals</Link>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">Support</div>
            <div className="mt-3 flex flex-col gap-2 text-sm text-text-secondary">
              <span className="cursor-default">Help Center</span>
              <span className="cursor-default">Contact Us</span>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-text-muted">
          &copy; 2026 NomadDeals. Built for bold travellers.
        </div>
      </div>
    </footer>
  );
}
