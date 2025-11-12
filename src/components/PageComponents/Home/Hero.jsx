import React from "react";
import PrimaryCTA from "../../ui/PrimaryCTA";
import heroImage from "../../../assets/images/hero/hairdresser_barber_shop_styling_hair_client.webp";

function Hero() {
  return (
    <section className="py-4 w-full bg-white">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex flex-col gap-6 items-center w-full md:flex-row md:gap-8">
          <div className="pt-4 w-full md:w-[46%] space-y-4 text-left md:space-y-6 md:pt-16">
            <h1 className="font-['Cairo'] font-bold text-neutral-900 leading-[36px] md:leading-[67px] text-[36px] md:text-[56px] lg:text-[68px]">
              The Ultimate Grooming Experience
            </h1>

            <h2 className="font-['Cairo'] text-xl font-semibold md:text-2xl lg:text-[38px] lg:leading-[41.36px] lg:tracking-[-0.752px]">
              Precision. Style.{" "}
              <span className="text-[#d82028]">Confidence.</span>
            </h2>

            <p className="mt-4 max-w-[531px] font-['Urbanist'] text-[18px] font-medium leading-[26px] text-black md:mt-6">
              At House of Handsome, we don't just style hair, we redefine your
              look. Our expert barbers craft looks that command attention and
              boost your confidence. Step in, stand out.
            </p>

            <div className="flex flex-row gap-4 md:gap-8 md:flex-row">
              <div className="mt-4 md:mt-4">
                <PrimaryCTA />
              </div>

              <div className="flex gap-2 items-center mt-2 md:gap-4 md:mt-3">
                <img
                  src="https://www.figma.com/api/mcp/asset/48d8d238-7db5-44c8-9ed2-cbfd1603a8fc"
                  alt="Google"
                  className="md:h-[52px] md:w-[51px] h-[42px] w-[41px]"
                />

                <div className="flex flex-col leading-tight">
                  <div className="flex items-baseline">
                    <span className="font-['Roboto_Slab'] md:text-[36px] text-[26px] font-bold text-black">
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
          <div className="flex md:w-[54%] w-full justify-center items-center h-full md:justify-end">
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
