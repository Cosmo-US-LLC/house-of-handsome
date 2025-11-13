import React from "react";
import logoIcon from "../../../assets/images/footer/buy-a-gift-card.svg";

export default function BrandDifferentiators({
  title = "What Sets House of Handsome Apart",
  features = [
    {
      id: 1,
      icon: logoIcon,
      label: "Luxury Aesthetic",
      description: "Every salon embodies sophistication and style.",
    },
    {
      id: 2,
      icon: logoIcon,
      label: "Built-In Demand",
      description: "Established brand with loyal customer base.",
    },
    {
      id: 3,
      icon: logoIcon,
      label: "Marketing Power",
      description: "Comprehensive campaigns that drive results.",
    },
    {
      id: 4,
      icon: logoIcon,
      label: "Tech Efficiency",
      description: "Modern tools for seamless operations.",
    },
  ],
}) {
  return (
    <section className="bg-[#f4f4f4] md:py-20 py-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="flex flex-col gap-4 items-center text-center mb-12 max-w-[800px] mx-auto">
          <h2 className="font-['Cairo'] md:text-[48px] text-[36px] font-bold text-[#181818] md:leading-[55px] leading-[40px]">
            {title}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap gap-4 justify-center items-start">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative flex flex-col justify-center gap-3 items-center bg-white rounded-2xl w-[290px] h-[196px] overflow-hidden group cursor-pointer"
            >
              {/* Default Content */}
              <div className="flex flex-col gap-3 items-center transition-opacity duration-300 group-hover:opacity-0">
                <div className="flex justify-center items-center w-20 h-20">
                  <img
                    src={feature.icon}
                    alt={feature.label}
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="font-['Urbanist'] text-[20px] font-bold text-black text-center leading-[28px]">
                  {feature.label}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#f4f4f4/30]  rounded-2xl flex flex-col gap-2 items-start justify-center px-6 py-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-['Urbanist'] text-[20px] font-bold text-black leading-[28px] w-full">
                  {feature.label}
                </p>
                <p className="font-['Urbanist'] font-normal text-[16px] text-black leading-[24px] w-full">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
