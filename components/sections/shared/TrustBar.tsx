'use client';

const PLACEHOLDER_LOGOS = [
  'TechCorp UK',
  'Meridian Group',
  'Apex Digital',
  'BrightPath',
  'CloudVault',
  'DataStream',
  'EcoNet',
  'FusionWorks',
  'GridPoint',
  'HorizonIO',
];

export default function TrustBar() {
  const logos = [...PLACEHOLDER_LOGOS, ...PLACEHOLDER_LOGOS];

  return (
    <section className="relative py-14 overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-medium text-gray-400 mb-10 tracking-[0.2em] uppercase">
          Trusted by 150+ UK businesses
        </p>
      </div>
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max gap-10" style={{ animation: 'marquee 30s linear infinite' }}>
          {logos.map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center w-36 h-12 rounded-xl bg-gray-50 border border-gray-100 px-4 transition-all duration-300 hover:border-blue-200 hover:shadow-sm"
            >
              <span className="text-xs font-semibold text-gray-300 whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
