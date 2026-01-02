import React, {useEffect} from "react";
import image1 from "../../../assets/images/services/services_c1.webp";
import image2 from "../../../assets/images/services/services_c2.webp";
import image3 from "../../../assets/images/services/services_c3.webp";
import innerimage1 from "../../../assets/images/services/srv_cards_img (9).webp";
import innerimage2 from "../../../assets/images/services/srv_cards_img (8).webp";
import innerimage3 from "../../../assets/images/services/srv_cards_img (7).webp";
import innerimage4 from "../../../assets/images/services/srv_cards_img (5).webp";
import innerimage5 from "../../../assets/images/services/srv_cards_img (6).webp";
import innerimage6 from "../../../assets/images/services/srv_cards_img (4).webp";
import innerimage7 from "../../../assets/images/services/srv_cards_img (3).webp";
import innerimage8 from "../../../assets/images/services/srv_cards_img (2).webp";
import innerimage9 from "../../../assets/images/services/srv_cards_img (1).webp";
import PrimaryCTA from "../../ui/PrimaryCTA";


const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const services = [
  {
    title: "cuts",
    description:
      "Looking for a fresh, clean cut? Our barbers specialize in all styles from classic trims to modern fades and everything in between. Each cut is tailored to suit your personality and lifestyle, ensuring you leave feeling confident and looking sharp.",
    image: image1,
    cards: [
      {
        title: "Precision Fades",
        description: "Custom fades that blend seamlessly for a sharp, clean finish.",
        image: innerimage1, 
      },
      {
        title: "Classic Cuts",
        description: "Timeless styles that never go out of fashion.",
        image: innerimage2, 
      },
      {
        title: "Modern Styles",
        description: "Trendy, edgy looks for those who want to stand out.",
        image: innerimage3, 
      },
    ],
  },
  {
    title: "style",
    description:
      "Your hair, your way. Our stylists are skilled in crafting the perfect look, whether it’s a slick back, textured layers, or a completely new style. We take the time to understand your vision, making sure you get a personalized style that fits your personality and lifestyle.",
    image: image2,
    cards: [
      {
        title: "Custom Styling",
        description: "From natural to bold, we create the perfect look for you.",
        image: innerimage4, 
      },
      {
        title: "Texturizing & Volume",
        description: "Add life to your hair with volume or texture for a fuller look",
        image: innerimage5, 
      },
      {
        title: "Updos and Special Event Styling",
        description: "Perfect for those special occasions unique night out.",
        image: innerimage6, 
      },
    ],
  },
  {
    title: "care",
    description:
      "Healthy hair starts with the right care. Our care services are designed to promote hair health and keep your scalp in top condition. Regular maintenance keeps your hair looking great and feeling refreshed.",
    image: image3,
    cards: [
      {
        title: "Scalp Treatments",
        description: "Address scalp issues like dryness, dandruff, or irritation with our targeted treatments.",
        image: innerimage7, 
      },
      {
        title: "Deep Conditioning ",
        description: "Restore moisture, shine, and softness to your hair.",
        image: innerimage8, 
      },
      {
        title: "Shampoo & Blowout",
        description: "Get a quick refresh with a deep clean and professional blowout.",
        image: innerimage9, 
      },
    ],
  },
];

export default function ServicesTypes() {
  useEffect(() => {
    const hash = window.location.hash;
    
    if (hash && hash !== '#') {
      const timeout = setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); 
      return () => clearTimeout(timeout);
    }
  }, []); 

    const handleOnClick = () => {
  const url = "https://www.phorest.com/salon/houseofhandsomebarbershop2/locations";
  window.open(url, '_blank'); 
};

  return (
    <section className="bg-white md:py-16">
      <div className="mx-auto max-w-[1280px] space-y-[25px] md:space-y-[60px]">
        {services.map((service, index) => (
          <div
            id={slugify(service.title)}
            key={index}
            className="relative flex flex-col md:flex-row max-md:flex-col-reverse gap-[20px] md:gap-[43px] items-center overflow-hidden "
          >
            {/* Left Image */}
            <div className="w-full md:w-[45%] md:block hidden max-md:p-4 max-w-[680px] h-full relative">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-[528px] rounded-lg"
              />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-[55%] p-4 md:p-6 flex flex-col justify-center gap-4">
              <h2 className="text-[36px] font-bold text-[#181818] font-[Cairo] capitalize">
                {service.title}
              </h2>
              <p className="text-[#181818] text-[16px] font-[500] font-[Urbanist] leading-[162.5%]">
                {service.description}
              </p>
                <div className="w-full md:w-[100%] block md:hidden  h-full relative">
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-[328px] rounded-lg"
              />
            </div>
              
              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {service.cards.map((card, i) => (
                  <div
                    key={i}
                    className="bg-white flex items-center min-w-[300px] rounded-lg border
                     border-gray-200 overflow-hidden gap-2"
                  >
                    <div className="w-full max-w-[104px] overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full max-h-[125px] max-w-[104px] object-cover grayscale"
                      />
                    </div>
                    <div className="pr-2">
                      <h4 className="font-[700] text-[#00] font-[Urbanist] text-[20px] leading-[110%] mb-2">
                        {card.title}
                      </h4>
                      <p className="text-[#00] text-[14px] font-[400] font-[Urbanist] leading-[142.857%]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4">
                <PrimaryCTA onClick={handleOnClick} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
