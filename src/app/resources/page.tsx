import Link from "next/link";

const featured = {
  title: "Positioning flights 101",
  desc: "Use a cheap hop to unlock a much bigger long-haul bargain \u2014 the single most powerful hack for cutting international flight costs.",
  tag: "Strategy",
};

const articles = [
  {
    title: "Flexible dates: the hidden superpower",
    desc: "Even \u00B13 days can shift pricing massively. Learn how to widen your window safely.",
    tag: "Search",
    color: "bg-blue/10 text-blue",
  },
  {
    title: "How to spot \"too good to be true\" deals",
    desc: "Mistake fares are real, but not all cheap fares are sustainable. Here's how to sanity-check.",
    tag: "Risk",
    color: "bg-orange/10 text-orange",
  },
  {
    title: "Layover strategy that doesn't ruin your trip",
    desc: "Short enough to move, long enough to breathe. Picking connections like a pro.",
    tag: "Comfort",
    color: "bg-green/10 text-green",
  },
  {
    title: "Business class without the influencer nonsense",
    desc: "Routes, seasons, and hubs where business class pricing actually breaks.",
    tag: "Premium",
    color: "bg-accent/10 text-accent",
  },
  {
    title: "Baggage rules that kill \"cheap\" itineraries",
    desc: "How luggage, separate tickets, and tight connections can destroy your savings.",
    tag: "Rules",
    color: "bg-orange/10 text-orange",
  },
  {
    title: "Airport code cheat sheet",
    desc: "How to use city codes vs airport codes, and when it matters for getting better prices.",
    tag: "Tools",
    color: "bg-blue/10 text-blue",
  },
  {
    title: "Booking timing: myths vs reality",
    desc: "When \"book Tuesday\" is nonsense, and what signals actually matter.",
    tag: "Timing",
    color: "bg-purple/10 text-purple",
  },
  {
    title: "Stopovers: when they're a feature, not a bug",
    desc: "Turn a connection city into a mini trip without blowing up your total travel time.",
    tag: "Adventure",
    color: "bg-green/10 text-green",
  },
];

export default function Resources() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="animate-fade-up">
        <h1 className="text-4xl font-bold tracking-tight">Travel Hacks</h1>
        <p className="mt-4 text-lg text-text-secondary max-w-2xl">
          Playbooks for finding better flights \u2014 and dodging the traps that make &ldquo;cheap&rdquo; expensive.
        </p>
      </div>

      {/* Featured article */}
      <Link href="#" className="group mt-10 block rounded-2xl border border-border bg-bg-card overflow-hidden transition hover:border-border-light animate-fade-up" style={{ animationDelay: "0.1s" }}>
        <div className="grid grid-cols-[1fr_auto] items-center">
          <div className="p-8">
            <span className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">{featured.tag}</span>
            <h2 className="mt-4 text-2xl font-bold group-hover:text-accent transition">{featured.title}</h2>
            <p className="mt-2 text-text-secondary leading-relaxed max-w-lg">{featured.desc}</p>
            <div className="mt-5 text-sm text-text-muted group-hover:text-accent transition">Read guide →</div>
          </div>
          <div className="flex h-full w-48 items-center justify-center bg-gradient-to-br from-accent/5 to-purple/10 text-accent/30">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </Link>

      {/* Article grid */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        {articles.map((article, i) => (
          <Link
            key={article.title}
            href="#"
            className="group card-shine rounded-2xl border border-border bg-bg-card p-6 transition hover:border-border-light hover:bg-bg-card-hover animate-fade-up"
            style={{ animationDelay: `${0.15 + i * 0.05}s` }}
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-[15px] font-semibold text-text-primary group-hover:text-accent transition leading-snug">
                {article.title}
              </h3>
              <span className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] font-semibold ${article.color}`}>
                {article.tag}
              </span>
            </div>
            <p className="mt-2.5 text-sm text-text-secondary leading-relaxed">{article.desc}</p>
            <div className="mt-4 text-xs text-text-muted group-hover:text-text-secondary transition">Read article →</div>
          </Link>
        ))}
      </div>

      {/* Coming soon + CTA */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-border bg-bg-card p-6 opacity-60">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-[15px] font-semibold text-text-primary leading-snug">Deal alerts (Phase 2)</h3>
            <span className="shrink-0 rounded-md bg-bg-elevated px-2 py-0.5 text-[11px] font-semibold text-text-muted">Coming Soon</span>
          </div>
          <p className="mt-2.5 text-sm text-text-secondary leading-relaxed">Email/WhatsApp alerts for routes you care about \u2014 powered by your preferences.</p>
        </div>
        <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 flex flex-col items-center justify-center text-center">
          <h3 className="text-[15px] font-semibold">Want a topic covered?</h3>
          <p className="mt-1.5 text-sm text-text-secondary">We add new guides regularly.</p>
          <button className="mt-4 rounded-lg bg-accent px-5 py-2 text-sm font-medium text-white transition hover:bg-accent-hover shadow-[0_0_16px_var(--color-accent-glow)]">
            Suggest a topic
          </button>
        </div>
      </div>
    </div>
  );
}
