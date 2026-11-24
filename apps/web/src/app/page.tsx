import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { ByState } from '@/components/home/ByState';
import { Categories } from '@/components/home/Categories';
import { Hero } from '@/components/home/Hero';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Newsletter } from '@/components/home/Newsletter';
import { OrganizerCta } from '@/components/home/OrganizerCta';
import { TrendingEvents } from '@/components/home/TrendingEvents';
import { SAMPLE_EVENTS, SAMPLE_STATES } from '@/lib/sample-events';

export default function HomePage() {
  // Sample data for now; replaced by GET /api/events/trending and /api/events/count-by-state.
  const events = SAMPLE_EVENTS;

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero featured={events} />
        <HowItWorks />
        <TrendingEvents events={events} />
        <Categories />
        <ByState states={SAMPLE_STATES} />
        <OrganizerCta />
        <Newsletter />
      </main>
      <SiteFooter />
    </>
  );
}
