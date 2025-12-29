import React, { useState } from "react";
import investmentImage from "../../../assets/images/franchise/whyInvestment/why_investment.webp";
import investmentImage2 from "../../../assets/images/franchise/whyInvestment/why_investment2.webp";
import investmentImage3 from "../../../assets/images/franchise/whyInvestment/why_investment3.webp";
import investmentImage4 from "../../../assets/images/franchise/whyInvestment/why_investment4.webp";
import investmentImage5 from "../../../assets/images/franchise/whyInvestment/why_investment5.webp";

export default function WhyInvestment({
  title = "Why It's Worth The Investment",
  subtitle = "Join a brand proven to perform, where systems, style, and service drive profitability.",
  benefits = [
    {
      title: "Established Performance",
      content: "6 profitable Alberta locations operating under a tested model.",
      image: investmentImage,
    },
    {
      title: "Loyal Client Base",
      content: "Thousands of customers, 4.9★ exceptional rating, and growing brand trust.",
      image: investmentImage2,
    },
    {
      title: "Built-In Marketing",
      content: "Automated digital campaigns and referral programs that fill chairs year-round.",
      image: investmentImage3,
    },
    {
      title: "Technology-Driven",
      content: "Centralized CRM, booking, and SMS systems to simplify operations.",
      image: investmentImage4,
    },
    {
      title: "Fast Growth Market",
      content: "The Canadian men’s grooming industry now exceeds $1.6 billion and continues to rise.",
      image: investmentImage5,
    },
  ],
}) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="pt-5 pb-10 bg-white md:pb-20 md:pt-10">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="flex flex-col gap-4 items-center mb-6 md:mb-12 text-center">
          <h2 className="font-['Cairo'] md:text-[48px] text-[36px] font-bold text-[#181818]">
            {title}
          </h2>
          <p className="font-['Urbanist'] font-medium text-[#181818] text-[16px] leading-[26px]">
            {subtitle}
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col gap-16 md:flex-row justify-between items-start">

          {/* Accordion */}
          <div className="flex flex-col w-full md:w-[640px]">

            {benefits.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`py-4 border-b ${
                    isOpen ? "border-black" : "border-[rgba(0,0,0,0.10)]"
                  }`}
                >
                  {/* Header */}
                  <button
                    className="w-full cursor-pointer flex justify-between items-center"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h3
                      className={`font-['Cairo'] text-[24px] max-md:text-[18px] font-bold ${
                        isOpen ? "text-red-600" : "text-black"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </button>

                  {/* Content */}
                  <div
                    className="transition-all duration-300 overflow-hidden"
                    style={{
                      maxHeight: isOpen ? "350px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <p className="mt-3 text-[16px] text-[#181818] pr-4">
                      {item.content}
                    </p>

                    {/* Mobile Image */}
                    {isOpen && (
                      <div className="mt-4 md:hidden w-full h-[240px] rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-all duration-500"
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Image */}
          <div className="hidden md:block w-full md:w-[623px] h-[430px] rounded-lg overflow-hidden">
            <img
              src={benefits[openIndex]?.image}
              alt="Investment visual"
              className="object-cover w-full h-full transition-all duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
