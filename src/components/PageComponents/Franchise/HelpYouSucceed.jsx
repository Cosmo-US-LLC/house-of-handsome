import React from "react";
import logoIcon from "../../../assets/images/footer/buy-a-gift-card.svg";

export default function HelpYouSucceed({
  title = "How We Help You Succeed",
  subtitle = "From the moment you sign on, we walk with you every step of the way:",
  features = [
    {
      title: "Site Selection",
      description:
        "6 profitable Alberta locations operating under a tested model.",
    },
    {
      title: "Interior Design",
      description:
        "Our team ensures every salon reflects the brand's luxury standard.",
    },
    {
      title: "Training & Support",
      description: "We provide onboarding, operations, and marketing training",
    },
    {
      title: "CRM & Marketing",
      description:
        "Centralized booking, CRM tools, and automated campaigns make client management effortless.",
    },
    {
      title: "Launch & Growth",
      description:
        "Continuous marketing and influencer collaborations to build visibility and loyalty.",
    },
  ],
}) {
  return (
    <section className="bg-[#f4f4f4] py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="flex flex-col gap-4 items-center mb-12 text-center">
          <h2 className="font-['Cairo'] text-[48px] font-bold text-[#181818] leading-[55px] capitalize">
            {title}
          </h2>
          <p className="font-['Urbanist'] font-medium text-[#181818] text-[16px] leading-[26px]">
            {subtitle}
          </p>
        </div>

        {/* Features Layout - 2 rows */}
        <div className="flex flex-col gap-6 items-start">
          {/* First Row - 3 cards */}
          <div className="flex flex-wrap gap-6 justify-start w-full">
            {features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="flex flex-col gap-6 items-center text-center bg-white rounded-lg px-12 py-8 w-[389px]"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[rgba(216,32,40,0.1)]">
                  <img
                    src={logoIcon}
                    alt={feature.title}
                    className="object-contain w-10 h-10"
                  />
                </div>

                {/* Title and Description */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-['Urbanist'] text-[20px] font-bold text-black leading-[28px]">
                    {feature.title}
                  </h3>
                  <p className="font-['Urbanist'] font-normal text-black text-[16px] leading-[24px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - 2 cards centered */}
          <div className="flex flex-wrap gap-6 justify-center w-full">
            {features.slice(3, 5).map((feature, index) => (
              <div
                key={index}
                className="flex flex-col gap-6 items-center text-center bg-white rounded-lg px-12 py-8 w-full sm:w-[437px]"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[rgba(216,32,40,0.1)]">
                  <img
                    src={logoIcon}
                    alt={feature.title}
                    className="object-contain w-10 h-10"
                  />
                </div>

                {/* Title and Description */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-['Urbanist'] text-[20px] font-bold text-black leading-[28px]">
                    {feature.title}
                  </h3>
                  <p className="font-['Urbanist'] font-normal text-black text-[16px] leading-[24px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
