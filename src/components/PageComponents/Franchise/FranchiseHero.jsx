import React from "react";
import { Download } from "lucide-react";
import PrimaryCTA from "../../../components/ui/PrimaryCTA";
import franchiseImage from "../../../assets/images/about/aboutHero/about_hero.webp"; // example placeholder

export default function FranchiseHero({
  title = "Franchise",
  mainTitle = "Franchise With House Of Handsome",
  description = "A Premium Opportunity in Men's Grooming — join a fast-growing luxury brand.",
  image = franchiseImage,
  primaryText = "Become A Franchise Partner",
  secondaryText = "Download Franchise Brochure",
}) {
  return (
    <section className="py-8 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Section Heading */}
        <h1 className="mb-12 text-[68px] font-['Cairo'] font-normal text-center text-[#000] leading-[67px] capitalize border-b border-gray-200 pb-10">
          {title}
        </h1>

        {/* Content Layout */}
        <div className="flex flex-col gap-12 items-center md:flex-row">
          {/* Left: Image/Video Placeholder */}
          <div className="md:w-[50%] w-full">
            <div className="w-full h-[280px] md:h-[360px] bg-black rounded-md overflow-hidden">
              <img
                src={image}
                alt={title}
                className="hidden object-cover w-full h-full rounded-md"
              />
              {/* If using video, replace this <img> with <video> or <iframe> */}
            </div>
          </div>

          {/* Right: Text & CTAs */}
          <div className="text-left md:w-[50%] w-full">
            <h2 className="text-[36px] md:text-[44px] font-['Cairo'] font-bold text-[#181818] leading-tight mb-4">
              {mainTitle}
            </h2>
            <p className="font-['Urbanist'] text-[18px] text-gray-600 leading-[28px] mb-6 max-w-[500px]">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <PrimaryCTA>{primaryText}</PrimaryCTA>
              <button className="flex items-center gap-2 border border-black text-black px-5 py-3 rounded-md font-semibold text-[16px] hover:bg-black hover:text-white transition">
                <Download className="w-4 h-4" />
                {secondaryText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
