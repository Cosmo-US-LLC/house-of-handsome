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
        <div className="flex flex-col gap-[13px] md:mb-12 mb-10">
          <div className="flex justify-between items-center w-full">
            <h2 className="font-['Cairo'] md:text-[48px] text-[36px] font-bold">
              Meet Our Barbers
            </h2>

            <div className="flex gap-[11px] max-md:hidden">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 group rounded-full cursor-pointer border border-black flex items-center justify-center hover:bg-gray-300/20 hover:text-white transition"
              >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                <path d="M3.74634 9.40625L2.83439 10.3182L8.30739 15.7912L9.21934 14.8792L3.74634 9.40625Z" fill="black" />
                <path d="M2.83439 10.3167L3.74763 11.2287L9.21934 5.7557L8.30739 4.84375L2.83439 10.3167Z" fill="black" />
                <path d="M18.2428 10.9618V9.67188H4.05401V10.9618H18.2428Z" fill="black" />
              </svg>
              </button>

              <button
                onClick={scrollNext}
                className="w-12 h-12 group rounded-full cursor-pointer border border-black flex items-center justify-center hover:bg-gray-300/20 hover:text-white transition"
              >
                {/* <ArrowRight /> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                <path d="M19.8402 9.40625L20.7521 10.3182L15.2791 15.7912L14.3672 14.8792L19.8402 9.40625Z" fill="black" />
                <path d="M20.7521 10.3167L19.8389 11.2287L14.3672 5.7557L15.2791 4.84375L20.7521 10.3167Z" fill="black" />
                <path d="M5.34375 10.9618V9.67188H19.5325V10.9618H5.34375Z" fill="black" />
              </svg>
              </button>
            </div>
          </div>

          <p className="font-['Urbanist'] text-[16px] leading-[26px] max-w-[937px]">
            Our team is made up of passionate and skilled barbers, each
            dedicated to delivering top-notch grooming services. With a blend of
            experience and creativity, they transform every visit into an
            exceptional experience.
          </p>

          <p className="font-['Urbanist'] text-[16px] leading-[26px] max-w-[937px]">
            Get to know them, and let their talent elevate your grooming
            routine.
          </p>
          <div className="flex gap-[11px] md:hidden justify-end">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border cursor-pointer border-black flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                <path d="M3.74634 9.40625L2.83439 10.3182L8.30739 15.7912L9.21934 14.8792L3.74634 9.40625Z" fill="black" />
                <path d="M2.83439 10.3167L3.74763 11.2287L9.21934 5.7557L8.30739 4.84375L2.83439 10.3167Z" fill="black" />
                <path d="M18.2428 10.9618V9.67188H4.05401V10.9618H18.2428Z" fill="black" />
              </svg>
            </button>

            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border cursor-pointer border-black flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                <path d="M19.8402 9.40625L20.7521 10.3182L15.2791 15.7912L14.3672 14.8792L19.8402 9.40625Z" fill="black" />
                <path d="M20.7521 10.3167L19.8389 11.2287L14.3672 5.7557L15.2791 4.84375L20.7521 10.3167Z" fill="black" />
                <path d="M5.34375 10.9618V9.67188H19.5325V10.9618H5.34375Z" fill="black" />
              </svg>
            </button>

          </div>
        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden rounded-lg md:ml-[-10px]" ref={emblaRef}>
          <div className="flex">
            {barbers.map((barber) => (
              <div key={barber.id} className="md:basis-[399px] basis-[100%] flex-shrink-0 md:px-2">
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
