import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'SEO Audit Services | NetTrackers',
    description:
      'Comprehensive SEO audits covering technical health, on-page optimisation, backlink profiles and competitor benchmarks. Actionable insights from expert analysts.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/seo/seo-audits' },
  };
}

export default function SeoAuditsPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'SEO Audit Services',
      description: 'Comprehensive SEO audits covering technical health, on-page optimisation and backlink profiles.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/seo/seo-audits',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://www.nettrackers.co.uk/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'SEO Audits', item: 'https://www.nettrackers.co.uk/services/seo/seo-audits' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="SEO Audits That Uncover Every Opportunity"
        description="Before you can improve your search rankings, you need to understand exactly where you stand. Our comprehensive SEO audit examines every dimension of your online presence — technical infrastructure, on-page content quality, backlink profile strength, competitor positioning and user experience signals. The result is a detailed, prioritised report that tells you precisely what is holding your site back and what actions will deliver the greatest ranking improvements. Think of it as a diagnostic blueprint that transforms guesswork into a data-driven roadmap for organic growth."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'SEO', href: '/services/seo' },
          { label: 'SEO Audits', href: '/services/seo/seo-audits' },
        ]}
        ctaPrimary={{ text: 'Request a Free Audit', href: '/contact' }}
        ctaSecondary={{ text: 'See Sample Report', href: '/contact' }}
      />

      <ServiceBenefits
        title="What Our SEO Audit Covers"
        benefits={[
          { icon: '\uD83D\uDD77\uFE0F', title: 'Technical Health Check', description: 'Crawlability, indexation, site speed, Core Web Vitals, mobile usability, HTTPS configuration and structured data validation.' },
          { icon: '\uD83D\uDCDD', title: 'On-Page Content Analysis', description: 'Title tags, meta descriptions, heading structures, keyword usage, content depth and internal linking across all key pages.' },
          { icon: '\uD83D\uDD17', title: 'Backlink Profile Review', description: 'Domain authority assessment, toxic link identification, anchor text distribution and competitor backlink gap analysis.' },
          { icon: '\uD83C\uDFC6', title: 'Competitor Benchmarking', description: 'Side-by-side comparison of your SEO metrics against your top three competitors to identify strengths and weaknesses.' },
          { icon: '\uD83D\uDCCA', title: 'Keyword Opportunity Map', description: 'Identification of high-value keywords where you are close to page one, plus new keyword opportunities your competitors rank for.' },
          { icon: '\uD83D\uDCCB', title: 'Prioritised Action Plan', description: 'Every finding is categorised by effort, impact and priority so you know exactly where to focus resources first.' },
        ]}
      />

      <ServiceProcess
        title="Our SEO Audit Process"
        steps={[
          { number: 1, title: 'Data Collection', description: 'We crawl your site, pull Search Console and Analytics data, analyse your backlink profile and research your competitive landscape.' },
          { number: 2, title: 'Deep Analysis', description: 'Our analysts examine hundreds of ranking factors across technical, on-page, off-page and user experience dimensions.' },
          { number: 3, title: 'Report & Recommendations', description: 'You receive a comprehensive report with clear explanations, priority ratings and actionable recommendations for each finding.' },
          { number: 4, title: 'Strategy Walkthrough', description: 'We present the audit findings in a live session, answer your questions and help you plan the implementation roadmap.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'How detailed is the SEO audit report?', answer: 'Our standard audit report runs between 40 and 80 pages depending on site size. Every issue includes a description, screenshot or data evidence, priority level and a step-by-step fix recommendation.' },
          { question: 'Do you implement the audit recommendations?', answer: 'Our audit is a standalone deliverable, but most clients choose to engage us for implementation as well. We offer both full-service SEO retainers and project-based implementation packages.' },
          { question: 'How long does an audit take?', answer: 'A standard audit takes five to ten working days depending on site size. Enterprise-level audits for sites with thousands of pages may require up to three weeks.' },
          { question: 'Can I share the report with my developers?', answer: 'Absolutely. Technical findings are written with developers in mind, including specific code examples, server configuration recommendations and structured data snippets.' },
          { question: 'How often should I get an SEO audit?', answer: 'We recommend a comprehensive audit at least once per year, with quarterly mini-audits if your site changes frequently through content updates, platform migrations or redesigns.' },
          { question: 'What tools do you use for the audit?', answer: 'We combine Screaming Frog, Ahrefs, Semrush, Google Search Console, PageSpeed Insights, Chrome DevTools and proprietary analysis frameworks for the most thorough possible assessment.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'Technical SEO', description: 'Implement the technical fixes identified in your audit to improve crawlability and site performance.', href: '/services/seo/technical-seo' },
          { title: 'On-Page SEO', description: 'Optimise your content and meta data based on the on-page recommendations from your audit.', href: '/services/seo/on-page-seo' },
          { title: 'Link Building', description: 'Close the backlink gaps identified in the competitor analysis section of your audit.', href: '/services/seo/link-building' },
        ]}
      />

      <CtaBanner
        heading="Find Out What\u2019s Holding You Back"
        subheading="Request a free preliminary SEO audit and get a snapshot of your biggest opportunities."
        primaryCta={{ text: 'Get Free Audit', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
