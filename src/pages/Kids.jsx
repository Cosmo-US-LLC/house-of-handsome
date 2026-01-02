import React from "react";
import KidsHero from "../components/PageComponents/Kids/KidsHero";
import WhyParentsChoose from "../components/PageComponents/Kids/WhyParentsChoose";
import KidsTestimonials from "../components/PageComponents/Kids/KidsTestimonials";
import KidsStyleGallery from "../components/PageComponents/Kids/KidsStyleGallery";
import KidsWhatToExpect from "../components/PageComponents/Kids/KidsWhatToExpect";
import ReadyForFreshLook from "../components/PageComponents/Adult/ReadyForFreshLook";
import SEO from "@/components/layout/SEO";

function Kids() {
  return (
    <>
      <SEO
        title="Kids Haircuts & Grooming | House of Handsome"
        description="At House of Handsome, we offer stylish and comfortable haircuts for kids. Our friendly barbers make sure your child enjoys their visit while getting the perfect haircut."
      />

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
    </>
  );
}

export default Kids;
