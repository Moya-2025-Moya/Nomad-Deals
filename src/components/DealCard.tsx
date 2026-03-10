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
      className="group block rounded-xl border border-border bg-bg-card p-5 transition hover:border-border-light hover:bg-bg-card-hover"
    >
      <div className="flex items-start justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <span>{deal.from}</span>
            <span className="text-text-muted">({deal.fromCode})</span>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-text-muted">
              <path d="M4 8h8m0 0L9 5m3 3L9 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="text-lg font-semibold text-text-primary">{deal.to}</div>
            <span className="text-sm text-text-muted">({deal.toCode})</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-text-primary">
            {deal.currency}{deal.price}
          </div>
          <div className="mt-0.5 flex items-center justify-end gap-1.5">
            <span className="text-xs text-text-muted line-through">{deal.currency}{deal.normalPrice}</span>
            <span className="rounded-full bg-green-dim px-2 py-0.5 text-xs font-medium text-green">
              -{savings}%
            </span>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4 text-xs text-text-secondary">
        <span className="rounded-md bg-bg-elevated px-2 py-1 font-medium">{deal.cabin}</span>
        <span className="flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-text-muted">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          {deal.airline}
        </span>
        <span>{deal.duration}</span>
        <span>{deal.stops === 0 ? "Direct" : `${deal.stops} stop${deal.stops > 1 ? "s" : ""}`}</span>
        <span className="text-text-muted">{deal.availability}</span>
      </div>

      <div className="mt-3 flex gap-2">
        {deal.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-bg-elevated px-2.5 py-0.5 text-xs text-text-muted">
            #{tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
