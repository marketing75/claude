import Link from 'next/link';

const industries = [
  { icon: '🏥', name: 'Healthcare', slug: 'healthcare' },
  { icon: '⚖️', name: 'Legal', slug: 'legal' },
  { icon: '💰', name: 'Finance', slug: 'finance' },
  { icon: '🛒', name: 'E-Commerce & Retail', slug: 'e-commerce-retail' },
  { icon: '🏗️', name: 'Construction & Property', slug: 'construction-property' },
  { icon: '📚', name: 'Education', slug: 'education' },
  { icon: '🏨', name: 'Hospitality & Tourism', slug: 'hospitality-tourism' },
  { icon: '🚀', name: 'Startups & SMEs', slug: 'startups-smes' },
];

export default function Industries() {
  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We Know Your Industry
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href={`/industries/${ind.slug}`}
              className="group flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="mb-3 text-4xl">{ind.icon}</span>
              <span className="font-semibold text-gray-900 group-hover:text-blue-500">
                {ind.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
