import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Clock,
  Globe,
  Smartphone,
  Users,
  Star,
  Briefcase,
  Rocket,
  Figma,
  Sparkle,
  BookOpen,
  Eye,
  RefreshCw,
} from "lucide-react";
// logo design portfolio

// momentum
import momentum from "../assets/portfolios/logo-design/abstrack-mark/men-fashion/1/1.jpg";



import blooddonation from "../assets/portfolios/logo-design/combination-mark/health-care-logo/1/1.jpg";
import uniflora from "../assets/portfolios/logo-design/lettermark-logo/letter-u/1/1.jpg";
import meloplay from "../assets/portfolios/logo-design/lettermark-logo/letter-mp/1/1.jpg";
import player from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/1.jpg";
import arborsphere from "../assets/portfolios/logo-design/combination-mark/nature-logo/1/1.jpg";
import wind from "../assets/portfolios/logo-design/lettermark-logo/letter-w/1/1.jpg";
import zxon from "../assets/portfolios/logo-design/lettermark-logo/letter-z/1/1.jpg";
import zepeq from "../assets/portfolios/logo-design/lettermark-logo/letter-zpq/1/1.jpg";
import ecogrow from "../assets/portfolios/logo-design/combination-mark/nature-logo/2/1.jpg";
import playerlogo from "../assets/portfolios/logo-design/abstrack-mark/player-logo/2/1.jpg";
import cycle from "../assets/portfolios/logo-design/lettermark-logo/cycle/1.png";

// for business card
import modernminimalistcamerabusinesscard from "../assets/portfolios/business-card/minimalist/1/1.jpg";
import modernbusinesscard from "../assets/portfolios/business-card/minimalist/2/1.jpg";
import minimalistcard from "../assets/portfolios/business-card/minimalist/3/mnvb-24.jpg";
import professionalcard from "../assets/portfolios/business-card/professional/2/1.jpg";
import customcard from "../assets/portfolios/business-card/custom/1/1.jpg";
import moderncard from "../assets/portfolios/business-card/modern/1/1.jpg";

// for letterhead
import elegantgoldaccentedcorporateletterhead from "../assets/portfolios/letterhead/modern/1/Modern Letterhead.jpg";
import modernminimalist from "../assets/portfolios/letterhead/modern&minimalist-corporate/1/modern and minimalist corporate letterhead.jpg";
import corporate from "../assets/portfolios/letterhead/minimalist-corporate/1/3.jpg";

import modern from "../assets/portfolios/letterhead/modern&corporate/1/modern and corporate letterhead design.jpg";

// for banner
import professionalpromotionalbanner from "../assets/portfolios/banner/promotional/1/1.jpg";

// for social media cover
import socialmediacoverdesign from "../assets/portfolios/social-cover/facebook-cover/1/1.jpg";

// for background remove
import imageclippingpath from "../assets/portfolios/background-remove/clipping-path/1/10.jpg";

// for brand guidelines
import boldpath from "../assets/portfolios/logo-design/brand-guidelines/letter-bp/1/1.jpg";
import ranova from "../assets/portfolios/logo-design/brand-guidelines/letter-rn/1/1.jpg";
import nexus from "../assets/portfolios/logo-design/brand-guidelines/letter-n/1/1.jpg";

// Import the portfolio styles for the animated button
import "../styles/portfolio.css";

