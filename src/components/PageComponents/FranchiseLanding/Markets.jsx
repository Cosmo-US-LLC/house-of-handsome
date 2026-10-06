import mapImage from "@/assets/images/franchise/strategicExpansion/strategic_expansion_img.webp";
import { MARKETS_OPEN, MARKETS_SOON, MARKETS_WANTED } from "./data";

const label = "font-['Urbanist'] text-[14px] font-bold uppercase tracking-[0.12em]";

function Markets() {
  return (
    <section id="markets" className="bg-white py-14 md:py-20">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="font-['Cairo'] text-[32px] font-bold leading-[1.15] text-[#181818] md:text-[48px]">
            Where we are growing in Alberta
          </h2>
          <p className="font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#4a4744] md:text-[18px]">
            We are focused on Alberta so every operator gets close support. These are the markets we want to fill next.
          </p>
          <img src={mapImage} alt="House of Handsome Alberta expansion" className="h-[240px] w-full rounded-[10px] object-cover sm:h-[300px]" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2.5">
            <div className={`${label} text-[#4a4744]`}>Open now</div>
            <div className="flex flex-wrap gap-2">
              {MARKETS_OPEN.map((m) => (
                <span key={m} className="rounded-full bg-[#111111] px-3.5 py-2 font-['Urbanist'] text-[15px] font-medium text-white">{m}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className={`${label} text-[#4a4744]`}>Opening soon</div>
            <div className="flex flex-wrap gap-2">
              {MARKETS_SOON.map((m) => (
                <span key={m} className="rounded-full bg-[#f4f2ef] px-3.5 py-2 font-['Urbanist'] text-[15px] font-medium text-[#181818]">{m}</span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className={`${label} text-[#d82028]`}>Looking for operators</div>
            <div className="flex flex-wrap gap-2">
              {MARKETS_WANTED.map((m) => (
                <span key={m} className="rounded-full border-[1.5px] border-[#d82028] px-3.5 py-1.5 font-['Urbanist'] text-[15px] font-medium text-[#8e141b]">{m}</span>
              ))}
            </div>
          </div>
          <p className="font-['Urbanist'] text-[15px] font-medium leading-[24px] text-[#4a4744]">
            Have another Alberta town in mind? Tell us in the form.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Markets;
