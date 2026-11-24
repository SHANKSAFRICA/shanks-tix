import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function SectionHeading({
  eyebrow,
  title,
  href,
  linkLabel = 'See all',
}: {
  eyebrow?: string;
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        {eyebrow && (
          <p className="text-sm font-bold uppercase tracking-widest text-brand-600">{eyebrow}</p>
        )}
        <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">{title}</h2>
      </div>
      {href && (
        <Link
          href={href}
          className="group hidden shrink-0 items-center gap-1 text-sm font-semibold text-ink sm:inline-flex"
        >
          {linkLabel}
          <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
        </Link>
      )}
    </div>
  );
}
