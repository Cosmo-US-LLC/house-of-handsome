import MailSvg from "@/assets/images/location/Svgs/MailSvg";
import PhoneSvg from "@/assets/images/location/Svgs/PhoneSvg";

const ContactUsLocations = ({ classname = "" }) => {
  const sectionTitle =
    "text-white text-center font-['Cairo'] text-[20px] font-normal leading-[28px] [-webkit-text-stroke:1px_#fff]";

  const locationName =
    "font-['Urbanist'] text-[18px] font-semibold leading-[26px] underline underline-offset-[2.16px] decoration-[1.62px]";

  const addressText =
    "font-['Urbanist'] text-[14px] font-normal leading-[22px] mt-1";

  const timingText = "font-['Urbanist'] text-[16px] font-normal leading-[26px]";

  const contactText =
    "font-['Urbanist'] text-[16px] font-normal leading-[24px] flex items-center gap-2 justify-center";

  const openingHours = [
    { day: "Mon - Fri", time: "09:00 AM - 08:00 PM" },
    { day: "Sat", time: "09:00 AM - 07:00 PM" },
    { day: "Sun", time: "09:00 AM - 06:00 PM" },
  ];

  const locations = [
    {
      name: "Sherwood Park",
      address: "195 Wye Road, Unit 11, Sherwood Park, Alberta T8B 1C9",
      link: "https://www.phorest.com/salon/houseofhandsomebarbershop",
    },
    {
      name: "Spruce Grove",
      address: "205 Jennifer Heil Way #108, Spruce Grove, AB T7X 0T3",
      link: "https://www.phorest.com/salon/houseofhandsomebarbershop1",
    },
    {
      name: "Cameron Heights",
      address: "6215 Cameron Dr NW, Edmonton, AB T6M 0J2",
      link: "https://www.phorest.com/salon/houseofhandsomebarbershop2",
    },
    {
      name: "Whyte Avenue",
      address: "10369 78 Avenue, Edmonton, AB T6E 6T3",
      link: "https://www.phorest.com/salon/houseofhandsomebarbershopwhyte",
    },
    {
      name: "South Common",
      address: "1903 98 ST NW, South Common, Edmonton",
      link: "https://www.phorest.com/salon/houseofhandsomebarbershopsouth",
    },
    {
      name: "Edmonton Downtown",
      address: "12328 102 Ave NW, Edmonton, AB T5N 0L9",
      link: "https://www.phorest.com/salon/houseofhandsomedowntown",
    },
  ];

  return (
    <div className={classname}>
      {/* Opening Hours */}
      <div className="mb-8">
        <h3 className={sectionTitle}>Opening Hours:</h3>
        <div className="mt-4 space-y-2 text-center">
          {openingHours.map((item, i) => (
            <div key={i} className="flex justify-center gap-4">
              <span className={timingText}>{item.day}:</span>
              <span className={timingText}>{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Locations */}
      <div className="mb-8">
        <h3 className={sectionTitle}>Where to Find us:</h3>

        <div className="mt-4 space-y-5 text-center">
          {locations.map((loc, i) => (
            <div key={i}>
              <a
                href={loc.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${locationName} inline-flex items-center justify-center gap-2`}
              >
                {loc.name}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                >
                  <path
                    d="M12 7V12.75C12 12.9142 11.9677 13.0767 11.9048 13.2284C11.842 13.38 11.75 13.5178 11.6339 13.6339C11.5178 13.75 11.38 13.842 11.2284 13.9048C11.0767 13.9677 10.9142 14 10.75 14H3.25C2.91848 14 2.60054 13.8683 2.36612 13.6339C2.1317 13.3995 2 13.0815 2 12.75V5.25C2 4.91848 2.1317 4.60054 2.36612 4.36612C2.60054 4.1317 2.91848 4 3.25 4H8.48375M10.5 2H14V5.5M7 9L13.75 2.25"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <p className={addressText}>{loc.address}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div>
        <h3 className={sectionTitle}>Get In Touch</h3>

        <div className="mt-4 space-y-4 text-center flex flex-col">
          <a href="mailto:info@houseofhandsome.ca" className={contactText}>
            <PhoneSvg className={"invert"} /> info@houseofhandsome.ca
          </a>

          <a href="tel:8774182541" className={contactText}>
            <MailSvg className={"invert"} /> (877) 418-2541
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsLocations;
