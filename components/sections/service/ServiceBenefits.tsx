interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface ServiceBenefitsProps {
  title: string;
  benefits: Benefit[];
}

export default function ServiceBenefits({ title, benefits }: ServiceBenefitsProps) {
  return (
    <section className="py-20 md:py-28 bg-off-white">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text text-center mb-16">
          {title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 rounded bg-blue/10 flex items-center justify-center mb-5 group-hover:bg-blue/20 transition-colors duration-300">
                <span className="text-2xl" role="img" aria-hidden="true">
                  {benefit.icon}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-text mb-3">
                {benefit.title}
              </h3>
              <p className="font-body text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
