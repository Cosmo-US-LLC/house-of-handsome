import React from "react";
import { Building2 } from "lucide-react"; // example placeholder icon

export default function HelpYouSucceed({
  title = "How We Help You Succeed",
  subtitle = "From the moment you sign on, we walk with you every step of the way.",
  features = [
    {
      title: "Site Selection",
      description:
        "6 profitable Alberta locations operating under a tested model.",
    },
    {
      title: "Interior Design",
      description:
        "Our team ensures every salon reflects the brand’s luxury standard.",
    },
    {
      title: "Training & Support",
      description: "We provide onboarding, operations, and marketing training.",
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
    <section className="bg-[#FAFAFA] py-16 px-4 sm:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="font-['Cairo'] text-[36px] md:text-[44px] font-bold text-[#181818] mb-2">
            {title}
          </h2>
          <p className="font-['Urbanist'] text-gray-600 text-[16px] md:text-[18px] leading-[28px]">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center p-8 text-center bg-white rounded-xl transition hover:shadow-md"
            >
              {/* Icon */}
              <div className="mb-6 flex items-center justify-center w-[70px] h-[70px] rounded-full bg-[#FFECEC]">
                <Building2 className="w-8 h-8 text-[#E10000]" />
              </div>

              {/* Title */}
              <h3 className="font-['Cairo'] text-[18px] font-semibold text-[#181818] mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-['Urbanist'] text-gray-600 text-[15px] md:text-[16px] leading-[24px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
