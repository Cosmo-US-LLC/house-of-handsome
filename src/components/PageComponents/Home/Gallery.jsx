import React from "react";

// Gallery images data with varying heights for masonry layout
const galleryImages = [
  {
    id: 1,
    src: "https://www.figma.com/api/mcp/asset/2dc9392b-3ea5-4b38-8be0-9ac557bf5b26",
    alt: "Bearded man with styled haircut",
    height: "h-[314px]",
  },
  {
    id: 2,
    src: "https://www.figma.com/api/mcp/asset/e746ab9b-e180-42ef-baad-d97b1623537a",
    alt: "Man getting groomed with cape",
    height: "h-[402px]",
  },
  {
    id: 3,
    src: "https://www.figma.com/api/mcp/asset/4b45d357-f236-4d46-88c7-2e74ce053651",
    alt: "Professional grooming portrait",
    height: "h-[266px]",
  },
  {
    id: 4,
    src: "https://www.figma.com/api/mcp/asset/6fd65d85-63a4-4180-b985-212eb9c2f8e6",
    alt: "Man with styled mustache",
    height: "h-[416px]",
  },
  {
    id: 5,
    src: "https://www.figma.com/api/mcp/asset/ffd9b82f-9684-40e5-8d07-7942241d401d",
    alt: "Barber working on client",
    height: "h-[432px]",
  },
  {
    id: 6,
    src: "https://www.figma.com/api/mcp/asset/c1545df7-bbfa-4393-b5bc-e2fdc9188e76",
    alt: "Back view of styled haircut",
    height: "h-[263px]",
  },
  {
    id: 7,
    src: "https://www.figma.com/api/mcp/asset/fd9337df-1232-48a0-b241-f6fa315f00e9",
    alt: "Barber using clippers",
    height: "h-[276px]",
  },
  {
    id: 8,
    src: "https://www.figma.com/api/mcp/asset/f80a1ceb-789e-40d4-ace2-9156c47de27d",
    alt: "Modern haircut styling",
    height: "h-[416px]",
  },
  {
    id: 9,
    src: "https://www.figma.com/api/mcp/asset/5b83cc0e-1a30-48f1-909a-809a36ec9c2f",
    alt: "Bearded man portrait",
    height: "h-[266px]",
  },
  {
    id: 10,
    src: "https://www.figma.com/api/mcp/asset/a90b9367-70a4-49b1-bdfd-7766d1015e0e",
    alt: "Classic barber styling",
    height: "h-[249px]",
  },
];

function Gallery() {
  return (
    <section className="py-16 w-full bg-white h-[1000px]">
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

          {/* Right: Arrow Navigation Buttons */}
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
              className="overflow-hidden rounded-lg break-inside-avoid"
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`${image.height} w-full object-cover transition-transform duration-300 hover:scale-105 grayscale`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
