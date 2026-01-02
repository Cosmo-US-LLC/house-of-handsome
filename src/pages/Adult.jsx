import React from "react";
import AdultHero from "../components/PageComponents/Adult/AdultHero";
import WhyAdultsChoose from "../components/PageComponents/Adult/WhyAdultsChoose";
import AdultTestimonials from "../components/PageComponents/Adult/AdultTestimonials";
import StyleGallery from "../components/PageComponents/Adult/StyleGallery";
import WhatToExpect from "../components/PageComponents/Adult/WhatToExpect";
import ReadyForFreshLook from "../components/PageComponents/Adult/ReadyForFreshLook";
import SEO from "@/components/layout/SEO";

function Adult() {
  return (
    <>
      <SEO
        title="Adult Haircuts & Grooming | House of Handsome"
        description="Get a tailored haircut that suits your style at House of Handsome. Our expert barbers provide classic cuts, fades, shaves, and more, ensuring you look sharp every time."
      />

      <div>
        <AdultHero />
        <WhyAdultsChoose />
        <AdultTestimonials />
        <StyleGallery />
        <WhatToExpect />
        <ReadyForFreshLook
          title={"Ready for a fresh look?"}
          description={
            "Book your appointment and experience grooming made for you."
          }
        />
      </div>
    </>
  );
}

export default Adult;
