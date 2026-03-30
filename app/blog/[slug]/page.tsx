import type { Metadata } from 'next';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  author: { name: string; role: string; bio: string };
  body: string[];
  related: string[];
}

const blogPosts: Record<string, BlogPost> = {
  'seo-trends-uk-2025': {
    slug: 'seo-trends-uk-2025',
    title: 'The Top SEO Trends UK Businesses Need to Watch in 2025',
    excerpt: 'From AI-driven search to the continued rise of local SEO, here are the trends that will shape organic visibility for UK businesses this year.',
    date: '15 February 2025',
    category: 'SEO',
    readTime: '8 min read',
    author: { name: 'Sophie Chen', role: 'Head of SEO', bio: 'Sophie leads the SEO team at NetTrackers with over 10 years of experience in organic search strategy for UK businesses across finance, healthcare, and e-commerce.' },
    body: [
      'The search landscape is evolving faster than ever. With Google rolling out AI Overviews to UK users and the continued shift towards mobile-first indexing, businesses that fail to adapt risk losing hard-won visibility. Here are the trends we believe will define SEO success in 2025.',
      'AI-generated search results are changing how users interact with Google. Rather than scrolling through ten blue links, many queries now surface AI-generated summaries at the top of the page. For UK businesses, this means optimising content not just for traditional rankings but for featured snippets and structured data that feed these AI summaries.',
      'Local SEO continues to grow in importance, particularly for service-based businesses. Google Business Profile optimisation, local link building, and location-specific content are no longer optional — they are essential. We are seeing businesses that invest in local SEO consistently outperform those relying solely on national keyword strategies.',
      'Core Web Vitals remain a ranking factor, and Google has raised the bar again with updated thresholds for Interaction to Next Paint (INP). Sites with poor performance scores are being penalised more aggressively, making technical SEO investment more important than ever.',
      'Content quality expectations have increased significantly. Google\'s helpful content system is increasingly sophisticated at identifying thin, AI-generated, or recycled content. The businesses that win in 2025 will be those publishing genuinely original, expert-led content that serves a clear user intent.',
      'Finally, we are seeing a shift towards topic authority over individual keyword targeting. Rather than chasing isolated search terms, the most successful SEO strategies build comprehensive topic clusters that demonstrate deep expertise in a specific area. This signals to Google that your site is a genuine authority on the subject.',
    ],
    related: ['local-seo-google-business', 'conversion-rate-optimisation-tips'],
  },
  'website-redesign-guide': {
    slug: 'website-redesign-guide',
    title: 'The Complete Guide to Planning a Website Redesign',
    excerpt: 'Thinking about redesigning your website? This step-by-step guide covers everything from setting objectives and auditing your current site to launch day and beyond.',
    date: '2 February 2025',
    category: 'Web Design',
    readTime: '12 min read',
    author: { name: 'Priya Sharma', role: 'Creative Director', bio: 'Priya leads design at NetTrackers, crafting user experiences that drive conversions. Her work has won multiple industry awards for UX excellence.' },
    body: [
      'A website redesign is one of the most impactful investments a business can make — but it is also one of the most commonly mismanaged. Without a clear plan, redesigns can run over budget, miss deadlines, and ultimately fail to deliver the improvements that justified the project in the first place.',
      'The first step is defining clear objectives. "We want a modern-looking website" is not an objective — it is a wish. Genuine objectives are specific and measurable: increase enquiry form submissions by 30%, reduce bounce rate by 20%, or improve mobile conversion rate to match desktop. Every design decision should be evaluated against these goals.',
      'Before designing anything new, audit your existing site thoroughly. Use analytics to identify which pages drive the most value, where users drop off, and what content resonates. Conduct user testing if possible — even five users can reveal critical usability issues that analytics alone would miss.',
      'Information architecture is where most redesigns succeed or fail. Map out your site structure before touching any visual design. Every page should serve a clear purpose and be reachable within three clicks from the homepage. Use card sorting exercises with real users to validate your proposed navigation.',
      'When it comes to visual design, resist the temptation to follow trends blindly. A good website design is one that serves your specific audience and business goals. Mobile-first design is non-negotiable — over 60% of UK web traffic now comes from mobile devices.',
      'Finally, plan your migration carefully. URL changes without proper redirects can devastate your SEO rankings overnight. Create a comprehensive redirect map, test it thoroughly in a staging environment, and monitor Search Console closely in the weeks following launch.',
    ],
    related: ['conversion-rate-optimisation-tips', 'seo-trends-uk-2025'],
  },
  'online-reputation-recovery': {
    slug: 'online-reputation-recovery',
    title: 'How to Recover from a Negative Online Reputation',
    excerpt: 'A damaged online reputation can cost your business thousands. Learn the proven strategies we use to help clients turn negative sentiment into a competitive advantage.',
    date: '18 January 2025',
    category: 'Reputation',
    readTime: '10 min read',
    author: { name: 'Marcus Thompson', role: 'Head of Reputation Management', bio: 'Marcus specialises in online reputation strategy at NetTrackers, helping businesses build and protect their digital presence across review platforms and social media.' },
    body: [
      'A single negative review on Google can deter up to 22% of potential customers. A pattern of negative reviews can be catastrophic. Yet many businesses respond to reputation damage with either panic or paralysis — neither of which helps.',
      'The first step in reputation recovery is honest assessment. Gather every review across Google, Trustpilot, industry-specific platforms, and social media. Categorise them by theme: were the complaints about service quality, communication, pricing, or something else? Understanding the patterns is essential to developing an effective response.',
      'Responding to negative reviews is an art form. The goal is not to win an argument — it is to demonstrate to future readers that your business takes feedback seriously and acts on it. A thoughtful, professional response to a one-star review often builds more trust than the review itself destroys.',
      'Generating new positive reviews is the fastest way to shift overall sentiment. Implement a systematic process for requesting reviews from satisfied customers at the right moment — typically immediately after a positive interaction or successful project completion. Make it as easy as possible with direct links.',
      'Do not overlook the power of content in reputation management. Publishing case studies, testimonials, and thought leadership content creates positive search results that push negative content further down the page. This is not about burying problems — it is about ensuring your online presence accurately reflects the quality of your work.',
      'Long-term reputation management requires a cultural shift within your organisation. Train customer-facing staff to identify and resolve concerns before they escalate. Create internal escalation protocols. The best reputation strategy is one that prevents negative reviews from happening in the first place.',
    ],
    related: ['seo-trends-uk-2025', 'crm-vs-off-the-shelf'],
  },
  'crm-vs-off-the-shelf': {
    slug: 'crm-vs-off-the-shelf',
    title: 'Bespoke CRM vs Off-the-Shelf: Which Is Right for Your Business?',
    excerpt: 'We break down the pros, cons, and true costs of building a custom CRM compared to using platforms like Salesforce or HubSpot — with real-world examples.',
    date: '5 January 2025',
    category: 'Software',
    readTime: '9 min read',
    author: { name: 'James Whitfield', role: 'Lead Developer', bio: 'James architects and builds bespoke software solutions at NetTrackers. With expertise in modern web technologies and cloud infrastructure, he turns complex business requirements into elegant systems.' },
    body: [
      'Choosing between a bespoke CRM and an off-the-shelf platform is one of the most consequential technology decisions a growing business will make. Get it right and you will have a system that grows with your business for years. Get it wrong and you will be stuck with a costly workaround — or an even costlier migration.',
      'Off-the-shelf CRMs like Salesforce, HubSpot, and Zoho offer an immediate solution with minimal development time. They provide proven features, regular updates, and large ecosystems of integrations and add-ons. For businesses with straightforward sales processes and standard workflows, they are often the sensible choice.',
      'However, the true cost of off-the-shelf platforms is frequently underestimated. Licence fees scale with users, premium features require expensive tiers, and customisation often demands specialist consultants. We have seen businesses spending more on annual Salesforce licences than it would have cost to build a tailored solution from scratch.',
      'Bespoke CRMs shine when your business has unique workflows, complex compliance requirements, or needs that no off-the-shelf platform adequately serves. Financial services firms, healthcare providers, and businesses with proprietary processes often find that a custom build delivers significantly better ROI over a three-to-five year horizon.',
      'The development process for a bespoke CRM typically takes 12 to 20 weeks for a core system, with ongoing iterations based on user feedback. Modern development frameworks and cloud infrastructure have dramatically reduced both the cost and risk compared to a decade ago.',
      'Our recommendation? Start by mapping your processes in detail. If an off-the-shelf CRM covers 80% or more of your requirements without excessive customisation, it is probably the right choice. If you find yourself constantly working around the platform rather than with it, a bespoke build will likely serve you better in the long run.',
    ],
    related: ['website-redesign-guide', 'online-reputation-recovery'],
  },
  'local-seo-google-business': {
    slug: 'local-seo-google-business',
    title: 'Mastering Google Business Profile for Local SEO',
    excerpt: 'Your Google Business Profile is often the first thing potential customers see. Here is how to optimise it for maximum visibility and conversions in your local area.',
    date: '20 December 2024',
    category: 'SEO',
    readTime: '7 min read',
    author: { name: 'Sophie Chen', role: 'Head of SEO', bio: 'Sophie leads the SEO team at NetTrackers with over 10 years of experience in organic search strategy for UK businesses across finance, healthcare, and e-commerce.' },
    body: [
      'For local businesses, your Google Business Profile (GBP) is arguably more important than your website. It appears in the local map pack, in Google Maps, and increasingly in AI-generated local recommendations. Yet the majority of businesses treat it as an afterthought.',
      'Start with the fundamentals: ensure your business name, address, and phone number (NAP) are accurate and consistent across every online directory. Inconsistencies confuse Google and dilute your local ranking signals. Use your real trading name — keyword stuffing your business name is against Google\'s guidelines and can result in suspension.',
      'Categories matter more than most businesses realise. Your primary category is the single most important factor in local ranking. Choose the most specific category available, not the broadest. If you are a "family law solicitor", do not just select "solicitor" — Google offers far more specific options.',
      'Photos and videos drive engagement. Businesses with 100+ photos receive 520% more calls and 2,717% more direction requests than the average listing. Upload high-quality images regularly — interior shots, team photos, completed work, and happy customers all build trust.',
      'Google Business posts are an underutilised feature. Publishing regular updates, offers, and events signals to Google that your profile is active and well-maintained. We recommend at least two posts per week for optimal visibility.',
      'Finally, reviews are the lifeblood of local SEO. Not just the volume and rating, but the recency and content of reviews all influence your local rankings. Implement a systematic review generation process and respond to every review — positive or negative — within 24 hours.',
    ],
    related: ['seo-trends-uk-2025', 'conversion-rate-optimisation-tips'],
  },
  'conversion-rate-optimisation-tips': {
    slug: 'conversion-rate-optimisation-tips',
    title: '10 Conversion Rate Optimisation Tips That Actually Work',
    excerpt: 'Driving traffic is only half the battle. These ten proven CRO techniques will help you turn more visitors into enquiries, sign-ups, and paying customers.',
    date: '8 December 2024',
    category: 'Web Design',
    readTime: '11 min read',
    author: { name: 'Priya Sharma', role: 'Creative Director', bio: 'Priya leads design at NetTrackers, crafting user experiences that drive conversions. Her work has won multiple industry awards for UX excellence.' },
    body: [
      'You can drive all the traffic in the world to your website, but if visitors are not converting into customers, that traffic is worthless. Conversion rate optimisation (CRO) is the discipline of turning more of your existing visitors into valuable actions — enquiries, sign-ups, purchases, or phone calls.',
      'Start with your headline. You have approximately five seconds to convince a visitor to stay on your page. Your headline should clearly communicate what you do, who you do it for, and why they should care. Avoid clever wordplay in favour of clarity.',
      'Simplify your forms. Every additional field you add to a form reduces completion rates by approximately 10%. Ask only for the information you genuinely need at this stage. You can always gather more details later in the conversation.',
      'Social proof is one of the most powerful conversion tools available. Testimonials, case studies, client logos, review scores, and industry certifications all reduce perceived risk and build confidence. Place social proof near your calls to action for maximum impact.',
      'Page speed directly affects conversion rates. A one-second delay in page load time can reduce conversions by up to 7%. Invest in performance optimisation — compress images, minimise JavaScript, and use a content delivery network.',
      'Your calls to action should be specific and benefit-oriented. "Get My Free Quote" converts better than "Submit". "Start Growing My Revenue" converts better than "Learn More". Tell visitors exactly what they will get when they click.',
    ],
    related: ['website-redesign-guide', 'local-seo-google-business'],
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) {
    return { title: 'Post Not Found | NetTrackers Blog' };
  }
  return {
    title: `${post.title} | NetTrackers Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-blue-500 font-body hover:underline">
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  const relatedPosts = post.related
    .map((s) => blogPosts[s])
    .filter(Boolean);

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0D1117] py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="inline-flex items-center rounded-full bg-blue-500/20 px-4 py-1 text-sm font-body font-semibold text-blue-400 mb-6">
            {post.category}
          </span>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400 font-body">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>{post.readTime}</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span>{post.author.name}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 md:py-24 bg-white">
        <article className="max-w-3xl mx-auto px-6">
          <div className="space-y-6">
            {post.body.map((paragraph, i) => (
              <p key={i} className="text-gray-700 font-body text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Author bio card */}
          <div className="mt-16 rounded-2xl bg-gray-50 border border-gray-200 p-8 flex flex-col sm:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-2xl font-display font-bold text-white/80">
                  {post.author.name.charAt(0)}
                </span>
              </div>
            </div>
            <div>
              <p className="font-display font-bold text-gray-900 mb-1">{post.author.name}</p>
              <p className="text-sm text-blue-500 font-body mb-3">{post.author.role}</p>
              <p className="text-gray-600 font-body text-sm leading-relaxed">{post.author.bio}</p>
            </div>
          </div>
        </article>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="font-display text-3xl font-bold text-gray-900 mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="h-40 bg-gradient-to-br from-blue-600 to-blue-900 relative">
                    <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white rounded-full px-3 py-1 text-xs font-body font-semibold">
                      {rp.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 font-body mb-2">
                      <span>{rp.date}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span>{rp.readTime}</span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-blue-500 transition-colors">
                      {rp.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
