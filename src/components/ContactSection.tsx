import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Send
} from "lucide-react";
import { useState } from "react";
import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from "react-hot-toast";
import { z } from "zod";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";

// Form validation schema
const formSchema = z.object({
  senderName: z.string().min(2, "Name must be at least 2 characters"),
  senderEmail: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const ContactSection = () => {
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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
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
        lastUpdated: serverTimestamp()
      };

      const messageRef = await addDoc(collection(db, 'messages'), messageData);

      // Create notification with server timestamp
      await addDoc(collection(db, 'notifications'), {
        type: 'message',
        title: 'New Message',
        description: `New message from ${formData.senderName}`,
        createdAt: serverTimestamp(),
        isRead: false,
        messageId: messageRef.id
      });

      toast.success('Message sent successfully!');
      
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

      launchConfetti();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#f9f9f9] to-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Talk for Your <span className="text-green bg-green/10 px-4 py-2 rounded-lg">Next Projects</span>
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Let's collaborate and bring your vision to life. Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <span className="bg-green/10 p-2 rounded-lg mr-3">
                  <Mail className="h-6 w-6 text-green" />
                </span>
                Contact Info
              </h3>

              <div className="space-y-6">
                <motion.div 
                  className="flex items-start transform hover:translate-x-2 transition-transform duration-300"
                  {...fadeInUp}
                >
                  <div className="bg-yellow/10 p-3 rounded-xl mr-4">
                    <Phone className="h-5 w-5 text-yellow" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <a
                      href="tel:01938434733"
                      className="font-medium text-black hover:text-green transition-colors duration-200"
                    >
                      +88 01938434733
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start transform hover:translate-x-2 transition-transform duration-300"
                  {...fadeInUp}
                >
                  <div className="bg-yellow/10 p-3 rounded-xl mr-4">
                    <Mail className="h-5 w-5 text-yellow" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a
                      href="mailto:acs.arifulislam@gmail.com"
                      className="font-medium text-black hover:text-green transition-colors duration-200"
                    >
                      acs.arifulislam@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start transform hover:translate-x-2 transition-transform duration-300"
                  {...fadeInUp}
                >
                  <div className="bg-yellow/10 p-3 rounded-xl mr-4">
                    <MapPin className="h-5 w-5 text-yellow" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="font-medium">Khulna, Bangladesh</p>
                  </div>
                </motion.div>
              </div>

              <div className="mt-12">
                <h4 className="text-lg font-semibold mb-6">Connect With Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: FaFacebookF, href: "https://facebook.com/arifulislamofficialprofile", label: "Facebook" },
                    { icon: FaInstagram, href: "https://www.instagram.com/_md._ariful_islam/", label: "Instagram" },
                    { icon: FaLinkedinIn, href: "https://linkedin.com/in/arifulcreatorstudio", label: "LinkedIn" },
                    { icon: FaBehance, href: "https://behance.net/arifulcreatorstudio", label: "Behance" },
                    { icon: FaDribbble, href: "https://dribbble.com/arifulcreatorstudio", label: "Dribbble" },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600/10 p-3 rounded-xl hover:bg-blue-600 text-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                      aria-label={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <h3 className="text-2xl font-semibold mb-8 flex items-center">
                <span className="bg-green/10 p-2 rounded-lg mr-3">
                  <Mail className="h-6 w-6 text-green" />
                </span>
                Send A Message
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <motion.div {...fadeInUp}>
                  <label
                    htmlFor="senderName"
                    className="block text-sm font-medium mb-2 text-gray-700"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="senderName"
                    name="senderName"
                    value={formData.senderName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.senderName ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-transparent transition-all duration-200`}
                    placeholder="John Doe"
                    required
                  />
                  {errors.senderName && (
                    <p className="mt-1 text-sm text-red-500">{errors.senderName}</p>
                  )}
                </motion.div>

                <motion.div {...fadeInUp}>
                  <label
                    htmlFor="senderEmail"
                    className="block text-sm font-medium mb-2 text-gray-700"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="senderEmail"
                    name="senderEmail"
                    value={formData.senderEmail}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.senderEmail ? 'border-red-500' : 'border-gray-200'
                    } focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-transparent transition-all duration-200`}
                    placeholder="john@example.com"
                    required
                  />
                  {errors.senderEmail && (
                    <p className="mt-1 text-sm text-red-500">{errors.senderEmail}</p>
                  )}
                </motion.div>

                <motion.div {...fadeInUp}>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2 text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-transparent transition-all duration-200"
                    placeholder="+1 (555) 123-4567"
                  />
                </motion.div>

                <motion.div {...fadeInUp}>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2 text-gray-700"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-transparent transition-all duration-200"
                    placeholder="Company Name"
                  />
                </motion.div>
              </div>

              <motion.div {...fadeInUp}>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2 text-gray-700"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.subject ? 'border-red-500' : 'border-gray-200'
                  } focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-transparent transition-all duration-200`}
                  placeholder="What's this about?"
                  required
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                )}
              </motion.div>

              <motion.div {...fadeInUp}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-gray-700"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.message ? 'border-red-500' : 'border-gray-200'
                  } focus:outline-none focus:ring-2 focus:ring-green/50 focus:border-transparent transition-all duration-200`}
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`mt-6 bg-gray-900 text-white px-8 py-4 rounded-xl font-medium flex items-center justify-center w-full md:w-auto
                  hover:bg-gray-800 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1
                  ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
