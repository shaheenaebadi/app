'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const GalleryPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentAlbum, setCurrentAlbum] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryData = {
    'awareness-seminar': {
      title: 'Awareness Seminar 2024',
      description: 'The 2024 awareness seminar. The seminar was held in the municipal building.',
      details: {
        Location: 'Central Kaliakoir',
        Event: 'Awareness Seminar',
        Year: '2024'
      },
      images: Array.from({ length: 6 }, (_, i) => ({
        src: `/Assets/GalleryItems/Awareness-seminar/awareness-seminar${i + 1}.jpeg`,
        description: 'Awareness Seminar 2024'
      }))
    },
    'road-construction': {
      title: 'Road Construction 2024',
      description: 'The 2024 road construction project. The project was completed in record time.',
      details: {
        Location: 'Central Kaliakoir',
        Project: 'Road Construction',
        Year: '2024'
      },
      images: Array.from({ length: 9 }, (_, i) => ({
        src: `/Assets/GalleryItems/Road-construction/road-construction${i + 1}.jpeg`,
        description: 'Road Construction 2024'
      }))
    },
    'war-on-mosquito': {
      title: 'War on Mosquito 2024',
      description: 'The 2024 war on mosquito campaign. The campaign was a huge success.',
      details: {
        Location: 'Central Kaliakoir',
        Campaign: 'War on Mosquito',
        Year: '2024'
      },
      images: Array.from({ length: 13 }, (_, i) => ({
        src: `/Assets/GalleryItems/War-on-mosquito/war-on-mosquito${i + 1}.jpeg`,
        description: 'War on Mosquito 2024'
      }))
    },
    'cutting-weed': {
      title: 'Cutting Weed 2024',
      description: 'The 2024 cutting weed campaign. The campaign was a huge success.',
      details: {
        Location: 'Central Kaliakoir',
        Event: 'Cutting Weed',
        Year: '2024'
      },
      images: Array.from({ length: 7 }, (_, i) => ({
        src: `/Assets/GalleryItems/Cutting-weed/cutting-weed${i + 1}.jpeg`,
        description: 'Cutting Weed 2024'
      }))
    }
  };

  const openModal = (album, index = 0) => {
    setCurrentAlbum(album);
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentAlbum(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (currentAlbum) {
      setCurrentImageIndex((prev) => 
        (prev + 1) % galleryData[currentAlbum].images.length
      );
    }
  };

  const prevImage = () => {
    if (currentAlbum) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? galleryData[currentAlbum].images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Gallery Title */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Photo Gallery
        </h1>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(galleryData).map(([albumId, album]) => (
            <div 
              key={albumId}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div 
                className="relative h-64 cursor-pointer"
                onClick={() => openModal(albumId)}
              >
                <Image
                  src={album.images[0].src}
                  alt={album.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{album.title}</h3>
                <p className="text-gray-600 text-sm">{album.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalOpen && currentAlbum && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
            <div className="container mx-auto px-4">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Image */}
              <div className="relative h-[70vh] mx-auto">
                <Image
                  src={galleryData[currentAlbum].images[currentImageIndex].src}
                  alt={galleryData[currentAlbum].images[currentImageIndex].description}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Image Details */}
              <div className="text-white mt-4">
                <h2 className="text-2xl font-bold mb-2">
                  {galleryData[currentAlbum].title}
                </h2>
                <div className="flex gap-4 text-sm">
                  {Object.entries(galleryData[currentAlbum].details).map(([key, value]) => (
                    <span key={key}>{key}: {value}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;