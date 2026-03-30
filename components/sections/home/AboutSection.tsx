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
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Image */}
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-xl bg-gray-200" />
            {/* Floating Google Review Badge */}
            <div className="absolute -bottom-4 -right-4 rounded-lg bg-white px-5 py-3 shadow-xl sm:bottom-6 sm:right-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-900">4.9</span>
                <div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-xs font-medium text-gray-500">
                    Google Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600">
              Who We Are
            </span>
            <h2
              className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              A London Team That Thinks Like Your Customers
            </h2>
            <p className="mb-4 text-gray-600 leading-relaxed">
              With over 10 years of experience helping UK businesses thrive
              online, we combine strategic thinking with creative execution to
              deliver results that matter. Our team of 30+ specialists works as
              an extension of your business, not just another agency.
            </p>
            <p className="mb-8 text-gray-600 leading-relaxed">
              We understand the unique challenges of the UK market — from
              navigating GDPR compliance to competing in the most contested
              local search markets in Europe. Every strategy we build is rooted
              in data and driven by outcomes.
            </p>

            <ul className="mb-8 space-y-3">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="text-blue-500 font-semibold hover:underline"
            >
              Learn More About Us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
