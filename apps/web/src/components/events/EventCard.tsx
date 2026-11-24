import Link from 'next/link';
import { MapPin, Video } from 'lucide-react';
import { dateBadge, formatEventDay, formatEventTime, formatPrice } from '@/lib/format';
import type { EventSummary } from '@/lib/types';
import { EventImage } from './EventImage';

export function EventCard({ event }: { event: EventSummary }) {
  const badge = dateBadge(event.date);
  const left = event.totalTickets - event.ticketsSold;
  const sellingFast = event.totalTickets > 0 && left > 0 && left / event.totalTickets <= 0.15;
  const soldOut = event.minPrice === null || (event.totalTickets > 0 && left <= 0);
  const online = event.eventType === 'VIRTUAL';

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex flex-col overflow-hidden rounded-card border border-line bg-white transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-canvas">
        <EventImage
          src={event.imageUrl}
          title={event.title}
          category={event.category}
          className="transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-col items-center rounded-xl bg-white px-2.5 py-1.5 text-center shadow-sm">
          <span className="text-[10px] font-bold tracking-wider text-brand-600">{badge.month}</span>
          <span className="text-lg font-black leading-none text-ink">{badge.day}</span>
        </div>
        {(sellingFast || soldOut) && (
          <span className="absolute right-3 top-3 rounded-full bg-ink px-2.5 py-1 text-[11px] font-bold text-white">
            {soldOut ? 'Sold out' : 'Selling fast'}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs font-semibold text-brand-600">
          {formatEventDay(event.date)}
          {event.startTime && ` · ${formatEventTime(event.startTime)}`}
        </p>
        <h3 className="line-clamp-2 text-base font-bold leading-snug text-ink">{event.title}</h3>
        <p className="flex items-center gap-1.5 text-sm text-muted">
          {online ? <Video className="size-4 shrink-0" /> : <MapPin className="size-4 shrink-0" />}
          <span className="truncate">{online ? 'Online event' : event.location}</span>
        </p>
        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="text-sm text-muted">by {event.organizerName}</span>
          <span className="text-sm font-bold text-ink">
            {soldOut ? 'Sold out' : event.minPrice === 0 ? 'Free' : `From ${formatPrice(event.minPrice)}`}
          </span>
        </div>
      </div>
    </Link>
  );
}
