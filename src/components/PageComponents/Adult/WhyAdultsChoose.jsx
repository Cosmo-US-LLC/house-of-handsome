import React from "react";
import whyAdultsImage1 from "../../../assets/images/adult/whyAdultsChoose/why_adults_c1.webp";
import whyAdultsImage2 from "../../../assets/images/adult/whyAdultsChoose/why_adults_c2.webp";
import whyAdultsImage3 from "../../../assets/images/adult/whyAdultsChoose/why_adults_c3.webp";
import whyAdultsImage4 from "../../../assets/images/adult/whyAdultsChoose/why_adults_c4.webp";

const reasons = [
  {
    id: 1,
    title: "Skilled barbers who understand men's style",
    image: whyAdultsImage1,
  },
  {
    id: 2,
    title: "Precision-focused cuts and grooming",
    image: whyAdultsImage2,
  },
  {
    id: 3,
    title: "Comfortable, modern environment",
    image: whyAdultsImage3,
  },
  {
    id: 4,
    title: "Consistent results you can rely on",
    image: whyAdultsImage4,
  },
];

function WhyAdultsChoose() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-10">
        {/* Section Heading */}
        <h2 className="font-['Cairo'] font-bold text-[#181818] text-[36px] md:text-[48px] leading-[55px] capitalize mb-12">
          Why Adults Choose Us
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

export default WhyAdultsChoose;

