import Link from 'next/link';

const bullets = [
  'Certified Google Partner — £50M+ in managed ad spend',
  'In-house team: designers, developers, SEO specialists, copywriters',
  'Award-winning campaigns across 12 UK sectors',
  'Monthly transparent reporting — real ROI, no vanity metrics',
  'Rolling contracts — we earn your business every month',
];

export default function AboutSection() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.03]" style={{ background: 'radial-gradient(circle, #0099FF, transparent)' }} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: Creative Image Block */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl" />
              {/* Overlay accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500" />
            </div>

            {/* Floating Google Review Badge */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:right-6 rounded-2xl bg-white p-5 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>4.9</span>
                </div>
                <div>
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                  </div>
                  <p className="text-xs font-medium text-gray-500 mt-0.5">
                    127 Google Reviews
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-blue-500/20 rounded-tl-2xl" />
          </div>

          {/* Right: Content */}
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Who We Are
            </span>
            <h2
              className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-[2.75rem]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A London Team That Thinks{' '}
              <span className="text-gradient" style={{ WebkitTextFillColor: 'transparent', backgroundImage: 'linear-gradient(135deg, #0099FF, #8B5CF6)', backgroundClip: 'text', WebkitBackgroundClip: 'text' }}>
                Like Your Customers
              </span>
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed text-lg">
              With over 10 years of experience helping UK businesses thrive
              online, we combine strategic thinking with creative execution to
              deliver results that matter.
            </p>
            <p className="mb-10 text-gray-500 leading-relaxed">
              We understand the unique challenges of the UK market — from
              navigating GDPR compliance to competing in the most contested
              local search markets in Europe. Every strategy we build is rooted
              in data and driven by outcomes.
            </p>

            <ul className="mb-10 space-y-4">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400">
                    <svg
                      className="h-3 w-3 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-blue-500 font-semibold transition-colors hover:text-blue-600"
            >
              Learn More About Us
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
