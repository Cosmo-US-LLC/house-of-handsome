import React from "react";
import PrimaryCTA from "../../Buttons/PrimaryCTA";

// Locations data
const locationsData = [
  {
    id: 1,
    name: "Sherwood Park",
    image:
      "https://www.figma.com/api/mcp/asset/5543eeed-5b25-4846-9673-16a81722b76e",
  },
  {
    id: 2,
    name: "Spruce Grove",
    image:
      "https://www.figma.com/api/mcp/asset/2687e352-8ab9-42b8-92b5-b76d3ea986b3",
  },
  {
    id: 3,
    name: "Cameron Heights Edmonton",
    image:
      "https://www.figma.com/api/mcp/asset/3c826d34-85dc-4f9a-93bd-66ba9d75ee4e",
  },
  {
    id: 4,
    name: "Whyte Avenue Edmonton",
    image:
      "https://www.figma.com/api/mcp/asset/1a3d15ec-ca8b-4aa9-9b8d-26141119cfc5",
  },
  {
    id: 5,
    name: "South Common Edmonton",
    image:
      "https://www.figma.com/api/mcp/asset/9097df4b-7e1f-4536-81bc-235d3edd07b7",
  },
  {
    id: 6,
    name: "Edmonton Downtown",
    image:
      "https://www.figma.com/api/mcp/asset/8b9b3e11-1fd6-4874-bba4-d49b586bf7da",
  },
];

function Locations() {
  return (
    <section className="py-16 w-full bg-white md:py-20">
      {/* Max Container Wrapper - 1280px */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="flex flex-col justify-between space-y-8 lg:h-[536px]">
            {/* Headline */}
            <h2 className="font-['Cairo'] text-4xl font-bold leading-tight text-[#181818] md:text-[48px] md:leading-[55px]">
              Six Locations.
              <br />
              One Standard.
            </h2>

            {/* Description with CTA */}
            <div className="flex flex-col gap-7">
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

          {/* Right Column - Location Cards Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {locationsData.map((location) => (
              <div
                key={location.id}
                className="group relative h-[260px] w-full overflow-hidden rounded-[8px] bg-[#3f3f3f]"
              >
                {/* Location Image with hover zoom effect */}
                <div className="absolute left-1/2 top-1/2 h-[260px] w-[194px] -translate-x-1/2 -translate-y-1/2 overflow-hidden transition-all duration-300 group-hover:h-[300.206px] group-hover:w-[224px]">
                  <img
                    src={location.image}
                    alt={location.name}
                    className="object-cover object-center w-full h-full grayscale"
                  />
                </div>

                {/* Location Name - Bottom Left */}
                <h3 className="absolute left-[14px] top-[193px] w-[108px] whitespace-pre-wrap font-['Cairo'] text-[24px] font-bold capitalize leading-[22px] text-white">
                  {location.name}
                </h3>

                {/* Arrow Button - Bottom Right */}
                <button
                  className="absolute bottom-[calc(50%-88.02px)] right-[14.7px] flex h-[32.561px] w-[32.561px] -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-solid border-white transition-all duration-300 group-hover:rotate-0"
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;
