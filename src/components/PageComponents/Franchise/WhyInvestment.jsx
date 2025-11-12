import React from "react";
import investmentImage from "../../../assets/images/franchise/whyInvestment/why_investment.webp";

export default function WhyInvestment({
  title = "Why It’s Worth The Investment",
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
    <section className="px-4 py-16 bg-white sm:px-8">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Column */}
        <div className="w-full md:w-[50%]">
          <h2 className="font-['Cairo'] text-[36px] md:text-[44px] font-bold text-[#181818] text-center md:text-left mb-2">
            {title}
          </h2>
          <p className="font-['Urbanist'] text-gray-600 text-[16px] md:text-[18px] leading-[28px] mb-8 text-center md:text-left">
            {subtitle}
          </p>

          {/* Benefit List */}
          <ul className="divide-y divide-gray-200">
            {benefits.map((item, index) => (
              <li
                key={index}
                className="py-3 text-[18px] font-semibold text-[#181818] hover:text-[#E10000] transition cursor-default"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Image */}
        <div className="w-full md:w-[50%]">
          <img
            src={image}
            alt="Investment opportunity"
            className="object-cover w-full h-auto rounded-md grayscale"
          />
        </div>
      </div>
    </section>
  );
}
