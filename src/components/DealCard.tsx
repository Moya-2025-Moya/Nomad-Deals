import Link from "next/link";

export interface Deal {
  id: string;
  from: string;
  fromCode: string;
  to: string;
  toCode: string;
  price: number;
  currency: string;
  normalPrice: number;
  cabin: string;
  airline: string;
  duration: string;
  stops: number;
  availability: string;
  tags: string[];
}

export default function DealCard({ deal }: { deal: Deal }) {
  const savings = Math.round(((deal.normalPrice - deal.price) / deal.normalPrice) * 100);

  return (
    <Link
      href={`/deal/${deal.id}`}
      className="card-shine group block rounded-2xl border border-border bg-bg-card p-5 transition-all duration-200 hover:border-border-light hover:bg-bg-card-hover hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
    >
      {/* Top: Route + Price */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-xs text-text-muted">{deal.from} ({deal.fromCode})</div>
          <div className="mt-1.5 flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-bg-elevated text-xs font-bold text-text-muted group-hover:bg-accent/10 group-hover:text-accent transition">
              {deal.toCode}
            </div>
            <div>
              <div className="text-[17px] font-semibold text-text-primary leading-tight">{deal.to}</div>
              <div className="text-xs text-text-muted mt-0.5">{deal.airline} &middot; {deal.duration} &middot; {deal.stops === 0 ? "Direct" : `${deal.stops} stop`}</div>
            </div>
          </div>
        </div>
        <div className="text-right shrink-0">
          <div className="text-2xl font-bold text-text-primary tracking-tight">
            {deal.currency}{deal.price}
          </div>
          <div className="mt-1 flex items-center justify-end gap-2">
            <span className="text-xs text-text-muted line-through">{deal.currency}{deal.normalPrice}</span>
            <span className="rounded-md bg-green-dim px-1.5 py-0.5 text-xs font-semibold text-green border border-green-border">
              -{savings}%
            </span>
          </div>
        </div>
      </div>

      {/* Bottom: Meta row */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="rounded-md bg-bg-elevated px-2 py-1 text-[11px] font-medium text-text-secondary">{deal.cabin}</span>
          <span className="text-[11px] text-text-muted">{deal.availability}</span>
        </div>
        <div className="text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
          View deal →
        </div>
      </div>
    </Link>
  );
}
