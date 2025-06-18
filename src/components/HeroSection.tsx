import { motion } from "framer-motion";
import { ArrowUpRight, Star, Github, Linkedin, Twitter } from "lucide-react";
import { Link } from 'react-router-dom';

import me from "../assets/profile/Untitled design.png"

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-white to-gray-50 overflow-hidden py-12">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>
      
      <div className="relative container mx-auto px-4">
        {/* Top Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex justify-between items-center mb-16"
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-600">Open to Work</span>
          </div>
          <div className="flex items-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="https://github.com/yourusername" 
              target="_blank" 
              className="text-gray-600 hover:text-gray-900"
            >
              <Github size={18} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              className="text-gray-600 hover:text-gray-900"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.1 }}
              href="https://twitter.com/yourusername" 
              target="_blank" 
              className="text-gray-600 hover:text-gray-900"
            >
              <Twitter size={18} />
            </motion.a>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-blue-600 font-medium"
              >
                Hi, I'm Ariful 👋
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1]"
              >
                Crafting Digital
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Experiences
                </span>
              </motion.h1>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 max-w-lg"
            >
              A passionate designer and developer focused on creating beautiful, intuitive interfaces and memorable brand experiences.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link to="/projects">
                <button className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 hover:shadow-lg">
                  View Projects
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </Link>
              <a href="mailto:acs.arifulislam@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              acs.arifulislam@gmail.com
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div className="group cursor-pointer">
                <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">5+</div>
                <div className="text-sm text-gray-600">Years Exp.</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">100+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="group cursor-pointer">
                <div className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">50+</div>
                <div className="text-sm text-gray-600">Clients</div>
            </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-sm mx-auto lg:ml-auto"
          >
            {/* Main Image Container */}
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Design Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-fuFll h-full bg-gradient-to-br from-blue-200 to-purple-200 rounded-[2rem] rotate-6"
                whileHover={{ rotate: 8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 rounded-[2rem] -rotate-6"
                whileHover={{ rotate: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Main Content */}
              <div className="relative bg-white rounded-[2rem] p-3 group">
                {/* Image Wrapper */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 transition-opacity duration-300 group-hover:opacity-75" />
                  
                  {/* Profile Image */}
                  <img
                    src={me}
                    alt="Ariful Islam"
                    className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent transition-opacity duration-300 group-hover:opacity-30" />
                  
                  {/* Experience Badge */}
                  {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-sm font-medium text-gray-900">5+ Years Experience</span>
                    </div>
                  </motion.div> */}

                  {/* Skill Cards Container */}
                  <div className="absolute left-4 right-4 bottom-4">
                    <div className="grid grid-cols-3 gap-3">
                      {/* UI/UX Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ y: -4, scale: 1.05 }}
                        className="bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300"
            >
                        <div className="h-8 w-8 bg-blue-100 rounded-lg mb-2 flex items-center justify-center transition-colors duration-300 group-hover:bg-blue-200">
                          <div className="w-4 h-4 bg-blue-500 rounded-md transition-all duration-300 group-hover:scale-110" />
                        </div>
                        <div className="text-sm font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-600">UI/UX</div>
                        <div className="text-xs text-gray-600">Expert</div>
                      </motion.div>

                      {/* Development Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        whileHover={{ y: -4, scale: 1.05 }}
                        className="bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300"
                      >
                        <div className="h-8 w-8 bg-purple-100 rounded-lg mb-2 flex items-center justify-center transition-colors duration-300 group-hover:bg-purple-200">
                          <div className="w-4 h-4 bg-purple-500 rounded-md transition-all duration-300 group-hover:scale-110" />
                        </div>
                        <div className="text-sm font-medium text-gray-900 transition-colors duration-300 group-hover:text-purple-600">Dev</div>
                        <div className="text-xs text-gray-600">Advanced</div>
                      </motion.div>

                      {/* Branding Card */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        whileHover={{ y: -4, scale: 1.05 }}
                        className="bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg hover:shadow-xl cursor-pointer transition-all duration-300"
                      >
                        <div className="h-8 w-8 bg-pink-100 rounded-lg mb-2 flex items-center justify-center transition-colors duration-300 group-hover:bg-pink-200">
                          <div className="w-4 h-4 bg-pink-500 rounded-md transition-all duration-300 group-hover:scale-110" />
                        </div>
                        <div className="text-sm font-medium text-gray-900 transition-colors duration-300 group-hover:text-pink-600">Brand</div>
                        <div className="text-xs text-gray-600">Pro</div>
                      </motion.div>
                    </div>
                  </div>
            </div>
          </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                whileHover={{ scale: 1.2 }}
                className="absolute -top-6 -right-6 w-12 h-12 rounded-full border-4 border-dashed border-purple-200 hover:border-purple-300 transition-colors duration-300"
              />
              <motion.div
                animate={{
                  rotate: [0, -360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                whileHover={{ scale: 1.2 }}
                className="absolute -bottom-6 -left-6 w-16 h-16 rounded-full border-4 border-dashed border-blue-200 hover:border-blue-300 transition-colors duration-300"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="mt-16 flex flex-wrap justify-between items-center gap-8 py-6 border-t border-gray-200"
        >
          <div className="space-y-1">
            <div className="text-sm text-gray-600">Available From</div>
            <div className="text-base font-medium text-gray-900">Q2 2024</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-600">Based in</div>
            <div className="text-base font-medium text-gray-900">Bangladesh</div>
          </div>
          <div className="space-y-1">
            <div className="text-sm text-gray-600">Core Skills</div>
            <div className="text-base font-medium text-gray-900">Design & Development</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
