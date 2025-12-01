import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook to detect if the page has been scrolled more than 4px
 * Used to add shadow to sticky header on scroll
 * Re-checks scroll position on route changes
 */
function useScrolled(threshold = 4) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > threshold;
      setScrolled((prevScrolled) => {
        // Only update if the value actually changed
        if (prevScrolled !== isScrolled) {
          return isScrolled;
        }
        return prevScrolled;
      });
    };

    // Check scroll position immediately when route changes
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, location.pathname]); // Re-run when route changes

  return scrolled;
}

export default useScrolled;
