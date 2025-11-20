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
    <section className="pt-10 pb-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Title */}
        <div className="flex flex-col gap-4 items-start mb-6 md:mb-10 md:items-center">
          <h2 className="font-['Cairo'] md:text-[48px] text-[36px] font-bold text-[#181818] md:text-center md:leading-[55px] leading-[40px] capitalize">
            {title}
          </h2>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col gap-6 justify-between items-center md:gap-12 md:flex-row">
          {/* Left Image */}
          <div className="w-full md:w-[623px] md:h-[650px] rounded-lg overflow-hidden">
            <img
              src={image}
              alt={modelName}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Text Column */}
          <div className="flex flex-col gap-12 w-full md:w-[640px]">
            {/* Model Name + What We Provide Section */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[#d82028] font-['Cairo'] text-[24px] font-bold capitalize leading-[32px]">
                {modelName}
              </h3>

              {/* What We Provide */}
              <div className="flex flex-col gap-4">
                <h4 className="font-['Cairo'] text-[24px] font-bold text-[#181818] capitalize leading-[32px]">
                  What We Provide
                </h4>
                <ul className="list-disc pl-8 space-y-4 font-['Urbanist'] font-medium text-[#181818] text-[20px] leading-[24px]">
                  {provides.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Your Role Section */}
            <div className="flex flex-col gap-4">
              <h4 className="font-['Cairo'] text-[24px] font-bold text-[#181818] capitalize leading-[32px]">
                Your Role
              </h4>
              <ul className="list-disc pl-8 space-y-4 font-['Urbanist'] font-medium text-[#181818] text-[20px] leading-[24px]">
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
