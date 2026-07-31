import { Plus } from "lucide-react";
import Eyebrow from "./Eyebrow";
import { OFFERS } from "./data";
import { WHYTE_AVE_BOOKING_URL } from "@/utils/BookAnAppontemtREdirection";

function OfferCard({ offer }) {
  const bookingHref = `${WHYTE_AVE_BOOKING_URL}?service=${encodeURIComponent(offer.serviceParam)}`;

  return (
    <div
      className={`relative flex flex-col rounded-[10px] border p-6 transition-transform duration-200 hover:-translate-y-1 ${
        offer.featured ? "border-[#d82028] bg-[#fff5f5]" : "border-neutral-200 bg-white"
      }`}
    >
      <span
        className={`self-start rounded-full px-3 py-1 mb-3 font-['Urbanist'] text-[11px] font-bold uppercase tracking-[0.04em] text-white ${
          offer.featured ? "bg-[#d82028]" : "bg-[#181818]"
        }`}
      >
        {offer.tag}
      </span>

      <h3 className="font-['Cairo'] font-bold text-[22px] mb-1.5 text-[#181818]">{offer.title}</h3>
      <p className="font-['Urbanist'] text-[14px] text-neutral-600 mb-5 flex-grow">{offer.desc}</p>

      <div className="flex items-baseline gap-2.5 mb-1">
        <span className="font-['Cairo'] text-[28px] font-bold text-[#d82028]">{offer.now}</span>
        {offer.was && <span className="font-['Urbanist'] text-[15px] text-neutral-400 line-through">{offer.was}</span>}
        {offer.priceLabel && (
          <span className="font-['Urbanist'] text-[13px] text-neutral-500">{offer.priceLabel}</span>
        )}
      </div>
      {offer.secondaryPrice && (
        <div className="flex items-baseline gap-2.5 mb-1">
          <span className="font-['Cairo'] text-[20px] font-bold text-[#d82028]">{offer.secondaryPrice.now}</span>
          <span className="font-['Urbanist'] text-[13px] text-neutral-500">{offer.secondaryPrice.priceLabel}</span>
        </div>
      )}

      <div className="border-t border-dashed border-neutral-300 my-4" aria-hidden="true" />

      <ul className="mb-6 list-none">
        {offer.benefits.map((b) => (
          <li key={b} className="font-['Urbanist'] text-[14px] text-neutral-600 pl-5 relative mb-1.5">
            <Plus className="w-3.5 h-3.5 text-[#d82028] absolute left-0 top-[3px]" aria-hidden="true" />
            {b}
          </li>
        ))}
      </ul>

      <a
        href={bookingHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full block text-center rounded-[10px] py-3 px-4 font-['Urbanist'] text-[14px] font-bold capitalize transition-colors duration-300 ${
          offer.featured
            ? "bg-[#d82028] text-white hover:bg-[#b91219]"
            : "border border-black text-black hover:bg-black hover:text-white"
        }`}
      >
        Choose This Service
      </a>
    </div>
  );
}

function Offers() {
  return (
    <section id="offers" className="py-16 md:py-20 w-full bg-white scroll-mt-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex justify-between items-center gap-8 mb-12 flex-wrap">
          <div>
            <Eyebrow>View The Offers</Eyebrow>
            <h2 className="font-['Cairo'] text-[36px] md:text-[48px] font-bold leading-tight text-[#181818] max-w-[560px]">
              Five ways to leave looking like you mean it.
            </h2>
          </div>
          <p className="font-['Urbanist'] max-w-[360px] text-neutral-600 text-[15px]">
            Every package below is bookable in two taps through Phorest, our online booking partner.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFERS.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Offers;
