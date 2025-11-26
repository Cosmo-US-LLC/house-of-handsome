import React from "react";
import KidsHero from "../components/PageComponents/Kids/KidsHero";
import WhyParentsChoose from "../components/PageComponents/Kids/WhyParentsChoose";
import KidsTestimonials from "../components/PageComponents/Kids/KidsTestimonials";
import KidsStyleGallery from "../components/PageComponents/Kids/KidsStyleGallery";
import KidsWhatToExpect from "../components/PageComponents/Kids/KidsWhatToExpect";
import ReadyForFreshLook from "../components/PageComponents/Adult/ReadyForFreshLook";

function Kids() {
  return (
    <div>
      <KidsHero />
      <WhyParentsChoose />
      <KidsTestimonials />
      <KidsStyleGallery />
      <KidsWhatToExpect />
      <ReadyForFreshLook
      title={"Ready for an easy, happy haircut?"}
      description={"Book your child’s appointment today."}
      />
    </div>
  );
}

export default Kids;

