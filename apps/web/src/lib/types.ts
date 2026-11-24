// Mirrors enums in packages/db/prisma/schema.prisma. Kept as string unions so client
// components don't import the Prisma client.
export type EventCategory =
  | 'ARTS_AND_CULTURE'
  | 'AI_AND_TECHNOLOGY'
  | 'FOOD_AND_DRINKS'
  | 'SPORTS_AND_FITNESS'
  | 'MUSIC_AND_CONCERTS'
  | 'HEALTH_AND_WELLNESS';

export type EventType = 'PHYSICAL' | 'VIRTUAL' | 'HYBRID';

/** Shape of an event in public lists (cards, search results). */
export type EventSummary = {
  id: string;
  slug: string;
  title: string;
  /** Cloudinary URL. Empty for sample data, which renders a branded placeholder. */
  imageUrl: string;
  date: string; // ISO
  startTime: string | null; // ISO
  location: string | null;
  state: string | null;
  category: EventCategory;
  eventType: EventType;
  /** Cheapest ticket price in NGN; 0 means free. null when no tickets are on sale. */
  minPrice: number | null;
  ticketsSold: number;
  totalTickets: number;
  organizerName: string;
};
