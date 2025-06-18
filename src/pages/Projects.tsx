import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Search, Eye, Filter, X, ExternalLink, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import styles from './Projects.module.css';

// Asset imports (unchanged, use as in your project)
import momentum from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/1.jpg";
import blooddonation from "../assets/portfolios/logo-design/combination-mark/health-care-logo/1/1.jpg";
import uniflora from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/1.jpg";
import winnest from "../assets/portfolios/logo-design/wordmark/real-estate/1/1.jpg";
import meloplay from "../assets/portfolios/logo-design/lettermark-logo/letter-mp/1/1.jpg";
import player from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/1.jpg";
import arborsphere from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/1.jpg";
import wind from "../assets/portfolios/logo-design/lettermark-logo/letter-w/1/1.jpg";
import zxon from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/1.jpg";
import zepeq from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/1.jpg";
import ecogrow from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/1.jpg";
import playerlogo from "../assets/portfolios/logo-design/abstrack-mark/player-logo/1/1.jpg";
import cycle from "../assets/portfolios/logo-design/lettermark-logo/cycle/1.png";

// for business card design
import modernminimalistcamerabusinesscard from "../assets/portfolios/business-card/minimalist/1/1.jpg";
import modernbusinesscard from "../assets/portfolios/business-card/minimalist/2/1.jpg";
import visitingcard from "../assets/portfolios/business-card/professional/1/1.jpg";
import minimalistcard from "../assets/portfolios/business-card/minimalist/3/mnvb-24.jpg";
import professionalcard from "../assets/portfolios/business-card/professional/2/1.jpg";
import customcard from "../assets/portfolios/business-card/custom/1/1.jpg";
import moderncard from "../assets/portfolios/business-card/modern/1/1.jpg";
import custombusinesscard from "../assets/portfolios/business-card/custom/2/custombusinesscard1.jpeg"

// for letterhead design
import elegantgoldaccentedcorporateletterhead from "../assets/portfolios/letterhead/modern/1/Modern Letterhead.jpg";
import modernminimalist from "../assets/portfolios/letterhead/modern&minimalist-corporate/1/modern and minimalist corporate letterhead.jpg";
import corporate from "../assets/portfolios/letterhead/minimalist-corporate/1/3.jpg";
import modern from "../assets/portfolios/letterhead/modern&corporate/1/modern and corporate letterhead design.jpg";

// for banner design
import professionalpromotionalbanner from "../assets/portfolios/banner/promotional/1/1.jpg";

// for social media cover design
import socialmediacoverdesign from "../assets/portfolios/social-cover/facebook-cover/1/1.jpg";

// image editing
import imageclippingpath from "../assets/portfolios/background-remove/clipping-path/1/10.jpg";
import colorcorrection from "../assets/portfolios/image-editing/color-correction/1/colorcorrection.jpeg"
import imageretouching from "../assets/portfolios/image-editing/image-retouching/1/image-retouching.jpg"
import spotremoval from "../assets/portfolios/image-editing/sport-removal/1/spotremove.jpg"

// for brand guidelines
import boldpath from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/1.jpg";
import ranova from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/1.jpg";
import nexus from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/1.jpg";
import dynamic from "../assets/portfolios/logo-design/brand-guidelines/letter-d/1.jpg"

// Util: For animation resets when filters change
const getFilterKey = (
  searchQuery: string,
  activeFilter: string,
  activeSubFilter: string
) => `${searchQuery}|${activeFilter}|${activeSubFilter}`;

// Categories for main filter buttons (unchanged)
const categories = [
  { id: "all", name: "All Projects" },
  { id: "logo", name: "Logo" },
  { id: "business-card", name: "Business Card" },
  { id: "letterhead", name: "Letterhead" },
  { id: "brand-guidelines", name: "Brand Guidelines" },
  { id: "social-media-post", name: "Social Media Post" },
  { id: "banner", name: "Banner" },
  { id: "web-banner", name: "Web Banner" },
  { id: "email-signature", name: "Email Signature" },
  { id: "flyer", name: "Flyer" },
  { id: "billboards", name: "Billboards" },
  { id: "stationery", name: "Stationery" },
  { id: "image-editing", name: "Image Editing" },
  { id: "resume", name: "Resume" },
];