const serviceData = {
  "logo-design": {
    icon: (
      <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
    ),
    coverText: "Logo Design",
    title: "Logo Design Excellence",
    tagline: "Distinctive. Memorable. Timeless brand marks.",
    description:
      "I create unique, versatile, and memorable logos that capture your brand's essence and make a lasting impression. My process blends research, creativity, and precision to deliver logos that stand out in any industry.",
    process: [
      {
               icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Discovery",
        desc: "Understand your brand, audience, and vision.",
      },
      {
               icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Research & Concept",
        desc: "Market analysis and brainstorming unique ideas.",
      },
      {
            icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Design & Refinement",
        desc: "Crafting and iterating on logo concepts.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Presentation",
        desc: "Showcase options and gather your feedback.",
      },
      {
               icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Delivery",
        desc: "Final files in all formats, ready for use.",
      },
    ],
    features: [
      {
              icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Original Concepts",
      },
      {
              icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Collaborative Process",
      },
      {
          icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Vector Source Files",
      },
      {
             icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Fast Turnaround",
      },
      {
             icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Brand Guidelines",
      },
      {
             icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Usage Documentation",
      },
    ],
    subServices: [
      "Wordmark Logos",
      "Brandmarks & Symbols",
      "Monogram Logos",
      "Emblem Logos",
      "Mascot Logos",
      "Minimal Logos",
    ],
    deliverables: [
      "Primary & Secondary Logo",
      "Black/White & Color Variations",
      "SVG, PNG, PDF, EPS Files",
      "Brand Guidelines Sheet",
      "Favicon & Social Media Kit",
      "Mockups for Real-World Use",
    ],
    timeframe: "1-2 weeks",
    portfolios: [
      {
        id: "momentum-clothing-brand-for-men",
        title: "Momentum Menswear – Modern & Stylish Clothing for Men",
        tags: ["Logo", "Abstract"],
        image: momentum,
      },
      {
        id: "blood-donation-logo-design",
        title: "Blood Donation Logo Design",
        tags: ["Logo", "Blood Donation"],
        image: blooddonation,
      },
      {
        id: "uniflora-logo-design",
        title: "Uniflora Logo Design",
        tags: ["Logo", "Health Care"],
        image: uniflora,
      },
      {
        id: "ranova-brand-guidelines",
        title: "Ranova Brand Guidelines",
        tags: ["Brand Guidelines"],
        image: ranova,
      },
      {
        id: "boldpath-brand-guidelines",
        title: "The Guidelines for Bold Path",
        tags: ["Brand Guidelines"],
        image: boldpath,
      },
      {
        id: "nexus-brand-guidelines",
        title: "Nexus Brand Guidelines",
        tags: ["Brand Guidelines"],
        image: nexus,
      },
      {
        id: "meloplay-logo-design",
        title: "Meloplay Logo Design",
        tags: ["Logo Design"],
        image: meloplay,
      },
      {
        id: "player-logo-design",
        title: "Player Logo Design",
        tags: ["Logo", "Abstract"],
        image: player,
      },
      {
        id: "arborsphere-logo-design",
        title: "ArborSphere Logo Design",
        tags: ["Logo", "Abstrack"],
        image: arborsphere,
      },
      {
        id: "zxon-logo-design",
        title: "Zxon Logo Design",
        tags: ["Logo", "Abstrack"],
        image: zxon,
      },
      {
        id: "zepeq-logo-design",
        title: "Zepeq Logo Design",
        tags: ["Logo", "Abstrack"],
        image: zepeq,
      },
      {
        id: "ecogrow-logo-design",
        title: "Ecogrow Logo Design",
        tags: ["Logo Deisgn", "Lettermark"],
        image: ecogrow,
      },
      {
        id: "the-player-logo-design",
        title: "Player Logo Design",
        tags: ["Logo", "Abstrack"],
        image: playerlogo,
      },
      {
        id: "cycle-logo-design",
        title: "Cycle Logo Design",
        tags: ["Logo", "Lettermark"],
        image: cycle,
      },
    ],
  },

  "ui-ux-design": {
    icon: (
      <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
    ),
    coverText: "UI/UX Design",
    title: "User Experience & Interface Design",
    tagline: "Intuitive. Engaging. User-centered digital experiences.",
    description:
      "I create user-centered digital experiences that combine beautiful aesthetics with seamless functionality. From wireframes to high-fidelity prototypes, I design interfaces that users love to interact with, ensuring your digital products are both visually appealing and highly functional.",
    process: [
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "User Research",
        desc: "Understand your users, their needs, and pain points through research and analysis.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Information Architecture",
        desc: "Structure content and navigation for optimal user flow and findability.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Wireframing & Prototyping",
        desc: "Create low and high-fidelity prototypes to test and refine user flows.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Visual Design",
        desc: "Apply brand colors, typography, and visual elements to create engaging interfaces.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "User Testing & Iteration",
        desc: "Test with real users and refine based on feedback for optimal experience.",
      },
    ],
    features: [
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "User-Centered Design",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Responsive Design",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Interactive Prototypes",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Accessibility Compliance",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Design Systems",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "User Testing Reports",
      },
    ],
    subServices: [
      "Website UI/UX Design",
      "Mobile App Design",
      "Dashboard & Admin Panels",
      "E-commerce UX",
      "Landing Page Design",
      "Design Systems & Style Guides",
    ],
    deliverables: [
      "User Research Report",
      "Wireframes & User Flows",
      "High-Fidelity Mockups",
      "Interactive Prototypes",
      "Design System Documentation",
      "User Testing Results",
    ],
    timeframe: "2-4 weeks",
    portfolios: [
      {
        id: "momentum-clothing-brand-for-men",
        title: "Momentum Menswear – Modern & Stylish Clothing for Men",
        tags: ["UI/UX", "E-commerce"],
        image: momentum,
      },
      {
        id: "blood-donation-logo-design",
        title: "Blood Donation App Design",
        tags: ["UI/UX", "Mobile App"],
        image: blooddonation,
      },
    ],
  },

  "web-development": {
    icon: (
      <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
    ),
    coverText: "Web Development",
    title: "Custom Web Development",
    tagline: "Modern. Fast. Scalable web solutions.",
    description:
      "I build custom websites and web applications using cutting-edge technologies and best practices. From simple landing pages to complex web applications, I create fast, secure, and scalable solutions that help your business grow online.",
    process: [
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Requirements Analysis",
        desc: "Define project scope, features, and technical requirements.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Architecture Planning",
        desc: "Design system architecture and choose optimal technologies.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Development & Testing",
        desc: "Build features with regular testing and quality assurance.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Deployment & Launch",
        desc: "Deploy to production with monitoring and optimization.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Maintenance & Support",
        desc: "Provide ongoing maintenance, updates, and technical support.",
      },
    ],
    features: [
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Modern Technologies",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Responsive Design",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "SEO Optimization",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Security Best Practices",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Performance Optimization",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Ongoing Support",
      },
    ],
    subServices: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Web Applications",
      "API Development",
      "Website Maintenance",
      "Performance Optimization",
    ],
    deliverables: [
      "Fully Functional Website",
      "Source Code & Documentation",
      "Deployment Instructions",
      "SEO Optimization",
      "Security Implementation",
      "Training & Support",
    ],
    timeframe: "4-8 weeks",
    portfolios: [
      {
        id: "modern-minimalist-camera-business-card",
        title: "Modern E-commerce Platform",
        tags: ["Web Development", "E-commerce"],
        image: modernminimalistcamerabusinesscard,
      },
      {
        id: "modern-business-card-design",
        title: "Corporate Website",
        tags: ["Web Development", "Corporate"],
        image: modernbusinesscard,
      },
    ],
  },

  "brand-design": {
    icon: (
      <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
    ),
    coverText: "Brand Design",
    title: "Complete Brand Identity Design",
    tagline: "Cohesive. Memorable. Powerful brand experiences.",
    description:
      "I create comprehensive brand identities that tell your story and connect with your audience. From logo design to complete brand guidelines, I develop visual systems that are consistent, memorable, and aligned with your business goals.",
    process: [
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Brand Discovery",
        desc: "Understand your business, values, target audience, and competitive landscape.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Strategy Development",
        desc: "Define brand positioning, personality, and visual direction.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Visual Identity Creation",
        desc: "Design logo, color palette, typography, and visual elements.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Brand Applications",
        desc: "Apply brand identity across various touchpoints and materials.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Guidelines & Delivery",
        desc: "Create comprehensive brand guidelines and deliver all assets.",
      },
    ],
    features: [
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Strategic Brand Positioning",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Complete Visual Identity",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Brand Guidelines",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Multi-Platform Consistency",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Scalable Design System",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Ongoing Brand Support",
      },
    ],
    subServices: [
      "Logo Design & Variations",
      "Color Palette & Typography",
      "Brand Guidelines",
      "Business Card Design",
      "Letterhead & Stationery",
      "Digital Brand Assets",
    ],
    deliverables: [
      "Primary & Secondary Logos",
      "Complete Brand Guidelines",
      "Color Palette & Typography",
      "Business Card & Stationery",
      "Digital Asset Kit",
      "Brand Application Examples",
    ],
    timeframe: "3-6 weeks",
    portfolios: [
      {
        id: "momentum-clothing-brand-for-men",
        title: "Momentum Menswear Brand Identity",
        tags: ["Brand Design", "Fashion"],
        image: momentum,
      },
      {
        id: "blood-donation-logo-design",
        title: "Blood Donation Brand Identity",
        tags: ["Brand Design", "Healthcare"],
        image: blooddonation,
      },
      {
        id: "ranova-brand-guidelines",
        title: "Ranova Complete Brand Identity",
        tags: ["Brand Design", "Guidelines"],
        image: ranova,
      },
    ],
  },

  "business-card-design": {
    icon: (
      <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
    ),
    coverText: "Business Card Design Services",
    title: "Business Card Design",
    tagline: "Distinctive. Memorable. Timeless brand marks.",
    description:
      "I create unique, versatile, and memorable logos that capture your brand's essence and make a lasting impression. My process blends research, creativity, and precision to deliver logos that stand out in any industry.",
    process: [
      {
           icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Discovery",
        desc: "Understanding your brand identity, target audience, and specific requirements for your business card.",
      },
      {
            icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Research & Concept",
        desc: "Analyzing industry standards and creating unique design concepts that align with your brand.",
      },
      {
           icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Design & Refinement",
        desc: "Creating and refining card layouts, typography, and visual elements for maximum impact.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Presentation",
        desc: "Presenting multiple design options with different styles, colors, and layouts for your selection.",
      },
      {
            icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Delivery",
        desc: "Providing print-ready files and specifications for professional printing of your business cards.",
      },
    ],
    features: [
      {
          icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Original Concepts",
      },
      {
             icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Collaborative Process",
      },
      {
          icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Vector Source Files",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Fast Turnaround",
      },
      {
           icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Brand Guidelines",
      },
      {
             icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Usage Documentation",
      },
    ],
    subServices: [
      "Standard & Premium Business Card Designs",
      "Tailored Layouts to Match Logo Types & Brand Identity",
    ],
    deliverables: ["Primary & Secondary Business Card Design (Front & Back)", "Color & Black/White Variations", "SVG/PNG/PDF/EPS Files", "Mini Brand Guidelines Sheet", "Favicon & Social Media Kit", "Mockups for Real-World Use",],
    timeframe: "1-2 weeks",
    portfolios: [
      {
        id: "modern-minimalist-camera-business-card",
        title: "Modern Minimalist Camera Science Business Card",
        tags: ["Business card", "Modern"],
        image: modernminimalistcamerabusinesscard,
      },
      {
        id: "modern-business-card-design",
        title: "Modern Business Card Design",
        tags: ["Business Card"],
        image: modernbusinesscard,
      },
      {
        id: "minimalist-card-design",
        title: "Minimalist Card Design",
        tags: ["Business Card"],
        image: minimalistcard,
      },
      {
        id: "professional-card-design",
        title: "Professional Card Design",
        tags: ["Business Card"],
        image: professionalcard,
      },
      {
        id: "custom-card-design",
        title: "Custom Card Design",
        tags: ["Business Card"],
        image: customcard,
      },
      {
        id: "modern-card-design",
        title: "Modern Type Business Card Design",
        tags: ["Business Card", "Modern"],
        image: moderncard,
      },
    ],
  },

  "letterhead-design": {
    icon: (
      <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
    ),
    coverText: "Letterhead Design",
    title: "Professional Letterhead Design",
    tagline: "Branded. Polished. Print-ready business essentials.",
    description:
      "I design clean, professional, and on-brand letterheads that reinforce your visual identity in every piece of correspondence. Each design is tailored to align with your brand aesthetics, ensuring consistency across all communications.",
    process: [
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Discovery",
        desc: "Understand your brand, audience, and vision.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Research & Concept",
        desc: "Market analysis and brainstorming unique ideas.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Design & Refinement",
        desc: "Crafting and iterating on logo concepts.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Presentation",
        desc: "Showcase options and gather your feedback.",
      },
      {
        icon: <Sparkle className="h-7 w-7 text-blue-400" />,
        title: "Delivery",
        desc: "Final files in all formats, ready for use.",
      },
    ],
    features: [
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,

        label: "Custom Layouts",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,

        label: "Tailored to Brand Identity",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,

        label: "Editable Source Files",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
        label: "Quick Turnaround",
      },
      {
        icon: <Rocket className="h-6 w-6 text-green-500" />,

        label: "Print & Digital Ready",
      },
      {
          icon: <Rocket className="h-6 w-6 text-green-500" />,

        label: "Usage Guide Included",
      },
    ],
    subServices: [
      "Corporate Letterheads",
      "Minimal Letterheads",
      "Modern & Creative Styles",
      "Personal Letterheads",
      "Brand Identity-Aligned Designs",
      "Print-Ready Templates",
    ],
    deliverables: [
      "Primary & Alternative Layouts",
      "Black/White & Color Versions",
      "SVG, PNG, PDF, DOCX Files",
      "Editable Source File (AI/PSD)",
      "Usage & Print Instructions",
      "Mockups for Presentation",
    ],
    timeframe: "3-5 days",
    portfolios: [
      {
        id: "modern-minimalist-letterhead-design",
        title: "Modern Minimalist Letterhead Design",
        tags: ["Letterhead"],
        image: modernminimalist,
      },
      {
        id: "elegant-gold-accented-corporate-letterhead",
        title: "Elegant Gold-Accented Corporate Letterhead",
        tags: ["Letterhead", "Minimalist"],
        image: elegantgoldaccentedcorporateletterhead,
      },
      {
        id: "corporate-letterhead-design",
        title: "Corporate Design",
        tags: ["Letterhead Deisgn", "Corporate"],
        image: corporate,
      },
      {
        id: "modern-letterhead-design",
        title: "modern Design",
        tags: ["Letterhead Deisgn", "Modern"],
        image: modern,
      },
    ],
  },

