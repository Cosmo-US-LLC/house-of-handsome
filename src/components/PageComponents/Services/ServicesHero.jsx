import React from "react";
import ServiceUsImage from "../../../assets/images/services/ServicesHero/home_img.webp";
import PrimaryCTA from "../../../components/ui/PrimaryCTA";

export default function ServicesHero({
  image = ServiceUsImage,
  paragraphs = [
    "At House of Handsome, we believe in more than just a haircut – we offer a complete grooming experience. Whether you're preparing for a big event or just want to look and feel your best, our professional team is here to provide the highest quality service",
    "Explore our core services designed to meet your unique needs.",
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
        Our Services
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
