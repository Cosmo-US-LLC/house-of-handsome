import React from "react";
import SEO from "@/components/layout/SEO";
import HeroEntry from "@/components/PageComponents/Giveaway/HeroEntry";
import TrustBar from "@/components/PageComponents/Giveaway/TrustBar";
import Badges from "@/components/PageComponents/Giveaway/Badges";
import DatesBar from "@/components/PageComponents/Giveaway/DatesBar";
import Prizes from "@/components/PageComponents/Giveaway/Prizes";
import HowItWorks from "@/components/PageComponents/Giveaway/HowItWorks";
import AboutStrip from "@/components/PageComponents/Giveaway/AboutStrip";
import Testimonials from "@/components/PageComponents/Home/Testimonials";
import FAQ from "@/components/PageComponents/Giveaway/FAQ";
import LegalNote from "@/components/PageComponents/Giveaway/LegalNote";

function RedDeerGiveaway() {
  return (
    <>
      <SEO
        title="Win Free Haircuts For A Year | House of Handsome Red Deer"
        description="Enter House of Handsome Red Deer's free giveaway for a chance to win free haircuts for a year. Free to enter, no purchase necessary. Ten runners-up win a free first cut and hot towel shave."
      />

      <div>
        <HeroEntry />
        <TrustBar />
        <Badges />
        <DatesBar />
        <Prizes />
        <HowItWorks />
        <AboutStrip />
        <Testimonials />
        <FAQ />
        <LegalNote />
      </div>
    </>
  );
}

export default RedDeerGiveaway;
