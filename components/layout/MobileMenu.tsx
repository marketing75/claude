'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ServiceCategory {
  title: string;
  links: { label: string; href: string }[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: 'Web Design & Development',
    links: [
      { label: 'Website Design', href: '/services/web-design-development/website-design' },
      { label: 'Web Development', href: '/services/web-design-development/web-development' },
      { label: 'E-Commerce Development', href: '/services/web-design-development/e-commerce-development' },
      { label: 'Landing Page Design', href: '/services/web-design-development/landing-page-design' },
      { label: 'Website Redesign', href: '/services/web-design-development/website-redesign' },
      { label: 'WordPress Development', href: '/services/web-design-development/wordpress-development' },
      { label: 'Mobile App Development', href: '/services/web-design-development/mobile-app-development' },
    ],
  },
  {
    title: 'SEO & Search Marketing',
    links: [
      { label: 'Local SEO', href: '/services/seo/local-seo' },
      { label: 'Technical SEO', href: '/services/seo/technical-seo' },
      { label: 'On-Page SEO', href: '/services/seo/on-page-seo' },
      { label: 'Link Building', href: '/services/seo/link-building' },
      { label: 'E-Commerce SEO', href: '/services/seo/e-commerce-seo' },
      { label: 'SEO Audits', href: '/services/seo/seo-audits' },
      { label: 'Content Marketing', href: '/services/seo/content-marketing' },
    ],
  },
  {
    title: 'Online Reputation Management',
    links: [
      { label: 'Reputation Repair', href: '/services/online-reputation-management/reputation-repair' },
      { label: 'Review Management', href: '/services/online-reputation-management/review-management' },
      { label: 'Brand Monitoring', href: '/services/online-reputation-management/brand-monitoring' },
      { label: 'Crisis Management', href: '/services/online-reputation-management/crisis-management' },
      { label: 'Personal Reputation', href: '/services/online-reputation-management/personal-reputation' },
    ],
  },
  {
    title: 'Software Development',
    links: [
      { label: 'Custom CRM', href: '/services/software-development/custom-crm' },
      { label: 'Custom ERP', href: '/services/software-development/custom-erp' },
      { label: 'CRM Integration', href: '/services/software-development/crm-integration' },
      { label: 'ERP Integration', href: '/services/software-development/erp-integration' },
      { label: 'SaaS Development', href: '/services/software-development/saas-development' },
      { label: 'API Development', href: '/services/software-development/api-development' },
    ],
  },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setServicesOpen(false);
      setExpandedCategory(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleCategory = (title: string) => {
    setExpandedCategory((prev) => (prev === title ? null : title));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-0 z-[1100] bg-[#0D1117] overflow-y-auto"
        >
          <div className="flex flex-col min-h-full px-6 py-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <Link href="/" onClick={onClose} className="flex items-center gap-1">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M18 4L8 18h7l-1 10 10-14h-7l1-10z"
                    fill="#0099FF"
                    stroke="#0099FF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-xl tracking-tight">
                  <span
                    className="font-bold text-blue"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Net
                  </span>
                  <span
                    className="text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Trackers
                  </span>
                </span>
              </Link>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 space-y-1">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className="block py-3 text-lg text-white font-medium hover:text-blue transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              {/* Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full py-3 text-lg text-white font-medium hover:text-blue transition-colors"
                >
                  Services
                  <svg
                    className={`w-5 h-5 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4"
                    >
                      {serviceCategories.map((category) => (
                        <div key={category.title} className="mb-1">
                          <button
                            type="button"
                            onClick={() => toggleCategory(category.title)}
                            className="flex items-center justify-between w-full py-2.5 text-sm text-gray-300 font-semibold hover:text-white transition-colors"
                          >
                            {category.title}
                            <svg
                              className={`w-4 h-4 transition-transform duration-200 ${
                                expandedCategory === category.title ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>

                          <AnimatePresence>
                            {expandedCategory === category.title && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden pl-4"
                              >
                                {category.links.map((link) => (
                                  <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={onClose}
                                    className="block py-2 text-sm text-gray-400 hover:text-white transition-colors"
                                  >
                                    {link.label}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className="block py-3 text-lg text-white font-medium hover:text-blue transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Bottom Section */}
            <div className="mt-10 pt-8 border-t border-white/10">
              {/* Phone */}
              <a
                href="tel:02079460958"
                className="block text-lg text-gray-300 font-medium hover:text-white transition-colors mb-6"
              >
                020 7946 0958
              </a>

              {/* CTA Button */}
              <a
                href="/contact"
                onClick={onClose}
                className="block w-full text-center px-6 py-3.5 text-base font-semibold text-white bg-blue rounded-full hover:bg-blue/90 transition-colors mb-8"
              >
                Book a Strategy Call
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
