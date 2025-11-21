import "./App.css";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Layout from "./components/layout";
import Franchise from "./pages/Franchise";
import Services from "./pages/Services";
import Adult from "./pages/Adult";
import Teen from "./pages/Teen";
import Kids from "./pages/Kids";

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          Franchise
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
