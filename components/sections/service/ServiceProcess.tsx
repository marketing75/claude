interface Step {
  number: number;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  title: string;
  steps: Step[];
}

export default function ServiceProcess({ title, steps }: ServiceProcessProps) {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text text-center mb-16">
          {title}
        </h2>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-7 top-14 w-px h-[calc(100%-3.5rem)] bg-gray-200" />
              )}

              {/* Number circle */}
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue flex items-center justify-center">
                <span className="font-display text-xl font-bold text-white">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="pt-2">
                <h3 className="font-display text-xl font-bold text-text mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
