interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  service?: string;
  photo?: string;
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialCard({
  name,
  role,
  company,
  quote,
  rating,
  service,
  photo,
}: TestimonialCardProps) {
  return (
    <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-8 flex flex-col justify-between gap-6">
      <div>
        <StarRating rating={rating} />
        <blockquote className="mt-4 text-white/90 italic font-body text-base leading-relaxed">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </div>
      <div className="flex items-center gap-4">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold font-body text-lg">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-white font-semibold font-body text-sm">{name}</p>
          <p className="text-gray-400 text-xs font-body">
            {role}, {company}
          </p>
          {service && (
            <span className="inline-block mt-1 text-xs bg-blue-500/20 text-blue-400 rounded-full px-2 py-0.5 font-body">
              {service}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
