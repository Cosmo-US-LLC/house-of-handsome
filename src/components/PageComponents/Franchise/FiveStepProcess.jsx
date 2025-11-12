import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Example images
import step1 from "../../../assets/images/franchise/FiveStepProcess/step_1.webp";
import step2 from "../../../assets/images/franchise/FiveStepProcess/step_2.webp";
import step3 from "../../../assets/images/franchise/FiveStepProcess/step_3.webp";
import step4 from "../../../assets/images/franchise/FiveStepProcess/step_4.webp";
import step5 from "../../../assets/images/franchise/FiveStepProcess/step_4.webp";

const defaultSteps = [
  {
    id: 1,
    title: "Connect",
    description: "Reach out via our inquiry form.",
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
    title: "Setup",
    description: "Our experts help you set up your new barbershop.",
    image: step4,
  },
  {
    id: 5,
    title: "Launch",
    description: "Begin your journey as part of House of Handsome.",
    image: step5,
  },
];

export default function FiveStepProcess({
  title = "Our Proven 5-Step Process",
  subtitle = "We’ve simplified franchise ownership, no guesswork, no stress.",
  steps = defaultSteps,
}) {
  return (
    <section className="px-4 py-16 bg-white sm:px-8">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="font-['Cairo'] text-[32px] md:text-[44px] font-bold text-[#181818] mb-2">
            {title}
          </h2>
          <p className="font-['Urbanist'] text-gray-600 text-[16px] md:text-[18px] leading-[28px]">
            {subtitle}
          </p>
        </div>

        {/* Carousel */}
        <Carousel opts={{ align: "start", loop: false }}>
          <CarouselContent className="gap-6">
            {steps.map((step) => (
              <CarouselItem
                key={step.id}
                className="basis-[90%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <div className="rounded-xl overflow-hidden bg-[#F9F9F9] shadow-sm transition hover:shadow-md">
                  {/* Image */}
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-[320px] object-cover grayscale"
                  />

                  {/* Text */}
                  <div className="p-5">
                    <div className="flex gap-2 items-center mb-2">
                      <div className="w-7 h-7 flex items-center justify-center rounded-full bg-[#E10000] text-white font-semibold text-[14px]">
                        {step.id}
                      </div>
                      <h3 className="font-['Cairo'] text-[18px] font-bold text-[#181818]">
                        {step.title}
                      </h3>
                    </div>
                    <p className="font-['Urbanist'] text-gray-600 text-[15px] leading-[24px]">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation */}
          <div className="flex gap-2 justify-end mt-6">
            <CarouselPrevious className="w-9 h-9 rounded-full border border-gray-300 hover:bg-gray-100" />
            <CarouselNext className="w-9 h-9 rounded-full border border-gray-300 hover:bg-gray-100" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
