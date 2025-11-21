import React from "react";
import PrimaryCTA from "../../ui/PrimaryCTA";
import adultHeroImage from "../../../assets/images/adult/adultHero/adult_hero.webp";

function AdultHero() {
  return (
    <section className="w-full bg-[#F2F2F2]">
      <div className="mx-auto max-w-[1440px] px-10">
        <div className="flex flex-col gap-12 items-center py-12 md:flex-row md:py-16">
          {/* Left Column - Text Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="font-['Cairo'] font-normal text-black text-[36px] md:text-[48px] leading-[42px] md:leading-[55px] capitalize">
              Sharp. Professional. Confident.
            </h1>

            <p className="font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#181818] max-w-[554px]">
              At House of Handsome, we deliver premium grooming for the modern
              man. Enjoy expert craftsmanship, a relaxed atmosphere, and a look
              that boosts your confidence every time.
            </p>

            <div className="pt-2">
              <PrimaryCTA>Book Appointment</PrimaryCTA>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[535px]">
            <img
              src={adultHeroImage}
              alt="Professional barber styling client's hair"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdultHero;
