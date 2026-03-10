import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-bg/70 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 text-lg font-bold text-text-primary tracking-tight">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-accent">
              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor"/>
            </svg>
          </div>
          NomadDeals
        </Link>

        <div className="flex items-center gap-1">
          <Link href="/how-it-works" className="rounded-lg px-3.5 py-2 text-sm text-text-secondary transition hover:bg-bg-elevated hover:text-text-primary">How It Works</Link>
          <Link href="/resources" className="rounded-lg px-3.5 py-2 text-sm text-text-secondary transition hover:bg-bg-elevated hover:text-text-primary">Travel Hacks</Link>
          <Link href="/about" className="rounded-lg px-3.5 py-2 text-sm text-text-secondary transition hover:bg-bg-elevated hover:text-text-primary">About</Link>
          <div className="ml-4 h-5 w-px bg-border" />
          <Link href="/login" className="ml-3 rounded-lg px-3.5 py-2 text-sm text-text-secondary transition hover:text-text-primary">Log in</Link>
          <Link href="/signup" className="ml-1 rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition hover:bg-accent-hover shadow-[0_0_20px_var(--color-accent-glow)]">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}
