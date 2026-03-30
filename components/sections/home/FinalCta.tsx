import Link from 'next/link';

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-[#0A0E17]">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full opacity-15" style={{ background: 'radial-gradient(ellipse, #0099FF, transparent 70%)' }} />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #8B5CF6, transparent)' }} />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #06B6D4, transparent)' }} />
        <div className="absolute inset-0 dot-grid opacity-20" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ready to{' '}
          <span
            className="text-gradient"
            style={{
              WebkitTextFillColor: 'transparent',
              backgroundImage: 'linear-gradient(135deg, #0099FF, #06B6D4, #8B5CF6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
            }}
          >
            Dominate Your Market?
          </span>
        </h2>
        <p className="mb-12 text-lg text-gray-400 max-w-xl mx-auto">
          Join 150+ UK businesses already growing with NetTrackers. Let&apos;s build something extraordinary together.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group relative inline-flex items-center rounded-full px-8 py-4 text-base font-semibold text-white overflow-hidden transition-all hover:-translate-y-0.5"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600" style={{ backgroundSize: '200% 200%', animation: 'gradient-shift 4s ease infinite' }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, #0099FF 0%, #8B5CF6 100%)' }} />
            <span className="relative z-10">Book a Free Strategy Call</span>
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center rounded-full border border-white/10 px-8 py-4 text-base font-semibold text-white/80 transition-all hover:border-white/30 hover:text-white hover:bg-white/5 hover:-translate-y-0.5"
          >
            View Our Work
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-14 flex items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            No contracts
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Free audit
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            UK-based team
          </div>
        </div>
      </div>
    </section>
  );
}
