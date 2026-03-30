import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Technical SEO Services | NetTrackers',
    description:
      'Fix crawl errors, improve site speed and ensure search engines can properly index your website. Expert technical SEO from a UK agency.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/seo/technical-seo' },
  };
}

export default function TechnicalSeoPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Technical SEO Services',
      description: 'Fix crawl errors, improve site speed and ensure search engines can properly index your website.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/seo/technical-seo',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://www.nettrackers.co.uk/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'Technical SEO', item: 'https://www.nettrackers.co.uk/services/seo/technical-seo' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="The Technical Foundation Your Rankings Need"
        description="Great content cannot rank if search engines struggle to crawl, render and index your pages. Technical SEO removes the invisible barriers that prevent Google from understanding your site. Our technical specialists audit your crawl architecture, fix indexation issues, eliminate render-blocking resources, implement structured data and optimise Core Web Vitals so that every page on your site has the strongest possible foundation for ranking. We work at the code and server level, translating complex technical fixes into measurable ranking gains."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'SEO', href: '/services/seo' },
          { label: 'Technical SEO', href: '/services/seo/technical-seo' },
        ]}
        ctaPrimary={{ text: 'Get a Technical Audit', href: '/contact' }}
        ctaSecondary={{ text: 'See Technical Results', href: '/case-studies' }}
      />

      <ServiceBenefits
        title="What You Get with Our Technical SEO Service"
        benefits={[
          { icon: '\uD83D\uDD77\uFE0F', title: 'Crawl Optimisation', description: 'We fix crawl errors, optimise your robots.txt and XML sitemaps, and manage crawl budget so Google discovers and indexes your most important pages.' },
          { icon: '\u26A1', title: 'Core Web Vitals', description: 'LCP, FID and CLS improvements through code optimisation, image compression, font loading strategies and server response tuning.' },
          { icon: '\uD83D\uDCCB', title: 'Structured Data Markup', description: 'Schema.org implementation for rich snippets — FAQs, reviews, breadcrumbs, products and more — to stand out in search results.' },
          { icon: '\uD83D\uDD12', title: 'HTTPS & Security', description: 'SSL configuration, mixed content fixes, HSTS headers and security best practices that protect users and satisfy Google\u2019s ranking signals.' },
          { icon: '\uD83D\uDCF1', title: 'Mobile Usability', description: 'Responsive viewport configuration, touch target sizing and mobile rendering audits ensure your site passes Google\u2019s mobile-first indexing requirements.' },
          { icon: '\uD83C\uDFD7\uFE0F', title: 'Site Architecture', description: 'URL structure, internal linking patterns, pagination handling and canonical tag management to create a logical, crawl-efficient hierarchy.' },
        ]}
      />

      <ServiceProcess
        title="Our Technical SEO Process"
        steps={[
          { number: 1, title: 'Comprehensive Crawl Audit', description: 'We crawl your entire site with Screaming Frog and cross-reference with Google Search Console to identify every technical issue.' },
          { number: 2, title: 'Prioritised Action Plan', description: 'Issues are categorised by severity and impact, then presented in a clear roadmap with estimated ranking improvements.' },
          { number: 3, title: 'Implementation', description: 'Our team fixes issues directly or provides detailed developer briefs for your in-house team, then verifies each fix.' },
          { number: 4, title: 'Monitoring & Iteration', description: 'Ongoing log file analysis, crawl monitoring and Core Web Vitals tracking ensure issues stay resolved and new ones are caught early.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'What is technical SEO?', answer: 'Technical SEO refers to the optimisation of your website\u2019s infrastructure — crawlability, indexation, page speed, mobile usability and structured data — so search engines can efficiently discover and rank your content.' },
          { question: 'How do I know if I have technical SEO issues?', answer: 'Common signs include pages not appearing in Google, slow load times, mobile usability warnings in Search Console and declining organic traffic despite publishing new content.' },
          { question: 'Can technical SEO alone improve my rankings?', answer: 'Technical SEO removes barriers to ranking and can produce significant gains, especially if your site has major issues. For best results, it should be combined with on-page optimisation and link building.' },
          { question: 'How long do technical fixes take to show results?', answer: 'Minor fixes can show improvements within days of Google\u2019s next crawl. Larger structural changes typically take four to eight weeks to fully reflect in rankings.' },
          { question: 'Do you work with our developers?', answer: 'Yes. We provide detailed, developer-friendly briefs and can collaborate directly with your technical team via pull request reviews, code comments and video walkthroughs.' },
          { question: 'How often should a technical audit be conducted?', answer: 'We recommend a full audit every six months, with continuous monitoring in between to catch new issues introduced by site updates, plugin changes or platform migrations.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'SEO Audits', description: 'A broader audit covering technical, on-page and off-page factors for a complete picture of your SEO health.', href: '/services/seo/seo-audits' },
          { title: 'Web Development', description: 'Need a developer to implement technical fixes? Our team can handle it directly.', href: '/services/web-design-development/web-development' },
          { title: 'On-Page SEO', description: 'Complement your technical foundation with optimised content, meta tags and internal linking.', href: '/services/seo/on-page-seo' },
        ]}
      />

      <CtaBanner
        heading="Is Your Site Technically Sound?"
        subheading="Get a free technical SEO audit and uncover hidden issues holding back your rankings."
        primaryCta={{ text: 'Request Free Audit', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
