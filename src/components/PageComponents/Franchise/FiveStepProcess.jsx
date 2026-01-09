import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import step1 from "../../../assets/images/franchise/FiveStepProcess/step_c (5).webp";
import step2 from "../../../assets/images/franchise/FiveStepProcess/step_c (4).webp";
import step3 from "../../../assets/images/franchise/FiveStepProcess/step_c (3).webp";
import step4 from "../../../assets/images/franchise/FiveStepProcess/step_c (2).webp";
import step5 from "../../../assets/images/franchise/FiveStepProcess/step_c (1).webp";

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
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      const isMobile = window.innerWidth < 768;

      const containerWidth = isMobile ? window.innerWidth : 920;
      const gap = 20;
      const cardWidth = 420;

      cards.forEach((card, i) => {
        gsap.set(card, {
          x: containerWidth + i * gap,
        });
      });

      if (isMobile) {
        const extraScroll = 1680;
        const totalWidth = cards.length * gap;

        gsap.to(cards, {
          x: (i) => `-${totalWidth - i * gap + extraScroll}px`,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${totalWidth + containerWidth + extraScroll}`,
            scrub: 1.5,
            pin: true,
            pinSpacing: true,
          },
        });
      } else {
        const lastCardIndex = cards.length - 1;
        const lastCardStartX = containerWidth + lastCardIndex * gap;
        const lastCardEndX = 0; 
        const totalScrollDistance = lastCardStartX - lastCardEndX;

        gsap.to(cards, {
          x: (i) => {
            const cardStartX = containerWidth + i * gap;
            const cardEndX = cardStartX - totalScrollDistance;
            return `${cardEndX}px`;
          },
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: `+=${totalScrollDistance}`,
            scrub: 1.5,
            pin: true,
            pinSpacing: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="!pt-10 bg-white md:!pt-20   overflow-hidden relative"
      ref={sectionRef}
    >
      <div className="max-w-[1280px] md:h-[720px] !h-[800px] sticky top-0 mx-auto px-4 md:px-8 overflow-hidden relative">
        {/* Header */}
        <div className="flex flex-col max-md:pt-[2rem] gap-4 mb-6 md:mb-12">
          <h2 className="font-['Cairo'] md:text-[48px] text-[36px] font-bold text-[#181818] md:leading-[55px] leading-[40px]">
            {title}
          </h2>
          <p className="font-['Urbanist'] font-normal text-[18px] text-black leading-[26px]">
            {subtitle}
          </p>
        </div>

        <div className="cards-wrapper flex max-md:mt-[0.5rem] max-md:h-[500px] !justify-start 
        absolute md:!top-[370px] !top-[450px] md:left-[13%] left-0
         -translate-y-1/2 md:-translate-x-1/2 pl-2">
          {defaultSteps.map((card, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="card-inner-wrapper group max-w-[420px] mx-auto max-md:min-w-[350px] md:w-[420px] !h-[480px] md:h-[508px] "
            >
              <div className="overflow-hidden w-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0 w-full h-full"
                />
              </div>

              {/* Text */}
              <div className="bg-[#f4f4f4] max-md:min-h-[125px] px-4 py-6 flex gap-4 rounded-b-[8px]">
                <div className="!w-10 !h-10 rounded-full bg-[#d82028] text-white flex items-center justify-center font-bold text-xl">
                  {card.id}
                </div>

                <div className="w-[86%]">
                  <h3 className="font-['Urbanist'] font-bold text-[20px]">
                    {card.title}
                  </h3>
                  <p className="font-['Urbanist'] text-[16px] leading-[22px]">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
