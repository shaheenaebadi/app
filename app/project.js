import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ZoomIn } from 'lucide-react';

const ProjectsPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const ImageWithZoom = ({ src, alt, caption }) => (
    <div className="flex flex-col">
      <div 
        className="relative cursor-pointer group"
        onClick={() => setSelectedImage({ src, alt })}
      >
        <Image 
          src={src}
          alt={alt}
          width={500}
          height={300}
          className="w-full h-auto rounded-lg shadow-md"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        {caption && (
          <div className="mt-2 text-sm text-gray-600 text-center">
            {caption}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Jurisdiction Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <ImageWithZoom 
              src="/Assets/Maps/kaliakair-jurisdiction.jpg"
              alt="Map of Kaliakair Jurisdiction" 
              caption={<span className="text-xs">Click image to zoom</span>}
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">Jurisdiction Title</h1>
            <p className="text-gray-700">
              Established in 2003 (with its foundations set in 2001), Kaliakoir Municipality 
              is designated as a Class A municipality, consisting of a total of 9 wards. 
              Covering an area of 28.02 sq. km, it supports a population of approximately 
              700,000 people and includes 19,150 holdings.
            </p>
          </div>
        </div>
      </section>

      {/* Current vs Proposed Drainage Network Section */}
      <section className="mb-16">
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <ImageWithZoom 
                src="/Assets/Maps/current-drainage.jpg"
                alt="Current Drainage Network"
                caption="Current Drainage Network"
              />
              <ImageWithZoom 
                src="/Assets/Maps/proposed-drainage.jpg"
                alt="Proposed Drainage Network"
                caption="Proposed Drainage Network"
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">Click images to zoom</p>
          </CardContent>
        </Card>
      </section>

      {/* Development Plans Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Development Plans</h2>
        <p className="text-gray-700">
          The municipality has undertaken several infrastructure development projects to 
          improve road connectivity and urban facilities. These projects aim to enhance 
          the quality of life for residents while maintaining sustainable urban growth. 
          The planned developments include road widening, new connecting routes, and 
          improved drainage systems.
        </p>
      </section>

      {/* Second Set of Drainage Network Images */}
      <section>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <ImageWithZoom 
                src="/Assets/Maps/current-drainage-2.jpg"
                alt="Current Drainage Network"
                caption="Current Drainage Network"
              />
              <ImageWithZoom 
                src="/Assets/Maps/proposed-drainage-2.jpg"
                alt="Proposed Drainage Network"
                caption="Proposed Drainage Network"
              />
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">Click images to zoom</p>
          </CardContent>
        </Card>
      </section>

      {/* Image Zoom Modal */}
      <Dialog 
        open={!!selectedImage} 
        onOpenChange={() => setSelectedImage(null)}
      >
        <DialogContent className="max-w-4xl w-full">
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectsPage;


