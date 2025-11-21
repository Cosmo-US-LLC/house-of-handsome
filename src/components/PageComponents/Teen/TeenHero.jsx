import React from "react";
import PrimaryCTA from "../../ui/PrimaryCTA";
import teenHeroImage from "../../../assets/images/teen/teenHero/teen_hero.webp";

function TeenHero() {
  return (
    <section className="w-full bg-[#F2F2F2]">
      <div className="mx-auto max-w-[1440px] px-10">
        <div className="flex flex-col gap-12 items-center py-12 md:flex-row md:py-16">
          {/* Left Column - Text Content */}
          <div className="space-y-6 w-full md:w-1/2">
            <h1 className="font-['Cairo'] font-normal text-black text-[36px] md:text-[48px] leading-[42px] md:leading-[55px] capitalize">
              Fresh. Trendy. Confident.
            </h1>

            <p className="font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#181818] max-w-[554px]">
              At House of Handsome, we help teens look their best with modern
              styles tailored just for them. Whether it's your first cut or
              you're looking for the latest trends, we've got you covered.
            </p>

            <div className="pt-2">
              <PrimaryCTA>Book Appointment</PrimaryCTA>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[535px]">
            <img
              src={teenHeroImage}
              alt="Barber styling teenager's hair"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeenHero;
