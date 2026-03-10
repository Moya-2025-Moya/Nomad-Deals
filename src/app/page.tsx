import ChatBox from "@/components/ChatBox";
import DealCard from "@/components/DealCard";
import { deals } from "@/lib/deals";

const regions = ["All regions", "USA", "Canada", "Caribbean", "South America", "UK & Ireland", "Europe", "MENA", "Africa", "Central & South Asia", "East Asia", "Oceania"];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-green/20 bg-green-dim/30 px-3 py-1 text-xs text-green">
              <span className="h-1.5 w-1.5 rounded-full bg-green" />
              100% Free &middot; No ads &middot; No paywall
            </div>
            <h1 className="mt-6 text-5xl font-bold tracking-tight">
              Find your flight.<br />
              <span className="text-text-secondary">Save the difference.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-text-secondary">
              Tell us where you want to go — or let us surprise you. AI-powered search finds the cheapest routes so you don&apos;t have to.
            </p>
          </div>

          {/* Chat Box */}
          <div className="mt-10">
            <ChatBox />
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Trending deals</h2>
          <span className="text-sm text-text-muted">{deals.length} deals available</span>
        </div>

        {/* Region filters */}
        <div className="mt-6 flex flex-wrap gap-2">
          {regions.map((region, i) => (
            <button
              key={region}
              className={`rounded-full px-3.5 py-1.5 text-sm transition ${
                i === 0
                  ? "bg-text-primary text-bg font-medium"
                  : "bg-bg-card text-text-secondary border border-border hover:border-border-light"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Deal grid */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </section>

      {/* How it works mini */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-3 gap-6">
          {[
            { title: "Ask or search", desc: "Type a destination or describe your dream trip. Our AI handles the rest." },
            { title: "Compare instantly", desc: "See deals with real savings percentages. Know exactly how much you're saving." },
            { title: "Book confidently", desc: "Click through to book directly on trusted airlines and travel platforms." },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-bg-card p-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-border bg-bg-card p-10">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold">Why travellers trust us</h2>
              <p className="mt-3 text-text-secondary leading-relaxed">
                No ads. No paywall. No hidden deals. We keep it transparent: every deal shows example dates, savings vs. normal fares, and a direct booking link.
              </p>
              <div className="mt-6 flex gap-6">
                {[
                  { value: "42%", label: "avg. savings" },
                  { value: "800+", label: "deals found" },
                  { value: "0", label: "ads shown" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-accent">{stat.value}</div>
                    <div className="text-xs text-text-muted">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                { quote: "This feels like SecretFlying, but I can actually browse.", who: "Early tester" },
                { quote: "The convenience warning saved me from a 28-hour 'deal'.", who: "Digital nomad" },
                { quote: "Example dates + one click to book is perfect.", who: "Weekend traveller" },
              ].map((t) => (
                <div key={t.who} className="rounded-xl bg-bg-elevated px-5 py-4">
                  <p className="text-sm text-text-primary">&ldquo;{t.quote}&rdquo;</p>
                  <p className="mt-1 text-xs text-text-muted">&mdash; {t.who}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
