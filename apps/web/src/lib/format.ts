const TZ = 'Africa/Lagos';

const naira = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
  maximumFractionDigits: 0,
});

export function formatPrice(amount: number | null): string {
  if (amount === null) return 'Sold out';
  if (amount === 0) return 'Free';
  return naira.format(amount);
}

/** "Sat, 14 Dec" */
export function formatEventDay(iso: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    timeZone: TZ,
  }).format(new Date(iso));
}

/** "7:00 PM" */
export function formatEventTime(iso: string): string {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: TZ,
  }).format(new Date(iso));
}

/** { month: "DEC", day: "14" } for date badges. */
export function dateBadge(iso: string) {
  const d = new Date(iso);
  return {
    month: new Intl.DateTimeFormat('en-GB', { month: 'short', timeZone: TZ })
      .format(d)
      .toUpperCase(),
    day: new Intl.DateTimeFormat('en-GB', { day: 'numeric', timeZone: TZ }).format(d),
  };
}
