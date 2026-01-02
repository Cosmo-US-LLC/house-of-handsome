import React from "react";
import WhyPartner from "../components/PageComponents/Franchise/WhyPartner";
import FranchiseHero from "../components/PageComponents/Franchise/FranchiseHero";
import WhyInvestment from "../components/PageComponents/Franchise/WhyInvestment";
import HelpYouSucceed from "../components/PageComponents/Franchise/HelpYouSucceed";
import FiveStepProcess from "../components/PageComponents/Franchise/FiveStepProcess";
import FranchiseModels from "../components/PageComponents/Franchise/FranchiseModels";
import BrandDifferentiators from "../components/PageComponents/Franchise/BrandDifferentiators";
import FranchiseSupport from "../components/PageComponents/Franchise/FranchiseSupport";
import StrategicExpansion from "../components/PageComponents/Franchise/StrategicExpansion";
import TakeFirstStep from "../components/PageComponents/Franchise/TakeFirstStep";
import SEO from "@/components/layout/SEO";

function Franchise() {
  return (
    <>
      <SEO
        title="Start Your Own Franchise with House of Handsome"
        description="Join the House of Handsome family by opening your own franchise. Learn about the benefits, training, and support that come with being a part of our successful brand."
      />

      <div>
        <FranchiseHero />
        <WhyPartner />
        <BrandDifferentiators />
        <WhyInvestment />
        <HelpYouSucceed />
        <FiveStepProcess />
        <FranchiseModels />
        <FranchiseSupport />
        <StrategicExpansion />
        <TakeFirstStep />
      </div>
    </>
  );
}

export default Franchise;
