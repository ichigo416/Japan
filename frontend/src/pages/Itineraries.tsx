import { Calendar, MapPin, Clock } from 'lucide-react';

const Itineraries = () => {
  const itineraries = [
    {
      duration: '3 Days',
      title: 'Tokyo Express',
      days: [
        {
          day: 1,
          title: 'Modern Tokyo',
          activities: [
            'Arrival and check-in at hotel in Shibuya',
            'Explore Shibuya Crossing and Hachiko Statue',
            'Visit Meiji Shrine and Yoyogi Park',
            'Evening shopping in Harajuku and Takeshita Street',
            'Dinner at a traditional izakaya',
          ],
        },
        {
          day: 2,
          title: 'Traditional Tokyo',
          activities: [
            'Morning visit to Senso-ji Temple in Asakusa',
            'Explore Nakamise Shopping Street',
            'Lunch at Tsukiji Outer Market',
            'Visit Imperial Palace East Gardens',
            'Evening at Tokyo Skytree with city views',
          ],
        },
        {
          day: 3,
          title: 'Cultural Immersion',
          activities: [
            'Day trip to Nikko Toshogu Shrine',
            'Explore beautiful Kegon Falls',
            'Traditional Japanese lunch',
            'Return to Tokyo for departure',
          ],
        },
      ],
    },
    {
      duration: '5 Days',
      title: 'Tokyo & Kyoto Highlights',
      days: [
        {
          day: 1,
          title: 'Tokyo Arrival',
          activities: [
            'Arrive in Tokyo and settle into accommodation',
            'Evening exploration of Shinjuku district',
            'Visit Tokyo Metropolitan Government Building for night views',
            'Welcome dinner in Golden Gai area',
          ],
        },
        {
          day: 2,
          title: 'Tokyo Discovery',
          activities: [
            'Visit Tsukiji Outer Market for breakfast',
            'Explore Ginza shopping district',
            'Afternoon at teamLab Borderless digital art museum',
            'Dinner in Roppongi Hills',
          ],
        },
        {
          day: 3,
          title: 'Journey to Kyoto',
          activities: [
            'Morning Shinkansen to Kyoto',
            'Check-in and lunch in Gion district',
            'Visit Kiyomizu-dera Temple',
            'Evening stroll through Pontocho Alley',
            'Traditional kaiseki dinner',
          ],
        },
        {
          day: 4,
          title: 'Kyoto Temples',
          activities: [
            'Visit Fushimi Inari Shrine and hike torii gate trails',
            'Explore Arashiyama Bamboo Grove',
            'Visit Tenryu-ji Temple and gardens',
            'Boat ride on Hozu River',
            'Return to Kyoto for evening shopping',
          ],
        },
        {
          day: 5,
          title: 'Kyoto Culture',
          activities: [
            'Morning at Kinkaku-ji (Golden Pavilion)',
            'Traditional tea ceremony experience',
            'Explore Nishiki Market for lunch',
            'Visit Nijo Castle',
            'Return to Tokyo for departure',
          ],
        },
      ],
    },
    {
      duration: '7 Days',
      title: 'Grand Japan Tour',
      days: [
        {
          day: 1,
          title: 'Tokyo Welcome',
          activities: [
            'Arrival and hotel check-in',
            'Orientation walk in local neighborhood',
            'Visit Senso-ji Temple in Asakusa',
            'Welcome dinner with city views',
          ],
        },
        {
          day: 2,
          title: 'Modern Tokyo',
          activities: [
            'Shibuya and Harajuku exploration',
            'Meiji Shrine visit',
            'Shopping in Omotesando',
            'Tokyo Tower evening illumination',
          ],
        },
        {
          day: 3,
          title: 'Mount Fuji Day Trip',
          activities: [
            'Early morning departure to Mount Fuji area',
            'Visit 5th Station viewpoint',
            'Lake Kawaguchi sightseeing',
            'Hakone hot springs experience',
            'Return to Tokyo',
          ],
        },
        {
          day: 4,
          title: 'Journey to Kyoto',
          activities: [
            'Shinkansen ride to Kyoto',
            'Check-in at traditional ryokan',
            'Visit Nijo Castle',
            'Evening in Gion district',
            'Traditional multi-course dinner',
          ],
        },
        {
          day: 5,
          title: 'Kyoto Temples & Gardens',
          activities: [
            'Fushimi Inari Shrine early morning hike',
            'Kiyomizu-dera Temple visit',
            'Lunch in Higashiyama district',
            'Philosopher\'s Path walk',
            'Ginkaku-ji (Silver Pavilion)',
          ],
        },
        {
          day: 6,
          title: 'Nara & Osaka',
          activities: [
            'Day trip to Nara to see deer and Todai-ji',
            'Lunch in Nara Park area',
            'Afternoon travel to Osaka',
            'Dotonbori evening food tour',
            'Try famous Osaka street food',
          ],
        },
        {
          day: 7,
          title: 'Osaka & Departure',
          activities: [
            'Morning visit to Osaka Castle',
            'Shopping in Shinsaibashi',
            'Final lunch of regional specialties',
            'Departure from Kansai Airport',
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="bg-gradient-to-r from-red-600 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sample Itineraries</h1>
          <p className="text-xl text-gray-200">Carefully curated journeys to help you plan your perfect trip</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {itineraries.map((itinerary, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Calendar className="w-6 h-6" />
                      <span className="text-lg font-semibold">{itinerary.duration}</span>
                    </div>
                    <h2 className="text-3xl font-bold">{itinerary.title}</h2>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-8">
                  {itinerary.days.map((day) => (
                    <div
                      key={day.day}
                      className="group relative pl-8 border-l-4 border-red-200 hover:border-red-600 transition-colors"
                    >
                      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold">
                        {day.day}
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6 group-hover:bg-red-50 transition-colors">
                        <div className="flex items-center space-x-2 mb-3">
                          <Clock className="w-5 h-5 text-red-600" />
                          <h3 className="text-xl font-bold text-gray-900">
                            Day {day.day}: {day.title}
                          </h3>
                        </div>

                        <ul className="space-y-2">
                          {day.activities.map((activity, actIdx) => (
                            <li key={actIdx} className="flex items-start space-x-3">
                              <MapPin className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Itineraries;
