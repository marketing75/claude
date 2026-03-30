import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'WordPress Development Services | NetTrackers',
    description:
      'Custom WordPress themes, plugins and integrations built for performance and security. Expert WordPress development from a UK-based agency.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/web-design-development/wordpress-development' },
  };
}

export default function WordPressDevelopmentPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'WordPress Development Services',
      description: 'Custom WordPress themes, plugins and integrations built for performance and security.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/web-design-development/wordpress-development',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Web Design & Development', item: 'https://www.nettrackers.co.uk/services/web-design-development' },
        { '@type': 'ListItem', position: 3, name: 'WordPress Development', item: 'https://www.nettrackers.co.uk/services/web-design-development/wordpress-development' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="WordPress Development Done Properly"
        description="WordPress powers over 40% of the web, but most WordPress sites are bloated with unnecessary plugins, slow page builders and generic themes that compromise performance and security. We take a different approach — building custom WordPress themes from scratch with clean PHP, the block editor API and only the plugins you truly need. The result is a WordPress site that loads fast, ranks well, stays secure and gives your content team genuine editorial freedom without the chaos of page builder sprawl."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Web Design & Development', href: '/services/web-design-development' },
          { label: 'WordPress Development', href: '/services/web-design-development/wordpress-development' },
        ]}
        ctaPrimary={{ text: 'Get a Free Quote', href: '/contact' }}
        ctaSecondary={{ text: 'View WordPress Projects', href: '/portfolio' }}
      />

      <ServiceBenefits
        title="What You Get with Our WordPress Service"
        benefits={[
          { icon: '\uD83C\uDFA8', title: 'Custom Theme Development', description: 'A bespoke WordPress theme built from scratch to match your brand, with no reliance on bulky page builders or generic starter themes.' },
          { icon: '\uD83D\uDD0C', title: 'Plugin Development', description: 'Custom plugins for functionality that off-the-shelf solutions cannot provide, built with clean code and WordPress coding standards.' },
          { icon: '\u26A1', title: 'Speed Optimisation', description: 'Server-level caching, image optimisation, code minification and lazy loading ensure your WordPress site loads in under two seconds.' },
          { icon: '\uD83D\uDD12', title: 'Security Hardening', description: 'Two-factor authentication, firewall rules, file integrity monitoring and automated backups protect your site from threats.' },
          { icon: '\uD83D\uDCDD', title: 'Block Editor Integration', description: 'Custom Gutenberg blocks give your content team a powerful yet intuitive editing experience without touching code.' },
          { icon: '\uD83D\uDD04', title: 'Ongoing Maintenance', description: 'Regular core, theme and plugin updates, uptime monitoring and performance checks keep your site healthy and secure.' },
        ]}
      />

      <ServiceProcess
        title="Our WordPress Development Process"
        steps={[
          { number: 1, title: 'Requirements & Planning', description: 'We document your content types, editorial workflows, integrations and functionality requirements to plan the ideal WordPress architecture.' },
          { number: 2, title: 'Theme Design & Build', description: 'A custom theme is designed in Figma, approved by you, then built as a lightweight WordPress theme with custom blocks and templates.' },
          { number: 3, title: 'Plugin & Integration Setup', description: 'Essential plugins are configured and any custom plugins are developed. Third-party tools like CRMs, email platforms and analytics are integrated.' },
          { number: 4, title: 'Content Migration & Launch', description: 'Existing content is migrated, redirects are set, and the site goes through rigorous QA testing before we take it live.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'Do you use page builders like Elementor or Divi?', answer: 'No. We build custom themes using the native WordPress block editor (Gutenberg) and custom blocks. This approach is significantly faster, more secure and easier to maintain than page builder-dependent sites.' },
          { question: 'Can you work with my existing WordPress site?', answer: 'Yes. We can improve, optimise or rebuild your existing WordPress site. We will audit it first to determine whether a refresh or a complete rebuild is the better approach.' },
          { question: 'How do you handle WordPress security?', answer: 'We implement server-level firewalls, disable XML-RPC, enforce strong passwords, add two-factor authentication, run regular malware scans and keep all software up to date.' },
          { question: 'Will I be able to update content myself?', answer: 'Absolutely. We design the admin experience to be as intuitive as possible, with custom Gutenberg blocks and clear content fields so your team can manage updates confidently.' },
          { question: 'Do you offer WordPress hosting?', answer: 'We recommend managed WordPress hosting providers like Kinsta or WP Engine for optimal performance. We can set up and manage hosting on your behalf.' },
          { question: 'Can you build a WooCommerce store?', answer: 'Yes. We develop custom WooCommerce stores with bespoke themes, optimised checkout flows and integration with payment gateways, shipping providers and inventory systems.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'Web Development', description: 'Need something beyond WordPress? Our custom development service covers React, Next.js and more.', href: '/services/web-design-development/web-development' },
          { title: 'E-Commerce Development', description: 'Build a powerful online store with WooCommerce or headless commerce platforms.', href: '/services/web-design-development/ecommerce-development' },
          { title: 'On-Page SEO', description: 'Maximise your WordPress site\u2019s search visibility with expert on-page optimisation.', href: '/services/seo/on-page-seo' },
        ]}
      />

      <CtaBanner
        heading="Want a WordPress Site That Actually Performs?"
        subheading="Let\u2019s build a WordPress website you can be proud of — fast, secure and easy to manage."
        primaryCta={{ text: 'Start Your Project', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
