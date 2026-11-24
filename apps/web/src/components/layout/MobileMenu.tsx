'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { buttonClasses } from '@shankstix/ui';

export function MobileMenu({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="grid size-10 place-items-center rounded-full hover:bg-black/5"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open && (
        <div className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col bg-white px-4 pb-8 pt-4">
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-lg font-semibold"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto grid gap-3">
            <Link href="/login" onClick={() => setOpen(false)} className={buttonClasses('outline', 'lg')}>
              Log in
            </Link>
            <Link
              href="/organizer/events/new"
              onClick={() => setOpen(false)}
              className={buttonClasses('primary', 'lg')}
            >
              Create event
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
