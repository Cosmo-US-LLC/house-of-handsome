import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import galleryImage1 from "../../../assets/images/gallery/gallery_m1.webp";
import galleryImage2 from "../../../assets/images/gallery/gallery_m2.webp";
import galleryImage3 from "../../../assets/images/gallery/gallery_m3.webp";
import galleryImage4 from "../../../assets/images/gallery/gallery_m4.webp";
import galleryImage5 from "../../../assets/images/gallery/gallery_m5.webp";
import galleryImage6 from "../../../assets/images/gallery/gallery_m6.webp";
import galleryImage7 from "../../../assets/images/gallery/gallery_m7.webp";
import galleryImage8 from "../../../assets/images/gallery/gallery_m8.webp";
import galleryImage9 from "../../../assets/images/gallery/gallery_m9.webp";
import galleryImage10 from "../../../assets/images/gallery/gallery_m10.webp";

// Gallery images data with varying heights for masonry layout
const galleryImages = [
  {
    id: 1,
    src: galleryImage1,
    alt: "Bearded man with styled haircut",
    height: "h-[314px]",
  },
  {
    id: 2,
    src: galleryImage2,
    alt: "Man getting groomed with cape",
    height: "h-[402px]",
  },
  {
    id: 3,
    src: galleryImage3,
    alt: "Professional grooming portrait",
    height: "h-[266px]",
  },
  {
    id: 4,
    src: galleryImage4,
    alt: "Man with styled mustache",
    height: "h-[416px]",
  },
  {
    id: 5,
    src: galleryImage5,
    alt: "Barber working on client",
    height: "h-[432px]",
  },
  {
    id: 6,
    src: galleryImage6,
    alt: "Back view of styled haircut",
    height: "h-[263px]",
  },
  {
    id: 7,
    src: galleryImage7,
    alt: "Barber using clippers",
    height: "h-[276px]",
  },
  {
    id: 8,
    src: galleryImage8,
    alt: "Modern haircut styling",
    height: "h-[416px]",
  },
  {
    id: 9,
    src: galleryImage9,
    alt: "Bearded man portrait",
    height: "h-[266px]",
  },
  {
    id: 10,
    src: galleryImage10,
    alt: "Classic barber styling",
    height: "h-[249px]",
  },
  {
    id: 11,
    src: galleryImage1,
    alt: "Bearded man with styled haircut",
    height: "h-[314px]",
  },
  {
    id: 12,
    src: galleryImage2,
    alt: "Man getting groomed with cape",
    height: "h-[402px]",
  },
  {
    id: 13,
    src: galleryImage3,
    alt: "Professional grooming portrait",
    height: "h-[266px]",
  },
  {
    id: 14,
    src: galleryImage4,
    alt: "Man with styled mustache",
    height: "h-[416px]",
  },
  {
    id: 15,
    src: galleryImage5,
    alt: "Barber working on client",
    height: "h-[432px]",
  },
  {
    id: 16,
    src: galleryImage6,
    alt: "Back view of styled haircut",
    height: "h-[263px]",
  },
  {
    id: 17,
    src: galleryImage7,
    alt: "Barber using clippers",
    height: "h-[276px]",
  },
  {
    id: 18,
    src: galleryImage8,
    alt: "Modern haircut styling",
    height: "h-[416px]",
  },
  {
    id: 19,
    src: galleryImage9,
    alt: "Bearded man portrait",
    height: "h-[266px]",
  },
  {
    id: 20,
    src: galleryImage10,
    alt: "Classic barber styling",
    height: "h-[249px]",
  },
];

