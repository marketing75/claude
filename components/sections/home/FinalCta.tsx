import Link from 'next/link';

export default function FinalCta() {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background: 'linear-gradient(135deg, #0099FF 0%, #0055AA 100%)',
      }}
    >
      {/* Diagonal stripe texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className="mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Ready to Dominate Your Market?
        </h2>
        <p className="mb-10 text-lg text-white/80">
          Join 150+ UK businesses already growing with NetTrackers.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-gray-900 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
          >
            Book a Free Call
          </Link>
          <Link
            href="/work"
            className="inline-flex items-center rounded-lg border-2 border-white px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10"
          >
            View Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}
