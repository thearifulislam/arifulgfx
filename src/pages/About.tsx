import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Calendar,
  Mail,
  MapPin,
  Phone,
  CheckCircle,
  Star,
  Award,
  Users,
} from "lucide-react";

import me from "../assets/profile/Untitled design.png"
import cv from "../assets/resume/Ariful islam.pdf"

function useCountUp(to: number, duration = 1200, start = 0) {
  const [count, setCount] = useState(start);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.round(progress * (to - start) + start));
      if (progress < 1) {
        raf.current = requestAnimationFrame(animate);
      } else {
        setCount(to);
      }
    };
    raf.current = requestAnimationFrame(animate);
    return () => raf.current && cancelAnimationFrame(raf.current);
  }, [to, duration, start]);
  return count;
}

const About = () => {
  const experiences = [
    {
      period: "2020 - 2021",
      title: "Graphic Designer",
      company: "Learning & Earning Development Project - LEDP",
      description:
        "Worked on various design projects including branding, marketing materials, and digital content. Collaborated with cross-functional teams to deliver high-quality designs.",
    },
  ];
  
  const skills = [
    {
      category: "Design",
      items: [
        "UI/UX Design",
        "Graphic Deisgn",
        "Brand Identity Design",
        "Social Media Kit",
        "Packaging Design",
        "Image Editing",
      ],
    },
    {
      category: "Tools",
      items: [
        "Figma",
        "Adobe XD",
        "Photopea",
        "Adobe Photoshop",
        "Adobe Illustrator",
        "Adobe Indesign",
      ],
    },
    {
      category: "Knowledge",
      items: [
        "User Research",
        "Problem Solving",
        "Information Architecture",
        "Creative Thinking",
        "Project Management",
      ],
    },
  ];
  
  const education = [
    {
      period: "2024 - Running",
      degree: "BSC In CSE",
      institution: "Northarn University Of Business And Technology",
      location: "Khulna, Bangladesh",
    },
    {
      period: "2019 - 2023",
      degree: "Diploma In Computer Engineering",
      institution: "BCMC College of Engineering & Technology",
      location: "Jashore, Khulna, Bangladesh",
    },
    {
      period: "2019",
      degree: "Secondary School Certificate (SSC)",
      institution: "Kazir Pagla A.T. Institution",
      location: "Kazir Pagla, Munshiganj, Dhaka, Bangladesh",
    },
  ];

  const years = useCountUp(4, 950, 0);
  const projects = useCountUp(100, 1300, 0);
  const industries = useCountUp(50, 1250, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">Creative Designer</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Crafting Digital <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experiences</span>
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Hi, I'm Ariful, a passionate Graphic Designer with over 4 years of
                experience in brand design. I specialize in creating unique brand
                identities and delivering exceptional design solutions that help
                businesses thrive in today's competitive market.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mb-10">
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg shadow-blue-600/5 hover:shadow-purple-600/10 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {years}+
                  </div>
                  <div className="text-sm text-gray-600">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg shadow-blue-600/5 hover:shadow-purple-600/10 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {projects}+
                  </div>
                  <div className="text-sm text-gray-600">
                    Projects
                  </div>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl shadow-lg shadow-blue-600/5 hover:shadow-purple-600/10 transition-all duration-300">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {industries}+
                  </div>
                  <div className="text-sm text-gray-600">
                    Industries
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={cv}
                  download="Ariful_Islam_Resume.pdf"
                  className="inline-flex items-center bg-[#1f2937] text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all duration-300"
                >
                  Download Resume
                  <Download className="ml-2 h-5 w-5" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full font-medium hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Profile Image with Decorative Elements */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3"></div>
              <div className="relative z-10 bg-white rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={me}
                  alt="Ariful Islam - About Me"
                  className="w-full h-auto object-cover rounded-3xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-600/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My experience spans across various design disciplines, helping businesses
              achieve their goals through creative solutions.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg shadow-blue-600/5 hover:shadow-purple-600/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="flex items-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-4 py-2 rounded-full">
                      <Calendar className="text-blue-600 mr-2" size={18} />
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">{exp.period}</span>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-purple-600 font-medium mb-4">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive set of skills that enable me to deliver exceptional design solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillSet, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg shadow-blue-600/5 hover:shadow-purple-600/10 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {skillSet.category}
                </h3>
                <ul className="space-y-4">
                  {skillSet.items.map((skill, idx) => (
                    <li key={idx} className="flex items-start group">
                      <CheckCircle className="h-6 w-6 text-blue-600 group-hover:text-purple-600 mr-3 mt-0.5 group-hover:scale-110 transition-all" />
                      <span className="text-lg text-gray-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              My academic journey that has shaped my professional growth
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl shadow-lg shadow-blue-600/5 hover:shadow-purple-600/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/4">
                    <div className="flex items-center bg-gradient-to-r from-blue-600/10 to-purple-600/10 px-4 py-2 rounded-full">
                      <Calendar className="text-blue-600 mr-2" size={18} />
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">{edu.period}</span>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
                    <p className="text-purple-600 font-medium mb-4">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600">{edu.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5"></div>
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Let's discuss how we can work together to bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg shadow-blue-600/5 hover:shadow-purple-600/10 transition-all duration-300 text-center group">
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-4 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform">
                <Mail className="h-8 w-8 text-blue-600 group-hover:text-purple-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a
                href="mailto:acs.arifulislam@gmail.com"
                className="text-gray-600 hover:text-purple-600 transition-colors text-lg"
              >
                acs.arifulislam@gmail.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg shadow-blue-600/5 hover:shadow-purple-600/10 transition-all duration-300 text-center group">
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-4 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform">
                <Phone className="h-8 w-8 text-blue-600 group-hover:text-purple-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a
                href="tel:+8801938434733"
                className="text-gray-600 hover:text-purple-600 transition-colors text-lg"
              >
                +88 01938-434733
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg shadow-blue-600/5 hover:shadow-purple-600/10 transition-all duration-300 text-center group">
              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-4 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="h-8 w-8 text-blue-600 group-hover:text-purple-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600 text-lg">Khulna, Bangladesh</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-white/90 text-lg">
            Let's collaborate to create an amazing digital experience that
            achieves your business goals and delights your users.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-[#1f2937] px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 text-lg"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
