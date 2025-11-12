import React from "react";
import img1 from "../../../assets/images/franchise/franchiseSupport/franchise_support_c1.webp";
import img2 from "../../../assets/images/franchise/franchiseSupport/franchise_support_c2.webp";
import img3 from "../../../assets/images/franchise/franchiseSupport/franchise_support_c3.webp";
import img4 from "../../../assets/images/franchise/franchiseSupport/franchise_support_c4.webp";

export default function FranchiseSupport({
  title = "Franchise Support",
  subtitle = "At House of Handsome, we don’t just hand you a brand, we set you up for success.",
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
    <section className="px-4 py-16 bg-white sm:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-['Cairo'] text-[36px] md:text-[44px] font-bold text-[#181818] mb-4">
            {title}
          </h2>
          <p className="font-['Urbanist'] text-gray-600 text-[16px] leading-[26px] max-w-[700px] mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Support Text Grid */}
        <div className="grid grid-cols-1 gap-8 mb-12 text-center sm:grid-cols-2 md:grid-cols-4">
          {supports.map((item) => (
            <div key={item.id}>
              <h3 className="font-['Cairo'] text-[18px] font-semibold text-[#E10000] mb-2">
                {item.title}
              </h3>
              <p className="font-['Urbanist'] text-[#181818] text-[15px] leading-[24px]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {supports.map((item) => (
            <div key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[280px] object-cover rounded-lg grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
