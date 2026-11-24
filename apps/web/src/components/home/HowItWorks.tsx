import { CreditCard, QrCode, Search } from 'lucide-react';
import { Container } from '@shankstix/ui';

const STEPS = [
  {
    icon: Search,
    title: 'Find your event',
    body: 'Browse by city, category or date, or search for an artist or venue.',
  },
  {
    icon: CreditCard,
    title: 'Pay in seconds',
    body: 'Card, bank transfer or USSD through Paystack. Split payments with friends.',
  },
  {
    icon: QrCode,
    title: 'Scan and walk in',
    body: 'Your QR ticket lands in your email and your ShanksTix account instantly.',
  },
];

export function HowItWorks() {
  return (
    <section className="border-y border-line py-16 sm:py-20">
      <Container className="grid gap-10 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <div key={s.title} className="flex gap-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
              <s.icon className="size-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted">STEP {i + 1}</p>
              <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
