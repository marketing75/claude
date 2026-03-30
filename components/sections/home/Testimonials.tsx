const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Marketing Director',
    company: 'Thames Legal Partners',
    quote:
      'NetTrackers transformed our online presence completely. Our organic traffic increased by 340% in just 8 months, and we\'re now ranking #1 for our key terms.',
    rating: 5,
    service: 'SEO',
  },
  {
    name: 'James Harrison',
    role: 'CEO',
    company: 'BuildRight Construction',
    quote:
      'The website they built for us generates 3\u00d7 more enquiries than our previous one. Their understanding of our industry made all the difference.',
    rating: 5,
    service: 'Web Design',
  },
  {
    name: 'Dr. Priya Sharma',
    role: 'Practice Manager',
    company: 'Harley Street Dental',
    quote:
      'Our Google reviews went from 3.2 to 4.8 stars within 6 months. The reputation management service has been transformational for patient trust.',
    rating: 5,
    service: 'ORM',
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: '#0D1117' }}
      data-theme="dark"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400">
            Client Stories
          </span>
          <h2
            className="text-3xl font-bold text-white sm:text-4xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Don&apos;t Just Take Our Word For It
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border p-6"
              style={{
                background: 'rgba(255,255,255,0.04)',
                borderColor: 'rgba(255,255,255,0.07)',
              }}
            >
              {/* Stars */}
              <div className="mb-4 flex text-yellow-400">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 text-white/80 italic leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-600" />
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/50">
                    {t.role}, {t.company}
                  </p>
                </div>
                <span className="ml-auto rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-400">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
