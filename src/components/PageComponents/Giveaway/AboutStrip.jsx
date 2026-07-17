import React from "react";
import aboutBg from "@/assets/images/location/shop_image/shop_image6.webp";

function AboutStrip() {
  return (
    <section
      className="relative w-full overflow-hidden bg-black bg-cover bg-center py-14 md:py-[84px]"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="absolute inset-0 bg-black/88" />
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-8">
        <p className="mb-3 font-['Urbanist'] text-[14px] font-semibold uppercase tracking-[0.2em] text-[#d82028]">
          Who's Behind This?
        </p>
        <h2 className="mb-3 font-['Cairo'] text-[28px] font-bold tracking-[-0.01em] text-white md:text-[40px]">
          Started In Edmonton. <span className="text-[#d82028]">Opening In Red Deer.</span>
        </h2>
        <p className="max-w-[58ch] font-['Urbanist'] text-[16px] text-white/65">
          House of Handsome grew one chair at a time into six barbershops
          across Alberta: precision cuts, hot towel shaves, and a grooming
          standard thousands of clients rate at 4.9 stars. Red Deer is shop
          No. 7.
        </p>

        <div className="mt-6.5 inline-flex items-center gap-3 rounded-[10px] border border-white/14 bg-white/[0.08] px-4 py-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 41 42" fill="none">
            <g>
              <path d="M40.9996 21.4685C40.9996 19.7468 40.86 18.4904 40.558 17.1875H20.918V24.9585H32.4462C32.2139 26.8897 30.9588 29.798 28.1696 31.7523L28.1305 32.0125L34.3403 36.8281L34.7706 36.8711C38.7217 33.2182 40.9996 27.8436 40.9996 21.4685Z" fill="#4285F4" />
              <path d="M20.9176 41.9391C26.5655 41.9391 31.3069 40.0777 34.7702 36.867L28.1692 31.7482C26.4028 32.9814 24.032 33.8422 20.9176 33.8422C15.3859 33.8422 10.6909 30.1895 9.01728 25.1406L8.77197 25.1615L2.31491 30.1638L2.23047 30.3988C5.67034 37.2391 12.7361 41.9391 20.9176 41.9391Z" fill="#34A853" />
              <path d="M9.01805 25.1432C8.57645 23.8402 8.32088 22.4441 8.32088 21.0017C8.32088 19.5591 8.57645 18.1631 8.99482 16.8602L8.98312 16.5827L2.44515 11.5L2.23124 11.6019C0.813501 14.4404 0 17.628 0 21.0017C0 24.3753 0.813501 27.5628 2.23124 30.4013L9.01805 25.1432Z" fill="#FBBC05" />
              <path d="M20.9176 8.15925C24.8455 8.15925 27.4951 9.8577 29.006 11.2771L34.9096 5.5069C31.2838 2.13324 26.5655 0.0625 20.9176 0.0625C12.7361 0.0625 5.67034 4.76233 2.23047 11.6027L8.99405 16.861C10.6909 11.8122 15.3859 8.15925 20.9176 8.15925Z" fill="#EB4335" />
            </g>
          </svg>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-['Cairo'] text-[20px] font-extrabold text-white">
                4.9
              </span>
              <span className="tracking-[2px] text-[14px] text-[#FBBC05]">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
            </div>
            <small className="block font-['Urbanist'] text-[12px] text-white/60">
              Out of 3,000+ reviews across our Alberta shops
            </small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutStrip;
