import Link from 'next/link';

interface Service {
  title: string;
  description: string;
  href: string;
}

interface LocalServicesProps {
  city: string;
  services: Service[];
}

const icons = [
  // Search / SEO
  <svg key="seo" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>,
  // Code / Web Development
  <svg key="web" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
  </svg>,
  // Megaphone / Marketing
  <svg key="marketing" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38a.75.75 0 0 1-1.021-.268l-.057-.098a9.8 9.8 0 0 1-.92-2.055m1.133-2.253a28 28 0 0 0 0-6.498m0 6.498c4.876.483 9.99-.09 14.143-1.558a.75.75 0 0 0 .483-.745v-4.39a.75.75 0 0 0-.484-.745C20.33 5.67 15.216 5.096 10.34 4.613m0 6.498V4.613" />
  </svg>,
  // Chart / ORM
  <svg key="orm" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>,
];

export default function LocalServices({ city, services }: LocalServicesProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-blue-500 font-body font-semibold text-sm uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Digital Services in {city}
          </h2>
          <p className="text-gray-600 font-body text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored for {city} businesses, from strategy to execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative bg-gray-50 border border-gray-100 rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/5 hover:border-blue-100 hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  {icons[index % icons.length]}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-body leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center mt-4 text-blue-500 font-body font-semibold text-sm gap-1 group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
