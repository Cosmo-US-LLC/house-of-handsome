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
              <div className="flex flex-col gap-6" id="strategic-expansion">
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
                <h3 className="text-[#181818] font-['Cairo'] text-[24px] font-bold capitalize leading-[32px]">
                  Why Partner With Us?
                </h3>
                <ul className=" space-x-4 space-y-5 grid grid-cols-2 space-y-4 font-['Urbanist'] font-medium md:text-[20px] leading-[24px] text-[#181818]">
                  <li className="flex flex-col gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M5.83325 6.6665V29.1665C5.83325 30.4926 6.36004 31.7644 7.29772 32.702C8.2354 33.6397 9.50717 34.1665 10.8333 34.1665H33.3333"
                        stroke="#D82028"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10.8333 24.9998L18.3333 17.4998L24.1666 23.3332L33.3333 14.1665"
                        stroke="#D82028"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Proven business model with strong ROI.
                  </li>
                  <li className="flex flex-col gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M34.6716 13.3335C35.1117 17.767 35.1117 22.2333 34.6716 26.6668"
                        stroke="#D82028"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M21.6667 20.0001C21.6667 16.8601 21.395 13.7835 20.875 10.7918C20.67 9.61845 19.3133 9.09345 18.3417 9.78345L14.2 12.7201C13.6363 13.1194 12.9625 13.3338 12.2717 13.3335H8.33333C7.44928 13.3335 6.60143 13.6846 5.97631 14.3098C5.35119 14.9349 5 15.7827 5 16.6668V23.3335C5 24.2175 5.35119 25.0654 5.97631 25.6905C6.60143 26.3156 7.44928 26.6668 8.33333 26.6668H12.2717C12.9625 26.6665 13.6363 26.8808 14.2 27.2801L18.3417 30.2168C19.3133 30.9068 20.67 30.3834 20.875 29.2084C21.4048 26.1677 21.6697 23.0867 21.6667 20.0001Z"
                        stroke="#D82028"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.1284 15C28.4029 18.3277 28.4029 21.6723 28.1284 25"
                        stroke="#D82028"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    Local marketing and brand support to drive visibility.
                  </li>
                  <li className="flex flex-col gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M7.5 2.5H32.5C35.27 2.5 37.5 4.73 37.5 7.5V32.5C37.5 35.27 35.27 37.5 32.5 37.5H7.5C4.73 37.5 2.5 35.27 2.5 32.5V7.5C2.5 4.73 4.73 2.5 7.5 2.5Z"
                        stroke="#D82028"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 10H12.5"
                        stroke="#D82028"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 12.5C14.337 12.5 13.7011 12.2366 13.2322 11.7678C12.7634 11.2989 12.5 10.663 12.5 10C12.5 9.33696 12.7634 8.70107 13.2322 8.23223C13.7011 7.76339 14.337 7.5 15 7.5C15.3283 7.5 15.6534 7.56466 15.9567 7.6903C16.26 7.81594 16.5356 8.00009 16.7678 8.23223C16.9999 8.46438 17.1841 8.73998 17.3097 9.04329C17.4353 9.34661 17.5 9.6717 17.5 10C17.5 10.3283 17.4353 10.6534 17.3097 10.9567C17.1841 11.26 16.9999 11.5356 16.7678 11.7678C16.5356 11.9999 16.26 12.1841 15.9567 12.3097C15.6534 12.4353 15.3283 12.5 15 12.5Z"
                        stroke="#D82028"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5 10L30 10"
                        stroke="#D82028"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M30 20H27.5"
                        stroke="#D82028"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M25 22.5C25.663 22.5 26.2989 22.2366 26.7678 21.7678C27.2366 21.2989 27.5 20.663 27.5 20C27.5 19.337 27.2366 18.7011 26.7678 18.2322C26.2989 17.7634 25.663 17.5 25 17.5C24.337 17.5 23.7011 17.7634 23.2322 18.2322C22.7634 18.7011 22.5 19.337 22.5 20C22.5 20.663 22.7634 21.2989 23.2322 21.7678C23.7011 22.2366 24.337 22.5 25 22.5Z"
                        stroke="#D82028"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22.5 20L10 20"
                        stroke="#D82028"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 30H12.5"
                        stroke="#D82028"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15 32.5C14.337 32.5 13.7011 32.2366 13.2322 31.7678C12.7634 31.2989 12.5 30.663 12.5 30C12.5 29.337 12.7634 28.7011 13.2322 28.2322C13.7011 27.7634 14.337 27.5 15 27.5C15.3283 27.5 15.6534 27.5647 15.9567 27.6903C16.26 27.8159 16.5356 28.0001 16.7678 28.2322C16.9999 28.4644 17.1841 28.74 17.3097 29.0433C17.4353 29.3466 17.5 29.6717 17.5 30C17.5 30.3283 17.4353 30.6534 17.3097 30.9567C17.1841 31.26 16.9999 31.5356 16.7678 31.7678C16.5356 31.9999 16.26 32.1841 15.9567 32.3097C15.6534 32.4353 15.3283 32.5 15 32.5Z"
                        stroke="#D82028"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.5 30L30 30"
                        stroke="#D82028"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Access to House of Handsome's operational expertise and
                    resources.
                  </li>
                  <li className="flex flex-col gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <path
                        d="M21.4233 5.83339C21.2815 5.58048 21.0749 5.3699 20.8247 5.22333C20.5746 5.07677 20.2899 4.99951 19.9999 4.99951C19.71 4.99951 19.4253 5.07677 19.1751 5.22333C18.9249 5.3699 18.7184 5.58048 18.5766 5.83339C18.2433 6.44006 17.9227 7.05451 17.6149 7.67673C16.6453 9.64499 15.8208 11.6815 15.1483 13.7701C14.9166 14.4884 14.2299 14.9867 13.4433 15.0084C11.0586 15.0711 8.68175 15.3078 6.33159 15.7167C5.04159 15.9434 4.55659 17.4134 5.47326 18.3101C5.68215 18.5156 5.89326 18.7184 6.10659 18.9184C7.7017 20.4248 9.38823 21.8314 11.1566 23.1301C11.7683 23.5784 12.0199 24.3467 11.7866 25.0501C10.8977 27.7218 10.2616 30.4711 9.88659 33.2617C9.71993 34.5201 11.0666 35.4084 12.2366 34.8084C14.5567 33.6188 16.7752 32.2408 18.8699 30.6884C19.198 30.4489 19.5937 30.3199 19.9999 30.3199C20.4061 30.3199 20.8018 30.4489 21.1299 30.6884C23.2242 32.2415 25.4428 33.6194 27.7633 34.8084C28.9316 35.4084 30.2799 34.5201 30.1133 33.2617C30.0488 32.7895 29.9783 32.3201 29.9016 31.8534C29.5166 29.5452 28.9521 27.2705 28.2133 25.0501C27.9799 24.3467 28.2299 23.5784 28.8433 23.1301C30.8495 21.66 32.7487 20.0493 34.5266 18.3101C35.4433 17.4134 34.9599 15.9434 33.6683 15.7167C31.3184 15.3054 28.9414 15.0687 26.5566 15.0084C26.1795 15.0024 25.8135 14.8803 25.5084 14.6587C25.2033 14.4371 24.9739 14.1268 24.8516 13.7701C23.9661 11.0212 22.818 8.36226 21.4233 5.83339Z"
                        stroke="#D82028"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Exclusive opportunity to lead our expansion in a high-growth
                    market.
                  </li>
                </ul>
              </div>
            </div>

            {/* Closing Line */}
            <p className="font-['Cairo'] text-[20px] font-medium text-[#181818] leading-[28px] bg-[#F7F7F7] border border-[#D3D3D3] py-[16px] px-5 rounded-xl">
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
