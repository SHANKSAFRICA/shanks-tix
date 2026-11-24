import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Container, cn } from '@shankstix/ui';
import { CATEGORY_LIST } from '@/lib/categories';
import { SectionHeading } from './SectionHeading';

export function Categories() {
  return (
    <section className="bg-canvas py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="Browse" title="What are you into?" />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-4 lg:grid-cols-3">
          {CATEGORY_LIST.map((c) => (
            <Link
              key={c.key}
              href={`/events?category=${c.slug}`}
              className={cn(
                'group relative flex h-32 flex-col justify-end overflow-hidden rounded-card bg-gradient-to-br p-4 text-white sm:h-40 sm:p-6',
                c.gradient,
              )}
            >
              <ArrowUpRight className="absolute right-4 top-4 size-5 sm:right-5 sm:top-5 sm:size-6 opacity-60 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
              <h3 className="text-lg font-black leading-tight tracking-tight sm:text-2xl">{c.label}</h3>
              <p className="mt-1 hidden text-sm text-white/75 sm:block">{c.blurb}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
