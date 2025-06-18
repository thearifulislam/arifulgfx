import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Rocket,
  BookOpen,
  Figma,
  Sparkle,
  Briefcase,
  Star,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

  {/* Process Section */}
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Design Process</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A systematic approach to creating your perfect business card
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {[
          {
            icon: <Rocket className="h-7 w-7 text-yellow-500" />,
            title: "Discovery",
            desc: "Understanding your brand identity, target audience, and specific requirements for your business card.",
          },
          {
            icon: <BookOpen className="h-7 w-7 text-purple-500" />,
            title: "Research & Concept",
            desc: "Analyzing industry standards and creating unique design concepts that align with your brand.",
          },
          {
            icon: <Figma className="h-7 w-7 text-pink-500" />,
            title: "Design & Refinement",
            desc: "Creating and refining card layouts, typography, and visual elements for maximum impact.",
          },
          {
            icon: <Sparkle className="h-7 w-7 text-blue-400" />,
            title: "Presentation",
            desc: "Presenting multiple design options with different styles, colors, and layouts for your selection.",
          },
          {
            icon: <Briefcase className="h-7 w-7 text-green-500" />,
            title: "Delivery",
            desc: "Providing print-ready files and specifications for professional printing of your business cards.",
          },
        ].map((step, index) => (
          <div key={index} className="text-center p-6 bg-gradient-to-b from-white to-gray-50 rounded-3xl">
            <div className="inline-block p-4 bg-white rounded-full mb-4 shadow-sm">
              {step.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted-foreground">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section> 