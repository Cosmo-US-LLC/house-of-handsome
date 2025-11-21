import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



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

  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

 const containerWidth = 1280; 
const cardWidth = 0;
const gap = 20; 
const extraScroll = 2100;         

useEffect(() => {
  const cards = cardsRef.current;

  cards.forEach((card, i) => {
    gsap.set(card, {
      x: containerWidth + i * (cardWidth + gap),
    });
  });

  const totalWidth = (cardWidth + gap) * cards.length;

  const scrollDistance = totalWidth + containerWidth + extraScroll;

  gsap.to(cards, {
    x: (i) => `-${totalWidth - i * (cardWidth + gap) + extraScroll}px`,
    ease: "none",
    scrollTrigger: {
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${scrollDistance}`,
      scrub: 1.5,
      pin: true,
      markers: false,
    },
  });

  return () => ScrollTrigger.getAll().forEach((t) => t.kill());
}, []);


  return (
    <section className="py-10 bg-white md:py-20   overflow-hidden relative" ref={sectionRef}>
      <div className="max-w-[1280px] h-screen sticky top-0 mx-auto px-4 md:px-8 overflow-hidden relative">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-6 md:mb-12">
          <h2 className="font-['Cairo'] md:text-[48px] text-[36px] font-bold text-[#181818] md:leading-[55px] leading-[40px]">
            {title}
          </h2>
          <p className="font-['Urbanist'] font-normal text-[18px] text-black leading-[26px]">
            {subtitle}
          </p>
        </div>
       
         <div className="cards-wrapper flex max-md:mt-[3rem] !justify-start absolute top-1/2 left-0 -translate-y-1/2">
      
  {defaultSteps.map((card, i) => (
    <div
      key={i}
      ref={(el) => (cardsRef.current[i] = el)}
      className="card-inner-wrapper w-[420px] h-[508px] "
    >
      <div className=" w-full overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="bg-[#f4f4f4] px-4 py-6 flex gap-4 rounded-b-[8px]">
                <div className="w-10 h-10 rounded-full bg-[#d82028] text-white flex items-center justify-center font-bold text-xl">
                  {card.id}
                </div>

                <div>
                  <h3 className="font-['Urbanist'] font-bold text-[20px]">{card.title}</h3>
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

