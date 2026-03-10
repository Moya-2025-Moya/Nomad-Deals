import Link from "next/link";
import { deals } from "@/lib/deals";

export function generateStaticParams() {
  return deals.map((deal) => ({ id: deal.id }));
}

export default async function DealPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const deal = deals.find((d) => d.id === id);

  if (!deal) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Deal not found</h1>
        <Link href="/" className="mt-4 inline-block text-accent hover:underline">&larr; Back to deals</Link>
      </div>
    );
  }

  const savings = Math.round(((deal.normalPrice - deal.price) / deal.normalPrice) * 100);
  const savedAmount = deal.normalPrice - deal.price;

  const exampleDates = [
    { outbound: "Mar 15", inbound: "Mar 22", price: deal.price },
    { outbound: "Apr 3", inbound: "Apr 10", price: deal.price + 20 },
    { outbound: "May 12", inbound: "May 19", price: deal.price + 10 },
    { outbound: "Jun 8", inbound: "Jun 15", price: deal.price + 35 },
  ];

  const checks = [
    { label: "Direct flight", ok: deal.stops === 0 },
    { label: "Reasonable duration", ok: parseFloat(deal.duration) < 15 },
    { label: "Major airline", ok: true },
    { label: "Main airport", ok: true },
  ];
  const passCount = checks.filter((c) => c.ok).length;

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      {/* Back link */}
      <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-secondary transition">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back to deals
      </Link>

      {/* Header */}
      <div className="mt-6 animate-fade-up">
        <div className="flex items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 text-sm text-text-muted">
              <span>{deal.from} ({deal.fromCode})</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-text-muted">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="mt-2 text-4xl font-bold tracking-tight">{deal.to}</h1>
            <div className="mt-3 flex items-center gap-2.5">
              <span className="rounded-lg bg-bg-elevated px-2.5 py-1 text-sm font-medium text-text-secondary">{deal.cabin}</span>
              <span className="text-sm text-text-secondary">{deal.airline}</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="text-sm text-text-muted">{deal.duration}</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="text-sm text-text-muted">{deal.stops === 0 ? "Direct" : `${deal.stops} stop`}</span>
            </div>
          </div>
          <div className="text-right shrink-0">
            <div className="text-4xl font-bold tracking-tight">{deal.currency}{deal.price}</div>
            <div className="mt-1.5 flex items-center justify-end gap-2">
              <span className="text-sm text-text-muted line-through">{deal.currency}{deal.normalPrice}</span>
              <span className="rounded-md bg-green-dim px-2 py-0.5 text-sm font-semibold text-green border border-green-border">-{savings}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Savings callout */}
      <div className="mt-8 rounded-2xl border border-green-border bg-green-dim p-6 animate-fade-up" style={{ animationDelay: "0.05s" }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/15 text-green">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M12 2v20m5-17H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <div className="text-lg font-bold text-green">Save {deal.currency}{savedAmount}</div>
              <div className="text-sm text-text-secondary">vs. typical {deal.cabin.toLowerCase()} fare on this route</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-green">{savings}%</div>
            <div className="text-xs text-text-muted">cheaper</div>
          </div>
        </div>
      </div>

      {/* Example dates + Route info side by side */}
      <div className="mt-8 grid grid-cols-[1fr_300px] gap-4 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        {/* Example dates */}
        <div className="rounded-2xl border border-border bg-bg-card p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">Example dates</h2>
            <span className="text-xs text-text-muted">Click to check availability</span>
          </div>
          <div className="mt-4 space-y-2">
            {exampleDates.map((d, i) => (
              <div
                key={d.outbound}
                className="card-shine flex items-center justify-between rounded-xl border border-border bg-bg/50 px-5 py-3.5 transition hover:border-accent/30 cursor-pointer group"
              >
                <div className="flex items-center gap-5">
                  <div>
                    <div className="text-[10px] font-medium text-text-muted uppercase tracking-wider">Out</div>
                    <div className="font-semibold text-sm">{d.outbound}</div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-border group-hover:text-accent/40 transition">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div>
                    <div className="text-[10px] font-medium text-text-muted uppercase tracking-wider">Return</div>
                    <div className="font-semibold text-sm">{d.inbound}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">{deal.currency}{d.price}</span>
                  {i === 0 && <span className="rounded-md bg-green-dim text-green text-[10px] font-bold px-1.5 py-0.5 border border-green-border">BEST</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: Route info + Convenience check */}
        <div className="space-y-4">
          <div className="rounded-2xl border border-border bg-bg-card p-6">
            <h3 className="text-xs font-semibold text-text-muted uppercase tracking-widest">Route details</h3>
            <div className="mt-4 space-y-3 text-sm">
              {[
                { label: "Airline", value: deal.airline },
                { label: "Duration", value: deal.duration },
                { label: "Stops", value: deal.stops === 0 ? "Direct" : `${deal.stops} stop` },
                { label: "Cabin", value: deal.cabin },
                { label: "Available", value: deal.availability },
              ].map((row) => (
                <div key={row.label} className="flex justify-between">
                  <span className="text-text-muted">{row.label}</span>
                  <span className="font-medium text-text-secondary">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-bg-card p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-text-muted uppercase tracking-widest">Convenience</h3>
              <span className="text-xs font-bold text-green">{passCount}/{checks.length}</span>
            </div>
            <div className="mt-4 space-y-2.5">
              {checks.map((check) => (
                <div key={check.label} className="flex items-center gap-2.5 text-sm">
                  <span className={`flex h-5 w-5 items-center justify-center rounded-md text-xs ${check.ok ? "bg-green-dim text-green border border-green-border" : "bg-orange-dim text-orange border border-orange/20"}`}>
                    {check.ok ? "\u2713" : "!"}
                  </span>
                  <span className="text-text-secondary">{check.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/5 to-purple/5 p-8 text-center animate-fade-up" style={{ animationDelay: "0.15s" }}>
        <h3 className="text-lg font-bold">Ready to book?</h3>
        <p className="mt-1.5 text-sm text-text-secondary">Check this fare directly on the airline&apos;s website.</p>
        <button className="mt-5 rounded-xl bg-accent px-10 py-3.5 text-sm font-medium text-white transition hover:bg-accent-hover shadow-[0_0_30px_var(--color-accent-glow)]">
          Book on {deal.airline} &rarr;
        </button>
      </div>
    </div>
  );
}
