import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'E-Commerce Website Development | NetTrackers',
    description:
      'Custom e-commerce development with seamless checkout, secure payments and inventory management. Shopify, WooCommerce and headless commerce solutions.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/web-design-development/ecommerce-development' },
  };
}

export default function EcommerceDevelopmentPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'E-Commerce Website Development',
      description: 'Custom e-commerce development with seamless checkout, secure payments and inventory management.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/web-design-development/ecommerce-development',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Web Design & Development', item: 'https://www.nettrackers.co.uk/services/web-design-development' },
        { '@type': 'ListItem', position: 3, name: 'E-Commerce Development', item: 'https://www.nettrackers.co.uk/services/web-design-development/ecommerce-development' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="E-Commerce Development That Turns Browsers into Buyers"
        description="Selling online demands more than a product catalogue and a checkout button. Our e-commerce development team builds stores that guide shoppers through a frictionless buying journey — from product discovery and filtering through to a streamlined checkout that minimises cart abandonment. Whether you need a Shopify storefront, a WooCommerce shop or a fully headless commerce architecture, we engineer every element to maximise average order value and lifetime customer spend. Secure payments, real-time inventory sync and mobile-first design come as standard."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Web Design & Development', href: '/services/web-design-development' },
          { label: 'E-Commerce Development', href: '/services/web-design-development/ecommerce-development' },
        ]}
        ctaPrimary={{ text: 'Get a Free Quote', href: '/contact' }}
        ctaSecondary={{ text: 'View E-Commerce Work', href: '/portfolio' }}
      />

      <ServiceBenefits
        title="What You Get with Our E-Commerce Service"
        benefits={[
          { icon: '\uD83D\uDED2', title: 'Frictionless Checkout', description: 'One-page checkout, guest checkout and saved payment methods reduce cart abandonment and boost conversion rates.' },
          { icon: '\uD83D\uDD10', title: 'Secure Payment Processing', description: 'PCI-compliant integration with Stripe, PayPal, Klarna and other payment gateways to protect every transaction.' },
          { icon: '\uD83D\uDCE6', title: 'Inventory Management', description: 'Real-time stock tracking, low-stock alerts and multi-warehouse support keep your operations running smoothly.' },
          { icon: '\uD83D\uDCF1', title: 'Mobile-First Shopping', description: 'Over 60% of online purchases happen on mobile — our stores are designed and tested for thumb-friendly browsing.' },
          { icon: '\uD83D\uDD0D', title: 'Product SEO', description: 'Structured data, optimised product URLs and fast-loading category pages help your products rank in organic search.' },
          { icon: '\uD83D\uDCCA', title: 'Revenue Analytics', description: 'Enhanced e-commerce tracking gives you granular insight into sales funnels, popular products and customer behaviour.' },
        ]}
      />

      <ServiceProcess
        title="How We Build Your Online Store"
        steps={[
          { number: 1, title: 'Commerce Strategy', description: 'We analyse your product catalogue, target audience, competitors and revenue goals to recommend the ideal platform and architecture.' },
          { number: 2, title: 'UX & Design', description: 'Wireframes and high-fidelity mockups map the complete shopping experience, from homepage to order confirmation.' },
          { number: 3, title: 'Development & Integration', description: 'We build the store, integrate payment gateways, shipping providers, inventory systems and any third-party tools you require.' },
          { number: 4, title: 'Testing & Launch', description: 'Comprehensive QA across devices, load testing and security audits ensure a flawless launch day with zero downtime.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'Which e-commerce platform do you recommend?', answer: 'It depends on your needs. Shopify suits businesses wanting a managed solution, WooCommerce works well for WordPress users, and headless commerce (Shopify Hydrogen, Medusa) is ideal for high-performance custom storefronts.' },
          { question: 'Can you migrate my existing store?', answer: 'Yes. We handle full data migrations — products, customers, orders and reviews — from platforms like Magento, BigCommerce and legacy systems with zero data loss.' },
          { question: 'How do you handle payment security?', answer: 'All payment processing is handled through PCI-DSS compliant gateways. We never store card details on your server, and we implement SSL, CSP headers and regular security audits.' },
          { question: 'Can I manage products myself?', answer: 'Absolutely. Every store we build includes an intuitive admin panel where you can add products, update prices, manage stock and process orders without developer assistance.' },
          { question: 'Do you offer ongoing support after launch?', answer: 'Yes — our retainer plans include platform updates, security patching, performance monitoring and feature enhancements to keep your store growing.' },
          { question: 'How long does an e-commerce build take?', answer: 'A standard Shopify or WooCommerce store typically takes six to ten weeks. Headless commerce builds with custom functionality may take twelve to sixteen weeks.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'E-Commerce SEO', description: 'Drive organic traffic to your product and category pages with specialist e-commerce optimisation.', href: '/services/seo/ecommerce-seo' },
          { title: 'Website Design', description: 'Need a striking visual identity for your store? Start with our bespoke design service.', href: '/services/web-design-development/website-design' },
          { title: 'CRM Integration', description: 'Connect your store to a CRM to automate customer segmentation and personalised marketing.', href: '/services/software-development/crm-integration' },
        ]}
      />

      <CtaBanner
        heading="Ready to Sell More Online?"
        subheading="Get a free e-commerce consultation and discover how we can grow your online revenue."
        primaryCta={{ text: 'Book Free Consultation', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
