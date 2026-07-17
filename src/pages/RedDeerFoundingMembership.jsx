import React from "react";
import SEO from "@/components/layout/SEO";
import Hero from "@/components/PageComponents/FoundingMembership/Hero";
import AchievementsBand from "@/components/PageComponents/FoundingMembership/AchievementsBand";
import MembershipOffer from "@/components/PageComponents/FoundingMembership/MembershipOffer";
import HowItWorks from "@/components/PageComponents/FoundingMembership/HowItWorks";
import Gallery from "@/components/PageComponents/FoundingMembership/Gallery";
import Testimonials from "@/components/PageComponents/Home/Testimonials";
import Services from "@/components/PageComponents/FoundingMembership/Services";
import FounderNote from "@/components/PageComponents/FoundingMembership/FounderNote";
import FAQ from "@/components/PageComponents/FoundingMembership/FAQ";
import FinalCTA from "@/components/PageComponents/FoundingMembership/FinalCTA";
import StickyMobileCTA from "@/components/PageComponents/FoundingMembership/StickyMobileCTA";

function RedDeerFoundingMembership() {
  return (
    <>
      <SEO
        title="House of Handsome Red Deer | Founding 150 Membership"
        description="Become a Founding Member of House of Handsome Red Deer. $50 lifetime membership for the first 150 men: 20% off every service for life, a free head massage every visit, and priority booking."
      />

      <div className="pb-[72px] md:pb-0">
        <Hero />
        <AchievementsBand />
        <MembershipOffer />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <Services />
        <FounderNote />
        <FAQ />
        <FinalCTA />
      </div>

      <StickyMobileCTA />
    </>
  );
}

export default RedDeerFoundingMembership;