"brand-guidelines-design": {
  icon: (
    <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
  ),
  coverText: "Brand Guidelines",
  title: "Brand Guidelines Design",
  tagline: "Consistent. Clear. Cohesive brand documentation.",
  description:
    "I craft comprehensive and visually compelling brand guideline documents that ensure consistency across every touchpoint. These guidelines define your brand's voice, visuals, and rules so anyone can communicate your identity with clarity and confidence.",
  process: [
    {
            icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Discovery",
      desc: "Understand your brand, target audience, and usage needs.",
    },
    {
             icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Content Planning",
      desc: "Outline the structure for logo, typography, colors, and more.",
    },
    {
           icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Design & Layout",
      desc: "Create a clean, professional document layout with your brand assets.",
    },
    {
             icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Review & Feedback",
      desc: "Present draft for review and make adjustments as needed.",
    },
    {
            icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Final Delivery",
      desc: "Deliver a fully editable, shareable, and print-ready brand guideline.",
    },
  ],
  features: [
    {
            icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Custom-Branded Layout",
    },
    {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Collaborative Refinement",
    },
    {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Editable Source File",
    },
    {
          icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Quick Delivery",
    },
    {
           icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Logo & Color Usage Rules",
    },
    {
        icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Typography & Layout Guides",
    },
  ],
  subServices: [
    "Logo Usage Rules",
    "Color Palette Guidelines",
    "Typography Specifications",
    "Spacing & Placement Rules",
    "Imagery & Iconography Direction",
    "Tone of Voice & Messaging",
  ],
  deliverables: [
    "Complete Brand Guidelines Document (PDF)",
    "Editable Source File (AI/INDD/Figma)",
    "Logo, Font & Color Assets",
    "Print & Web Usage Rules",
    "Visual Examples & Mockups",
    "Documentation for Team/Partners",
  ],
  timeframe: "1-2 weeks",
  portfolios: [
    {
      id: "boldpath-brand-guidelines",
      title: "The Guidelines for Bold Path",
      tags: ["Brand Guidelines"],
      image: boldpath,
    },
    {
      id: "ranova-brand-guidelines",
      title: "Ranova Brand Guidelines",
      tags: ["Brand Guidelines"],
      image: ranova,
    },
    {
      id: "nexus-brand-guidelines",
      title: "Nexus Brand Guidelines",
      tags: ["Brand Guidelines"],
      image: nexus,
    },
  ],
},




