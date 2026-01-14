import React from "react";
const services = [
  {
    id: 1,
    title: "Haircuts & Grooming",
    items: [
      "Regular Hair Cut",
      "Skin Fade Hair Cut",
      "Buzz Cut with Fade",
      "Boulder Full Head Shave (Foil Shaver)",
      "Fade Hair Cut",
    ],
  },
  {
    id: 2,
    title: "Beard & Shave Services",
    items: [
      "Regular Beard Trim",
      "Beard Grooming (Clippers/Scissors)",
      "Beard Grooming (Hot Towel + Razor)",
      "Beard Grooming (Over 2” Long)",
      "Full Hot Shave (Face or Head)",
    ],
  },
  {
    id: 3,
    title: "Massage / Wellness",
    items: [
      "Relaxation Massage (30/60/90)",
      "Deep Tissue Massage (30/60/90)",
      "Hot Stone Massage (60 mins)",
    ],
  },
  {
    id: 4,
    title: "Colour & Texture",
    items: [
      "Solid Colour (Hair)",
      "Colour – Short/Long Beard",
      "Highlights + Toner",
      "Perm / Hair Relaxer Treatment",
    ],
  },
  {
    id: 5,
    title: "Waxing Services",
    items: [
      "Eyebrows (incl. forehead)",
      "Upper Cheeks / Nostrils / Ears",
      "Hot Stone Massage (60 mins)",
    ],
  },
  {
    id: 6,
    title: "Facial Care & Spa",
    items: [
      "Hot Towel Black Mask (25 mins)",
      "Hot Towel Facial Scrub (30 mins)",
      "Signature Facial (60 mins)",
      "Cleansing Facial (60 mins; includes upper body massage)",
    ],
  },
];


function ServicesWeOffering() {
  return (
    <section className="pt-5 pb-5 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Section Heading */}
        <h2 className="font-['Cairo'] font-bold text-[#181818] md:text-[48px] text-[28px] leading-[55px] capitalize md:mb-12 mb:8">
          Services We Offering
        </h2>
        <p className="mb-4 md:hidden text-[14px] font-['Urbanist'] leading-[26px] font-medium text-[#181818] max-w-[500px]">
            No matter where you are, you'll experience the same premium service at each of our six locations. Consistency, quality, and excellence, every time.
        </p>
        <div className="relative p-6 px-1 md:p-12">
            
        <div
            className="
            pointer-events-none
            absolute
            top-[50px]
            left-0
            right-0
            h-[298px]
            border-t-2 border-b-2 border-r-2
            border-dashed
            border-[#D82028]
            opacity-25
            rounded-r-[40px]
            md:block hidden
            "
        />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 md:gap-y-16 gap-y-8">

            {services.map((service) => (
              <div key={service.id} className="relative">

                {/* Number */}
                <span className="absolute md:-top-18 -top-5 left-0 font-['Urbanist'] text-[#D82028] md:text-[40px] text-[28px] font-medium text-edge:capitalize">
                  {service.id}
                </span>

                {/* Dot */}
                <span className="absolute -top-[6px] left-0 w-4 h-4 bg-[#181818] rounded-full ring-4 ring-[rgba(216,32,40,0.10)] hidden md:block" />

                <h3 className="mt-6 mb-2 font-['Urbanist'] font-bold md:text-[26px] text-[24px] text-[#252525]">
                  {service.title}
                </h3>

                <ul className="font-['Urbanist'] min-h-[20px] md:pb-7 md:text-[16px] text-[14px] font-medium leading-[26px] text-black">
                  {service.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default ServicesWeOffering;
