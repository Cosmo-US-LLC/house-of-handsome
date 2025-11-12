import React from "react";
import modelImage from "../../../assets/images/franchise/franchiseModels/franchise_models.webp";

export default function FranchiseModels({
  title = "Franchise Models",
  modelName = "Shop-in-Shop (Licensed Operator)",
  provides = [
    "Premium brand assets and marketing support",
    "Access to POS and booking systems",
    "Ongoing social media promotions",
    "Training and operational support",
  ],
  roles = [
    "Manage day-to-day operations and uphold our standards",
    "Earn performance-based revenue and share in profits",
  ],
  image = modelImage,
}) {
  return (
    <section className="px-4 py-16 bg-white sm:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Title */}
        <h2 className="font-['Cairo'] text-[36px] md:text-[44px] font-bold text-[#181818] text-center mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-1 gap-10 items-center md:grid-cols-2">
          {/* Left Image */}
          <div>
            <img
              src={image}
              alt={modelName}
              className="rounded-lg w-full h-[360px] object-cover grayscale"
            />
          </div>

          {/* Right Text Column */}
          <div className="space-y-6">
            {/* Model Name */}
            <h3 className="text-[#E10000] font-['Cairo'] text-[20px] font-semibold">
              {modelName}
            </h3>

            {/* What We Provide */}
            <div>
              <h4 className="font-['Cairo'] text-[18px] font-semibold text-[#181818] mb-2">
                What We Provide
              </h4>
              <ul className="list-disc pl-5 space-y-2 font-['Urbanist'] text-[#181818] text-[16px] leading-[26px]">
                {provides.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Your Role */}
            <div>
              <h4 className="font-['Cairo'] text-[18px] font-semibold text-[#181818] mb-2">
                Your Role
              </h4>
              <ul className="list-disc pl-5 space-y-2 font-['Urbanist'] text-[#181818] text-[16px] leading-[26px]">
                {roles.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
