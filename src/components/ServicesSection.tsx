import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Code, Palette, Layers } from "lucide-react";
import { Link } from "react-router-dom";

// ==== Animation CSS for Services Section ====
const servicesAnimStyle = `
@keyframes slideUpFade {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.service-card-animate {
  animation: slideUpFade 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

.delay-100 { animation-delay: 100ms; }
.delay-200 { animation-delay: 200ms; }
.delay-300 { animation-delay: 300ms; }
.delay-400 { animation-delay: 400ms; }
.delay-500 { animation-delay: 500ms; }
.delay-600 { animation-delay: 600ms; }
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

const services = [
  {
    id: "ui-ux-design",
    icon: <Palette className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Crafting intuitive and engaging digital experiences that users love. Focused on user-centered design principles and modern aesthetics.",
    features: ["User Research", "Wireframing", "UI Design", "Prototyping", "Usability Testing"],
    accent: "from-blue-500 to-indigo-500",
  },
  {
    id: "web-development",
    icon: <Code className="w-6 h-6" />,
    title: "Web Development",
    description: "Building modern, responsive, and performant web applications using the latest technologies and best practices.",
    features: ["React/Next.js", "Tailwind CSS", "API Integration", "Responsive Design", "Performance"],
    accent: "from-purple-500 to-pink-500",
  },
  {
    id: "brand-design",
    icon: <Layers className="w-6 h-6" />,
    title: "Brand Design",
    description: "Creating memorable brand identities that tell your story and connect with your audience through strategic design.",
    features: ["Logo Design", "Brand Strategy", "Visual Identity", "Style Guides", "Marketing Materials"],
    accent: "from-emerald-500 to-teal-500",
  }
];

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-600">Core Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Expertise that drives
            <span className="block text-blue-600 mt-2">digital success</span>
          </h2>
          <p className="text-lg text-gray-600">
            Delivering exceptional digital solutions through a perfect blend of design, development, and strategic thinking.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Gradient Background */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${service.accent} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl`}
                style={{ opacity: 0.1 }}
              />
              
              {/* Card Content */}
              <div
                className={`relative h-full bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 ${
                  hoveredCard === service.id ? "ring-2 ring-blue-500 transform scale-[1.02]" : ""
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon */}
                <div 
                  className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${service.accent} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 group/feature"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.accent} group-hover/feature:scale-150 transition-transform duration-300`} />
                      <span className="text-sm text-gray-600 group-hover/feature:text-gray-900 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-blue-600 transition-colors group/link"
                >
                  Learn More
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
           See All Services
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
