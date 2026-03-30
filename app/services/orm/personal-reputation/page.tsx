import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Personal Reputation Management | NetTrackers',
    description:
      'Protect and enhance the online reputation of executives, professionals and public figures. Confidential personal brand management from NetTrackers.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/orm/personal-reputation' },
  };
}

export default function PersonalReputationPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Personal Reputation Management',
      description: 'Protect and enhance the online reputation of executives, professionals and public figures.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/orm/personal-reputation',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Online Reputation Management', item: 'https://www.nettrackers.co.uk/services/orm' },
        { '@type': 'ListItem', position: 3, name: 'Personal Reputation', item: 'https://www.nettrackers.co.uk/services/orm/personal-reputation' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="Your Name Is Your Brand \u2014 Protect It"
        description="When someone Googles your name, what do they find? For executives, entrepreneurs, medical professionals, solicitors and public figures, personal search results can make or break opportunities. A single negative article, an old legal matter or an unflattering forum thread can overshadow decades of professional achievement. Our personal reputation management service builds a positive, authoritative digital presence around your name by creating and promoting high-quality content, securing press features, optimising your professional profiles and, where necessary, suppressing harmful results. Every engagement is handled with absolute discretion."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Online Reputation Management', href: '/services/orm' },
          { label: 'Personal Reputation', href: '/services/orm/personal-reputation' },
        ]}
        ctaPrimary={{ text: 'Get Confidential Help', href: '/contact' }}
        ctaSecondary={{ text: 'Learn How It Works', href: '#process' }}
      />

      <ServiceBenefits
        title="What You Get with Personal Reputation Management"
        benefits={[
          { icon: '\uD83D\uDD0D', title: 'Personal SERP Audit', description: 'We analyse every search result that appears for your name and related queries to map your current digital reputation landscape.' },
          { icon: '\uD83D\uDCDD', title: 'Thought Leadership Content', description: 'Bylined articles, guest posts and interview features published on authoritative platforms that position you as an industry leader.' },
          { icon: '\uD83D\uDCF0', title: 'Press & Media Placement', description: 'Strategic digital PR campaigns that secure positive coverage in respected publications, displacing negative results.' },
          { icon: '\uD83C\uDF10', title: 'Profile Optimisation', description: 'LinkedIn, personal website, social media and professional directory profiles are optimised to rank prominently for your name.' },
          { icon: '\uD83D\uDEE1\uFE0F', title: 'Negative Result Suppression', description: 'Harmful content is pushed off page one through the creation and promotion of positive, high-authority web properties.' },
          { icon: '\uD83D\uDD12', title: 'Complete Discretion', description: 'Strict NDAs, encrypted communications and discreet methods ensure your engagement with us remains entirely private.' },
        ]}
      />

      <ServiceProcess
        title="Our Personal Reputation Process"
        steps={[
          { number: 1, title: 'Confidential Assessment', description: 'We conduct a thorough audit of your personal search results, social profiles and online mentions to understand the current state of your digital reputation.' },
          { number: 2, title: 'Strategy & Content Plan', description: 'A personalised strategy is developed combining content creation, profile optimisation, media outreach and, where appropriate, suppression tactics.' },
          { number: 3, title: 'Execution & Publishing', description: 'High-quality content is created and published across owned properties, third-party platforms and press outlets to build a positive digital footprint.' },
          { number: 4, title: 'Ongoing Protection', description: 'Continuous monitoring and proactive content updates ensure your positive reputation is maintained and any new threats are addressed swiftly.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'Who typically uses personal reputation management?', answer: 'CEOs, founders, board members, medical professionals, solicitors, financial advisors, public figures and anyone whose personal search results directly affect their career or business opportunities.' },
          { question: 'Can you guarantee negative results will disappear?', answer: 'While we cannot guarantee removal of content we do not control, our suppression strategies have a strong track record of pushing negative results beyond page one where they receive minimal visibility.' },
          { question: 'How long does personal reputation management take?', answer: 'Building a robust positive presence typically takes three to six months. Suppressing stubborn negative results may require six to twelve months depending on the authority of the offending content.' },
          { question: 'Will people know I hired a reputation management firm?', answer: 'No. Our methods are designed to appear entirely organic. We use strict NDAs and discreet tactics to ensure your engagement with us remains confidential.' },
          { question: 'Do I need to create social media accounts?', answer: 'We recommend maintaining active profiles on key platforms as they rank strongly for personal name searches. We can manage these on your behalf if you prefer not to be directly active.' },
          { question: 'Can you help before a problem arises?', answer: 'Absolutely. Proactive personal reputation management builds a strong positive presence before any negative content appears, making it much harder for harmful results to gain visibility.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'Reputation Repair', description: 'If damaging content has already appeared, our repair service can suppress and counteract it.', href: '/services/orm/reputation-repair' },
          { title: 'Brand Monitoring', description: 'Monitor mentions of your name across the web to catch potential threats early.', href: '/services/orm/brand-monitoring' },
          { title: 'Crisis Management', description: 'If a personal reputation crisis escalates, our crisis team provides immediate support.', href: '/services/orm/crisis-management' },
        ]}
      />

      <CtaBanner
        heading="Protect Your Personal Brand"
        subheading="Request a confidential assessment and take control of what people find when they search your name."
        primaryCta={{ text: 'Request Confidential Assessment', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Confidentially', href: 'tel:+442012345678' }}
      />
    </>
  );
}