"image-editing": {
  icon: (
    <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
  ),
  coverText: "Image Editing",
  title: "Professional Image Editing",
  tagline: "Clean. Polished. Pixel-perfect visuals.",
  description:
    "I provide high-quality image editing services to enhance, retouch, and transform your photos with precision. From background removal and color correction to detailed retouching, I ensure your visuals are crisp, professional, and ready for any platform or purpose.",
  process: [
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Requirement Analysis",
      desc: "Understand your specific editing needs and file types.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Editing & Enhancement",
      desc: "Apply corrections, retouching, background removal, and effects.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Client Review",
      desc: "Share preview files for feedback and adjustments.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Final Delivery",
      desc: "Deliver optimized and high-resolution edited files.",
    },
  ],
  features: [
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "High-Resolution Output",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Background Removal",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Color & Light Correction",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Advanced Retouching",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Fast Turnaround",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Unlimited Revisions",
    },
  ],
  subServices: [
    "Background Removal",
    "Color Correction",
    "Product Photo Editing",
    "Portrait Retouching",
    "Shadow & Reflection Effects",
    "Clipping Path & Masking",
  ],
  deliverables: [
    "High-Resolution JPEG/PNG Files",
    "Transparent PNGs (if applicable)",
    "PSD or Source Files (on request)",
    "Optimized Web & Print Versions",
    "Before/After Comparison (if needed)",
    "Bulk File Packaging & Delivery",
  ],
  timeframe: "24-72 hours (depending on project size)",
  portfolios: [
    {
      id: "image-background-remove-clipping-path",
      title: "Image Clipping Path",
      tags: ["Background Remove", "Clipping Path"],
      image: imageclippingpath,
    },
  ],
},





  

  "background-removal": {
  icon: (
    <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
  ),
  coverText: "Background Removal",
  title: "Precise Background Removal",
  tagline: "Clean cuts. Crisp edges. Transparent perfection.",
  description:
    "I offer professional background removal services using advanced techniques to isolate subjects with pixel-perfect precision. Whether it's for e-commerce, presentations, or creative projects, I ensure your images look sharp, clean, and ready for use on any background.",
  process: [
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Requirement Analysis",
      desc: "Review images and confirm output format and style preferences.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Manual Clipping & Masking",
      desc: "Use pen tool or masking to remove background cleanly.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Refinement & Edge Smoothing",
      desc: "Polish edges, handle hair and complex objects with care.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Final Delivery",
      desc: "Export files in transparent PNG, white background, or as requested.",
    },
  ],
  features: [
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Pixel-Perfect Clipping Path",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Transparent & Custom Backgrounds",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Batch Processing Available",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Hair & Soft Edge Masking",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Quick Turnaround",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Multiple File Format Delivery",
    },
  ],
  subServices: [
    "Clipping Path Services",
    "Transparent Backgrounds",
    "White or Solid Backgrounds",
    "Shadow & Reflection Effects",
    "Object Removal",
    "Edge Refinement & Feathering",
  ],
  deliverables: [
    "Transparent PNG Files",
    "White/Custom Background JPEGs",
    "PSD or Source Files (on request)",
    "Batch Folder Organization",
    "Before/After Previews (optional)",
    "Exported for Web, Print, or E-commerce",
  ],
  timeframe: "12-48 hours (depending on volume)",
  portfolios: [
    {
      id: "image-background-remove-clipping-path",
      title: "Image Clipping Path",
      tags: ["Background Remove", "Clipping Path"],
      image: imageclippingpath,
    },
    ],
  },


  "social-media-post-design": {
  icon: (
    <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
  ),
  coverText: "Social Media Design",
  title: "Social Media Post Design",
  tagline: "Scroll-stopping visuals for every platform.",
  description:
    "I design high-impact social media posts that boost engagement and communicate your brand message effectively. Whether for Instagram, Facebook, LinkedIn, or any other platform, each post is tailored to your audience and optimized for visual appeal and clarity.",
  process: [
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Brief & Strategy",
      desc: "Understand your goals, platform, target audience, and design style.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Concept Development",
      desc: "Sketch ideas and plan layouts for your brand message and content.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Design Execution",
      desc: "Create eye-catching posts with brand consistency and high impact.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Feedback & Delivery",
      desc: "Make revisions based on feedback and deliver final assets.",
    },
  ],
  features: [
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Platform-Optimized Sizes",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Branded Visual Consistency",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Custom Graphics & Layouts",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Content-Driven Design",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Fast Turnaround",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Editable Source Files",
    },
  ],
  subServices: [
    "Instagram Post Design",
    "Facebook & LinkedIn Graphics",
    "Carousel & Story Designs",
    "Promotional & Sale Banners",
    "Event & Announcement Posts",
    "Brand Consistency Templates",
  ],
  deliverables: [
    "High-Resolution JPG/PNG Files",
    "Editable Source Files (PSD/AI/Figma)",
    "Optimized Sizes for Each Platform",
    "Multiple Layout Options (if needed)",
    "Design Variations for Campaigns",
    "Folder Organization by Campaign/Platform",
  ],
  timeframe: "2-4 days (depending on quantity)",
  portfolios: [

  ],
},


