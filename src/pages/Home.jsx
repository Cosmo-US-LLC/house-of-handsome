import React from "react";
import Header from "../components/layout/Header/Header";
import Hero from "../components/PageComponents/Home/Hero";
import Experience from "../components/PageComponents/Home/Experience";
import Services from "../components/PageComponents/Home/Services";
import Locations from "../components/PageComponents/Home/Locations";
import OurStory from "../components/PageComponents/Home/OurStory";
import Gallery from "../components/PageComponents/Home/Gallery";
import Testimonials from "../components/PageComponents/Home/Testimonials";
import FoundersNote from "../components/PageComponents/Home/FoundersNote";
import FAQs from "../components/PageComponents/Home/FAQs";
import Footer from "../components/layout/Footer/Footer";
import SEO from "@/components/layout/SEO";

function Home() {
  return (
    <>
      <SEO
        title="House of Handsome | Premium Barbering Services for All Ages"
        description="Discover exceptional barbering services at House of Handsome. Whether you're looking for a fresh haircut or a perfect shave, we offer high-quality grooming for men, women, teens, and kids. Book your appointment today!"
      />

      <div>
        <Hero />
        <Experience />
        <Services />
        <Locations
          titleLine1="Six Locations."
          titleLine2="One Standard."
          paragraphs={[
            "No matter where you are, you'll experience the same premium service at each of our six locations.",
            "Consistency, quality, and excellence, every time.",
          ]}
          buttonText="Book An Appointment"
        />
        <OurStory />
        <Gallery />
        <Testimonials />
        <FoundersNote />
        <FAQs />
      </div>
    </>
  );
}

export default Home;
