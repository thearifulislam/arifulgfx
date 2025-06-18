import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Calendar,
  ArrowLeft,
  User,
  Tag,
  CheckCircle,
  Circle,
  Layers,
  ChevronRight,
  Eye,
  Clock,
  ArrowRight,
  Target,
  Lightbulb,
  Trophy,
  Workflow
} from "lucide-react";
import { FaBehance, FaDribbble, FaLinkedin, FaPinterest, FaInstagram } from 'react-icons/fa';

// Import project images
import momentum from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/1.jpg";
import momentum2 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/2.jpg";
import momentum3 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/3.jpg";
import momentum4 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/4.jpg";
import momentum5 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/5.jpg";
import momentum6 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/6.jpg";
import momentum7 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/7.jpg";
import momentum8 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/8.jpg";
import momentum9 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/9.jpg";
import momentum10 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/10.jpg";
import momentum11 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/11.jpg";
import momentum12 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/12.jpg";
import momentum13 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/13.jpg";
import momentum14 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/14.jpg";
import momentum15 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/15.jpg";
import momentum16 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/16.jpg";
import momentum17 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/17.jpg";
import momentum18 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/18.jpg";
import momentum19 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/19.jpg";
import momentum20 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/20.jpg";
import momentum21 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/21.jpg";
import momentum22 from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/22.jpg";


import blooddonation from "../assets/portfolios/logo-design/combination-mark/health-care-logo/1/1.jpg";

// business card
import modernminimalistcamerabusinesscard from "../assets/portfolios/business-card/minimalist/1/1.jpg";

import { projectsData, ProjectType } from "../data/projects";
import "./ProjectDetails.css";

// Project Categories
const projectCategories = {
  // logo
  logo: {
    title: "Logo Design Projects",
    description: "Creative and professional logo designs that capture brand essence",
    projects: [
      {
        id: "momentum-clothing-brand-for-men",
        title: "Momentum Menswear Logo Design",
        description: "A modern and sophisticated logo design for a premium menswear brand",
        date: "March 2024",
        client: "Momentum Clothing",
        category: "Logo Design",
        coverImage: momentum,
        tools: ["Adobe Illustrator", "Adobe Photoshop"],
        tags: ["Logo Design", "Fashion", "Minimalist"],
        creativeFields: ["Brand Identity", "Logo Design"],
        challenge: "Creating a logo that represents both luxury and contemporary fashion while maintaining simplicity",
        solution: "Developed a minimalist yet impactful logo that combines modern typography with subtle fashion elements",
        results: [
          "Increased brand recognition by 40%",
          "Positive feedback from target audience",
          "Successfully launched across all platforms"
        ],
        process: [
          {
            title: "Research & Discovery",
            description: "Analyzed market trends and competitor logos to identify unique opportunities"
          },
          {
            title: "Concept Development",
            description: "Created multiple concepts focusing on typography and minimal design elements"
          },
          {
            title: "Refinement",
            description: "Refined the chosen concept through multiple iterations and client feedback"
          }
        ],
        galleryImages: [momentum, momentum2, momentum3, momentum4, momentum5, momentum6, momentum7, momentum8, momentum9, momentum10, momentum11, momentum12, momentum13, momentum14, momentum15, momentum16, momentum17, momentum18, momentum19, momentum20, momentum21, momentum22]
      },
      {
        id: "blood-donation-logo",
        title: "Blood Donation Campaign Logo",
        description: "A meaningful and impactful logo for a blood donation awareness campaign",
        date: "February 2024",
        client: "LifeSave Foundation",
        category: "Logo Design",
        coverImage: blooddonation,
        tools: ["Adobe Illustrator", "Adobe Photoshop"],
        tags: ["Logo Design", "Healthcare", "Campaign"],
        creativeFields: ["Brand Identity", "Logo Design"],
        challenge: "Creating a logo that conveys trust, care, and urgency while being easily recognizable",
        solution: "Developed a heart-shaped logo incorporating a blood drop element with warm, inviting colors",
        results: [
          "Increased campaign awareness by 60%",
          "Higher engagement on social media",
          "Successful implementation across all campaign materials"
        ],
        process: [
          {
            title: "Research & Analysis",
            description: "Studied healthcare logos and blood donation campaigns globally"
          },
          {
            title: "Concept Development",
            description: "Created concepts focusing on heart and blood drop symbolism"
          },
          {
            title: "Finalization",
            description: "Refined the design based on stakeholder feedback and testing"
          }
        ],
        galleryImages: [blooddonation]
      }
    ]
  },

  // business card
  businessCard: {
    title: "Business Card Design Projects",
    description: "Professional and creative business card designs that make lasting impressions",
    projects: [
      {
        id: "modern-minimalist-camera-business-card",
        title: "Modern Camera Business Card",
        description: "A sleek and professional business card design for a photography studio",
        date: "January 2024",
        client: "Lens & Light Studio",
        category: "Business Card Design",
        coverImage: modernminimalistcamerabusinesscard,
        tools: ["Adobe Illustrator", "Adobe InDesign"],
        tags: ["Business Card", "Photography", "Modern"],
        creativeFields: ["Print Design", "Business Card"],
        challenge: "Creating a business card that reflects the studio's modern and artistic approach",
        solution: "Designed a minimalist card with subtle camera elements and premium finishes",
        results: [
          "Enhanced brand perception",
          "Positive client feedback",
          "Increased networking effectiveness"
        ],
        process: [
          {
            title: "Concept Development",
            description: "Explored various design approaches focusing on photography elements"
          },
          {
            title: "Design Creation",
            description: "Developed the final design with attention to typography and spacing"
          },
          {
            title: "Production",
            description: "Selected premium materials and finishes for the final product"
          }
        ],
        galleryImages: [modernminimalistcamerabusinesscard]
      }
    ]
  }
};

