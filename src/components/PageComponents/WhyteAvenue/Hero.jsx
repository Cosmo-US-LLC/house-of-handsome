import { Star } from "lucide-react";
import PrimaryCTA from "@/components/ui/PrimaryCTA";
import SecondaryCTA from "@/components/ui/SecondaryCTA";
import { WHYTE_AVE_BOOKING_URL } from "@/utils/BookAnAppontemtREdirection";

const HERO_IMAGE = "/blog-images/9426-Untitled-design-9.png";

function Hero() {
  const handleBook = () => {
    window.location.href = `${WHYTE_AVE_BOOKING_URL}?service=${encodeURIComponent("General Booking")}`;
  };

  return (
    <header id="top" className="relative w-full overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex flex-col gap-6 items-center max-md:justify-center min-h-[640px] w-full md:flex-row md:gap-8">
          <div className="pt-24 pb-4 w-full md:w-[58%] space-y-4 text-left md:space-y-6 md:pt-32">
            <h1 className="font-['Cairo'] font-bold text-[36px] md:text-[48px] leading-[114.583%] text-[#fff] max-w-[531px]">
              Walk out <span className="text-[#d82028]">sharper</span> than you walked in.
            </h1>

            <p className="max-w-[500px] font-['Urbanist'] text-[18px] font-medium leading-[26px] text-[#fff]">
              Premium cuts, skin fades, and grooming rituals on Whyte Avenue, booked in under a minute by barbers who
              treat your chair time like it matters.
            </p>

            <div className="flex flex-wrap gap-4">
              <PrimaryCTA onClick={handleBook}>Book Appointment</PrimaryCTA>
              <a href="#offers">
                <SecondaryCTA className="!rounded-[10px] !px-6 !py-4 !text-base !border !border-white !text-white hover:!bg-white hover:!text-black">
                  View Our Offers
                </SecondaryCTA>
              </a>
            </div>

            <div className="w-full md:w-[450px] h-px bg-white/20 mt-6" aria-hidden="true" />

            <div className="flex pt-2 flex-nowrap gap-x-3 sm:gap-x-6">
              <div className="min-w-0">
                <div className="flex items-baseline gap-1 sm:gap-2">
                  <span className="font-['Cairo'] font-bold text-[19px] sm:text-[28px] text-white">4.9</span>
                  <div className="flex items-center gap-0.5 text-[#d82028]" aria-label="Rated 4.9 out of 5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5" fill="#d82028" strokeWidth={0} />
                    ))}
                  </div>
                </div>
                <div className="font-['Urbanist'] text-[12px] sm:text-[13px] font-semibold text-white/80 mt-1 whitespace-nowrap">
                  Avg Rating
                </div>
              </div>
              <div className="min-w-0">
                <div className="font-['Cairo'] font-bold text-[19px] sm:text-[28px] text-white whitespace-nowrap">
                  2,500+
                </div>
                <div className="font-['Urbanist'] text-[12px] sm:text-[13px] font-semibold text-white/80 mt-1 whitespace-nowrap">
                  Whyte Ave Clients
                </div>
              </div>
              <div className="min-w-0">
                <div className="font-['Cairo'] font-bold text-[19px] sm:text-[28px] text-white whitespace-nowrap">
                  3
                </div>
                <div className="font-['Urbanist'] text-[12px] sm:text-[13px] font-semibold text-white/80 mt-1 whitespace-nowrap">
                  Award Winning Barbers
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMAGE}
          alt="House of Handsome Whyte Avenue barbershop"
          loading="eager"
          fetchPriority="high"
          className="object-cover w-full h-full"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.65) 100%)",
          }}
        />
      </div>
    </header>
  );
}

export default Hero;
