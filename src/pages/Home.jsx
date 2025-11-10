import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/PageComponents/Home/Hero";
import Experience from "../components/PageComponents/Home/Experience";
import Services from "../components/PageComponents/Home/Services";
import Locations from "../components/PageComponents/Home/Locations";
import OurStory from "../components/PageComponents/Home/OurStory";
import Gallery from "../components/PageComponents/Home/Gallery";
import Testimonials from "../components/PageComponents/Home/Testimonials";
import FoundersNote from "../components/PageComponents/Home/FoundersNote";
import FAQs from "../components/PageComponents/Home/FAQs";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Experience />
      <Services />
      <Locations />
      <OurStory />
      <Gallery />
      <Testimonials />
      <FoundersNote />
      <FAQs />
      <Footer />
    </div>
  );
}

export default Home;
