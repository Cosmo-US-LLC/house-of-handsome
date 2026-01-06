import SEO from "@/components/layout/SEO";
import FreshLook from "@/components/PageComponents/Services/FreshLook";
import TermsAndConditionsText from "@/components/PageComponents/TermsAndConditions/TermsAndConditionsTExt";
import React from "react";

function TermsAndConditions() {
  return (
    <>
      <SEO
        title="Terms of Service | User Agreement"
        description="Read our terms of service outlining user obligations, service limitations, and legal conditions."
      />
      <div>
        <TermsAndConditionsText />
        {/* <FreshLook /> */}
      </div>
    </>
  );
}

export default TermsAndConditions;
