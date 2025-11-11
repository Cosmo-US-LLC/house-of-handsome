import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import testimonialsImage1 from "../../../assets/images/testimonials/testimonials_p1.webp";
import testimonialsImage2 from "../../../assets/images/testimonials/testimonials_p1.webp";
import testimonialsImage3 from "../../../assets/images/testimonials/testimonials_p1.webp";
import testimonialsImage4 from "../../../assets/images/testimonials/testimonials_p1.webp";
import testimonialsImage5 from "../../../assets/images/testimonials/testimonials_p1.webp";
import testimonialsImage6 from "../../../assets/images/testimonials/testimonials_p1.webp";

// Testimonials data
const testimonials = [
  {
    id: 1,
    title: "A Style That Matches My Personality",
    quote: "The cut that boosted my confidence.",
    reviewer: "Alex T.",
    role: "Entrepreneur",
    stars: 5,
    avatar: testimonialsImage1,
  },
  {
    id: 2,
    title: "The Barber Who Truly Listened",
    quote: "The cut that boosted my confidence.",
    reviewer: "David M.",
    role: "Entrepreneur",
    stars: 5,
    avatar: testimonialsImage2,
  },
  {
    id: 3,
    title: "The Cut That Boosted My Confidence",
    quote: "The cut that boosted my confidence.",
    reviewer: "Jordan R.",
    role: "Entrepreneur",
    stars: 5,
    avatar: testimonialsImage3,
  },
  {
    id: 4,
    title: "Professional Service Every Time",
    quote: "Always leaving satisfied with my fresh look.",
    reviewer: "Michael K.",
    role: "Business Owner",
    stars: 5,
    avatar: testimonialsImage4,
  },
  {
    id: 5,
    title: "Excellence in Every Detail",
    quote: "The attention to detail is unmatched.",
    reviewer: "Ryan S.",
    role: "Creative Director",
    stars: 5,
    avatar: testimonialsImage5,
  },
  {
    id: 6,
    title: "My Go-To Grooming Spot",
    quote: "Consistent quality, every single visit.",
    reviewer: "Chris B.",
    role: "Marketing Manager",
    stars: 5,
    avatar: testimonialsImage6,
  },
];

function Testimonials() {
  return (
    <section className="py-20 w-full bg-white">
      {/* Max Container Wrapper - 1280px */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Header with Title */}
        <div className="mb-12">
          <h2 className="font-['Cairo'] text-3xl font-bold text-[#181818] md:text-4xl lg:text-[48px] lg:leading-[55px]">
            Our Testimonials
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="flex flex-col gap-[80px] rounded-[8px] bg-[#f7f7f7] px-[26px] py-[48px]">
                  {/* Top Content */}
                  <div className="flex flex-col gap-[24px]">
                    {/* Title */}
                    <h3 className="font-['Urbanist'] text-[20px] font-bold leading-[26px] text-black">
                      {testimonial.title}
                    </h3>

                    {/* Review with Stars */}
                    <div className="flex flex-col gap-[16px]">
                      {/* Star Rating */}
                      <div className="flex items-center">
                        {[...Array(testimonial.stars)].map((_, index) => (
                          <svg
                            key={index}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                          >
                            <path
                              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                              fill="#D82028"
                            />
                          </svg>
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="font-['Urbanist'] text-[16px] font-medium leading-[26px] text-black">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>

                  {/* Reviewer Info */}
                  <div className="flex items-center gap-[16px]">
                    {/* Avatar */}
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.reviewer}
                      className="h-[48px] w-[48px] rounded-full object-cover"
                    />

                    {/* Name and Role */}
                    <div className="flex flex-col">
                      <p className="font-['Urbanist'] text-[20px] font-bold leading-[28px] text-black">
                        {testimonial.reviewer}
                      </p>
                      <p className="font-['Urbanist'] text-[16px] font-normal leading-[22px] text-black">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="md:left-[91%] left-[74%] md:h-[50px] h-[40px] md:w-[50px] w-[40px] md:top-[-80px] top-[-50px] translate-x-0 translate-y-0" />
          <CarouselNext className="right-0 md:top-[-80px] top-[-50px] md:h-[50px] h-[40px] md:w-[50px] w-[40px] translate-x-0 translate-y-0" />
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
