import React from "react";
import kidsHeroImage from "../../../assets/images/kids/kidsHero/kids_hero.webp";

export default function AdultHero({
  image = kidsHeroImage,
  paragraphs = [
    "At House of Handsome, we help teens express their style with modern cuts, clean finishes, and looks that boost confidence.",
  ],
}) {
  return (
    <section className="max-md:pt-8 max-md:pb-20 bg-[#F2F2F2] sm:px-8 overflow-hidden">
      <div className="mx-auto max-w-[1280px] relative px-4 md:px-8">
        <div className="flex flex-col gap-12 items-center md:min-h-[510px] md:flex-row">
          <div className="text-left md:w-[45%] w-full">
            <h2
              className="mb-4 md:text-[48px] text-[36px] font-['Cairo'] font-[400]  text-[#000] leading-[55px] capitalize "
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#000",
              }}
            >
              Fun. Friendly <br /> Comfortable.
            </h2>
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className="mb-4 text-[16px] font-['Urbanist'] leading-[26px] font-medium text-[#181818] max-w-[500px]"
              >
                {text}
              </p>
            ))}
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
