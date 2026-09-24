import { CAMERON_HEIGHTS_BOOKING_URL } from "@/utils/BookAnAppontemtREdirection";

function TopBar() {
  return (
    <div className="fixed top-0 inset-x-0 z-[70] flex min-h-16 items-center justify-center bg-[#d82028] px-4 py-2 text-white sm:min-h-0 sm:h-10 sm:py-0">
      <p className="font-['Urbanist'] text-xs font-medium leading-snug text-center sm:text-sm">
        Cameron Heights' newest go-to barbershop.
        <br className="sm:hidden" />
        <span className="hidden sm:inline"> </span>
        <a
          href={`${CAMERON_HEIGHTS_BOOKING_URL}?service=${encodeURIComponent("General Booking")}`}
          className="font-bold underline underline-offset-2 hover:text-white/80"
        >
          Book your first cut
        </a>
      </p>
    </div>
  );
}

export default TopBar;
