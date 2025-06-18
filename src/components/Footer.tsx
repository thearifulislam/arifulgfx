import { Heart } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background with diagonal split and gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-800 to-rose-500 transform -skew-y-6 origin-top-left scale-110"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <a href="/" className="inline-flex items-center">
              <span className="text-4xl font-bold">
                <span className="text-amber-200">Ariful</span>
                <span className="text-white ml-1">GFX</span>
              </span>
              <Heart className="ml-2 text-amber-200" size={32} />
            </a>
            <p className="text-white/90 mt-8 text-lg leading-relaxed backdrop-blur-sm">
              I specialize in crafting unique brand identities and delivering
              top-tier design solutions that help businesses stand out in
              today's competitive market.
            </p>
            
            {/* Social Links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: FaFacebookF, href: "https://www.facebook.com/arifulislamofficialprofile/", label: "Facebook" },
                { icon: FaInstagram, href: "https://www.instagram.com/_md._ariful_islam/", label: "Instagram" },
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/arifulcreatorstudio/", label: "LinkedIn" },
                { icon: FaBehance, href: "https://behance.net/arifulcreatorstudio", label: "Behance" },
                { icon: FaDribbble, href: "https://dribbble.com/arifulcreatorstudio", label: "Dribbble" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-12 h-12 bg-indigo-600/50 backdrop-blur-sm rounded-xl flex items-center justify-center group transition-all duration-300 hover:bg-rose-400"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white transition-transform group-hover:text-indigo-900 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="lg:col-span-4">
            <h3 className="text-amber-200 text-xl font-bold mb-8">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-amber-200 transition-colors duration-300 group flex items-center"
                >
                  <span className="h-[2px] w-4 bg-indigo-400 mr-3 transition-all group-hover:w-6 group-hover:bg-amber-200"></span>
                  {link.name}
                </a>
              ))}
            </div>

            <h3 className="text-amber-200 text-xl font-bold mt-12 mb-8">Services</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Logo Design",
                "Business Card Design",
                "Letterhead Design",
                "Brand Guidelines",
                "Background Removal"
              ].map((service, index) => (
                <a
                  key={index}
                  href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-white/90 hover:text-amber-200 transition-colors duration-300 group flex items-center"
                >
                  <span className="h-[2px] w-4 bg-indigo-400 mr-3 transition-all group-hover:w-6 group-hover:bg-amber-200"></span>
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-amber-200 text-xl font-bold mb-8">Get In Touch</h3>
            <div className="space-y-6">
                <a
                  href="mailto:acs.arifulislam@gmail.com"
                className="block text-white/90 hover:text-amber-200 transition-colors duration-300"
                >
                  acs.arifulislam@gmail.com
                </a>
                <a
                  href="tel:+8801938434733"
                className="block text-white/90 hover:text-amber-200 transition-colors duration-300"
                >
                  +880 1938-434733
                </a>
              <p className="text-white/90">
                Khulna, Bangladesh
              </p>
            </div>

            <div className="mt-12">
              <h3 className="text-amber-200 text-xl font-bold mb-6">Newsletter</h3>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-indigo-900/30 backdrop-blur-sm rounded-xl px-6 py-4 text-white placeholder:text-white/50 focus:outline-none focus:bg-indigo-800/40 transition-all pr-32"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-rose-500/80 backdrop-blur-sm text-white px-6 py-2 rounded-lg font-medium hover:bg-rose-400 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70">
              Copyright © {new Date().getFullYear()} Ariful Islam. All Rights Reserved.
            </p>
            <div className="flex gap-8">
              <a href="/privacy" className="text-white/70 hover:text-amber-200 transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-white/70 hover:text-amber-200 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
