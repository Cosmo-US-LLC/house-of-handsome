import React from "react";
import teenHeroImage from "../../../assets/images/teen/teenHero/teen_hero.webp";

export default function TeenHero({
  image = teenHeroImage,
  paragraphs = [
    "At House of Handsome, we help teens express their style with modern cuts, clean finishes, and looks that boost confidence.",
  ],
}) {
  return (
    <section className="max-md:pt-8 max-md:pb-20 bg-[#F2F2F2] sm:px-8 overflow-hidden">
      <div className="mx-auto max-w-[1280px] relative px-4 md:px-8">
        <div className="flex flex-col gap-12 items-center md:min-h-[510px] md:flex-row">
          <div className="text-left md:w-[45%] w-full">
            <h2
              className="mb-4 text-[48px] font-['Cairo'] font-[400]  text-[#000] leading-[55px] capitalize "
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#000",
              }}
            >
              Fresh. Trendy. Confident.
            </h2>
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className="mb-4 text-[16px] font-['Urbanist'] leading-[26px] font-medium text-[#181818] max-w-[500px]"
              >
                {text}
              </p>
            ))}
          </div>
          <div className="md:max-w-[769px] w-full md:bottom-0  md:absolute md:-right-20">
            <img
              src={image}
              alt={"At House of Handsome"}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// import React from "react";
// import PrimaryCTA from "../../ui/PrimaryCTA";
// import teenHeroImage from "../../../assets/images/teen/teenHero/teen_hero.webp";

// function TeenHero() {
//   return (
//     <section className="w-full bg-[#F2F2F2]">
//       <div className="mx-auto max-w-[1440px] px-10">
//         <div className="flex flex-col gap-12 items-center py-12 md:flex-row md:py-16">
//           {/* Left Column - Text Content */}
//           <div className="space-y-6 w-full md:w-1/2">
//             <h1 className="font-['Cairo'] font-normal text-black text-[36px] md:text-[48px] leading-[42px] md:leading-[55px] capitalize">
//               Fresh. Trendy. Confident.
//             </h1>

//             <p className="font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#181818] max-w-[554px]">
//               At House of Handsome, we help teens look their best with modern
//               styles tailored just for them. Whether it's your first cut or
//               you're looking for the latest trends, we've got you covered.
//             </p>

//             <div className="pt-2">
//               <PrimaryCTA>Book Appointment</PrimaryCTA>
//             </div>
//           </div>

//           {/* Right Column - Image */}
//           <div className="w-full md:w-1/2 h-[400px] md:h-[535px]">
//             <img
//               src={teenHeroImage}
//               alt="Barber styling teenager's hair"
//               className="object-cover w-full h-full rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default TeenHero;
