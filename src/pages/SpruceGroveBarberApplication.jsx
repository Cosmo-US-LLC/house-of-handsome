import React from "react";
import SEO from "@/components/layout/SEO";
import Nav from "@/components/PageComponents/SpruceGroveBarberApplication/Nav";
import ApplicationForm from "@/components/PageComponents/SpruceGroveBarberApplication/ApplicationForm";

function SpruceGroveBarberApplication() {
  return (
    <>
      <SEO
        title="Barber / Hairstylist Job Application, Spruce Grove | House of Handsome"
        description="Apply to join House of Handsome's new Spruce Grove barbershop as a Barber/Hairstylist."
      />

      <div className="pt-16">
        <Nav />
        <ApplicationForm />
      </div>
    </>
  );
}

export default SpruceGroveBarberApplication;
