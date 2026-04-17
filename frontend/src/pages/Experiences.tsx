import { useState } from 'react';
import { UtensilsCrossed, Palette, Mountain as MountainIcon, Church } from 'lucide-react';

type Category = 'foods' | 'cultures' | 'adventures' | 'temples';

const Experiences = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('foods');

  const categories = [
    { id: 'foods' as Category, name: 'Famous Foods', icon: UtensilsCrossed },
    { id: 'cultures' as Category, name: 'Cultures', icon: Palette },
    { id: 'adventures' as Category, name: 'Adventures', icon: MountainIcon },
    { id: 'temples' as Category, name: 'Temples', icon: Church },
  ];

  const experiences = {
    foods: [
      {
        name: 'Sushi',
        image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg',
        description: 'Fresh, artfully prepared raw fish and seafood on vinegared rice, a true Japanese culinary masterpiece.',
      },
      {
        name: 'Ramen',
        image: 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg',
        description: 'Rich, flavorful noodle soup with various broths, toppings, and regional variations across Japan.',
      },
      {
        name: 'Tempura',
        image: 'https://images.pexels.com/photos/4197439/pexels-photo-4197439.jpeg',
        description: 'Lightly battered and perfectly fried vegetables and seafood, crispy on the outside and tender inside.',
      },
      {
        name: 'Takoyaki',
        image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg',
        description: 'Spherical wheat balls filled with octopus, tempura scraps, and green onion, topped with savory sauce.',
      },
      {
        name: 'Okonomiyaki',
        image: 'https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg',
        description: 'Savory Japanese pancake with cabbage, meat, and seafood, customized to your preference.',
      },
      {
        name: 'Soba',
        image: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg',
        description: 'Buckwheat noodles served hot or cold, embodying Japanese simplicity and elegance.',
      },
      {
        name: 'Mochi',
        image: 'https://images.pexels.com/photos/9875420/pexels-photo-9875420.jpeg',
        description: 'Chewy rice cakes made from glutinous rice, enjoyed year-round in sweet and savory varieties.',
      },
    ],
    cultures: [
      {
        name: 'Tea Ceremony',
        image: 'https://images.pexels.com/photos/5469047/pexels-photo-5469047.jpeg',
        description: 'Experience the ancient art of preparing and serving matcha tea with grace, mindfulness, and respect.',
      },
      {
        name: 'Kimono Wearing',
        image: 'https://images.pexels.com/photos/8989875/pexels-photo-8989875.jpeg',
        description: 'Dress in traditional Japanese garments and walk through historic streets in authentic style.',
      },
      {
        name: 'Calligraphy',
        image: 'https://images.pexels.com/photos/8111901/pexels-photo-8111901.jpeg',
        description: 'Learn the meditative art of Japanese brush writing, expressing beauty through ink and paper.',
      },
      {
        name: 'Festivals',
        image: 'https://images.pexels.com/photos/2861361/pexels-photo-2861361.jpeg',
        description: 'Join vibrant celebrations featuring traditional dances, music, and spectacular fireworks displays.',
      },
    ],
    adventures: [
      {
        name: 'Mount Fuji Hiking',
        image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg',
        description: 'Climb Japan\'s iconic sacred mountain and witness breathtaking sunrise views from the summit.',
      },
      {
        name: 'Skiing in Hokkaido',
        image: 'https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg',
        description: 'Experience world-class powder snow at premier ski resorts in Japan\'s northern wilderness.',
      },
      {
        name: 'Okinawa Water Adventures',
        image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
        description: 'Dive into crystal-clear waters, explore coral reefs, and enjoy tropical island paradise.',
      },
      {
        name: 'Forest Trails',
        image: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg',
        description: 'Wander through ancient forests and bamboo groves, connecting with nature\'s tranquility.',
      },
    ],
    temples: [
      {
        name: 'Senso-ji',
        image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg',
        description: 'Tokyo\'s oldest temple with iconic Thunder Gate and vibrant Nakamise shopping street.',
      },
      {
        name: 'Fushimi Inari Taisha',
        image: 'https://images.pexels.com/photos/161251/fushimi-inari-taisha-shrine-kyoto-japan-temple-161251.jpeg',
        description: 'Famous for thousands of vermillion torii gates winding up the sacred Mount Inari.',
      },
      {
        name: 'Kinkaku-ji',
        image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg',
        description: 'The stunning Golden Pavilion reflecting magnificently in its surrounding pond garden.',
      },
      {
        name: 'Todai-ji',
        image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg',
        description: 'Home to the world\'s largest bronze Buddha statue in Nara, surrounded by friendly deer.',
      },
    ],
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="bg-gradient-to-r from-red-600 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Japanese Experiences</h1>
          <p className="text-xl text-gray-200">Immerse yourself in the rich culture and traditions of Japan</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-red-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 hover:scale-105'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences[activeCategory].map((experience, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={experience.image}
                  alt={experience.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  {experience.name}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 leading-relaxed">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
