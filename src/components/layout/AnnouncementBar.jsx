import React from "react";

const GIFT_CARD_URL =
  "https://gift-cards.phorest.com/salons/houseofhandsomebarbershop?_gl=1*k15exo*_gcl_au*MTM0MzQyNzIyMC4xNzgzMzM2MzY4Li0uLS4xNzg0Mjk1MDU0LjExMDUwOTM2MTkuMTc4NDI5NTA1NC4xNzg0Mjk1MDU0*_ga*OTM1MjMyNDI4LjE3NTE1MzkzNjk.*_ga_2NK6J237BJ*czE3ODUxNTQ5Njkkbzc0JGcwJHQxNzg1MTU0OTcwJGo1OSRsMCRoMTU1NTMzNzA5MA..";

function AnnouncementBar() {
  return (
    <div className="fixed top-0 inset-x-0 z-[70] flex min-h-16 items-center justify-center bg-[#d82028] px-4 py-2 text-white sm:min-h-0 sm:h-10 sm:py-0">
      <p className="font-['Urbanist'] text-xs font-medium leading-snug text-center sm:text-sm">
        Stuck on a gift? A House of Handsome gift card always fits.
        <br className="sm:hidden" />
        <span className="hidden sm:inline"> </span>
        <a
          href={GIFT_CARD_URL}
          className="font-bold underline underline-offset-2 hover:text-white/80"
        >
          Buy one now
        </a>
      </p>
    </div>
  );
}

export default AnnouncementBar;
