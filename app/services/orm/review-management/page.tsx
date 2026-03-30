import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Review Management Services | NetTrackers',
    description:
      'Generate more positive reviews, respond professionally to feedback and turn your online reviews into a powerful competitive advantage.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/orm/review-management' },
  };
}

export default function ReviewManagementPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Review Management Services',
      description: 'Generate more positive reviews and turn online feedback into a competitive advantage.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/orm/review-management',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Online Reputation Management', item: 'https://www.nettrackers.co.uk/services/orm' },
        { '@type': 'ListItem', position: 3, name: 'Review Management', item: 'https://www.nettrackers.co.uk/services/orm/review-management' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="Turn Reviews into Your Strongest Sales Tool"
        description="Over 90% of consumers read online reviews before choosing a business, and the difference between a 3.5-star and 4.5-star rating can mean a 35% increase in revenue. Our review management service helps you systematically generate authentic positive reviews, respond thoughtfully to every piece of feedback and monitor review platforms around the clock. We build automated review request workflows, train your team on best-practice responses and provide a centralised dashboard so you can see your reputation at a glance. The result is a growing library of social proof that builds trust and drives new customers through your door."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Online Reputation Management', href: '/services/orm' },
          { label: 'Review Management', href: '/services/orm/review-management' },
        ]}
        ctaPrimary={{ text: 'Get a Free Review Audit', href: '/contact' }}
        ctaSecondary={{ text: 'See Review Results', href: '/case-studies' }}
      />

      <ServiceBenefits
        title="What You Get with Review Management"
        benefits={[
          { icon: '\u2B50', title: 'Automated Review Requests', description: 'SMS and email workflows triggered after transactions that make it effortless for happy customers to leave positive reviews.' },
          { icon: '\uD83D\uDCAC', title: 'Professional Response Service', description: 'Every review \u2014 positive and negative \u2014 receives a timely, professional response that demonstrates you value customer feedback.' },
          { icon: '\uD83D\uDCCA', title: 'Centralised Dashboard', description: 'Monitor reviews across Google, Trustpilot, Facebook, TripAdvisor and industry-specific platforms from a single interface.' },
          { icon: '\uD83D\uDD14', title: 'Real-Time Alerts', description: 'Instant notifications when new reviews are posted so negative feedback can be addressed before it escalates.' },
          { icon: '\uD83D\uDCC8', title: 'Sentiment Analysis', description: 'AI-powered analysis of review sentiment trends helps you identify recurring issues and operational improvement opportunities.' },
          { icon: '\uD83C\uDFC6', title: 'Review Marketing', description: 'We showcase your best reviews on your website, social channels and marketing materials to maximise their persuasive impact.' },
        ]}
      />

      <ServiceProcess
        title="Our Review Management Process"
        steps={[
          { number: 1, title: 'Review Audit', description: 'We analyse your current reviews across all platforms, identify trends, benchmark against competitors and set improvement targets.' },
          { number: 2, title: 'System Setup', description: 'Automated review request workflows are configured, monitoring dashboards are connected and response templates are prepared.' },
          { number: 3, title: 'Ongoing Management', description: 'We respond to reviews, manage escalations, refine request timing and continuously optimise the workflow for maximum review volume.' },
          { number: 4, title: 'Reporting & Insights', description: 'Monthly reports track review volume, average rating, sentiment trends and the impact of reviews on local search rankings.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'Is it ethical to ask customers for reviews?', answer: 'Yes \u2014 asking satisfied customers to share their experience is perfectly ethical and encouraged by platforms like Google. We never incentivise reviews or create fake ones, as that violates platform guidelines.' },
          { question: 'How do you handle negative reviews?', answer: 'We craft empathetic, solution-oriented responses that acknowledge the customer\u2019s concern and demonstrate your commitment to resolution. This often turns a negative into a positive in the eyes of future readers.' },
          { question: 'Which review platforms do you manage?', answer: 'Google, Trustpilot, Facebook, TripAdvisor, Yell, Yelp, industry-specific platforms and any other review site relevant to your business.' },
          { question: 'Can you remove fake reviews?', answer: 'We flag reviews that violate platform guidelines and pursue removal through official channels. While removal is not guaranteed, we have a strong success rate with clearly fraudulent or policy-violating reviews.' },
          { question: 'How quickly will I see more reviews?', answer: 'Most clients see a significant increase in review volume within the first month of activating automated review requests. Consistent improvement builds from there.' },
          { question: 'Do reviews affect my search rankings?', answer: 'Yes. Review quantity, quality and recency are confirmed ranking factors for Google\u2019s local Map Pack. A strong review profile directly supports your local SEO efforts.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'Local SEO', description: 'Boost your local rankings with reviews, citations and Google Business Profile optimisation.', href: '/services/seo/local-seo' },
          { title: 'Brand Monitoring', description: 'Extend your monitoring beyond reviews to track every mention of your brand online.', href: '/services/orm/brand-monitoring' },
          { title: 'Reputation Repair', description: 'If negative reviews have already damaged your reputation, our repair service can help.', href: '/services/orm/reputation-repair' },
        ]}
      />

      <CtaBanner
        heading="Ready to Build a Five-Star Reputation?"
        subheading="Get a free review audit and discover how to turn customer feedback into growth."
        primaryCta={{ text: 'Get Free Review Audit', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
