import React from "react";
import PrimaryCTA from "../../Buttons/PrimaryCTA";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import locationsImage1 from "../../../assets/images/location/location_c1.webp";
import locationsImage2 from "../../../assets/images/location/location_c2.webp";
import locationsImage3 from "../../../assets/images/location/location_c3.webp";
import locationsImage4 from "../../../assets/images/location/location_c4.webp";
import locationsImage5 from "../../../assets/images/location/location_c5.webp";
import locationsImage6 from "../../../assets/images/location/location_c6.webp";

// Locations data
const locationsData = [
  {
    id: 1,
    name: "Sherwood Park",
    image: locationsImage1,
  },
  {
    id: 2,
    name: "Spruce Grove",
    image: locationsImage2,
  },
  {
    id: 3,
    name: "Cameron Heights Edmonton",
    image: locationsImage3,
  },
  {
    id: 4,
    name: "Whyte Avenue Edmonton",
    image: locationsImage4,
  },
  {
    id: 5,
    name: "South Common Edmonton",
    image: locationsImage5,
  },
  {
    id: 6,
    name: "Edmonton Downtown",
    image: locationsImage6,
  },
];

// Location Card Component (reusable)
const LocationCard = ({ location }) => (
  <div className="group relative h-[260px] w-full overflow-hidden rounded-[8px] bg-[#3f3f3f]">
    {/* Location Image with hover zoom effect */}
    <div className="absolute left-1/2 top-1/2 h-[260px] w-[194px] -translate-x-1/2 -translate-y-1/2 overflow-hidden transition-all duration-300 group-hover:h-[300.206px] group-hover:w-[224px]">
      <img
        src={location.image}
        alt={location.name}
        className="object-cover object-center w-full h-full grayscale"
      />
    </div>

    {/* Location Name - Bottom Left */}
    <h3 className="absolute left-[14px] top-[173px] w-[108px] whitespace-pre-wrap font-['Cairo'] text-[24px] font-bold capitalize leading-[22px] text-white">
      {location.name}
    </h3>

    {/* Arrow Button - Bottom Right */}
    <button
      className="absolute bottom-[calc(50%-94.02px)] right-[14.7px] flex h-[32.561px] w-[32.561px] -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-solid border-white transition-all duration-300 group-hover:rotate-0"
      aria-label={`View ${location.name} location`}
    >
      {/* Arrow Icon with rotation on hover */}
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-3.5 w-4 transition-transform duration-300 group-hover:-rotate-45"
      >
        <path
          d="M1 7H15M15 7L9 1M15 7L9 13"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </div>
);

function Locations() {
  return (
    <section className="py-10 w-full bg-white md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="grid grid-cols-1 gap-6 items-center md:gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-between md:space-y-8 space-y-4 lg:h-[536px]">
            {/* Headline */}
            <h2 className="font-['Cairo'] text-4xl font-bold leading-tight text-[#181818] md:text-[48px] md:leading-[55px]">
              Six Locations.
              <br />
              One Standard.
            </h2>

            {/* Description with CTA */}
            <div className="flex flex-col gap-4 md:gap-7">
              {/* Paragraph 1 */}
              <p className="font-['Urbanist'] text-lg font-normal leading-[26px] text-black">
                No matter where you are, you'll experience the same premium
                service at each of our six locations.
              </p>

              {/* Paragraph 2 */}
              <p className="font-['Urbanist'] text-lg font-normal leading-[26px] text-black">
                Consistency, quality, and excellence, every time.
              </p>

              {/* CTA Button */}
              <div className="mt-0">
                <PrimaryCTA />
              </div>
            </div>
          </div>

          {/* Right Column - Mobile Carousel (visible only on mobile) */}
          <div className="md:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-5">
                {locationsData.map((location) => (
                  <CarouselItem key={location.id} className="pl-5 basis-3/5">
                    <LocationCard location={location} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-[30px] md:top-[60%] top-[50%] -translate-x-1/2 -translate-y-1/2" />
              <CarouselNext className="right-[30px] md:top-[60%] top-[50%] translate-x-1/2 -translate-y-1/2" />
            </Carousel>
          </div>

          {/* Right Column - Desktop Grid (hidden on mobile) */}
          <div className="hidden grid-cols-2 gap-5 md:grid lg:grid-cols-3">
            {locationsData.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;
