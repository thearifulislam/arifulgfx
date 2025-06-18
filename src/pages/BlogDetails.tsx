import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { blogContents } from '../data/blogContents';
import styles from './BlogDetails.module.css';

const BlogDetails = () => {
  const { blogId } = useParams();
  const blog = blogContents[blogId as keyof typeof blogContents];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#f9f9f9]">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
          <p className="text-muted-foreground">The blog post you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Helmet>
        <title>{blog.title} | Your Blog Name</title>
        <meta name="description" content={blog.metaDescription} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:image" content={blog.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.metaDescription} />
        <meta name="twitter:image" content={blog.image} />
        <meta name="keywords" content={blog.tags.join(', ')} />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#344c36]/10 to-transparent">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm px-3 py-1 rounded-full bg-[#344c36]/10 text-[#344c36]">
                {blog.category}
              </span>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Clock className="h-4 w-4 mr-1" />
                <span>{blog.readTime}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {blog.title}
            </h1>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#344c36] flex items-center justify-center text-white">
                  <User className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <p className="font-medium">{blog.author}</p>
                  <p className="text-sm text-gray-500">Author</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Share2 className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Facebook className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Twitter className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <Linkedin className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className={`max-w-3xl mx-auto ${styles.prose}`}
          >
            {blog.content.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                {section.type === 'heading' ? (
                  <h2 className="text-2xl font-bold mt-8 mb-4">{section.content}</h2>
                ) : (
                  <p className="text-gray-700 mb-6 leading-relaxed">{section.content}</p>
                )}
              </motion.div>
            ))}
            
            {/* Tags */}
            <div className="mt-12 pt-6 border-t">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-b from-white to-[#344c36]/5">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-8">
              Get the latest insights on design, development, and AI delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow py-3 px-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#344c36]"
              />
              <button className="bg-[#344c36] text-white py-3 px-6 rounded-full font-medium hover:bg-[#2a3e2c] transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogDetails; 