import SEO from "@/components/layout/SEO";
import FreshLook from "@/components/PageComponents/Services/FreshLook";
import ServicesHero from "@/components/PageComponents/Services/ServicesHero";
import ServicesTypes from "@/components/PageComponents/Services/ServicesTypes";
import TakeFirstStep from "@/components/PageComponents/Services/TakeFirstStep";
import React from "react";

function Services() {
  return (
    <>
    <SEO
  title="Barbering Services | House of Handsome"
  description="Explore the range of premium barbering services at House of Handsome, including haircuts, shaves, fades, beard grooming, and more. Your grooming experience is our priority."
/>


    <div>
     <ServicesHero />
     <ServicesTypes />
     {/* <TakeFirstStep /> */}
     <FreshLook />
      
    </div>
    </>
  );
}

export default Services;
