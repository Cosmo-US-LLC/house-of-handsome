import PrimaryCTA from "@/components/ui/PrimaryCTA";
import finalCtaImage from "@/assets/images/cameronHeights/final-cta.webp";
import { CAMERON_HEIGHTS_BOOKING_URL } from "@/utils/BookAnAppontemtREdirection";
import { PHONE, PHONE_HREF } from "./data";

function FinalCTA() {
  const handleBook = () => {
    window.location.href = `${CAMERON_HEIGHTS_BOOKING_URL}?service=${encodeURIComponent("General Booking")}`;
  };

  return (
    <section
      className="w-full py-16 md:py-20"
      style={{ background: "linear-gradient(180deg, #1a1512, #0e0b0a)" }}
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="font-['Cairo'] text-[36px] font-bold leading-[1.05] text-white md:text-[48px]">
            Your Chair Is Waiting.
          </h2>
          <p className="mt-3 max-w-[50ch] font-['Urbanist'] text-[15px] text-white/60">
            Walk-ins welcome, or book ahead to guarantee your barber and your time.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-5">
            <PrimaryCTA onClick={handleBook}>Book Your Appointment</PrimaryCTA>
            <a href={PHONE_HREF} className="font-['Urbanist'] text-[15px] font-semibold text-white">
              Call {PHONE}
            </a>
          </div>
        </div>

        <div className=" overflow-hidden  rounded-[6px]  md:justify-self-end md:w-[90%]">
          <img
            src={finalCtaImage}
            alt="House of Handsome Cameron Heights barber at work"
            className="h-full w-full object-top"
          />
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
