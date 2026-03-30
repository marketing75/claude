import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | NetTrackers — Digital Marketing Insights',
  description:
    'Expert insights on SEO, web design, reputation management, and software development from the NetTrackers team. Practical advice for UK businesses.',
};

const blogPosts = [
  {
    slug: 'seo-trends-uk-2025',
    title: 'The Top SEO Trends UK Businesses Need to Watch in 2025',
    excerpt:
      'From AI-driven search to the continued rise of local SEO, here are the trends that will shape organic visibility for UK businesses this year.',
    date: '15 February 2025',
    category: 'SEO',
    readTime: '8 min read',
    author: 'Sophie Chen',
  },
  {
    slug: 'website-redesign-guide',
    title: 'The Complete Guide to Planning a Website Redesign',
    excerpt:
      'Thinking about redesigning your website? This step-by-step guide covers everything from setting objectives and auditing your current site to launch day and beyond.',
    date: '2 February 2025',
    category: 'Web Design',
    readTime: '12 min read',
    author: 'Priya Sharma',
  },
  {
    slug: 'online-reputation-recovery',
    title: 'How to Recover from a Negative Online Reputation',
    excerpt:
      'A damaged online reputation can cost your business thousands. Learn the proven strategies we use to help clients turn negative sentiment into a competitive advantage.',
    date: '18 January 2025',
    category: 'Reputation',
    readTime: '10 min read',
    author: 'Marcus Thompson',
  },
  {
    slug: 'crm-vs-off-the-shelf',
    title: 'Bespoke CRM vs Off-the-Shelf: Which Is Right for Your Business?',
    excerpt:
      'We break down the pros, cons, and true costs of building a custom CRM compared to using platforms like Salesforce or HubSpot — with real-world examples.',
    date: '5 January 2025',
    category: 'Software',
    readTime: '9 min read',
    author: 'James Whitfield',
  },
  {
    slug: 'local-seo-google-business',
    title: 'Mastering Google Business Profile for Local SEO',
    excerpt:
      'Your Google Business Profile is often the first thing potential customers see. Here is how to optimise it for maximum visibility and conversions in your local area.',
    date: '20 December 2024',
    category: 'SEO',
    readTime: '7 min read',
    author: 'Sophie Chen',
  },
  {
    slug: 'conversion-rate-optimisation-tips',
    title: '10 Conversion Rate Optimisation Tips That Actually Work',
    excerpt:
      'Driving traffic is only half the battle. These ten proven CRO techniques will help you turn more visitors into enquiries, sign-ups, and paying customers.',
    date: '8 December 2024',
    category: 'Web Design',
    readTime: '11 min read',
    author: 'Priya Sharma',
  },
];

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0D1117] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400 font-body mb-6">
            Knowledge Hub
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Insights &amp; Resources
          </h1>
          <p className="text-lg text-gray-300 font-body max-w-2xl mx-auto">
            Practical advice, industry insights, and expert guides from our team of digital marketing specialists.
          </p>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-blue-600 to-blue-900 relative">
                  <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white rounded-full px-3 py-1 text-xs font-body font-semibold">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 font-body mb-3">
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="font-display text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm font-body line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-sm text-gray-600 font-body">{post.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
