import React from "react";

function FoundersNote() {
  return (
    <section className="w-full bg-[#f7f7f7] py-20">
      {/* Max Container Wrapper - 1280px */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Centered Content Container */}
        <div className="mx-auto flex max-w-[840px] flex-col items-center gap-6 text-center">
          {/* Heading with Description */}
          <div className="flex flex-col gap-4">
            {/* Title */}
            <h2 className="font-['Cairo'] text-3xl font-bold capitalize text-[#181818] md:text-4xl lg:text-[48px] lg:leading-[55px]">
              Founders note
            </h2>

            {/* Paragraph 1 */}
            <p className="font-['Urbanist'] text-base font-medium leading-[26px] text-[#181818]">
              House of Handsome was born from a love for the craft and a desire
              to create something lasting. A place where individuals feel
              valued, confident, and truly part of a community. Every chair,
              every barber, and every client's story is a reflection of that
              vision. We believe a barbershop is more than just a place to get
              a haircut, it's a culture of care, creativity, and confidence.
            </p>

            {/* Paragraph 2 - Thank You Line */}
            <p className="font-['Urbanist'] text-base font-medium leading-[26px] text-[#181818]">
              Thank you for being a part of our journey!
            </p>
          </div>

          {/* Signature Section */}
          <div className="mt-4 flex flex-col items-center">
            {/* Signature Name - "Alex" in cursive */}
            <p
              className="text-[60px] leading-normal text-[#d82028] md:text-[87px]"
              style={{ fontFamily: "'Rouge Script', cursive" }}
            >
              Alex
            </p>

            {/* Founder Title */}
            <p className="font-['Urbanist'] text-base font-bold leading-[26px] text-[#181818]">
              Founder
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FoundersNote;
