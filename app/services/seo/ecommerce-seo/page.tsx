import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'E-Commerce SEO Services | NetTrackers',
    description:
      'Drive organic traffic to your product and category pages with specialist e-commerce SEO. Optimise for Google Shopping, product schema and buyer-intent keywords.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/seo/ecommerce-seo' },
  };
}

export default function EcommerceSeoPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'E-Commerce SEO Services',
      description: 'Drive organic traffic to your product and category pages with specialist e-commerce SEO.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/seo/ecommerce-seo',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://www.nettrackers.co.uk/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'E-Commerce SEO', item: 'https://www.nettrackers.co.uk/services/seo/ecommerce-seo' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="E-Commerce SEO That Fills Your Shopping Cart"
        description="Ranking product and category pages on Google requires a fundamentally different approach to standard SEO. Duplicate content from product variants, faceted navigation creating crawl bloat, thin category descriptions and missing product schema are just a few of the challenges unique to online stores. Our e-commerce SEO specialists understand the nuances of Shopify, WooCommerce, Magento and headless platforms, and we apply proven strategies to increase your organic product visibility, reduce reliance on paid advertising and drive revenue that compounds month after month."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'SEO', href: '/services/seo' },
          { label: 'E-Commerce SEO', href: '/services/seo/ecommerce-seo' },
        ]}
        ctaPrimary={{ text: 'Get a Free Store Audit', href: '/contact' }}
        ctaSecondary={{ text: 'See Revenue Results', href: '/case-studies' }}
      />

      <ServiceBenefits
        title="What You Get with Our E-Commerce SEO Service"
        benefits={[
          { icon: '\uD83D\uDED2', title: 'Product Page Optimisation', description: 'Unique, keyword-rich product titles, descriptions and meta data that rank for buyer-intent search queries and drive conversions.' },
          { icon: '\uD83D\uDCC2', title: 'Category Page Strategy', description: 'Optimised category descriptions, faceted navigation management and internal linking to maximise category page rankings.' },
          { icon: '\uD83C\uDFF7\uFE0F', title: 'Product Schema Markup', description: 'Structured data for prices, availability, reviews and ratings that enable rich snippets and improve click-through rates in search.' },
          { icon: '\uD83D\uDD0D', title: 'Crawl Budget Management', description: 'Faceted URL handling, canonical tags and robots directives that prevent crawl bloat and keep Google focused on your revenue pages.' },
          { icon: '\uD83D\uDCCA', title: 'Revenue-Tied Reporting', description: 'Every report connects SEO metrics to actual revenue, so you see the pound value of organic traffic improvements.' },
          { icon: '\uD83D\uDCDD', title: 'Buying Guide Content', description: 'Informational content targeting top-of-funnel queries that attracts new audiences and funnels them toward product pages.' },
        ]}
      />

      <ServiceProcess
        title="Our E-Commerce SEO Process"
        steps={[
          { number: 1, title: 'Store Audit', description: 'We crawl your entire store, audit product and category pages, review technical infrastructure and benchmark against top-ranking competitors.' },
          { number: 2, title: 'Keyword & Intent Mapping', description: 'Products and categories are mapped to buyer-intent keyword clusters, and content gaps are identified for new page creation.' },
          { number: 3, title: 'On-Page & Technical Fixes', description: 'Product descriptions, meta data, schema, internal links and technical issues are optimised following a prioritised implementation schedule.' },
          { number: 4, title: 'Content & Link Acquisition', description: 'Buying guides, comparison posts and product round-ups are created while link-building campaigns strengthen your store\u2019s domain authority.' },
          { number: 5, title: 'Measure & Scale', description: 'Revenue-attributed reporting identifies winning strategies which are then scaled across more product lines and categories.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'Which e-commerce platforms do you work with?', answer: 'We optimise stores on Shopify, WooCommerce, Magento, BigCommerce, Squarespace Commerce and headless commerce platforms. Our strategies adapt to each platform\u2019s unique technical characteristics.' },
          { question: 'How do you handle duplicate content from product variants?', answer: 'We implement canonical tags, faceted navigation controls and URL parameter handling to consolidate duplicate pages and prevent them from diluting your ranking signals.' },
          { question: 'How long before I see increased organic revenue?', answer: 'Quick wins from product page optimisation and schema implementation can appear within six to eight weeks. Significant, sustained revenue growth typically builds over three to six months.' },
          { question: 'Can e-commerce SEO reduce my reliance on paid ads?', answer: 'Absolutely. Many of our clients shift budget from PPC to SEO as organic rankings grow, achieving a lower cost per acquisition and higher long-term return on investment.' },
          { question: 'Do you write product descriptions?', answer: 'Yes. Our copywriters create unique, keyword-optimised product descriptions that inform, persuade and rank — eliminating the thin or duplicated manufacturer copy that holds many stores back.' },
          { question: 'How do you report on e-commerce SEO performance?', answer: 'Monthly reports include organic revenue, traffic by product and category, keyword rankings, technical health scores and actionable recommendations for the next period.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'E-Commerce Development', description: 'Need a new or improved online store? Our development team builds high-performing e-commerce platforms.', href: '/services/web-design-development/ecommerce-development' },
          { title: 'Technical SEO', description: 'Resolve the complex technical challenges unique to large product catalogues.', href: '/services/seo/technical-seo' },
          { title: 'Content Marketing', description: 'Create buying guides, comparison content and product round-ups that attract top-of-funnel traffic.', href: '/services/seo/content-marketing' },
        ]}
      />

      <CtaBanner
        heading="Turn Organic Traffic into Revenue"
        subheading="Get a free e-commerce SEO audit and discover the revenue you are leaving on the table."
        primaryCta={{ text: 'Get Free Store Audit', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
