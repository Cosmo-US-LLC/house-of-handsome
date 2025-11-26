import React from "react";
import whatToExpectImage from "../../../assets/images/adult/whatToExpect/what_to_expect.webp";

const expectations = [
  {
    id: 1,
    title: "Personalized styling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,tempor incit ut labore et dolore magna",
  },
  {
    id: 2,
    title: "Attention to detail",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incidit ut labore et dolore magna",
  },
  {
    id: 3,
    title: "Comfortable experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor dunt ut labore et dolore magn",
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
            <div className="">
              {expectations.map((item, index) => (
                <div key={item.id}>
                  <div className="">
                   <ul className="pl-5">
                    <li className=" list-disc"> <h3 className="font-['Cairo'] font-bold text-[#252525] text-[24px] leading-[70px]">
                       {item.title}
                    </h3></li>
                   </ul>
                    {/* <p className="font-['Urbanist'] font-normal text-[16px] leading-[23px] text-[#252525] max-w-[488px]">
                      {item.description}
                    </p> */}
                  </div>

                  {/* Divider - don't show after last item */}
                  {index < expectations.length - 1 && (
                    <div className="mt-4 border-t border-gray-300" />
                  )}
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
