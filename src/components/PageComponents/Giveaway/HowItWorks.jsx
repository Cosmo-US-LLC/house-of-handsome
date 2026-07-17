import React from "react";

const STEPS = [
  {
    num: "01",
    title: "Enter Free",
    body: "Drop your name and number in the form above. That's the whole job. No payment, no card needed.",
  },
  {
    num: "02",
    title: "We Draw At Opening",
    body: "Winners are drawn live at our Red Deer opening event. Come down for the draw, or we'll email you if your name comes up.",
  },
  {
    num: "03",
    title: "Get Cut. Free.",
    body: "Grand prize winner books one free cut a month for 12 months. Runners-up claim their free first visit anytime in the first three months.",
  },
];

function HowItWorks() {
  return (
    <section className="w-full bg-white py-14 md:py-[84px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="mb-11">
          <p className="mb-3 font-['Urbanist'] text-[14px] font-semibold uppercase tracking-[0.2em] text-[#d82028]">
            How It Works
          </p>
          <h2 className="font-['Cairo'] text-[28px] font-bold tracking-[-0.01em] text-[#111111] md:text-[40px]">
            Thirty Seconds. <span className="text-[#d82028]">That's All.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="rounded-xl border border-[#ececec] p-7.5"
            >
              <span className="font-['Cairo'] text-[16px] font-extrabold text-[#d82028]">
                {step.num}
              </span>
              <h3 className="my-2.5 font-['Cairo'] text-[20px] font-bold text-[#111111]">
                {step.title}
              </h3>
              <p className="font-['Urbanist'] text-[16px] text-[#6b6b6b]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
