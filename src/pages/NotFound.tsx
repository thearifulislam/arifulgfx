import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface LocationState {
  pageName?: string;
}

const NotFound = () => {
  const location = useLocation();
  // Try to get pageName from location state or fallback to generic
  const state = location.state as LocationState | null;
  // Try to extract page name from pathname if not provided
  let pageName = state?.pageName;
  if (!pageName && location.pathname && location.pathname !== "/404") {
    // Remove leading slash and replace dashes with spaces, capitalize
    const path = location.pathname.replace(/^\//, "");
    if (path) {
      pageName = path
        .split("/")
        .filter(Boolean)
        .map(
          (part) =>
            part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, " ")
        )
        .join(" / ");
    }
  }
  // Fallback
  if (!pageName) pageName = "Page";

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl w-full"
        >
          <div className="h-12 sm:h-20" />
          
          {/* Main content container */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-12 shadow-2xl border border-gray-100">
            {/* 404 Illustration */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 relative"
            >
              <div className="relative w-40 h-40 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-90 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl font-black text-white">404</span>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-gray-200 rounded-full blur-sm" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h1 className="text-4xl sm:text-5xl font-black mb-4 text-gray-900">
                Lost in Space?
              </h1>
              <h2 className="text-xl sm:text-2xl font-medium text-gray-700 mb-6">
                {pageName} Not Found
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
                Looks like you've ventured into uncharted territory. Let's get you back to familiar ground!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/" className="w-full sm:w-auto">
                  <Button
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#1f2937] text-white hover:bg-[#111827] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Beam Me Home
                  </Button>
                </Link>
                <Link to="/projects" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto px-8 py-3 rounded-xl border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Explore Projects
                  </Button>
                </Link>
              </div>

              <div className="mt-8 text-sm text-gray-500">
                Stuck in space?{" "}
                <a
                  href="mailto:support@example.com"
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Contact Mission Control
                </a>
              </div>
            </motion.div>
          </div>
          
          <div className="h-12 sm:h-20" />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
