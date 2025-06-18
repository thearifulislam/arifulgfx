import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send, Heart, ArrowRight, Star } from "lucide-react";
import { toast } from "react-hot-toast";
import confetti from "canvas-confetti";
import EmotionalButton from "@/components/EmotionalButton";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import { z } from "zod";

// Form validation schema
const formSchema = z.object({
  senderName: z.string().min(2, "Name must be at least 2 characters"),
  senderEmail: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    senderName: "",
    senderEmail: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0]] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const launchConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      shapes: ["heart"],
      colors: ["#faad1b", "#344c36", "#F6A300"],
    };

    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
      scalar: 0.75,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      scalar: 1.2,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the form errors before submitting");
      return;
    }

    setIsSubmitting(true);
    setShowSuccessMessage(false);

    try {
      // Create message document
      const messageData = {
        senderName: formData.senderName,
        senderEmail: formData.senderEmail,
        phone: formData.phone || null,
        company: formData.company || null,
        subject: formData.subject,
        message: formData.message,
        createdAt: serverTimestamp(),
        isRead: false,
        isStarred: false,
        isArchived: false,
        isTrashed: false,
        lastUpdated: serverTimestamp()
      };

      const messageRef = await addDoc(collection(db, 'messages'), messageData);

      // Create notification
      await addDoc(collection(db, 'notifications'), {
        type: 'message',
        title: 'New Message',
        description: `New message from ${formData.senderName}`,
        createdAt: serverTimestamp(),
        isRead: false,
        messageId: messageRef.id
      });

      // Show success message
      toast.success('Message sent successfully! Thank you for contacting us.');
      setShowSuccessMessage(true);
      
      // Reset form
      setFormData({
        senderName: "",
        senderEmail: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
      });
      setErrors({});

      // Launch confetti
      launchConfetti();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-100/50 mb-6 hover:scale-105 transition-transform duration-300">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                  Let's Work Together
                </span>
              </span>
            </div>
            
            <div className="animate-fade-in-up delay-200">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Have a Project in Mind?
                <span className="block mt-2">Let's Make It Happen</span>
              </h1>
            </div>
            
            <div className="animate-fade-in-up delay-300">
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20" id="contact-form">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Information */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <h2 className="text-2xl font-bold mb-8 text-[#1a1a1a]">
                  Contact Information
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start group">
                    <div className="bg-[#1f2937] p-4 rounded-xl mr-4 transform group-hover:scale-110 transition-transform">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-[#1a1a1a]">Email</h3>
                      <a
                        href="mailto:acs.arifulislam@gmail.com"
                        className="text-gray-600 hover:text-[#1f2937] transition-colors"
                      >
                        acs.arifulislam@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="bg-[#1f2937] p-4 rounded-xl mr-4 transform group-hover:scale-110 transition-transform">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-[#1a1a1a]">Phone</h3>
                      <a
                        href="tel:+8801938434733"
                        className="text-gray-600 hover:text-[#1f2937] transition-colors"
                      >
                        +88 01938434733
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="bg-[#1f2937] p-4 rounded-xl mr-4 transform group-hover:scale-110 transition-transform">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-[#1a1a1a]">Location</h3>
                      <p className="text-gray-600">
                        Khulna, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-gray-100">
                  <h3 className="font-semibold text-lg mb-6 text-[#1a1a1a]">Connect With Me</h3>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://facebook.com/arifulislamofficialprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1f2937] p-3 rounded-xl text-white hover:bg-[#111827] transform hover:-translate-y-1 transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <FaFacebookF className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/_md._ariful_islam/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1f2937] p-3 rounded-xl text-white hover:bg-[#111827] transform hover:-translate-y-1 transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="h-5 w-5" />
                    </a>
                    <a
                      href="https://linkedin.com/in/arifulcreatorstudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1f2937] p-3 rounded-xl text-white hover:bg-[#111827] transform hover:-translate-y-1 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedinIn className="h-5 w-5" />
                    </a>
                    <a
                      href="https://behance.net/arifulcreatorstudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1f2937] p-3 rounded-xl text-white hover:bg-[#111827] transform hover:-translate-y-1 transition-all duration-300"
                      aria-label="Behance"
                    >
                      <FaBehance className="h-5 w-5" />
                    </a>
                    <a
                      href="https://dribbble.com/arifulcreatorstudio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1f2937] p-3 rounded-xl text-white hover:bg-[#111827] transform hover:-translate-y-1 transition-all duration-300"
                      aria-label="Dribbble"
                    >
                      <FaDribbble className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-12 w-1.5 bg-[#344c36] rounded-full" />
                    <h2 className="text-3xl font-bold text-[#1a1a1a]">Send Message</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="senderName" className="text-sm font-medium text-gray-700">
                        Your Name *
                      </label>
                      <Input
                        id="senderName"
                        name="senderName"
                        value={formData.senderName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className={`rounded-xl border-gray-200 focus:border-[#344c36] focus:ring-[#344c36] focus:ring-opacity-20 ${
                          errors.senderName ? 'border-red-500' : ''
                        }`}
                      />
                      {errors.senderName && (
                        <p className="text-sm text-red-500">{errors.senderName}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="senderEmail" className="text-sm font-medium text-gray-700">
                        Your Email *
                      </label>
                      <Input
                        id="senderEmail"
                        name="senderEmail"
                        type="email"
                        value={formData.senderEmail}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className={`rounded-xl border-gray-200 focus:border-[#344c36] focus:ring-[#344c36] focus:ring-opacity-20 ${
                          errors.senderEmail ? 'border-red-500' : ''
                        }`}
                      />
                      {errors.senderEmail && (
                        <p className="text-sm text-red-500">{errors.senderEmail}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="rounded-xl border-gray-200 focus:border-[#344c36] focus:ring-[#344c36] focus:ring-opacity-20"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-gray-700">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company Name"
                        className="rounded-xl border-gray-200 focus:border-[#344c36] focus:ring-[#344c36] focus:ring-opacity-20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Project Subject"
                      required
                      className={`rounded-xl border-gray-200 focus:border-[#344c36] focus:ring-[#344c36] focus:ring-opacity-20 ${
                        errors.subject ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700">
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className={`rounded-xl border-gray-200 focus:border-[#344c36] focus:ring-[#344c36] focus:ring-opacity-20 resize-none ${
                        errors.message ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  <EmotionalButton
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#1f2937] text-white hover:bg-[#111827] w-full md:w-auto px-8 py-4 rounded-xl font-semibold shadow-lg shadow-[#1f2937]/10 hover:shadow-xl hover:shadow-[#1f2937]/20 transform hover:-translate-y-0.5 transition-all"
                    emotionType="heart"
                    numEmotions={8}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </EmotionalButton>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-24">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block text-[#344c36] font-medium mb-4 px-4 py-2 bg-[#344c36]/5 rounded-full">
                Office Location
              </span>
              <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">Find Me Here</h2>
              <p className="text-gray-600">Visit my office or send me a letter!</p>
            </div>
            <div className="rounded-2xl overflow-hidden h-[400px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.251795164721!2d89.54032731427344!3d22.84564198502925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff9006e0e2e6e1%3A0x8e6e7c2b1b1b1b1b!2sKhulna%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1718030000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {showSuccessMessage && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg animate-fade-in-up">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span>Message Sent Successfully!</span>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Contact;
