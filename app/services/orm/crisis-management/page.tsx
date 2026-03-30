import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Crisis Management Services | NetTrackers',
    description:
      'Rapid-response digital crisis management that contains reputational damage, controls the narrative and protects your brand when it matters most.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/orm/crisis-management' },
  };
}

export default function CrisisManagementPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Crisis Management Services',
      description: 'Rapid-response digital crisis management that contains reputational damage and protects your brand.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/orm/crisis-management',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Online Reputation Management', item: 'https://www.nettrackers.co.uk/services/orm' },
        { '@type': 'ListItem', position: 3, name: 'Crisis Management', item: 'https://www.nettrackers.co.uk/services/orm/crisis-management' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="Protect Your Brand When a Crisis Strikes"
        description="A viral social media post, a data breach disclosure, a disgruntled employee\u2019s public allegation or a negative news story can escalate from manageable concern to full-blown crisis in a matter of hours. Our crisis management team is available around the clock to help you contain damage, control the narrative and communicate with stakeholders effectively. We combine digital PR expertise, search result management and social media rapid response to minimise the long-term impact on your brand equity and customer trust. Speed and strategy are everything in a crisis, and we deliver both."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Online Reputation Management', href: '/services/orm' },
          { label: 'Crisis Management', href: '/services/orm/crisis-management' },
        ]}
        ctaPrimary={{ text: 'Get Immediate Help', href: '/contact' }}
        ctaSecondary={{ text: 'Crisis Preparedness Plan', href: '/contact' }}
      />

      <ServiceBenefits
        title="What You Get with Crisis Management"
        benefits={[
          { icon: '\u23F0', title: '24/7 Rapid Response', description: 'Our crisis team is on call around the clock. When a crisis breaks, we mobilise within hours \u2014 not days \u2014 to begin containment.' },
          { icon: '\uD83D\uDCE3', title: 'Narrative Control', description: 'We craft holding statements, press releases and social media responses that control the story before misinformation takes hold.' },
          { icon: '\uD83D\uDD0D', title: 'Search Result Management', description: 'Rapid deployment of positive content and SEO tactics to push crisis-related search results off page one.' },
          { icon: '\uD83D\uDCF1', title: 'Social Media War Room', description: 'Real-time monitoring and response across all social platforms to address mentions, correct misinformation and engage stakeholders.' },
          { icon: '\uD83D\uDCCB', title: 'Stakeholder Communications', description: 'Tailored messaging for customers, employees, investors and media to ensure consistency and transparency throughout the crisis.' },
          { icon: '\uD83D\uDEE1\uFE0F', title: 'Post-Crisis Recovery Plan', description: 'Once the immediate crisis is contained, we develop a long-term recovery strategy to rebuild trust and prevent recurrence.' },
        ]}
      />

      <ServiceProcess
        title="Our Crisis Response Process"
        steps={[
          { number: 1, title: 'Immediate Assessment', description: 'Within hours of engagement, we assess the scope, severity and trajectory of the crisis across all digital channels.' },
          { number: 2, title: 'Containment Strategy', description: 'We deploy holding statements, correct misinformation, brief your spokespeople and begin managing search results and social conversations.' },
          { number: 3, title: 'Sustained Management', description: 'Daily monitoring, response management and stakeholder updates continue until the crisis is fully contained and media attention subsides.' },
          { number: 4, title: 'Recovery & Prevention', description: 'We conduct a post-crisis review, implement long-term reputation recovery tactics and develop a crisis preparedness plan for the future.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'How quickly can you respond to a crisis?', answer: 'Our crisis team can be mobilised within two to four hours of initial contact. For clients on our preparedness retainer, response is even faster as protocols and contacts are already in place.' },
          { question: 'Do you offer proactive crisis planning?', answer: 'Yes. Our crisis preparedness service includes scenario planning, response protocol documentation, media training for spokespeople and pre-approved holding statements so you are ready before a crisis occurs.' },
          { question: 'What types of crises do you handle?', answer: 'We manage digital crises of all types \u2014 viral social media incidents, negative press coverage, data breaches, executive controversies, product recalls, employee misconduct allegations and competitor attacks.' },
          { question: 'Can you prevent a story from being published?', answer: 'We do not suppress legitimate journalism, but we can engage with journalists to ensure your side of the story is represented, provide factual corrections and minimise sensationalism.' },
          { question: 'How do you manage multiple social media platforms simultaneously?', answer: 'Our team uses enterprise social media management tools to monitor and respond across all platforms in real time from a centralised command centre.' },
          { question: 'What does a crisis preparedness retainer include?', answer: 'Annual retainers include crisis scenario planning, response playbooks, quarterly media training, monitoring setup and guaranteed priority access to our crisis team when needed.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'Brand Monitoring', description: 'Continuous monitoring helps you detect potential crises before they escalate.', href: '/services/orm/brand-monitoring' },
          { title: 'Reputation Repair', description: 'Long-term recovery after a crisis with strategic content and search result management.', href: '/services/orm/reputation-repair' },
          { title: 'Personal Reputation', description: 'Protect the personal reputation of executives involved in corporate crises.', href: '/services/orm/personal-reputation' },
        ]}
      />

      <CtaBanner
        heading="In a Crisis? We Can Help Right Now."
        subheading="Call our crisis line for immediate assistance or request a preparedness consultation."
        primaryCta={{ text: 'Get Immediate Help', href: '/contact' }}
        secondaryCta={{ text: 'Crisis Hotline', href: 'tel:+442012345678' }}
      />
    </>
  );
}
