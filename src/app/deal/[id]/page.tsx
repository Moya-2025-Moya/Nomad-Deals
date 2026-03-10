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
        <Link href="/" className="mt-4 inline-block text-accent hover:underline">← Back to deals</Link>
      </div>
    );
  }

  const savings = Math.round(((deal.normalPrice - deal.price) / deal.normalPrice) * 100);

  const exampleDates = [
    { outbound: "Mar 15", inbound: "Mar 22", price: deal.price },
    { outbound: "Apr 3", inbound: "Apr 10", price: deal.price + 20 },
    { outbound: "May 12", inbound: "May 19", price: deal.price + 10 },
    { outbound: "Jun 8", inbound: "Jun 15", price: deal.price + 35 },
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <Link href="/" className="text-sm text-text-muted hover:text-text-secondary transition">← Back to deals</Link>

      <div className="mt-6 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-text-secondary">{deal.from} ({deal.fromCode})</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-text-muted">
              <path d="M5 10h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="mt-1 text-4xl font-bold">{deal.to} ({deal.toCode})</h1>
          <div className="mt-3 flex items-center gap-3">
            <span className="rounded-md bg-bg-elevated px-2.5 py-1 text-sm font-medium text-text-secondary">{deal.cabin}</span>
            <span className="text-sm text-text-secondary">{deal.airline}</span>
            <span className="text-sm text-text-muted">{deal.duration} · {deal.stops === 0 ? "Direct" : `${deal.stops} stop`}</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-4xl font-bold">{deal.currency}{deal.price}</div>
          <div className="mt-1 flex items-center justify-end gap-2">
            <span className="text-sm text-text-muted line-through">{deal.currency}{deal.normalPrice}</span>
            <span className="rounded-full bg-green-dim px-2.5 py-0.5 text-sm font-medium text-green">-{savings}%</span>
          </div>
          <p className="mt-1 text-xs text-text-muted">vs. typical {deal.cabin.toLowerCase()} fare</p>
        </div>
      </div>

      {/* Savings callout */}
      <div className="mt-8 rounded-xl border border-green/20 bg-green-dim/20 p-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green/15 text-green">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2v16m4-12H7.5a2.5 2.5 0 000 5h5a2.5 2.5 0 010 5H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="font-semibold text-green">You save {deal.currency}{deal.normalPrice - deal.price} ({savings}% off)</div>
            <div className="text-sm text-text-secondary">Compared to the typical {deal.cabin.toLowerCase()} fare on this route</div>
          </div>
        </div>
      </div>

      {/* Example dates */}
      <div className="mt-10">
        <h2 className="text-xl font-bold">Example dates</h2>
        <p className="mt-1 text-sm text-text-muted">Click a date pair to check availability on the airline&apos;s site.</p>
        <div className="mt-4 space-y-2">
          {exampleDates.map((d) => (
            <div
              key={d.outbound}
              className="flex items-center justify-between rounded-xl border border-border bg-bg-card px-5 py-4 transition hover:border-border-light hover:bg-bg-card-hover cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-xs text-text-muted">Outbound</div>
                  <div className="font-medium">{d.outbound}</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-text-muted">
                  <path d="M4 8h8m0 0L9 5m3 3L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div>
                  <div className="text-xs text-text-muted">Return</div>
                  <div className="font-medium">{d.inbound}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-bold">{deal.currency}{d.price}</span>
                <span className="text-xs text-text-muted">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Route info */}
      <div className="mt-10 grid grid-cols-2 gap-4">
        <div className="rounded-xl border border-border bg-bg-card p-6">
          <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider">Route details</h3>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-text-secondary">Airline</span>
              <span className="font-medium">{deal.airline}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Duration</span>
              <span className="font-medium">{deal.duration}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Stops</span>
              <span className="font-medium">{deal.stops === 0 ? "Direct" : `${deal.stops} stop`}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Cabin</span>
              <span className="font-medium">{deal.cabin}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Availability</span>
              <span className="font-medium">{deal.availability}</span>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-bg-card p-6">
          <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider">Convenience check</h3>
          <div className="mt-4 space-y-3">
            {[
              { label: "Direct flight", ok: deal.stops === 0 },
              { label: "Reasonable duration", ok: parseFloat(deal.duration) < 15 },
              { label: "Major airline", ok: true },
              { label: "Main airport", ok: true },
            ].map((check) => (
              <div key={check.label} className="flex items-center gap-2 text-sm">
                <span className={check.ok ? "text-green" : "text-orange"}>
                  {check.ok ? "✓" : "⚠"}
                </span>
                <span className={check.ok ? "text-text-secondary" : "text-orange"}>
                  {check.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="mt-6 flex gap-2">
        {deal.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-bg-elevated px-3 py-1 text-xs text-text-muted">
            #{tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 rounded-xl border border-accent/30 bg-accent/5 p-6 text-center">
        <p className="text-sm text-text-secondary">Ready to book? Click below to check this fare on the airline&apos;s website.</p>
        <button className="mt-4 rounded-xl bg-accent px-8 py-3 text-sm font-medium text-white transition hover:bg-accent-hover">
          Check on {deal.airline} →
        </button>
      </div>
    </div>
  );
}
