import React from "react";
import adultHeroImage from "../../../assets/images/adult/adultHero/adult_hero.webp";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import { handleRedirectOfBookAppontment } from "@/utils/BookAnAppontemtREdirection";

export default function AdultHero({
  image = adultHeroImage,
  paragraphs = [
    "At House of Handsome, we deliver premium grooming for the modern man. Enjoy expert craftsmanship, a relaxed atmosphere, and a look that boosts your confidence every time",
  ],
}) {
  return (
    <section className="max-md:pt-8 max-md:pb-20 bg-[#F2F2F2] sm:px-8 overflow-hidden">
      <div className="mx-auto max-w-[1280px] relative px-4 md:px-8">
        <div className="flex flex-col gap-12 items-center md:min-h-[535px] md:flex-row">
          <div className="text-left 2xl:w-[55%] md:w-[40%] w-full">
            <h2
              className="mb-4 md:text-[48px] text-[36px] leading-[42px] font-['Cairo'] font-[700]  text-[#000] md:leading-[55px] capitalize "
            
            >
              Sharp. Professional. <br className="max-md:hidden" /> Confident.
            </h2>
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className="mb-4 text-[16px] font-['Urbanist'] leading-[26px] font-medium text-[#181818] max-w-[500px]"
              >
                {text}
              </p>
            ))}
            <PrimaryCTA onClick={handleRedirectOfBookAppontment} children={""} className="mt-4" />
          </div>
          <div className="md:max-w-[769px] w-full md:bottom-0  md:absolute md:-right-20">
            <img
              src={image}
              alt={"At House of Handsome"}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
