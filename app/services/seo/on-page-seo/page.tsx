import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'On-Page SEO Services | NetTrackers',
    description:
      'Optimise your website content, meta tags, headings, images and internal links for higher Google rankings. Expert on-page SEO from NetTrackers.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/seo/on-page-seo' },
  };
}

export default function OnPageSeoPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'On-Page SEO Services',
      description: 'Optimise your website content, meta tags, headings and internal links for higher rankings.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/seo/on-page-seo',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://www.nettrackers.co.uk/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'On-Page SEO', item: 'https://www.nettrackers.co.uk/services/seo/on-page-seo' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="On-Page SEO That Makes Every Page Work Harder"
        description="On-page SEO is where search intent meets your content. It is the art and science of ensuring that every page on your website is clearly understood by search engines and deeply relevant to the people who find it. We optimise your title tags, meta descriptions, heading structure, keyword placement, image alt text, internal linking and content quality to send the strongest possible relevance signals to Google. The result is higher rankings, better click-through rates and more engaged visitors who stay longer and convert more often."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'SEO', href: '/services/seo' },
          { label: 'On-Page SEO', href: '/services/seo/on-page-seo' },
        ]}
        ctaPrimary={{ text: 'Get an On-Page Audit', href: '/contact' }}
        ctaSecondary={{ text: 'See Our Rankings', href: '/case-studies' }}
      />

      <ServiceBenefits
        title="What You Get with Our On-Page SEO Service"
        benefits={[
          { icon: '\uD83C\uDFF7\uFE0F', title: 'Title Tag & Meta Optimisation', description: 'Compelling, keyword-rich title tags and meta descriptions crafted to maximise click-through rates from search results.' },
          { icon: '\uD83D\uDCDD', title: 'Content Optimisation', description: 'Existing content is refined for keyword relevance, readability, semantic depth and search intent alignment without sounding robotic.' },
          { icon: '\uD83D\uDD17', title: 'Internal Link Architecture', description: 'Strategic internal linking distributes page authority, improves crawl efficiency and guides users through your content hierarchy.' },
          { icon: '\uD83D\uDDBC\uFE0F', title: 'Image Optimisation', description: 'Descriptive alt text, proper file naming, compression and next-gen formats ensure images contribute to rankings and load fast.' },
          { icon: '\uD83C\uDFAF', title: 'Keyword Mapping', description: 'Each page targets a primary keyword cluster, eliminating cannibalisation and ensuring every URL has a clear ranking purpose.' },
          { icon: '\uD83D\uDCC8', title: 'SERP Feature Targeting', description: 'Structured content formatting — FAQs, tables, lists — designed to win featured snippets and People Also Ask placements.' },
        ]}
      />

      <ServiceProcess
        title="Our On-Page SEO Process"
        steps={[
          { number: 1, title: 'Keyword Research & Mapping', description: 'We identify the highest-value keywords for your business and map them to existing or planned pages to eliminate gaps and cannibalisation.' },
          { number: 2, title: 'Content Audit', description: 'Every page is evaluated for relevance, depth, readability and competitive positioning against the current top-ranking results.' },
          { number: 3, title: 'Optimisation & Implementation', description: 'Title tags, headings, body content, images and internal links are optimised page by page following a prioritised schedule.' },
          { number: 4, title: 'Performance Tracking', description: 'Ranking, traffic and engagement metrics are tracked per page so we can measure the impact of every change and iterate accordingly.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'What is on-page SEO?', answer: 'On-page SEO encompasses all optimisations made directly on your website pages — including content, HTML elements, images and internal links — to improve their relevance and ranking potential for target keywords.' },
          { question: 'How does on-page SEO differ from technical SEO?', answer: 'Technical SEO focuses on site infrastructure (crawlability, speed, indexation), while on-page SEO focuses on the content and HTML of individual pages. Both are essential for a complete strategy.' },
          { question: 'Will you rewrite my existing content?', answer: 'We enhance and optimise your existing content rather than replacing it wholesale. If a page needs significant rewriting to compete, we will recommend that as part of our content strategy.' },
          { question: 'How many pages do you optimise per month?', answer: 'This depends on your package size. Typical campaigns optimise between ten and thirty pages per month, prioritised by traffic potential and commercial value.' },
          { question: 'How long until I see ranking improvements?', answer: 'Individual page optimisations can show ranking movement within two to six weeks. Cumulative improvements across the site build momentum over three to six months.' },
          { question: 'Do you handle keyword research?', answer: 'Yes. Every on-page SEO engagement begins with thorough keyword research, competitive analysis and keyword-to-page mapping so we target the right terms on the right pages.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'Content Marketing', description: 'Create new, keyword-targeted content to fill gaps in your topic coverage and attract organic traffic.', href: '/services/seo/content-marketing' },
          { title: 'Technical SEO', description: 'Ensure the technical foundations of your site support your on-page optimisation efforts.', href: '/services/seo/technical-seo' },
          { title: 'Link Building', description: 'Amplify the impact of your optimised pages with authoritative backlinks.', href: '/services/seo/link-building' },
        ]}
      />

      <CtaBanner
        heading="Unlock the Full Potential of Your Content"
        subheading="Get a free on-page SEO audit and see exactly where your pages are leaving rankings on the table."
        primaryCta={{ text: 'Get Free On-Page Audit', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