"banner-design": {
  icon: (
    <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
  ),
  coverText: "Banner Design",
  title: "Custom Banner Design",
  tagline: "Bold visuals. Clear messaging. Maximum impact.",
  description:
    "I design professional banners tailored for both digital and print use—perfect for websites, ads, events, or storefronts. Each design is built to command attention, communicate your message clearly, and align with your brand identity.",
  process: [
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Requirement Gathering",
      desc: "Discuss your banner's purpose, dimensions, content, and target audience.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Concept Sketching",
      desc: "Create initial layout ideas and visual direction.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Design Development",
      desc: "Design the banner with strong visuals, clear hierarchy, and branding.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Revision & Finalization",
      desc: "Incorporate your feedback and deliver print/web-ready files.",
    },
  ],
  features: [
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Web & Print-Ready Designs",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "High-Resolution Output",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Custom Dimensions & Layouts",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Brand-Aligned Design",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Fast Turnaround Time",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Editable Source Files",
    },
  ],
  subServices: [
    "Website Header Banners",
    "Social Media Banners",
    "YouTube Channel Art",
    "Event & Conference Banners",
    "Roll-up & Standee Designs",
    "Promotional Sale Banners",
  ],
  deliverables: [
    "High-Resolution JPEG/PNG Files",
    "Print-Ready Files (300 DPI)",
    "Web-Optimized Versions",
    "Editable Source Files (PSD/AI/Figma)",
    "Custom Sizes on Request",
    "Organized Export by Usage Type",
  ],
  timeframe: "2-5 days (depending on banner type and quantity)",
  portfolios: [

  ],
},


