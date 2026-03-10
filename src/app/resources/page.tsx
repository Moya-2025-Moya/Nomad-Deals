import Link from "next/link";

const articles = [
  {
    title: "Positioning flights 101",
    desc: "Use a cheap hop to unlock a much bigger long-haul bargain — without missing your main flight.",
    tag: "Strategy",
    tagColor: "text-purple",
  },
  {
    title: "Flexible dates: the hidden superpower",
    desc: "Even ±3 days can shift pricing massively. Learn how to widen your window safely.",
    tag: "Search",
    tagColor: "text-blue",
  },
  {
    title: "How to spot \"too good to be true\" deals",
    desc: "Mistake fares are real, but not all cheap fares are sustainable. Here's how to sanity-check.",
    tag: "Risk",
    tagColor: "text-orange",
  },
  {
    title: "Layover strategy that doesn't ruin your trip",
    desc: "Short enough to move, long enough to breathe. Picking connections like a pro.",
    tag: "Comfort",
    tagColor: "text-green",
  },
  {
    title: "Business class deals without the influencer nonsense",
    desc: "Routes, seasons, and hubs where business class pricing actually breaks.",
    tag: "Premium",
    tagColor: "text-accent",
  },
  {
    title: "Baggage rules that kill \"cheap\" itineraries",
    desc: "How luggage, separate tickets, and tight connections can destroy your savings.",
    tag: "Rules",
    tagColor: "text-orange",
  },
  {
    title: "Airport code cheat sheet",
    desc: "How to use city codes vs airport codes, and when it matters.",
    tag: "Tools",
    tagColor: "text-blue",
  },
  {
    title: "Booking timing: myths vs reality",
    desc: "When \"book Tuesday\" is nonsense, and what signals actually matter.",
    tag: "Timing",
    tagColor: "text-purple",
  },
  {
    title: "Stopovers: when they're a feature, not a bug",
    desc: "Turn a connection city into a mini trip without blowing up your total travel time.",
    tag: "Adventure",
    tagColor: "text-green",
  },
  {
    title: "Deal alerts (Phase 2)",
    desc: "Email/WhatsApp alerts for routes you care about — powered by your preferences.",
    tag: "Coming Soon",
    tagColor: "text-text-muted",
  },
];

export default function Resources() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-bold">Travel Hacks</h1>
      <p className="mt-4 text-lg text-text-secondary max-w-2xl">
        Practical playbooks for finding better flights — and avoiding the traps that make &ldquo;cheap&rdquo; expensive.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-4">
        {articles.map((article) => (
          <Link
            key={article.title}
            href="#"
            className="group rounded-xl border border-border bg-bg-card p-6 transition hover:border-border-light hover:bg-bg-card-hover"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition pr-4">
                {article.title}
              </h3>
              <span className={`shrink-0 rounded-full bg-bg-elevated px-2.5 py-0.5 text-xs ${article.tagColor}`}>
                {article.tag}
              </span>
            </div>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">{article.desc}</p>
            <div className="mt-4 text-xs text-text-muted group-hover:text-text-secondary transition">
              Read article →
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-border bg-bg-card p-8 text-center">
        <h2 className="text-xl font-bold">Want a topic covered?</h2>
        <p className="mt-2 text-sm text-text-secondary">
          We&apos;re adding new guides regularly. Drop us a note and we&apos;ll prioritise it.
        </p>
        <button className="mt-4 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition hover:bg-accent-hover">
          Suggest a topic
        </button>
      </div>
    </div>
  );
}
