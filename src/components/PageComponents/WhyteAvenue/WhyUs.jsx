import { Award, Sparkles, Wand2, Sofa, UserCheck } from "lucide-react";
import Eyebrow from "./Eyebrow";
import { WHY_US_ITEMS } from "./data";

const ICONS = {
  award: Award,
  sparkles: Sparkles,
  wand: Wand2,
  sofa: Sofa,
  userCheck: UserCheck,
};

function WhyUs() {
  return (
    <section className="py-14 sm:py-16 md:py-24 w-full bg-white">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex justify-between items-center gap-8 mb-10 md:mb-14 flex-wrap">
          <div>
            <Eyebrow>Why Whyte Ave Trusts Us</Eyebrow>
            <h2 className="font-['Cairo'] text-[36px] md:text-[48px] font-bold leading-tight text-[#181818] max-w-[560px]">
              Barbering treated like a craft, not a queue.
            </h2>
          </div>
          <p className="font-['Urbanist'] max-w-[360px] text-neutral-600 text-[15px]">
            Five reasons regulars stop shopping around after their first visit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {WHY_US_ITEMS.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <div
                key={item.title}
                className="group relative flex flex-col h-full p-6 rounded-2xl border border-neutral-200 bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-200/60 hover:border-[#d82028]/30"
              >
                <span
                  className="absolute top-0 left-0 h-1 w-0 bg-[#d82028] transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                />

                <div className="relative w-14 h-14 mb-5 flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-xl bg-[#d82028]/10 rotate-6 transition-transform duration-300 group-hover:rotate-12"
                    aria-hidden="true"
                  />
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-[#fdf1f1] to-white border border-[#d82028]/10 flex items-center justify-center">
                    <Icon
                      className="w-6 h-6 text-[#d82028] transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.6}
                    />
                  </div>
                </div>

                <h4 className="font-['Cairo'] font-semibold text-[16px] mb-2 text-[#181818]">{item.title}</h4>
                <p className="font-['Urbanist'] text-[14px] leading-[21px] text-neutral-600">{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
