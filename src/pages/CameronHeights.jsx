import { useHead } from "@unhead/react";
import SEO from "@/components/layout/SEO";
import {
  ADDRESS_PARTS,
  SCHEMA_OPENING_HOURS,
} from "@/components/PageComponents/CameronHeights/data";
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

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HairSalon"],
  name: "House of Handsome Barbershop - Cameron Heights",
  url: "https://www.houseofhandsome.ca/cameron-heights",
  telephone: "+1-780-489-0329",
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS_PARTS.street,
    addressLocality: ADDRESS_PARTS.city,
    addressRegion: ADDRESS_PARTS.region,
    postalCode: ADDRESS_PARTS.postalCode,
    addressCountry: "CA",
  },
  openingHoursSpecification: SCHEMA_OPENING_HOURS,
  sameAs: [
    "https://www.facebook.com/HouseofHandsomeCanada",
    "https://www.instagram.com/house.of.handsome.barbershop",
  ],
};

function CameronHeights() {
  useHead({
    script: [{ type: "application/ld+json", innerHTML: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }],
  });

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
