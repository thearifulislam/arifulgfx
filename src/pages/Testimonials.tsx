
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Robert Johnson",
      role: "CEO, TechFusion",
      content: "Olivia's design work transformed our product. She has a unique ability to combine aesthetic appeal with functionality. The user engagement metrics have increased by 40% since implementing her designs.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Product Manager, Innovate Inc.",
      content: "Working with Olivia was a seamless experience. She took our vague ideas and turned them into a stunning interface that perfectly aligned with our brand vision. I highly recommend her services.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Founder, HealthTech Solutions",
      content: "The design system Olivia created for our healthcare app has made our development process much more efficient. Her understanding of user needs in the healthcare space was invaluable.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      role: "UX Director, CreativeWave",
      content: "Olivia's expertise in design systems is unmatched. She helped us implement a scalable design framework that has significantly improved our team's productivity and output quality.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 5,
      name: "David Thompson",
      role: "CTO, Finance Partners",
      content: "The dashboard Olivia designed for our financial platform has received praise from both our team and clients. Complex data is now presented in an intuitive and accessible way.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 6,
      name: "Jessica Patel",
      role: "Marketing Director, BrandGrow",
      content: "Olivia's redesign of our website led to a 35% increase in conversion rates. Her strategic approach to design goes beyond aesthetics – it delivers real business results.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
    }
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client <span className="text-green">Testimonials</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Hear what my clients have to say about their experiences working with me on various design projects.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow fill-yellow" />
                  ))}
                </div>
                
                <p className="text-black-soft/70 mb-6 italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center bg-green text-white p-12 rounded-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="mb-8 text-white/80 max-w-xl mx-auto">
              Let's collaborate to bring your ideas to life with innovative design solutions.
            </p>
            <a
              href="/contact"
              className="bg-yellow text-black-soft py-3 px-6 rounded-full font-medium hover:bg-white transition-colors duration-300 inline-block"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
