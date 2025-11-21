import React from "react";
import aboutUsImage from "../../../assets/images/about/aboutHero/about_hero.webp";
import PrimaryCTA from "../../../components/ui/PrimaryCTA";

export default function AboutUsHero({
  image = aboutUsImage,
  paragraphs = [
    "With a focus on quality, style, and precision, our barbers provide an unmatched experience that leaves you looking and feeling your best.",
    "Whether it’s a fresh cut, a sharp fade, or a clean shave, we bring your vision to life with expertise and care.",
  ],
  buttonText = "Book An Appointment",
}) {
  return (
    <section className="max-md:pt-8 max-md:pb-20 bg-[#F2F2F2] sm:px-8 overflow-hidden">
      <div className="mx-auto max-w-[1280px] relative px-4 md:px-8">
        <div className="flex flex-col gap-12 items-center md:min-h-[535px] md:flex-row">
          <div className="text-left md:w-[45%] w-full">
            <h2 className="mb-4 text-[48px] font-['Cairo'] font-[400]  text-[#000] leading-[67px] capitalize "
            style={{
              WebkitTextStrokeWidth:"1px",
              WebkitTextStrokeColor:"#000"
            }}
            >
          At House of Handsome, we redefine grooming.
        </h2>
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
