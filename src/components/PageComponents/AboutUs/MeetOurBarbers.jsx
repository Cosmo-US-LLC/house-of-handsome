import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import barber1 from "../../../assets/images/about/meetOurBarbers/barber_c1.webp";
import barber2 from "../../../assets/images/about/meetOurBarbers/barber_c2.webp";
import barber3 from "../../../assets/images/about/meetOurBarbers/barber_c3.webp";
import barber4 from "../../../assets/images/about/meetOurBarbers/barber_c4.webp";

const barbers = [
  { id: 1, name: "Alex", role: "Owner", image: barber1 },
  { id: 2, name: "Moe", role: "Co-Owner", image: barber2 },
  { id: 3, name: "Nabilla", role: "Barber", image: barber3 },
  { id: 4, name: "Sabrina", role: "Barber", image: barber4 },
];

export default function MeetOurBarbers() {
  return (
    <section className="pt-0 pb-10 bg-white md:pt-10 md:pb-20">
      <div className="max-w-[1460px] mx-auto md:!pl-0 lg:!pl-20 xl:!pl-30 px-4 md:px-8">
        <Carousel
           opts={{
              align: "start",
              loop: true,
              skipSnaps: false,
              dragFree: false,
            }}
            plugins={[
              Autoplay({
                delay: 2500,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              }),
            ]}
          className="w-full"
        >
          {/* Heading with Navigation */}
          <div className="flex flex-col gap-[13px] mb-12">
            <div className="flex justify-between items-center w-full">
              <h2 className="font-['Cairo'] md:text-[48px] text-[36px] md:leading-[55px] leading-[40px] capitalize font-bold text-[#181818]">
                Meet Our Barbers
              </h2>

              {/* Navigation Buttons */}
              <div className="flex gap-[11px] items-center absolute right-0 top-[260px] md:top-[150px]">
                <CarouselPrevious className="static w-12 h-12 rounded-full border-[1.5px] border-[#181818] bg-white hover:bg-gray-100 disabled:opacity-20 disabled:hover:bg-white" />
                <CarouselNext className="static w-12 h-12 rounded-full border-[1.5px] border-[#181818] bg-white hover:bg-gray-100 disabled:opacity-20 disabled:hover:bg-white" />
              </div>
            </div>

            <p className="font-['Urbanist'] font-medium text-[16px] leading-[26px] text-[#181818] max-w-[937px]">
              Our team is made up of passionate and skilled barbers, each
              dedicated to delivering top-notch grooming services. With a blend
              of experience and creativity, they transform every visit into an
              exceptional experience.{" "}
            </p>
            <p className="font-['Urbanist'] font-medium text-[16px] leading-[26px] text-[#181818] max-w-[937px]">
              Get to know them, and let their talent elevate your grooming
              routine.
            </p>
          </div>

          {/* Carousel Content */}
          <CarouselContent OuterdivClassName="rounded-lg">
            {barbers.map((barber) => (
              <CarouselItem
                key={barber.id}
                className="px-2 basis-[392px] flex-shrink-0"
              >
                <div
                  className="w-full h-[440px] md:h-[507px] rounded-lg overflow-hidden relative group cursor-pointer 
                   bg-cover  grayscale transition-all duration-300 hover:grayscale-0"
                  style={{ backgroundImage: `url(${barber.image})` }}
                >
                  <div className="absolute top-[18px] left-[39px] font-['Cairo'] font-medium text-[16px] leading-[26.72px] tracking-[-0.356px]">
                    <p className="opacity-40 text-black group-hover:opacity-100 group-hover:text-[#d82028] transition-all duration-300">
                      {barber.name}
                    </p>
                    <p className="text-black">{barber.role}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
