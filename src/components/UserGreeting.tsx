
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const UserGreeting = () => {
  const [greeting, setGreeting] = useState("");
  const [username, setUsername] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Get current hour
    const hour = new Date().getHours();
    
    // Set greeting based on time of day
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }

    // Try to get username from localStorage, or use a default
    const savedUsername = localStorage.getItem("username") || "Guest";
    setUsername(savedUsername);
    
    // Hide greeting after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  // Move the greeting lower by increasing top offset
  return (
    <div className="fixed top-36 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-sm shadow-lg rounded-full py-2 px-5 flex items-center gap-2 animate-fade-in">
      <span className="text-sm font-medium">
        {greeting}, <span className="theme-color-secondary">{username}</span>!
      </span>
      <Heart className="h-4 w-4 text-red-500 fill-red-500 heart-bounce" />
    </div>
  );
};
export default UserGreeting;
