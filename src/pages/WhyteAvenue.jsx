import SEO from "@/components/layout/SEO";
import Nav from "@/components/PageComponents/WhyteAvenue/Nav";
import Hero from "@/components/PageComponents/WhyteAvenue/Hero";
import HowItWorks from "@/components/PageComponents/WhyteAvenue/HowItWorks";
import Offers from "@/components/PageComponents/WhyteAvenue/Offers";
import WhyUs from "@/components/PageComponents/WhyteAvenue/WhyUs";
import Proof from "@/components/PageComponents/WhyteAvenue/Proof";
import Testimonials from "@/components/PageComponents/Home/Testimonials";
import FinalCTA from "@/components/PageComponents/WhyteAvenue/FinalCTA";
import Footer from "@/components/PageComponents/WhyteAvenue/Footer";

function WhyteAvenue() {
  return (
    <>
      <SEO
        title="House of Handsome Whyte Avenue | Edmonton Barbershop"
        description="Premium haircuts, skin fades, and grooming packages on Whyte Avenue, Edmonton. Book your appointment online with our award-winning barbers today."
      />
      <div className="bg-white font-['Urbanist']">
        <Nav />
        <Hero />
        <HowItWorks />
        <Offers />
        <WhyUs />
        <Proof />
        <Testimonials />
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
}

export default WhyteAvenue;
