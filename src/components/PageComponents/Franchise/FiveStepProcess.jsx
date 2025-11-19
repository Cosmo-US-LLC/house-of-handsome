import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Example images
import step1 from "../../../assets/images/franchise/FiveStepProcess/step_c1.webp";
import step2 from "../../../assets/images/franchise/FiveStepProcess/step_c2.webp";
import step3 from "../../../assets/images/franchise/FiveStepProcess/step_c3.webp";
import step4 from "../../../assets/images/franchise/FiveStepProcess/step_c4.webp";
import step5 from "../../../assets/images/franchise/FiveStepProcess/step_c5.webp";

const defaultSteps = [
  {
    id: 1,
    title: "Connect",
    description: "Reach out via our inquiry form",
    image: step1,
  },
  {
    id: 2,
    title: "Consult",
    description: "Meet our franchise team to discuss your goals.",
    image: step2,
  },
  {
    id: 3,
    title: "Select",
    description: "Choose your ideal model and location.",
    image: step3,
  },
  {
    id: 4,
    title: "Step Up",
    description: "We help you design, train, and launch.",
    image: step4,
  },
   {
    id: 5,
    title: "Scale",
    description: "With ongoing marketing & CRM support",
    image: step5,
  },
];

export default function FiveStepProcess({
  title = "Our Proven 5-Step Process",
  subtitle = "We've simplified franchise ownership, no guesswork, no stress.",
  steps = defaultSteps,
}) {
  return (
    <section className="py-10 bg-white md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-6 md:mb-12">
          <h2 className="font-['Cairo'] md:text-[48px] text-[36px] font-bold text-[#181818] md:leading-[55px] leading-[40px]">
            {title}
          </h2>
          <p className="font-['Urbanist'] font-normal text-[18px] text-black leading-[26px]">
            {subtitle}
          </p>
        </div>

        {/* Carousel */}
        <Carousel opts={{ align: "start", loop: false }}>
          <CarouselContent className="gap-2">
            {steps.map((step) => (
              <CarouselItem key={step.id} className="md:basis-auto">
                <div className="md:w-[388px] md:w-[340px] flex flex-col overflow-hidden rounded-lg group cursor-pointer">
                  {/* Image */}
                  <div className="h-[400px] w-full rounded-t-lg overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="object-cover w-full h-full transition-all duration-300 grayscale group-hover:grayscale-0"
                    />
                  </div>

                  {/* Text */}
                  <div className="bg-[#f4f4f4] h-[108px] flex gap-4 items-center px-4 py-6 rounded-b-lg">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#d82028] text-white shrink-0">
                      <span className="font-['Cairo'] font-bold text-[24px] leading-[20px]">
                        {step.id}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 flex-1 h-[60px]">
                      <h3 className="font-['Urbanist'] text-[20px] font-bold text-black leading-[28px]">
                        {step.title}
                      </h3>
                      <p className="font-['Urbanist'] font-normal text-[16px] text-black leading-[24px]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation - Hidden on mobile, shown on larger screens */}
          <div className=" absolute md:top-[-80px] top-[-50px] right-0 md:gap-2 justify-end mt-6 md:flex">
            <CarouselPrevious className="static w-10 h-10 mr-2 border border-gray-300 rounded-full transform-none md:h-14 md:w-14 hover:bg-gray-100" />
            <CarouselNext className="static w-10 h-10 border border-gray-300 rounded-full transform-none md:h-14 md:w-14 hover:bg-gray-100" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
