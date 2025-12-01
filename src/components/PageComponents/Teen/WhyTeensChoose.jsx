import React from "react";
import whyTeensImage1 from "../../../assets/images/teen/whyTeensChoose/teen_choose_us_img1.webp";
import whyTeensImage2 from "../../../assets/images/teen/whyTeensChoose/teen_choose_us_img2.webp";
import whyTeensImage3 from "../../../assets/images/teen/whyTeensChoose/teen_choose_us_img3.webp";
import whyTeensImage4 from "../../../assets/images/teen/whyTeensChoose/teen_choose_us_img4.webp";

const reasons = [
  {
    id: 1,
    title: "Barbers who know the latest trends",
    image: whyTeensImage1,
  },
  {
    id: 2,
    title: "Comfortable, teen-friendly atmosphere",
    image: whyTeensImage2,
  },
  {
    id: 3,
    title: "Personalized style guidance",
    image: whyTeensImage3,
  },
  {
    id: 4,
    title: "Looks that reflect personality and confidence",
    image: whyTeensImage4,
  },
];

function WhyTeensChoose() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Section Heading */}
        <h2 className="font-['Cairo'] font-bold text-[#181818] md:text-[48px] text-[36px] leading-[55px] capitalize mb-12">
          Why Teens Choose Us
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="relative h-[284px] rounded-lg overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={reason.image}
                alt={reason.title}
                className="object-cover absolute inset-0 w-full h-full"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[70%] to-[rgba(0,0,0,0.35)] to-[85%]" />

              {/* Text Content */}
              <div className="absolute right-4 bottom-4 left-4">
                <h3 className="font-['Urbanist'] font-bold text-[20px] leading-[28px] text-white">
                  {reason.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyTeensChoose;
