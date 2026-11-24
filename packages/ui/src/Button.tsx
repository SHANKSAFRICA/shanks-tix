import type { ComponentProps } from 'react';
import { cn } from './cn';

type Variant = 'primary' | 'dark' | 'outline' | 'outlineLight' | 'ghost' | 'light';
type Size = 'sm' | 'md' | 'lg';

const variants: Record<Variant, string> = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800',
  dark: 'bg-ink text-white hover:bg-black',
  outline: 'border border-line bg-white text-ink hover:border-ink',
  outlineLight: 'border border-white/25 text-white hover:border-white',
  ghost: 'text-ink hover:bg-black/5',
  light: 'bg-white text-ink hover:bg-white/90',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-13 px-7 text-base',
};

export function buttonClasses(variant: Variant = 'primary', size: Size = 'md', className?: string) {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600',
    'disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  );
}

type ButtonProps = ComponentProps<'button'> & { variant?: Variant; size?: Size };

export function Button({ variant, size, className, type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, size, className)} {...props} />;
}
