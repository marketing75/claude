import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | NetTrackers',
  description:
    'Learn how NetTrackers uses cookies on our website, what types of cookies we use, and how you can manage your cookie preferences.',
};

export default function CookiePolicyPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-[#0D1117] py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Cookie Policy
          </h1>
          <p className="text-gray-400 font-body">Last updated: 1 January 2025</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-10">
            {/* Introduction */}
            <div>
              <p className="text-gray-700 font-body text-lg leading-relaxed">
                This cookie policy explains how NetTrackers Ltd (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) uses cookies and similar technologies when you visit our website at www.nettrackers.co.uk. This policy should be read alongside our <a href="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a>.
              </p>
              <p className="text-gray-700 font-body text-lg leading-relaxed mt-4">
                We comply with the Privacy and Electronic Communications Regulations 2003 (PECR) and the UK GDPR in our use of cookies. Where cookies are not strictly necessary for the functioning of our website, we will ask for your consent before placing them.
              </p>
            </div>

            {/* What are cookies */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 font-body leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, to improve efficiency, and to provide information to website owners. Cookies can be &ldquo;persistent&rdquo; (remaining on your device until they expire or you delete them) or &ldquo;session&rdquo; (deleted when you close your browser).
              </p>
            </div>

            {/* Types of cookies */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>

              {/* Strictly necessary */}
              <div className="mb-8">
                <h3 className="font-display text-lg font-bold text-gray-900 mb-3">Strictly Necessary Cookies</h3>
                <p className="text-gray-700 font-body leading-relaxed mb-4">
                  These cookies are essential for the website to function properly. They enable core functionality such as security, session management, and accessibility. You cannot opt out of these cookies as they are required for the website to work.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-body border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Cookie Name</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Purpose</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">session_id</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Maintains your session whilst browsing the site</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Session</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">csrf_token</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Protects against cross-site request forgery attacks</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Session</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">cookie_consent</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Stores your cookie consent preferences</td>
                        <td className="p-3 border border-gray-200 text-gray-700">1 year</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Analytics */}
              <div className="mb-8">
                <h3 className="font-display text-lg font-bold text-gray-900 mb-3">Analytics Cookies</h3>
                <p className="text-gray-700 font-body leading-relaxed mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This data helps us improve the website experience.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-body border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Cookie Name</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Purpose</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">_ga</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Google Analytics — distinguishes unique users</td>
                        <td className="p-3 border border-gray-200 text-gray-700">2 years</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">_ga_*</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Google Analytics 4 — maintains session state</td>
                        <td className="p-3 border border-gray-200 text-gray-700">2 years</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">_gid</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Google Analytics — distinguishes unique users</td>
                        <td className="p-3 border border-gray-200 text-gray-700">24 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Marketing */}
              <div className="mb-8">
                <h3 className="font-display text-lg font-bold text-gray-900 mb-3">Marketing Cookies</h3>
                <p className="text-gray-700 font-body leading-relaxed mb-4">
                  These cookies are used to track visitors across websites and display advertisements that are relevant and engaging. They are placed by third-party advertising platforms with our permission.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-body border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Cookie Name</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Purpose</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">_fbp</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Facebook Pixel — tracks conversions from Facebook ads</td>
                        <td className="p-3 border border-gray-200 text-gray-700">3 months</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">_gcl_au</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Google Ads — stores conversion data</td>
                        <td className="p-3 border border-gray-200 text-gray-700">3 months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Functional */}
              <div>
                <h3 className="font-display text-lg font-bold text-gray-900 mb-3">Functional Cookies</h3>
                <p className="text-gray-700 font-body leading-relaxed mb-4">
                  These cookies enable enhanced functionality and personalisation, such as remembering your preferences. They may be set by us or by third-party providers whose services we have added to our pages.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm font-body border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Cookie Name</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Purpose</th>
                        <th className="text-left p-3 border border-gray-200 font-semibold text-gray-900">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">theme_preference</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Remembers your preferred colour scheme</td>
                        <td className="p-3 border border-gray-200 text-gray-700">1 year</td>
                      </tr>
                      <tr>
                        <td className="p-3 border border-gray-200 text-gray-700">form_data</td>
                        <td className="p-3 border border-gray-200 text-gray-700">Saves partially completed form data</td>
                        <td className="p-3 border border-gray-200 text-gray-700">7 days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* How to manage */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">How to Manage Cookies</h2>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                When you first visit our website, you will be presented with a cookie consent banner that allows you to accept or reject non-essential cookies. You can change your preferences at any time by clicking the &ldquo;Cookie Settings&rdquo; link in our website footer.
              </p>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                You can also control cookies through your browser settings. Most browsers allow you to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 font-body leading-relaxed">
                <li>View what cookies are stored on your device and delete them individually or in bulk.</li>
                <li>Block third-party cookies.</li>
                <li>Block cookies from specific websites.</li>
                <li>Block all cookies from being set.</li>
                <li>Delete all cookies when you close your browser.</li>
              </ul>
              <p className="text-gray-700 font-body leading-relaxed mt-4">
                Please note that blocking all cookies may affect the functionality of our website and your experience may be impaired.
              </p>
              <p className="text-gray-700 font-body leading-relaxed mt-4">
                For more information about managing cookies in your specific browser, please visit <a href="https://www.aboutcookies.org" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">allaboutcookies.org</a>.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 font-body leading-relaxed">
                If you have any questions about our use of cookies, please contact us at:
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
