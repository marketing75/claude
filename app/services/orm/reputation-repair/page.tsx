import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Reputation Repair Services | NetTrackers',
    description:
      'Suppress negative search results and rebuild public trust with strategic reputation repair. Confidential, effective and results-driven.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/orm/reputation-repair' },
  };
}

export default function ReputationRepairPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Reputation Repair Services',
      description: 'Suppress negative search results and rebuild public trust with strategic reputation repair.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/orm/reputation-repair',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Online Reputation Management', item: 'https://www.nettrackers.co.uk/services/orm' },
        { '@type': 'ListItem', position: 3, name: 'Reputation Repair', item: 'https://www.nettrackers.co.uk/services/orm/reputation-repair' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="Repair Your Reputation and Reclaim Your Narrative"
        description="Negative articles, damaging reviews or unflattering search results can follow your brand for years, quietly eroding customer trust and costing you revenue. Our reputation repair service takes a strategic, multi-channel approach to suppressing harmful content and replacing it with positive, authoritative assets that tell your real story. We create and promote high-quality web properties, secure positive press coverage, optimise your brand\u2019s search footprint and work with legal partners where content removal is appropriate. Every campaign is confidential and tailored to the severity and nature of the reputational damage."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Online Reputation Management', href: '/services/orm' },
          { label: 'Reputation Repair', href: '/services/orm/reputation-repair' },
        ]}
        ctaPrimary={{ text: 'Get Confidential Help', href: '/contact' }}
        ctaSecondary={{ text: 'Learn How It Works', href: '#process' }}
      />

      <ServiceBenefits
        title="What You Get with Reputation Repair"
        benefits={[
          { icon: '\uD83D\uDEE1\uFE0F', title: 'Negative Result Suppression', description: 'We push damaging search results off page one by creating and promoting authoritative, positive content assets that outrank them.' },
          { icon: '\uD83D\uDCF0', title: 'Positive Press Placement', description: 'Earned media coverage in reputable publications that rebuilds credibility and dominates search results for your brand name.' },
          { icon: '\uD83C\uDF10', title: 'Owned Property Development', description: 'New websites, social profiles and content hubs are built and optimised to fill search results with content you control.' },
          { icon: '\u2696\uFE0F', title: 'Content Removal Assistance', description: 'Where applicable, we pursue legal takedowns, right-to-be-forgotten requests and platform-specific removal processes.' },
          { icon: '\uD83D\uDCCA', title: 'SERP Monitoring Dashboard', description: 'A live dashboard tracks your brand\u2019s search results daily so you can see negative content being pushed down in real time.' },
          { icon: '\uD83D\uDD12', title: 'Complete Confidentiality', description: 'Every engagement is handled with strict confidentiality. We never disclose client identities or the nature of their campaigns.' },
        ]}
      />

      <ServiceProcess
        title="Our Reputation Repair Process"
        steps={[
          { number: 1, title: 'Damage Assessment', description: 'We audit your brand\u2019s search results, social mentions and review profiles to map the full extent of the reputational damage.' },
          { number: 2, title: 'Strategy Development', description: 'A tailored repair plan is created combining content creation, SEO, digital PR and where necessary legal removal strategies.' },
          { number: 3, title: 'Content Creation & Promotion', description: 'Positive, authoritative content is published across owned properties, third-party platforms and press outlets to displace negative results.' },
          { number: 4, title: 'Ongoing Monitoring', description: 'We continuously monitor search results and alert you to any new threats while reinforcing the positive content we have built.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'How long does reputation repair take?', answer: 'Timelines depend on the severity of the damage. Minor issues can be addressed in two to three months, while more entrenched negative content may require six to twelve months of sustained effort.' },
          { question: 'Can you remove negative content from Google?', answer: 'In some cases, content can be removed through legal channels, GDPR right-to-be-forgotten requests or platform policies. Where removal is not possible, we suppress results by outranking them.' },
          { question: 'Is the process confidential?', answer: 'Absolutely. We sign non-disclosure agreements and handle every engagement with the strictest confidentiality. Our methods are designed to be invisible to the public.' },
          { question: 'Will the negative results come back?', answer: 'Our approach builds lasting positive assets that maintain their rankings over time. We also offer ongoing monitoring retainers to catch and address any re-emergence quickly.' },
          { question: 'Do you guarantee results?', answer: 'While no ethical agency can guarantee specific rankings, we have a proven track record of successfully suppressing negative results for the vast majority of our clients.' },
          { question: 'Can you help with fake or defamatory content?', answer: 'Yes. We work with specialist legal partners to pursue removal of verifiably false or defamatory content through appropriate legal and platform-specific channels.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'Brand Monitoring', description: 'Detect new mentions and potential threats early with real-time brand monitoring.', href: '/services/orm/brand-monitoring' },
          { title: 'Review Management', description: 'Counterbalance negative reviews with a proactive review generation and response strategy.', href: '/services/orm/review-management' },
          { title: 'Crisis Management', description: 'Need immediate response? Our crisis team can contain damage while long-term repair is underway.', href: '/services/orm/crisis-management' },
        ]}
      />

      <CtaBanner
        heading="Take Back Control of Your Reputation"
        subheading="Request a confidential damage assessment and find out how we can help."
        primaryCta={{ text: 'Request Confidential Assessment', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Confidentially', href: 'tel:+442012345678' }}
      />
    </>
  );
}
