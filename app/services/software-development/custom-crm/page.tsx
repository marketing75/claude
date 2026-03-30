import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Custom CRM Development | NetTrackers',
    description:
      'Bespoke CRM systems tailored to your sales, marketing and support workflows. Replace off-the-shelf limitations with software built around your business.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/software-development/custom-crm' },
  };
}

export default function CustomCrmPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Custom CRM Development',
      description: 'Bespoke CRM systems tailored to your sales, marketing and support workflows.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/software-development/custom-crm',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Software Development', item: 'https://www.nettrackers.co.uk/services/software-development' },
        { '@type': 'ListItem', position: 3, name: 'Custom CRM', item: 'https://www.nettrackers.co.uk/services/software-development/custom-crm' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="A CRM Built Around Your Sales Process, Not Someone Else\u2019s"
        description="Generic CRM platforms force your team to adapt their workflows to the software\u2019s limitations \u2014 creating friction, reducing adoption and leaving valuable data siloed. Our custom CRM development service builds a system from scratch that mirrors your exact sales pipeline, customer segmentation, communication preferences and reporting requirements. Every field, automation rule, dashboard and integration is designed around how your team actually works, resulting in higher adoption rates, cleaner data and a measurable uplift in sales productivity. You own the code, the data and the roadmap."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Software Development', href: '/services/software-development' },
          { label: 'Custom CRM', href: '/services/software-development/custom-crm' },
        ]}
        ctaPrimary={{ text: 'Discuss Your CRM Needs', href: '/contact' }}
        ctaSecondary={{ text: 'View Case Studies', href: '/case-studies' }}
      />

      <ServiceBenefits
        title="What You Get with Custom CRM Development"
        benefits={[
          { icon: '\uD83D\uDCCA', title: 'Tailored Sales Pipeline', description: 'A pipeline that matches your real sales stages, deal types and qualification criteria \u2014 not a one-size-fits-all template.' },
          { icon: '\u2699\uFE0F', title: 'Workflow Automation', description: 'Automate lead assignment, follow-up reminders, proposal generation and handoff processes to eliminate manual tasks.' },
          { icon: '\uD83D\uDCE7', title: 'Communication Hub', description: 'Email, phone call and meeting tracking integrated directly into contact records so your team has full conversation history.' },
          { icon: '\uD83D\uDCF1', title: 'Mobile Access', description: 'A responsive web interface or native mobile app so your sales team can access and update records from anywhere.' },
          { icon: '\uD83D\uDD17', title: 'Third-Party Integrations', description: 'Seamless connections to your email provider, marketing automation, accounting software and any other tools in your tech stack.' },
          { icon: '\uD83D\uDCC8', title: 'Custom Dashboards & Reports', description: 'Real-time dashboards showing the KPIs that matter to your business, with scheduled reports delivered to stakeholders.' },
        ]}
      />

      <ServiceProcess
        title="Our CRM Development Process"
        steps={[
          { number: 1, title: 'Discovery Workshop', description: 'We map your current sales process, identify pain points, define user personas and document every requirement for the new CRM.' },
          { number: 2, title: 'Architecture & Design', description: 'Data models, user interface wireframes and system architecture are designed, reviewed and approved before coding begins.' },
          { number: 3, title: 'Agile Development', description: 'The CRM is built in two-week sprints with regular demos, giving your team early access to features and the chance to provide feedback.' },
          { number: 4, title: 'Data Migration & Training', description: 'Existing customer data is migrated cleanly, and your team receives hands-on training to ensure confident adoption from day one.' },
          { number: 5, title: 'Launch & Ongoing Support', description: 'The system goes live with full monitoring, and our support team handles bugs, feature requests and performance optimisation.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'Why build a custom CRM instead of using Salesforce or HubSpot?', answer: 'Off-the-shelf CRMs work well for standard use cases, but businesses with unique processes, complex data relationships or industry-specific requirements often find custom solutions deliver higher adoption and better ROI.' },
          { question: 'How long does custom CRM development take?', answer: 'An MVP with core features typically takes eight to twelve weeks. A fully featured CRM with integrations, automations and reporting usually requires twelve to twenty weeks.' },
          { question: 'Can you migrate data from our existing CRM?', answer: 'Yes. We handle full data migration from Salesforce, HubSpot, Zoho, Pipedrive, spreadsheets and legacy databases with data cleansing and deduplication included.' },
          { question: 'Will we own the source code?', answer: 'Absolutely. You receive full ownership of the source code, database and documentation. There are no vendor lock-in concerns.' },
          { question: 'What technology stack do you use?', answer: 'We typically build CRMs with React or Next.js on the front end, Node.js or Python on the back end, and PostgreSQL for the database. The stack is chosen based on your specific requirements.' },
          { question: 'Do you provide ongoing maintenance?', answer: 'Yes. Our support retainers cover bug fixes, security updates, feature enhancements and infrastructure management so your CRM stays healthy and evolves with your business.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'CRM Integration', description: 'Already have a CRM? We can integrate it with your marketing, accounting and support tools.', href: '/services/software-development/crm-integration' },
          { title: 'Custom ERP Development', description: 'Extend beyond sales with a unified ERP that connects operations, finance and inventory.', href: '/services/software-development/custom-erp' },
          { title: 'API Development', description: 'Build APIs that connect your CRM to mobile apps, partner systems and third-party platforms.', href: '/services/software-development/api-development' },
        ]}
      />

      <CtaBanner
        heading="Outgrown Your Current CRM?"
        subheading="Let\u2019s discuss a custom CRM that fits your business like a glove."
        primaryCta={{ text: 'Book Discovery Workshop', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
