import proofImage from "@/assets/images/franchise/franchiseModels/franchise_collage.webp";
import { PROOF_STATS } from "./data";

function Proof() {
  return (
    <section className="bg-[#f4f2ef] py-14 md:py-20">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-8 px-4 md:px-8 lg:grid-cols-2 lg:gap-12">
        <img src={proofImage} alt="House of Handsome barbershops across Alberta" className="h-[260px] w-full rounded-[10px] object-cover sm:h-[340px] lg:h-[380px]" />
        <div className="flex flex-col gap-6">
          <h2 className="font-['Cairo'] text-[32px] font-bold leading-[1.15] text-[#181818] md:text-[48px]">
            Built in Alberta, one chair at a time
          </h2>
          <p className="font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#4a4744] md:text-[18px]">
            House of Handsome started as a single barbershop and has grown to six Alberta locations by focusing on precision,
            consistency and a premium experience clients come back for.
          </p>
          <div className="grid grid-cols-3 gap-3">
            {PROOF_STATS.map((s) => (
              <div key={s.label} className="rounded-[10px] bg-white p-3 sm:p-5">
                <div className="font-['Cairo'] text-[28px] font-bold leading-tight text-[#d82028] sm:text-[40px]">{s.value}</div>
                <div className="font-['Urbanist'] text-[13px] font-medium text-[#4a4744] sm:text-[14px]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Proof;
