import { FileText, Sun, Train } from 'lucide-react';

const infoSections = [
  {
    icon: FileText,
    title: 'Visa Information',
    items: [
      'Citizens from 68 countries can visit visa-free for up to 90 days',
      'Valid passport required (6 months validity recommended)',
      'Electronic visa available for eligible countries',
      'Working holiday visas available for specific nationalities',
    ],
    color: 'bg-red-50 border-red-200',
    iconColor: 'text-red-600',
  },
  {
    icon: Sun,
    title: 'Best Seasons',
    items: [
      'Spring (March-May): Cherry blossoms, mild weather, perfect for sightseeing',
      'Summer (June-August): Festivals, beach activities, but hot and humid',
      'Autumn (September-November): Fall foliage, comfortable temperatures, harvest season',
      'Winter (December-February): Skiing, hot springs, fewer crowds, winter illuminations',
    ],
    color: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-600',
  },
  {
    icon: Train,
    title: 'Transportation',
    items: [
      'JR Pass: Unlimited travel on JR trains including most shinkansen (bullet trains)',
      'IC Cards (Suica/Pasmo): Rechargeable cards for trains, buses, and purchases',
      'Shinkansen: High-speed trains connecting major cities (Tokyo-Kyoto: 2.5 hours)',
      'Local trains & subways: Extensive networks in major cities, highly punctual',
      'Taxis: Available but expensive, useful for short trips or groups',
    ],
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
  },
];

export default function TravelInfoPage() {
  return (
    <section className="pt-24 pb-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Essential Travel Information
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know before your journey to Japan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {infoSections.map(({ icon: Icon, title, items, color, iconColor }, index) => (
            <div
              key={title}
              className={`${color} border-2 rounded-sm p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`${iconColor} bg-white rounded-full p-3 shadow-md`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
              </div>

              <ul className="space-y-3">
                {items.map((item, i) => (
                  <li key={i} className="text-gray-700 flex items-start gap-3 leading-relaxed">
                    <span className={`${iconColor} mt-1.5 flex-shrink-0`}>▸</span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-sm p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Pro Tips for Your Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-sm p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h4 className="font-bold mb-2 text-lg">JR Pass Savings</h4>
              <p className="text-sm leading-relaxed">
                Purchase your JR Pass before arriving in Japan to save significantly on transportation costs.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-sm p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h4 className="font-bold mb-2 text-lg">Offline Essentials</h4>
              <p className="text-sm leading-relaxed">
                Download offline maps and translation apps to navigate smoothly without constant internet connectivity.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-sm p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h4 className="font-bold mb-2 text-lg">Language Tips</h4>
              <p className="text-sm leading-relaxed">
                Learn basic Japanese phrases for a more enriching and respectful travel experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
