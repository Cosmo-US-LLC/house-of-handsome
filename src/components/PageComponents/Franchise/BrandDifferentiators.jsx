import React from "react";
import logoIcon from "../../../assets/images/footer/buy-a-gift-card.svg"; // replace with your actual logo

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
    <section className="bg-[#F9F9F9] py-16 px-4 sm:px-8">
      <div className="max-w-[1280px] mx-auto text-center">
        {/* Section Title */}
        <h2 className="font-['Cairo'] text-[28px] md:text-[36px] font-bold text-[#181818] mb-10">
          {title}
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col justify-center items-center px-6 py-10 bg-white rounded-xl shadow-sm transition hover:shadow-md"
            >
              <img
                src={feature.icon}
                alt={feature.label}
                className="object-contain mb-4 w-14 h-14"
              />
              <p className="font-['Urbanist'] text-[16px] font-semibold text-[#181818] text-center">
                {feature.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
