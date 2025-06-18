import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const WHATSAPP_NUMBER = "+8801938434733"; // e.g., "8801XXXXXXXXX"

const WhatsAppButton: React.FC = () => {
  const [showTop, setShowTop] = useState(false);

  // Show back-to-top button after scrolling down 200px
  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll to top
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // WhatsApp link
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        className="fixed z-50 bottom-28 right-8 group"
        style={{ textDecoration: "none" }}
      >
        {/* Animated Pulsing Layer */}
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="whatsapp-pulse block w-16 h-16 rounded-full bg-green-500 opacity-60"></span>
        </span>
        {/* WhatsApp Icon */}
        <span className="relative flex items-center justify-center w-12 h-12 rounded-full bg-green-600 text-white shadow-lg group-hover:scale-110 transition-transform duration-200">
          <FaWhatsapp size={28} />
        </span>
      </a>

      {/* Back to Top Button */}
      {showTop && (
        <button
          onClick={handleBackToTop}
          aria-label="Back to top"
          className="fixed z-50 bottom-8 right-8 flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800 transition-all duration-200"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Animation Styles */}
      <style>
        {`
          .whatsapp-pulse {
            position: absolute;
            animation: whatsapp-pulse 1.5s infinite;
          }
          @keyframes whatsapp-pulse {
            0% {
              transform: scale(1);
              opacity: 0.6;
            }
            70% {
              transform: scale(1.8);
              opacity: 0.1;
            }
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default WhatsAppButton;
