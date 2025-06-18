
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import PortfolioSection from "../components/PortfolioSection";
import ToolsSection from "../components/ToolsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import ServiceSlider from "../components/ServiceSlider"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServiceSlider/>
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ToolsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
