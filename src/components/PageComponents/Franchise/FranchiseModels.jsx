import React from "react";
import modelImage from "../../../assets/images/franchise/franchiseModels/franchise_collage.webp";

export default function FranchiseModels({
  title = "Franchise Models",
  modelName = "Shop-in-Shop (Licensed Operator)",
  provides = [
    "Premium brand assets and marketing support",
    "Access to POS and booking systems",
    "Ongoing social media promotions",
    "Training and operational support",
  ],
  roles = [
    "Manage day-to-day operations and uphold our standards",
    "Earn performance-based revenue and share in profits",
  ],
  image = modelImage,
}) {
  return (
    <section className="pt-0 pb-20 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Title */}
        <div className="flex flex-col gap-4 items-start mb-6 md:mb-10 md:items-center">
          <h2 className="font-['Cairo'] md:text-[48px] text-[36px] font-bold text-[#181818] md:text-center md:leading-[55px] leading-[40px] capitalize">
            {title}
          </h2>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col gap-6 justify-between items-center md:gap-12 md:flex-row">
          {/* Left Image */}
          <div className="w-full md:w-[623px] md:h-[650px] rounded-lg overflow-hidden">
            <img
              src={image}
              alt={modelName}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Right Text Column */}
          <div className="flex flex-col gap-12 w-full md:w-[640px]">
            <div className="flex flex-col gap-6">
              <h3 className="text-[#d82028] font-['Cairo'] text-[24px] font-bold capitalize leading-[32px]">
                {modelName}
              </h3>

              {/* What We Provide */}
              <div className="flex flex-col gap-4">
                <h4 className="font-['Cairo'] text-[24px] font-bold text-[#181818] capitalize leading-[32px]">
                  What We Provide
                </h4>
                <ul className="  space-y-4 font-['Urbanist'] font-medium text-[#181818] text-[20px] leading-[24px]">
                  {provides.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M17.225 5.27515C17.4006 5.45093 17.4992 5.68921 17.4992 5.93765C17.4992 6.18609 17.4006 6.42437 17.225 6.60015L8.16252 15.6627C7.98674 15.8382 7.74846 15.9368 7.50002 15.9368C7.25158 15.9368 7.0133 15.8382 6.83752 15.6627L2.77502 11.6002C2.60922 11.4225 2.51889 11.1873 2.52309 10.9444C2.52729 10.7014 2.62568 10.4695 2.79752 10.2977C2.96937 10.1258 3.20123 10.0274 3.44422 10.0232C3.68721 10.019 3.92234 10.1093 4.10002 10.2752L7.50002 13.6752L15.9 5.27515C16.0758 5.09959 16.3141 5.00098 16.5625 5.00098C16.811 5.00098 17.0492 5.09959 17.225 5.27515Z"
                          fill="#D82028"
                        />
                      </svg>{" "}
                       <span className="flex-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Your Role Section */}
            <div className="flex flex-col gap-4">
              <h4 className="font-['Cairo'] text-[24px] font-bold text-[#181818] capitalize leading-[32px]">
                Your Role
              </h4>
              <ul className=" space-y-4 font-['Urbanist'] font-medium text-[#181818] text-[20px] leading-[24px]">
                {roles.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M17.225 5.27515C17.4006 5.45093 17.4992 5.68921 17.4992 5.93765C17.4992 6.18609 17.4006 6.42437 17.225 6.60015L8.16252 15.6627C7.98674 15.8382 7.74846 15.9368 7.50002 15.9368C7.25158 15.9368 7.0133 15.8382 6.83752 15.6627L2.77502 11.6002C2.60922 11.4225 2.51889 11.1873 2.52309 10.9444C2.52729 10.7014 2.62568 10.4695 2.79752 10.2977C2.96937 10.1258 3.20123 10.0274 3.44422 10.0232C3.68721 10.019 3.92234 10.1093 4.10002 10.2752L7.50002 13.6752L15.9 5.27515C16.0758 5.09959 16.3141 5.00098 16.5625 5.00098C16.811 5.00098 17.0492 5.09959 17.225 5.27515Z"
                        fill="#D82028"
                      />
                    </svg>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
