import { Tag, Scissors, CalendarCheck } from "lucide-react";
import Eyebrow from "./Eyebrow";
import { HOW_IT_WORKS_STEPS } from "./data";

const ICONS = {
  tag: Tag,
  scissors: Scissors,
  calendar: CalendarCheck,
};

function StepIcon({ step, index }) {
  const Icon = ICONS[step.icon];
  return (
    <div className="relative z-10 w-24 h-24 shrink-0 flex items-center justify-center">
      {/* Soft glow */}
      <div
        className="absolute inset-1 rounded-full bg-[#d82028]/15 blur-xl opacity-70 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden="true"
      />
      {/* Slowly rotating dashed ring */}
      <div
        className="absolute inset-0 rounded-full border-2 border-dashed border-[#d82028]/25 motion-safe:animate-[spin_10s_linear_infinite] transition-colors duration-300 group-hover:border-[#d82028]/50"
        aria-hidden="true"
      />
      {/* Icon circle */}
      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-white to-[#fdf1f1] flex items-center justify-center border border-neutral-200 shadow-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#d82028]/10 group-hover:-translate-y-1">
        <Icon
          className="w-8 h-8 text-[#d82028] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
          strokeWidth={1.6}
        />
      </div>
      <span className="absolute top-0 right-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#d82028] text-white font-['Urbanist'] text-[12px] font-bold shadow-sm ring-4 ring-[#F6F6F6]">
        {index + 1}
      </span>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="py-14 sm:py-16 md:py-24 w-full bg-[#F6F6F6] scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="text-center max-w-[600px] mx-auto mb-12 md:mb-16">
          <Eyebrow center>The Process</Eyebrow>
          <h2 className="font-['Cairo'] text-[36px] md:text-[48px] font-bold leading-tight text-[#181818]">
            Three steps. No back and forth.
          </h2>
        </div>

        <div className="max-w-[1020px] mx-auto">
          {/* Mobile: left-aligned timeline (icon column + text beside it) */}
          <div className="relative sm:hidden">
            <div
              className="absolute left-12 top-12 bottom-12 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-neutral-300 to-transparent"
              aria-hidden="true"
            />
            <div className="flex flex-col gap-8">
              {HOW_IT_WORKS_STEPS.map((step, i) => (
                <div key={step.num} className="group flex items-start gap-5 text-left">
                  <StepIcon step={step} index={i} />
                  <div className="pt-3">
                    <h3 className="font-['Cairo'] font-semibold text-[20px] mb-2 text-[#181818]">{step.title}</h3>
                    <p className="font-['Urbanist'] text-[14px] leading-[22px] text-neutral-600">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop/tablet: centered 3-column grid with horizontal connector */}
          <div className="relative hidden sm:block">
            <div
              className="absolute left-[16.6667%] right-[16.6667%] top-12 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent"
              aria-hidden="true"
            />
            <div className="grid grid-cols-3 gap-6 md:gap-8">
              {HOW_IT_WORKS_STEPS.map((step, i) => (
                <div key={step.num} className="group relative flex flex-col items-center text-center px-2">
                  <div className="mb-5">
                    <StepIcon step={step} index={i} />
                  </div>
                  <h3 className="font-['Cairo'] font-semibold text-[20px] mb-2 text-[#181818]">{step.title}</h3>
                  <p className="font-['Urbanist'] text-[14px] leading-[22px] text-neutral-600 max-w-[240px] mx-auto">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 md:mt-14 font-['Urbanist'] text-[13px] font-semibold uppercase tracking-[0.04em] text-neutral-500">
          Online booking powered by <span className="text-[#d82028]">Phorest</span>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
