import React from "react";
import { Download } from "lucide-react";
import PrimaryCTA from "../../../components/ui/PrimaryCTA";
import franchiseImage from "../../../assets/images/franchise/franchise_hero/franchise_hero_new.png";
import { ScrolldownToFranchiseForm, ScrolldownTostrategicExpansion } from "@/utils/BookAnAppontemtREdirection";

export default function FranchiseHero({
  mainTitle = "Franchise with House of Handsome",
  description = "A Premium Opportunity in Men's Grooming - join a fast-growing luxury brand",
  image = franchiseImage,
}) {
  return (
    <section className="bg-[#F2F2F2] !overflow-hidden pt-4 md:pt-0">
      <div className="mx-auto max-w-[1280px] relative px-4 md:px-8">
        <div className="flex flex-col gap-12 items-center md:min-h-[535px] md:flex-row">
          <div className="text-left 2xl:w-[55%] md:w-[40%] w-full">
            <h1 className="text-[36px] md:text-[48px] font-['Cairo'] font-[700] text-[#181818] leading-tight mb-4">
              {mainTitle}
            </h1>
            <p className="font-['Urbanist'] mt-4 text-[16px] text-gray-600 font-[500] leading-[28px] mb-6 max-w-[550px]">
              {description}
            </p>
            <div className="flex  gap-4 md:items-center md:flex-row flex-col">
              <PrimaryCTA
                onClick={ScrolldownToFranchiseForm}
                children={"Explore Franchise Opportunities"}
                className="max-md:max-w-[270px]"
              />
              {/* <span className="flex items-center font-['Urbanist'] text-black font-bold cursor-pointer underline underline-offset-2" onClick={ScrolldownTostrategicExpansion}>
                View Open Roles
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M3.33342 10.8334L13.4751 10.8334L8.81675 15.4917L10.0001 16.6667L16.6667 10L10.0001 3.33337L8.82508 4.50837L13.4751 9.16671L3.33342 9.16671L3.33342 10.8334Z"
                    fill="black"
                  />
                </svg>
              </span> */}
            </div>
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
