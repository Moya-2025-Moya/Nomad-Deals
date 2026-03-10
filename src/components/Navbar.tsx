import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-text-primary">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          NomadDeals
        </Link>

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <Link href="/how-it-works" className="transition hover:text-text-primary">How It Works</Link>
            <Link href="/resources" className="transition hover:text-text-primary">Travel Hacks</Link>
            <Link href="/about" className="transition hover:text-text-primary">About</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm text-text-secondary transition hover:text-text-primary">Log in</Link>
            <Link href="/signup" className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-hover">Sign up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
