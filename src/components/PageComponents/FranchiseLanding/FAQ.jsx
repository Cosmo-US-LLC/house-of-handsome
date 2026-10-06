import { Plus } from "lucide-react";
import { FAQS } from "./data";

function FAQ() {
  return (
    <section id="faq" className="bg-[#f4f2ef] py-14 md:py-20">
      <div className="mx-auto flex max-w-[860px] flex-col gap-7 px-4 md:px-8">
        <h2 className="font-['Cairo'] text-[32px] font-bold leading-[1.15] text-[#181818] md:text-[48px]">Questions operators ask us</h2>
        <div className="flex flex-col gap-2.5">
          {FAQS.map((f) => (
            <details key={f.q} className="group rounded-[10px] bg-white px-5 py-4 md:px-6 md:py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-['Urbanist'] text-[16px] font-bold text-[#181818] md:text-[18px] [&::-webkit-details-marker]:hidden">
                {f.q}
                <Plus className="h-6 w-6 shrink-0 text-[#d82028] transition-transform group-open:rotate-45" />
              </summary>
              <p className="mt-3.5 font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#4a4744]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
