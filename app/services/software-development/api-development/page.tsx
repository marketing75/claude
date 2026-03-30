import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'API Development Services | NetTrackers',
    description:
      'Robust, well-documented REST and GraphQL APIs that power integrations, mobile apps and partner ecosystems. Secure, scalable and developer-friendly.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/software-development/api-development' },
  };
}

export default function ApiDevelopmentPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'API Development Services',
      description: 'Robust, well-documented REST and GraphQL APIs that power integrations, mobile apps and partner ecosystems.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/software-development/api-development',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Software Development', item: 'https://www.nettrackers.co.uk/services/software-development' },
        { '@type': 'ListItem', position: 3, name: 'API Development', item: 'https://www.nettrackers.co.uk/services/software-development/api-development' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="APIs That Unlock Your Data and Power Growth"
        description="APIs are the connective tissue of modern software. They enable your mobile app to talk to your backend, your partners to access your data securely, your internal tools to share information and your customers to integrate with your platform. Our API development service designs and builds RESTful and GraphQL APIs that are fast, secure, versioned, thoroughly documented and built to handle millions of requests. Whether you need a public API for a developer ecosystem, an internal API to connect microservices or a partner API for B2B data exchange, we deliver production-ready interfaces that developers genuinely enjoy working with."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Software Development', href: '/services/software-development' },
          { label: 'API Development', href: '/services/software-development/api-development' },
        ]}
        ctaPrimary={{ text: 'Discuss Your API Project', href: '/contact' }}
        ctaSecondary={{ text: 'View API Case Studies', href: '/case-studies' }}
      />

      <ServiceBenefits
        title="What You Get with Our API Development Service"
        benefits={[
          { icon: '\uD83D\uDCCB', title: 'Comprehensive Documentation', description: 'OpenAPI/Swagger specifications, interactive documentation, code examples and SDKs so developers can integrate quickly and confidently.' },
          { icon: '\uD83D\uDD12', title: 'Authentication & Security', description: 'OAuth 2.0, API keys, rate limiting, IP whitelisting and request signing to protect your data and prevent abuse.' },
          { icon: '\u26A1', title: 'High Performance', description: 'Response caching, database query optimisation and horizontal scaling ensure your API delivers sub-100ms response times at scale.' },
          { icon: '\uD83D\uDD04', title: 'Versioning Strategy', description: 'Semantic versioning and backwards-compatible updates ensure existing integrations continue working as your API evolves.' },
          { icon: '\uD83D\uDCCA', title: 'Monitoring & Analytics', description: 'Request logging, error tracking, usage analytics and uptime monitoring give you full visibility into how your API is being used.' },
          { icon: '\uD83E\uDDEA', title: 'Automated Testing', description: 'Comprehensive test suites covering unit, integration and contract tests ensure reliability with every deployment.' },
        ]}
      />

      <ServiceProcess
        title="Our API Development Process"
        steps={[
          { number: 1, title: 'Requirements & Design', description: 'We define the API\u2019s consumers, data models, endpoints, authentication methods and rate limits through collaborative design sessions.' },
          { number: 2, title: 'Specification & Prototyping', description: 'An OpenAPI specification is written and a mock server is created so front-end teams and integration partners can begin development in parallel.' },
          { number: 3, title: 'Development & Testing', description: 'The API is built with comprehensive automated tests, deployed to a staging environment and shared with beta consumers for validation.' },
          { number: 4, title: 'Documentation & Launch', description: 'Interactive documentation, SDKs and a developer portal are published alongside the production API, with monitoring and alerting active from day one.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'Should I build a REST or GraphQL API?', answer: 'REST is simpler and widely understood, making it ideal for most use cases. GraphQL excels when clients need flexible queries and you want to reduce over-fetching. We advise based on your specific consumers and data patterns.' },
          { question: 'How do you secure the API?', answer: 'We implement OAuth 2.0 or API key authentication, TLS encryption, rate limiting, input validation, request signing and IP restrictions depending on your security requirements.' },
          { question: 'Can you build an API for our existing system?', answer: 'Yes. We frequently build API layers on top of legacy systems, databases and internal tools to expose their data securely to modern applications and partners.' },
          { question: 'What about API documentation?', answer: 'Every API we build includes an OpenAPI specification, interactive Swagger UI documentation, code examples in multiple languages and, where applicable, auto-generated client SDKs.' },
          { question: 'How do you handle API versioning?', answer: 'We use URL-based or header-based versioning depending on your consumer needs, with deprecation policies and migration guides to ensure smooth transitions between versions.' },
          { question: 'What infrastructure do you deploy APIs on?', answer: 'We deploy on AWS (API Gateway + Lambda or ECS), Google Cloud Run, Vercel Edge Functions or dedicated servers depending on performance requirements, cost constraints and your existing infrastructure.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'SaaS Development', description: 'Build a complete SaaS product with your API as the foundation for web, mobile and partner access.', href: '/services/software-development/saas-development' },
          { title: 'CRM Integration', description: 'Use your new API to connect your CRM with marketing, sales and support tools.', href: '/services/software-development/crm-integration' },
          { title: 'Mobile App Development', description: 'Power your mobile app with a fast, reliable backend API built for mobile-specific needs.', href: '/services/web-design-development/mobile-app-development' },
        ]}
      />

      <CtaBanner
        heading="Need an API Built Right?"
        subheading="Book a free API architecture consultation and get expert advice on your next integration project."
        primaryCta={{ text: 'Book Free Consultation', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
