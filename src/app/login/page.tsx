import Link from "next/link";

export default function Login() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] items-center justify-center px-6">
      <div className="grid grid-cols-[1fr_420px] gap-16 max-w-4xl w-full items-center">
        {/* Left: Branding */}
        <div className="animate-fade-up">
          <div className="flex items-center gap-2.5 text-lg font-bold text-text-primary tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-accent">
                <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor"/>
              </svg>
            </div>
            NomadDeals
          </div>
          <h1 className="mt-8 text-4xl font-bold tracking-tight leading-tight">
            Welcome back.
          </h1>
          <p className="mt-4 text-text-secondary leading-relaxed max-w-sm">
            Your saved routes and deal alerts are waiting for you. Log in to pick up where you left off.
          </p>
        </div>

        {/* Right: Form */}
        <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="rounded-2xl border border-border bg-bg-card p-8">
            <h2 className="text-xl font-bold">Log in</h2>

            <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm font-medium transition hover:border-border-light hover:bg-bg-card-hover">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
                <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" fill="#34A853"/>
                <path d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.997 8.997 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
                <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs text-text-muted">or</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="space-y-3.5">
              <div>
                <label className="text-xs font-medium text-text-muted">Email</label>
                <input type="email" placeholder="you@example.com" className="mt-1.5 w-full rounded-xl border border-border bg-bg-input px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted outline-none transition focus:border-accent/50" readOnly />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-text-muted">Password</label>
                  <button className="text-xs text-accent hover:underline">Forgot?</button>
                </div>
                <input type="password" placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022" className="mt-1.5 w-full rounded-xl border border-border bg-bg-input px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted outline-none transition focus:border-accent/50" readOnly />
              </div>
              <button className="w-full rounded-xl bg-accent px-4 py-3 text-sm font-medium text-white transition hover:bg-accent-hover shadow-[0_0_16px_var(--color-accent-glow)]">
                Log in
              </button>
            </div>

            <p className="mt-5 text-center text-xs text-text-muted">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-accent hover:underline">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
