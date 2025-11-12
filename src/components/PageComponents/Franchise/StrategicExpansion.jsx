import React from "react";
import expansionImage from "../../../assets/images/franchise/strategicExpansion/strategic_expansion_img.webp";

export default function StrategicExpansion({
  title = "Strategic Expansion: Red Deer",
  locationHighlight = "Red Deer",
  population = "112,000 residents",
  introParagraphs = [
    "We’re expanding into Red Deer, a vibrant market with over 112,000 residents and rising demand for premium grooming.",
    "We’re looking for an operational partner in Red Deer to help bring our brand’s signature style and service to life.",
    "With our proven systems, local marketing support, and established reputation, you’ll have everything needed to build a profitable and sustainable business.",
  ],
  reasons = [
    "Proven business model with strong ROI.",
    "Local marketing and brand support to drive visibility.",
    "Access to House of Handsome’s operational expertise and resources.",
    "Exclusive opportunity to lead our expansion in a high-growth market.",
  ],
  closingText = "Be part of the next chapter in our story, let’s shape Red Deer’s grooming scene together.",
  image = expansionImage,
}) {
  return (
    <section className="px-4 py-16 bg-white sm:px-8">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
          {/* Left Text Column */}
          <div className="space-y-5">
            <h2 className="font-['Cairo'] text-[32px] md:text-[42px] font-bold text-[#181818]">
              {title}
            </h2>

            {introParagraphs.map((p, i) => (
              <p
                key={i}
                className="font-['Urbanist'] text-[16px] leading-[26px] text-[#181818]"
              >
                {p}
              </p>
            ))}

            {/* Why Partner Section */}
            <div>
              <h3 className="text-[#E10000] font-['Cairo'] text-[18px] font-semibold mb-3">
                Why Partner With Us?
              </h3>
              <ul className="list-disc pl-5 space-y-2 font-['Urbanist'] text-[16px] leading-[26px] text-[#181818]">
                {reasons.map((reason, index) => (
                  <li key={index}>{reason}</li>
                ))}
              </ul>
            </div>

            {/* Closing Line */}
            <p className="font-['Urbanist'] text-[16px] font-semibold text-[#181818] pt-4">
              {closingText}
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img
              src={image}
              alt={title}
              className="rounded-lg w-full h-auto md:h-[400px] object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
