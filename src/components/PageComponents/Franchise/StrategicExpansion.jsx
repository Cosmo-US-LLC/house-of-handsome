import React from "react";
import expansionImage from "../../../assets/images/franchise/strategicExpansion/strategic_expansion_img.webp";

export default function StrategicExpansion({ image = expansionImage }) {
  return (
    <section className="py-10 bg-white md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-12 justify-between items-start md:flex-row">
          {/* Left Text Column */}
          <div className="flex flex-col gap-12 w-full md:w-[640px]">
            {/* Main Content */}
            <div className="flex flex-col gap-6">
              {/* Title and Description */}
              <div className="flex flex-col gap-6">
                <h2 className="font-['Cairo'] md:text-[48px] text-[36px] font-bold text-[#181818] md:leading-[55px] leading-[40px] capitalize">
                  Strategic Expansion: Red Deer
                </h2>

                {/* Paragraphs with bold highlights */}
                <div className="flex flex-col gap-0 font-['Urbanist'] font-medium text-[16px] text-[#181818] leading-[26px]">
                  <p>
                    We're expanding into{" "}
                    <span className="font-bold">Red Deer</span>, a vibrant
                    market with over{" "}
                    <span className="font-bold">112,000 residents</span> and
                    rising demand for premium grooming.
                  </p>
                  <p className="mt-6">
                    We're looking for an operational partner in Red Deer to help
                    bring our brand's signature style and service to life. With
                    our proven systems, local marketing support, and established
                    reputation, you'll have everything needed to build a{" "}
                    <span className="font-bold">
                      profitable and sustainable business.
                    </span>
                  </p>
                </div>
              </div>

              {/* Why Partner Section */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[#d82028] font-['Cairo'] text-[24px] font-bold capitalize leading-[32px]">
                  Why Partner With Us?
                </h3>
                <ul className="list-disc pl-8 space-y-4 font-['Urbanist'] font-medium text-[20px] leading-[24px] text-[#181818]">
                  <li>Proven business model with strong ROI.</li>
                  <li>
                    Local marketing and brand support to drive visibility.
                  </li>
                  <li>
                    Access to House of Handsome's operational expertise and
                    resources.
                  </li>
                  <li>
                    Exclusive opportunity to lead our expansion in a high-growth
                    market.
                  </li>
                </ul>
              </div>
            </div>

            {/* Closing Line */}
            <p className="font-['Cairo'] text-[20px] font-bold text-[#181818] leading-[28px]">
              Be part of the next chapter in our story, let's shape Red Deer's
              grooming scene together.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[623px] md:h-[680px] h-[400px] rounded-lg overflow-hidden">
            <img
              src={image}
              alt="Strategic Expansion Red Deer"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
