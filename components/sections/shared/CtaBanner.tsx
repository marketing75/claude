import Button from '../../ui/Button';

interface CtaBannerProps {
  heading: string;
  subheading?: string;
  primaryCta: { text: string; href: string };
  secondaryCta?: { text: string; href: string };
  variant?: 'blue' | 'dark';
}

export default function CtaBanner({
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  variant = 'blue',
}: CtaBannerProps) {
  const bgClass =
    variant === 'blue'
      ? 'bg-gradient-to-r from-[#0099FF] to-[#0055AA]'
      : 'bg-[#0D1117]';

  return (
    <section className={`relative overflow-hidden py-20 md:py-28 ${bgClass}`}>
      {/* Diagonal stripe overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,1) 10px, rgba(255,255,255,1) 12px)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4">
          {heading}
        </h2>
        {subheading && (
          <p className="text-white/80 text-lg font-body mb-8 max-w-2xl mx-auto">
            {subheading}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="white" size="lg" href={primaryCta.href}>
            {primaryCta.text}
          </Button>
          {secondaryCta && (
            <Button variant="ghost-white" size="lg" href={secondaryCta.href}>
              {secondaryCta.text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
