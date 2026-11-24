import Link from 'next/link';
import { MapPin, Search } from 'lucide-react';
import { Container } from '@shankstix/ui';
import { CATEGORY_LIST } from '@/lib/categories';
import { EventImage } from '@/components/events/EventImage';
import type { EventSummary } from '@/lib/types';

export function Hero({ featured }: { featured: EventSummary[] }) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-brand-600/25 blur-3xl" />
      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
            <span className="size-1.5 rounded-full bg-brand-500" />
            Thousands of events across Africa
          </p>
          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Find your next
            <br />
            <span className="text-brand-500">unforgettable</span> night.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
            Concerts, festivals, tech meetups, food fairs and more. Pay in seconds and walk in with a
            secure QR ticket on your phone.
          </p>

          <form
            action="/events"
            className="mt-8 flex flex-col gap-2 rounded-3xl bg-white p-2 text-ink shadow-2xl shadow-black/40 sm:flex-row sm:items-center sm:rounded-full"
          >
            <label className="flex flex-1 items-center gap-3 px-4 py-2">
              <Search className="size-5 shrink-0 text-muted" />
              <span className="sr-only">Search events</span>
              <input
                name="q"
                placeholder="Search events, artists, venues"
                className="w-full bg-transparent text-base outline-none placeholder:text-muted"
              />
            </label>
            <span className="hidden h-8 w-px bg-line sm:block" />
            <label className="flex items-center gap-3 px-4 py-2 sm:w-44">
              <MapPin className="size-5 shrink-0 text-muted" />
              <span className="sr-only">Location</span>
              <input
                name="state"
                placeholder="Anywhere"
                className="w-full bg-transparent text-base outline-none placeholder:text-muted"
              />
            </label>
            <button
              type="submit"
              className="h-12 rounded-full bg-brand-600 px-7 font-semibold text-white transition hover:bg-brand-700"
            >
              Search
            </button>
          </form>

          <div className="mt-6 flex flex-wrap gap-2">
            {CATEGORY_LIST.map((c) => (
              <Link
                key={c.key}
                href={`/events?category=${c.slug}`}
                className="rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-white/80 transition hover:border-white hover:text-white"
              >
                {c.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative hidden h-[30rem] lg:block" aria-hidden>
          {featured.slice(0, 3).map((e, i) => (
            <div
              key={e.id}
              className={[
                'absolute w-64 overflow-hidden rounded-3xl border-4 border-ink shadow-2xl',
                i === 0 && 'left-4 top-10 h-80 -rotate-6',
                i === 1 && 'right-4 top-0 h-72 rotate-3',
                i === 2 && 'bottom-0 left-1/2 h-72 -translate-x-1/3 rotate-[-1deg]',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <EventImage src={e.imageUrl} title={e.title} category={e.category} sizes="256px" />
            </div>
          ))}
          <div className="absolute bottom-16 left-0 rounded-2xl bg-white px-4 py-3 text-ink shadow-xl">
            <p className="text-xs font-semibold text-muted">Ticket confirmed</p>
            <p className="text-sm font-bold">QR sent to your email ✓</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
