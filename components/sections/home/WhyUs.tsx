const points = [
  {
    icon: '📊',
    title: 'Data-Driven Strategy',
    desc: 'Every decision backed by analytics and real-time data. No guesswork, just proven methods that deliver measurable results.',
  },
  {
    icon: '📋',
    title: 'Transparent Reporting',
    desc: 'Monthly reports with real metrics that matter. We show you exactly where your money goes and what it produces.',
  },
  {
    icon: '🇬🇧',
    title: 'UK-Focused Expertise',
    desc: 'We understand the UK market inside out — local SEO nuances, consumer behaviour, and regulatory requirements.',
  },
  {
    icon: '🤝',
    title: 'No Lock-In Contracts',
    desc: 'Rolling monthly agreements because we believe in earning your business every single month through results.',
  },
  {
    icon: '👤',
    title: 'Dedicated Account Manager',
    desc: 'A single point of contact who knows your business, your goals, and your industry. No call centres, no runaround.',
  },
];

const floatingCards = [
  { text: '150+ Active Clients', top: '10%', right: '5%', accent: 'border-l-blue-500' },
  { text: '£2.4M Revenue Generated', top: '40%', right: '15%', accent: 'border-l-gray-300' },
  { text: '4.9/5 ★ Google', top: '68%', right: '2%', accent: 'border-l-yellow-400' },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600">
              Why NetTrackers
            </span>
            <h2
              className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Results That Speak Louder Than Promises
            </h2>
            <p className="mb-10 text-gray-600 leading-relaxed">
              We don&apos;t just talk about results — we prove them. Our track
              record of delivering measurable growth for UK businesses sets us
              apart from agencies that rely on buzzwords instead of outcomes.
            </p>

            <div className="space-y-8">
              {points.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xl">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-gray-900">
                      {p.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative min-h-[500px]">
            <div className="h-full w-full rounded-xl bg-gray-100" />
            {floatingCards.map((card) => (
              <div
                key={card.text}
                className={`absolute rounded-lg border-l-4 ${card.accent} bg-white px-5 py-3 shadow-lg`}
                style={{ top: card.top, right: card.right }}
              >
                <p className="text-sm font-bold text-gray-800">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
