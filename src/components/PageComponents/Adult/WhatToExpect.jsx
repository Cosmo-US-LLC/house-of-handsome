import React from "react";
import whatToExpectImage from "../../../assets/images/adult/whatToExpect/what_to_expect.webp";

const expectations = [
  {
    id: 1,
    title: "Personalized styling:",
    description:
      "Custom cuts that match your style.",
  },
  {
    id: 2,
    title: "Attention to detail:",
    description:
      "We focus on the finer details to perfect your look.",
  },
  {
    id: 3,
    title: "Comfortable experience:",
    description:
      "A relaxing atmosphere for your grooming needs.",
  },
];

function WhatToExpect() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Heading */}
            <div className="space-y-3">
              <h2 className="font-['Cairo'] font-bold text-[#181818] md:text-[48px] text-[36px] leading-[55px]">
                What to Expect
              </h2>
              {/* <p className="font-['Urbanist'] font-normal text-[18px] leading-[26px] text-black max-w-[555px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,tempor
                incididunt ut labore et dolore magna
              </p> */}
            </div>

            {/* Expectations List */}
            <div className="space-y-4">
              {expectations.map((item, index) => (
                <div key={item.id+"adutl-what-to-expect"} className="group">
                  <div className={`group-hover:bg-[#D820280F] bg-[#DEDEDE4D] p-5 rounded-[12px] cursor-pointer`}>
                    <h3 className={`font-['Cairo'] font-bold group-hover:text-[#D82028] text-[#252525]  text-[24px] `}>
                       {item.title} 
                    </h3>
                    <p className="font-['Urbanist'] font-normal text-[16px] leading-[23px] text-[#252525] max-w-[488px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 h-[520px] rounded-2xl overflow-hidden">
            <img
              src={whatToExpectImage}
              alt="Professional barber grooming service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatToExpect;
