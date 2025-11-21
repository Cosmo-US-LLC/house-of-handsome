import React from "react";
import whyTeensImage1 from "../../../assets/images/teen/whyTeensChoose/why_teens_c1.webp";
import whyTeensImage2 from "../../../assets/images/teen/whyTeensChoose/why_teens_c2.webp";
import whyTeensImage3 from "../../../assets/images/teen/whyTeensChoose/why_teens_c3.webp";
import whyTeensImage4 from "../../../assets/images/teen/whyTeensChoose/why_teens_c4.webp";

const reasons = [
  {
    id: 1,
    title: "Trendy cuts tailored for teens",
    image: whyTeensImage1,
  },
  {
    id: 2,
    title: "Laid-back, teen-friendly vibe",
    image: whyTeensImage2,
  },
  {
    id: 3,
    title: "Affordable style",
    image: whyTeensImage3,
  },
  {
    id: 4,
    title: "Confidence with every cut",
    image: whyTeensImage4,
  },
];

function WhyTeensChoose() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-10">
        {/* Section Heading */}
        <h2 className="font-['Cairo'] font-bold text-[#181818] text-[36px] md:text-[48px] leading-[55px] capitalize mb-12">
          Why Teens Choose Us
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="relative h-[284px] rounded-lg overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={reason.image}
                alt={reason.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[57%] to-[rgba(0,0,0,0.35)] to-[67%]" />

              {/* Text Content */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-['Urbanist'] font-bold text-[20px] leading-[28px] text-white">
                  {reason.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyTeensChoose;

