'use client';

const logos = [
  'TechCorp UK',
  'Meridian Group',
  'Apex Digital',
  'Crown Estates',
  'Pinnacle Health',
  'Sterling Law',
  'Nova Finance',
  'Atlas Build',
  'Zenith Media',
  'Forge Studios',
];

export default function TrustBar() {
  return (
    <section className="relative bg-navy py-12 overflow-hidden border-t border-b border-white/[0.04]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500 text-xs font-medium uppercase tracking-widest mb-8">
          Trusted by 150+ UK businesses
        </p>
      </div>

      {/* Infinite scroll */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy to-transparent z-10" />

        <div className="flex animate-marquee">
          {[...logos, ...logos].map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 mx-6 flex items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.02] px-8 py-3"
            >
              <span className="text-gray-500 text-sm font-medium whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
