import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  const faqs = [
    {
      question: "What industries have you worked in?",
      answer: "Over the past 18 years, I've had the opportunity to work with clients in a wide range of industries including technology, healthcare, finance, education, e-commerce, travel, and entertainment. My diverse experience allows me to bring fresh perspectives while understanding industry-specific needs and user expectations."
    },
    {
      question: "What is your design process?",
      answer: "My design process typically consists of five key phases: Discovery (understanding the problem and user needs), Research (market and user research), Ideation (sketching and conceptualizing solutions), Design (creating wireframes, prototypes, and visual designs), and Testing & Iteration (validating designs with users and refining based on feedback). I adapt this process to meet each project's specific needs."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary significantly depending on scope, complexity, and requirements. A simple website redesign might take 2-4 weeks, while a comprehensive app design could take 2-3 months. During our initial consultation, I'll provide a more accurate timeline based on your specific project needs and objectives."
    },
    {
      question: "What deliverables can I expect?",
      answer: "Depending on the project scope, deliverables typically include wireframes, interactive prototypes, visual designs, style guides, design specifications, and asset files. For ongoing collaborations, I can also provide design system documentation and component libraries. I work with tools like Figma, Adobe XD, and Sketch to deliver files in formats that work best for your team."
    },
    {
      question: "How do you charge for your services?",
      answer: "I offer several pricing models to accommodate different client needs: project-based fixed pricing, hourly rates, retainer agreements for ongoing work, and value-based pricing for larger initiatives. After understanding your project requirements, I'll recommend the most appropriate pricing structure for your specific situation."
    },
    {
      question: "Are you available for freelance design?",
      answer: "Yes, I'm available for freelance projects and consultations. I work with both startups and established companies on projects of various sizes. Whether you need a complete design solution or specialized expertise to supplement your team, I can adapt to your requirements."
    },
    {
      question: "Can I download your resume/CV?",
      answer: "Yes, you can download my CV which includes my professional experience, skills, education, and achievements. It provides a comprehensive overview of my design career and expertise."
    },
    {
      question: "What tools do you use?",
      answer: "I'm proficient in industry-standard design tools including Figma, Adobe XD, Sketch, Photoshop, Illustrator, InVision, and Protopie. I also have working knowledge of front-end technologies like HTML, CSS, and basic JavaScript to better collaborate with development teams."
    },
    {
      question: "Do you do branding as well as UX/UI design?",
      answer: "Yes, I offer branding services that complement my UX/UI design work. This includes logo design, brand identity development, style guides, and ensuring brand consistency across digital products. A cohesive approach to branding and product design creates a more harmonious user experience."
    },
    {
      question: "How do you handle revisions?",
      answer: "My project proposals typically include 2-3 rounds of revisions to ensure we achieve the best possible outcome. I believe in collaborative iteration and welcome feedback throughout the design process. For extensive changes beyond the agreed scope, we can discuss additional revision rounds."
    }
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently <span className="text-green">Asked Questions</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Find answers to commonly asked questions about my design services, process, and experience.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="mb-12">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="bg-[#f9f9f9] p-8 rounded-3xl text-center">
              <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
              <p className="mb-6 text-muted-foreground">
                Don't hesitate to reach out if you have any other questions or need further information.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button>
                    Contact Me
                  </Button>
                </Link>
                <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white">
                  <FileText className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Faqs;
