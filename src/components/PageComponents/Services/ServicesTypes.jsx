import React from "react";
import image1 from "../../../assets/images/services/services_c1.webp";
import image2 from "../../../assets/images/services/services_c2.webp";
import image3 from "../../../assets/images/services/services_c3.webp";

const services = [
  {
    title: "Cuts",
    description:
      "Looking for a fresh, clean cut? Our barbers specialize in all styles from classic trims to modern fades and everything in between. Each cut is tailored to suit your personality and lifestyle, ensuring you leave feeling confident and looking sharp.",
    image: image1,
     points: [
      "<strong>Precision Fades</strong> – Custom fades that blend seamlessly for a sharp, clean finish",
      "<strong>Classic Cuts</strong> – Timeless styles that never go out of fashion",
      "<strong>Modern Styles</strong> – Trendy, edgy looks for those who want to stand out",
    ],
  },
  {
    title: "Style",
    description: "Your hair, your way. Our stylists are skilled in crafting the perfect look, whether it’s a slick back, textured layers, or a completely new style. We take the time to understand your vision, making sure you get a personalized style that fits your personality and lifestyle.",
    image: image2,
     points: [
      "<strong>Custom Styling</strong> – From natural to bold, we create the perfect look for you.",
      " <strong>Texturizing and Volume</strong> – Add life to your hair with volume or texture for a fuller look",
      "<strong>Updos and Special Event Styling</strong> – Perfect for those special occasions or a unique night out.",
    ],
  },
  {
    title: "Care",
    description: "Healthy hair starts with the right care. Our care services are designed to promote hair health and keep your scalp in top condition. Regular maintenance keeps your hair looking great and feeling refreshed.",
    image: image3,
     points: [
      "<strong>Scalp Treatments</strong> – Address scalp issues like dryness, dandruff, or irritation with our targeted treatments",
      "<strong>Deep Conditioning</strong> – Restore moisture, shine, and softness to your hair.",
      "<strong>Shampoo & Blowout</strong> – Get a quick refresh with a deep clean and professional blowout.",
    ],
  },
];

export default function ServicesTypes() {
  return (
    <section className=" md:py-16  bg-white">
      <div className="mx-auto max-w-[1280px] space-y-[25px] md:space-y-[60px]">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row max-md:flex-col-reverse gap-[20px] md:gap-[43px] items-center overflow-hidden "
          >
            {/* Left Image */}
            <div className="w-full md:w-[50%] max-md:p-4 max-w-[680px] max-h-[508px] max relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-[50%] p-4 md:p-6 flex flex-col justify-center gap-4">
              <h3 className="text-[36px] font-bold text-[#181818] font-[Cairo] capitalize">
                {service.title}
              </h3>
              <p className="text-[#181818] text-[16px] font-[500] font-[Urbanist] leading-[162.5%]">{service.description}</p>
              <ul className="list-disc pl-5 space-y-1 text-[#181818] font-[Urbanist] text-[16px]">
                {service.points.map((point, i) => (
                  <li 
                   key={i}
      dangerouslySetInnerHTML={{
        __html: point.replace(
          /<strong>/g,
          '<strong class="!font-[600]">'
        ),
      }}
                  ></li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