"web-banner-design": {
  icon: (
    <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
  ),
  coverText: "Web Banners",
  title: "Web Banner Design",
  tagline: "Scroll-stopping designs for web and digital platforms.",
  description:
    "I create high-impact web banners optimized for websites, online ads, and digital promotions. Each design is crafted to grab attention, drive clicks, and reflect your brand's visual identity—perfect for boosting conversions and enhancing online presence.",
  process: [
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Brief & Goal Analysis",
      desc: "Understand campaign goals, target audience, and placement details.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Visual Concepting",
      desc: "Sketch layout directions based on messaging and branding.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Banner Design",
      desc: "Design banners optimized for web dimensions and performance.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Review & Delivery",
      desc: "Refine with your feedback and deliver ready-to-use assets.",
    },
  ],
  features: [
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Standard & Custom Sizes",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "High-Quality & Lightweight",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Brand-Aligned Visuals",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Multiple Variants (A/B Test Ready)",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Responsive-Friendly Layouts",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Editable Source Files",
    },
  ],
  subServices: [
    "Website Hero Banners",
    "Google Display Ads",
    "Social Media Cover Banners",
    "Email Header Banners",
    "Promotional Sliders",
    "E-commerce Banners",
  ],
  deliverables: [
    "High-Resolution Web-Optimized PNG/JPEG",
    "Multiple Banner Sizes",
    "Animated/GIF Version (on request)",
    "Editable Source Files (PSD/AI/Figma)",
    "Responsive Variants (if needed)",
    "Organized File Folders for Easy Use",
  ],
  timeframe: "1-3 days (based on quantity and complexity)",
  portfolios: [

  ],
},


"email-signature-design": {
  icon: (
    <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
  ),
  coverText: "Email Signatures",
  title: "Email Signature Design",
  tagline: "Professional. Clickable. Brand-aligned signatures.",
  description:
    "I design elegant, responsive, and clickable email signatures that reflect your brand identity. Whether for personal use or across a team, my designs help enhance brand credibility, improve communication professionalism, and integrate seamlessly with major email platforms.",
  process: [
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Requirement Collection",
      desc: "Gather contact details, brand assets, and preferred layout style.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Design Concept",
      desc: "Create signature layout with icons, logos, and CTA links.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Feedback & Adjustment",
      desc: "Share initial designs and revise based on your feedback.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Final Delivery",
      desc: "Deliver ready-to-install HTML or image-based signature files.",
    },
  ],
  features: [
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Clickable Social Icons & Links",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Mobile & Email Client Compatibility",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Brand Consistent Colors & Fonts",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "HTML & Image-Based Options",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Multiple Team Member Variants",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Fast Turnaround with Revisions",
    },
  ],
  subServices: [
    "HTML Email Signatures",
    "Image-Based Signatures",
    "Corporate Signature Sets",
    "Social Media Icon Integration",
    "Call-to-Action Buttons (e.g., 'Book a Call')",
    "Dark Mode Friendly Options",
  ],
  deliverables: [
    "HTML Signature File",
    "Image Version (PNG/JPEG)",
    "Installation Guide (PDF/Video)",
    "Multiple Variants (on request)",
    "Signature Preview Mockup",
    "All Icons & Assets Packaged",
  ],
  timeframe: "1-2 days per signature (bulk orders vary)",
  portfolios: [

  ],
},

