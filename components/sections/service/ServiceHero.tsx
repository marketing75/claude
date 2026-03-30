import Link from 'next/link';
import Button from '../../ui/Button';

interface Breadcrumb {
  label: string;
  href: string;
}

interface ServiceHeroProps {
  title: string;
  description: string;
  breadcrumbs: Breadcrumb[];
  ctaPrimary: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
}

export default function ServiceHero({
  title,
  description,
  breadcrumbs,
  ctaPrimary,
  ctaSecondary,
}: ServiceHeroProps) {
  return (
    <section className="relative bg-navy overflow-hidden py-20 md:py-32">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]">
        <div className="absolute top-1/4 right-12 w-72 h-72 rounded-full border-2 border-blue" />
        <div className="absolute bottom-1/4 right-32 w-48 h-48 rounded-full border-2 border-blue" />
        <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full border border-blue" />
      </div>

      {/* Gradient accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue to-blue-dark" />

      <div className="container relative z-10">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm font-body text-gray-400">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.href} className="flex items-center gap-2">
                {index > 0 && (
                  <span className="text-gray-600" aria-hidden="true">
                    /
                  </span>
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-blue">{crumb.label}</span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="font-body text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg" href={ctaPrimary.href}>
                {ctaPrimary.text}
              </Button>
              {ctaSecondary && (
                <Button variant="ghost-white" size="lg" href={ctaSecondary.href}>
                  {ctaSecondary.text}
                </Button>
              )}
            </div>
          </div>

          {/* Decorative right side */}
          <div className="hidden md:flex items-center justify-center" aria-hidden="true">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full border border-blue/20 animate-pulse" />
              <div className="absolute inset-8 rounded-full border border-blue/15" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-blue/10 to-transparent" />
              <div className="absolute inset-24 rounded-full bg-blue/5 backdrop-blur-sm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
