import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight } from "lucide-react";

import barber1 from "../../../assets/images/about/meetOurBarbers/barber_c1.webp";
import barber2 from "../../../assets/images/about/meetOurBarbers/barber_c2.webp";
import barber3 from "../../../assets/images/about/meetOurBarbers/barber_c3.webp";
import barber4 from "../../../assets/images/about/meetOurBarbers/barber_c4.webp";

const barbers = [
  { id: 1, name: "Alex", role: "Owner", image: barber1 },
  { id: 2, name: "Moe", role: "Co-Owner", image: barber2 },
  { id: 3, name: "Nabilla", role: "Barber", image: barber3 },
  { id: 4, name: "Sabrina", role: "Barber", image: barber4 },
  { id: 1, name: "Alex", role: "Owner", image: barber1 },
  { id: 2, name: "Moe", role: "Co-Owner", image: barber2 },
  { id: 3, name: "Nabilla", role: "Barber", image: barber3 },
  { id: 4, name: "Sabrina", role: "Barber", image: barber4 },
];

export default function MeetOurBarbers() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    ]
  );

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    emblaApi.plugins().autoplay?.reset();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    emblaApi.plugins().autoplay?.reset();
  }, [emblaApi]);

  return (
    <section className="pt-0 pb-10 bg-white md:pt-10 md:pb-20">
      <div className="max-w-[1460px] mx-auto md:pl-0 lg:pl-20 xl:pl-30 px-4 md:px-8">

        {/* HEADER */}
        <div className="flex flex-col gap-[13px] mb-12">
          <div className="flex justify-between items-center w-full">
            <h2 className="font-['Cairo'] md:text-[48px] text-[36px] font-bold">
              Meet Our Barbers
            </h2>

            <div className="flex gap-[11px] max-md:hidden">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <ArrowLeft />
              </button>

              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          <p className="font-['Urbanist'] text-[16px] leading-[26px] max-w-[937px]">
            Our team is made up of passionate and skilled barbers, each dedicated
            to delivering top-notch grooming services. With a blend of experience
            and creativity, they transform every visit into an exceptional
            experience.
          </p>

          <p className="font-['Urbanist'] text-[16px] leading-[26px] max-w-[937px]">
            Get to know them, and let their talent elevate your grooming routine.
          </p>
          <div className="flex gap-[11px] md:hidden">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <ArrowLeft />
              </button>

              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
              >
                <ArrowRight />
              </button>
            </div>
        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {barbers.map((barber) => (
              <div
                key={barber.id}
                className="basis-[392px] flex-shrink-0 px-2"
              >
                <div
                  className="h-[440px] md:h-[507px] bg-cover bg-center rounded-lg grayscale hover:grayscale-0 transition-all duration-300"
                  style={{ backgroundImage: `url(${barber.image})` }}
                >
                  <div className="absolute top-[18px] left-[39px]">
                    <p className="opacity-40 group-hover:opacity-100">
                      {barber.name}
                    </p>
                    <p>{barber.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
