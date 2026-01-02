import OpeningHours from "../components/PageComponents/AboutUs/OpeningHours";
import AboutUsHero from "../components/PageComponents/AboutUs/AboutUsHero";
import React from "react";
import GroomingServices from "../components/PageComponents/AboutUs/GroomingServices";
import Locations from "../components/PageComponents/Home/Locations";
import MeetOurBarbers from "../components/PageComponents/AboutUs/MeetOurBarbers";
import SEO from "@/components/layout/SEO";

function AboutUs() {
  return (
    <>
      <SEO
        title="About House of Handsome | The Story Behind Our Barbering Excellence"
        description="Learn more about House of Handsome’s commitment to quality, style, and exceptional service. Get to know our experienced barbers and discover why we're the go-to destination for all your grooming needs."
      />

      <div>
        <AboutUsHero />
        <MeetOurBarbers />
        <OpeningHours />
        <GroomingServices />
        <Locations
          titleLine1="Locations"
          titleLine2=""
          paragraphs={[
            "At <strong>House of Handsome</strong>, we’re proud to offer our premium grooming services at multiple convenient locations.",
            "Visit us today and experience the exceptional style and service that has made us Canada’s top barbershop.",
            "Find the location nearest to you below and book your appointment today!",
          ]}
          buttonText="Book An Appointment"
        />
      </div>
    </>
  );
}

export default AboutUs;
