'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let megaMenuTimeout: ReturnType<typeof setTimeout>;

  const handleServicesEnter = () => {
    clearTimeout(megaMenuTimeout);
    setMegaMenuOpen(true);
  };

  const handleServicesLeave = () => {
    megaMenuTimeout = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 200);
  };

  const handleMegaMenuEnter = () => {
    clearTimeout(megaMenuTimeout);
    setMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeout = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 200);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)] border-b border-gray-100/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Logo */}
            <Link href="/" className="flex items-center gap-1.5 shrink-0">
              <svg
                width="32"
                height="32"
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
                  className={`font-bold transition-colors duration-300 ${scrolled ? 'text-blue-500' : 'text-white'}`}
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Net
                </span>
                <span
                  className={`transition-colors duration-300 ${scrolled ? 'text-gray-900' : 'text-white'}`}
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Trackers
                </span>
              </span>
            </Link>

            {/* Center: Nav Links (desktop) */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(link.href);

                if (link.label === 'Services') {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={handleServicesEnter}
                      onMouseLeave={handleServicesLeave}
                    >
                      <Link
                        href={link.href}
                        className={`relative text-sm font-medium transition-colors py-2 group ${
                          isActive
                            ? scrolled
                              ? 'text-blue-500'
                              : 'text-white'
                            : scrolled
                              ? 'text-gray-600 hover:text-gray-900'
                              : 'text-white/70 hover:text-white'
                        }`}
                      >
                        {link.label}
                        <svg
                          className="inline-block ml-1 w-3 h-3"
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
                        <span
                          className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-blue-500 transition-all duration-300 ${
                            isActive ? 'w-full' : 'w-0 group-hover:w-full'
                          }`}
                        />
                      </Link>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors py-2 group ${
                      isActive
                        ? scrolled
                          ? 'text-blue-500'
                          : 'text-white'
                        : scrolled
                          ? 'text-gray-600 hover:text-gray-900'
                          : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 rounded-full bg-blue-500 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Right: Phone + CTA (desktop) */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:02079460958"
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? 'text-gray-600 hover:text-gray-900'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                020 7946 0958
              </a>
              <a
                href="/contact"
                className="relative inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white rounded-full overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600" />
                <span className="relative z-10">Book a Strategy Call</span>
              </a>
            </div>

            {/* Mobile: Hamburger */}
            <button
              type="button"
              className="lg:hidden p-2"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg
                className={`w-6 h-6 transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* MegaMenu */}
        <MegaMenu
          isOpen={megaMenuOpen}
          onMouseEnter={handleMegaMenuEnter}
          onMouseLeave={handleMegaMenuLeave}
        />
      </nav>

      {/* MobileMenu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
