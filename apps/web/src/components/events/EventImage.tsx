import Image from 'next/image';
import { cn } from '@shankstix/ui';
import { CATEGORIES } from '@/lib/categories';
import type { EventCategory } from '@/lib/types';

type Props = {
  src: string;
  title: string;
  category: EventCategory;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** Event banner. Falls back to a branded poster when there is no image (sample data). */
export function EventImage({ src, title, category, className, sizes, priority }: Props) {
  if (src) {
    return (
      <Image
        src={src}
        alt={title}
        fill
        sizes={sizes ?? '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'}
        priority={priority}
        className={cn('object-cover', className)}
      />
    );
  }

  const cat = CATEGORIES[category];
  return (
    <div
      className={cn(
        'absolute inset-0 overflow-hidden bg-gradient-to-br text-white',
        cat.gradient,
        className,
      )}
      role="img"
      aria-label={title}
    >
      <div className="absolute -right-10 -top-10 size-40 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-16 -left-8 size-48 rounded-full bg-black/20 blur-2xl" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
          {cat.label}
        </p>
        <p className="mt-1 line-clamp-2 text-xl font-black leading-tight tracking-tight">
          {title}
        </p>
      </div>
    </div>
  );
}
