import OpeningHours from "../components/PageComponents/AboutUs/OpeningHours";
import AboutUsHero from "../components/PageComponents/AboutUs/AboutUsHero";
import React from "react";
import GroomingServices from "../components/PageComponents/AboutUs/GroomingServices";
import Locations from "../components/PageComponents/Home/Locations";
import MeetOurBarbers from "../components/PageComponents/AboutUs/MeetOurBarbers";

function AboutUs() {
  return (
    <div>
      <AboutUsHero />
      <MeetOurBarbers />
      <OpeningHours />
      <GroomingServices />
      <Locations
        titleLine1="Locations."
        titleLine2=""
        paragraphs={[
          "At <strong>House of Handsome</strong>, we’re proud to offer our premium grooming services at multiple convenient locations.",
          "Visit us today and experience the exceptional style and service that has made us Canada’s top barbershop.",
          "Find the location nearest to you below and book your appointment today!",
        ]}
        buttonText="Book An Appointments"
      />
    </div>
  );
}

export default AboutUs;
