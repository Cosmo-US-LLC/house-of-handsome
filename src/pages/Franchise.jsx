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

function Franchise() {
  return (
    <div>
      <FranchiseHero />
      <WhyPartner />
      <WhyInvestment />
      <HelpYouSucceed />
      <FiveStepProcess />
      <FranchiseModels />
      <BrandDifferentiators />
      <FranchiseSupport />
      <StrategicExpansion />
      <TakeFirstStep />
    </div>
  );
}

export default Franchise;
