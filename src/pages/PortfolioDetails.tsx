import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Search, 
  Share2, 
  Calendar, 
  Clock, 
  User, 
  ChevronRight,
  ArrowUp
} from "lucide-react";
import { 
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ToggleGroup, 
  ToggleGroupItem 
} from "@/components/ui/toggle-group";
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface SubFilterMap {
  [key: string]: string[];
}

// Sample project data
const projectData = {
  title: "E-commerce Mobile App UI Design",
  author: "Olivia Smith",
  date: "April 15, 2024",
  readTime: "8 min read",
  intro: "A comprehensive mobile shopping experience designed with a focus on user experience, accessibility, and conversion optimization. This project showcases modern UI patterns for e-commerce.",
  tags: ["App Design", "UI/UX", "E-commerce"],
  heroImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2400",
  content: `
    <h2>Project Overview</h2>
    <p>This e-commerce app was designed for a leading fashion retailer looking to improve their mobile shopping experience. The primary goals were to increase conversion rates, simplify the checkout process, and create a visually engaging browsing experience.</p>
    
    <h2>Design Process</h2>
    <p>The design process began with extensive user research, including interviews with existing customers and analysis of competitor apps. Key pain points were identified in the existing shopping flow, particularly around product filtering, checkout, and account creation.</p>
    
    <h2>User Research</h2>
    <p>Through user interviews and usability testing, we identified several key insights that informed our design decisions:</p>
    <ul>
      <li>Users wanted an easier way to filter products by size and color</li>
      <li>The checkout process was considered too lengthy</li>
      <li>Users valued high-quality product images above all other content</li>
      <li>Many users abandoned carts when shipping costs were revealed late in checkout</li>
    </ul>
    
    <h2>Tools Used</h2>
    <p>This project was created using Figma for UI design, with prototyping done using Prototype in Figma. User testing was conducted using UserTesting.com, and analytics were gathered through Hotjar.</p>
    
    <h2>Final Outcome</h2>
    <p>The redesigned app resulted in a 38% increase in conversion rates, a 42% decrease in cart abandonment, and significantly higher user satisfaction scores in post-launch surveys.</p>
  `,
  images: [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2400",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2400",
    "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&q=80&w=2400",
  ],
  clientQuote: {
    text: "Olivia transformed our outdated app into a modern shopping experience that our customers love. The attention to detail and thoughtful UX solutions have had a tangible impact on our business.",
    author: "Jane Cooper",
    position: "Chief Digital Officer, Fashion Forward"
  }
};

// Related projects data
const relatedProjects = [
  {
    id: 1,
    title: "Finance Dashboard Design",
    thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80&w=2400",
    description: "Modern analytics dashboard for financial data visualization",
    tags: ["Dashboard", "Fintech"]
  },
  {
    id: 2,
    title: "Healthcare Mobile App",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=2400",
    description: "Patient-centered app for medical appointment scheduling and health tracking",
    tags: ["App Design", "Health"]
  },
  {
    id: 3,
    title: "SaaS Website Redesign",
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=2400",
    description: "Complete website overhaul for a growing software company",
    tags: ["Website Design", "SaaS"]
  }
];

