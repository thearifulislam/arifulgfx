import React from "react";

const services = [
  "Logo Design",
  "Brand Guidelines",
  "Visual Identity",
  "Brand Strategy",
  "UI/UX Design",
  "Web Design",
  "Mobile App Design",
  "Design Systems",
  "Wireframing",
  "Prototyping",
  "User Research",
  "Brand Messaging",
  "Style Guides",
  "Color Theory",
  "Typography",
  "Icon Design"

];

const ServiceSlider = () => {
  // Duplicate the services array for seamless looping
  const marqueeItems = [...services, ...services];

  return (
    <section className="relative overflow-hidden h-24 bg-[#FAFAFA]">
      {/* Background blur effects */}
      <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
      <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20" />
      
      {/* Text Slider */}
      <div className="animate-marquee flex space-x-16 whitespace-nowrap relative">
        {marqueeItems.map((text, index) => (
          <div
            key={index}
            className="flex items-center text-gray-900 text-xl font-medium space-x-4"
          >
            <span className="text-blue-600 text-2xl">★</span>
            <span className="group-hover:text-blue-600 transition-colors duration-300">{text}</span>
          </div>
        ))}
      </div>

      <style>{`
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
          padding-top: 2rem;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ServiceSlider;
