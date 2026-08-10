import React from "react";
import SEO from "@/components/layout/SEO";
import Nav from "@/components/PageComponents/RedDeerBarberApplication/Nav";
import ApplicationForm from "@/components/PageComponents/RedDeerBarberApplication/ApplicationForm";

function RedDeerBarberApplication() {
  return (
    <>
      <SEO
        title="Barber / Hairstylist Job Application, Red Deer | House of Handsome"
        description="Apply to join House of Handsome's new Red Deer barbershop as a Barber/Hairstylist."
      />

      <div className="pt-16">
        <Nav />
        <ApplicationForm />
      </div>
    </>
  );
}

export default RedDeerBarberApplication;
