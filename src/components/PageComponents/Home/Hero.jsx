import React from "react";
import PrimaryCTA from "../../Buttons/PrimaryCTA";
import heroImage from "../../../assets/images/hero/hairdresser_barber_shop_styling_hair_client.webp";

/**
 * Hero Section Component
 * Two-column layout: text content on left, image on right (desktop)
 * Stacks vertically on mobile with image on top
 */
function Hero() {
  return (
    <section className="py-4 w-full bg-white">
      {/* Max Container Wrapper - 1280px */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Grid Layout - 2 columns on desktop, stack on mobile */}
        <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="pt-16 space-y-6 text-left">
            {/* Main Headline - "The Ultimate Grooming Experience" */}
            <h1 className="font-['Cairo'] text-[40px] font-bold leading-tight text-neutral-900 md:text-[56px] md:leading-[67px] lg:text-[68px]">
              The Ultimate Grooming Experience
            </h1>

            {/* Subline - "Precision. Style. Confidence." with red last word */}
            <h2 className="font-['Cairo'] text-xl font-semibold md:text-2xl lg:text-[38px] lg:leading-[41.36px] lg:tracking-[-0.752px]">
              Precision. Style.{" "}
              <span className="text-[#d82028]">Confidence.</span>
            </h2>

            {/* Description Paragraph */}
            <p className="mt-4 max-w-[531px] font-['Urbanist'] text-[18px] font-medium leading-[26px] text-black md:mt-6">
              At House of Handsome, we don't just style hair, we redefine your
              look. Our expert barbers craft looks that command attention and
              boost your confidence. Step in, stand out.
            </p>

            {/* CTA Button */}
            <div className="flex gap-8">
              <div className="mt-6">
                <PrimaryCTA />
              </div>

              {/* Google Rating Row */}
              <div className="inline-flex gap-4 items-center mt-2">
                {/* Google Logo */}
                <img
                  src="https://www.figma.com/api/mcp/asset/48d8d238-7db5-44c8-9ed2-cbfd1603a8fc"
                  alt="Google"
                  className="h-[42px] w-[41px]"
                />

                {/* Rating Details */}
                <div className="flex flex-col leading-tight">
                  <div className="flex items-baseline">
                    <span className="font-['Roboto_Slab'] text-[36px] font-bold text-black">
                      4.9
                    </span>
                    <span className="font-['Roboto_Slab'] text-[16px] font-bold text-black">
                      /5
                    </span>
                  </div>
                  <span className="font-['Onest'] text-[12px] font-normal text-black">
                    Out of 3,000 Reviews
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image of Two Male Models */}
          <div className="flex order-first justify-center items-center h-full md:order-last md:justify-end">
            <img
              src={heroImage}
              alt="Two well-groomed male models in black clothing"
              className="w-full h-full md:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
