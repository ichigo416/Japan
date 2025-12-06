const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Mount Fuji with cherry blossoms',
    tall: true,
  },
  {
    url: 'https://images.pexels.com/photos/161401/fushimi-inari-taisha-shrine-kyoto-japan-temple-161401.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Torii gates at Fushimi Inari',
    tall: false,
  },
  {
    url: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Tokyo skyline at night',
    tall: false,
  },
  {
    url: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Fresh sushi platter',
    tall: true,
  },
  {
    url: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Traditional Japanese festival',
    tall: false,
  },
  {
    url: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Snowy landscape in Hokkaido',
    tall: true,
  },
  {
    url: 'https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Bowl of ramen',
    tall: false,
  },
  {
    url: 'https://images.pexels.com/photos/315191/pexels-photo-315191.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Senso-ji Temple',
    tall: false,
  },
  {
    url: 'https://images.pexels.com/photos/1032662/pexels-photo-1032662.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Bamboo forest path',
    tall: true,
  },
  {
    url: 'https://images.pexels.com/photos/2617420/pexels-photo-2617420.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Woman in kimono',
    tall: false,
  },
  {
    url: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Osaka cityscape',
    tall: false,
  },
  {
    url: 'https://images.pexels.com/photos/4523616/pexels-photo-4523616.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Mount Fuji landscape',
    tall: true,
  },
];

export default function Gallery() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visual Journey
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the beauty of Japan through stunning imagery
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative overflow-hidden rounded-sm shadow-md hover:shadow-2xl transition-all duration-500">
                <img
                  src={image.url}
                  alt={image.alt}
                  className={`w-full ${
                    image.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  } object-cover group-hover:scale-110 transition-transform duration-700`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-semibold text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-sm transition-all duration-300 hover:scale-105 shadow-lg">
            View Full Gallery
          </button>
        </div>
      </div>
    </section>
  );
}
