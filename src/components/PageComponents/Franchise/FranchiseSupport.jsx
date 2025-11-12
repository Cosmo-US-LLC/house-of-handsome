import React from "react";
import img1 from "../../../assets/images/franchise/franchiseSupport/franchise_support_c1.webp";
import img2 from "../../../assets/images/franchise/franchiseSupport/franchise_support_c2.webp";
import img3 from "../../../assets/images/franchise/franchiseSupport/franchise_support_c3.webp";
import img4 from "../../../assets/images/franchise/franchiseSupport/franchise_support_c4.webp";

export default function FranchiseSupport({
  title = "Franchise Support",
  subtitle = "At House of Handsome, we don't just hand you a brand, we set you up for success.",
  supports = [
    {
      id: 1,
      title: "Marketing Excellence",
      description: "Masterful cuts tailored to your style and personality.",
      image: img1,
    },
    {
      id: 2,
      title: "Operational Efficiency",
      description: "Integrated POS and CRM tools.",
      image: img2,
    },
    {
      id: 3,
      title: "Brand Consistency",
      description: "Professional design and training standards.",
      image: img3,
    },
    {
      id: 4,
      title: "Continuous Development",
      description: "Education and growth opportunities for you and your team.",
      image: img4,
    },
  ],
}) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-4 items-center text-center mb-12 max-w-[800px] mx-auto">
          <h2 className="font-['Cairo'] text-[48px] font-bold text-[#181818] leading-[55px] capitalize">
            {title}
          </h2>
          <p className="font-['Urbanist'] font-medium text-[16px] text-[#181818] leading-[26px] w-full">
            {subtitle}
          </p>
        </div>

        {/* Support Cards */}
        <div className="flex flex-wrap gap-4 justify-center items-start">
          {supports.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-[26px] w-[290px] h-[500px]"
            >
              {/* Title and Description */}
              <div className="flex flex-col gap-2 h-[80px]">
                <h3 className="font-['Cairo'] text-[24px] font-medium text-[#d82028] leading-[32px]">
                  {item.title}
                </h3>
                <p className="font-['Urbanist'] font-normal text-[16px] text-black leading-[24px]">
                  {item.description}
                </p>
              </div>

              {/* Image */}
              <div className="overflow-hidden flex-1 rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
