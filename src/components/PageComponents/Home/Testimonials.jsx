import React, { useState } from "react";

// Testimonials data
const testimonials = [
  {
    id: 1,
    title: "A Style That Matches My Personality",
    quote: "The cut that boosted my confidence.",
    reviewer: "Alex T.",
    role: "Entrepreneur",
    stars: 5,
    avatar:
      "https://www.figma.com/api/mcp/asset/166bf443-852f-4c2b-8d04-6440d85b98c3",
  },
  {
    id: 2,
    title: "The Barber Who Truly Listened",
    quote: "The cut that boosted my confidence.",
    reviewer: "David M.",
    role: "Entrepreneur",
    stars: 5,
    avatar:
      "https://www.figma.com/api/mcp/asset/166bf443-852f-4c2b-8d04-6440d85b98c3",
  },
  {
    id: 3,
    title: "The Cut That Boosted My Confidence",
    quote: "The cut that boosted my confidence.",
    reviewer: "Jordan R.",
    role: "Entrepreneur",
    stars: 5,
    avatar:
      "https://www.figma.com/api/mcp/asset/166bf443-852f-4c2b-8d04-6440d85b98c3",
  },
  {
    id: 4,
    title: "Professional Service Every Time",
    quote: "Always leaving satisfied with my fresh look.",
    reviewer: "Michael K.",
    role: "Business Owner",
    stars: 5,
    avatar:
      "https://www.figma.com/api/mcp/asset/166bf443-852f-4c2b-8d04-6440d85b98c3",
  },
  {
    id: 5,
    title: "Excellence in Every Detail",
    quote: "The attention to detail is unmatched.",
    reviewer: "Ryan S.",
    role: "Creative Director",
    stars: 5,
    avatar:
      "https://www.figma.com/api/mcp/asset/166bf443-852f-4c2b-8d04-6440d85b98c3",
  },
  {
    id: 6,
    title: "My Go-To Grooming Spot",
    quote: "Consistent quality, every single visit.",
    reviewer: "Chris B.",
    role: "Marketing Manager",
    stars: 5,
    avatar:
      "https://www.figma.com/api/mcp/asset/166bf443-852f-4c2b-8d04-6440d85b98c3",
  },
];

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cardsPerView = 3; // Desktop: 3, can be adjusted for responsive
  const totalSlides = Math.ceil(testimonials.length / cardsPerView);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const startIndex = currentSlide * cardsPerView;
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + cardsPerView
  );

  return (
    <section className="py-20 w-full bg-white">
      {/* Max Container Wrapper - 1280px */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Header with Title and Arrow Buttons */}
        <div className="flex justify-between items-center mb-12">
          {/* Title */}
          <h2 className="font-['Cairo'] text-3xl font-bold text-[#181818] md:text-4xl lg:text-[48px] lg:leading-[55px]">
            Our Testimonials
          </h2>

          {/* Arrow Navigation Buttons */}
          <div className="flex gap-3 items-center">
            {/* Left Arrow Button */}
            <button
              onClick={handlePrev}
              className="flex justify-center items-center w-12 h-12 rounded-full border border-black transition-all duration-200 hover:bg-neutral-50"
              aria-label="Previous testimonials"
            >
              <svg
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-5"
              >
                <path
                  d="M23 10.5H1M1 10.5L11 20.5M1 10.5L11 0.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={handleNext}
              className="flex justify-center items-center w-12 h-12 rounded-full border border-black transition-all duration-200 hover:bg-neutral-50"
              aria-label="Next testimonials"
            >
              <svg
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-5"
              >
                <path
                  d="M1 10.5H23M23 10.5L13 0.5M23 10.5L13 20.5"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 gap-4 mb-12 md:grid-cols-2 lg:grid-cols-3">
          {visibleTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col gap-[80px] rounded-[8px] bg-[#f7f7f7] px-[26px] py-[48px]"
            >
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
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2 justify-center items-center">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? "bg-[#d82028]" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
