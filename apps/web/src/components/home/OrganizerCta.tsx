import Link from 'next/link';
import { BarChart3, Megaphone, ScanLine, Tag, Users, Wallet } from 'lucide-react';
import { Container, buttonClasses } from '@shankstix/ui';

const FEATURES = [
  { icon: Wallet, title: 'Fast payouts', body: 'Sales land in your wallet. Withdraw to your bank anytime.' },
  { icon: ScanLine, title: 'QR check-in', body: 'Invite gate staff and scan tickets from any phone.' },
  { icon: Tag, title: 'Discount codes', body: 'Early bird, group and promo codes in a few clicks.' },
  { icon: Megaphone, title: 'Email & SMS campaigns', body: 'Reach past attendees and fill every seat.' },
  { icon: Users, title: 'Co-hosts', body: 'Bring in partners with the right level of access.' },
  { icon: BarChart3, title: 'Live analytics', body: 'Track sales, page views and revenue in real time.' },
];

export function OrganizerCta() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="overflow-hidden rounded-[2rem] bg-ink text-white">
          <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_1.3fr] lg:p-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-brand-500">
                For organizers
              </p>
              <h2 className="mt-3 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl">
                Sell out your next event.
              </h2>
              <p className="mt-5 max-w-md text-white/70">
                Everything you need to sell tickets, manage your guest list and get paid, in one
                dashboard. Free events are always free to host.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/organizer/events/new" className={buttonClasses('primary', 'lg')}>
                  Create your event
                </Link>
                <Link
                  href="/pricing"
                  className={buttonClasses('outlineLight', 'lg')}
                >
                  See pricing
                </Link>
              </div>
            </div>
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {FEATURES.map((f) => (
                <div key={f.title}>
                  <f.icon className="size-6 text-brand-500" />
                  <h3 className="mt-3 font-bold">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
