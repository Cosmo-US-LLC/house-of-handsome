import SEO from "@/components/layout/SEO";
import TopBar from "@/components/PageComponents/CameronHeights/TopBar";
import Nav from "@/components/PageComponents/CameronHeights/Nav";
import Hero from "@/components/PageComponents/CameronHeights/Hero";
import About from "@/components/PageComponents/CameronHeights/About";
import Services from "@/components/PageComponents/CameronHeights/Services";
import MidCTA from "@/components/PageComponents/CameronHeights/MidCTA";
import Reviews from "@/components/PageComponents/CameronHeights/Reviews";
import FAQ from "@/components/PageComponents/CameronHeights/FAQ";
import FindUs from "@/components/PageComponents/CameronHeights/FindUs";
import FinalCTA from "@/components/PageComponents/CameronHeights/FinalCTA";
import Footer from "@/components/PageComponents/CameronHeights/Footer";

function CameronHeights() {
  return (
    <>
      <SEO
        title="House of Handsome Cameron Heights | Edmonton Barbershop"
        description="Premium haircuts, skin fades, and grooming packages in Cameron Heights, Edmonton. Book your appointment online with our award-winning barbers today."
      />
      <div className="bg-[#0e0b0a] font-['Urbanist']">
        <TopBar />
        <div className="h-16 sm:h-10" />
        <Nav />
        <Hero />
        <About />
        <Services />
        <MidCTA />
        <Reviews />
        <FAQ />
        <FindUs />
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
}

export default CameronHeights;
