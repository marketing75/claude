import Button from '../../ui/Button';

interface LocationHeroProps {
  city: string;
  description: string;
  stat: { value: string; label: string };
}

export default function LocationHero({ city, description, stat }: LocationHeroProps) {
  return (
    <section className="relative bg-[#0D1117] overflow-hidden py-20 md:py-32">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Blue glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <span className="inline-block text-blue-400 font-body font-semibold text-sm uppercase tracking-wider mb-4">
            {city} Digital Agency
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Digital Agency in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0099FF] to-[#00CCFF]">
              {city}
            </span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-body mb-10 leading-relaxed max-w-2xl">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
            <Button variant="primary" size="lg" href="/contact">
              Get a Free Consultation
            </Button>
            <Button variant="ghost-white" size="lg" href="/services">
              View Our Services
            </Button>
          </div>

          <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-8 py-5">
            <span className="font-display text-3xl md:text-4xl font-bold text-blue-400">
              {stat.value}
            </span>
            <span className="text-white/60 font-body text-sm leading-tight max-w-[160px]">
              {stat.label}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
