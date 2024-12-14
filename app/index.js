import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { MapPin } from 'lucide-react';
function Home (){
    const ImageSection = () => (
        <div className="flex flex-col md:flex-row gap-4 p-4">
          <div className="relative w-full md:w-1/2 h-64">
            <Image
              src="/Assets/Maps/Bangladesh_Kaliakair.webp"
              alt="Map of Bangladesh highlighting Kaliakair"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative w-full md:w-1/2 h-64">
            <Image
              src="/Assets/Maps/KaliakoirUpazilaRiver.webp"
              alt="Map of Kaliakair Upazila showing rivers and landmarks"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      );
      
      const NewsCard = () => (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-4xl mb-4">📰</div>
          <h3 className="text-xl font-bold mb-4">News and Updates</h3>
          <ul className="space-y-2">
            <li>
              <Link href="https://en.prothomalo.com/bangladesh/local-news/dbmx3by8v7" 
                    className="text-blue-600 hover:text-blue-800">
                Miscreants torch bus in Gazipur
              </Link>
            </li>
            <li>
              <Link href="https://en.prothomalo.com/bangladesh/local-news/om84py3yng"
                    className="text-blue-600 hover:text-blue-800">
                Couple dies as mud house collapses in Gazipur
              </Link>
            </li>
            <li>
              <Link href="https://en.prothomalo.com/business/local/fow88gi0ez"
                    className="text-blue-600 hover:text-blue-800">
                5 factories out of 1278 closed in Savar, Ashulia, Gazipur
              </Link>
            </li>
            <li>
              <Link href="https://en.prothomalo.com/bangladesh/Body-of-missing-expatriate-found-in-Kaliakair"
                    className="text-blue-600 hover:text-blue-800">
                Body of missing expatriate found in Kaliakair
              </Link>
            </li>
          </ul>
        </div>
      );
      
      const EventsCard = () => (
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-4xl mb-4">📆</div>
          <h3 className="text-xl font-bold mb-4">Events & Billboard</h3>
          <p>This event and that event.</p>
        </div>
      );
      
      const PhotoGallery = () => {
        const [currentSlide, setCurrentSlide] = React.useState(0);
        const slides = [
          {
            src: "/Assets/GalleryItems/Awareness-seminar/awareness-seminar2.jpeg",
            alt: "Awareness Seminar"
          },
          {
            src: "/Assets/GalleryItems/Cutting-weed/cutting-weed2.jpeg",
            alt: "Cutting Weed 2024"
          },
          {
            src: "/Assets/GalleryItems/Road-construction/road-construction1.jpeg",
            alt: "Road Construction"
          },
          {
            src: "/Assets/GalleryItems/War-on-mosquito/war-on-mosquito2.jpeg",
            alt: "War On Mosquito"
          }
        ];
      
        React.useEffect(() => {
          const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
          }, 3000);
          return () => clearInterval(timer);
        }, []);
      
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-4">📸</div>
            <h3 className="text-xl font-bold mb-4">Photo Gallery</h3>
            <div className="relative h-64 mb-4">
              <Image
                src={slides[currentSlide].src}
                alt={slides[currentSlide].alt}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="text-center">
              <Link href="/gallery" className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                View More Photos
              </Link>
            </div>
          </div>
        );
      };
      
      const HelplineCard = () => {
        const helplines = [
          { src: "/Assets/HelplineImages/333.png", alt: "Emergency Info" },
          { src: "/Assets/HelplineImages/999.png", alt: "National Emergency Service" },
          { src: "/Assets/HelplineImages/109.png", alt: "Domestic Violence Helpline" },
          { src: "/Assets/HelplineImages/106.png", alt: "Anti Corruption Helpline" },
          { src: "/Assets/HelplineImages/1090.png", alt: "Natural Disaster Prediction" },
          { src: "/Assets/HelplineImages/1098.png", alt: "Child help helpline" }
        ];
      
        return (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="text-4xl mb-4">☎️</div>
            <h3 className="text-xl font-bold mb-4">Helplines</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {helplines.map((helpline, index) => (
                <div key={index} className="relative h-24">
                  <Image
                    src={helpline.src}
                    alt={helpline.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        );
      };
      
      const HomePage = () => {
        return (
          <div className="min-h-screen bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="bg-white rounded-lg shadow-lg mb-8">
                <ImageSection />
                <div className="p-6">
                  <h1 className="text-3xl font-bold mb-4">Welcome to Kaliakair Municipality</h1>
                  <div className="space-y-4">
                    <p>
                      Established in 2003 (with its foundations set in 2001), Kaliakoir Municipality 
                      is designated as a Class A municipality, consisting of a total of 9 wards. 
                      Covering an area of 28.02 sq. km, it supports a population of approximately 
                      700,000 people and includes 19,150 holdings.
                    </p>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>24.0750°N, 90.2167°E</span>
                    </div>
                    <p>
                      The primary rivers in the area are Turag, Bangshi, and Salda. Other notable 
                      water bodies include Boali, Hawla, Ujan, and Markaj beels, along with the 
                      Goala and Betjuri canals.
                    </p>
                  </div>
                </div>
              </div>
      
              <h2 className="text-2xl font-bold mb-6">Find Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <NewsCard />
                <EventsCard />
                <PhotoGallery />
                <HelplineCard />
              </div>
            </div>
          </div>
        );
      };
    
}
export default Home