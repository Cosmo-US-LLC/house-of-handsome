
import React from "react";
import PrimaryCTA from "../../ui/PrimaryCTA";
import heroImage from "@/assets/images/cameronHeights/hero-desktop.webp";
import mobileheroImage from "@/assets/images/cameronHeights/hero-mobile.webp"
import app_dow1 from "../../../assets/images/footer/app_dwn (2).svg";
import app_dow2 from "../../../assets/images/footer/app_dwn (1).svg";
import phorestAward from "../../../assets/images/awards/phorest_client_experience_award_2026.png";
import { CAMERON_HEIGHTS_BOOKING_URL } from "@/utils/BookAnAppontemtREdirection";

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 41 42" fill="none">
    <g clipPath="url(#ch_clip0_214_540)">
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
      <clipPath id="ch_clip0_214_540">
        <rect width="41" height="42" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

function Hero() {
  // const handleBook = () => {
  //   window.location.href = `${CAMERON_HEIGHTS_BOOKING_URL}?service=${encodeURIComponent("General Booking")}`;
  // };
  const handleOnClick = () => {
    window.location.href = `${CAMERON_HEIGHTS_BOOKING_URL}?service=${encodeURIComponent("General Booking")}`;
  };

  return (

    <header className="relative w-full pt-4">
      <div className="mx-auto max-w-[1280px]  px-4 md:px-8 ">
        <div className="flex flex-col gap-6 items-center max-md:justify-center min-h-[720px] w-full md:flex-row md:gap-8">
          <div className="relative z-10 pt-16 pb-4 w-full md:w-[65%] space-y-4 text-left md:space-y- md:pt-0">
            <h1
              className="font-['Cairo'] font-[700] text-neutral-900 leading-[114.583%] md:leading-[114.583%] text-[36px] md:text-[48px] !text-[#fff] max-w-[631px]"
            >
              Redefine Your Everyday Look.
            </h1>

            <h2 className="font-['Cairo'] !text-[#fff] text-xl font-semibold md:text-2xl lg:text-[38px] lg:leading-[41.36px] lg:tracking-[-0.752px]">
              Skill. Detail.{" "}
              <span className="text-[#d82028]">Confidence.</span>
            </h2>

            <p className="mt-4 max-w-[531px] font-['Urbanist'] text-[18px] font-medium leading-[26px]  md:mt-6 !text-[#fff]">
              At House of Handsome Cameron Heights, we don't just cut hair, we craft a look that holds up all week.
              Every visit pairs sharp technique with genuine care, so you leave the chair sharper than you walked
              in.
            </p>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
              <div className="w-full mt-4 md:w-auto max-md:hidden">
                <PrimaryCTA onClick={handleOnClick} className="w-full md:w-auto" />
              </div>
              <div className="flex items-center gap-4 mt-2 md:mt-3 md:gap-6">
                <div className="flex items-center gap-3">
                  <img
                    src={phorestAward}
                    alt="Phorest Client Experience Award 2026"
                    className="h-[46px] w-auto md:h-[47px]"
                  />
                  <div className="flex flex-col pb-1 leading-tight">
                    <div className="flex items-baseline">
                      <span className="font-['Roboto_Slab'] !text-[#fff] md:text-[30px] text-[22px] font-bold ">
                        4.8
                      </span>
                      <span className="font-['Roboto_Slab'] text-[16px] font-bold !text-[#fff]">
                        /5
                      </span>
                    </div>
                    <span className="font-['Onest'] text-[10px] font-normal !text-[#fff]">
                      Clients Love Us
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 md:gap-4">
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
                  <div className="flex flex-col pb-1 leading-tight">
                    <div className="flex items-baseline">
                      <span className="font-['Roboto_Slab'] !text-[#fff] md:text-[30px] text-[22px] font-bold ">
                        4.9
                      </span>
                      <span className="font-['Roboto_Slab'] text-[16px] font-bold !text-[#fff]">
                        /5
                      </span>
                    </div>
                    <span className="font-['Onest'] text-[10px] font-normal !text-[#fff]">
                      Google Rating
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full mt-4 md:mt-0 md:w-auto md:hidden">
                <PrimaryCTA onClick={handleOnClick} className="w-full md:w-auto" />
              </div>
            </div>

            <div className="mt-6 w-full max-w-[420px] border-t border-white/20 md:mt-8" />

            <div className="mt-4 space-y-3 md:mt-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.phorest.houseofhandsomebarbershop"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-['Urbanist'] text-sm font-semibold !text-[#fff] hover:text-[#d82028]"
              >
                Book faster on the app
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.phorest.houseofhandsomebarbershop"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={app_dow1} alt="Get it on Google Play" className="w-auto h-10 md:h-12" />
                </a>
                <a
                  href="https://apps.apple.com/gb/app/house-of-handsome-barbershop/id1588244951"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={app_dow2} alt="Download on the App Store" className="w-auto h-10 md:h-12" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image of Two Male Models */}
          <div className="flex w-full md:min-h-[825px] min-h-[825px] h-full object-cover md:top-0 z-0 absolute md:right-0 ">
            {/* <img
              src={heroImage}
              alt="Two well-groomed male models  in black clothing"
              className="!w-full h-full object-cover bg-center md:w-full "
            /> */}
            <img
              src={heroImage}
              alt="House of Handsome Cameron Heights barber trimming a client's beard"
              className="hidden object-cover w-full h-full bg-center md:block"
            />
            <div
              className="absolute inset-0 z-10 block md:hidden"
              style={{
                background:
                  "linear-gradient(180deg, #000 11.41%, rgba(0, 0, 0, 0.22) 75.54%, rgba(0, 0, 0, 0.20) 100%)",
              }}
            />
            <img
              src={mobileheroImage}
              alt="House of Handsome Cameron Heights barber trimming a client's beard"
              className="block object-cover w-full h-full pt-20 bg-center md:hidden"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
