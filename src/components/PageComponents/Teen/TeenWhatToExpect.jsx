import React from "react";
import whatToExpectImage from "../../../assets/images/teen/whatToExpect/what_to_expect.webp";

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
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="w-full md:w-1/2 space-y-8">
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
            <div className="space-y-8">
              {expectations.map((item, index) => (
                <div key={item.id}>
                  <div className="space-y-4">
                    <h3 className="font-['Cairo'] font-bold text-[#252525] text-[24px] leading-[70px]">
                      {item.title}
                    </h3>
                    <p className="font-['Urbanist'] font-normal text-[16px] leading-[23px] text-[#252525] max-w-[488px]">
                      {item.description}
                    </p>
                  </div>

                  {/* Divider - don't show after last item */}
                  {index < expectations.length - 1 && (
                    <div className="mt-8 border-t border-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 h-[480px] rounded-2xl overflow-hidden">
            <img
              src={whatToExpectImage}
              alt="Teen grooming service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeenWhatToExpect;

