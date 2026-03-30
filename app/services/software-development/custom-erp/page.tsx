import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Custom ERP Development | NetTrackers',
    description:
      'Bespoke ERP software that unifies finance, inventory, HR and operations in a single platform built around your business processes.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/software-development/custom-erp' },
  };
}

export default function CustomErpPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Custom ERP Development',
      description: 'Bespoke ERP software that unifies finance, inventory, HR and operations in a single platform.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/software-development/custom-erp',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Software Development', item: 'https://www.nettrackers.co.uk/services/software-development' },
        { '@type': 'ListItem', position: 3, name: 'Custom ERP', item: 'https://www.nettrackers.co.uk/services/software-development/custom-erp' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="One Platform to Run Your Entire Business"
        description="Disconnected systems, duplicated data entry and spreadsheet sprawl are the silent killers of operational efficiency. Our custom ERP development service builds a unified platform that connects finance, inventory, procurement, human resources, manufacturing and logistics into a single source of truth. Unlike rigid off-the-shelf ERPs that demand expensive customisation and consulting hours, our bespoke systems are designed from the ground up around your specific workflows, approval chains, reporting structures and compliance requirements. The result is a streamlined operation where data flows seamlessly, decisions are informed by real-time insight and your team spends less time on admin."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Software Development', href: '/services/software-development' },
          { label: 'Custom ERP', href: '/services/software-development/custom-erp' },
        ]}
        ctaPrimary={{ text: 'Discuss Your ERP Needs', href: '/contact' }}
        ctaSecondary={{ text: 'View Case Studies', href: '/case-studies' }}
      />

      <ServiceBenefits
        title="What You Get with Custom ERP Development"
        benefits={[
          { icon: '\uD83C\uDFE2', title: 'Unified Operations', description: 'Finance, inventory, HR, procurement and production modules connected in a single platform with consistent data and shared workflows.' },
          { icon: '\uD83D\uDCCA', title: 'Real-Time Dashboards', description: 'Live operational dashboards give managers and directors instant visibility into KPIs, bottlenecks and financial performance.' },
          { icon: '\u2699\uFE0F', title: 'Workflow Automation', description: 'Purchase order approvals, invoice matching, stock reorder triggers and HR requests automated to reduce manual overhead.' },
          { icon: '\uD83D\uDD12', title: 'Role-Based Access Control', description: 'Granular permissions ensure every user sees only the data and features relevant to their role and department.' },
          { icon: '\uD83D\uDCCB', title: 'Compliance & Audit Trails', description: 'Full audit logging, data retention policies and regulatory compliance features built in from the architecture level.' },
          { icon: '\uD83D\uDD17', title: 'Third-Party Connectivity', description: 'APIs connect your ERP to banking platforms, shipping providers, e-commerce stores, CRM systems and government portals.' },
        ]}
      />

      <ServiceProcess
        title="Our ERP Development Process"
        steps={[
          { number: 1, title: 'Business Process Mapping', description: 'We spend time embedded with your teams to understand every workflow, approval chain, data dependency and pain point across departments.' },
          { number: 2, title: 'System Architecture', description: 'Module structure, data models, integration points and security architecture are designed and validated with your stakeholders.' },
          { number: 3, title: 'Modular Development', description: 'The ERP is built module by module in agile sprints, with each module deployed and tested before the next begins.' },
          { number: 4, title: 'Data Migration & Training', description: 'Legacy data is cleansed, mapped and migrated. Comprehensive training ensures every department is confident with the new system.' },
          { number: 5, title: 'Go-Live & Support', description: 'Phased or full go-live with on-site support, followed by an ongoing maintenance and enhancement retainer.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'Why choose a custom ERP over SAP or Oracle?', answer: 'Enterprise ERPs like SAP and Oracle are powerful but come with steep licensing fees, lengthy implementation timelines and significant customisation costs. A custom ERP is designed exactly for your needs from day one, often at a lower total cost of ownership.' },
          { question: 'How long does ERP development take?', answer: 'A core ERP with essential modules typically takes four to six months. Fully featured enterprise systems with complex integrations and compliance requirements may take nine to twelve months.' },
          { question: 'Can it integrate with our existing accounting software?', answer: 'Yes. We build API integrations with Xero, QuickBooks, Sage and other accounting platforms so financial data syncs automatically between systems.' },
          { question: 'How do you handle data migration from legacy systems?', answer: 'We conduct a thorough data audit, cleanse and deduplicate records, map fields to the new system and perform staged migrations with validation at every step.' },
          { question: 'Is the ERP hosted in the cloud or on-premise?', answer: 'We recommend cloud hosting for most businesses due to scalability and maintenance advantages, but we can also deploy on-premise or hybrid configurations for organisations with specific security requirements.' },
          { question: 'Can the ERP scale as we grow?', answer: 'Absolutely. Our architecture is designed for horizontal and vertical scaling, and new modules can be added incrementally as your business expands into new departments or regions.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'ERP Integration', description: 'Already have an ERP? We can integrate it with your e-commerce, CRM and supply chain platforms.', href: '/services/software-development/erp-integration' },
          { title: 'Custom CRM Development', description: 'Add a dedicated CRM module or standalone system to complement your ERP.', href: '/services/software-development/custom-crm' },
          { title: 'API Development', description: 'Build robust APIs to connect your ERP with external partners, government systems and banking platforms.', href: '/services/software-development/api-development' },
        ]}
      />

      <CtaBanner
        heading="Ready to Unify Your Operations?"
        subheading="Book a discovery workshop and see how a custom ERP can transform your business efficiency."
        primaryCta={{ text: 'Book Discovery Workshop', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
