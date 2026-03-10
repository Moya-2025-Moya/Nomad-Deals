import Link from "next/link";

export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="animate-fade-up">
        <h1 className="text-4xl font-bold tracking-tight">About NomadDeals</h1>
        <p className="mt-4 text-lg text-text-secondary max-w-2xl leading-relaxed">
          Built for travellers who love smart routing: creative connections, bold bargains, and the confidence to book without second-guessing.
        </p>
      </div>

      {/* Mission statement */}
      <div className="mt-12 rounded-2xl border border-border bg-bg-card p-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        <div className="flex items-start gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor"/>
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-bold">Our mission</h2>
            <p className="mt-2 text-text-secondary leading-relaxed">
              Make flight deal hunting <span className="text-text-primary font-medium">transparent, fast, and honest</span>. No dark patterns, no inflated savings, no paywalled deals. Just real prices, real savings, and one click to book.
            </p>
          </div>
        </div>
      </div>

      {/* Promise cards */}
      <div className="mt-8 grid grid-cols-3 gap-4 animate-fade-up" style={{ animationDelay: "0.15s" }}>
        {[
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-green">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            ),
            title: "Open browsing",
            desc: "No paywall. Browse everything, experiment, give feedback.",
          },
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-blue">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            ),
            title: "No ads",
            desc: "Browse without being tracked, targeted, or overwhelmed.",
          },
          {
            icon: (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-accent">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ),
            title: "Curated deals",
            desc: "Every deal is one we\u2019d use ourselves. Quality over quantity.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-border bg-bg-card p-6 transition hover:border-border-light">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg-elevated">
              {item.icon}
            </div>
            <h3 className="mt-4 font-semibold">{item.title}</h3>
            <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Revenue model */}
      <div className="mt-8 rounded-2xl border border-border bg-bg-card p-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        <div className="flex items-start gap-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green/10">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green">
              <path d="M12 2v20m5-17H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold">How do we make money?</h2>
            <p className="mt-2 text-text-secondary leading-relaxed">
              Affiliate links. If you book through our links, we may earn a small commission at no extra cost to you. That&apos;s how we keep the site ad-free. We may add optional paid features in the future, but never at the expense of the free experience.
            </p>
            <div className="mt-5 flex gap-2">
              {["Affiliate-only", "Ad-free", "Transparent"].map((tag) => (
                <span key={tag} className="rounded-lg bg-bg-elevated px-3 py-1.5 text-xs font-medium text-text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mt-12 animate-fade-up" style={{ animationDelay: "0.25s" }}>
        <h2 className="text-2xl font-bold tracking-tight">What we believe</h2>
        <div className="mt-6 space-y-4">
          {[
            {
              title: "Cheap shouldn\u2019t mean painful",
              desc: "A 28-hour layover isn\u2019t a deal. We flag inconvenience so you can decide with full information.",
              color: "text-orange",
            },
            {
              title: "Transparency builds trust",
              desc: "Every deal shows the normal fare, savings percentage, and example dates. No bait-and-switch, ever.",
              color: "text-green",
            },
            {
              title: "AI should help, not hype",
              desc: "Our AI search helps you discover routes you wouldn\u2019t find. It doesn\u2019t upsell or manipulate.",
              color: "text-blue",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4 rounded-xl border border-border/50 bg-bg-card/50 p-5 transition hover:border-border-light">
              <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-bg-elevated ${item.color}`}>
                <svg width="14" height="14" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <Link href="/" className="inline-flex rounded-xl bg-accent px-8 py-3 text-sm font-medium text-white transition hover:bg-accent-hover shadow-[0_0_20px_var(--color-accent-glow)]">
          Start browsing deals →
        </Link>
      </div>
    </div>
  );
}
