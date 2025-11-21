import React from "react";
import AdultHero from "../components/PageComponents/Adult/AdultHero";
import WhyAdultsChoose from "../components/PageComponents/Adult/WhyAdultsChoose";
import AdultTestimonials from "../components/PageComponents/Adult/AdultTestimonials";
import StyleGallery from "../components/PageComponents/Adult/StyleGallery";
import WhatToExpect from "../components/PageComponents/Adult/WhatToExpect";
import ReadyForFreshLook from "../components/PageComponents/Adult/ReadyForFreshLook";

function Adult() {
  return (
    <div>
      <AdultHero />
      <WhyAdultsChoose />
      <AdultTestimonials />
      <StyleGallery />
      <WhatToExpect />
      <ReadyForFreshLook />
    </div>
  );
}

export default Adult;
