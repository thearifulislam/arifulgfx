import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Search, Calendar, ArrowRight, Clock, User } from "lucide-react";
import { motion } from "framer-motion";

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  
  const categories = [
    { id: "all", name: "All Posts" },
    { id: "graphic-design", name: "Graphic Design" },
    { id: "ui-design", name: "UI Design" },
    { id: "web-dev", name: "Web Development" },
    { id: "ai-tech", name: "AI Technology" },
    { id: "chatgpt", name: "ChatGPT" },
    { id: "ai-future", name: "Future of AI" }
  ];
  
  const blogPosts = [
    {
      id: "modern-graphic-design-trends-2024",
      title: "Modern Graphic Design Trends That Will Dominate 2024",
      excerpt: "Explore the cutting-edge graphic design trends that are shaping the visual landscape in 2024. From neo-brutalism to eco-friendly design, discover what's making waves in the industry.",
      category: "graphic-design",
      date: "January 15, 2024",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=2400",
      author: "Ariful Islam",
      readTime: "6 min read",
      tags: ["design trends", "graphic design", "2024 trends", "visual design"]
    },
    {
      id: "ui-design-principles-accessibility",
      title: "Essential UI Design Principles for Better Accessibility",
      excerpt: "Learn how to create inclusive user interfaces that work for everyone. This comprehensive guide covers WCAG guidelines, color contrast, and practical implementation tips.",
      category: "ui-design",
      date: "January 12, 2024",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=2400",
      author: "Ariful Islam",
      readTime: "8 min read",
      tags: ["UI design", "accessibility", "WCAG", "inclusive design"]
    },
    {
      id: "full-stack-development-2024",
      title: "Full Stack Development Roadmap for 2024",
      excerpt: "A comprehensive guide to becoming a full-stack developer in 2024. Covers essential technologies, best practices, and learning resources for aspiring developers.",
      category: "web-dev",
      date: "January 10, 2024",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=2400",
      author: "Ariful Islam",
      readTime: "10 min read",
      tags: ["web development", "full stack", "programming", "coding"]
    },
    {
      id: "ai-revolutionizing-design",
      title: "How AI is Revolutionizing the Design Industry",
      excerpt: "Discover how artificial intelligence is transforming design workflows, automating repetitive tasks, and enabling designers to focus on creativity and innovation.",
      category: "ai-tech",
      date: "January 8, 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21c1edcd845f?auto=format&fit=crop&q=80&w=2400",
      author: "Ariful Islam",
      readTime: "7 min read",
      tags: ["AI", "design", "automation", "future of design"]
    },
    {
      id: "chatgpt-productivity-guide",
      title: "ChatGPT: A Complete Guide to Boosting Your Productivity",
      excerpt: "Learn how to leverage ChatGPT effectively for various tasks, from content creation to coding assistance. Includes practical examples and best practices.",
      category: "chatgpt",
      date: "January 5, 2024",
      image: "https://images.unsplash.com/photo-1676299081847-82ec15127096?auto=format&fit=crop&q=80&w=2400",
      author: "Ariful Islam",
      readTime: "9 min read",
      tags: ["ChatGPT", "productivity", "AI tools", "workflow"]
    },
    {
      id: "ai-future-implications",
      title: "The Future of AI: Opportunities and Challenges Ahead",
      excerpt: "An in-depth analysis of AI's future trajectory, examining both its promising potential and the challenges we need to address as this technology evolves.",
      category: "ai-future",
      date: "January 3, 2024",
      image: "https://images.unsplash.com/photo-1677442136019-21c1edcd845f?auto=format&fit=crop&q=80&w=2400",
      author: "Ariful Islam",
      readTime: "11 min read",
      tags: ["AI future", "technology", "innovation", "challenges"]
    },
    {
      id: "ai-ethics-design",
      title: "Ethical Considerations in AI-Powered Design",
      excerpt: "Explore the ethical implications of using AI in design processes and how to ensure responsible implementation while maintaining human creativity.",
      category: "ai-tech",
      date: "December 30, 2023",
      image: "https://images.unsplash.com/photo-1677442136019-21c1edcd845f?auto=format&fit=crop&q=80&w=2400",
      author: "Ariful Islam",
      readTime: "8 min read",
      tags: ["AI ethics", "design ethics", "responsible AI", "creativity"]
    },
    {
      id: "web-development-ai-tools",
      title: "Top AI Tools Revolutionizing Web Development",
      excerpt: "Discover the most impactful AI-powered tools that are transforming web development workflows and improving code quality.",
      category: "web-dev",
      date: "December 28, 2023",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=2400",
      author: "Ariful Islam",
      readTime: "7 min read",
      tags: ["web development", "AI tools", "coding", "automation"]
    }
  ];
  
  // Filter blog posts by search query and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "all" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#344c36]/10 to-transparent">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Insights & <span className="text-[#344c36]">Perspectives</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Exploring the intersections of design, technology, and artificial intelligence through in-depth articles and analysis.
          </motion.p>
        </div>
      </section>
      
      {/* Blog Filters */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
          {/* Search bar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 relative"
          >
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-12 pr-4 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#344c36]"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </motion.div>
          
          {/* Category filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-10 flex flex-wrap justify-center gap-3"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-[#344c36] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>
          
          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/blogs/${post.id}`} className="group">
                  <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs px-3 py-1 rounded-full bg-[#344c36]/10 text-[#344c36]">
                          {categories.find(cat => cat.id === post.category)?.name}
                        </span>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="h-3 w-3 mr-1" />
                          <span>{post.date}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-[#344c36] transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-sm text-gray-500">
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-[#344c36] group-hover:text-[#344c36] transition-colors flex items-center">
                          Read more
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* No results */}
          {filteredPosts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <h3 className="text-xl font-semibold mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
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

export default Blogs;
