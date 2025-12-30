const PrivacyPolicyText = ({ className = "" }) => {
  const sectionTitle =
    "text-[#000] text-center font-['Cairo'] text-[30px] font-normal leading-[28px] md:text-[48px] md:font-semibold md:leading-[44px]";

  const sectionHeading =
    "font-['Cairo'] text-[18px] md:text-[20px] font-semibold leading-[26px]  decoration-[1.62px] text-[#D82028]";

  const paragraph =
    "font-['Urbanist'] text-[14px] md:text-[16px] leading-[22px] mt-2";

  return (
    <div className={`w-full my-8 ${className}`}>
      {/* Page Title */}
      <h2 className={`${sectionTitle} mb-4`}>Privacy Policy</h2>

      <div className="space-y-8 max-w-5xl px-4 md:px-8 mx-auto">

        {/* Intro */}
        <p className="font-['Urbanist'] text-[14px] md:text-[16px] max-w-[760px] mx-auto leading-[22px] text-center mt-2 mb-10">
         At House of Handsome, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website.
        </p>

        {/* Section 1 */}
        <div>
          <h3 className={sectionHeading}>1. Information Collection</h3>
          <p className={paragraph}>
            We collect personal information that you provide to us when you use our website, such as your name, email address, and phone number, when filling out forms or making inquiries.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className={sectionHeading}>2. Use of Information</h3>
          <p className={paragraph}>
            The information we collect is used to process inquiries, provide customer support, improve our services, and send promotional material related to House of Handsome. We do not sell or rent your personal information to third parties.
          </p>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className={sectionHeading}>3. Cookies</h3>
          <p className={paragraph}>
            Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and improve site functionality.
          </p>
        </div>

        {/* Section 4 */}
        <div>
          <h3 className={sectionHeading}>4. Data Security</h3>
          <p className={paragraph}>
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of data transmission over the internet is completely secure, and we cannot guarantee absolute security.
          </p>
        </div>

        {/* Section 5 */}
        <div>
          <h3 className={sectionHeading}>5. Third-Party Links</h3>
          <p className={paragraph}>
            Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these external sites.
          </p>
        </div>

        {/* Section 6 */}
        <div>
          <h3 className={sectionHeading}>6. Your Rights</h3>
          <p className={paragraph}>
            You have the right to access, update, or delete your personal information. If you have any concerns or requests regarding your personal data, please contact us directly.
          </p>
        </div>

        {/* Section 7 */}
        <div>
          <h3 className={sectionHeading}>7. Changes to This Policy</h3>
          <p className={paragraph}>
            We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated date.
          </p>
        <p className={paragraph}>By using our website, you consent to the collection and use of your information as outlined in this policy.</p>
        </div>
        {/* Contact */}
        <div className="my-14">
          <h3 className={`${sectionHeading} text-black text-3xl! mb-3!`}>Contact Us</h3>
          <p className={paragraph}>
            If you have any questions or concerns about this Privacy Policy, please reach out to us at{" "}
            <a
              href="mailto:info@houseofhandsome.ca"
              className="underline font-medium text-[#D82028]  underline-offset-[2.16px]"
            >
              info@houseofhandsome.ca
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyText;
