import ChatBox from "@/components/ChatBox";
import DealCard from "@/components/DealCard";
import { deals } from "@/lib/deals";

const regions = ["All", "Americas", "Europe", "Asia", "MENA", "Africa", "Oceania"];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-accent/[0.07] blur-[120px]" />
          <div className="absolute top-20 left-1/4 h-[300px] w-[400px] rounded-full bg-blue/[0.04] blur-[100px]" />
          <div className="absolute top-40 right-1/4 h-[250px] w-[350px] rounded-full bg-purple/[0.04] blur-[100px]" />
        </div>
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(108,92,231,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(108,92,231,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-16">
          <div className="text-center animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-green-border bg-green-dim px-4 py-1.5 text-xs font-medium text-green">
              <span className="h-1.5 w-1.5 rounded-full bg-green animate-pulse-dot" />
              100% Free &middot; No ads &middot; No paywall
            </div>
            <h1 className="mt-8 text-6xl font-extrabold tracking-tight leading-[1.1]">
              Find your next flight.
              <br />
              <span className="text-gradient">Save the difference.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-text-secondary leading-relaxed">
              Tell us where you want to go — or describe your dream trip. Our AI finds the cheapest routes and shows you exactly how much you save.
            </p>
          </div>

          {/* Chat Box */}
          <div className="mt-12 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <ChatBox />
          </div>
        </div>
      </section>

      {/* Deals Section */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Trending deals</h2>
            <p className="mt-1.5 text-sm text-text-muted">{deals.length} curated deals, updated daily</p>
          </div>
        </div>

        {/* Region filters */}
        <div className="mt-6 flex gap-1.5">
          {regions.map((region, i) => (
            <button
              key={region}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                i === 0
                  ? "bg-accent text-white shadow-[0_0_16px_var(--color-accent-glow)]"
                  : "text-text-secondary hover:bg-bg-elevated hover:text-text-primary"
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

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
          <p className="mt-2 text-text-secondary">Three steps to your next adventure</p>
        </div>
        <div className="mt-10 grid grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              color: "blue",
              title: "Ask or search",
              desc: "Type a destination or describe your dream trip. Our AI understands natural language and structured queries.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-green">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              color: "green",
              title: "See real savings",
              desc: "Every deal shows the normal price and exact percentage saved. No inflated comparisons.",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
                  <path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              color: "accent",
              title: "Book confidently",
              desc: "Click through to book on the airline directly. We show example dates so you land on the right page.",
            },
          ].map((item) => (
            <div key={item.title} className="group rounded-2xl border border-border bg-bg-card p-7 transition hover:border-border-light">
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${item.color}/10 transition group-hover:bg-${item.color}/15`}>
                {item.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-border bg-bg-card overflow-hidden">
          <div className="grid grid-cols-2">
            {/* Left: Stats + copy */}
            <div className="p-10 border-r border-border">
              <h2 className="text-3xl font-bold tracking-tight">Why travellers<br />trust us</h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Transparent pricing, honest convenience warnings, and direct booking links. No tricks.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { value: "42%", label: "avg. savings", color: "text-green" },
                  { value: "800+", label: "deals found", color: "text-blue" },
                  { value: "0", label: "ads shown", color: "text-accent" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-bg-elevated/50 p-4 text-center">
                    <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                    <div className="text-[11px] text-text-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: Testimonials */}
            <div className="p-10 space-y-4">
              {[
                { quote: "This feels like SecretFlying, but I can actually browse and compare.", who: "Early tester", role: "London" },
                { quote: "The convenience warning saved me from a 28-hour 'deal'. Worth it just for that.", who: "Digital nomad", role: "Bangkok" },
                { quote: "Example dates + one click to book. No other deal site does this properly.", who: "Weekend traveller", role: "Berlin" },
              ].map((t) => (
                <div key={t.who} className="rounded-xl border border-border/50 bg-bg-elevated/30 px-5 py-4">
                  <p className="text-sm text-text-primary leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-accent/20" />
                    <span className="text-xs text-text-muted">{t.who} &middot; {t.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="relative rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/5 via-accent/10 to-purple/5 p-12 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[200px] w-[400px] rounded-full bg-accent/[0.08] blur-[80px]" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight">Ready to find your next deal?</h2>
            <p className="mt-3 text-text-secondary">Start searching — no signup required.</p>
            <button className="mt-6 rounded-xl bg-accent px-8 py-3 text-sm font-medium text-white transition hover:bg-accent-hover shadow-[0_0_30px_var(--color-accent-glow)]" onClick={undefined}>
              Start searching
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
