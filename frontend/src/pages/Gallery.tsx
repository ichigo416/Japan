import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://images.pexels.com/photos/248195/pexels-photo-248195.jpeg',
      category: 'Landscape',
      tall: true,
    },
    {
      url: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
      category: 'City',
      tall: false,
    },
    {
      url: 'https://images.pexels.com/photos/161251/fushimi-inari-taisha-shrine-kyoto-japan-temple-161251.jpeg',
      category: 'Culture',
      tall: true,
    },
    {
      url: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg',
      category: 'Food',
      tall: false,
    },
    {
      url: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg',
      category: 'City',
      tall: true,
    },
    {
      url: 'https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg',
      category: 'Landscape',
      tall: false,
    },
    {
      url: 'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg',
      category: 'Food',
      tall: false,
    },
    {
      url: 'https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg',
      category: 'Landscape',
      tall: true,
    },
    {
      url: 'https://images.pexels.com/photos/2861361/pexels-photo-2861361.jpeg',
      category: 'Culture',
      tall: false,
    },
    {
      url: 'https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg',
      category: 'City',
      tall: true,
    },
    {
      url: 'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg',
      category: 'Landscape',
      tall: false,
    },
    {
      url: 'https://images.pexels.com/photos/5469047/pexels-photo-5469047.jpeg',
      category: 'Culture',
      tall: true,
    },
    {
      url: 'https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg',
      category: 'Food',
      tall: false,
    },
    {
      url: 'https://images.pexels.com/photos/8989875/pexels-photo-8989875.jpeg',
      category: 'Culture',
      tall: true,
    },
    {
      url: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg',
      category: 'Landscape',
      tall: false,
    },
    {
      url: 'https://images.pexels.com/photos/848612/pexels-photo-848612.jpeg',
      category: 'Landscape',
      tall: true,
    },
    {
      url: 'https://images.pexels.com/photos/4197439/pexels-photo-4197439.jpeg',
      category: 'Food',
      tall: false,
    },
    {
      url: 'https://images.pexels.com/photos/5409015/pexels-photo-5409015.jpeg',
      category: 'Food',
      tall: false,
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="bg-gradient-to-r from-red-600 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Visual Journey</h1>
          <p className="text-xl text-gray-200">Experience Japan through stunning imagery</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="break-inside-avoid group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.category}
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-red-600 text-white text-sm font-semibold rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-600 transition-colors text-4xl font-light"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
