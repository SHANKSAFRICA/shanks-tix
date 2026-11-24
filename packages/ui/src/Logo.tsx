import { cn } from './cn';

type LogoProps = {
  className?: string;
  /** Use on dark backgrounds: "shanks" turns white, "Tix." stays red. */
  inverted?: boolean;
};

/** ShanksTix wordmark: "shanks" in ink, "Tix." in brand red. */
export function Logo({ className, inverted }: LogoProps) {
  return (
    <span
      className={cn(
        'inline-flex items-baseline text-2xl font-black tracking-[-0.04em] leading-none select-none',
        inverted ? 'text-white' : 'text-ink',
        className,
      )}
      aria-label="ShanksTix"
    >
      <span aria-hidden>shanks</span>
      <span aria-hidden className="text-brand-600">
        Tix.
      </span>
    </span>
  );
}
