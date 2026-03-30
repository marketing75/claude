'use client';

import Link from 'next/link';

interface MegaMenuProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

interface ServiceLink {
  label: string;
  href: string;
  color: string;
}

interface ServiceColumn {
  title: string;
  links: ServiceLink[];
}

const serviceColumns: ServiceColumn[] = [
  {
    title: 'Web Design & Development',
    links: [
      { label: 'Website Design', href: '/services/web-design-development/website-design', color: 'bg-blue' },
      { label: 'Web Development', href: '/services/web-design-development/web-development', color: 'bg-blue' },
      { label: 'E-Commerce Development', href: '/services/web-design-development/e-commerce-development', color: 'bg-blue' },
      { label: 'Landing Page Design', href: '/services/web-design-development/landing-page-design', color: 'bg-blue' },
      { label: 'Website Redesign', href: '/services/web-design-development/website-redesign', color: 'bg-blue' },
      { label: 'WordPress Development', href: '/services/web-design-development/wordpress-development', color: 'bg-blue' },
      { label: 'Mobile App Development', href: '/services/web-design-development/mobile-app-development', color: 'bg-blue' },
    ],
  },
  {
    title: 'SEO & Search Marketing',
    links: [
      { label: 'Local SEO', href: '/services/seo/local-seo', color: 'bg-emerald-400' },
      { label: 'Technical SEO', href: '/services/seo/technical-seo', color: 'bg-emerald-400' },
      { label: 'On-Page SEO', href: '/services/seo/on-page-seo', color: 'bg-emerald-400' },
      { label: 'Link Building', href: '/services/seo/link-building', color: 'bg-emerald-400' },
      { label: 'E-Commerce SEO', href: '/services/seo/e-commerce-seo', color: 'bg-emerald-400' },
      { label: 'SEO Audits', href: '/services/seo/seo-audits', color: 'bg-emerald-400' },
      { label: 'Content Marketing', href: '/services/seo/content-marketing', color: 'bg-emerald-400' },
    ],
  },
  {
    title: 'Online Reputation Management',
    links: [
      { label: 'Reputation Repair', href: '/services/online-reputation-management/reputation-repair', color: 'bg-amber-400' },
      { label: 'Review Management', href: '/services/online-reputation-management/review-management', color: 'bg-amber-400' },
      { label: 'Brand Monitoring', href: '/services/online-reputation-management/brand-monitoring', color: 'bg-amber-400' },
      { label: 'Crisis Management', href: '/services/online-reputation-management/crisis-management', color: 'bg-amber-400' },
      { label: 'Personal Reputation', href: '/services/online-reputation-management/personal-reputation', color: 'bg-amber-400' },
    ],
  },
  {
    title: 'Software Development',
    links: [
      { label: 'Custom CRM', href: '/services/software-development/custom-crm', color: 'bg-purple-400' },
      { label: 'Custom ERP', href: '/services/software-development/custom-erp', color: 'bg-purple-400' },
      { label: 'CRM Integration', href: '/services/software-development/crm-integration', color: 'bg-purple-400' },
      { label: 'ERP Integration', href: '/services/software-development/erp-integration', color: 'bg-purple-400' },
      { label: 'SaaS Development', href: '/services/software-development/saas-development', color: 'bg-purple-400' },
      { label: 'API Development', href: '/services/software-development/api-development', color: 'bg-purple-400' },
    ],
  },
];

export default function MegaMenu({ isOpen, onMouseEnter, onMouseLeave }: MegaMenuProps) {
  return (
    <div
      className={`absolute top-full left-0 w-full bg-[#0D1117] transition-all duration-200 ease-out ${
        isOpen
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-4 gap-8">
          {serviceColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-semibold text-sm mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2.5 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${link.color} shrink-0`}
                      />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
