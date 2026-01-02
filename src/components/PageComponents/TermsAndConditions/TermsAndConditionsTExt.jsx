const TermsAndConditionsText = ({ className = "" }) => {
  const sectionTitle =
    "text-[#000] text-center font-['Cairo'] text-[30px] font-semibold leading-[28px] md:text-[48px] md:font-bold md:leading-[44px]";

  const sectionHeading =
    "font-['Cairo'] text-[18px] md:text-[20px] font-semibold leading-[26px]  decoration-[1.62px] text-[#D82028]";

  const paragraph =
    "font-['Urbanist'] text-[14px] md:text-[16px] leading-[22px] mt-2";

  return (
    <div className={`w-full mb-12 mt-8 ${className}`}>
      {/* Page Title */}
      <h1 className={`${sectionTitle} mb-4`}>Terms & Conditions</h1>

      <div className="space-y-8 max-w-5xl px-4 md:px-8 mx-auto ">
        {/* Intro */}
        <p
          className={
            "font-['Urbanist'] text-[14px] md:text-[16px] max-w-[760px] mx-auto leading-[22px] text-center mt-2 mb-10"
          }
        >
          Welcome to House of Handsome (HOH). By using our services, visiting
          our website, or making a booking, you agree to comply with and be
          bound by the following terms and conditions. Please read them
          carefully.
        </p>

        {/* Section 1 */}
        <div>
          <h2 className={sectionHeading}>1. General Information</h2>
          <p className={paragraph}>
            House of Handsome provides high-quality grooming services, including
            haircuts, beard trims, and other personal care treatments. Our
            services are provided on a walk-in or appointment basis, subject to
            availability.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className={sectionHeading}>2. Booking and Payments</h2>
          <p className={paragraph}>
            All bookings can be made through our website, in-store, or by phone.
          </p>
          <p className={paragraph}>
            Payment is due at the time of service, unless otherwise specified.
          </p>
          <p className={paragraph}>
            We accept various payment methods, including credit cards and
            digital payment platforms.
          </p>

          <li className={` ${paragraph} list-disc ml-[18px]`}>
            A <span className="font-bold"> cancellation fee </span> may apply if an appointment is missed without
            prior notice (typically 24 hours before the scheduled time).
          </li>
        </div>

        {/* Section 3 */}
        <div>
          <h2 className={sectionHeading}>3. Appointments and Cancellations</h2>
          <li className={` ${paragraph} list-disc ml-[18px]`}>
            <span className="font-bold"> Cancellation Policy:</span> If you need to cancel or reschedule, please provide at least 24 hours’ notice to avoid a cancellation fee.
          </li>
          <li className={` ${paragraph} list-disc ml-[18px]`}>
            <span className="font-bold"> Late Arrivals:</span> If you arrive late, we will try our best to accommodate you, but please note that late arrivals may result in a reduced service time or rescheduling.
          </li>
        </div>

        {/* Section 4 */}
        <div>
          <h2 className={sectionHeading}>4. Services</h2>
          <li className={` ${paragraph} list-disc ml-[18px]`}>
            All grooming services are performed by experienced professionals. However, individual results may vary.
          </li>
          <li className={` ${paragraph} list-disc ml-[18px]`}>
            House of Handsome reserves the right to modify or discontinue services as needed.
          </li>
          <li className={` ${paragraph} list-disc ml-[18px]`}>
            We do not offer refunds once services have been completed, unless there is a service failure on our part.
          </li>
        </div>

        {/* Section 5 */}
        <div>
          <h2 className={sectionHeading}>5. Customer Responsibilities</h2>
          <li className={` ${paragraph} list-disc ml-[18px]`}>
            <span className="font-bold"> Health and Safety:</span> Please inform your barber of any allergies, skin conditions, or health issues that may affect the services.
          </li>
          <li className={` ${paragraph} list-disc ml-[18px]`}>
            <span className="font-bold"> Behavior:</span>  We expect all clients to behave respectfully. Inappropriate behavior may lead to the termination of services without refund.
          </li>
          <li className={` ${paragraph} list-disc ml-[18px]`}>
            <span className="font-bold"> Age Restrictions: </span> Clients must be 18 years or older to use our services. Minors must be accompanied by a parent or guardian.
          </li>
        </div>

        {/* Section 6 */}
        <div>
          <h2 className={sectionHeading}>6. Privacy and Data Protection</h2>
           <li className={` ${paragraph} list-disc ml-[18px]`}>
            We collect personal data to process bookings and payments and to improve our services. We will not share your information with third parties without your consent, except as required by law.
          </li>
           <li className={` ${paragraph} list-disc ml-[18px]`}>
            By using our services, you agree to our [Privacy Policy], which outlines how your data is collected, used, and protected.
          </li>
        </div>

        {/* Section 7 */}
        <div>
          <h2 className={sectionHeading}>7. Intellectual Property</h2>
          <li className={` ${paragraph} list-disc ml-[18px]`}>
            All content on our website, including logos, images, and trademarks, is the property of House of Handsome and is protected by copyright law.
          </li>
          <li className={` ${paragraph} list-disc ml-[18px]`}>
            You may not use any content from the website without prior written permission.
          </li>
        </div>

        {/* Section 8 */}
        <div>
          <h2 className={sectionHeading}>8. Liability</h2>
          <li className={` ${paragraph} list-disc ml-[18px]`}>
           House of Handsome is not responsible for any injuries, allergic reactions, or damage resulting from the use of our products or services unless due to negligence or fault on our part.
          </li>
          <li className={` ${paragraph} list-disc ml-[18px]`}>
            Our liability is limited to the amount paid for the service rendered.
          </li>
        </div>

        {/* Section 9 */}
        <div>
          <h2 className={sectionHeading}>9. Changes to Terms</h2>
          <li className={` ${paragraph} list-disc ml-[18px]`}>
           We reserve the right to modify these terms at any time. Any changes will be posted on our website, and the updated terms will take effect as soon as they are published.
          </li>
        </div>

        {/* Section 10 */}
        <div>
          <h2 className={sectionHeading}>10. Governing Law</h2>
          <p className={paragraph}>
            These terms and conditions are governed by and construed in accordance with the laws.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsText;
