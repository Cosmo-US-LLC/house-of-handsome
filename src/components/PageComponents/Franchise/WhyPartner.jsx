import React from "react";

const stats = [
  {
    value: "4.9",
    label: "Exceptional rating",
    detail: "over 3,000 five star reviews",
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
    <section className="py-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Top Info Row */}
        <div className="flex flex-col gap-12 items-center mb-12 md:flex-row">
          {/* Left: Title */}
          <div className="w-full md:w-auto">
            <h2 className="font-['Cairo'] text-[48px] font-bold text-[#181818] leading-[55px] capitalize">
              Why Partner with
              <br />
              House of Handsome?
            </h2>
          </div>

          {/* Right: Description */}
          <div className="flex-1 font-['Urbanist'] font-medium text-[16px] text-[#181818] leading-[26px]">
            <p className="mb-0">
              Founded in Alberta, House of Handsome has grown from a single
              barbershop into a network of six thriving locations (many more to
              come) with over 3000 five-star reviews and a consistent rating of
              4.9★.
            </p>
            <p className="mb-0">&nbsp;</p>
            <p>
              Our focus on precision, consistency, and premium service has built
              a loyal client base, with 70% repeat visits and one of the highest
              retention rates in the industry.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="flex flex-wrap gap-6 items-start">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#f4f4f4] rounded-lg px-6 py-8 w-full md:w-[389px] flex flex-col gap-16"
            >
              <div className="font-['Cairo'] text-[80px] font-bold text-[#d82028] leading-[80px]">
                {item.value}
              </div>
              <div className="flex flex-col gap-2 h-[60px]">
                <h4 className="font-['Urbanist'] text-[20px] font-bold text-black leading-[28px]">
                  {item.label}
                </h4>
                <p className="font-['Urbanist'] font-normal text-[16px] text-black leading-[24px]">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
