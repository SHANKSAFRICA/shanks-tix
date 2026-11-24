import Link from 'next/link';
import { Container, buttonClasses } from '@shankstix/ui';
import { EventCard } from '@/components/events/EventCard';
import type { EventSummary } from '@/lib/types';
import { SectionHeading } from './SectionHeading';

export function TrendingEvents({ events }: { events: EventSummary[] }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Trending now" title="Events people are buying" href="/events" />
        {/* Swipeable row on phones, grid from tablet up. */}
        <div className="-mx-4 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:mt-10 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {events.map((e) => (
            <div key={e.id} className="w-[78%] shrink-0 snap-start sm:w-auto">
              <EventCard event={e} />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center sm:hidden">
          <Link href="/events" className={buttonClasses('outline', 'md')}>
            See all events
          </Link>
        </div>
      </Container>
    </section>
  );
}
