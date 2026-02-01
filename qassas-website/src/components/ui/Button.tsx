import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  const variants = {
    primary: 'bg-brand-accent text-white hover:bg-amber-700 shadow-md',
    outline: 'border-2 border-brand-accent text-brand-accent hover:bg-amber-50',
    ghost: 'text-brand-700 hover:text-brand-900 hover:bg-slate-100',
  };

  return (
    <button
      className={twMerge(
        'px-6 py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50',
        variants[variant],
        className
      )}
      {...props}
    />
  );
}