function StyleGallery() {
  return (
    <section className="py-16 w-full bg-white">
      {/* Max Container Wrapper - 1280px */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Header with Title and Arrow Buttons */}
        <div className="flex flex-col gap-6 justify-between items-start mb-12 md:flex-row md:items-center">
          {/* Left: Heading with Description */}
          <div className="flex flex-col gap-4">
            {/* Title */}
            <h2 className="font-['Cairo'] text-3xl font-bold text-[#181818] md:text-4xl lg:text-[48px] lg:leading-[55px]">
              Oh. So. Handsome.
            </h2>
            {/* Subtitle */}
            <p className="font-['Urbanist'] text-base leading-[26px] text-black md:text-lg">
              At House of Handsome, every cut is a statement. Precision and
              style, designed just for you.
            </p>
          </div>
        </div>

        {/* Masonry Gallery with Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {/* Group images in pairs for masonry columns */}
            {Array.from(
              { length: Math.ceil(galleryImages.length / 2) },
              (_, i) => i * 2
            ).map((startIndex) => (
              <CarouselItem
                key={startIndex}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="flex flex-col gap-4">
                  {/* First image in column */}
                  {galleryImages[startIndex] && (
                    <div className="overflow-hidden rounded-lg break-inside-avoid">
                      <img
                        src={galleryImages[startIndex].src}
                        alt={galleryImages[startIndex].alt}
                        className="object-cover w-full h-auto grayscale transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                  {/* Second image in column */}
                  {galleryImages[startIndex + 1] && (
                    <div className="overflow-hidden rounded-lg break-inside-avoid">
                      <img
                        src={galleryImages[startIndex + 1].src}
                        alt={galleryImages[startIndex + 1].alt}
                        className="object-cover w-full h-auto grayscale transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="md:left-[91%] left-[74%] md:h-[50px] h-[40px] md:w-[50px] w-[40px] md:top-[-100px] top-[-46px] translate-x-0 translate-y-0" />
          <CarouselNext className="right-0 md:top-[-100px] top-[-46px] md:h-[50px] h-[40px] md:w-[50px] w-[40px] translate-x-0 translate-y-0" />
        </Carousel>
      </div>
    </section>
  );
}

export default StyleGallery;

// import React from "react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// const galleryImages = [
//   {
//     id: 1,
//     src: "https://www.figma.com/api/mcp/asset/3f69b17d-2c3a-4db1-a3ea-75c69d30786c",
//     height: "h-[314px]",
//   },
//   {
//     id: 2,
//     src: "https://www.figma.com/api/mcp/asset/c111a442-5b8a-4428-823b-9ff232c33063",
//     height: "h-[402px]",
//   },
//   {
//     id: 3,
//     src: "https://www.figma.com/api/mcp/asset/6a1f439b-ee42-4f11-974b-6ceb1170dbe5",
//     height: "h-[266px]",
//   },
//   {
//     id: 4,
//     src: "https://www.figma.com/api/mcp/asset/650e23e8-30a4-4a6b-8b5c-226227a27aca",
//     height: "h-[416px]",
//   },
//   {
//     id: 5,
//     src: "https://www.figma.com/api/mcp/asset/378ef103-9212-400c-8df1-807f89e06ffe",
//     height: "h-[432px]",
//   },
// ];

// const galleryImagesRow2 = [
//   {
//     id: 6,
//     src: "https://www.figma.com/api/mcp/asset/b73d669d-fb67-43ba-acb8-a5a6e9bc74de",
//     height: "h-[363px]",
//   },
//   {
//     id: 7,
//     src: "https://www.figma.com/api/mcp/asset/268dc3ea-3ad2-48f2-a1b6-ed684f102c5a",
//     height: "h-[276px]",
//   },
//   {
//     id: 8,
//     src: "https://www.figma.com/api/mcp/asset/20527b6f-0e71-4c8e-977e-c55e9cfd13b8",
//     height: "h-[416px]",
//   },
//   {
//     id: 9,
//     src: "https://www.figma.com/api/mcp/asset/6391884c-565c-4467-957c-24f4549edb14",
//     height: "h-[266px]",
//   },
//   {
//     id: 10,
//     src: "https://www.figma.com/api/mcp/asset/eae7e8f0-17e1-427e-8f95-28437c83ae70",
//     height: "h-[249px]",
//   },
// ];

// function StyleGallery() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="mx-auto max-w-[1440px] px-10">
//         <Carousel
//           opts={{
//             align: "start",
//             loop: true,
//           }}
//           className="w-full"
//         >
//           {/* Header */}
//           <div className="flex justify-between items-center mb-12">
//             <div className="space-y-4">
//               <h2 className="font-['Cairo'] font-bold text-[#181818] text-[36px] md:text-[48px] leading-[55px]">
//                 Your Style, Elevated
//               </h2>
//               <p className="font-['Urbanist'] font-normal text-[18px] leading-[26px] text-black max-w-[600px]">
//                 At House of Handsome, every cut is a statement. Precision and
//                 style, designed just for you.
//               </p>
//             </div>

//             {/* Arrow Buttons */}
//             <div className="flex gap-3">
//               <CarouselPrevious className="static w-12 h-12 rounded-full border-[1.5px] border-black bg-white hover:bg-black hover:text-white transition-colors disabled:opacity-20" />
//               <CarouselNext className="static w-12 h-12 rounded-full border-[1.5px] border-black bg-white hover:bg-black hover:text-white transition-colors disabled:opacity-20" />
//             </div>
//           </div>

//           {/* Gallery Carousel */}
//           <CarouselContent className="-ml-4">
//             <CarouselItem className="pl-4">
//               <div className="space-y-4">
//                 {/* First Row */}
//                 <div className="flex overflow-hidden gap-4 items-end">
//                   {galleryImages.map((image) => (
//                     <div
//                       key={image.id}
//                       className={`flex-1 ${image.height} rounded-lg overflow-hidden`}
//                     >
//                       <img
//                         src={image.src}
//                         alt={`Style gallery ${image.id}`}
//                         className="object-cover w-full h-full"
//                       />
//                     </div>
//                   ))}
//                 </div>

//                 {/* Second Row */}
//                 <div className="flex overflow-hidden gap-4 items-start">
//                   {galleryImagesRow2.map((image) => (
//                     <div
//                       key={image.id}
//                       className={`flex-1 ${image.height} rounded-lg overflow-hidden`}
//                     >
//                       <img
//                         src={image.src}
//                         alt={`Style gallery ${image.id}`}
//                         className="object-cover w-full h-full"
//                       />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </CarouselItem>
//           </CarouselContent>
//         </Carousel>
//       </div>
//     </section>
//   );
// }

// export default StyleGallery;
