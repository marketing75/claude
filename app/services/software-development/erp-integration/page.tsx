import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'ERP Integration Services | NetTrackers',
    description:
      'Integrate your ERP with e-commerce, warehousing, CRM and supply chain systems to eliminate manual processes and create a unified data ecosystem.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/software-development/erp-integration' },
  };
}

export default function ErpIntegrationPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'ERP Integration Services',
      description: 'Integrate your ERP with e-commerce, warehousing, CRM and supply chain systems.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/software-development/erp-integration',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Software Development', item: 'https://www.nettrackers.co.uk/services/software-development' },
        { '@type': 'ListItem', position: 3, name: 'ERP Integration', item: 'https://www.nettrackers.co.uk/services/software-development/erp-integration' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="Connect Your ERP to Every System That Matters"
        description="Your ERP holds your most critical business data, yet all too often it sits disconnected from the e-commerce platform taking orders, the warehouse system managing stock and the CRM nurturing customers. These disconnections create manual workarounds, data discrepancies and delayed decision-making. Our ERP integration service builds reliable, real-time connections between your enterprise resource planning system and every other platform in your operations \u2014 whether that is SAP, Oracle, Microsoft Dynamics, NetSuite or a custom solution. Orders sync instantly, inventory levels update across channels and financial data reconciles automatically."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Software Development', href: '/services/software-development' },
          { label: 'ERP Integration', href: '/services/software-development/erp-integration' },
        ]}
        ctaPrimary={{ text: 'Discuss Your Integration', href: '/contact' }}
        ctaSecondary={{ text: 'See Integration Examples', href: '/case-studies' }}
      />

      <ServiceBenefits
        title="What You Get with ERP Integration"
        benefits={[
          { icon: '\uD83D\uDED2', title: 'E-Commerce Sync', description: 'Orders, customers, inventory levels and pricing sync between your ERP and Shopify, WooCommerce, Magento or marketplace platforms.' },
          { icon: '\uD83C\uDFE2', title: 'Warehouse Management', description: 'Real-time stock movements, pick-pack-ship workflows and goods receipt data flow between your ERP and WMS.' },
          { icon: '\uD83D\uDCB0', title: 'Financial System Link', description: 'Invoices, payments, purchase orders and journal entries sync with your accounting platform for automated reconciliation.' },
          { icon: '\uD83D\uDE9A', title: 'Supply Chain Connectivity', description: 'Supplier portals, purchase order automation and logistics tracking connected to your ERP for end-to-end supply chain visibility.' },
          { icon: '\uD83D\uDCCA', title: 'Cross-System Reporting', description: 'Consolidated dashboards pulling data from all integrated systems give you a real-time operational overview in one place.' },
          { icon: '\uD83D\uDD04', title: 'Error-Free Data Flow', description: 'Automated data transfer eliminates manual re-keying errors, duplication and the delays that come with human intervention.' },
        ]}
      />

      <ServiceProcess
        title="Our ERP Integration Process"
        steps={[
          { number: 1, title: 'Systems Audit', description: 'We document your ERP modules, connected systems, current data flows and integration pain points to understand the full landscape.' },
          { number: 2, title: 'Data Mapping & Design', description: 'Field-level data mapping documents define exactly how data transforms and flows between systems, with error handling and fallback logic.' },
          { number: 3, title: 'Integration Development', description: 'Custom connectors, API integrations or middleware solutions are built and tested in a staging environment with real data samples.' },
          { number: 4, title: 'Go-Live & Monitoring', description: 'Integrations are deployed with comprehensive monitoring, alerting and logging to ensure reliability from day one.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'Which ERP platforms do you work with?', answer: 'We integrate with SAP Business One, SAP S/4HANA, Oracle NetSuite, Microsoft Dynamics 365, Sage, Odoo and custom-built ERP systems. Our approach is platform-agnostic.' },
          { question: 'Can you integrate our ERP with multiple e-commerce channels?', answer: 'Yes. We regularly build integrations that sync a single ERP with multiple sales channels including Shopify, Amazon, eBay, WooCommerce and direct B2B portals simultaneously.' },
          { question: 'How do you handle data conflicts between systems?', answer: 'We establish a master data hierarchy during the design phase, defining which system is the source of truth for each data type. Conflict resolution rules are built into the integration logic.' },
          { question: 'Will integration require downtime?', answer: 'We design integrations to go live with zero or minimal downtime. Data migration and initial sync can be performed during off-peak hours to avoid any impact on operations.' },
          { question: 'How do you ensure data security during integration?', answer: 'All data transfers use encrypted connections (TLS/SSL). We follow the principle of least privilege for API access and maintain audit logs of all data movements.' },
          { question: 'What is the typical timeline for an ERP integration project?', answer: 'Simple point-to-point integrations take two to four weeks. Multi-system ERP integration projects with complex data transformations typically require six to twelve weeks.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'Custom ERP Development', description: 'Need a purpose-built ERP? We develop bespoke systems designed around your operations.', href: '/services/software-development/custom-erp' },
          { title: 'CRM Integration', description: 'Connect your CRM alongside your ERP for a complete customer and operational data ecosystem.', href: '/services/software-development/crm-integration' },
          { title: 'E-Commerce Development', description: 'Build or rebuild your online store with native ERP integration from the start.', href: '/services/web-design-development/ecommerce-development' },
        ]}
      />

      <CtaBanner
        heading="Tired of Manual Data Entry Between Systems?"
        subheading="Let us connect your ERP to every platform in your ecosystem for seamless, automated operations."
        primaryCta={{ text: 'Get Integration Assessment', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
