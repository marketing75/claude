import Link from 'next/link';

interface RelatedService {
  title: string;
  description: string;
  href: string;
}

interface RelatedServicesProps {
  services: RelatedService[];
}

export default function RelatedServices({ services }: RelatedServicesProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text text-center mb-16">
          You Might Also Need
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group block bg-off-white rounded p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="font-display text-xl font-bold text-text mb-3 group-hover:text-blue transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="font-body text-blue font-semibold text-sm inline-flex items-center gap-1">
                Learn more
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
