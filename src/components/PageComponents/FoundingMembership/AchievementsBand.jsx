import React from "react";

function AchievementsBand() {
  return (
    <div className="w-full border-b border-[#ececec] bg-[#f5f5f5] py-8">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 px-4 md:grid-cols-[auto_1fr] md:items-center md:gap-10 md:px-8">
        <div className="flex items-center gap-3.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 41 42" fill="none">
            <g>
              <path d="M40.9996 21.4685C40.9996 19.7468 40.86 18.4904 40.558 17.1875H20.918V24.9585H32.4462C32.2139 26.8897 30.9588 29.798 28.1696 31.7523L28.1305 32.0125L34.3403 36.8281L34.7706 36.8711C38.7217 33.2182 40.9996 27.8436 40.9996 21.4685Z" fill="#4285F4" />
              <path d="M20.9176 41.9391C26.5655 41.9391 31.3069 40.0777 34.7702 36.867L28.1692 31.7482C26.4028 32.9814 24.032 33.8422 20.9176 33.8422C15.3859 33.8422 10.6909 30.1895 9.01728 25.1406L8.77197 25.1615L2.31491 30.1638L2.23047 30.3988C5.67034 37.2391 12.7361 41.9391 20.9176 41.9391Z" fill="#34A853" />
              <path d="M9.01805 25.1432C8.57645 23.8402 8.32088 22.4441 8.32088 21.0017C8.32088 19.5591 8.57645 18.1631 8.99482 16.8602L8.98312 16.5827L2.44515 11.5L2.23124 11.6019C0.813501 14.4404 0 17.628 0 21.0017C0 24.3753 0.813501 27.5628 2.23124 30.4013L9.01805 25.1432Z" fill="#FBBC05" />
              <path d="M20.9176 8.15925C24.8455 8.15925 27.4951 9.8577 29.006 11.2771L34.9096 5.5069C31.2838 2.13324 26.5655 0.0625 20.9176 0.0625C12.7361 0.0625 5.67034 4.76233 2.23047 11.6027L8.99405 16.861C10.6909 11.8122 15.3859 8.15925 20.9176 8.15925Z" fill="#EB4335" />
            </g>
          </svg>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-['Cairo'] text-[30px] font-bold leading-none text-[#111111]">
                4.9
              </span>
              <span className="tracking-[2px] text-[15px] text-[#FBBC05]">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
            </div>
            <small className="mt-0.5 block font-['Urbanist'] text-[12.5px] text-[#6b6b6b]">
              3,000+ Google reviews
            </small>
          </div>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="flex flex-wrap gap-3">
            <div className="flex flex-col gap-0.5 rounded-[10px] border border-[#ececec] bg-white px-4.5 py-2.5">
              <span className="font-['Urbanist'] text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
                CommunityVotes Sherwood Park
              </span>
              <span className="font-['Cairo'] text-[15px] font-bold text-[#b9862e]">
                2023 Silver Winner &middot; Best Barber Shops
              </span>
            </div>
            <div className="flex flex-col gap-0.5 rounded-[10px] border border-[#ececec] bg-white px-4.5 py-2.5">
              <span className="font-['Urbanist'] text-[10.5px] font-semibold uppercase tracking-[0.12em] text-[#6b6b6b]">
                Quality Business Awards
              </span>
              <span className="font-['Cairo'] text-[15px] font-bold text-[#b9862e]">
                2024 Winner
              </span>
            </div>
          </div>
          <p className="font-['Urbanist'] text-[13px] text-[#6b6b6b]">
            <strong className="mr-2 font-['Cairo'] font-bold text-[#111111]">
              6 shops across Alberta:
            </strong>
            Sherwood Park &middot; Spruce Grove &middot; Whyte Avenue &middot;
            Edmonton Downtown &middot; South Common &middot; Cameron Heights
          </p>
        </div>
      </div>
    </div>
  );
}

export default AchievementsBand;
