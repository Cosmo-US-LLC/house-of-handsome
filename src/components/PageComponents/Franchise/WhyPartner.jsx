import React from "react";

const stats = [
  {
    value: "4.9",
    label: "Exceptional Rating",
    detail: "Over 3,000 five-star reviews",
  },
  {
    value: "70%",
    label: "Repeat Visits",
    detail: "Industry-leading retention rate",
  },
  {
    value: "6+",
    label: "Thriving Locations",
    detail: "Rapidly expanding across Alberta",
  },
];

export default function WhyPartner() {
  return (
    <section className="px-4 py-16 bg-white sm:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Top Info Row */}
        <div className="flex flex-col gap-8 justify-between md:flex-row">
          {/* Left: Title */}
          <div className="md:w-1/2">
            <h2 className="font-['Cairo'] text-[36px] md:text-[44px] font-bold text-[#181818] leading-tight">
              Why Partner With
              <br />
              House Of Handsome?
            </h2>
          </div>

          {/* Right: Description */}
          <div className="space-y-4 md:w-1/2">
            <p className="font-['Urbanist'] text-gray-600 text-[16px] md:text-[18px] leading-[28px]">
              Founded in Alberta, House of Handsome has grown from a single
              barbershop into a network of six thriving locations (many more to
              come) with over 3,000 five-star reviews and a consistent rating of
              4.9★.
            </p>
            <p className="font-['Urbanist'] text-gray-600 text-[16px] md:text-[18px] leading-[28px]">
              Our focus on precision, consistency, and premium service has built
              a loyal client base, with 70% repeat visits and one of the highest
              retention rates in the industry.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3 md:gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAFAFA] rounded-xl p-8 text-left transition hover:shadow-md"
            >
              <h3 className="text-[#E10000] text-[56px] md:text-[64px] font-bold leading-none mb-4">
                {item.value}
              </h3>
              <h4 className="text-[#181818] text-[18px] font-semibold mb-1">
                {item.label}
              </h4>
              <p className="text-gray-500 text-[14px] md:text-[16px] leading-[24px]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
