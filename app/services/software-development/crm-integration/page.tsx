import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'CRM Integration Services | NetTrackers',
    description:
      'Connect your CRM to marketing tools, accounting software and third-party platforms for seamless data flow and automated workflows.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/software-development/crm-integration' },
  };
}

export default function CrmIntegrationPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'CRM Integration Services',
      description: 'Connect your CRM to marketing tools, accounting software and third-party platforms.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/software-development/crm-integration',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Software Development', item: 'https://www.nettrackers.co.uk/services/software-development' },
        { '@type': 'ListItem', position: 3, name: 'CRM Integration', item: 'https://www.nettrackers.co.uk/services/software-development/crm-integration' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="Make Your CRM the Centre of Your Tech Stack"
        description="A CRM that operates in isolation is a missed opportunity. When your customer relationship management system is disconnected from your marketing platform, accounting software, e-commerce store and support tools, your team wastes hours on manual data entry, operates on incomplete information and misses chances to engage customers at the right moment. Our CRM integration service connects your existing CRM \u2014 whether it is Salesforce, HubSpot, Pipedrive, Zoho or a custom system \u2014 to every tool in your technology ecosystem through robust, reliable APIs and middleware. The result is a single customer view, automated workflows and data that flows where it needs to without human intervention."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Software Development', href: '/services/software-development' },
          { label: 'CRM Integration', href: '/services/software-development/crm-integration' },
        ]}
        ctaPrimary={{ text: 'Discuss Your Integration', href: '/contact' }}
        ctaSecondary={{ text: 'See Integration Examples', href: '/case-studies' }}
      />

      <ServiceBenefits
        title="What You Get with CRM Integration"
        benefits={[
          { icon: '\uD83D\uDD04', title: 'Bi-Directional Data Sync', description: 'Customer data, deal stages and communication history sync automatically between your CRM and connected platforms in real time.' },
          { icon: '\uD83D\uDCE7', title: 'Marketing Automation Link', description: 'Connect your CRM to Mailchimp, ActiveCampaign, Klaviyo or HubSpot Marketing to trigger campaigns based on CRM events.' },
          { icon: '\uD83D\uDCB0', title: 'Accounting Integration', description: 'Sync invoices, payments and customer records between your CRM and Xero, QuickBooks or Sage to eliminate double data entry.' },
          { icon: '\uD83D\uDED2', title: 'E-Commerce Connection', description: 'Link your Shopify, WooCommerce or custom store so new orders and customer data flow directly into CRM records.' },
          { icon: '\uD83D\uDCDE', title: 'Communication Tools', description: 'Integrate VoIP systems, live chat, WhatsApp Business and helpdesk platforms so every interaction is logged in one place.' },
          { icon: '\uD83D\uDCCA', title: 'Unified Reporting', description: 'Pull data from all connected systems into your CRM dashboards for a complete, real-time picture of business performance.' },
        ]}
      />

      <ServiceProcess
        title="Our CRM Integration Process"
        steps={[
          { number: 1, title: 'Integration Audit', description: 'We map your current tech stack, data flows, pain points and integration requirements across all departments and platforms.' },
          { number: 2, title: 'Architecture & Planning', description: 'Integration architecture is designed with data mapping documents, error handling protocols and a phased implementation plan.' },
          { number: 3, title: 'Build & Test', description: 'Integrations are built using native APIs, middleware or iPaaS platforms, then tested extensively with real data before going live.' },
          { number: 4, title: 'Deploy & Monitor', description: 'Integrations are deployed with monitoring and alerting so any sync failures are detected and resolved immediately.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'Which CRM platforms do you integrate with?', answer: 'We work with Salesforce, HubSpot, Pipedrive, Zoho, Microsoft Dynamics, Monday CRM, Copper and custom-built CRMs. If it has an API, we can integrate it.' },
          { question: 'Do you use Zapier or custom code?', answer: 'We use whichever approach best fits your needs. Simple integrations may use Zapier or Make for speed, while complex or high-volume data flows benefit from custom API integrations for reliability and performance.' },
          { question: 'What happens if an integration fails?', answer: 'We build error handling, retry logic and alerting into every integration. If a sync fails, the system retries automatically and our team is notified so issues are resolved before they impact your operations.' },
          { question: 'Can you integrate legacy systems without APIs?', answer: 'Yes. For legacy systems without modern APIs, we can build custom connectors using database connections, file-based transfers, screen scraping or other appropriate methods.' },
          { question: 'How long does a typical CRM integration take?', answer: 'Simple two-system integrations can be completed in one to two weeks. Multi-system integrations with complex data mapping typically take four to eight weeks.' },
          { question: 'Will integration affect our existing CRM setup?', answer: 'No. We integrate alongside your existing configuration without disrupting current workflows. Data syncs are tested in a staging environment before touching production data.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'Custom CRM Development', description: 'Need a CRM built from scratch? Our custom development service creates a system tailored to your exact needs.', href: '/services/software-development/custom-crm' },
          { title: 'API Development', description: 'Build custom APIs to enable integrations that off-the-shelf connectors cannot support.', href: '/services/software-development/api-development' },
          { title: 'ERP Integration', description: 'Extend your integration strategy to connect ERP, supply chain and operational systems.', href: '/services/software-development/erp-integration' },
        ]}
      />

      <CtaBanner
        heading="Stop Switching Between Disconnected Tools"
        subheading="Let us integrate your CRM with every platform in your tech stack for seamless data flow."
        primaryCta={{ text: 'Get Integration Assessment', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
