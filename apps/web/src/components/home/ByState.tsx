import Link from 'next/link';
import { Container } from '@shankstix/ui';
import { SectionHeading } from './SectionHeading';

export function ByState({ states }: { states: { state: string; count: number }[] }) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Near you" title="Popular cities" href="/events" linkLabel="All locations" />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {states.map((s) => (
            <Link
              key={s.state}
              href={`/events?state=${encodeURIComponent(s.state)}`}
              className="rounded-2xl border border-line p-5 transition hover:border-ink"
            >
              <p className="text-lg font-bold">{s.state === 'FCT' ? 'Abuja' : s.state}</p>
              <p className="mt-1 text-sm text-muted">{s.count} events</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
