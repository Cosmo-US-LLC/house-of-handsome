import React, { useState } from "react";
import investmentImage from "../../../assets/images/franchise/whyInvestment/why_investment.webp";

export default function WhyInvestment({
  title = "Why It's Worth The Investment",
  subtitle = "Join a brand proven to perform, where systems, style, and service drive profitability.",
  image = investmentImage,
  benefits = [
    {
      title: "Established Performance",
      content: "6 profitable Alberta locations operating under a tested model.",
    },
    {
      title: "Loyal Client Base",
      content: "Thousands of customers, 4.9★ exceptional rating, and growing brand trust.",
    },
    {
      title: "Built-In Marketing",
      content: "Automated digital campaigns and referral programs that fill chairs year-round.",
    },
    {
      title: "Technology-Driven",
      content: "Centralized CRM, booking, and SMS systems to simplify operations.",
    },
    {
      title: "Fast Growth Market",
      content: "The Canadian men’s grooming industry now exceeds $1.6 billion and continues to rise.",
    },
  ],
}) {
  const [openIndex, setOpenIndex] = useState(0); // first is open

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
        <div className="flex flex-col gap-16 md:flex-row justify-between items-center">

          {/* Accordion */}
          <div className="flex flex-col w-full md:w-[640px]">

            {benefits.map((item, index) => {
              const isOpen = openIndex === index; // moved INSIDE map

              return (
                <div key={index}   className={` py-4 border-b ${
    isOpen ? "border-black" : "border-[rgba(0,0,0,0.10)]"
  }`}>

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

                  <div
                    className="accordion-content"
                    style={{
                      maxHeight: isOpen ? "200px" : "0px",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    {item.content && (
                      <p className="mt-3 text-[16px] text-[#181818] pr-4">
                        {item.content}
                      </p>
                    )}
                  </div>

                </div>
              );
            })}

          </div>

          {/* Image */}
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
