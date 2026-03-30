import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Brand Monitoring Services | NetTrackers',
    description:
      'Track every mention of your brand across the web, social media and news outlets in real time. Stay informed, respond fast and protect your reputation.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/orm/brand-monitoring' },
  };
}

export default function BrandMonitoringPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Brand Monitoring Services',
      description: 'Track every mention of your brand across the web, social media and news outlets in real time.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/orm/brand-monitoring',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Online Reputation Management', item: 'https://www.nettrackers.co.uk/services/orm' },
        { '@type': 'ListItem', position: 3, name: 'Brand Monitoring', item: 'https://www.nettrackers.co.uk/services/orm/brand-monitoring' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="Know What People Are Saying About Your Brand"
        description="In the age of social media and instant publishing, a single tweet, forum post or news article can shape public perception of your brand within hours. Our brand monitoring service tracks every mention of your business, products, executives and key competitors across the entire digital landscape \u2014 from news outlets and blogs to social media platforms, forums and review sites. Real-time alerts give you the power to respond quickly, amplify positive coverage and address potential issues before they escalate. You cannot manage what you do not measure, and our monitoring gives you complete visibility."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Online Reputation Management', href: '/services/orm' },
          { label: 'Brand Monitoring', href: '/services/orm/brand-monitoring' },
        ]}
        ctaPrimary={{ text: 'Start Monitoring Today', href: '/contact' }}
        ctaSecondary={{ text: 'See How It Works', href: '#process' }}
      />

      <ServiceBenefits
        title="What You Get with Brand Monitoring"
        benefits={[
          { icon: '\uD83D\uDD14', title: 'Real-Time Alerts', description: 'Instant email and Slack notifications whenever your brand, products or key personnel are mentioned anywhere online.' },
          { icon: '\uD83C\uDF10', title: 'Full Web Coverage', description: 'Monitoring spans news sites, blogs, forums, social media platforms, review sites, podcasts and video transcripts.' },
          { icon: '\uD83D\uDCCA', title: 'Sentiment Analysis', description: 'AI-powered sentiment scoring categorises mentions as positive, negative or neutral so you can prioritise responses.' },
          { icon: '\uD83C\uDFC6', title: 'Competitor Tracking', description: 'Monitor your competitors\u2019 mentions alongside your own to benchmark share of voice and spot industry trends.' },
          { icon: '\uD83D\uDCC8', title: 'Trend Reporting', description: 'Weekly and monthly reports highlight mention volume trends, sentiment shifts and the most influential sources discussing your brand.' },
          { icon: '\uD83D\uDD0D', title: 'Keyword & Hashtag Tracking', description: 'Beyond your brand name, we track product names, campaign hashtags, industry terms and executive names.' },
        ]}
      />

      <ServiceProcess
        title="Our Brand Monitoring Process"
        steps={[
          { number: 1, title: 'Monitoring Setup', description: 'We define your brand keywords, competitor names, product terms and executive names, then configure monitoring tools across all relevant channels.' },
          { number: 2, title: 'Alert Configuration', description: 'Real-time alerts are set up via email, Slack or Microsoft Teams with severity levels based on sentiment and source authority.' },
          { number: 3, title: 'Analysis & Response', description: 'Our team reviews flagged mentions, provides recommended responses for sensitive items and escalates potential crises immediately.' },
          { number: 4, title: 'Reporting & Insights', description: 'Regular reports summarise mention volume, sentiment distribution, top sources and actionable insights for your marketing and PR teams.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'What platforms do you monitor?', answer: 'We monitor Google search results, social media (Twitter/X, Facebook, Instagram, LinkedIn, TikTok, Reddit), news outlets, blogs, forums, review sites, podcasts and video platforms.' },
          { question: 'How quickly will I be alerted to new mentions?', answer: 'Critical mentions trigger real-time alerts within minutes. Routine mentions are batched into daily or weekly digests depending on your preference and volume.' },
          { question: 'Can you monitor mentions in other languages?', answer: 'Yes. Our tools support monitoring in over 40 languages, which is essential for brands with an international presence or customer base.' },
          { question: 'What happens when a negative mention is detected?', answer: 'You receive an immediate alert with our recommended response strategy. For high-severity mentions, our team can draft and execute a response on your behalf.' },
          { question: 'Do you track competitor mentions too?', answer: 'Yes. Competitor monitoring is included as standard so you can benchmark your share of voice and identify opportunities from competitor weaknesses.' },
          { question: 'Can I access the monitoring dashboard myself?', answer: 'Absolutely. You receive login credentials for a web-based dashboard where you can view real-time mentions, filter by platform or sentiment and generate custom reports.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'Crisis Management', description: 'If monitoring detects a serious threat, our crisis team can respond immediately.', href: '/services/orm/crisis-management' },
          { title: 'Review Management', description: 'Combine brand monitoring with proactive review management for complete reputation control.', href: '/services/orm/review-management' },
          { title: 'Reputation Repair', description: 'Address the root causes of negative mentions with our strategic reputation repair service.', href: '/services/orm/reputation-repair' },
        ]}
      />

      <CtaBanner
        heading="Never Be Caught Off Guard Again"
        subheading="Start monitoring your brand mentions today with a free trial of our monitoring platform."
        primaryCta={{ text: 'Start Free Trial', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
