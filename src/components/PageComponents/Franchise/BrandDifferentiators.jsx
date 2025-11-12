import React from "react";
import logoIcon from "../../../assets/images/footer/buy-a-gift-card.svg";

export default function BrandDifferentiators({
  title = "What Sets House of Handsome Apart",
  features = [
    { id: 1, icon: logoIcon, label: "Luxury Aesthetic" },
    { id: 2, icon: logoIcon, label: "Built-In Demand" },
    { id: 3, icon: logoIcon, label: "Marketing Power" },
    { id: 4, icon: logoIcon, label: "Tech Efficiency" },
  ],
}) {
  return (
    <section className="bg-[#f4f4f4] py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div className="flex flex-col gap-4 items-center text-center mb-12 max-w-[800px] mx-auto">
          <h2 className="font-['Cairo'] text-[48px] font-bold text-[#181818] leading-[55px]">
            {title}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="flex flex-wrap gap-4 justify-center items-start">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col justify-center gap-3 items-center bg-white rounded-2xl w-[290px] h-[196px] overflow-hidden"
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
