import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Mobile App Development | NetTrackers',
    description:
      'Native and cross-platform mobile app development for iOS and Android. From concept to App Store, we build apps that users love.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/web-design-development/mobile-app-development' },
  };
}

export default function MobileAppDevelopmentPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile app development for iOS and Android.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/web-design-development/mobile-app-development',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Web Design & Development', item: 'https://www.nettrackers.co.uk/services/web-design-development' },
        { '@type': 'ListItem', position: 3, name: 'Mobile App Development', item: 'https://www.nettrackers.co.uk/services/web-design-development/mobile-app-development' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="Mobile Apps That Users Actually Love"
        description="Your customers live on their phones — and a well-built mobile app puts your brand in their pocket. We develop native iOS, native Android and cross-platform applications using React Native and Flutter, taking your project from initial concept through UX design, development, testing and App Store submission. Whether you need a customer-facing app, an internal productivity tool or a companion to your web platform, we build apps that are fast, reliable and genuinely delightful to use."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Web Design & Development', href: '/services/web-design-development' },
          { label: 'Mobile App Development', href: '/services/web-design-development/mobile-app-development' },
        ]}
        ctaPrimary={{ text: 'Discuss Your App Idea', href: '/contact' }}
        ctaSecondary={{ text: 'View App Portfolio', href: '/portfolio' }}
      />

      <ServiceBenefits
        title="What You Get with Our Mobile App Service"
        benefits={[
          { icon: '\uD83D\uDCF1', title: 'Cross-Platform Efficiency', description: 'React Native and Flutter let us build for iOS and Android simultaneously, reducing time-to-market and development costs.' },
          { icon: '\uD83C\uDFA8', title: 'Intuitive UX Design', description: 'User research, wireframes and interactive prototypes ensure your app is easy to navigate and enjoyable to use from the very first session.' },
          { icon: '\uD83D\uDE80', title: 'Native Performance', description: 'Smooth animations, fast data loading and responsive interactions that feel truly native on every device and operating system.' },
          { icon: '\uD83D\uDD14', title: 'Push Notifications', description: 'Re-engage users with targeted push notifications for promotions, updates, reminders and personalised content.' },
          { icon: '\uD83D\uDD12', title: 'Secure Data Handling', description: 'Encrypted storage, secure API communication and biometric authentication protect user data and build trust.' },
          { icon: '\uD83C\uDF10', title: 'API & Backend Integration', description: 'Seamless connection to your existing web platform, CRM, payment system and third-party APIs for a unified experience.' },
        ]}
      />

      <ServiceProcess
        title="Our App Development Process"
        steps={[
          { number: 1, title: 'Discovery & Ideation', description: 'We workshop your app concept, define user personas, map core features and establish the technical architecture and platform strategy.' },
          { number: 2, title: 'UX & UI Design', description: 'Wireframes evolve into polished, interactive prototypes that are tested with real users to validate usability before a single line of code is written.' },
          { number: 3, title: 'Agile Development', description: 'Features are built in two-week sprints with regular demos and feedback sessions so you see progress and can steer direction throughout.' },
          { number: 4, title: 'QA & Beta Testing', description: 'Automated and manual testing across devices and OS versions, followed by a closed beta programme to catch edge cases before public release.' },
          { number: 5, title: 'Launch & Growth', description: 'We manage App Store and Google Play submissions, then support you with analytics, user feedback loops and iterative feature updates.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'Should I build a native or cross-platform app?', answer: 'Cross-platform frameworks like React Native cover most use cases at lower cost. We recommend native development only when your app requires deep hardware integration, complex animations or platform-specific features.' },
          { question: 'How long does it take to build a mobile app?', answer: 'A minimum viable product (MVP) typically takes eight to twelve weeks. More complex apps with custom backends, integrations and advanced features can take four to six months.' },
          { question: 'How much does mobile app development cost?', answer: 'Costs depend on complexity, platform and feature set. We provide a detailed estimate after the discovery phase so you have a clear understanding of investment before committing.' },
          { question: 'Do you handle App Store submissions?', answer: 'Yes. We manage the entire submission process for both the Apple App Store and Google Play, including screenshot preparation, descriptions, privacy policies and review responses.' },
          { question: 'Can you integrate with our existing systems?', answer: 'Absolutely. We build APIs or connect to your existing backend, CRM, payment gateway and third-party services to ensure the app works seamlessly within your tech ecosystem.' },
          { question: 'Do you provide post-launch support?', answer: 'Yes. Our support packages cover bug fixes, OS compatibility updates, performance monitoring, analytics review and feature enhancements to keep your app competitive.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'API Development', description: 'Build a robust backend API to power your mobile app and connect it to your systems.', href: '/services/software-development/api-development' },
          { title: 'Web Development', description: 'Create a companion web application that shares data and functionality with your mobile app.', href: '/services/web-design-development/web-development' },
          { title: 'SaaS Development', description: 'Turn your app idea into a full SaaS product with multi-tenant architecture and subscription billing.', href: '/services/software-development/saas-development' },
        ]}
      />

      <CtaBanner
        heading="Got an App Idea? Let\u2019s Build It."
        subheading="Book a free discovery session and find out how to bring your mobile app to life."
        primaryCta={{ text: 'Book Discovery Session', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
