import { Container } from '@shankstix/ui';

export function Newsletter() {
  return (
    <section className="bg-brand-600 text-white">
      <Container className="flex flex-col items-start gap-6 py-14 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-3xl font-black tracking-tight">Never miss a good one.</h2>
          <p className="mt-2 text-white/80">The best events in your city, every Thursday.</p>
        </div>
        {/* Wired to POST /api/newsletter/emails once the API is connected. */}
        <form className="flex w-full max-w-md gap-2">
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@example.com"
            className="h-12 min-w-0 flex-1 rounded-full bg-white px-5 text-ink outline-none placeholder:text-muted"
          />
          <button
            type="submit"
            className="h-12 shrink-0 rounded-full bg-ink px-6 font-semibold transition hover:bg-black"
          >
            Subscribe
          </button>
        </form>
      </Container>
    </section>
  );
}
