import { type ReactNode } from 'react';

type BadgeVariant = 'blue' | 'dark' | 'outline';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  icon?: ReactNode;
  animated?: boolean;
}

const variantClasses: Record<BadgeVariant, string> = {
  blue: 'bg-blue-100 text-blue-600',
  dark: 'bg-[#0D1117] text-white',
  outline: 'bg-transparent border border-gray-300 text-gray-600',
};

export default function Badge({
  children,
  variant = 'blue',
  icon,
  animated = false,
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold font-body ${variantClasses[variant]}`}
    >
      {animated && (
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
        </span>
      )}
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
}
