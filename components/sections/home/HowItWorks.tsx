'use client';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We audit your current digital presence and understand your goals, competitors, and target audience.',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'We create a tailored roadmap with clear milestones, KPIs, and timelines for your business.',
  },
  {
    num: '03',
    title: 'Execution',
    desc: 'Our specialist team implements the strategy with precision, keeping you updated at every stage.',
  },
  {
    num: '04',
    title: 'Growth',
    desc: 'We measure, optimise, and scale what works. Your success metrics improve month over month.',
  },
];

export default function HowItWorks() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{
        background: 'linear-gradient(to bottom, #E8F4FF, #F0F8FF)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600">
            Our Process
          </span>
          <h2
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Simple Process, Exceptional Results
          </h2>
        </div>

        {/* Steps Row */}
        <div className="relative">
          {/* Dashed SVG line connecting circles (desktop only) */}
          <svg
            className="absolute left-0 top-9 hidden w-full lg:block"
            height="4"
            fill="none"
          >
            <line
              x1="12.5%"
              y1="2"
              x2="87.5%"
              y2="2"
              stroke="#0099FF"
              strokeWidth="2"
              strokeDasharray="8 6"
              strokeOpacity="0.3"
            />
          </svg>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                {/* Circle */}
                <div className="group mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white shadow-lg shadow-blue-500/25 transition-transform duration-300 hover:scale-110">
                  {step.num}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="max-w-xs text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
