import React from "react";
import investmentImage from "../../../assets/images/franchise/whyInvestment/why_investment.webp";

export default function WhyInvestment({
  title = "Why It's Worth The Investment",
  subtitle = "Join a brand proven to perform, where systems, style, and service drive profitability.",
  image = investmentImage,
  benefits = [
    "Established Performance",
    "Loyal Client Base",
    "Built-In Marketing",
    "Technology-Driven",
    "Fast Growth Market",
  ],
}) {
  return (
    <section className="pt-5 pb-10 bg-white md:pb-20 md:pt-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-4 items-center mb-6 text-left md:mb-12 md:text-center">
          <h2 className="font-['Cairo'] md:text-[48px] text-[36px] font-bold text-[#181818] md:leading-[55px] leading-[40px] capitalize">
            {title}
          </h2>
          <p className="font-['Urbanist'] font-medium text-[#181818] text-[16px] leading-[26px]">
            {subtitle}
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col gap-12 justify-between items-center md:flex-row">
          {/* Left Column - Benefits List */}
          <div className="flex flex-col gap-3 w-full md:w-[640px]">
            {benefits.map((item, index) => (
              <div key={index} className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h3 className="font-['Cairo'] text-[24px] font-bold text-black leading-[32px] capitalize">
                    {item}
                  </h3>
                </div>
                {/* Divider line */}
                <div className="h-px w-full bg-[rgba(0,0,0,0.1)]" />
              </div>
            ))}
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-[623px] h-[430px] rounded-lg overflow-hidden">
            <img
              src={image}
              alt="Investment opportunity"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
