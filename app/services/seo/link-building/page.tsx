import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Link Building Services | NetTrackers',
    description:
      'Earn high-authority backlinks through digital PR, guest posting and content-led outreach. White-hat link building that boosts domain authority and rankings.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/seo/link-building' },
  };
}

export default function LinkBuildingPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Link Building Services',
      description: 'Earn high-authority backlinks through digital PR, guest posting and content-led outreach.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/seo/link-building',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'SEO', item: 'https://www.nettrackers.co.uk/services/seo' },
        { '@type': 'ListItem', position: 3, name: 'Link Building', item: 'https://www.nettrackers.co.uk/services/seo/link-building' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="White-Hat Link Building That Moves the Needle"
        description="Backlinks remain one of Google\u2019s strongest ranking signals, but not all links are created equal. Our link-building service focuses exclusively on earning high-quality, editorially placed backlinks from authoritative, relevant websites through digital PR, data-driven content campaigns and strategic outreach. We never buy links from private blog networks or engage in tactics that risk a penalty. Every link we earn strengthens your domain authority, sends referral traffic and builds long-term trust in the eyes of search engines."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'SEO', href: '/services/seo' },
          { label: 'Link Building', href: '/services/seo/link-building' },
        ]}
        ctaPrimary={{ text: 'Get a Link Strategy', href: '/contact' }}
        ctaSecondary={{ text: 'See Our Link Results', href: '/case-studies' }}
      />

      <ServiceBenefits
        title="What You Get with Our Link Building Service"
        benefits={[
          { icon: '\uD83C\uDF10', title: 'Digital PR Campaigns', description: 'Newsworthy content angles pitched to journalists and editors at top-tier publications to earn high-authority editorial links.' },
          { icon: '\uD83D\uDCDD', title: 'Guest Post Outreach', description: 'Expertly written guest articles placed on relevant, high-domain-authority blogs within your industry niche.' },
          { icon: '\uD83D\uDCCA', title: 'Data-Driven Content', description: 'Original research, surveys and data visualisations that naturally attract links from publishers who reference your findings.' },
          { icon: '\uD83D\uDD0D', title: 'Competitor Backlink Analysis', description: 'We reverse-engineer your competitors\u2019 link profiles to identify replicable opportunities and untapped sources.' },
          { icon: '\uD83D\uDEE1\uFE0F', title: 'Link Quality Assurance', description: 'Every link prospect is vetted for domain authority, traffic, relevance and editorial standards before outreach begins.' },
          { icon: '\uD83D\uDCC8', title: 'Transparent Reporting', description: 'Monthly reports detail every link acquired, including the linking domain, page authority, anchor text and referral traffic impact.' },
        ]}
      />

      <ServiceProcess
        title="Our Link Building Process"
        steps={[
          { number: 1, title: 'Backlink Audit & Gap Analysis', description: 'We analyse your current link profile, compare it against top competitors and identify the types and volumes of links needed to close the gap.' },
          { number: 2, title: 'Strategy & Content Creation', description: 'We develop link-worthy content assets — studies, infographics, tools, guides — and craft personalised outreach pitches for target publications.' },
          { number: 3, title: 'Outreach & Placement', description: 'Our outreach team contacts editors, journalists and webmasters to secure editorially placed links on relevant, high-authority sites.' },
          { number: 4, title: 'Tracking & Iteration', description: 'Acquired links are tracked, their impact on rankings is monitored and the strategy is refined each month for continuous improvement.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'Are your link building methods safe?', answer: 'Yes. We use exclusively white-hat techniques — digital PR, guest posting, resource page outreach and content-led campaigns. We never purchase links from PBNs or engage in link schemes that violate Google\u2019s guidelines.' },
          { question: 'How many links will I receive per month?', answer: 'The number depends on your package and niche competitiveness. Typical campaigns deliver between five and twenty high-quality links per month. We prioritise quality over quantity.' },
          { question: 'How do you measure link quality?', answer: 'We assess domain authority (DA/DR), organic traffic, topical relevance, editorial standards and whether the site has a history of linking to credible sources.' },
          { question: 'How long does it take for links to impact rankings?', answer: 'New backlinks typically begin influencing rankings within four to eight weeks after Google crawls and indexes the linking page. Cumulative gains build over three to six months.' },
          { question: 'Can link building cause a Google penalty?', answer: 'Only if done with manipulative, black-hat tactics — which we never employ. Our approach mirrors how links are naturally earned, minimising any risk to your site.' },
          { question: 'Do you provide the content for guest posts?', answer: 'Yes. Our content team writes every guest article in-house to ensure it meets editorial standards, aligns with your brand voice and provides genuine value to the publisher\u2019s audience.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'Content Marketing', description: 'Create link-worthy content assets that naturally attract backlinks and organic traffic.', href: '/services/seo/content-marketing' },
          { title: 'On-Page SEO', description: 'Ensure the pages receiving backlinks are fully optimised to maximise ranking improvements.', href: '/services/seo/on-page-seo' },
          { title: 'SEO Audits', description: 'Understand your full SEO landscape, including backlink gaps, with a comprehensive audit.', href: '/services/seo/seo-audits' },
        ]}
      />

      <CtaBanner
        heading="Ready to Earn Links That Matter?"
        subheading="Get a free backlink gap analysis and see how your link profile compares to competitors."
        primaryCta={{ text: 'Get Free Analysis', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
