import React from "react";
import PrimaryCTA from "../../Buttons/PrimaryCTA";

function Experience() {
  return (
    <section className="relative pb-16 w-full bg-white pt-30">
      {/* Max Container Wrapper - 1280px */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8 ">
        {/* Arc Images Container */}
        <div className="relative mx-auto mb-12 h-[300px] w-full max-w-[1280px] md:h-[400px]">
          {/* Bottom Left Image */}
          <div className="absolute bottom-[-160px] left-0 h-[250px] w-[200px] md:h-[393px] md:w-[305px]">
            <img
              src="https://www.figma.com/api/mcp/asset/398fca8c-d95d-4e0e-a4c8-d673d7e59374"
              alt="Barber styling client"
              className="h-full w-full rounded-[40px] object-cover "
            />
          </div>

          {/* Top Left Image */}
          <div className="absolute left-[15%] top-0 h-[200px] w-[250px]  md:top-[-33px] md:left-[16.43%] md:h-[312px] md:w-[403px]">
            <img
              src="https://www.figma.com/api/mcp/asset/23c0a5b0-b2d1-4ad0-8845-3647a723219d"
              alt="Salon interior with barbers"
              className="h-full w-full rounded-[40px] object-cover"
            />
          </div>

          {/* Top Right Image */}
          <div className="absolute right-[15%] top-0 h-[200px] w-[250px] md:top-[-30px] md:right-[14.76%] md:h-[326px] md:w-[404px]">
            <img
              src="https://www.figma.com/api/mcp/asset/3a05334b-d5ca-4bdc-9423-2037bdb4762b"
              alt="Man getting professional haircut"
              className="h-full w-full rounded-[40px] object-cover"
            />
          </div>

          {/* Bottom Right Image */}
          <div className="absolute bottom-[-170px] right-0 h-[250px] w-[190px] md:right-[8px] md:h-[380px] md:w-[300px]">
            <img
              src="https://www.figma.com/api/mcp/asset/f50ad1cf-9df7-4142-8f03-0b2aeaea10bf"
              alt="Man getting beard shaved"
              className="h-full w-full rounded-[40px] object-cover "
            />
          </div>
        </div>

        {/* Text Content - Centered */}
        <div className="mx-auto  flex max-w-[500px] -mt-40 flex-col items-center gap-3 text-center">
          {/* Title */}
          <h2 className="font-['Cairo'] text-2xl font-normal leading-[80px] text-[#181818] md:text-[32px]">
            House of Handsome Experience
          </h2>

          {/* Subtitle */}
          <p className="font-['Urbanist'] text-base font-medium leading-[26px] text-[#181818]">
            More than just a haircut, it's a transformation!
          </p>

          {/* Description */}
          <p className="font-['Urbanist'] text-base font-medium leading-[26px] text-[#181818]">
            At House of Handsome, we focus on shaping confidence with every
            style. Our skilled barbers ensure you leave feeling as good as you
            look. It's an experience designed to elevate your confidence,
            effortlessly.
          </p>

          {/* CTA Button */}
          <div className="mt-4">
            <PrimaryCTA />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
