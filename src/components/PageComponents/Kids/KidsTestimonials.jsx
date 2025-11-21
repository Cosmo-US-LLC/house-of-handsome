import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import testimonialsImage1 from "../../../assets/images/testimonials/testimonials_p1.webp";

// Testimonials data
const testimonials = [
  {
    id: 1,
    title: "My child gets nervous with haircuts, but he barbers were so patient. He left happy!",
    quote: "He actually looks forward to his next haircut.",
    reviewer: "Samual K.",
    role: "Parent",
    stars: 5,
    avatar: testimonialsImage1,
  },
  {
    id: 2,
    title: "They made my son feel comfortable right away. Quick service but high-quality behind",
    quote: "Quick and professional every time.",
    reviewer: "Mike. T",
    role: "Parent",
    stars: 5,
    avatar: testimonialsImage1,
  },
  {
    id: 3,
    title: "The barbers were amazing with my daughter. Very friendly and to patient",
    quote: "She loved the experience!",
    reviewer: "Glenn F",
    role: "Parent",
    stars: 5,
    avatar: testimonialsImage1,
  },
  {
    id: 4,
    title: "Professional Service Every Time",
    quote: "Always leaving satisfied with my fresh look.",
    reviewer: "Michael K.",
    role: "Parent",
    stars: 5,
    avatar: testimonialsImage1,
  },
  {
    id: 5,
    title: "Excellence in Every Detail",
    quote: "The attention to detail is unmatched.",
    reviewer: "Ryan S.",
    role: "Parent",
    stars: 5,
    avatar: testimonialsImage1,
  },
  {
    id: 6,
    title: "My Go-To Grooming Spot",
    quote: "Consistent quality, every single visit.",
    reviewer: "Chris B.",
    role: "Parent",
    stars: 5,
    avatar: testimonialsImage1,
  },
];

function KidsTestimonials() {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-20 w-full bg-white">
      {/* Max Container Wrapper - 1280px */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Header with Title */}
        <div className="mb-12">
          <h2 className="font-['Cairo'] text-3xl font-bold text-[#181818] md:text-4xl lg:text-[48px] lg:leading-[55px]">
            Kids Testimonials
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          setApi={setApi}
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
          <div className="flex gap-2 justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                  current === index ? "bg-[#d82028] w-4" : "bg-[#d1d1d1]"
                }`}
              />
            ))}
          </div>
          <CarouselPrevious className="md:left-[91%] left-[74%] md:h-[50px] h-[40px] md:w-[50px] w-[40px] md:top-[-80px] top-[-50px] translate-x-0 translate-y-0" />
          <CarouselNext className="right-0 md:top-[-80px] top-[-50px] md:h-[50px] h-[40px] md:w-[50px] w-[40px] translate-x-0 translate-y-0" />
        </Carousel>
      </div>
    </section>
  );
}

export default KidsTestimonials;

