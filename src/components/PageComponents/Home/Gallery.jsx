import React from "react";
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
];

function Gallery() {
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

          <div className="flex gap-3 items-center">
            {/* Left Arrow Button */}
            <button
              className="flex justify-center items-center w-12 h-12 rounded-full border transition-all duration-200 border-black/20 hover:border-black/40 hover:bg-neutral-50"
              aria-label="Previous images"
            >
              <svg
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-5"
              >
                <path
                  d="M23 10.5H1M1 10.5L11 20.5M1 10.5L11 0.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Right Arrow Button */}
            <button
              className="flex justify-center items-center w-12 h-12 rounded-full border border-black transition-all duration-200 hover:bg-neutral-50"
              aria-label="Next images"
            >
              <svg
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-5"
              >
                <path
                  d="M1 10.5H23M23 10.5L13 0.5M23 10.5L13 20.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Masonry Gallery Grid */}
        <div className="gap-4 space-y-4 columns-2 sm:columns-3 md:columns-4 lg:columns-5">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden mb-4 rounded-lg break-inside-avoid"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-auto grayscale transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
