import { ArrowRight, MapPin } from 'lucide-react';

const Home = () => {
  const destinations = [
    {
      name: 'Tokyo',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
      description: 'Experience the perfect blend of traditional culture and cutting-edge technology in Japan\'s bustling capital.',
    },
    {
      name: 'Kyoto',
      image: 'https://images.pexels.com/photos/161251/fushimi-inari-taisha-shrine-kyoto-japan-temple-161251.jpeg',
      description: 'Discover ancient temples, traditional geisha districts, and stunning Japanese gardens in this historic city.',
    },
    {
      name: 'Osaka',
      image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg',
      description: 'Indulge in street food paradise and experience the warm, friendly spirit of Japan\'s kitchen.',
    },
    {
      name: 'Hokkaido',
      image: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg',
      description: 'Explore pristine nature, world-class ski resorts, and fresh seafood in Japan\'s northern island.',
    },
    {
      name: 'Nara',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg',
      description: 'Meet friendly deer roaming freely and visit some of Japan\'s oldest and most significant temples.',
    },
    {
      name: 'Hiroshima',
      image: 'https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg',
      description: 'Reflect on history at the Peace Memorial and discover the resilience of this beautiful city.',
    },
  ];

  const scrollToDestinations = () => {
    const element = document.getElementById('destinations');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg)',
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover the Heart of Japan
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience ancient traditions, modern wonders, and unforgettable moments
          </p>
          <button
            onClick={scrollToDestinations}
            className="group px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full font-semibold text-lg transition-all transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Explore Destinations</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white rounded-full mt-2" />
          </div>
        </div>
      </section>

      <section id="destinations" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Top Destinations
            </h2>
            <div className="w-24 h-1 bg-red-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center text-white">
                    <MapPin className="w-5 h-5 mr-2" />
                    <h3 className="text-2xl font-bold">{destination.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {destination.description}
                  </p>
                  <button className="group/btn flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
