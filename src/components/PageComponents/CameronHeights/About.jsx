import aboutImage from "@/assets/images/cameronHeights/about-desktop.webp";
import { PILLARS } from "./data";

function About() {
  return (
    <section id="about" className="w-full bg-[#0e0b0a] py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="mb-2 h-[3px] w-9 bg-[#d82028]" aria-hidden="true" />
        <h2 className="font-['Cairo'] text-[32px] font-bold text-white md:text-[40px]">About Us</h2>

        <div className="mt-8 grid grid-cols-1 items-center gap-9 md:grid-cols-2">
          <div className="min-h-[240px] overflow-hidden rounded-[6px] border border-white/10 bg-[#221c19]">
            <img
              src={aboutImage}
              alt="House of Handsome Cameron Heights barber styling a client"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="font-['Urbanist'] text-[15px] leading-[1.7] text-white/60">
              With a focus on quality, style, and precision, our barbers provide an unmatched experience that
              leaves you looking and feeling your best.
            </p>
            <p className="font-['Urbanist'] text-[15px] leading-[1.7] text-white/60">
              Whether it's a fresh cut, a sharp fade, or a clean shave, we bring your vision to life with expertise
              and care.
            </p>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="rounded-[6px] border border-white/10 bg-[#221c19] p-6">
              <h3 className="font-['Urbanist'] text-[17px] font-bold text-[#d82028]">{pillar.title}</h3>
              <p className="mt-2 font-['Urbanist'] text-[14px] leading-[1.5] text-white/60">{pillar.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-7 rounded-[6px] border border-white/10 bg-[#221c19] p-8 md:p-9">
          <h3 className="font-['Cairo'] text-[24px] font-bold text-white">Founders Note</h3>
          <p className="mt-4 max-w-[70ch] font-['Urbanist'] text-[15px] leading-[1.7] text-white/60">
            House of Handsome was born from a love for the craft and a desire to create something lasting. A place
            where individuals feel valued, confident, and truly part of a community. Every chair, every barber, and
            every client's story is a reflection of that vision. We believe a barbershop is more than just a place
            to get a haircut, it's a culture of care, creativity, and confidence.
          </p>
          <p className="mt-3 font-['Urbanist'] text-[15px] leading-[1.7] text-white/60">
            Thank you for being a part of our journey!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