"flyer-design": {
  icon: (
    <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
  ),
  coverText: "Flyer Design",
  title: "Custom Flyer Design",
  tagline: "Bold. Informative. Purpose-driven print & digital flyers.",
  description:
    "I design professional, eye-catching flyers tailored to your audience and goals—whether it's for an event, business promotion, or announcement. Every flyer is crafted with compelling visuals, strategic layout, and brand alignment to ensure it captures attention and drives action.",
  process: [
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Brief & Content Gathering",
      desc: "Understand your objective, audience, size format, and message.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Concept Design",
      desc: "Create an initial layout based on style and branding preferences.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Feedback & Refinement",
      desc: "Revise layout, text, and visuals based on client feedback.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Finalization & Export",
      desc: "Deliver print-ready and web-friendly versions in multiple formats.",
    },
  ],
  features: [
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Print & Digital Ready Files",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Custom Size & Format",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "High-Resolution Output",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Modern & Creative Layouts",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Editable Source Files",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Fast Delivery with Revisions",
    },
  ],
  subServices: [
    "Event Flyers",
    "Business Promotional Flyers",
    "Real Estate Flyers",
    "Nonprofit & NGO Flyers",
    "Club & Party Flyers",
    "Product Launch Flyers",
  ],
  deliverables: [
    "Print-Ready PDF",
    "Web-Optimized JPEG/PNG",
    "Editable Source File (AI, PSD, or InDesign)",
    "Multiple Size Variants (if requested)",
    "Social Media Adaptations (optional)",
    "Mockup Presentation (optional)",
  ],
  timeframe: "1-3 days (depending on complexity)",
  portfolios: [

  ],
},

"billboard-design": {
  icon: (
    <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
  ),
  coverText: "Billboard Design",
  title: "Impactful Billboard Design",
  tagline: "Big message. Bold impact. Designed to be seen.",
  description:
    "I create visually striking and effective billboard designs that grab attention and deliver your message at a glance. Each design is optimized for visibility, clarity, and brand impact—whether it's for highways, urban displays, or digital billboards.",
  process: [
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Brief & Strategy",
      desc: "Understand the campaign goal, message, target location, and size format.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Concept Design",
      desc: "Create bold, high-contrast layouts tailored to outdoor visibility.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Client Review",
      desc: "Present the initial design and gather feedback for revisions.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Final Delivery",
      desc: "Deliver high-resolution, print-ready files in correct billboard dimensions.",
    },
  ],
  features: [
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Large-Format Ready Design",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "High-Impact Visual Composition",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Clear Typography & Readability",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "CMYK Print Ready Output",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Digital Billboard Versions (on request)",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Fast Turnaround & Revisions",
    },
  ],
  subServices: [
    "Traditional Billboard Design",
    "Digital Billboard Graphics",
    "Real Estate Billboard",
    "Political/NGO Campaign Boards",
    "Event Promotion Billboard",
    "Corporate Branding Billboard",
  ],
  deliverables: [
    "Print-Ready High-Resolution File (PDF/TIFF)",
    "Editable Source File (AI/PSD)",
    "Mockup Presentation",
    "Multiple Size Adaptations (on request)",
    "CMYK Color Profile for Accurate Printing",
    "Digital Format Export (for LED Billboards)",
  ],
  timeframe: "2–4 days (depending on scope)",
  portfolios: [

  ],
},

"stationery-design": {
  icon: (
    <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
  ),
  coverText: "Stationery Design",
  title: "Professional Stationery Design",
  tagline: "Branded essentials. Elegant impressions.",
  description:
    "I design cohesive and elegant stationery items that reflect your brand identity across every touchpoint. From business cards to letterheads, each item is crafted with precision to ensure a consistent, professional, and memorable brand experience.",
  process: [
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Discovery",
      desc: "Understand your brand guidelines, preferences, and required items.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Concept & Layout",
      desc: "Design unique, brand-aligned layouts for each stationery element.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Client Feedback",
      desc: "Present design drafts and revise based on your input.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Finalization & Delivery",
      desc: "Prepare print-ready files and editable source files in standard formats.",
    },
  ],
  features: [
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Brand-Aligned Layouts",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Print-Ready CMYK Files",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Editable Source Files",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Custom Shapes & Sizes (on request)",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Consistent Visual Hierarchy",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "High-Resolution Output",
    },
  ],
  subServices: [
    "Business Card Design",
    "Letterhead Design",
    "Envelope Design",
    "Notepad & Folder Design",
    "Compliment Slips",
    "Corporate Stamp & ID Badge Design",
  ],
  deliverables: [
    "Print-Ready PDF Files (CMYK)",
    "Editable AI or PSD Files",
    "High-Resolution PNG or JPG (optional)",
    "Mockups for Presentation",
    "Packaging in Organized Folders",
    "Multiple Size Options (if needed)",
  ],
  timeframe: "2–5 days (depending on items)",
  portfolios: [

  ],
},

"resume-design": {
  icon: (
    <Smartphone className="h-14 w-14 theme-color-secondary drop-shadow-xl" />
  ),
  coverText: "Resume Design",
  title: "Professional Resume Design",
  tagline: "Stand out. Be remembered. Get hired.",
  description:
    "I design polished and impactful resumes that showcase your skills and experience in a visually compelling way. Whether you're applying for a job, internship, or promotion, I create resumes that catch the eye of hiring managers and make your qualifications shine.",
  process: [
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Consultation & Discovery",
      desc: "Understand your career goals, background, and desired resume style.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Design & Layout",
      desc: "Create a visually appealing and easy-to-read resume layout.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Content Optimization",
      desc: "Refine and format your content to highlight your strengths and achievements.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Client Review & Feedback",
      desc: "Present the design and adjust based on your feedback.",
    },
    {
      icon: <Sparkle className="h-7 w-7 text-blue-400" />,
      title: "Final Delivery",
      desc: "Deliver the final resume design in multiple formats (PDF, Word, etc.).",
    },
  ],
  features: [
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "ATS-Friendly Layout",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Professional & Modern Design",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Content Optimization for Impact",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Tailored to Your Industry",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Editable Formats Included",
    },
    {
      icon: <Rocket className="h-6 w-6 text-green-500" />,
      label: "Quick Turnaround Time",
    },
  ],
  subServices: [
    "Resume Design (Entry-Level to Executive)",
    "Cover Letter Design",
    "LinkedIn Profile Optimization",
    "CV Design",
    "Portfolio Design",
  ],
  deliverables: [
    "Final Resume Design (PDF, Word, etc.)",
    "Cover Letter Design (Optional)",
    "Editable Source Files (AI/PSD)",
    "Optimized Version for Online Applications",
    "LinkedIn Profile Design Tips",
    "Before/After Comparison (if needed)",
  ],
  timeframe: "3–7 days (depending on complexity)",
  portfolios: [

  ],
}




};