const PortfolioDetails = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [isSubFilterOpen, setIsSubFilterOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  
  const mainFilters = ["All", "App Design", "Website Design", "Dashboard", "Wireframe", "UI/UX", "Branding"];
  
  const subFilters: SubFilterMap = {
    "App Design": ["Fintech", "E-commerce", "Health", "SaaS", "Education"],
    "Website Design": ["Corporate", "Portfolio", "E-commerce", "Blog", "Landing Page"],
    "Dashboard": ["Analytics", "Finance", "CRM", "Admin Panel", "Monitoring"],
    "Wireframe": ["Low Fidelity", "High Fidelity", "Mobile", "Desktop", "Web App"],
    "UI/UX": ["Mobile", "Web", "Design System", "User Flow", "Prototyping"],
    "Branding": ["Logo", "Identity", "Guidelines", "Marketing", "Packaging"]
  };
  
  // Handle scroll for back to top button
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true);
    } else {
      setShowBackToTop(false);
    }
  };
  
  // Add scroll event listener
  useState(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    if (filter !== "All" && subFilters[filter]) {
      setIsSubFilterOpen(true);
    } else {
      setIsSubFilterOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 md:px-8 mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="#portfolio">Portfolio</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>{projectData.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        
        {/* Hero Image */}
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden mb-10 relative">
          <img 
            src={projectData.heroImage} 
            alt={projectData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute top-6 left-6 bg-yellow rounded-full px-4 py-1 text-sm font-medium">
            {projectData.tags[0]}
          </div>
        </div>
        
        {/* Project Title & Meta Info */}
        <div className="container mx-auto px-4 md:px-8 mb-12">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black-soft mb-4 md:mb-0">
              {projectData.title}
            </h1>
            <Button variant="outline" className="flex items-center gap-2">
              <Share2 className="w-4 h-4" /> Share
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{projectData.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{projectData.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{projectData.readTime}</span>
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8">
            {projectData.intro}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {projectData.tags.map((tag, index) => (
              <span key={index} className="bg-muted px-3 py-1 rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* Filters Section */}
        <div className="container mx-auto px-4 md:px-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search projects..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 max-w-xs"
              />
            </div>
            
            <Tabs defaultValue="grid" className="w-full md:w-auto">
              <TabsList>
                <TabsTrigger value="grid">Grid</TabsTrigger>
                <TabsTrigger value="list">List</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          {/* Main Filters */}
          <div className="overflow-x-auto pb-2">
            <ToggleGroup type="single" className="inline-flex min-w-full md:min-w-0 space-x-1">
              {mainFilters.map((filter) => (
                <ToggleGroupItem 
                  key={filter} 
                  value={filter}
                  onClick={() => handleFilterClick(filter)}
                  className={`${activeFilter === filter ? 'bg-yellow text-black-soft' : ''}`}
                >
                  {filter}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>
          
          {/* Sub Filters */}
          <Collapsible open={isSubFilterOpen} className="mt-4">
            <CollapsibleContent>
              {activeFilter !== "All" && subFilters[activeFilter] && (
                <div className="bg-muted p-4 rounded-md">
                  <div className="flex flex-wrap gap-2">
                    {subFilters[activeFilter].map((subFilter) => (
                      <Button 
                        key={subFilter} 
                        variant="ghost" 
                        size="sm"
                        className="rounded-full hover:bg-yellow hover:text-black-soft"
                      >
                        {subFilter}
                      </Button>
                    ))}
                  </div>
                </div>
              )}
            </CollapsibleContent>
          </Collapsible>
        </div>
        
        {/* Content Section */}
        <div className="container mx-auto px-4 md:px-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: projectData.content }} />
              
              {/* Client Quote */}
              <div className="bg-muted p-6 rounded-lg my-10 border-l-4 border-yellow">
                <p className="text-lg italic mb-4">"{projectData.clientQuote.text}"</p>
                <div>
                  <p className="font-medium">{projectData.clientQuote.author}</p>
                  <p className="text-sm text-muted-foreground">{projectData.clientQuote.position}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {/* Project Images */}
              <div className="space-y-4">
                {projectData.images.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                    <img 
                      src={image} 
                      alt={`Project image ${index + 1}`} 
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Projects Section */}
        <div className="container mx-auto px-4 md:px-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((project) => (
              <div key={project.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-muted px-2 py-1 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link to="/portfolio-details">
                    <Button variant="outline">View Details</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Back to Portfolio */}
        <div className="container mx-auto px-4 md:px-8 mb-16 flex justify-center">
          <Link to="/#portfolio">
            <Button className="gap-2">
              <ArrowLeft className="w-4 h-4" /> Back to Portfolio
            </Button>
          </Link>
        </div>
      </main>
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
      
      <Footer />
    </div>
  );
};

export default PortfolioDetails;
