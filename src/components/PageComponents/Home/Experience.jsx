import React from "react";
import PrimaryCTA from "../../Buttons/PrimaryCTA";
import experienceImage1 from "../../../assets/images/experience/exp_c1.png";
import experienceImage2 from "../../../assets/images/experience/exp_c2.png";
import experienceImage3 from "../../../assets/images/experience/exp_c3.png";
import experienceImage4 from "../../../assets/images/experience/exp_c4.png";

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
              src={experienceImage1}
              alt="Barber styling client"
              className="h-full w-full rounded-[40px] object-cover "
            />
          </div>

          {/* Top Left Image */}
          <div className="absolute left-[15%] top-0 h-[200px] w-[250px]  md:top-[-33px] md:left-[16.43%] md:h-[312px] md:w-[403px]">
            <img
              src={experienceImage2}
              alt="Salon interior with barbers"
              className="h-full w-full rounded-[40px] object-cover"
            />
          </div>

          {/* Top Right Image */}
          <div className="absolute right-[15%] top-0 h-[200px] w-[250px] md:top-[-30px] md:right-[14.76%] md:h-[326px] md:w-[404px]">
            <img
              src={experienceImage3}
              alt="Man getting professional haircut"
              className="h-full w-full rounded-[40px] object-cover"
            />
          </div>

          {/* Bottom Right Image */}
          <div className="absolute bottom-[-170px] right-0 h-[250px] w-[190px] md:right-[8px] md:h-[380px] md:w-[300px]">
            <img
              src={experienceImage4}
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
