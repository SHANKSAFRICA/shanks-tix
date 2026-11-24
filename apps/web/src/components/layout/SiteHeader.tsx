import Link from 'next/link';
import { Container, Logo, buttonClasses } from '@shankstix/ui';
import { MobileMenu } from './MobileMenu';

export const NAV_LINKS = [
  { href: '/events', label: 'Explore events' },
  { href: '/organizers', label: 'For organizers' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/support', label: 'Help' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-white/85 backdrop-blur-lg">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" aria-label="ShanksTix home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition hover:bg-black/5 hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href="/login" className={buttonClasses('ghost', 'sm')}>
            Log in
          </Link>
          <Link href="/organizer/events/new" className={buttonClasses('primary', 'sm')}>
            Create event
          </Link>
        </div>

        <MobileMenu links={NAV_LINKS} />
      </Container>
    </header>
  );
}
