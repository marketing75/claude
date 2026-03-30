import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  client: string;
  industry: string;
  services: string[];
  metric: string;
  description: string;
  slug: string;
  image?: string;
}

export default function CaseStudyCard({
  title,
  client,
  industry,
  services,
  metric,
  description,
  slug,
  image,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
    >
      {/* Image area */}
      <div className="relative h-56 overflow-hidden bg-gray-900">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-900" />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
          <span className="text-white font-body font-semibold text-sm border border-white/40 rounded-full px-5 py-2">
            View Case Study
          </span>
        </div>
        {/* Metric badge */}
        <div className="absolute bottom-4 left-4 bg-blue-500 text-white rounded-lg px-3 py-1.5 font-display font-bold text-lg">
          {metric}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold text-blue-500 font-body uppercase tracking-wide">
            {client}
          </span>
          <span className="text-gray-300">|</span>
          <span className="text-xs text-gray-500 font-body">{industry}</span>
        </div>
        <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm font-body mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2">
          {services.map((service) => (
            <span
              key={service}
              className="text-xs bg-blue-50 text-blue-600 rounded-full px-3 py-1 font-body"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
