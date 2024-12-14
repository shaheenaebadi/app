import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const InfoItem = ({ label, value }) => (
  <div className="p-4 bg-white rounded-lg shadow-sm">
    <div className="font-medium text-gray-600">{label}</div>
    <div className="mt-1 text-lg">{value}</div>
  </div>
);

const KaliakairMunicipality = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "/api/placeholder/800/400",
    "/api/placeholder/800/400",
    "/api/placeholder/800/400"
  ];

  const infoItems = [
    { label: "Established", value: "2003 (2001)" },
    { label: "Class", value: "A" },
    { label: "Total Wards", value: "09" },
    { label: "Area", value: "28.02 sq. km" },
    { label: "Population", value: "700,000" },
    { label: "No. of Holdings", value: "19,150" },
    { label: "Tax Collected", value: "Tk 5,12,42,483 and 78% of collection" },
    { label: "Density", value: "25000 p/sq.km" },
    { label: "Literacy Rate", value: "90.34%" },
    { label: "Road Network", value: "270.0 km" },
    { label: "Drain Network", value: "252.0 km" },
    { label: "Public Toilets", value: "32" },
    { label: "Waste Collection Bins", value: "24" },
    { label: "Municipal Facilities", value: "Market, Park, etc." }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Info Card Section */}
      <Card className="mb-12">
        <CardContent className="pt-6">
          <h2 className="text-2xl font-bold mb-6">Pourashava At a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {infoItems.map((item, index) => (
              <InfoItem key={index} label={item.label} value={item.value} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Slideshow Section */}
      <div className="relative mb-12">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* About Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">About Kaliakair Municipality</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Kaliakair Municipality, established in 2003, stands as a testament to urban development 
            in the Gazipur District. Our municipality has grown from its humble beginnings to become 
            a vital center of commerce and community life.
          </p>
          <p className="mb-4">
            Located at a strategic point in Gazipur District, Kaliakair Municipality serves as an 
            important hub connecting various major urban centers. The municipality's location has 
            played a crucial role in its development as both a residential and commercial center.
          </p>
          <p className="mb-4">
            The jurisdiction of Kaliakair Municipality covers various important areas including 
            residential zones, commercial districts, and industrial areas. Each ward has been 
            carefully planned to ensure balanced development and efficient service delivery to 
            all residents.
          </p>
          <p className="mb-4">
            Our municipality takes pride in its systematic approach to urban planning, with 
            dedicated zones for commercial activities, residential areas, and industrial 
            development. This planned development has helped maintain a balance between urban 
            growth and environmental sustainability.
          </p>
          <p>
            The future development plans for Kaliakair Municipality focus on enhancing 
            infrastructure, improving public services, and creating more green spaces for 
            residents. These initiatives aim to make Kaliakair an even more livable and 
            sustainable urban center.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KaliakairMunicipality;