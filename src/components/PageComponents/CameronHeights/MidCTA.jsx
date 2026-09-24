import PrimaryCTA from "@/components/ui/PrimaryCTA";
import { CAMERON_HEIGHTS_BOOKING_URL } from "@/utils/BookAnAppontemtREdirection";

function MidCTA() {
  const handleBook = () => {
    window.location.href = `${CAMERON_HEIGHTS_BOOKING_URL}?service=${encodeURIComponent("General Booking")}`;
  };

  return (
    <section className="w-full bg-[#1a1512] py-14 text-center text-white">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <h2 className="font-['Cairo'] text-[28px] font-bold text-white">Ready For Your Next Cut?</h2>
        <p className="mx-auto mt-3 max-w-[50ch] font-['Urbanist'] text-[15px] text-white/60">
          Book online in under a minute, or walk in and we'll get you in the chair.
        </p>
        <div className="mt-6 flex justify-center">
          <PrimaryCTA onClick={handleBook}>Book An Appointment</PrimaryCTA>
        </div>
      </div>
    </section>
  );
}

export default MidCTA;
