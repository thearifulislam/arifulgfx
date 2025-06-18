import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Layout,
  Smartphone,
  Globe,
  Brush,
  Palette,
  PenTool,
  Type,
  PackageOpen,
  ImagePlus,
  ChevronRight,
  Star,
  Sparkles,
} from "lucide-react";

// ==== Animation CSS for Services Section ====
const servicesAnimStyle = `
  .service-card {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    background: white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    opacity: 0;
    transform: translateY(20px);
  }

  .service-card.animate {
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

  .service-icon-wrap {
    position: relative;
    transition: transform 0.5s ease;
  }

  .service-card:hover .service-icon-wrap {
    transform: scale(1.1);
  }

  .service-feature {
    position: relative;
    transition: all 0.3s ease;
  }

  .service-feature:hover {
    transform: translateX(8px);
  }

  .service-feature-dot {
    position: relative;
    transition: all 0.3s ease;
  }

  .service-feature:hover .service-feature-dot {
    transform: scale(1.2);
  }

  .service-tag {
    transition: all 0.3s ease;
  }

  .service-card:hover .service-tag {
    transform: translateY(-2px);
  }
`;

if (typeof window !== "undefined") {
  const styleId = "services-section-anim";
  if (!document.getElementById(styleId)) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = servicesAnimStyle;
    document.head.appendChild(style);
  }
}

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      id: "logo-design",
      icon: <PenTool className="w-6 h-6 text-blue-600" />,
      title: "Logo Design",
      description:
        "Creating unique and memorable logos that stand out in a crowded marketplace.",
      features: [
        "Custom logo design",
        "Brand identity",
        "Versatile formats",
        "Timeless aesthetics",
      ],
      subServices: ["Minimalist Logos", "Vintage Logos", "Modern Logos"],
      bgColor: "from-blue-50 to-blue-100/50",
      iconBg: "from-blue-100 to-blue-50",
      hoverBg: "hover:bg-blue-50",
    },
    {
      id: "business-card-design",
      icon: <Layout className="w-6 h-6 text-purple-600" />,
      title: "Business Card Design",
      description:
        "Designing impactful business cards that leave a lasting impression.",
      features: [
        "Unique layouts",
        "High-quality printing",
        "Brand consistency",
        "Creative finishes",
      ],
      subServices: [
        "Standard Business Cards",
        "Folded Business Cards",
        "Luxury Business Cards",
      ],
      bgColor: "from-purple-50 to-purple-100/50",
      iconBg: "from-purple-100 to-purple-50",
      hoverBg: "hover:bg-purple-50",
    },
    {
      id: "letterhead-design",
      icon: <Type className="w-6 h-6 text-indigo-600" />,
      title: "Letterhead Design",
      description:
        "Creating professional letterheads that enhance your brand's credibility.",
      features: [
        "Custom typography",
        "Brand colors",
        "High-resolution graphics",
        "Print-ready files",
      ],
      subServices: [
        "Corporate Letterheads",
        "Personalized Letterheads",
        "Stationery Sets",
      ],
      bgColor: "from-indigo-50 to-indigo-100/50",
      iconBg: "from-indigo-100 to-indigo-50",
      hoverBg: "hover:bg-indigo-50",
    },
    {
      id: "brand-guidelines-design",
      icon: <Palette className="w-6 h-6 text-pink-600" />,
      title: "Brand Guidelines Design",
      description:
        "Developing comprehensive brand guidelines to ensure consistency across all platforms.",
      features: ["Consistent branding", "Visual identity", "Color schemes"],
      subServices: ["Brand Identity", "Visual Identity", "Typography"],
      bgColor: "from-pink-50 to-pink-100/50",
      iconBg: "from-pink-100 to-pink-50",
      hoverBg: "hover:bg-pink-50",
    },
    {
      id: "social-media-post-design",
      icon: <Globe className="w-6 h-6 text-cyan-600" />,
      title: "Social Media Post Design",
      description:
        "Crafting visually appealing and shareable social media posts.",
      features: ["Engaging visuals", "Clear messaging", "Engaging captions"],
      subServices: ["Instagram Posts", "Facebook Posts", "Twitter Posts"],
      bgColor: "from-cyan-50 to-cyan-100/50",
      iconBg: "from-cyan-100 to-cyan-50",
      hoverBg: "hover:bg-cyan-50",
    },
    {
      id: "banner-design",
      icon: <Layout className="w-6 h-6 text-emerald-600" />,
      title: "Banner Design",
      description:
        "Creating eye-catching banners that grab attention and drive traffic.",
      features: ["High-impact visuals", "Dynamic content", "Responsive design"],
      subServices: ["Banner Ads", "Social Media Banners", "Website Banners"],
      bgColor: "from-emerald-50 to-emerald-100/50",
      iconBg: "from-emerald-100 to-emerald-50",
      hoverBg: "hover:bg-emerald-50",
    },
    {
      id: "web-banner-design",
      icon: <Globe className="w-6 h-6 text-teal-600" />,
      title: "Web Banner Design",
      description:
        "Designing banners for websites that attract visitors and drive conversions.",
      features: ["Responsive design", "High-quality visuals", "SEO-friendly"],
      subServices: [
        "Website Banners",
        "Email Campaigns",
        "Social Media Banners",
      ],
      bgColor: "from-teal-50 to-teal-100/50",
      iconBg: "from-teal-100 to-teal-50",
      hoverBg: "hover:bg-teal-50",
    },
    {
      id: "email-signature-design",
      icon: <Type className="w-6 h-6 text-violet-600" />,
      title: "Email Signature Design",
      description:
        "Creating professional email signatures that enhance your brand's image.",
      features: [
        "Professional appearance",
        "Consistent branding",
        "Responsive design",
      ],
      subServices: ["Email Signatures", "Email Templates", "Email Campaigns"],
      bgColor: "from-violet-50 to-violet-100/50",
      iconBg: "from-violet-100 to-violet-50",
      hoverBg: "hover:bg-violet-50",
    },
    {
      id: "flyer-design",
      icon: <Layout className="w-6 h-6 text-rose-600" />,
      title: "Brochures, Posters, and Flyers Design",
      description:
        "Creating visually appealing brochures, posters, and flyers that promote your products or services.",
      features: ["Professional design", "Brand identity", "Visual appeal"],
      subServices: ["Brochures", "Posters", "Flyers"],
      bgColor: "from-rose-50 to-rose-100/50",
      iconBg: "from-rose-100 to-rose-50",
      hoverBg: "hover:bg-rose-50",
    },
    {
      id: "billboards-design",
      icon: <ImagePlus className="w-6 h-6 text-amber-600" />,
      title: "Billboards Design",
      description:
        "Creating eye-catching billboards that grab attention and drive traffic.",
      features: ["High-impact visuals", "Dynamic content", "Responsive design"],
      subServices: ["Billboards", "Social Media Banners", "Website Banners"],
      bgColor: "from-amber-50 to-amber-100/50",
      iconBg: "from-amber-100 to-amber-50",
      hoverBg: "hover:bg-amber-50",
    },
    {
      id: "stationery-design",
      icon: <PackageOpen className="w-6 h-6 text-lime-600" />,
      title: "Stationery Design",
      description:
        "Creating stationery items like envelopes, labels, and business cards that complement your brand.",
      features: ["Professional design", "Brand identity", "Versatile formats"],
      subServices: ["Stationery", "Labels", "Business Cards"],
      bgColor: "from-lime-50 to-lime-100/50",
      iconBg: "from-lime-100 to-lime-50",
      hoverBg: "hover:bg-lime-50",
    },
    {
      id: "image-editing",
      icon: <Brush className="w-6 h-6 text-orange-600" />,
      title: "Image Editing",
      description:
        "Editing and enhancing images to create professional and visually appealing designs.",
      features: ["Image editing", "Retouching", "Color correction"],
      subServices: ["Image Editing", "Retouching", "Color Correction"],
      bgColor: "from-orange-50 to-orange-100/50",
      iconBg: "from-orange-100 to-orange-50",
      hoverBg: "hover:bg-orange-50",
    },
    {
      id: "resume-design",
      icon: <Type className="w-6 h-6 text-sky-600" />,
      title: "Resume Design",
      description:
        "Designing professional and visually appealing resumes that showcase your skills and experience.",
      features: ["Resume design", "Professional layout", "Visual appeal"],
      subServices: ["Resume Design", "Cover Letter", "Objective Statement"],
      bgColor: "from-sky-50 to-sky-100/50",
      iconBg: "from-sky-100 to-sky-50",
      hoverBg: "hover:bg-sky-50",
    },
    {
      id: "background-removal",
      icon: <ImagePlus className="w-6 h-6 text-fuchsia-600" />,
      title: "Background Removal",
      description:
        "Removing backgrounds from images to create clean and professional designs.",
      features: ["Background removal", "Image editing", "Color correction"],
      subServices: ["Background Removal", "Image Editing", "Color Correction"],
      bgColor: "from-fuchsia-50 to-fuchsia-100/50",
      iconBg: "from-fuchsia-100 to-fuchsia-50",
      hoverBg: "hover:bg-fuchsia-50",
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 animate-fade-in"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 md:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-600">Our Services</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Transforming Ideas into 
            <span className="block mt-2">Visual Excellence</span>
          </h1>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
            With over 18 years of experience in design, I offer a comprehensive
            range of services to help brands create meaningful digital
            experiences.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => (cardsRef.current[index] = el)}
                className="service-card group bg-white rounded-2xl border border-gray-200 hover:border-blue-200 transition-all duration-300"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="p-6">
                  {/* Header with Icon and Title */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`
                      service-icon-wrap
                      flex-shrink-0
                      inline-flex p-3 rounded-xl bg-gradient-to-br ${service.bgColor}
                      group-hover:scale-110 transition-transform duration-300
                    `}>
                      {service.icon}
                    </div>
                    <div>
                      <Link 
                        to={`/services/${service.id}`}
                        className="block text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                      >
                        {service.title}
                      </Link>
                      <p className="text-sm text-gray-500 mt-1">
                        {service.subServices[0]}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 line-clamp-2 text-sm">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2.5 mb-6">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="service-feature flex items-center gap-2.5"
                      >
                        <div className={`
                          service-feature-dot
                          flex items-center justify-center
                          w-2.5 h-2.5 rounded-full
                          border border-gray-200
                          group-hover:border-blue-500
                        `}>
                          <div className={`
                            w-1 h-1 rounded-full
                            bg-gradient-to-br ${service.bgColor}
                            opacity-0 scale-0
                            group-hover:opacity-100
                            group-hover:scale-100
                            transition-all duration-300
                          `} />
                        </div>
                        <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.subServices.map((subService, idx) => (
                      <span
                        key={idx}
                        className="service-tag px-2 py-0.5 rounded-md text-xs bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
                      >
                        {subService}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <Link 
                    to={`/services/${service.id}`} 
                    className="inline-flex items-center gap-2 text-sm text-gray-900 font-medium hover:text-blue-600 transition-colors group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="container mx-auto px-4 md:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
            Let's collaborate to create something amazing together. Contact me
            today to discuss your next design project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
