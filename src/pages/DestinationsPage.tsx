import { MapPin } from 'lucide-react';

const destinations = [
  {
    name: 'Tokyo',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A vibrant metropolis where ancient temples meet futuristic skyscrapers and neon-lit streets.',
  },
  {
    name: 'Kyoto',
    image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'The cultural heart of Japan, home to thousands of temples, traditional gardens, and geishas.',
  },
  {
    name: 'Osaka',
    image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Famous for its modern architecture, nightlife, and hearty street food culture.',
  },
  {
    name: 'Hokkaido',
    image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Japan\'s northern island paradise, known for powder snow, lavender fields, and fresh seafood.',
  },
  {
    name: 'Nara',
    image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Home to friendly deer that roam freely among ancient temples and peaceful parks.',
  },
  {
    name: 'Hiroshima',
    image: 'https://images.pexels.com/photos/3247682/pexels-photo-3247682.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'A city of peace and resilience, featuring the iconic floating torii gate of Miyajima.',
  },
];

export default function DestinationsPage() {
  return (
    <section className="pt-24 pb-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Top Destinations
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={destination.name}
              className="group relative overflow-hidden rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <h3 className="text-2xl font-bold">{destination.name}</h3>
                </div>
                <p className="text-sm text-gray-200 mb-4 opacity-90">
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
