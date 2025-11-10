import React from "react";
import { Plus } from "lucide-react";
import servicesImage1 from "../../../assets/images/services/services_c1.webp";
import servicesImage2 from "../../../assets/images/services/services_c2.webp";
import servicesImage3 from "../../../assets/images/services/services_c3.webp";

// Services data
const servicesData = [
  {
    id: 1,
    title: "Cuts",
    description: "Masterful cuts tailored to your style and personality.",
    image: servicesImage1,
  },
  {
    id: 2,
    title: "Style",
    description: "Elevating your beard to perfection with precision and care.",
    image: servicesImage2,
  },
  {
    id: 3,
    title: "Care",
    description: "A holistic approach to rejuvenation for the modern man.",
    image: servicesImage3,
  },
];

function Services() {
  return (
    <section className="py-16 w-full bg-white md:py-24">
      {/* Max Container Wrapper - 1280px */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="font-['Cairo'] text-4xl font-bold leading-tight text-[#181818] md:text-[48px] md:leading-[55px]">
            Our Services
          </h2>
          <p className="font-['Urbanist'] text-base font-medium leading-[26px] text-[#181818] md:max-w-[944px]">
            At House of Handsome, we specialize in offering more than just a
            haircut. Our services are crafted to elevate your look and
            confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {servicesData.map((service) => (
            <div key={service.id} className="flex flex-col gap-[26px]">
              {/* Title with Description */}
              <div className="flex flex-col gap-[7px]">
                <h3 className="font-['Cairo'] text-[38px] font-medium leading-[41.36px] tracking-[-0.752px] text-[#d82028]">
                  {service.title}
                </h3>
                <p className="font-['Urbanist'] h-[40px] text-base font-normal leading-[24px] text-black">
                  {service.description}
                </p>
              </div>

              {/* Image Card with Button */}
              <div className="group relative h-[360px] w-full overflow-hidden rounded-[8px] md:h-[495px]">
                {/* Image with zoom and position shift on hover */}
                <div className="absolute left-[-80px] top-0 h-[517px] w-[775px] overflow-hidden transition-all duration-300 group-hover:left-[-125px] group-hover:top-[-30px] group-hover:h-[577px] group-hover:w-[866px]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover object-center w-full h-full grayscale"
                  />
                </div>

                {/* Circular Button - Bottom Right */}
                <button
                  className="absolute bottom-[29.52px] right-[39.96px] flex h-[49.48px] w-[49.48px] items-center justify-center overflow-hidden rounded-full bg-white transition-transform duration-200 hover:scale-110"
                  aria-label={`View ${service.title} details`}
                >
                  {/* Plus Icon */}
                  <Plus className="w-6 h-6 text-black" strokeWidth={2} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
