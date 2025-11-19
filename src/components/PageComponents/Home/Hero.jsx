import React from "react";
import PrimaryCTA from "../../ui/PrimaryCTA";
import heroImage from "../../../assets/images/hero/hairdresser_barber_shop_styling_hair_client.webp";

function Hero() {
  return (
    <section className="pt-4 w-full bg-[#F2F2F2]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex flex-col gap-6 items-end w-full md:flex-row md:gap-8">
          <div className="pt-4 pb-4 w-full md:w-[46%] space-y-4 text-left md:space-y-6 md:pt-16">
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
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="41"
                    height="42"
                    viewBox="0 0 41 42"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_214_540)">
                      <path
                        d="M40.9996 21.4685C40.9996 19.7468 40.86 18.4904 40.558 17.1875H20.918V24.9585H32.4462C32.2139 26.8897 30.9588 29.798 28.1696 31.7523L28.1305 32.0125L34.3403 36.8281L34.7706 36.8711C38.7217 33.2182 40.9996 27.8436 40.9996 21.4685Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M20.9176 41.9391C26.5655 41.9391 31.3069 40.0777 34.7702 36.867L28.1692 31.7482C26.4028 32.9814 24.032 33.8422 20.9176 33.8422C15.3859 33.8422 10.6909 30.1895 9.01728 25.1406L8.77197 25.1615L2.31491 30.1638L2.23047 30.3988C5.67034 37.2391 12.7361 41.9391 20.9176 41.9391Z"
                        fill="#34A853"
                      />
                      <path
                        d="M9.01805 25.1432C8.57645 23.8402 8.32088 22.4441 8.32088 21.0017C8.32088 19.5591 8.57645 18.1631 8.99482 16.8602L8.98312 16.5827L2.44515 11.5L2.23124 11.6019C0.813501 14.4404 0 17.628 0 21.0017C0 24.3753 0.813501 27.5628 2.23124 30.4013L9.01805 25.1432Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M20.9176 8.15925C24.8455 8.15925 27.4951 9.8577 29.006 11.2771L34.9096 5.5069C31.2838 2.13324 26.5655 0.0625 20.9176 0.0625C12.7361 0.0625 5.67034 4.76233 2.23047 11.6027L8.99405 16.861C10.6909 11.8122 15.3859 8.15925 20.9176 8.15925Z"
                        fill="#EB4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_214_540">
                        <rect width="41" height="42" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
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
          <div className="flex md:w-[54%] w-full justify-center items-end h-full md:justify-end">
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
