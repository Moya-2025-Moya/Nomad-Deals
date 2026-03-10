import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-blue">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "blue",
      title: "Tell us what you want",
      desc: "Use natural language or structured search. Say \"I want beaches under \u00A3400\" or pick specific dates and destinations.",
      detail: "The chat interface adapts to your style \u2014 whether you know exactly where you want to go, or you want to be surprised.",
    },
    {
      num: "02",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-green">
          <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      color: "green",
      title: "We find the real deals",
      desc: "We scan hundreds of routes and flag genuine savings. Every deal shows the normal price so you know what you\u2019re saving.",
      detail: "No inflated \"was\" prices. We track historical fares to calculate real percentage savings against typical market rates.",
    },
    {
      num: "03",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-orange">
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "orange",
      title: "We flag the traps",
      desc: "28-hour layovers, inconvenient airports, hidden fees \u2014 we warn you before you click. Not every cheap fare is a good deal.",
      detail: "Our convenience check weighs price against comfort. A \u00A350 saving that costs you 18 hours of layover gets flagged.",
    },
    {
      num: "04",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-accent">
          <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "accent",
      title: "Book directly",
      desc: "We link you to the airline or a trusted OTA. No middleman, no markup. You book at the price you see.",
      detail: "We show example dates when the deal is available so you can jump straight to the booking page with the right dates.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="animate-fade-up">
        <h1 className="text-4xl font-bold tracking-tight">How it works</h1>
        <p className="mt-4 text-lg text-text-secondary max-w-2xl">
          AI search meets curated flight data. We surface the best deals and filter out the bad ones.
        </p>
      </div>

      <div className="mt-16 space-y-8">
        {steps.map((step, i) => (
          <div key={step.num} className="animate-fade-up grid grid-cols-[1fr] gap-6 rounded-2xl border border-border bg-bg-card p-8 transition hover:border-border-light" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex items-start gap-6">
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-${step.color}/10`}>
                {step.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-text-muted tracking-widest">{step.num}</span>
                  <h2 className="text-xl font-bold">{step.title}</h2>
                </div>
                <p className="mt-2 text-text-secondary leading-relaxed">{step.desc}</p>
                <p className="mt-3 text-sm text-text-muted leading-relaxed">{step.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison */}
      <div className="mt-20 rounded-2xl border border-border bg-bg-card overflow-hidden">
        <div className="p-8 pb-0">
          <h2 className="text-2xl font-bold tracking-tight">How we&apos;re different</h2>
          <p className="mt-2 text-sm text-text-muted">Side-by-side with typical deal sites</p>
        </div>
        <div className="mt-6">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-8 py-3 text-left font-medium text-text-muted">Feature</th>
                <th className="px-8 py-3 text-center font-semibold text-accent">NomadDeals</th>
                <th className="px-8 py-3 text-center font-medium text-text-muted">Others</th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Real savings shown", us: true, them: "Rarely" },
                { feature: "AI-powered search", us: true, them: false },
                { feature: "Convenience warnings", us: true, them: false },
                { feature: "No ads / paywall", us: true, them: "Often paywalled" },
                { feature: "Example dates", us: true, them: "Sometimes" },
                { feature: "Direct booking link", us: true, them: true },
              ].map((row) => (
                <tr key={row.feature} className="border-b border-border/50 last:border-0">
                  <td className="px-8 py-3.5 text-text-secondary">{row.feature}</td>
                  <td className="px-8 py-3.5 text-center">
                    {row.us === true ? (
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-dim text-green text-xs">✓</span>
                    ) : (
                      <span className="text-text-muted">{String(row.us)}</span>
                    )}
                  </td>
                  <td className="px-8 py-3.5 text-center text-text-muted">
                    {row.them === true ? (
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-dim text-green text-xs">✓</span>
                    ) : row.them === false ? (
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-orange-dim text-orange text-xs">✗</span>
                    ) : (
                      row.them
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link href="/" className="inline-flex rounded-xl bg-accent px-8 py-3 text-sm font-medium text-white transition hover:bg-accent-hover shadow-[0_0_20px_var(--color-accent-glow)]">
          Start searching deals →
        </Link>
      </div>
    </div>
  );
}