const ProjectDetails: React.FC = () => {
  const params = useParams();
  const projectId = params.projectId;
  const [isLoading, setIsLoading] = useState(true);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, [projectId]);

  // Find project from all categories
  const findProject = () => {
    for (const category of Object.values(projectCategories)) {
      const project = category.projects.find(p => p.id === projectId);
      if (project) return project;
    }
    return undefined;
  };

  const project = findProject();

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (activeImageIndex === null) return;

    switch (e.key) {
      case 'ArrowLeft':
        if (project?.galleryImages) {
          const newIndex = activeImageIndex === 0 
            ? project.galleryImages.length - 1 
            : activeImageIndex - 1;
          setActiveImageIndex(newIndex);
        }
        break;
      case 'ArrowRight':
        if (project?.galleryImages) {
          const newIndex = activeImageIndex === project.galleryImages.length - 1 
            ? 0 
            : activeImageIndex + 1;
          setActiveImageIndex(newIndex);
        }
        break;
      case 'Escape':
        handleCloseModal();
        break;
      case 'z':
        if (e.ctrlKey) {
          setIsZoomed(!isZoomed);
        }
        break;
    }
  }, [activeImageIndex, project?.galleryImages, isZoomed]);

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && project?.galleryImages) {
      const newIndex = activeImageIndex === project.galleryImages.length - 1 
        ? 0 
        : activeImageIndex! + 1;
      setActiveImageIndex(newIndex);
    }

    if (isRightSwipe && project?.galleryImages) {
      const newIndex = activeImageIndex === 0 
        ? project.galleryImages.length - 1 
        : activeImageIndex! - 1;
      setActiveImageIndex(newIndex);
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    if (activeImageIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeImageIndex, handleKeyDown]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-600 font-medium">Loading project details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center px-4 py-20">
          <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-12">
            <div className="text-center">
              {/* 404 Illustration */}
              <div className="mb-8 relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-24 h-24 bg-red-50 rounded-full blur-xl" />
                <div className="relative">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center">
                    <svg 
                      className="w-12 h-12 text-red-500" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                      />
                    </svg>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="h-1.5 w-12 bg-red-100 rounded-full mx-auto" />
                    <div className="h-1.5 w-8 bg-red-50 rounded-full mx-auto" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h1 className="text-3xl font-bold text-gray-900 mb-3">Project Not Found</h1>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Oops! The project you're looking for doesn't exist or has been moved to a different location.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-[#1f2937] hover:bg-[#1f2937]/90 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Projects
                </Link>
                <Link 
                  to="/"
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-base font-medium rounded-xl text-gray-600 bg-white hover:bg-gray-50 transition-colors"
                >
                  Go to Homepage
                </Link>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-0 w-64 h-64 bg-gradient-to-br from-red-50 to-transparent rounded-full blur-3xl -z-10 opacity-30" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-100 to-transparent rounded-full blur-3xl -z-10 opacity-30" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const creativeFields = project.creativeFields?.length ? project.creativeFields : project.tags;

  const handleImageClick = (index: number) => {
    setActiveImageIndex(index);
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setActiveImageIndex(null);
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 font-medium">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-primary/10 pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Link 
                to="/projects"
                className="inline-flex items-center text-gray-600 hover:text-primary mb-6 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Projects
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-gray-700">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <User className="w-5 h-5 mr-2 text-primary" />
                  <span>{project.client}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Eye className="w-5 h-5 mr-2 text-primary" />
                  <span>{project.category}</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar - Project Details */}
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Details</h3>
                  
                  {project.tools && project.tools.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <Layers className="w-4 h-4 mr-2 text-primary" />
                        Tools & Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.tags && project.tags.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <Tag className="w-4 h-4 mr-2 text-primary" />
                        Tags
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {creativeFields && creativeFields.length > 0 && (
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                        Creative Fields
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {creativeFields.map((field, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {field}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Gallery Section */}
            <div className="lg:col-span-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Project Gallery</h2>
                <div className="gallery-grid">
                  {project.galleryImages.map((image, index) => (
                    <div 
                      key={index}
                      className="gallery-item"
                      onClick={() => handleImageClick(index)}
                    >
                      <img
                        src={image}
                        alt={`Gallery ${index + 1}`}
                      />
                      <div className="gallery-overlay">
                        <Eye className="w-6 h-6 text-white/90" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information Sections - Below Gallery */}
          <div className="mt-24">
            {/* Project Overview */}
            {(project.challenge || project.solution || project.results) && (
              <div className="max-w-4xl mx-auto mb-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-12">Project Overview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {project.challenge && (
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-3 text-primary" />
                        The Challenge
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>
                  )}

                  {project.solution && (
                    <div className="bg-white rounded-2xl shadow-lg p-8">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-3 text-primary" />
                        The Solution
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Process Section */}
            {project.process && project.process.length > 0 && (
              <div className="max-w-4xl mx-auto mb-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-12 flex items-center">
                  <Workflow className="w-6 h-6 mr-3 text-primary" />
                  Design Process
                </h2>
                <div className="space-y-12">
                  {project.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl shadow-lg p-8"
                    >
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center">
                          <span className="text-lg font-semibold text-primary">{idx + 1}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results Section */}
            {project.results && project.results.length > 0 && (
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-12 flex items-center">
                  <Trophy className="w-6 h-6 mr-3 text-primary" />
                  Project Results
                </h2>
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.results.map((result, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Other Portfolio Links */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">See in the other portfolio website:</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {project.id === "momentum-clothing-brand-for-men" && (
                <>
                  <a href="https://www.behance.net/gallery/123456789/Momentum-Menswear-Logo-Design" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-[#0057ff] text-white rounded-xl hover:bg-[#0057ff]/90 transition-all duration-300">
                    <FaBehance className="text-xl" />
                    <span>Behance</span>
                  </a>
                  <a href="https://dribbble.com/shots/1234567-Momentum-Menswear-Logo" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-[#ea4c89] text-white rounded-xl hover:bg-[#ea4c89]/90 transition-all duration-300">
                    <FaDribbble className="text-xl" />
                    <span>Dribbble</span>
                  </a>
                  <a href="https://www.linkedin.com/posts/username_momentum-menswear-logo-design-activity-123456789" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-xl hover:bg-[#0077b5]/90 transition-all duration-300">
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://www.pinterest.com/pin/momentum-menswear-logo-design/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-[#e60023] text-white rounded-xl hover:bg-[#e60023]/90 transition-all duration-300">
                    <FaPinterest className="text-xl" />
                    <span>Pinterest</span>
                  </a>
                  <a href="https://www.instagram.com/p/momentum-menswear/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-xl hover:opacity-90 transition-all duration-300">
                    <FaInstagram className="text-xl" />
                    <span>Instagram</span>
                  </a>
                </>
              )}

              {project.id === "modern-minimalist-camera-business-card" && (
                <>
                  <a href="https://www.behance.net/gallery/987654321/Modern-Camera-Business-Card" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-[#0057ff] text-white rounded-xl hover:bg-[#0057ff]/90 transition-all duration-300">
                    <FaBehance className="text-xl" />
                    <span>Behance</span>
                  </a>
                  <a href="https://dribbble.com/shots/7654321-Modern-Camera-Business-Card" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-[#ea4c89] text-white rounded-xl hover:bg-[#ea4c89]/90 transition-all duration-300">
                    <FaDribbble className="text-xl" />
                    <span>Dribbble</span>
                  </a>
                  <a href="https://www.linkedin.com/posts/username_modern-camera-business-card-design-activity-987654321" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-xl hover:bg-[#0077b5]/90 transition-all duration-300">
                    <FaLinkedin className="text-xl" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://www.pinterest.com/pin/modern-camera-business-card-design/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-[#e60023] text-white rounded-xl hover:bg-[#e60023]/90 transition-all duration-300">
                    <FaPinterest className="text-xl" />
                    <span>Pinterest</span>
                  </a>
                  <a href="https://www.instagram.com/p/modern-camera-business-card/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-xl hover:opacity-90 transition-all duration-300">
                    <FaInstagram className="text-xl" />
                    <span>Instagram</span>
                  </a>
                  <a href="https://www.otherportfolio.com/modern-camera-business-card" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl hover:bg-gray-700 transition-all duration-300">
                    <span>Other</span>
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Image Modal */}
      {activeImageIndex !== null && (
        <div
          className={`fixed inset-0 image-modal-backdrop z-50 flex items-center justify-center p-4 ${
            isClosing ? 'modal-closing' : ''
          }`}
          onClick={handleCloseModal}
        >
          <div className={`relative image-modal-content ${
            isClosing ? 'modal-content-closing' : ''
          }`}>
            {/* Close Button */}
            <button
              className="absolute -top-12 right-4 text-white/90 hover:text-white transition-colors"
              onClick={handleCloseModal}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Close</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>

            {/* Navigation Buttons - Fixed Position */}
            {project.galleryImages && project.galleryImages.length > 1 && (
              <>
                <button
                  className="image-modal-nav-button prev"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (activeImageIndex !== null) {
                      const newIndex = activeImageIndex === 0 
                        ? project.galleryImages!.length - 1 
                        : activeImageIndex - 1;
                      setActiveImageIndex(newIndex);
                    }
                  }}
                  aria-label="Previous image"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <button
                  className="image-modal-nav-button next"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (activeImageIndex !== null && project.galleryImages) {
                      const newIndex = activeImageIndex === project.galleryImages.length - 1 
                        ? 0 
                        : activeImageIndex + 1;
                      setActiveImageIndex(newIndex);
                    }
                  }}
                  aria-label="Next image"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image Container */}
            <div className="image-container">
              <div 
                className="relative rounded-2xl overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={project.galleryImages?.[activeImageIndex]}
                  alt={`Gallery ${activeImageIndex + 1}`}
                  className={`image-modal-image ${isZoomed ? 'zoomed' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                  }}
                />
                
                {/* Image Counter */}
                <div className="image-counter">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-2" />
                    <span className="font-medium">{activeImageIndex + 1}</span>
                    <span className="mx-1">/</span>
                    <span className="text-white/70">{project.galleryImages?.length}</span>
                  </div>
                </div>

                {/* Zoom Indicator */}
                <div className="absolute top-4 right-4 bg-black/50 text-white/90 px-3 py-1 rounded-lg text-sm backdrop-blur-sm">
                  {isZoomed ? 'Click to zoom out' : 'Click to zoom in'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
