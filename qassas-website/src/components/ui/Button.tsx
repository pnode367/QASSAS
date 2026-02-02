// import React from 'react';
// // import { clsx } from 'clsx';
// import { twMerge } from 'tailwind-merge';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'outline' | 'ghost';
// }

// export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
//   const variants = {
//     primary: 'bg-brand-accent text-white hover:bg-amber-700 shadow-md',
//     outline: 'border-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white',
//     ghost: 'text-brand-700 hover:text-brand-900 hover:bg-slate-100',
//   };

//   return (
//     <button
//       className={twMerge(
//         'px-6 py-3 rounded-lg font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50',
//         variants[variant],
//         className
//       )}
//       {...props}
//     />
//   );
// }
import * as React from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "outline" | "ghost";

function cn(...v: Array<string | undefined | null | false>) {
  return v.filter(Boolean).join(" ");
}

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  to?: string;
  href?: string;
  variant?: Variant;
};

export function Button({ to, href, variant = "primary", className, children, ...rest }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 px-6 py-3";

  const styles: Record<Variant, string> = {
    primary: "bg-gold-accent text-black hover:brightness-110",
    outline: "border border-white/30 text-white hover:bg-white/10",
    ghost: "text-white hover:bg-white/10",
  };

  const cls = cn(base, styles[variant], className);

  if (to) return <Link to={to} className={cls}>{children}</Link>;
  if (href) return <a href={href} className={cls}>{children}</a>;

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
