export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Tell us what you want",
      desc: "Use natural language or structured search. Say \"I want beaches under £400\" or pick specific dates and destinations. Our AI understands both.",
      detail: "The chat interface adapts to your style — whether you know exactly where you want to go, or you want to be surprised.",
    },
    {
      num: "02",
      title: "We find the real deals",
      desc: "We scan hundreds of routes and flag genuine savings. Every deal shows the normal price so you know exactly what you're saving.",
      detail: "No inflated \"was\" prices. We track historical fares to calculate real percentage savings against typical market rates.",
    },
    {
      num: "03",
      title: "We flag the traps",
      desc: "28-hour layovers, inconvenient airports, hidden fees — we warn you before you click. Not every cheap fare is a good deal.",
      detail: "Our deal score weighs price against convenience. A £50 saving that costs you 18 hours of layover gets flagged.",
    },
    {
      num: "04",
      title: "Book directly",
      desc: "We link you straight to the airline or a trusted OTA. No middleman, no markup. You book at the price you see.",
      detail: "We show example dates when the deal is available so you can jump straight to the booking page with the right dates loaded.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-bold">How it works</h1>
      <p className="mt-4 text-lg text-text-secondary max-w-2xl">
        NomadDeals combines AI search with curated flight data to surface the best deals — and filter out the bad ones.
      </p>

      <div className="mt-16 space-y-16">
        {steps.map((step) => (
          <div key={step.num} className="grid grid-cols-[80px_1fr] gap-6">
            <div className="text-5xl font-bold text-border">{step.num}</div>
            <div>
              <h2 className="text-2xl font-bold">{step.title}</h2>
              <p className="mt-3 text-text-secondary leading-relaxed">{step.desc}</p>
              <div className="mt-4 rounded-xl border border-border bg-bg-card p-5">
                <p className="text-sm text-text-muted leading-relaxed">{step.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison */}
      <div className="mt-20 rounded-2xl border border-border bg-bg-card p-8">
        <h2 className="text-2xl font-bold">How we&apos;re different</h2>
        <div className="mt-6 grid grid-cols-3 gap-px bg-border rounded-xl overflow-hidden">
          {[
            { feature: "Feature", us: "NomadDeals", them: "Others" },
            { feature: "Real savings shown", us: "✓", them: "Rarely" },
            { feature: "AI-powered search", us: "✓", them: "✗" },
            { feature: "Convenience warnings", us: "✓", them: "✗" },
            { feature: "No ads / paywall", us: "✓", them: "Often paywalled" },
            { feature: "Example dates", us: "✓", them: "Sometimes" },
            { feature: "Direct booking link", us: "✓", them: "✓" },
          ].map((row, i) => (
            <div key={row.feature} className="contents">
              <div className={`px-4 py-3 text-sm ${i === 0 ? "bg-bg-elevated font-semibold text-text-primary" : "bg-bg-card text-text-secondary"}`}>
                {row.feature}
              </div>
              <div className={`px-4 py-3 text-sm text-center ${i === 0 ? "bg-bg-elevated font-semibold text-accent" : "bg-bg-card text-green"}`}>
                {row.us}
              </div>
              <div className={`px-4 py-3 text-sm text-center ${i === 0 ? "bg-bg-elevated font-semibold text-text-secondary" : "bg-bg-card text-text-muted"}`}>
                {row.them}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
