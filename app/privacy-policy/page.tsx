import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | NetTrackers',
  description:
    'Read our privacy policy to understand how NetTrackers collects, uses, and protects your personal data in accordance with UK GDPR.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[#0D1117] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 font-body">Last updated: 1 January 2025</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 prose-container">
          <div className="space-y-10">
            {/* Introduction */}
            <div>
              <p className="text-gray-700 font-body text-lg leading-relaxed">
                NetTrackers Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting and respecting your privacy. This privacy policy explains how we collect, use, store, and share your personal data when you use our website (www.nettrackers.co.uk) and our services, in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
              <p className="text-gray-700 font-body text-lg leading-relaxed mt-4">
                NetTrackers Ltd is the data controller for the purposes of the UK GDPR. Our registered office is at 71-75 Shelton Street, Covent Garden, London WC2H 9JQ. If you have any questions about this policy, please contact us at <a href="mailto:privacy@nettrackers.co.uk" className="text-blue-500 hover:underline">privacy@nettrackers.co.uk</a>.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">We may collect and process the following personal data about you:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-body leading-relaxed">
                <li><strong>Identity data:</strong> Your name, job title, and company name.</li>
                <li><strong>Contact data:</strong> Your email address, telephone number, and postal address.</li>
                <li><strong>Technical data:</strong> Your IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access our website.</li>
                <li><strong>Usage data:</strong> Information about how you use our website, products, and services, including pages visited, time spent, and navigation paths.</li>
                <li><strong>Marketing data:</strong> Your preferences in receiving marketing from us and your communication preferences.</li>
                <li><strong>Enquiry data:</strong> Information you provide when completing contact forms, requesting quotes, or corresponding with us via email, telephone, or post.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">We use your personal data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-body leading-relaxed">
                <li>To provide our services to you, including web design, SEO, reputation management, and software development.</li>
                <li>To respond to your enquiries and provide you with the information, products, and services you request.</li>
                <li>To send you marketing communications about our products and services where you have consented to receive such communications or where we have a legitimate interest in doing so.</li>
                <li>To improve our website, products, and services by analysing how users interact with our digital platforms.</li>
                <li>To administer and protect our business and website, including troubleshooting, data analysis, testing, and system maintenance.</li>
                <li>To comply with legal obligations and to establish, exercise, or defend legal claims.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">3. Legal Basis for Processing</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">Under the UK GDPR, we rely on the following legal bases to process your personal data:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-body leading-relaxed">
                <li><strong>Consent:</strong> Where you have given us clear consent to process your personal data for a specific purpose, such as receiving marketing emails.</li>
                <li><strong>Contractual necessity:</strong> Where processing is necessary for the performance of a contract with you, or to take steps at your request before entering into a contract.</li>
                <li><strong>Legitimate interests:</strong> Where processing is necessary for our legitimate interests (or those of a third party), provided your fundamental rights and freedoms do not override those interests. Our legitimate interests include operating and improving our business and services.</li>
                <li><strong>Legal obligation:</strong> Where processing is necessary to comply with a legal obligation to which we are subject.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">4. Data Sharing</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">We may share your personal data with the following categories of recipients:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-body leading-relaxed">
                <li><strong>Service providers:</strong> Third-party companies that provide services on our behalf, such as hosting providers, analytics platforms, email service providers, and payment processors. These providers are contractually bound to process your data only on our instructions and in compliance with data protection law.</li>
                <li><strong>Professional advisers:</strong> Our solicitors, accountants, insurers, and auditors, where necessary for the provision of professional services.</li>
                <li><strong>Regulators and authorities:</strong> The Information Commissioner&apos;s Office (ICO), HM Revenue &amp; Customs, and other regulatory bodies where required by law.</li>
              </ul>
              <p className="text-gray-700 font-body leading-relaxed mt-4">
                We do not sell your personal data to third parties. Where we transfer personal data outside the United Kingdom, we ensure appropriate safeguards are in place in accordance with UK GDPR requirements.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
              <p className="text-gray-700 font-body leading-relaxed">
                Our website uses cookies to distinguish you from other users and to improve your browsing experience. For detailed information about the cookies we use and the purposes for which we use them, please see our <a href="/cookie-policy" className="text-blue-500 hover:underline">Cookie Policy</a>.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">Under the UK GDPR, you have the following rights in relation to your personal data:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-body leading-relaxed">
                <li><strong>Right of access:</strong> You have the right to request a copy of the personal data we hold about you.</li>
                <li><strong>Right to rectification:</strong> You have the right to request that we correct any inaccurate personal data.</li>
                <li><strong>Right to erasure:</strong> You have the right to request that we delete your personal data in certain circumstances.</li>
                <li><strong>Right to restriction:</strong> You have the right to request that we restrict the processing of your personal data in certain circumstances.</li>
                <li><strong>Right to data portability:</strong> You have the right to receive your personal data in a structured, commonly used, and machine-readable format.</li>
                <li><strong>Right to object:</strong> You have the right to object to the processing of your personal data where we are relying on legitimate interests.</li>
                <li><strong>Rights related to automated decision-making:</strong> You have the right not to be subject to a decision based solely on automated processing, including profiling.</li>
              </ul>
              <p className="text-gray-700 font-body leading-relaxed mt-4">
                To exercise any of these rights, please contact us at <a href="mailto:privacy@nettrackers.co.uk" className="text-blue-500 hover:underline">privacy@nettrackers.co.uk</a>. We will respond to your request within one month. If you are not satisfied with our response, you have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">ico.org.uk</a>.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
              <p className="text-gray-700 font-body leading-relaxed">
                We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. For client data, we typically retain records for six years following the end of our business relationship, in line with HMRC requirements and the Limitation Act 1980. For marketing data, we retain your information until you withdraw your consent or unsubscribe. Website analytics data is retained for 26 months.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">8. Security</h2>
              <p className="text-gray-700 font-body leading-relaxed">
                We have implemented appropriate technical and organisational measures to protect your personal data against unauthorised or unlawful processing, accidental loss, destruction, or damage. These measures include encryption of data in transit and at rest, regular security assessments, access controls, and staff training on data protection.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700 font-body leading-relaxed">
                We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically. Where changes are significant, we will notify you by email or through a notice on our website.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p className="text-gray-700 font-body leading-relaxed">
                If you have any questions about this privacy policy or our data practices, please contact our Data Protection Officer at:
              </p>
              <div className="mt-4 bg-gray-50 rounded-xl p-6 font-body text-gray-700">
                <p><strong>NetTrackers Ltd</strong></p>
                <p>71-75 Shelton Street, Covent Garden, London WC2H 9JQ</p>
                <p>Email: <a href="mailto:privacy@nettrackers.co.uk" className="text-blue-500 hover:underline">privacy@nettrackers.co.uk</a></p>
                <p>Phone: <a href="tel:02079460958" className="text-blue-500 hover:underline">020 7946 0958</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
