const TermsAndConditionsText = ({ className = "" }) => {
  const sectionTitle =
    "text-[#000] text-center font-['Cairo'] text-[30px] font-normal leading-[28px] md:text-[48px] md:font-semibold md:leading-[44px]";

  const sectionHeading =
    "font-['Cairo'] text-[18px] md:text-[20px] font-semibold leading-[26px]  decoration-[1.62px] text-[#D82028]";

  const paragraph =
    "font-['Urbanist'] text-[14px] md:text-[16px] leading-[22px] mt-2";

  return (
    <div className={`w-full mb-12 mt-8 ${className}`}>
      {/* Page Title */}
      <h2 className={`${sectionTitle} mb-4`}>Terms & Conditions</h2>

      <div className="space-y-8 max-w-[1000px] mx-auto px-4">

        {/* Intro */}
        <p className={"font-['Urbanist'] text-[14px] md:text-[16px] max-w-[760px] mx-auto leading-[22px] text-center mt-2 mb-10"}>
          Welcome to House of Handsome (HOH). By using our services, visiting our
          website, or making a booking, you agree to comply with and be bound by
          the following terms and conditions. Please read them carefully.
        </p>

        {/* Section 1 */}
        <div>
          <h3 className={sectionHeading}>1. General Information</h3>
          <p className={paragraph}>
            House of Handsome provides high-quality grooming services, including
            haircuts, beard trims, and other personal care treatments. Our
            services are provided on a walk-in or appointment basis, subject to
            availability.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className={sectionHeading}>2. Booking and Payments</h3>
          <p className={paragraph}>
            All bookings can be made through our website, in-store, or by phone.
            Payment is due at the time of service unless otherwise specified.
            We accept various payment methods, including credit cards and digital
            payment platforms.
          </p>
          <p className={paragraph}>
            A cancellation fee may apply if an appointment is missed without at
            least 24 hours’ prior notice.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className={sectionHeading}>3. Appointments and Cancellations</h3>
          <p className={paragraph}>
            If you need to cancel or reschedule, please provide at least 24 hours’
            notice to avoid a cancellation fee.
          </p>
          <p className={paragraph}>
            Late arrivals may result in reduced service time or rescheduling,
            depending on availability.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h3 className={sectionHeading}>4. Services</h3>
          <p className={paragraph}>
            All grooming services are performed by trained professionals.
            Individual results may vary depending on hair type and condition.
          </p>
          <p className={paragraph}>
            House of Handsome reserves the right to modify or discontinue any
            service at its discretion.
          </p>
          <p className={paragraph}>
            Refunds are not provided once a service has been completed unless a
            service failure has occurred.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h3 className={sectionHeading}>5. Customer Responsibilities</h3>
          <p className={paragraph}>
            Please inform your barber of any allergies, skin sensitivities, or
            medical conditions prior to your appointment.
          </p>
          <p className={paragraph}>
            Clients are expected to behave respectfully. Inappropriate behaviour
            may result in termination of service without refund.
          </p>
          <p className={paragraph}>
            Clients must be 18 years or older. Minors must be accompanied by a
            parent or legal guardian.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h3 className={sectionHeading}>6. Privacy and Data Protection</h3>
          <p className={paragraph}>
            We collect personal information to manage bookings, payments, and
            improve our services. Your data will not be shared with third parties
            without consent, except where required by law.
          </p>
          <p className={paragraph}>
            By using our services, you agree to our Privacy Policy outlining how
            your data is handled and protected.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h3 className={sectionHeading}>7. Intellectual Property</h3>
          <p className={paragraph}>
            All website content, including logos, text, and imagery, is the
            property of House of Handsome and protected under copyright law.
          </p>
          <p className={paragraph}>
            You may not copy, reproduce, or distribute any content without
            written permission.
          </p>
        </div>

        {/* Section 8 */}
        <div>
          <h3 className={sectionHeading}>8. Liability</h3>
          <p className={paragraph}>
            House of Handsome is not responsible for injuries, allergic
            reactions, or damages resulting from services unless caused by
            negligence.
          </p>
          <p className={paragraph}>
            Liability is limited to the amount paid for the service received.
          </p>
        </div>

        {/* Section 9 */}
        <div>
          <h3 className={sectionHeading}>9. Changes to Terms</h3>
          <p className={paragraph}>
            We reserve the right to update these terms at any time. Changes will
            be published on our website and take effect immediately upon
            posting.
          </p>
        </div>

        {/* Section 10 */}
        <div>
          <h3 className={sectionHeading}>10. Governing Law</h3>
          <p className={paragraph}>
            These terms and conditions are governed by and interpreted in
            accordance with applicable local laws.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsText;