const ServiceDetails = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const service = serviceId
    ? serviceData[serviceId as keyof typeof serviceData]
    : undefined;

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-gray-200">
        <Navbar />
        <div className="container mx-auto px-4 md:px-8 pt-32 pb-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-12">
              <div className="inline-block p-6 bg-gradient-to-br from-[#1f2937] to-[#374151] rounded-3xl mb-8 shadow-xl">
                <RefreshCw className="h-16 w-16 text-white drop-shadow-lg" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#1f2937] to-[#4b5563] bg-clip-text text-transparent">
                Service Not Found
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We couldn't find the service you're looking for. Please try refreshing the page or return to our services.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => window.location.reload()}
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#1f2937] to-[#374151] text-white rounded-2xl font-semibold hover:from-[#111827] hover:to-[#1f2937] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <RefreshCw className="h-5 w-5 mr-3 group-hover:animate-spin" />
                Refresh Page
              </button>
              
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#1f2937] text-[#1f2937] rounded-2xl font-semibold hover:bg-[#1f2937] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <ArrowLeft className="h-5 w-5 mr-3" />
                Back to Services
              </Link>
            </div>
          </div>
        </div>

        {/* Available Services Section */}
        <div className="w-full bg-white/80 backdrop-blur-sm mt-12 py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-[#1f2937] to-[#4b5563] bg-clip-text text-transparent">
              Available Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {Object.keys(serviceData).map((key) => (
                <Link
                  key={key}
                  to={`/services/${key}`}
                  className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl transition-all duration-300 border border-gray-200 hover:border-[#1f2937] hover:bg-white/80 shadow-lg hover:shadow-xl transform hover:-translate-y-2"
                >
                  <div className="text-lg font-semibold text-gray-800 group-hover:text-[#1f2937] transition-colors">
                    {serviceData[key as keyof typeof serviceData].coverText}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-100 to-gray-200">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1f2937]/10 to-[#374151]/10"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/services"
              className="inline-flex items-center text-gray-600 hover:text-[#1f2937] transition-colors duration-300 mb-8 group"
            >
              <ArrowLeft className="h-5 w-5 mr-3 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Services</span>
            </Link>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 mb-16 border border-white/20">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-shrink-0">
                  <div className="p-8 bg-gradient-to-br from-[#1f2937] to-[#374151] rounded-3xl shadow-xl">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#1f2937] to-[#374151] text-white text-sm font-bold uppercase tracking-widest rounded-full mb-6 shadow-lg">
                    {service.coverText}
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    {service.title}
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                    {service.tagline}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                    <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg">
                      <Clock className="w-5 h-5 text-[#1f2937]" />
                      <span className="font-semibold text-gray-800">Timeline: {service.timeframe}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 mb-16 border border-white/20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                About This Service
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Key Features
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover what makes our service exceptional
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, i) => (
                <div
                  key={i}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 transform hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-4 bg-gradient-to-br from-[#1f2937] to-[#374151] rounded-2xl shadow-lg">
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{feature.label}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A systematic approach to delivering exceptional results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.process.map((step, idx) => (
                <div
                  key={idx}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl border border-white/20 transform hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#1f2937] to-[#374151] rounded-2xl mb-6 shadow-lg">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    <div className="mb-4">
                      <span className="inline-block w-8 h-8 bg-gradient-to-r from-[#1f2937] to-[#374151] text-white text-sm font-bold rounded-full flex items-center justify-center">
                        {idx + 1}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sub Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                What We Offer
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                {service.subServices.map((sub, idx) => (
                  <span
                    key={idx}
                    className="px-6 py-3 bg-gradient-to-r from-[#1f2937] to-[#374151] text-white rounded-2xl text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Deliverables
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you'll receive when working with us
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.deliverables.map((d, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#059669] to-[#047857] rounded-2xl flex items-center justify-center shadow-lg">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-800 font-medium text-lg">{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {service.portfolios && service.portfolios.length > 0 && (
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Related Projects
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Explore our portfolio of successful projects in this category
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.portfolios.map((item) => (
                  <Link
                    key={item.id}
                    to={`/projects/${item.id}`}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/20"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-[#1f2937] to-[#374151] text-white text-xs font-semibold rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-3 group-hover:text-[#1f2937] transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">View Project</span>
                        <div className="w-8 h-8 bg-gradient-to-r from-[#1f2937] to-[#374151] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#1f2937] to-[#374151] rounded-3xl shadow-2xl p-12 text-center text-white">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's create something amazing together. Contact us today to discuss your project.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1f2937] rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
