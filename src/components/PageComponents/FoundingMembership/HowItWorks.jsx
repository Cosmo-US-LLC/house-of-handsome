import React from "react";

const STEPS = [
  {
    num: "1",
    title: "Claim Your Spot",
    body: "Tap the button, pay $50 through our secure booking system, get instant confirmation. Done in two minutes.",
  },
  {
    num: "2",
    title: "We Open",
    body: "Your founding number is reserved the moment you join. When the Red Deer shop opens, book your first visit and collect your card.",
  },
  {
    num: "3",
    title: "Perks For Life",
    body: "Everything is active from your very first visit. One payment, no renewals, nothing expires.",
  },
];

function HowItWorks() {
  return (
    <section className="w-full bg-white py-14 md:py-[72px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="mb-10">
          <p className="mb-3 font-['Urbanist'] text-[13px] font-semibold uppercase tracking-[0.2em] text-[#d82028]">
            How It Works
          </p>
          <h2 className="font-['Cairo'] text-[28px] font-bold tracking-[-0.01em] text-[#111111] md:text-[38px]">
            Three Steps. <span className="text-[#d82028]">Two Minutes.</span>
          </h2>
        </div>

        <div className="mb-11 grid grid-cols-1 gap-5 md:grid-cols-3">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="relative rounded-xl border border-[#ececec] p-7"
            >
              <span className="absolute right-5.5 top-4.5 font-['Cairo'] text-[30px] font-extrabold text-[#d82028] opacity-25">
                {step.num}
              </span>
              <h3 className="mb-2 font-['Cairo'] text-[19px] font-bold text-[#111111]">
                {step.title}
              </h3>
              <p className="font-['Urbanist'] text-[15.5px] text-[#6b6b6b]">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#claim"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-[8px] bg-[#d82028] px-9 py-4 font-['Urbanist'] text-[16px] font-bold text-white transition-colors duration-300 hover:bg-[#b91219]"
          >
            Claim My Spot for $50
          </a>
          <p className="mt-3 font-['Urbanist'] text-[13.5px] text-[#6b6b6b]">
            Secure checkout &middot; Instant confirmation
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
