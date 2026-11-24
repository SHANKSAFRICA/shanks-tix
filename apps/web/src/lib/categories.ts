import type { EventCategory } from './types';

export const CATEGORIES: Record<
  EventCategory,
  { label: string; slug: string; gradient: string; blurb: string }
> = {
  MUSIC_AND_CONCERTS: {
    label: 'Music & Concerts',
    slug: 'music',
    gradient: 'from-brand-600 via-brand-800 to-black',
    blurb: 'Live shows, festivals and album launches',
  },
  ARTS_AND_CULTURE: {
    label: 'Arts & Culture',
    slug: 'arts',
    gradient: 'from-amber-500 via-orange-700 to-stone-900',
    blurb: 'Exhibitions, theatre, film and fashion',
  },
  AI_AND_TECHNOLOGY: {
    label: 'Tech & AI',
    slug: 'tech',
    gradient: 'from-sky-500 via-indigo-700 to-slate-950',
    blurb: 'Meetups, summits and hackathons',
  },
  FOOD_AND_DRINKS: {
    label: 'Food & Drinks',
    slug: 'food',
    gradient: 'from-yellow-400 via-amber-600 to-red-900',
    blurb: 'Food fairs, tastings and brunches',
  },
  SPORTS_AND_FITNESS: {
    label: 'Sports & Fitness',
    slug: 'sports',
    gradient: 'from-emerald-500 via-teal-700 to-slate-950',
    blurb: 'Matches, races and fitness bootcamps',
  },
  HEALTH_AND_WELLNESS: {
    label: 'Health & Wellness',
    slug: 'wellness',
    gradient: 'from-pink-400 via-rose-600 to-purple-950',
    blurb: 'Retreats, yoga and wellbeing talks',
  },
};

export const CATEGORY_LIST = Object.entries(CATEGORIES).map(([key, value]) => ({
  key: key as EventCategory,
  ...value,
}));
