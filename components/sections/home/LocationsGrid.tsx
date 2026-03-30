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
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Serving Businesses Across the UK
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {cities.map((city) => (
            <Link
              key={city}
              href={`/locations/${city.toLowerCase().replace(/\s+/g, '-')}`}
              className="group flex items-center gap-2 rounded-lg px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gray-50"
            >
              <span className="text-blue-500">●</span>
              <span className="font-medium text-gray-700 group-hover:text-blue-500 group-hover:underline">
                {city}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
