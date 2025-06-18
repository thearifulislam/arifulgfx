import { Link } from "react-router-dom";
import EmotionalButton from "./EmotionalButton";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

// logo design portfolio

import momentum from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/1.jpg";
import blooddonation from "../assets/portfolios/logo-design/combination-mark/health-care-logo/1/1.jpg";
import uniflora from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/1.jpg";

// for business card

import modernminimalistcamerabusinesscard from "../assets/portfolios/business-card/minimalist/1/1.jpg";
import modernbusinesscard from "../assets/portfolios/business-card/minimalist/2/1.jpg";

// for letterhead

import elegantgoldaccentedcorporateletterhead from "../assets/portfolios/letterhead/modern/1/Modern Letterhead.jpg";
import modernminimalist from "../assets/portfolios/letterhead/modern&minimalist-corporate/1/modern and minimalist corporate letterhead.jpg";

// for banner

import professionalpromotionalbanner from "../assets/portfolios/banner/promotional/1/1.jpg";

// for social media cover
import socialmediacoverdesign from "../assets/portfolios/social-cover/facebook-cover/1/1.jpg";

// for background remove

import imageclippingpath from "../assets/portfolios/background-remove/clipping-path/1/10.jpg";

// for brand guidelines
import boldpath from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/1.jpg";
import ranova from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/1.jpg";

// ==== Animation CSS for Portfolio Section ====
const portfolioAnimStyle = `
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  @media (max-width: 1024px) {
    .portfolio-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .portfolio-grid {
      grid-template-columns: 1fr;
    }
  }

  .portfolio-card {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    background: white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(20px);
  }

  .portfolio-card.animate {
    animation: cardAppear 0.6s ease forwards;
  }

  @keyframes cardAppear {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .portfolio-image-wrap {
    position: relative;
    padding-bottom: 75%;
    overflow: hidden;
  }

  .portfolio-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .portfolio-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, 
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .portfolio-card:hover .portfolio-overlay {
    opacity: 1;
  }

  .portfolio-card:hover .portfolio-image {
    transform: scale(1.1);
  }

  .portfolio-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 2;
  }

  .portfolio-card:hover .portfolio-content {
    transform: translateY(0);
    opacity: 1;
  }

  .portfolio-category {
    display: inline-block;
    padding: 4px 12px;
    background: rgba(255, 255, 255, 0.9);
    color: #111827;
    font-size: 12px;
    font-weight: 500;
    border-radius: 20px;
    margin-bottom: 12px;
  }

  .portfolio-title {
    color: white;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 8px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .portfolio-title-link {
    display: inline-block;
    position: relative;
    color: white;
    text-decoration: none;
  }

  .portfolio-title-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: white;
    transition: width 0.3s ease;
  }

  .portfolio-title-link:hover::after {
    width: 100%;
  }

  .portfolio-title-link:hover .portfolio-title {
    transform: translateX(6px);
  }

  .view-project {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    opacity: 0.9;
    transition: all 0.3s ease;
  }

  .view-project:hover {
    opacity: 1;
    gap: 10px;
  }

  .view-project svg {
    transition: transform 0.3s ease;
  }

  .view-project:hover svg {
    transform: translateX(4px);
  }
`;

if (typeof window !== "undefined") {
  const styleId = "portfolio-section-anim";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = portfolioAnimStyle;
    document.head.appendChild(style);
  }
}

const PortfolioSection = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const portfolioItems = [
    {
      id: "momentum-clothing-brand-for-men",
      title: "Momentum Menswear – Modern & Stylish Clothing for Men",
      category: "Logo Design",
      tags: ["Logo"],
      image: momentum,
    },
    {
      id: "modern-minimalist-camera-business-card",
      title: "Modern Minimalist Camera Science Business Card",
      category: "Business Card Design",
      tags: ["Business Card"],
      image: modernminimalistcamerabusinesscard,
    },
    {
      id: "elegant-gold-accented-corporate-letterhead",
      title: "Elegant Gold-Accented Corporate Letterhead",
      category: "Letterhead Design",
      tags: ["Letterhead"],
      image: elegantgoldaccentedcorporateletterhead,
    },
    {
      id: "professional-promotional-banner",
      title: "Promotional Banner",
      category: "Banner",
      tags: ["Banner"],
      image: professionalpromotionalbanner,
    },
    {
      id: "creative-facebook-cover-design",
      title: "The Future of Luxury Living – Tailored for You",
      category: "Facebook Cover",
      tags: ["Social Media Cover"],
      image: socialmediacoverdesign,
    },
    {
      id: "image-background-remove-clipping-path",
      title: "Image Clipping Path",
      category: "Background Remove",
      tags: ["Image Editing"],
      image: imageclippingpath,
    },
    {
      id: "boldpath-brand-guidelines",
      title: "The Guidelines for Bold Path",
      category: "Brand Guidelines",
      tags: ["Brand Guidelines"],
      image: boldpath,
    },
    {
      id: "blood-donation-logo-design",
      title: "Blood Donation Logo Design",
      category: "Logo Design",
      tags: ["Logo"],
      image: blooddonation,
    },
    {
      id: "modern-business-card-design",
      title: "Modern Business Card Design",
      category: "Business Card",
      tags: ["Business Card"],
      image: modernbusinesscard,
    },
    {
      id: "modern-minimalist-letterhead-design",
      title: "Modern Minimalist Letterhead Design",
      category: "Letterhead",
      tags: ["Letterhead"],
      image: modernminimalist,
    },
    {
      id: "uniflora-logo-design",
      title: "Uniflora Logo Design",
      category: "Logo Design",
      tags: ["Logo"],
      image: uniflora,
    },
    {
      id: "ranova-brand-guidelines",
      title: "Ranova Brand Guidelines",
      category: "Brand Guidelines",
      tags: ["Brand Guidelines"],
      image: ranova,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore my latest work in design and branding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Link to={`/projects/${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </Link>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-xs text-gray-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link 
                    to={`/projects/${item.id}`}
                    className="inline-flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <EmotionalButton
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            emotionType="heart"
            numEmotions={3}
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </EmotionalButton>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;