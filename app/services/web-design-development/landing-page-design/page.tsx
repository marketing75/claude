import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Landing Page Design & Optimisation | NetTrackers',
    description:
      'High-converting landing page design and optimisation for PPC, social ads and lead generation campaigns. A/B tested and data-driven.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/web-design-development/landing-page-design' },
  };
}

export default function LandingPageDesignPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Landing Page Design & Optimisation',
      description: 'High-converting landing page design for PPC, social ads and lead generation campaigns.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/web-design-development/landing-page-design',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Web Design & Development', item: 'https://www.nettrackers.co.uk/services/web-design-development' },
        { '@type': 'ListItem', position: 3, name: 'Landing Page Design', item: 'https://www.nettrackers.co.uk/services/web-design-development/landing-page-design' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="Landing Pages Engineered to Convert"
        description="You are spending money to drive traffic — make sure every click counts. Our landing page design service creates focused, distraction-free pages built around a single conversion goal, whether that is a lead form submission, a product purchase or a webinar registration. We apply persuasion psychology, heatmap data and A/B testing to craft pages that consistently outperform industry benchmarks. Every headline, image, form field and button is positioned to reduce friction and maximise your return on ad spend."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Web Design & Development', href: '/services/web-design-development' },
          { label: 'Landing Page Design', href: '/services/web-design-development/landing-page-design' },
        ]}
        ctaPrimary={{ text: 'Get a Free Mockup', href: '/contact' }}
        ctaSecondary={{ text: 'See Conversion Results', href: '/case-studies' }}
      />

      <ServiceBenefits
        title="What You Get with Our Landing Page Service"
        benefits={[
          { icon: '\uD83C\uDFAF', title: 'Single-Goal Focus', description: 'Each landing page is designed around one clear conversion objective, eliminating distractions that dilute results.' },
          { icon: '\uD83E\uDDEA', title: 'A/B Testing Built In', description: 'We create multiple headline, layout and CTA variants so you can test what resonates best with your audience.' },
          { icon: '\u26A1', title: 'Sub-Second Load Times', description: 'Lightweight code and optimised assets ensure your page loads instantly, keeping bounce rates low even on mobile.' },
          { icon: '\uD83D\uDCDD', title: 'Persuasive Copywriting', description: 'Benefit-driven headlines, social proof and urgency triggers are woven into the design to compel action.' },
          { icon: '\uD83D\uDCF1', title: 'Mobile-Optimised Forms', description: 'Short, thumb-friendly forms with auto-fill support remove barriers to submission on smaller screens.' },
          { icon: '\uD83D\uDCCA', title: 'Conversion Tracking', description: 'Google Ads, Meta Pixel and custom event tracking are configured so you can measure every lead and sale.' },
        ]}
      />

      <ServiceProcess
        title="How We Build High-Converting Landing Pages"
        steps={[
          { number: 1, title: 'Campaign Brief', description: 'We review your ad campaigns, target audience, offer and conversion goals to define the messaging and structure of the page.' },
          { number: 2, title: 'Wireframe & Copy', description: 'A conversion-focused wireframe is created alongside persuasive copy that speaks directly to your audience\u2019s pain points.' },
          { number: 3, title: 'Design & Development', description: 'The page is designed, coded and connected to your CRM, email tool or analytics platform for seamless lead capture.' },
          { number: 4, title: 'Test & Optimise', description: 'After launch, we monitor performance, run A/B tests and iterate on elements to continuously improve conversion rates.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'What conversion rates can I expect?', answer: 'While results vary by industry and offer, our landing pages typically achieve conversion rates of 8\u201315%, compared to the industry average of 2\u20135%. We optimise continuously to push rates higher.' },
          { question: 'Do you write the copy as well?', answer: 'Yes. Our team includes experienced copywriters who craft benefit-driven headlines, body text and calls to action tailored to your audience and offer.' },
          { question: 'Can you integrate with my existing CRM?', answer: 'Absolutely. We connect landing pages to HubSpot, Salesforce, Pipedrive, Mailchimp and virtually any platform with an API or Zapier integration.' },
          { question: 'How quickly can a landing page be delivered?', answer: 'A single landing page can be designed, built and launched within five to ten working days depending on complexity and approval timelines.' },
          { question: 'Do you offer ongoing optimisation?', answer: 'Yes. Our retainer packages include monthly A/B testing, heatmap analysis and iterative improvements to keep your conversion rates climbing.' },
          { question: 'Can I use the landing page for multiple campaigns?', answer: 'We recommend creating unique landing pages for each campaign to ensure message match. We can quickly duplicate and adapt pages for different audiences or offers.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'Website Design', description: 'Need a full website, not just a landing page? Explore our bespoke design service.', href: '/services/web-design-development/website-design' },
          { title: 'On-Page SEO', description: 'Optimise your landing pages for organic search as well as paid traffic.', href: '/services/seo/on-page-seo' },
          { title: 'Content Marketing', description: 'Drive traffic to your landing pages with strategically planned content campaigns.', href: '/services/seo/content-marketing' },
        ]}
      />

      <CtaBanner
        heading="Stop Wasting Ad Spend on Weak Pages"
        subheading="Let us build a landing page that actually converts. Free mockup included."
        primaryCta={{ text: 'Request Free Mockup', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
