import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'SaaS Development Services | NetTrackers',
    description:
      'Build scalable, multi-tenant SaaS applications with subscription billing, user management and enterprise-grade infrastructure. From MVP to scale.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/software-development/saas-development' },
  };
}

export default function SaasDevelopmentPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'SaaS Development Services',
      description: 'Build scalable, multi-tenant SaaS applications with subscription billing and enterprise-grade infrastructure.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/software-development/saas-development',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Software Development', item: 'https://www.nettrackers.co.uk/services/software-development' },
        { '@type': 'ListItem', position: 3, name: 'SaaS Development', item: 'https://www.nettrackers.co.uk/services/software-development/saas-development' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="Turn Your Idea into a Scalable SaaS Product"
        description="Building a successful SaaS product requires more than just writing code \u2014 it demands a deep understanding of multi-tenancy, subscription economics, user onboarding, data isolation and the infrastructure to scale from ten users to ten thousand without rearchitecting. Our SaaS development team has launched products across industries from fintech to logistics, and we bring that experience to every engagement. Whether you are validating an idea with an MVP or scaling an existing product, we build the technical foundation for sustainable recurring revenue, combining clean architecture with the commercial awareness that turns software into a business."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Software Development', href: '/services/software-development' },
          { label: 'SaaS Development', href: '/services/software-development/saas-development' },
        ]}
        ctaPrimary={{ text: 'Discuss Your SaaS Idea', href: '/contact' }}
        ctaSecondary={{ text: 'View SaaS Case Studies', href: '/case-studies' }}
      />

      <ServiceBenefits
        title="What You Get with SaaS Development"
        benefits={[
          { icon: '\uD83C\uDFE2', title: 'Multi-Tenant Architecture', description: 'Secure data isolation between tenants with shared infrastructure efficiency, allowing you to onboard customers without provisioning new servers.' },
          { icon: '\uD83D\uDCB3', title: 'Subscription Billing', description: 'Stripe or Paddle integration with plan management, trial periods, usage-based billing, dunning and self-service upgrades built in.' },
          { icon: '\uD83D\uDE80', title: 'User Onboarding Flows', description: 'Guided setup wizards, interactive tutorials and in-app tooltips designed to minimise time-to-value for new customers.' },
          { icon: '\uD83D\uDCC8', title: 'Analytics Dashboard', description: 'Product usage analytics, churn tracking, MRR reporting and cohort analysis to inform your product and growth decisions.' },
          { icon: '\uD83D\uDD12', title: 'Enterprise Security', description: 'SSO/SAML authentication, two-factor authentication, SOC 2-ready architecture and data encryption at rest and in transit.' },
          { icon: '\u2699\uFE0F', title: 'API-First Design', description: 'A well-documented API from day one enables integrations, mobile apps, partner ecosystems and white-label opportunities.' },
        ]}
      />

      <ServiceProcess
        title="Our SaaS Development Process"
        steps={[
          { number: 1, title: 'Product Discovery', description: 'We validate your concept, define user personas, map the feature set and prioritise an MVP scope that gets you to market quickly.' },
          { number: 2, title: 'Architecture & Design', description: 'Multi-tenant infrastructure, database design, API specifications and UI/UX prototypes are created and validated before development.' },
          { number: 3, title: 'MVP Development', description: 'Core features are built in rapid sprints, culminating in a launchable product that can be put in front of real users for feedback.' },
          { number: 4, title: 'Iterate & Scale', description: 'Post-launch, we prioritise features based on user feedback and usage data, scaling infrastructure as your customer base grows.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'How long does it take to build a SaaS MVP?', answer: 'A focused MVP with core features, authentication, billing and a clean UI typically takes eight to twelve weeks. The exact timeline depends on feature complexity and integration requirements.' },
          { question: 'What technology stack do you use for SaaS products?', answer: 'We commonly use Next.js or React on the front end, Node.js or Python on the back end, PostgreSQL for the database and deploy on AWS or Vercel. The stack is chosen based on your product\u2019s specific needs.' },
          { question: 'How do you handle multi-tenancy?', answer: 'We implement logical data isolation with shared databases for cost efficiency at small scale, and can migrate to dedicated databases per tenant as you grow into enterprise contracts.' },
          { question: 'Can you help with pricing strategy?', answer: 'While pricing is ultimately a business decision, we advise on the technical implications of different pricing models (per-seat, usage-based, tiered) and implement the billing infrastructure to support your chosen approach.' },
          { question: 'Do you provide post-launch support?', answer: 'Yes. Our ongoing development retainers cover bug fixes, feature development, infrastructure scaling, security updates and performance optimisation as your product and user base grow.' },
          { question: 'Will I own the intellectual property?', answer: 'Yes. You receive full ownership of all source code, designs and documentation. We build with standard, open-source technologies to ensure you are never locked into our services.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'API Development', description: 'Build a robust, well-documented API that powers your SaaS product and enables partner integrations.', href: '/services/software-development/api-development' },
          { title: 'Mobile App Development', description: 'Extend your SaaS product to iOS and Android with a native or cross-platform mobile app.', href: '/services/web-design-development/mobile-app-development' },
          { title: 'Web Development', description: 'Need a marketing website for your SaaS product? Our web team builds high-converting sites.', href: '/services/web-design-development/web-development' },
        ]}
      />

      <CtaBanner
        heading="Ready to Launch Your SaaS Product?"
        subheading="Book a free product discovery session and let\u2019s turn your idea into recurring revenue."
        primaryCta={{ text: 'Book Discovery Session', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
