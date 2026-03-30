import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | NetTrackers',
  description:
    'Read the terms and conditions governing the use of NetTrackers\' website and services. Governed by the laws of England and Wales.',
};

export default function TermsConditionsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[#0D1117] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-400 font-body">Last updated: 1 January 2025</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-10">
            {/* Section 1 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                These terms and conditions (&ldquo;Terms&rdquo;) govern your use of the website operated by NetTrackers Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;), registered in England and Wales with company number 12345678, with our registered office at 71-75 Shelton Street, Covent Garden, London WC2H 9JQ.
              </p>
              <p className="text-gray-700 font-body leading-relaxed">
                By accessing or using our website and services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not use our website or services. We recommend that you print a copy of these Terms for future reference.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">2. Our Services</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                NetTrackers provides digital marketing, web design, search engine optimisation (SEO), online reputation management, and bespoke software development services. The specific scope of services provided to you will be set out in a separate proposal or statement of work (&ldquo;SOW&rdquo;) agreed between both parties.
              </p>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We will perform all services with reasonable skill and care, in accordance with industry best practices. While we will make every effort to achieve the results discussed during our consultation and outlined in the SOW, we cannot guarantee specific outcomes, particularly in areas such as search engine rankings, which are influenced by factors outside our control.
              </p>
              <p className="text-gray-700 font-body leading-relaxed">
                We reserve the right to subcontract any part of our services to suitably qualified third parties. Where we do so, we remain fully responsible for the quality and delivery of those services.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">3. Payment Terms</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                All fees are quoted in pounds sterling (GBP) and are exclusive of VAT unless otherwise stated. VAT will be charged at the prevailing rate where applicable.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-body leading-relaxed">
                <li><strong>Monthly retainers:</strong> Invoiced on the 1st of each month and payable within 14 days of the invoice date.</li>
                <li><strong>One-off projects:</strong> A deposit of 50% of the total project fee is required before work commences. The remaining balance is payable upon project completion and prior to handover.</li>
                <li><strong>Additional work:</strong> Any work requested outside the agreed SOW will be quoted separately and is subject to additional charges.</li>
              </ul>
              <p className="text-gray-700 font-body leading-relaxed mt-4">
                Late payments will incur interest at 8% above the Bank of England base rate in accordance with the Late Payment of Commercial Debts (Interest) Act 1998. We reserve the right to suspend services if invoices remain unpaid for more than 30 days.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Upon full payment of all fees, intellectual property rights in bespoke work created specifically for you (including website designs, custom code, and original content) will transfer to you. This transfer excludes any pre-existing intellectual property owned by NetTrackers, including proprietary frameworks, tools, libraries, and methodologies, which remain our property.
              </p>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                We reserve the right to use any work produced for you in our portfolio, case studies, and marketing materials unless you request otherwise in writing. We grant you a non-exclusive, perpetual licence to use any of our pre-existing intellectual property that is incorporated into your deliverables, solely for the purpose for which it was provided.
              </p>
              <p className="text-gray-700 font-body leading-relaxed">
                You grant us a non-exclusive licence to use your brand assets (logos, trademarks, images) for the purpose of delivering the agreed services and, unless otherwise agreed, for inclusion in our portfolio.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Nothing in these Terms excludes or limits our liability for death or personal injury caused by our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited by English law.
              </p>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Subject to the above, our total aggregate liability to you under or in connection with these Terms, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, shall not exceed the total fees paid by you to us in the 12 months preceding the claim.
              </p>
              <p className="text-gray-700 font-body leading-relaxed">
                We shall not be liable for any indirect, consequential, special, or incidental losses or damages, including loss of profit, loss of revenue, loss of data, loss of business opportunities, or damage to reputation, even if we have been advised of the possibility of such losses.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">6. Confidentiality</h2>
              <p className="text-gray-700 font-body leading-relaxed">
                Both parties agree to keep confidential all information of a confidential nature obtained from the other party in connection with these Terms and the services provided. This obligation shall survive termination of these Terms for a period of five years. Confidential information does not include information that is publicly available, was already known to the receiving party, was independently developed, or was disclosed pursuant to a legal obligation.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">7. Termination</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Monthly retainer agreements are subject to a minimum term of three months from the date of commencement. After the minimum term, either party may terminate the agreement by providing 30 days&apos; written notice.
              </p>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                One-off projects may be cancelled by you at any time, subject to payment for all work completed to date plus any irrecoverable third-party costs incurred on your behalf.
              </p>
              <p className="text-gray-700 font-body leading-relaxed">
                Either party may terminate the agreement immediately by written notice if the other party commits a material breach of these Terms and fails to remedy the breach within 14 days of receiving written notice specifying the breach. We may also terminate immediately if you become insolvent, enter administration, or have a winding-up petition presented against you.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">8. Force Majeure</h2>
              <p className="text-gray-700 font-body leading-relaxed">
                Neither party shall be liable for any failure or delay in performing their obligations under these Terms where such failure or delay arises from circumstances beyond their reasonable control, including but not limited to acts of God, fire, flood, pandemic, governmental actions, war, terrorism, labour disputes, power failures, or internet outages.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">9. Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
              <p className="text-gray-700 font-body leading-relaxed">
                If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">10. Contact</h2>
              <p className="text-gray-700 font-body leading-relaxed">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 bg-gray-50 rounded-xl p-6 font-body text-gray-700">
                <p><strong>NetTrackers Ltd</strong></p>
                <p>71-75 Shelton Street, Covent Garden, London WC2H 9JQ</p>
                <p>Email: <a href="mailto:legal@nettrackers.co.uk" className="text-blue-500 hover:underline">legal@nettrackers.co.uk</a></p>
                <p>Phone: <a href="tel:02079460958" className="text-blue-500 hover:underline">020 7946 0958</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
