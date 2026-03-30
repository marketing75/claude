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
    <section className="bg-gray-50 py-10 overflow-hidden">
      <p className="text-center text-sm text-gray-500 font-body mb-8 tracking-wide uppercase">
        Trusted by 150+ UK businesses
      </p>
      <div className="relative">
        <div className="flex animate-scroll gap-12 w-max">
          {logos.map((name, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center w-36 h-12 rounded-lg bg-white border border-gray-200 px-4"
            >
              <span className="text-xs font-semibold text-gray-400 font-body whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
