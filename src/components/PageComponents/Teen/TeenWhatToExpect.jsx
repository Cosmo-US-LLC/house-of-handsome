import React from "react";
import whatToExpectImage from "../../../assets/images/teen/whatToExpect/expect_image.webp";

const expectations = [
  {
    id: 1,
    title: "Trend-Focused Style Advice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,tempor incit ut labore et dolore magna",
  },
  {
    id: 2,
    title: "Modern, Clean Results",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incidit ut labore et dolore magna",
  },
  {
    id: 3,
    title: "Easy, Comfortable Experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor dunt ut labore et dolore magn",
  },
];

function TeenWhatToExpect() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex flex-col gap-12 items-center md:flex-row">
          {/* Left Side - Text Content */}
          <div className="space-y-4 w-full md:w-1/2">
            {/* Heading */}
            <div className="space-y-3">
              <h2 className="font-['Cairo'] font-bold text-[#181818] text-[36px] md:text-[48px] leading-[55px]">
                What to Expect
              </h2>
              <p className="font-['Urbanist'] font-normal text-[18px] leading-[26px] text-black max-w-[555px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,tempor
                incididunt ut labore et dolore magna
              </p>
            </div>

            {/* Expectations List */}
            <div className="">
              {expectations.map((item, index) => (
                <div key={item.id}>
                  <div className="">
                    <h3 className="font-['Cairo'] font-bold text-[#252525] text-[24px] leading-[70px]">
                      {item.title}
                    </h3>
                    <p className="font-['Urbanist'] font-normal text-[16px] leading-[23px] text-[#252525] max-w-[488px]">
                      {item.description}
                    </p>
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
              alt="Teen grooming service"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeenWhatToExpect;
