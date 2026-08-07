import { Star } from "lucide-react";
import { WHYTE_AVE_BOOKING_URL } from "@/utils/BookAnAppontemtREdirection";

const BG_IMAGE = "/blog-images/9672-House-Of-Handsome-45-of-62-scaled.jpeg";

function FinalCTA() {
  const bookingHref = `${WHYTE_AVE_BOOKING_URL}?service=${encodeURIComponent("General Booking")}`;

  return (
    <section className="relative w-full py-16 sm:py-20 md:py-24 overflow-hidden">
      <img
        src={BG_IMAGE}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0.7) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start font-['Urbanist'] text-[13px] font-bold tracking-[0.08em] uppercase text-white/90 mb-4">
              Do Not Overthink The Cut
            </div>
            <h2 className="font-['Cairo'] text-[36px] md:text-[48px] font-bold leading-tight text-white max-w-[600px] mx-auto lg:mx-0">
              Your next great haircut is one booking away.
            </h2>
            <p className="font-['Urbanist'] text-[15px] text-white/80 max-w-[460px] mx-auto lg:mx-0 mt-4">
              Walk-ins welcome, but chairs on Whyte Ave fill up fast. Lock in your barber and time slot online in
              under a minute.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 p-7 sm:p-8 text-center lg:text-left mx-auto lg:mx-0 max-w-[380px] w-full">
            <div className="flex items-center justify-center lg:justify-start gap-1 mb-3 text-[#d82028]" aria-label="Rated 4.9 out of 5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4" fill="#d82028" strokeWidth={0} />
              ))}
            </div>
            <p className="font-['Cairo'] font-bold text-[18px] text-[#181818] mb-1">4.9 average rating</p>
            <p className="font-['Urbanist'] text-[13px] text-neutral-500 mb-6">
              Trusted by 2,500+ Whyte Ave clients
            </p>

            <a
              href={bookingHref}
              className="flex items-center justify-center w-full whitespace-nowrap rounded-[10px] bg-[#d82028] px-8 py-4 font-['Urbanist'] text-[16px] font-bold capitalize text-white transition-colors duration-300 hover:bg-[#b91219]"
            >
              Book Your Appointment Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
