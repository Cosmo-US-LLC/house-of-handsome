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
  const scrollToTop = () => {
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  };

  ScrollTrigger.getAll().forEach((t) => t.kill());
  ScrollTrigger.clearScrollMemory && ScrollTrigger.clearScrollMemory();

  // Scroll after small delay
  const timer = setTimeout(scrollToTop, 100);

  // Also scroll after page load to catch dynamic content
  window.addEventListener('load', scrollToTop);

  return () => {
    clearTimeout(timer);
    window.removeEventListener('load', scrollToTop);
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
