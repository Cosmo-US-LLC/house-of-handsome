import React from "react";
import PrimaryCTA from "../../ui/PrimaryCTA";
import kidsHeroImage from "../../../assets/images/kids/kidsHero/kids_hero.webp";

function KidsHero() {
  return (
    <section className="w-full bg-[#F2F2F2]">
      <div className="mx-auto max-w-[1440px] px-10">
        <div className="flex flex-col gap-12 items-center py-12 md:flex-row md:py-16">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="font-['Cairo'] font-normal text-black text-[36px] md:text-[48px] leading-[42px] md:leading-[55px] capitalize">
              Fun. Friendly. Comfortable.
            </h1>

            <p className="font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#181818] max-w-[554px]">
              At House of Handsome, we help make grooming fun with modern cuts,
              comb-free styles, and keeps the head-out-of-phone.
            </p>

            <div className="pt-2">
              <PrimaryCTA>Book Appointment</PrimaryCTA>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[535px]">
            <img
              src={kidsHeroImage}
              alt="Happy kid getting a haircut"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default KidsHero;

