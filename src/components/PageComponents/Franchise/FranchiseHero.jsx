import React from "react";
import { Download } from "lucide-react";
import PrimaryCTA from "../../../components/ui/PrimaryCTA";
import franchiseImage from "../../../assets/images/about/aboutHero/about_hero.webp";

export default function FranchiseHero({
  mainTitle = "Franchise with House of Handsome",
  description = "A Premium Opportunity in Men's Grooming - join a fast-growing luxury brand",
  image = franchiseImage,
}) {
  return (
    <section className="bg-[#F2F2F2] !overflow-hidden">
      <div className="mx-auto max-w-[1280px] relative px-4 md:px-8">
       
        <div className="flex flex-col gap-12 items-center md:min-h-[535px] md:flex-row">
          <div className="text-left md:w-[55%] w-full">
            <h2 className="text-[36px] md:text-[48px] font-['Cairo'] font-[400] text-[#181818] leading-tight mb-4"
             style={{
              WebkitTextStrokeWidth:"1px",
              WebkitTextStrokeColor:"#000"
            }}
            >
              {mainTitle}
            </h2>
            <p className="font-['Urbanist'] text-[16px] text-gray-600 font-[500] leading-[28px] mb-6 max-w-[550px]">
              {description}
            </p>
           <PrimaryCTA  className="mt-4" />
          </div>
             <div className="md:max-w-[769px] w-full md:bottom-[0%]  md:absolute md:-right-24">
            <img
              src={image}
              alt={"Franchise With House Of Handsome"}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
