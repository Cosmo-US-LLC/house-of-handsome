import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import barber1 from "../../../assets/images/about/meetOurBarbers/barber_1.webp";
import barber2 from "../../../assets/images/about/meetOurBarbers/barber_2.webp";
import barber3 from "../../../assets/images/about/meetOurBarbers/barber_3.webp";
import barber4 from "../../../assets/images/about/meetOurBarbers/barber_4.webp";

const barbers = [
  { id: 1, name: "Alex", role: "Owner", image: barber1 },
  { id: 2, name: "Moe", role: "Co-Owner", image: barber2 },
  { id: 3, name: "Natalia", role: "Barber", image: barber3 },
  { id: 4, name: "Sam", role: "Barber", image: barber4 },
];

export default function MeetOurBarbers() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="mb-12 max-w-[920px]">
          <h2 className="font-['Cairo'] text-[42px] md:text-[48px] leading-[55px] capitalize font-bold text-[#181818] mb-4">
            Meet Our Barbers
          </h2>
          <p className="font-['Urbanist'] text-[#181818] text-lg leading-[26px] mb-3">
            Our team is made up of passionate and skilled barbers, each
            dedicated to delivering top-notch grooming services. With a blend of
            experience and creativity, they transform every visit into an
            exceptional experience.
          </p>
          <p className="font-['Urbanist'] text-[#181818] text-lg leading-[26px]">
            Get to know them, and let their talent elevate your grooming
            routine.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel opts={{ align: "start", loop: false }} className="w-full">
            {/* Arrows now INSIDE Carousel context */}
            <div className="hidden absolute right-11 -top-14 gap-10 md:flex w-[26px]">
              <CarouselPrevious className="w-14 h-14 rounded-full border border-gray-300 hover:bg-gray-100" />
              <CarouselNext className="w-14 h-14 rounded-full border border-gray-300 hover:bg-gray-100" />
            </div>

            <CarouselContent className="gap-0">
              {barbers.map((barber) => (
                <CarouselItem
                  key={barber.id}
                  className="basis-4/5 sm:basis-1/2 md:basis-1/3"
                >
                  <div className="rounded-xl bg-[#f8f8f8] relative">
                    <img
                      src={barber.image}
                      alt={barber.name}
                      className="h-[440px] w-full object-cover grayscale rounded-lg mb-4"
                    />
                    <div className="absolute top-6 left-6">
                      <h3 className="font-['Cairo'] text-[22px] font-bold text-[#181818]">
                        {barber.name}
                      </h3>
                      <p className="font-['Urbanist'] text-gray-600 text-[16px] font-medium">
                        {barber.role}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import barber1 from "../../../assets/images/about/meetOurBarbers/barber_1.webp";
// import barber2 from "../../../assets/images/about/meetOurBarbers/barber_2.webp";
// import barber3 from "../../../assets/images/about/meetOurBarbers/barber_3.webp";
// import barber4 from "../../../assets/images/about/meetOurBarbers/barber_4.webp";

// const barbers = [
//   { id: 1, name: "Alex", role: "Owner", image: barber1 },
//   { id: 2, name: "Moe", role: "Co-Owner", image: barber2 },
//   {
//     id: 3,
//     name: "Natalia",
//     role: "Barber",
//     image: barber3,
//   },
//   { id: 4, name: "Sam", role: "Barber", image: barber4 },
// ];

// export default function MeetOurBarbers() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="max-w-[1280px] mx-auto px-4 md:px-8">
//         <div className="mb-12 max-w-[720px]">
//           <h2 className="font-['Cairo'] text-[42px] md:text-[48px] font-bold text-[#181818] mb-4">
//             Meet Our Barbers
//           </h2>
//           <p className="font-['Urbanist'] text-gray-600 text-lg leading-[26px] mb-3">
//             Our team is made up of passionate and skilled barbers, each
//             dedicated to delivering top-notch grooming services. With a blend of
//             experience and creativity, they transform every visit into an
//             exceptional experience.
//           </p>
//           <p className="font-['Urbanist'] text-gray-600 text-lg leading-[26px]">
//             Get to know them, and let their talent elevate your grooming
//             routine.
//           </p>
//         </div>

//         <Carousel opts={{ align: "start", loop: false }} className="w-full">
//           <CarouselContent className="gap-6">
//             {barbers.map((barber) => (
//               <CarouselItem
//                 key={barber.id}
//                 className="basis-4/5 sm:basis-1/2 md:basis-1/3"
//               >
//                 <div className="rounded-xl bg-[#f8f8f8] p-6 text-center hover:-translate-y-1 transition-transform duration-300 hover:shadow-md">
//                   <img
//                     src={barber.image}
//                     alt={barber.name}
//                     className="h-[340px] w-full object-cover grayscale rounded-lg mb-4"
//                   />
//                   <h3 className="font-['Cairo'] text-[22px] font-bold text-[#181818]">
//                     {barber.name}
//                   </h3>
//                   <p className="font-['Urbanist'] text-gray-600 text-[16px] font-medium">
//                     {barber.role}
//                   </p>
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>

//           {/* Navigation Buttons */}
//           <div className="flex relative gap-2 justify-end items-center mt-6">
//             <CarouselPrevious className="absolute top-0 right-10 w-9 h-9 rounded-full border border-gray-300 hover:bg-gray-100" />
//             <CarouselNext className="absolute top-0 right-0 w-9 h-9 rounded-full border border-gray-300 hover:bg-gray-100" />
//           </div>
//         </Carousel>
//       </div>
//     </section>
//   );
// }
