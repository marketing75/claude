import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Bespoke Website Design Services | NetTrackers',
    description:
      'Stand out online with bespoke website design that reflects your brand, engages visitors and drives measurable business results. UK-based design team.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/web-design-development/website-design' },
  };
}

export default function WebsiteDesignPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Bespoke Website Design Services',
      description: 'Stand out online with bespoke website design that reflects your brand and drives results.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/web-design-development/website-design',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Web Design & Development', item: 'https://www.nettrackers.co.uk/services/web-design-development' },
        { '@type': 'ListItem', position: 3, name: 'Website Design', item: 'https://www.nettrackers.co.uk/services/web-design-development/website-design' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="Bespoke Website Design That Captures Your Brand"
        description="First impressions happen in milliseconds — and your website is usually the first touchpoint a potential customer has with your business. Our bespoke website design service creates visually stunning, strategically structured sites that communicate your value instantly. Every layout, colour palette, typeface and interaction is chosen with purpose: to build trust, guide visitors toward action and set you apart from competitors who rely on generic templates. We design for people first, search engines second, and vanity metrics never."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Web Design & Development', href: '/services/web-design-development' },
          { label: 'Website Design', href: '/services/web-design-development/website-design' },
        ]}
        ctaPrimary={{ text: 'Get a Free Quote', href: '/contact' }}
        ctaSecondary={{ text: 'View Portfolio', href: '/portfolio' }}
      />

      <ServiceBenefits
        title="What You Get with Our Website Design Service"
        benefits={[
          { icon: '\uD83C\uDFA8', title: 'Custom Visual Identity', description: 'Every design is built from scratch around your brand guidelines, colour psychology and audience preferences — no templates, no shortcuts.' },
          { icon: '\uD83D\uDCF1', title: 'Responsive Across Devices', description: 'Your site will look and function flawlessly on desktops, tablets and smartphones, ensuring no visitor is left behind.' },
          { icon: '\u26A1', title: 'Performance-Optimised', description: 'Lightweight assets, lazy loading and optimised code ensure your pages load in under two seconds on any connection.' },
          { icon: '\uD83C\uDFAF', title: 'Conversion-Focused Layouts', description: 'Strategic placement of calls to action, trust signals and content hierarchy to maximise enquiries and sales.' },
          { icon: '\u267F', title: 'WCAG Accessibility', description: 'Designs that meet WCAG 2.1 AA standards so your site is usable by everyone, including visitors with disabilities.' },
          { icon: '\uD83D\uDD0D', title: 'SEO-Ready Structure', description: 'Clean semantic HTML, proper heading hierarchy and fast load times give your site a strong foundation for search rankings.' },
        ]}
      />

      <ServiceProcess
        title="Our Website Design Process"
        steps={[
          { number: 1, title: 'Discovery & Strategy', description: 'We learn about your business, audience, competitors and goals through a detailed brief and research phase so every design decision is informed.' },
          { number: 2, title: 'Wireframing & Architecture', description: 'Low-fidelity wireframes map out the user journey, page hierarchy and content placement before any visual design begins.' },
          { number: 3, title: 'Visual Design & Prototyping', description: 'High-fidelity mockups bring the wireframes to life with your brand colours, typography, imagery and micro-interactions for your approval.' },
          { number: 4, title: 'Feedback & Iteration', description: 'We present the designs, gather your feedback and refine every detail until you are completely satisfied with the result.' },
          { number: 5, title: 'Handoff to Development', description: 'Approved designs are delivered with a comprehensive style guide, asset library and developer specifications for pixel-perfect build.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'How long does a bespoke website design take?', answer: 'Most design projects take between three and six weeks depending on the number of unique page templates and revision rounds required. We provide a detailed timeline at the start of every project.' },
          { question: 'Will I own the design files?', answer: 'Absolutely. Once the project is complete and final payment has been received, all source design files, assets and style guides are transferred to you with full ownership rights.' },
          { question: 'Do you use templates or page builders?', answer: 'Never. Every design is created from a blank canvas based on your specific brand, audience and objectives. This ensures a truly unique online presence.' },
          { question: 'Can you redesign my existing website?', answer: 'Yes — we offer a dedicated website redesign service that analyses your current site, identifies areas for improvement and delivers a modern, high-performing design.' },
          { question: 'What do I need to provide before you start?', answer: 'We will need your brand guidelines (logo, colours, fonts), content direction, competitor examples and any specific functionality requirements. We guide you through the brief process.' },
          { question: 'How many revision rounds are included?', answer: 'Our standard packages include two rounds of revisions per page template. Additional rounds can be arranged if needed — we never rush the design to ensure you are happy.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'Web Development', description: 'Turn your approved designs into a fast, fully functional website built with modern technologies.', href: '/services/web-design-development/web-development' },
          { title: 'Landing Page Design', description: 'High-converting landing pages designed specifically for paid advertising campaigns.', href: '/services/web-design-development/landing-page-design' },
          { title: 'Website Redesign', description: 'Refresh your outdated website with a modern design that improves user experience and conversions.', href: '/services/web-design-development/website-redesign' },
        ]}
      />

      <CtaBanner
        heading="Let's Design Something Remarkable"
        subheading="Book a free design consultation and see how a bespoke website can transform your business."
        primaryCta={{ text: 'Book Free Consultation', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
