export default function About() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-bold">About NomadDeals</h1>
      <p className="mt-4 text-lg text-text-secondary max-w-2xl leading-relaxed">
        Built for travellers who love smart routing: innovative flight routes, creative connections, and the thrill of a bargain — but still want to arrive feeling human.
      </p>

      {/* Our promise */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold">Our promise</h2>
        <div className="mt-6 grid grid-cols-3 gap-4">
          {[
            {
              title: "Open browsing",
              desc: "No paywall while we learn and grow. Play around, experiment & give us feedback.",
            },
            {
              title: "No ads",
              desc: "For the time being at least; browse without being overwhelmed.",
            },
            {
              title: "Curated deals",
              desc: "We only share deals we would be comfortable using ourselves.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-bg-card p-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How we make money */}
      <div className="mt-12 rounded-2xl border border-border bg-bg-card p-8">
        <h2 className="text-2xl font-bold">How do we make money?</h2>
        <p className="mt-4 text-text-secondary leading-relaxed">
          Affiliate links. If you book through our links, we may earn a small commission at no extra cost to you. That&apos;s how we keep the site ad-free. We may add optional paid features in the future, but never at the expense of user experience.
        </p>
        <div className="mt-6 flex gap-3">
          {["Affiliate-only", "Ad-free", "Transparent"].map((tag) => (
            <span key={tag} className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs text-text-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* What we believe */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold">What we believe</h2>
        <div className="mt-6 space-y-6">
          {[
            {
              title: "Cheap shouldn't mean painful",
              desc: "A 28-hour layover isn't a deal. We flag inconvenience so you can make informed choices.",
            },
            {
              title: "Transparency builds trust",
              desc: "Every deal shows the normal fare, the savings percentage, and example dates. No bait-and-switch.",
            },
            {
              title: "AI should help, not hype",
              desc: "Our AI search helps you discover routes you wouldn't think of. It doesn't upsell or manipulate.",
            },
          ].map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
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
    </div>
  );
}
