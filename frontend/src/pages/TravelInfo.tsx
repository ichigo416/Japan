import { FileText, Calendar, Train, Lightbulb, CreditCard, Wifi, Shield } from 'lucide-react';

const TravelInfo = () => {
  const infoSections = [
    {
      icon: FileText,
      title: 'Visa Information',
      content: [
        {
          subtitle: 'Visa-Free Entry',
          text: 'Citizens of 68 countries can enter Japan visa-free for tourism for stays of up to 90 days, including USA, Canada, UK, Australia, and most EU countries.',
        },
        {
          subtitle: 'Required Documents',
          text: 'Valid passport (at least 6 months validity), return flight ticket, proof of sufficient funds, and accommodation details.',
        },
        {
          subtitle: 'Visa Application',
          text: 'If you require a visa, apply at the nearest Japanese embassy or consulate at least 4-6 weeks before your trip.',
        },
      ],
    },
    {
      icon: Calendar,
      title: 'Best Seasons to Visit',
      content: [
        {
          subtitle: 'Spring (March - May)',
          text: 'Perfect for cherry blossom viewing. Mild temperatures (10-20°C) and beautiful pink landscapes. Peak season is late March to early April.',
        },
        {
          subtitle: 'Summer (June - August)',
          text: 'Hot and humid (25-35°C). Great for festivals and beach activities. Rainy season in June-July. Mountain hiking is popular.',
        },
        {
          subtitle: 'Autumn (September - November)',
          text: 'Ideal weather (15-25°C) with stunning fall foliage. Best time for temple visits and outdoor activities. Peak colors in November.',
        },
        {
          subtitle: 'Winter (December - February)',
          text: 'Cold (0-10°C) but perfect for skiing, hot springs, and winter illuminations. Less crowded tourist spots and unique experiences.',
        },
      ],
    },
    {
      icon: Train,
      title: 'Transportation',
      content: [
        {
          subtitle: 'JR Pass',
          text: 'The Japan Rail Pass offers unlimited travel on JR trains, including most Shinkansen bullet trains. Available for 7, 14, or 21 days. Must be purchased before arriving in Japan. Excellent value for inter-city travel.',
        },
        {
          subtitle: 'Metro Systems',
          text: 'Major cities have extensive metro networks. Get an IC card (Suica or Pasmo) for convenient tap-and-go payment. Maps and signs are in English. Very punctual and efficient.',
        },
        {
          subtitle: 'Bullet Trains (Shinkansen)',
          text: 'High-speed trains connecting major cities at 320 km/h. Extremely punctual, comfortable, and safe. Reserved and non-reserved seating available. Tokyo to Kyoto in 2.5 hours.',
        },
        {
          subtitle: 'Local Buses',
          text: 'Comprehensive bus networks in cities and rural areas. Pay when exiting. Some buses require exact change. Bus passes available for popular tourist routes.',
        },
      ],
    },
  ];

  const proTips = [
    {
      icon: CreditCard,
      title: 'Cash is King',
      tip: 'Many places still prefer cash. Withdraw from 7-Eleven ATMs which accept foreign cards. Carry enough yen for small shops and restaurants.',
    },
    {
      icon: Wifi,
      title: 'Stay Connected',
      tip: 'Rent a pocket WiFi or get a tourist SIM card at the airport. Free WiFi is available but not as widespread as in other countries.',
    },
    {
      icon: Shield,
      title: 'Travel Insurance',
      tip: 'Medical costs can be high. Get comprehensive travel insurance. Japan is very safe, but it\'s better to be prepared.',
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="bg-gradient-to-r from-red-600 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Essential Travel Information</h1>
          <p className="text-xl text-gray-200">Everything you need to know before your journey</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {infoSections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
                  <div className="flex items-center space-x-3">
                    <Icon className="w-8 h-8" />
                    <h2 className="text-3xl font-bold">{section.title}</h2>
                  </div>
                </div>

                <div className="p-8">
                  <div className="space-y-6">
                    {section.content.map((item, itemIdx) => (
                      <div
                        key={itemIdx}
                        className="border-l-4 border-red-200 pl-6 hover:border-red-600 transition-colors"
                      >
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.subtitle}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full">
              <Lightbulb className="w-6 h-6" />
              <span className="text-xl font-bold">Pro Tips</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {proTips.map((tip, idx) => {
              const Icon = tip.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200 hover:border-yellow-400 transition-colors"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-yellow-900" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{tip.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{tip.tip}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelInfo;
