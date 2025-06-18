import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Login from './pages/Login';
import Messages from './components/Messages';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import DashboardLayout from './components/dashboard/DashboardLayout';
import NotFound from "./pages/NotFound";
import FloatingButtons from './components/FloatingButtons';
import ScrollToTop from './components/ScrollToTop';

const AppRoutes = () => (
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Index />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/projects/:projectId" element={<ProjectDetails />} />
    <Route path="/services" element={<Services />} />
    <Route path="/services/:serviceId" element={<ServiceDetails />} />
    <Route path="/about" element={<About />} />
    <Route path="/blogs" element={<Blogs />} />
    <Route path="/blogs/:blogId" element={<BlogPost />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/login" element={<Login />} />
    
    {/* Protected Dashboard Route */}
    <Route
      path="/dashboard/*"
      element={
        <ProtectedRoute>
          <DashboardLayout>
            <Messages activeFilter="inbox" />
          </DashboardLayout>
        </ProtectedRoute>
      }
    />
    
    {/* 404 Page */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

const App = () => (
  <Router>
    <AuthProvider>
      <ScrollToTop />
      <Toaster />
      <FloatingButtons />
      <AppRoutes />
    </AuthProvider>
  </Router>
);

export default App;
