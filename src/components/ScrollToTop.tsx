
/* --- /src/components/ScrollToTop.tsx --- */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop scrolls window to top when location.pathname changes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Always scroll to top when route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
