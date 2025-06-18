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

export type ProjectType = {
  id: string;
  title: string;
  category: string;
  client: string;
  date: string;
  tags: string[];
  coverImage: string;
  description: string;
  galleryImages: string[];
  tools?: string[];
  creativeFields?: string[];
  challenge?: string;
  solution?: string;
  results?: string[];
  process?: {
    title: string;
    description: string;
  }[];
};

export const projectsData: Record<string, ProjectType> = {
  "momentum-clothing-brand-for-men": {
    id: "momentum-clothing-brand-for-men",
    title: "Momentum Menswear – Modern & Stylish Clothing for Men",
    category: "Logo Design",
    client: "Momentum Fashion",
    date: "March 2024",
    tags: ["Logo Design", "Branding", "Fashion", "Modern", "Minimalist"],
    coverImage: momentum,
    description: "A sophisticated and contemporary logo design for a premium men's fashion brand. The design embodies modern masculinity while maintaining an air of timeless elegance, perfect for a high-end menswear collection.",
    galleryImages: [
      momentum,
      momentum,
      momentum,
      momentum,
      momentum,
      momentum
    ],
    tools: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Figma",
      "Sketch"
    ],
    creativeFields: [
      "Logo Design",
      "Brand Identity",
      "Fashion Design",
      "Typography",
      "Visual Design"
    ],
    challenge: "Momentum Fashion needed a distinctive brand identity that would appeal to modern, style-conscious men while conveying quality and sophistication. The challenge was to create a logo that would stand out in the competitive fashion market while maintaining versatility across various applications.",
    solution: "We developed a dynamic abstract mark that combines geometric precision with fluid movement, representing both the brand's name 'Momentum' and its commitment to modern style. The typography was carefully selected and customized to complement the mark, creating a harmonious balance between contemporary design and classic elegance.",
    results: [
      "Successfully launched across all brand touchpoints",
      "Positive feedback from target demographic",
      "Increased brand recognition in the market",
      "Versatile application across digital and print media",
      "Strong foundation for future brand expansion"
    ],
    process: [
      {
        title: "Research & Discovery",
        description: "Conducted extensive market research and competitor analysis to identify opportunities in the premium menswear segment."
      },
      {
        title: "Concept Development",
        description: "Created multiple design concepts focusing on modern minimalism and sophisticated aesthetics."
      },
      {
        title: "Design Refinement",
        description: "Refined the chosen concept through multiple iterations, perfecting every curve and angle."
      },
      {
        title: "Color Selection",
        description: "Selected a sophisticated color palette that reflects premium quality and masculinity."
      },
      {
        title: "Typography Integration",
        description: "Custom-tailored typography to complement the mark and enhance brand recognition."
      }
    ]
  },
  "blood-donation": {
    id: "blood-donation",
    title: "Blood Donation Campaign",
    category: "Logo Design",
    client: "Healthcare Organization",
    date: "2024",
    tags: ["Logo Design", "Healthcare", "Non-profit"],
    coverImage: blooddonation,
    description: "A compassionate and professional logo design for a blood donation campaign, emphasizing the importance of giving and saving lives.",
    galleryImages: [blooddonation],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    creativeFields: ["Logo Design", "Healthcare Branding", "Social Impact"]
  },
  "uniflora": {
    id: "uniflora",
    title: "Uniflora - Botanical Brand",
    category: "Logo Design",
    client: "Uniflora Botanicals",
    date: "2024",
    tags: ["Logo Design", "Nature", "Botanical"],
    coverImage: uniflora,
    description: "An elegant lettermark logo for a botanical brand, combining natural elements with modern typography.",
    galleryImages: [uniflora],
    tools: ["Adobe Illustrator", "Adobe Photoshop"],
    creativeFields: ["Logo Design", "Typography", "Botanical Design"]
  },
  // Add more projects as needed...
};