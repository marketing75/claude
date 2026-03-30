import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Content Marketing Services | NetTrackers',
    description:
      'Strategic content marketing that attracts organic traffic, builds authority and converts readers into customers. Blog posts, guides, case studies and more.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/seo/content-marketing' },
  };
}

export default function ContentMarketingPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Content Marketing Services',
      description: 'Strategic content marketing that attracts organic traffic, builds authority and converts readers into customers.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/seo/content-marketing',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://www.nettrackers.co.uk/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'Content Marketing', item: 'https://www.nettrackers.co.uk/services/seo/content-marketing' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="Content That Attracts, Engages and Converts"
        description="Content marketing is not about publishing blog posts for the sake of it. It is about creating strategically researched, expertly written content that answers the questions your ideal customers are asking, positions your brand as a trusted authority and gently guides readers toward a commercial action. Our content team combines keyword research, competitive analysis and editorial storytelling to produce articles, guides, case studies and resources that rank on Google, earn backlinks organically and deliver a measurable return on your investment."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'SEO', href: '/services/seo' },
          { label: 'Content Marketing', href: '/services/seo/content-marketing' },
        ]}
        ctaPrimary={{ text: 'Get a Content Strategy', href: '/contact' }}
        ctaSecondary={{ text: 'See Content Results', href: '/case-studies' }}
      />

      <ServiceBenefits
        title="What You Get with Our Content Marketing Service"
        benefits={[
          { icon: '\uD83D\uDCDD', title: 'Content Strategy', description: 'A documented content plan built around keyword clusters, buyer personas and editorial calendars so every piece has a clear purpose.' },
          { icon: '\uD83D\uDD0D', title: 'SEO-Driven Writing', description: 'Every article is optimised for a target keyword cluster, with proper heading structure, internal links and readability scoring.' },
          { icon: '\uD83D\uDCDA', title: 'Long-Form Guides', description: 'In-depth, authoritative guides and pillar pages that dominate competitive keywords and attract natural backlinks.' },
          { icon: '\uD83D\uDCC8', title: 'Performance Tracking', description: 'Each piece of content is tracked for rankings, organic traffic, engagement metrics and conversion attribution.' },
          { icon: '\uD83C\uDFA4', title: 'Thought Leadership', description: 'Bylined articles, opinion pieces and industry analysis that position your brand and its leaders as experts in the field.' },
          { icon: '\uD83D\uDD04', title: 'Content Refresh Programme', description: 'Existing content is regularly audited and updated to maintain freshness, accuracy and ranking competitiveness.' },
        ]}
      />

      <ServiceProcess
        title="Our Content Marketing Process"
        steps={[
          { number: 1, title: 'Strategy & Research', description: 'We conduct keyword research, analyse competitor content, define buyer personas and build an editorial calendar aligned to your business goals.' },
          { number: 2, title: 'Content Production', description: 'Our writers and editors produce high-quality, thoroughly researched content that is fact-checked, SEO-optimised and aligned with your brand voice.' },
          { number: 3, title: 'Publishing & Distribution', description: 'Content is published on your site, shared through email and social channels, and promoted to maximise reach and backlink opportunities.' },
          { number: 4, title: 'Measure & Iterate', description: 'Monthly reporting tracks traffic, rankings, engagement and conversions per piece. Insights inform the next month\u2019s editorial priorities.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'What types of content do you create?', answer: 'Blog posts, long-form guides, case studies, white papers, infographics, email newsletters and social media content. We recommend a mix of formats based on your audience and goals.' },
          { question: 'How often should I publish new content?', answer: 'Consistency matters more than frequency. For most businesses, two to four high-quality articles per month is sufficient to build momentum and see meaningful organic growth.' },
          { question: 'Do you handle content publishing?', answer: 'Yes. We can publish directly to your CMS, optimise images, add internal links and configure meta data. Alternatively, we deliver ready-to-publish drafts for your team to review.' },
          { question: 'How do you ensure content quality?', answer: 'Every piece passes through a multi-stage editorial process: research brief, first draft, editorial review, SEO optimisation check and final client approval before publication.' },
          { question: 'How do you measure content marketing ROI?', answer: 'We track organic traffic growth, keyword rankings, time on page, lead form submissions and revenue attributed to content pages using analytics and CRM data.' },
          { question: 'Can you write for highly technical industries?', answer: 'Yes. We have experience creating content for SaaS, fintech, healthcare, engineering and legal sectors. For specialist topics, we interview your subject-matter experts to ensure accuracy.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'On-Page SEO', description: 'Ensure every piece of content is fully optimised for its target keywords and search intent.', href: '/services/seo/on-page-seo' },
          { title: 'Link Building', description: 'Amplify your best content with outreach campaigns that earn authoritative backlinks.', href: '/services/seo/link-building' },
          { title: 'SEO Audits', description: 'Identify content gaps and cannibalisation issues with a comprehensive SEO audit.', href: '/services/seo/seo-audits' },
        ]}
      />

      <CtaBanner
        heading="Ready to Make Content Your Growth Engine?"
        subheading="Get a free content strategy consultation and discover what your audience is searching for."
        primaryCta={{ text: 'Book Free Consultation', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
