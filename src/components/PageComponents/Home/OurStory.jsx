import React from "react";
import PrimaryCTA from "../../ui/PrimaryCTA";
import ourStoryLeftImage from "../../../assets/images/our-story/our_story_left.webp";

function OurStory() {
  return (
    <section className="py-10 w-full bg-white md:py-20">
      {/* Max Container Wrapper - 1280px */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Barber Tools Collage */}
          <div className="order-last md:order-first">
            <div className="relative h-[400px] w-full overflow-hidden md:h-full grayscale">
              {/* Barber Tools Collage Image - Full Width */}
              <img
                src={ourStoryLeftImage}
                alt="Barber tools and equipment collage"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col gap-8">
            {/* Heading with Description */}
            <div className="flex flex-col gap-6">
              {/* Headline */}
              <h2 className="font-['Cairo'] text-4xl font-bold text-[#181818] md:text-[48px] md:leading-[55px]">
                Our Story
              </h2>

              {/* Paragraph 1 */}
              <p className="font-['Urbanist'] text-base font-medium leading-[26px] text-[#181818] md:text-[16px]">
                Founded in Canada, House of Handsome has become a trusted name
                in men's grooming, offering an elevated experience that blends
                timeless barbering techniques with modern precision. What began
                as a passion for excellence has grown into a leading brand
                recognized for its commitment to quality, service, and
                craftsmanship.
              </p>

              {/* Paragraph 2 */}
              <p className="font-['Urbanist'] text-base font-medium leading-[26px] text-[#181818] md:text-[16px]">
                Our mission is simple: to provide men with the highest standard
                of grooming, ensuring they leave our chairs not just looking
                their best, but feeling their most confident.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <PrimaryCTA />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