// Subcategories (unchanged, used for filtering)
const subcategories = {
  logo: ["All", "Lettermark", "Wordmark", "Abstract", "Combination Mark"],
  "business-card": ["All", "Minimal", "Corporate", "Creative", "Modern"],
  letterhead: ["All", "Modern", "Minimalist", "Corporate"],
  "social-media-post": [
    "All",
    "Instagram Post",
    "Facebook Post",
    "LinkedIn Post",
    "Promotional",
  ],
  banner: ["All", "Promotional Banner"],
  "web-banner": ["All", "Youtube Thumbnail", "Email Banner"],
  "email-signature": ["All", "Personal", "Corporate"],
  flyer: [
    "All",
    "Event Flyer",
    "Product Flyer",
    "Sale Flyer",
    "Real Estate Flyer",
    "Corporate Flyer",
    "Party Flyer",
  ],
  billboards: [
    "All",
    "Highway Billboard",
    "City Billboard",
    "Event Billboard",
    "Launch Campaign",
    "Awareness Billboard",
  ],
  stationery: ["All", "Letterhead", "Envelope", "Business Card", "ID Card"],
  "image-editing": [
    "All",
    "Background Remove",
    "Retouching",
    "Color Correction",
    "Photo Manipulation",
    "Old Photo Restoration",
  ],
  resume: [
    "All",
    "Modern Resume",
    "Minimalist Resume",
    "Infographic Resume",
    "Creative Resume",
    "Corporate Resume",
    "Cover Letter Design",
  ],
  "background-removal": [
    "All",
    "Product Image",
    "Portrait Image",
    "Transparent Background",
    "White Background",
    "Shadow Added",
    "Bulk Removal",
  ],
};

const ANIMATION_DURATION = 300; // ms animation duration for subfilter hide

// === Custom Hook: Detect if element is in viewport using IntersectionObserver ===
function useInView<T extends HTMLElement = HTMLElement>(
  options?: IntersectionObserverInit
) {
  const [inView, setInView] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView] as const;
}

