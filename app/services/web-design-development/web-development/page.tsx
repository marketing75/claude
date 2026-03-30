import type { Metadata } from 'next';
import ServiceHero from '@/components/sections/service/ServiceHero';
import ServiceBenefits from '@/components/sections/service/ServiceBenefits';
import ServiceProcess from '@/components/sections/service/ServiceProcess';
import ServiceFaq from '@/components/sections/service/ServiceFaq';
import RelatedServices from '@/components/sections/service/RelatedServices';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export function generateMetadata(): Metadata {
  return {
    title: 'Professional Web Development Services | NetTrackers',
    description:
      'High-performance web development using React, Next.js and modern frameworks. Scalable, secure and built for speed. UK-based development team.',
    alternates: { canonical: 'https://www.nettrackers.co.uk/services/web-design-development/web-development' },
  };
}

export default function WebDevelopmentPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Professional Web Development Services',
      description: 'High-performance web development using modern frameworks, built for speed and scalability.',
      provider: { '@type': 'Organization', name: 'NetTrackers', url: 'https://www.nettrackers.co.uk' },
      areaServed: { '@type': 'Country', name: 'United Kingdom' },
      url: 'https://www.nettrackers.co.uk/services/web-design-development/web-development',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.nettrackers.co.uk' },
        { '@type': 'ListItem', position: 2, name: 'Web Design & Development', item: 'https://www.nettrackers.co.uk/services/web-design-development' },
        { '@type': 'ListItem', position: 3, name: 'Web Development', item: 'https://www.nettrackers.co.uk/services/web-design-development/web-development' },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <ServiceHero
        title="Professional Web Development Built for Performance"
        description="A beautiful design is only half the story — what happens under the bonnet determines whether your website loads fast, ranks well and scales as your business grows. Our developers write clean, maintainable code using React, Next.js and Node.js to deliver websites that score 90+ on Google PageSpeed, pass every Core Web Vitals threshold and provide a silky-smooth user experience. We follow test-driven development practices, implement CI/CD pipelines and document everything so your site is easy to maintain long after launch."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Web Design & Development', href: '/services/web-design-development' },
          { label: 'Web Development', href: '/services/web-design-development/web-development' },
        ]}
        ctaPrimary={{ text: 'Start Your Build', href: '/contact' }}
        ctaSecondary={{ text: 'See Our Tech Stack', href: '/about' }}
      />

      <ServiceBenefits
        title="What You Get with Our Web Development Service"
        benefits={[
          { icon: '\uD83D\uDE80', title: 'Lightning-Fast Load Times', description: 'Server-side rendering, code splitting and asset optimisation deliver sub-second page loads that keep visitors engaged and Google happy.' },
          { icon: '\uD83D\uDD12', title: 'Enterprise-Grade Security', description: 'HTTPS by default, input validation, CSRF protection and regular dependency audits keep your site and user data safe.' },
          { icon: '\uD83D\uDCCA', title: 'Scalable Architecture', description: 'Headless CMS, API-first design and cloud-native hosting mean your site handles traffic spikes without breaking a sweat.' },
          { icon: '\uD83E\uDDEA', title: 'Automated Testing', description: 'Unit, integration and end-to-end tests ensure that every feature works correctly before it reaches production.' },
          { icon: '\u2699\uFE0F', title: 'CMS Integration', description: 'Content management systems like Sanity, Strapi or WordPress give your team full editorial control without developer involvement.' },
          { icon: '\uD83D\uDCC8', title: 'Analytics & Tracking', description: 'Google Analytics 4, conversion tracking and custom event logging are configured from day one so you can measure results immediately.' },
        ]}
      />

      <ServiceProcess
        title="Our Development Process"
        steps={[
          { number: 1, title: 'Technical Planning', description: 'We review the approved designs, define the tech stack, set up the repository and establish coding standards and deployment workflows.' },
          { number: 2, title: 'Sprint-Based Development', description: 'Features are built in two-week sprints with regular demos, giving you visibility and the chance to provide feedback throughout.' },
          { number: 3, title: 'Quality Assurance', description: 'Every feature is tested across browsers, devices and screen sizes. Performance, accessibility and security audits are run before each release.' },
          { number: 4, title: 'Launch & Deployment', description: 'We handle DNS configuration, SSL certificates, CDN setup and the production deployment so your launch is seamless.' },
          { number: 5, title: 'Post-Launch Support', description: 'Ongoing maintenance, monitoring and iterative improvements keep your site performing at its best as your business evolves.' },
        ]}
      />

      <ServiceFaq
        faqs={[
          { question: 'What technologies do you use?', answer: 'We primarily build with React, Next.js and TypeScript on the front end, with Node.js or Python on the back end. Our hosting partners include Vercel, AWS and Google Cloud.' },
          { question: 'How long does a typical web development project take?', answer: 'A standard brochure website takes four to eight weeks. More complex projects with custom functionality, integrations or e-commerce features typically require eight to sixteen weeks.' },
          { question: 'Do you work with existing designs?', answer: 'Yes. We regularly receive Figma or Sketch files from in-house design teams or third-party agencies and bring them to life with pixel-perfect accuracy.' },
          { question: 'Will my website be easy to update?', answer: 'Absolutely. We integrate user-friendly content management systems so your team can update text, images and pages without needing a developer.' },
          { question: 'Do you provide hosting?', answer: 'We recommend and configure hosting on platforms like Vercel or AWS, optimised for your specific project. We can manage hosting on your behalf or hand over access to your team.' },
          { question: 'What happens if something breaks after launch?', answer: 'Our post-launch support packages include uptime monitoring, bug fixes and performance optimisation so issues are resolved quickly if they arise.' },
        ]}
      />

      <RelatedServices
        services={[
          { title: 'Website Design', description: 'Need a design first? Our bespoke design service creates stunning layouts tailored to your brand.', href: '/services/web-design-development/website-design' },
          { title: 'E-Commerce Development', description: 'Build a high-converting online store with secure payments and inventory management.', href: '/services/web-design-development/ecommerce-development' },
          { title: 'Technical SEO', description: 'Ensure your new website is fully optimised for search engine crawling and indexing.', href: '/services/seo/technical-seo' },
        ]}
      />

      <CtaBanner
        heading="Ready to Build Something Powerful?"
        subheading="Tell us about your project and get a detailed proposal within 48 hours."
        primaryCta={{ text: 'Get a Free Proposal', href: '/contact' }}
        secondaryCta={{ text: 'Call Us Now', href: 'tel:+442012345678' }}
      />
    </>
  );
}
