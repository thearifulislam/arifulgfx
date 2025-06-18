
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Calendar, Clock, User, Tag, ArrowRight, Facebook, Twitter, Linkedin, Copy } from "lucide-react";

const BlogPost = () => {
  const { blogId } = useParams<{ blogId: string }>();
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);
  
  // Blog data (in a real app, this would come from an API)
  const blogData = {
    "principles-of-ui-design": {
      title: "10 Principles of Effective UI Design",
      excerpt: "Explore the core principles that guide effective user interface design and learn how to apply them to your projects.",
      category: "ui-ux",
      date: "October 15, 2023",
      image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=2400",
      author: "Ariful Islam",
      readTime: "5 min read",
      content: `
        <p>In the world of digital design, creating interfaces that are both beautiful and functional is key to success. User Interface (UI) design principles guide designers in creating experiences that are intuitive, efficient, and enjoyable for users. Here are 10 fundamental principles that can help elevate your UI design:</p>
        
        <h2>1. Clarity</h2>
        <p>The interface should be clear and easy to understand. Eliminate ambiguity and make sure users can quickly grasp how to interact with your design. Use straightforward language, intuitive icons, and visible elements.</p>
        
        <h2>2. Consistency</h2>
        <p>Maintain consistency throughout the interface in terms of visual elements, interaction patterns, and terminology. Consistency creates familiarity, reduces learning curves, and builds trust with users. This applies to everything from button styles to navigation patterns.</p>
        
        <h2>3. Visual Hierarchy</h2>
        <p>Establish a clear visual hierarchy to guide users through your interface. Use size, color, contrast, and spacing to emphasize important elements and create a logical flow. The most important information should stand out while less important details should recede.</p>
        
        <h2>4. Feedback</h2>
        <p>Provide clear feedback for user actions. Users should know when an action has been completed or if something has gone wrong. This can be through visual cues, animations, or notifications.</p>
        
        <h2>5. Simplicity</h2>
        <p>Embrace simplicity by removing unnecessary elements and streamlining the interface. Focus on the essential features and content. Remember, simplicity isn't about removing functionality but about making it accessible without overwhelming the user.</p>
        
        <h2>6. Accessibility</h2>
        <p>Design with accessibility in mind to ensure your interface can be used by people with different abilities. This includes considerations for color contrast, text size, keyboard navigation, and screen reader compatibility.</p>
        
        <h2>7. User Control</h2>
        <p>Give users a sense of control over the interface. They should be able to navigate freely, undo actions, and exit unwanted states. Avoid forcing users into paths they didn't choose.</p>
        
        <h2>8. Efficiency</h2>
        <p>Optimize your interface for efficiency by minimizing steps required to complete tasks. Use shortcuts, defaults, and predictive features to speed up interactions for experienced users while still accommodating beginners.</p>
        
        <h2>9. Forgiveness</h2>
        <p>Design interfaces that forgive mistakes. Users should be able to easily recover from errors, with clear guidance on how to fix problems. Provide confirmation for irreversible actions and make it easy to undo mistakes.</p>
        
        <h2>10. Context Awareness</h2>
        <p>Consider the context in which your interface will be used. This includes different devices, environments, and user scenarios. Adapt your design to accommodate various contexts while maintaining a consistent experience.</p>
        
        <h2>Applying These Principles</h2>
        <p>While these principles provide a solid foundation, remember that every project has unique requirements. Use these principles as guidelines but be prepared to adapt them based on user research, testing, and specific project needs.</p>
        
        <p>The most effective UI designs are those that balance these principles with creativity and a deep understanding of the user's needs. By keeping these principles in mind throughout your design process, you'll create interfaces that not only look beautiful but also provide meaningful and effective user experiences.</p>
      `,
      tags: ["UI Design", "Design Principles", "User Experience", "Web Design"],
      relatedPosts: ["mobile-first-approach", "color-theory", "typography-basics"]
    },
    // Add more blog posts here
  };
  
  // Get current blog data
  const blog = blogId ? blogData[blogId as keyof typeof blogData] : undefined;
  
  // Get related posts
  const getRelatedPosts = () => {
    if (!blog?.relatedPosts) return [];
    
    return blog.relatedPosts.map(id => {
      const related = blogData[id as keyof typeof blogData];
      return related ? {
        id,
        title: related.title,
        image: related.image,
        date: related.date,
        category: related.category
      } : null;
    }).filter(Boolean);
  };
  
  if (!blog) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 md:px-8 pt-40 pb-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog post not found</h1>
          <p className="mb-8">The article you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/blogs" 
            className="inline-flex items-center theme-bg-primary text-white px-6 py-3 rounded-full font-medium"
          >
            Back to Blog
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <Navbar />
      
      {/* Blog Header */}
      <section className="pt-32 pb-12 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-sm font-medium">
              {blog.category === "ui-ux" ? "UI/UX Design" : blog.category}
            </span>
            <div className="flex items-center text-sm text-muted-foreground">
              <User className="h-4 w-4 mr-1" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              <span>{blog.readTime}</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{blog.title}</h1>
          
          <p className="text-xl text-muted-foreground">{blog.excerpt}</p>
        </div>
      </section>
      
      {/* Blog Featured Image */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Main content */}
            <div className="md:col-span-8">
              <div 
                className="prose"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
              
              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center flex-wrap gap-2">
                  <Tag className="h-5 w-5 text-muted-foreground mr-2" />
                  {blog.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Share */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                <div className="flex gap-3">
                  <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </button>
                  <button className="p-3 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </button>
                  <button className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </button>
                  <button className="p-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors">
                    <Copy className="h-5 w-5" />
                  </button>
                </div>
              </div>
              
              {/* Author Bio */}
              <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Ariful Islam" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{blog.author}</h3>
                    <p className="text-sm text-muted-foreground">Senior Product Designer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  Ariful is a senior product designer with over 18 years of experience in UI/UX design, 
                  focusing on creating intuitive interfaces that balance beauty and functionality.
                </p>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="md:col-span-4">
              <div className="sticky top-32">
                {/* Related Posts */}
                <div className="bg-white p-6 rounded-2xl shadow-sm mb-8">
                  <h3 className="text-lg font-semibold mb-6">Related Articles</h3>
                  <div className="space-y-6">
                    {getRelatedPosts().map((post, index) => (
                      <Link to={`/blogs/${post.id}`} key={index} className="group flex gap-4">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-20 h-20 rounded-lg object-cover"
                        />
                        <div>
                          <h4 className="font-medium line-clamp-2 group-hover:text-[var(--color-secondary)] transition-colors">
                            {post.title}
                          </h4>
                          <div className="text-xs text-muted-foreground mt-1">{post.date}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link 
                    to="/blogs" 
                    className="mt-6 inline-flex items-center text-sm font-medium theme-color-primary hover:text-[var(--color-secondary)] transition-colors"
                  >
                    View all articles
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
                
                {/* Categories */}
                <div className="bg-white p-6 rounded-2xl shadow-sm">
                  <h3 className="text-lg font-semibold mb-6">Categories</h3>
                  <div className="space-y-3">
                    {["UI/UX Design", "Web Design", "App Design", "Branding", "Design Trends"].map((category, index) => (
                      <Link 
                        to={`/blogs?category=${category.toLowerCase().replace(/\s+/g, '-')}`} 
                        key={index}
                        className="flex items-center justify-between hover:text-[var(--color-secondary)] transition-colors"
                      >
                        <span>{category}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to My Newsletter</h2>
          <p className="text-muted-foreground mb-8">
            Get the latest design insights, trends, and tips delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow py-3 px-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]"
            />
            <button className="theme-bg-secondary text-white py-3 px-6 rounded-full font-medium hover:theme-bg-primary transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
