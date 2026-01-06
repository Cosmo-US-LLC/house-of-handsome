import SEO from "@/components/layout/SEO";
import PrivacyPolicyText from "@/components/PageComponents/PrivacyPolicy/PrivacyPolicyText";
import FreshLook from "@/components/PageComponents/Services/FreshLook";
import React from "react";

function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Data Protection & Privacy"
        description="Understand how your data is collected, used, and protected when you interact with our services."
      />
      <div>
        <PrivacyPolicyText />
        {/* <FreshLook /> */}
      </div>
    </>
  );
}

export default PrivacyPolicy;
