import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Layout from "./components/layout";
import Franchise from "./pages/Franchise";
import Services from "./pages/Services";
import Adult from "./pages/Adult";
import Teen from "./pages/Teen";
import Kids from "./pages/Kids";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top IMMEDIATELY when route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use 'instant' to jump immediately, not smooth scroll
    });

    // Kill all existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach((t) => t.kill());
    ScrollTrigger.clearScrollMemory && ScrollTrigger.clearScrollMemory();

    // Refresh ScrollTrigger after a small delay to recalculate positions
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/services" element={<Services />} />
          <Route path="/adult" element={<Adult />} />
          <Route path="/teen" element={<Teen />} />
          <Route path="/kids" element={<Kids />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
