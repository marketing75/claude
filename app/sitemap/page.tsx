import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sitemap | NetTrackers',
  description:
    'Browse the complete sitemap of the NetTrackers website. Find links to all our pages including services, locations, industries, and resources.',
};

const sitemapSections = [
  {
    title: 'Main Pages',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Design', href: '/services/web-design' },
      { label: 'SEO', href: '/services/seo' },
      { label: 'Reputation Management', href: '/services/reputation-management' },
      { label: 'Software Development', href: '/services/software-development' },
    ],
  },
  {
    title: 'Locations',
    links: [
      { label: 'London', href: '/locations/london' },
      { label: 'Manchester', href: '/locations/manchester' },
      { label: 'Birmingham', href: '/locations/birmingham' },
      { label: 'Leeds', href: '/locations/leeds' },
      { label: 'Bristol', href: '/locations/bristol' },
      { label: 'Edinburgh', href: '/locations/edinburgh' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Legal', href: '/industries/legal' },
      { label: 'Finance', href: '/industries/finance' },
      { label: 'Construction', href: '/industries/construction' },
      { label: 'Education', href: '/industries/education' },
      { label: 'E-Commerce', href: '/industries/ecommerce' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Thames Legal Partners', href: '/case-studies/thames-legal-partners' },
      { label: 'BuildRight Construction', href: '/case-studies/buildright-construction' },
      { label: 'Harley Street Dental', href: '/case-studies/harley-street-dental' },
      { label: 'FreshCart Groceries', href: '/case-studies/freshcart-groceries' },
      { label: 'Northern Finance Group', href: '/case-studies/northern-finance-group' },
      { label: 'EduFirst Academy', href: '/case-studies/edufirst-academy' },
      { label: 'Blog', href: '/blog' },
      { label: 'SEO Trends UK 2025', href: '/blog/seo-trends-uk-2025' },
      { label: 'Website Redesign Guide', href: '/blog/website-redesign-guide' },
      { label: 'Online Reputation Recovery', href: '/blog/online-reputation-recovery' },
      { label: 'Bespoke CRM vs Off-the-Shelf', href: '/blog/crm-vs-off-the-shelf' },
      { label: 'Local SEO & Google Business', href: '/blog/local-seo-google-business' },
      { label: 'Conversion Rate Optimisation Tips', href: '/blog/conversion-rate-optimisation-tips' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
      { label: 'Sitemap', href: '/sitemap' },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[#0D1117] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Sitemap
          </h1>
          <p className="text-gray-400 font-body">
            Browse all pages on the NetTrackers website.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {sitemapSections.map((section) => (
              <div key={section.title}>
                <h2 className="font-display text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  {section.title}
                </h2>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-600 font-body hover:text-blue-500 transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
