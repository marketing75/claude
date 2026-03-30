'use client';

import Link from 'next/link';
import { type ReactNode, type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'white' | 'ghost-white';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-blue-500 text-white hover:shadow-[0_8px_30px_rgba(0,153,255,0.4)]',
  secondary: 'bg-white text-blue-500 hover:shadow-[0_8px_30px_rgba(0,153,255,0.25)]',
  ghost: 'bg-transparent text-blue-500 border-2 border-blue-500 hover:shadow-[0_8px_30px_rgba(0,153,255,0.25)]',
  white: 'bg-white text-gray-900 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]',
  'ghost-white': 'bg-transparent text-white border-2 border-white hover:shadow-[0_8px_30px_rgba(255,255,255,0.15)]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-base',
  lg: 'px-9 py-4 text-lg',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full font-body font-semibold transition-all duration-300 hover:-translate-y-0.5 cursor-pointer';

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
