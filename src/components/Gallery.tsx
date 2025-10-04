import { X } from 'lucide-react';
import { useState } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export default function Gallery() {
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleries: GalleryItem[] = [
    {
      id: 1,
      title: 'Elegant Wedding Ceremony',
      category: 'Wedding',
      thumbnail: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ]
    },
    {
      id: 2,
      title: 'Corporate Annual Meet',
      category: 'Corporate',
      thumbnail: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ]
    },
    {
      id: 3,
      title: 'Birthday Bash Celebration',
      category: 'Birthday',
      thumbnail: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1857157/pexels-photo-1857157.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ]
    },
    {
      id: 4,
      title: 'Music Festival Experience',
      category: 'Concert',
      thumbnail: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1267317/pexels-photo-1267317.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ]
    },
    {
      id: 5,
      title: 'Intimate Anniversary Party',
      category: 'Private',
      thumbnail: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ]
    },
    {
      id: 6,
      title: 'Grand Engagement Celebration',
      category: 'Engagement',
      thumbnail: 'https://images.pexels.com/photos/1568566/pexels-photo-1568566.jpeg?auto=compress&cs=tinysrgb&w=800',
      images: [
        'https://images.pexels.com/photos/1568566/pexels-photo-1568566.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3171815/pexels-photo-3171815.jpeg?auto=compress&cs=tinysrgb&w=1200'
      ]
    }
  ];

  const openGallery = (gallery: GalleryItem) => {
    setSelectedGallery(gallery);
    setCurrentImageIndex(0);
  };

  const closeGallery = () => {
    setSelectedGallery(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedGallery.images.length);
    }
  };

  const prevImage = () => {
    if (selectedGallery) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedGallery.images.length) % selectedGallery.images.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Past Events</h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">Click on any event to view the full gallery</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleries.map((gallery) => (
            <div
              key={gallery.id}
              onClick={() => openGallery(gallery)}
              className="group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={gallery.thumbnail}
                  alt={gallery.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 bg-amber-600 rounded-full text-sm mb-2">{gallery.category}</span>
                  <h3 className="text-xl font-bold">{gallery.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedGallery && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
          <button
            onClick={closeGallery}
            className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors"
          >
            <X size={36} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-amber-500 text-6xl transition-colors"
          >
            ‹
          </button>

          <div className="max-w-5xl w-full">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedGallery.title}</h3>
              <p className="text-amber-500">
                Image {currentImageIndex + 1} of {selectedGallery.images.length}
              </p>
            </div>
            <img
              src={selectedGallery.images[currentImageIndex]}
              alt={`${selectedGallery.title} - ${currentImageIndex + 1}`}
              className="w-full max-h-[70vh] object-contain rounded-lg"
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-amber-500 text-6xl transition-colors"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}
