import { useState, useEffect } from "react";

/**
 * Hook to detect if the page has been scrolled more than 4px
 * Used to add shadow to sticky header on scroll
 */
function useScrolled(threshold = 4) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > threshold;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, threshold]);

  return scrolled;
}

export default useScrolled;

