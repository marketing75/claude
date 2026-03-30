import Link from 'next/link';

const cities = [
  'London',
  'Manchester',
  'Birmingham',
  'Leeds',
  'Bristol',
  'Edinburgh',
  'Glasgow',
  'Liverpool',
  'Sheffield',
  'Nottingham',
];

export default function LocationsGrid() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Locations
          </span>
          <h2
            className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-[2.75rem]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Serving Businesses Across the UK
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {cities.map((city) => (
            <Link
              key={city}
              href={`/locations/${city.toLowerCase().replace(/\s+/g, '-')}`}
              className="group relative flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/50 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-md"
            >
              <span className="flex h-2 w-2 items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-blue-500 transition-transform group-hover:scale-125" />
              </span>
              <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                {city}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