// --- Portfolio Card with enhanced hover effects ---
function AnimatedCard({ item, idx }: { item: any; idx: number }) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group ${styles.cardScrollAnimate} ${
        inView ? styles.cardScrollAnimateActive : ""
      }`}
      style={{
        animationDelay: `${idx * 80}ms`,
        animationDuration: "700ms",
        animationFillMode: "both",
      }}
    >
      <Card className="group overflow-hidden border-gray-200/80 hover:border-gray-300 transition-all duration-500 hover:shadow-[rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px,_rgba(17,_17,_26,_0.1)_0px_24px_80px] hover:-translate-y-1">
        <CardContent className="p-0">
          {/* Image Container */}
          <Link to={`/projects/${item.id}`} className="block relative aspect-[4/3] overflow-hidden bg-gray-100">
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-center justify-center">
              <div className="transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transform transition-all duration-700 scale-100 group-hover:scale-110 group-hover:filter group-hover:brightness-90"
            />
          </Link>
          
          {/* Content */}
          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {item.tags?.slice(0, 2).map((tag: string, idx2: number) => (
                <span
                  key={idx2}
                  className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-lg text-xs font-medium transform transition-all duration-300 group-hover:bg-gray-200 group-hover:-translate-y-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link to={`/projects/${item.id}`}>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-black transition-all duration-300 line-clamp-2">
                {item.title}
              </h3>
            </Link>
            <Link 
              to={`/projects/${item.id}`} 
              className="inline-flex items-center text-gray-600 text-sm font-medium group-hover:text-black transition-all duration-300"
            >
              View Project 
              <ExternalLink className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ---- Main Projects Page ----
const Projects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [showSubFilter, setShowSubFilter] = useState(false);
  const [hidingSubFilter, setHidingSubFilter] = useState(false);
  const [activeSubFilter, setActiveSubFilter] = useState("All");
  const [filterAnim, setFilterAnim] = useState(false);
  const [cardAnimKey, setCardAnimKey] = useState(getFilterKey("", "all", "All"));
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const getSubcategories = () => {
    if (activeFilter === "all") return [];
    return subcategories[activeFilter as keyof typeof subcategories] || [];
  };

  // Filter click also toggles subfilter, and triggers subfilter hide animation if needed
  const handleCategoryClick = (categoryId: string) => {
    const subs = subcategories[categoryId as keyof typeof subcategories];

    if (categoryId === activeFilter) {
      // Toggle subfilter visibility if clicking the same category
      if (showSubFilter) {
        setShowSubFilter(false);
        setActiveSubFilter("All");
      } else if (subs && subs.length > 0) {
        setActiveSubFilter(subs[0]);
        setShowSubFilter(true);
      }
      return;
    }

    setActiveFilter(categoryId);

    if (subs && subs.length > 0) {
      setActiveSubFilter(subs[0]);
      setShowSubFilter(true);
    } else {
      setActiveSubFilter("All");
      setShowSubFilter(false);
    }
    setFilterAnim(true);
    setTimeout(() => setFilterAnim(false), 300);
  };

  const handleSubFilterClick = (subcategory: string) => {
    setActiveSubFilter(subcategory);
  };

  // ==== Example portfolio items (multi-categories / subcategories) ====
  const portfolioItems = [
    {
      id: "momentum-clothing-brand-for-men",
      title: "Momentum Menswear – Modern & Stylish Clothing for Men",
      categories: ["logo"],
      subcategories: ["Abstract", "Combination Mark"],
      tags: ["Logo", "Abstract", "Combination Mark"],
      image: momentum,
    },
    {
      id: "modern-minimalist-camera-business-card",
      title: "Modern Minimalist Camera Science Business Card",
      categories: ["business-card", "stationery"],
      subcategories: ["Modern", "Minimal"],
      tags: ["Business Card", "Modern", "Minimal"],
      image: modernminimalistcamerabusinesscard,
    },
    {
      id: "elegant-gold-accented-corporate-letterhead",
      title: "Elegant Gold-Accented Corporate Letterhead",
      categories: ["letterhead", "stationery"],
      subcategories: ["Minimalist", "Corporate"],
      tags: ["Letterhead", "Minimalist"],
      image: elegantgoldaccentedcorporateletterhead,
    },
    {
      id: "professional-promotional-banner",
      title: "Promotional Banner",
      categories: ["banner"],
      subcategories: ["Promotional"],
      tags: ["Banner", "Promotional"],
      image: professionalpromotionalbanner,
    },
    {
      id: "creative-facebook-cover-design",
      title: "The Future of Luxury Living – Tailored for You",
      categories: ["social-media-post"],
      subcategories: ["Promotional"],
      tags: ["Social Media Cover"],
      image: socialmediacoverdesign,
    },
    {
      id: "image-background-remove-clipping-path",
      title: "Image Clipping Path",
      categories: ["image-editing"],
      subcategories: ["Background Remove"],
      tags: ["Background Remove", "Clipping Path"],
      image: imageclippingpath,
    },
    {
      id: "boldpath-brand-guidelines",
      title: "The Guidelines for Bold Path",
      categories: ["brand-guidelines"],
      subcategories: [],
      tags: ["Brand Guidelines"],
      image: boldpath,
    },
    {
      id: "blood-donation-logo-design",
      title: "Blood Donation Logo Design",
      categories: ["logo"],
      subcategories: ["Combination Mark"],
      tags: ["Logo", "Blood Donation"],
      image: blooddonation,
    },
    {
      id: "modern-business-card-design",
      title: "Modern Business Card Design",
      categories: ["business-card", "stationery"],
      subcategories: ["Cross Platform", "Creative"],
      tags: ["Business Card"],
      image: modernbusinesscard,
    },
    {
      id: "modern-minimalist-letterhead-design",
      title: "Modern Minimalist Letterhead Design",
      categories: ["letterhead", "stationery"],
      subcategories: ["Portfolio", "Minimalist"],
      tags: ["Letterhead"],
      image: modernminimalist,
    },
    {
      id: "uniflora-logo-design",
      title: "Uniflora Logo Design",
      categories: ["logo"],
      subcategories: ["Health Care"],
      tags: ["Logo", "Health Care"],
      image: uniflora,
    },
    {
      id: "ranova-brand-guidelines",
      title: "Ranova Brand Guidelines",
      categories: ["brand-guidelines"],
      subcategories: [],
      tags: ["Brand Guidelines"],
      image: ranova,
    },
    {
      id: "professional-business-card-design",
      title: "Professional Business Card Design",
      categories: ["business-card"],
      subcategories: ["Professional", "Corporate"],
      tags: ["Business Card", "Professional"],
      image: visitingcard,
    },
    {
      id: "winnest-logo-design",
      title: "WinNest Real Estate Logo Design",
      categories: ["logo"],
      subcategories: ["Wordmark", "Real Estate"],
      tags: ["Logo Design", "Wordmark"],
      image: winnest,
    },
    {
      id: "minimalist-card-design",
      title: "Minimalist Card Design",
      categories: ["business-card"],
      subcategories: ["Minimalist"],
      tags: ["Business Card", "Minimalist"],
      image: minimalistcard,
    },
    {
      id: "professional-card-design",
      title: "Professional Card Design",
      categories: ["business-card"],
      subcategories: ["Professional"],
      tags: ["Business Card", "Professional"],
      image: professionalcard,
    },
    {
      id: "nexus-brand-guidelines",
      title: "Nexus Brand Guidelines",
      categories: ["brand-guidelines", "logo"],
      subcategories: ["Logo Design"],
      tags: ["Brand Guidelines", "Logo Design"],
      image: nexus,
    },
    {
      id: "custom-card-design",
      title: "Custom Card Design",
      categories: ["business-card", "stationery"],
      subcategories: ["Custom"],
      tags: ["Business Card", "Custom"],
      image: customcard,
    },
    {
      id: "meloplay-logo-design",
      title: "Meloplay Logo Design",
      categories: ["logo"],
      subcategories: ["Lettermark"],
      tags: ["Logo", "Lettermark"],
      image: meloplay,
    },
    {
      id: "player-logo-design",
      title: "Player Logo Design",
      categories: ["logo"],
      subcategories: ["Abstrack"],
      tags: ["Logo", "Abstrack"],
      image: player,
    },
    {
      id: "arborsphere-logo-design",
      title: "ArborSphere Logo Design",
      categories: ["logo"],
      subcategories: ["Abstrack"],
      tags: ["Logo", "Abstrack"],
      image: arborsphere,
    },
    {
      id: "modern-card-design",
      title: "Modern Type Business Card Design",
      categories: ["business-card"],
      subcategories: ["Modern"],
      tags: ["Business Card", "Modern"],
      image: moderncard,
    },
    {
      id: "wind-logo-design",
      title: "Wind Logo Design",
      categories: ["logo"],
      subcategories: ["Lettermark"],
      tags: ["Logo Deisgn", "Lettermark"],
      image: wind,
    },
    {
      id: "zxon-logo-design",
      title: "Zxon Logo Design",
      categories: ["logo"],
      subcategories: ["Lettermark"],
      tags: ["Logo Deisgn", "Lettermark"],
      image: zxon,
    },
    {
      id: "zepeq-logo-design",
      title: "Zepeq Logo Design",
      categories: ["logo"],
      subcategories: ["Lettermark"],
      tags: ["Logo Deisgn", "Lettermark"],
      image: zepeq,
    },
    {
      id: "ecogrow-logo-design",
      title: "Ecogrow Logo Design",
      categories: ["logo"],
      subcategories: ["Lettermark"],
      tags: ["Logo Deisgn", "Lettermark"],
      image: ecogrow,
    },
    {
      id: "corporate-letterhead-design",
      title: "Corporate Design",
      categories: ["letterhead"],
      subcategories: ["Corporate"],
      tags: ["Letterhead Deisgn", "Corporate"],
      image: corporate,
    },
    {
      id: "modern-letterhead-design",
      title: "Modern Letterhead Design",
      categories: ["letterhead"],
      subcategories: ["modern"],
      tags: ["Letterhead Deisgn", "Modern"],
      image: modern,
    },
    {
      id: "the-player-logo-design",
      title: "Player Logo Design",
      categories: ["logo"],
      subcategories: ["Abstrack"],
      tags: ["Logo", "Abstrack"],
      image: playerlogo,
    },
    {
      id: "cycle-logo-design",
      title: "Cycle Logo Design",
      categories: ["logo"],
      subcategories: ["Lettermark"],
      tags: ["Logo", "Lettermark"],
      image: cycle,
    },
    {
      id: "color-correction-photoshop-1",
      title: "Color Correction",
      categories: ["image-editing"],
      subcategories: ["Color Correction"],
      tags: ["Image Editing", "Color Correction"],
      image: colorcorrection,
    },
    {
      id: "color-retouching-photoshop-1",
      title: "Color Retouching",
      categories: ["image-editing"],
      subcategories: ["Color Retouching"],
      tags: ["Image Editing", "Color Retouching"],
      image: imageretouching,
    },
    {
      id: "custom-business-card-design",
      title: "Custom Business Card Design",
      categories: ["business-card"],
      subcategories: ["Custom"],
      tags: ["Business Card", "Custom"],
      image: custombusinesscard,
    },
    {
      id: "spot-remova-1",
      title: "Spot Removal",
      categories: ["image-editing"],
      subcategories: ["Spot Removal"],
      tags: ["Image Editing", "Spot Removal"],
      image: spotremoval,
    },
    {
      id: "dynamic-brand-guidelines",
      title: "Dynamic Brand Guidelines",
      categories: ["logo", "brand-guidelines"],
      subcategories: ["Dynamic"],
      tags: ["Logo Design", "Combination Mark", "Brand Guidelines"],
      image: dynamic,
    },
  ];

  // ==== Filtering Logic ====
  const filteredProjects = portfolioItems.filter((item) => {
    // Search filter
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tags &&
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ));

    // Category filter (multi-category)
    const matchesCategory =
      activeFilter === "all" ||
      (Array.isArray(item.categories) &&
        item.categories.includes(activeFilter));

    if (!matchesCategory || !matchesSearch) return false;

    // Subfilter (multi-subcategory support)
    if (
      showSubFilter &&
      activeSubFilter &&
      activeSubFilter.toLowerCase() !== "all"
    ) {
      const subcats = item.subcategories || [];
      const tags = item.tags || [];
      return (
        subcats.some(
          (sub) => sub.toLowerCase() === activeSubFilter.toLowerCase()
        ) ||
        tags.some((tag) => tag.toLowerCase() === activeSubFilter.toLowerCase())
      );
    }

    return true;
  });

  useEffect(() => {
    setCardAnimKey(getFilterKey(searchQuery, activeFilter, activeSubFilter));
  }, [searchQuery, activeFilter, activeSubFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 animate-fade-in"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float-slow">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float-slower">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm"></div>
        </div>
        <div className="absolute top-40 right-32 animate-float">
          <Star className="w-6 h-6 text-yellow-400/30" />
        </div>

        <div className="container mx-auto px-4 md:px-8 text-center relative">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100/50 mb-6 hover:scale-105 transition-transform duration-300">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                Portfolio Collection
              </span>
            </span>
          </div>
          
          <div className="animate-fade-in-up delay-200">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Showcasing Creative 
              <span className="block mt-2">Design Excellence</span>
            </h1>
          </div>
          
          <div className="animate-fade-in-up delay-300">
            <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
              Explore my diverse portfolio of design projects, each crafted with precision 
              and creativity to deliver exceptional visual experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="container mx-auto px-4 md:px-8">
          {/* Search and Filter Bar */}
          <div className="mb-8">
            <Card className="overflow-hidden border-gray-200/80">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full py-3 pl-12 pr-4 bg-white rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#344c36] text-base"
                    />
                    <Search
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                  </div>
                  <Button
                    onClick={() => setIsFilterOpen((prev) => !prev)}
                    variant="outline"
                    className="flex-shrink-0 flex items-center justify-center gap-2 px-6 py-3 hover:bg-gray-50"
                  >
                    <Filter size={16} />
                    <span>Filters</span>
                  </Button>
                </div>

                {/* Filter Panel */}
                <AnimatePresence>
                  {isFilterOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        exit={{ y: -20 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="mt-6 pt-6 border-t border-gray-200"
                      >
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="text-lg font-semibold text-gray-900">Filter Projects</h3>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsFilterOpen(false)}
                            className="hover:bg-gray-100 rounded-full"
                          >
                            <X size={18} />
                          </Button>
                        </div>

                        {/* Main Categories */}
                        <motion.div
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="mb-6"
                        >
                          <h4 className="text-sm font-medium text-gray-500 mb-3">Categories</h4>
                          <div className="flex flex-wrap gap-2">
                            {categories.map((category, idx) => (
                              <motion.button
                                key={category.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2, delay: idx * 0.03 }}
                                onClick={() => handleCategoryClick(category.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                  activeFilter === category.id
                                    ? "bg-[#344c36] text-white shadow-md"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                              >
                                {category.name}
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>

                        {/* Subcategories */}
                        <AnimatePresence>
                          {showSubFilter && getSubcategories().length > 0 && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 10, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <h4 className="text-sm font-medium text-gray-500 mb-3">Subcategories</h4>
                                <div className="flex flex-wrap gap-2">
                                  {getSubcategories().map((subcategory, idx) => (
                                    <motion.button
                                      key={subcategory}
                                      initial={{ opacity: 0, scale: 0.9 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ duration: 0.2, delay: idx * 0.03 }}
                                      onClick={() => handleSubFilterClick(subcategory)}
                                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                                        activeSubFilter?.toLowerCase() === subcategory?.toLowerCase()
                                          ? "bg-[#344c36] text-white shadow-md"
                                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                      }`}
                                    >
                                      {subcategory}
                                    </motion.button>
                                  ))}
                                </div>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>

          {/* Portfolio Grid */}
          <div
            key={cardAnimKey}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {filteredProjects.map((item, idx) => (
              <AnimatedCard key={item.id} idx={idx} item={item} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <Card className="w-full py-16 text-center">
              <CardContent>
                <div className="max-w-md mx-auto">
                  <Search className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">No projects found</h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search or filter criteria to find what you're looking for.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveFilter("all");
                      setActiveSubFilter("All");
                      setIsFilterOpen(false);
                    }}
                    className="inline-flex items-center gap-2"
                  >
                    <X size={16} />
                    Clear Filters
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <div className="mb-20"></div>
      <Footer />

      <style>
        {`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 5s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-1000 { animation-delay: 1000ms; }

        /* Rest of your existing styles */
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #f0f0f0 1px, transparent 1px),
                           linear-gradient(to bottom, #f0f0f0 1px, transparent 1px);
          background-size: 20px 20px;
        }

        @keyframes scrollFadeInCard {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .card-scroll-animate {
          opacity: 0;
          transform: translateY(40px) scale(0.97);
        }

        .card-scroll-animate.card-scroll-animate-active {
          animation: scrollFadeInCard 0.7s cubic-bezier(.23, 1.07, .66, .99) forwards;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        `}
      </style>
    </div>
  );
};

export default Projects;