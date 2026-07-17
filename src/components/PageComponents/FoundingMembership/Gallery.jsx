import React from "react";
import interiorShopWhyteAvenue from "@/assets/images/foundingMembership/gallery/interior_shop_whyte_avenue.webp";
import beardTrimInProgress from "@/assets/images/foundingMembership/gallery/beard_trim_in_progress.webp";
import hotTowelShaveCloseUp from "@/assets/images/foundingMembership/gallery/hot_towel_shave_close_up.webp";
import fadeHaircutFinishedClient from "@/assets/images/foundingMembership/gallery/fade_haircut_finished_client.webp";

const GALLERY_IMAGES = [
  { src: interiorShopWhyteAvenue, alt: "House of Handsome interior · Whyte Avenue" },
  { src: beardTrimInProgress, alt: "Beard trim in progress · Edmonton Downtown" },
  { src: hotTowelShaveCloseUp, alt: "Hot towel shave · Sherwood Park" },
  { src: fadeHaircutFinishedClient, alt: "Finished fade haircut / client · South Common" },
];

function Gallery() {
  return (
    <section className="w-full bg-white pb-14 md:pb-[72px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="mb-10">
          <p className="mb-3 font-['Urbanist'] text-[14px] font-semibold uppercase tracking-[0.2em] text-[#d82028]">
            Inside House of Handsome
          </p>
          <h2 className="mb-3 font-['Cairo'] text-[28px] font-bold tracking-[-0.01em] text-[#111111] md:text-[38px]">
            Same Chairs. Same Craft. <span className="text-[#d82028]">New City.</span>
          </h2>
          <p className="max-w-[58ch] font-['Urbanist'] text-[16px] text-[#6b6b6b]">
            The Red Deer shop is being built right now. Here's what every
            House of Handsome looks like inside.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.src}
              className="group aspect-[4/5] overflow-hidden rounded-xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
