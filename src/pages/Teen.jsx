import React from "react";
import TeenHero from "../components/PageComponents/Teen/TeenHero";
import WhyTeensChoose from "../components/PageComponents/Teen/WhyTeensChoose";
import TeenTestimonials from "../components/PageComponents/Teen/TeenTestimonials";
import TeenStyleGallery from "../components/PageComponents/Teen/TeenStyleGallery";
import TeenWhatToExpect from "../components/PageComponents/Teen/TeenWhatToExpect";
import ReadyForFreshLook from "../components/PageComponents/Adult/ReadyForFreshLook";

function Teen() {
  return (
    <div>
      <TeenHero />
      <WhyTeensChoose />
      <TeenTestimonials />
      <TeenStyleGallery />
      <TeenWhatToExpect />
      <ReadyForFreshLook 
      title={"Ready for a fresh new look?"}
      description={"Book your trendy cut today."}
      />
    </div>
  );
}

export default Teen;

