import { useState } from 'react';
import { UtensilsCrossed, Flower2, Mountain, Sparkles } from 'lucide-react';

const experiences = {
  foods: [
    {
      name: 'Sushi',
      image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Fresh, delicate slices of raw fish over perfectly seasoned rice.',
    },
    {
      name: 'Ramen',
      image: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Rich, savory broth with noodles, pork, and flavorful toppings.',
    },
    {
      name: 'Tempura',
      image: 'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Light, crispy battered seafood and vegetables fried to perfection.',
    },
    {
      name: 'Takoyaki',
      image: 'https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Savory octopus-filled dough balls, a beloved street food delight.',
    },
    {
      name: 'Okonomiyaki',
      image: 'https://images.pexels.com/photos/5409020/pexels-photo-5409020.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Japanese savory pancake with cabbage, meat, and special sauce.',
    },
    {
      name: 'Soba',
      image: 'https://images.pexels.com/photos/4518842/pexels-photo-4518842.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Buckwheat noodles served hot or cold with dipping sauce.',
    },
    {
      name: 'Mochi',
      image: 'https://images.pexels.com/photos/7652186/pexels-photo-7652186.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Soft, chewy rice cake with sweet fillings, a traditional treat.',
    },
  ],
  cultures: [
    {
      name: 'Tea Ceremony',
      image: 'https://images.pexels.com/photos/5840242/pexels-photo-5840242.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Experience the meditative art of preparing and serving matcha green tea.',
    },
    {
      name: 'Kimono Wearing',
      image: 'https://images.pexels.com/photos/2617420/pexels-photo-2617420.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Dress in traditional Japanese attire and stroll through historic districts.',
    },
    {
      name: 'Calligraphy',
      image: 'https://images.pexels.com/photos/7233369/pexels-photo-7233369.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Learn the ancient art of Japanese brush writing and create your own masterpiece.',
    },
    {
      name: 'Festivals',
      image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Join vibrant matsuri celebrations with traditional music, dance, and fireworks.',
    },
  ],
  adventures: [
    {
      name: 'Mount Fuji Hiking',
      image: 'https://images.pexels.com/photos/4523616/pexels-photo-4523616.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Climb Japan\'s iconic mountain and witness breathtaking sunrise views.',
    },
    {
      name: 'Skiing in Hokkaido',
      image: 'https://images.pexels.com/photos/848599/pexels-photo-848599.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Experience world-class powder snow in Japan\'s premier ski resorts.',
    },
    {
      name: 'Okinawa Water Adventures',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Dive into crystal-clear waters for snorkeling, diving, and beach adventures.',
    },
    {
      name: 'Forest Trails',
      image: 'https://images.pexels.com/photos/1032662/pexels-photo-1032662.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Explore serene bamboo groves and ancient cedar forests on peaceful trails.',
    },
  ],
  temples: [
    {
      name: 'Senso-ji',
      image: 'https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Tokyo\'s oldest temple, featuring the iconic Thunder Gate and vibrant Nakamise shopping street.',
    },
    {
      name: 'Fushimi Inari Taisha',
      image: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Famous for thousands of vermilion torii gates winding up the mountainside.',
    },
    {
      name: 'Kinkaku-ji',
      image: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'The stunning Golden Pavilion reflecting beautifully in the surrounding pond.',
    },
    {
      name: 'Todai-ji',
      image: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Home to the world\'s largest bronze Buddha statue in an enormous wooden hall.',
    },
  ],
};

const tabs = [
  { id: 'foods', label: 'Famous Foods', icon: UtensilsCrossed },
  { id: 'cultures', label: 'Cultures', icon: Flower2 },
  { id: 'adventures', label: 'Adventures', icon: Mountain },
  { id: 'temples', label: 'Temples', icon: Sparkles },
];

export default function Experiences() {
  const [activeTab, setActiveTab] = useState<'foods' | 'cultures' | 'adventures' | 'temples'>('foods');

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Authentic Experiences
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Immerse yourself in the rich tapestry of Japanese culture, cuisine, and adventure
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as typeof activeTab)}
              className={`flex items-center gap-2 px-6 py-3 rounded-sm font-semibold transition-all duration-300 ${
                activeTab === id
                  ? 'bg-red-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {experiences[activeTab].map((item, index) => (
            <div
              key={item.name}
              className="group bg-white rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
