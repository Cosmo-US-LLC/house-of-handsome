import React from "react";
import adultsImage from "../../../assets/images/about/groomingServices/grooming_services_c1.webp";
import teensImage from "../../../assets/images/about/groomingServices/grooming_services_c2.webp";
import kidsImage from "../../../assets/images/about/groomingServices/grooming_services_c3.webp";
import PrimaryCTA from "../../../components/ui/PrimaryCTA";

const services = [
  {
    id: 1,
    title: "Adults",
    image: adultsImage,
    paragraphs: [
      "At House of Handsome, we specialize in delivering premium grooming services tailored to the modern man.",
      "Whether you’re after a classic cut, a fresh fade, or a clean shave, our expert barbers ensure every service is executed with precision and care.",
      "Enjoy a relaxed, stylish environment where you can unwind and leave looking sharp.",
    ],
    buttonText: "Book An Appointment",
  },
  {
    id: 2,
    title: "Teens",
    image: teensImage,
    paragraphs: [
      "Youthful style meets expert craftsmanship at House of Handsome. Our barbers are skilled in creating the latest trends and timeless looks for teens, ensuring they leave with a fresh, confident style.",
      "From edgy cuts to sleek fades, we provide a comfortable space for teens to express their personal style.",
    ],
    buttonText: "Book An Appointment",
  },
  {
    id: 3,
    title: "Kids",
    image: kidsImage,
    paragraphs: [
      "At House of Handsome, we make sure your little one enjoys their grooming experience. Our friendly barbers create fun, comfortable, and stylish cuts for kids of all ages.",
      "With patience and care, we’ll ensure your child leaves looking sharp and feeling great.",
    ],
    buttonText: "Book An Appointment",
  },
];

export default function GroomingServices() {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col ${
              index % 2 === 1 ? "md:flex-row" : "md:flex-row"
            } items-center gap-8 md:gap-12  pb-12 mb-12 last:mb-0`}
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-auto rounded-md md:w-1/2"
            />

            {/* Text Block */}
            <div className="text-left md:w-1/2">
              <h3 className="mb-4 font-['Cairo'] text-[48px] font-bold leading-[55px] text-[#181818]">
                {service.title}
              </h3>

              {service.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="mb-4 font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#181818] last:mb-6"
                >
                  {para}
                </p>
              ))}

              <PrimaryCTA className="mt-4">{service.buttonText}</PrimaryCTA>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
