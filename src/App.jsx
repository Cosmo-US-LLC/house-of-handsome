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
import Location from "./pages/Location";
import ContactUs from "./pages/ContactUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RedDeerFoundingMembership from "./pages/RedDeerFoundingMembership";
import RedDeerGiveaway from "./pages/RedDeerGiveaway";
import RedDeerGiveawayRules from "./pages/RedDeerGiveawayRules";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogTag from "./pages/BlogTag";
import BlogCategory from "./pages/BlogCategory";

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
          <Route path="/adults" element={<Adult />} />
          <Route path="/teens" element={<Teen />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/locations" element={<Location />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/red-deer-founding-membership"
            element={<RedDeerFoundingMembership />}
          />
          <Route path="/red-deer-giveaway" element={<RedDeerGiveaway />} />
          <Route
            path="/red-deer-giveaway-rules"
            element={<RedDeerGiveawayRules />}
          />
          <Route path="/our-edmonton-barbershop-blog" element={<Blog />} />
          <Route
            path="/our-edmonton-barbershop-blog/page/:pageNum"
            element={<Blog />}
          />
          <Route path="/tag/:tagSlug" element={<BlogTag />} />
          <Route path="/tag/:tagSlug/page/:pageNum" element={<BlogTag />} />
          <Route path="/category/:categorySlug" element={<BlogCategory />} />
          <Route
            path="/category/:categorySlug/page/:pageNum"
            element={<BlogCategory />}
          />
          <Route
            path="/category/uncategorized/:categorySlug"
            element={<BlogCategory />}
          />
          <Route
            path="/category/uncategorized/:categorySlug/page/:pageNum"
            element={<BlogCategory />}
          />
          <Route path="/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
