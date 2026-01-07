import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import galleryImage1 from "../../../assets/images/teen/teenStyleGallery/teen_gallery_1.webp";
import galleryImage2 from "../../../assets/images/teen/teenStyleGallery/teen_gallery_2.webp";
import galleryImage3 from "../../../assets/images/teen/teenStyleGallery/teen_gallery_3.webp";
import galleryImage4 from "../../../assets/images/teen/teenStyleGallery/teen_gallery_4.webp";
import galleryImage5 from "../../../assets/images/teen/teenStyleGallery/teen_gallery_5.webp";
import galleryImage6 from "../../../assets/images/teen/teenStyleGallery/teen_gallery_6.webp";
import galleryImage7 from "../../../assets/images/teen/teenStyleGallery/teen_gallery_7.webp";
import galleryImage8 from "../../../assets/images/teen/teenStyleGallery/teen_gallery_8.webp";
import galleryImage9 from "../../../assets/images/teen/teenStyleGallery/teen_gallery_6.webp";
import galleryImage10 from "../../../assets/images/teen/teenStyleGallery/teen_gallery_10.webp";

// Gallery images data with varying heights for masonry layout
const galleryImages = [
  {
    id: 1,
    src: galleryImage1,
    alt: "Teen hairstyle example 1",
    height: "h-[314px]",
  },
  {
    id: 2,
    src: galleryImage2,
    alt: "Teen hairstyle example 2",
    height: "h-[402px]",
  },
  {
    id: 3,
    src: galleryImage3,
    alt: "Teen hairstyle example 3",
    height: "h-[266px]",
  },
  {
    id: 4,
    src: galleryImage4,
    alt: "Teen hairstyle example 4",
    height: "h-[416px]",
  },
  {
    id: 5,
    src: galleryImage5,
    alt: "Teen hairstyle example 5",
    height: "h-[432px]",
  },
  {
    id: 6,
    src: galleryImage6,
    alt: "Teen hairstyle example 6",
    height: "h-[263px]",
  },
  {
    id: 7,
    src: galleryImage7,
    alt: "Teen hairstyle example 7",
    height: "h-[276px]",
  },
  {
    id: 8,
    src: galleryImage8,
    alt: "Teen hairstyle example 8",
    height: "h-[416px]",
  },
  {
    id: 9,
    src: galleryImage9,
    alt: "Teen hairstyle example 9",
    height: "h-[266px]",
  },
  {
    id: 10,
    src: galleryImage10,
    alt: "Teen hairstyle example 10",
    height: "h-[249px]",
  },
  {
    id: 11,
    src: galleryImage1,
    alt: "Teen hairstyle example 1",
    height: "h-[314px]",
  },
  {
    id: 12,
    src: galleryImage2,
    alt: "Teen hairstyle example 2",
    height: "h-[402px]",
  },
  {
    id: 13,
    src: galleryImage3,
    alt: "Teen hairstyle example 3",
    height: "h-[266px]",
  },
  {
    id: 14,
    src: galleryImage4,
    alt: "Teen hairstyle example 4",
    height: "h-[416px]",
  },
  {
    id: 15,
    src: galleryImage5,
    alt: "Teen hairstyle example 5",
    height: "h-[432px]",
  },
  {
    id: 16,
    src: galleryImage6,
    alt: "Teen hairstyle example 6",
    height: "h-[263px]",
  },
  {
    id: 17,
    src: galleryImage7,
    alt: "Teen hairstyle example 7",
    height: "h-[276px]",
  },
  {
    id: 18,
    src: galleryImage8,
    alt: "Teen hairstyle example 8",
    height: "h-[416px]",
  },
  {
    id: 19,
    src: galleryImage9,
    alt: "Teen hairstyle example 9",
    height: "h-[266px]",
  },
  {
    id: 20,
    src: galleryImage10,
    alt: "Teen hairstyle example 10",
    height: "h-[249px]",
  },
];

function TeenStyleGallery() {
  return (
    <section className="py-16 w-full bg-white">
      {/* Max Container Wrapper - 1280px */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Header with Title and Arrow Buttons */}
        <div className="flex flex-col gap-6 justify-between items-start mb-12 md:flex-row md:items-center">
          {/* Left: Heading with Description */}
          <div className="flex flex-col gap-4">
            {/* Title */}
            <h2 className="font-['Cairo'] text-[36px] font-bold text-[#181818] md:text-4xl lg:text-[48px] lg:leading-[55px] leading-[40px]">
              Style Made for Today
            </h2>
            {/* Subtitle */}
            {/* <p className="font-['Urbanist'] text-base leading-[26px] text-black md:text-lg">
             Add pictures of trendy fades, textured tops, clean trims.
            </p> */}
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

          <CarouselPrevious className="md:left-[91%] left-[74%] md:h-[50px] h-[40px] md:w-[50px] 
          w-[40px] md:top-[-100px] top-[-46px] translate-x-0 translate-y-0" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
              <path d="M3.74634 9.40625L2.83439 10.3182L8.30739 15.7912L9.21934 14.8792L3.74634 9.40625Z" fill="black"/>
              <path d="M2.83439 10.3167L3.74763 11.2287L9.21934 5.7557L8.30739 4.84375L2.83439 10.3167Z" fill="black"/>
              <path d="M18.2428 10.9618V9.67188H4.05401V10.9618H18.2428Z" fill="black"/>
            </svg>
            </CarouselPrevious>
            <CarouselNext className="right-0 md:top-[-100px] top-[-46px] 
          md:h-[50px] h-[40px] md:w-[50px] w-[40px] translate-x-0 translate-y-0" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
  <path d="M19.8402 9.40625L20.7521 10.3182L15.2791 15.7912L14.3672 14.8792L19.8402 9.40625Z" fill="black"/>
  <path d="M20.7521 10.3167L19.8389 11.2287L14.3672 5.7557L15.2791 4.84375L20.7521 10.3167Z" fill="black"/>
  <path d="M5.34375 10.9618V9.67188H19.5325V10.9618H5.34375Z" fill="black"/>
</svg>
            </CarouselNext>
         
        </Carousel>
      </div>
    </section>
  );
}

export default TeenStyleGallery;
