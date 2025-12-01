import React from "react";
import whyAdultsImage1 from "../../../assets/images/adult/whyAdultsChoose/adult_choose_us_img1.webp";
import whyAdultsImage2 from "../../../assets/images/adult/whyAdultsChoose/adult_choose_us_img2.webp";
import whyAdultsImage3 from "../../../assets/images/adult/whyAdultsChoose/adult_choose_us_img3.webp";
import whyAdultsImage4 from "../../../assets/images/adult/whyAdultsChoose/adult_choose_us_img4.webp";

const reasons = [
  {
    id: 1,
    title: "Skilled barbers who understand men’s style",
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
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Section Heading */}
        <h2 className="font-['Cairo'] font-bold text-[#181818] md:text-[48px] text-[36px] leading-[55px] capitalize mb-12">
          Why Adults Choose Us
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="relative h-[284px] rounded-lg overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={reason.image}
                alt={reason.title}
                className="object-cover absolute inset-0 w-full h-full"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[57%] to-[rgba(0,0,0,0.35)] to-[67%]" />

              {/* Text Content */}
              <div className="absolute right-4 bottom-4 left-4">
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
