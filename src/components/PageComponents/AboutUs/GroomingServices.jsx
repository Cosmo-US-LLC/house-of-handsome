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
    content: (
      <>
        <p className="mb-6 font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#181818]">
          At{" "}
          <span className="font-['Urbanist'] font-bold">House of Handsome</span>
          , we specialize in delivering premium grooming services tailored to
          the modern man.{" "}
        </p>
        <p className="mb-8 font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#181818]">
          Whether you're after a classic cut, a fresh fade, or a clean shave,
          our expert barbers ensure every service is executed with precision and
          care. Enjoy a relaxed, stylish environment where you can unwind and
          leave looking sharp.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Teens",
    image: teensImage,
    content: (
      <>
        <p className="mb-6 font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#181818]">
          Youthful style meets expert craftsmanship at{" "}
          <span className="font-['Urbanist'] font-bold">House of Handsome</span>
          . Our barbers are skilled in creating the latest trends and timeless
          looks for teens, ensuring they leave with a fresh, confident style.{" "}
        </p>
        <p className="mb-8 font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#181818]">
          From edgy cuts to sleek fades, we provide a comfortable space for
          teens to express their personal style.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Kids",
    image: kidsImage,
    content: (
      <>
        <p className="mb-6 font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#181818]">
          At{" "}
          <span className="font-['Urbanist'] font-bold">House of Handsome</span>
          , we make sure your little one enjoys their grooming experience. Our
          friendly barbers create fun, comfortable, and stylish cuts for kids of
          all ages.{" "}
        </p>
        <p className="mb-8 font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#181818]">
          With patience and care, we'll ensure your child leaves looking sharp
          and feeling great.
        </p>
      </>
    ),
  },
];

export default function GroomingServices() {
  return (
    <section className="pt-20 pb-10 bg-white">
      <div className="mx-auto max-w-[1280px] md:px-10 px-4">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col md:flex-row items-center md:gap-[83px] gap-6 md:mb-20 mb-14 last:mb-0 ${
              index % 2 === 1 ? "md:flex-row" : "md:flex-row"
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-[603px] md:h-[430px] rounded-lg overflow-hidden shrink-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full"
              />
            </div>

            {/* Text Block */}
            <div className="flex flex-col w-full md:w-[600px] pt-0">
              <h3 className="mb-6 font-['Cairo'] text-[48px] font-bold leading-[55px] capitalize text-[#181818]">
                {service.title}
              </h3>

              {service.content}

              <PrimaryCTA className=" max-w-[200px]">
                Book An Appointments
              </PrimaryCTA>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
