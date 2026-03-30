import Badge from './Badge';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignClasses = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  const titleColor = light ? 'text-white' : 'text-gray-900';
  const descColor = light ? 'text-gray-300' : 'text-gray-600';

  return (
    <div className={`flex flex-col gap-4 ${alignClasses}`}>
      {badge && <Badge variant={light ? 'dark' : 'blue'}>{badge}</Badge>}
      <h2 className={`font-display text-3xl md:text-4xl font-bold ${titleColor}`}>
        {title}
      </h2>
      {description && (
        <p className={`max-w-2xl text-lg ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  );
}
