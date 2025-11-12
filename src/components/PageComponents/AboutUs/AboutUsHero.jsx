import React from "react";
import aboutUsImage from "../../../assets/images/about/aboutHero/about_hero.webp";
import PrimaryCTA from "../../../components/ui/PrimaryCTA";

export default function AboutUsHero({
  title = "About Us",
  image = aboutUsImage,
  paragraphs = [
    "At House of Handsome, we redefine grooming.",
    "With a focus on quality, style, and precision, our barbers provide an unmatched experience that leaves you looking and feeling your best.",
    "Whether it’s a fresh cut, a sharp fade, or a clean shave, we bring your vision to life with expertise and care.",
  ],
  buttonText = "Book An Appointment",
}) {
  return (
    <section className="pt-8 pb-20 bg-white sm:px-8">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <h1 className="mb-12 text-[68px] font-['Cairo'] font-normal text-center text-[#000] leading-[67px] capitalize border-b border-[#000] pb-10">
          {title}
        </h1>

        <div className="flex flex-col gap-12 items-center md:flex-row">
          <div className="md:w-[50%] w-full">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-auto rounded-md"
            />
          </div>
          <div className="text-left md:w-[50%] w-full">
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className="mb-4 text-[16px] font-['Urbanist'] leading-[26px] font-medium text-[#181818] max-w-[500px]"
              >
                {text}
              </p>
            ))}
            <PrimaryCTA children={buttonText} className="mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
