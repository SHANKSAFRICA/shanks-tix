import Link from 'next/link';
import { Suspense } from 'react';
import { Container, Logo } from '@shankstix/ui';
import { CurrentYear } from './CurrentYear';

const COLUMNS = [
  {
    title: 'Discover',
    links: [
      { href: '/events', label: 'All events' },
      { href: '/events?when=weekend', label: 'This weekend' },
      { href: '/events?price=free', label: 'Free events' },
      { href: '/events?type=virtual', label: 'Online events' },
    ],
  },
  {
    title: 'Organizers',
    links: [
      { href: '/organizer/events/new', label: 'Create an event' },
      { href: '/organizers', label: 'Why ShanksTix' },
      { href: '/pricing', label: 'Pricing' },
      { href: '/gate', label: 'Gate staff login' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about', label: 'About us' },
      { href: '/support', label: 'Help & support' },
      { href: '/privacy', label: 'Privacy policy' },
      { href: '/terms', label: 'Terms of service' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="max-w-xs">
          <Logo inverted className="text-3xl" />
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Discover events across Africa, buy tickets in seconds and walk in with a secure QR
            e-ticket.
          </p>
        </div>
        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-bold">{col.title}</h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-xs text-white/50 sm:flex-row sm:justify-between">
          <p>© <Suspense fallback="2026"><CurrentYear /></Suspense> ShanksTix. A Shanks Africa company.</p>
          <p>Payments secured by Paystack</p>
        </Container>
      </div>
    </footer>
  );
}
