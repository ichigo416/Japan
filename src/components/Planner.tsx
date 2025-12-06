import { Calendar, Clock } from 'lucide-react';

const itineraries = [
  {
    duration: '3-Day',
    title: 'Tokyo Highlights',
    days: [
      {
        day: 1,
        activities: ['Arrive in Tokyo', 'Visit Senso-ji Temple', 'Explore Shibuya Crossing', 'Dinner in Shinjuku'],
      },
      {
        day: 2,
        activities: ['Imperial Palace Gardens', 'Meiji Shrine', 'Harajuku Shopping', 'Tokyo Tower at night'],
      },
      {
        day: 3,
        activities: ['Tsukiji Outer Market', 'Ginza shopping', 'TeamLab Borderless', 'Departure'],
      },
    ],
    color: 'from-red-500 to-pink-500',
  },
  {
    duration: '5-Day',
    title: 'Tokyo & Kyoto',
    days: [
      {
        day: 1,
        activities: ['Arrive Tokyo', 'Asakusa & Senso-ji', 'Skytree', 'Sumida River cruise'],
      },
      {
        day: 2,
        activities: ['Shibuya & Harajuku', 'Meiji Shrine', 'Omotesando', 'Robot Restaurant'],
      },
      {
        day: 3,
        activities: ['Bullet train to Kyoto', 'Fushimi Inari', 'Gion district', 'Tea ceremony'],
      },
      {
        day: 4,
        activities: ['Kinkaku-ji', 'Arashiyama Bamboo', 'Monkey Park', 'Pontocho dinner'],
      },
      {
        day: 5,
        activities: ['Nara day trip', 'Todai-ji Temple', 'Deer park', 'Return & departure'],
      },
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    duration: '7-Day',
    title: 'Grand Japan Tour',
    days: [
      {
        day: 1,
        activities: ['Arrive Tokyo', 'Check-in & rest', 'Shibuya evening', 'Welcome dinner'],
      },
      {
        day: 2,
        activities: ['Imperial Palace', 'Akihabara', 'Ueno Park', 'Asakusa nightlife'],
      },
      {
        day: 3,
        activities: ['Day trip to Mt. Fuji', 'Lake Kawaguchi', 'Onsen experience', 'Return to Tokyo'],
      },
      {
        day: 4,
        activities: ['Travel to Kyoto', 'Kiyomizu-dera', 'Higashiyama district', 'Kaiseki dinner'],
      },
      {
        day: 5,
        activities: ['Arashiyama', 'Bamboo grove', 'Kinkaku-ji', 'Nishiki Market'],
      },
      {
        day: 6,
        activities: ['Nara deer park', 'Todai-ji', 'Travel to Osaka', 'Dotonbori nightlife'],
      },
      {
        day: 7,
        activities: ['Osaka Castle', 'Last minute shopping', 'Kuromon Market', 'Departure'],
      },
    ],
    color: 'from-amber-500 to-orange-500',
  },
];

export default function Planner() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sample Itineraries
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Let us guide your journey with carefully curated itineraries for every type of traveler
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {itineraries.map((itinerary, index) => (
            <div
              key={itinerary.duration}
              className="group bg-white rounded-sm shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`bg-gradient-to-r ${itinerary.color} p-6 text-white`}>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">{itinerary.duration}</h3>
                </div>
                <p className="text-lg opacity-95">{itinerary.title}</p>
              </div>

              <div className="p-6 space-y-4">
                {itinerary.days.map((day) => (
                  <div
                    key={day.day}
                    className="border-l-4 border-red-600 pl-4 py-2 hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-red-600" />
                      <h4 className="font-bold text-gray-900">Day {day.day}</h4>
                    </div>
                    <ul className="space-y-1">
                      {day.activities.map((activity, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-red-600 mt-1">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="px-6 pb-6">
                <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-sm transition-all duration-300 hover:scale-105">
                  Customize This Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
