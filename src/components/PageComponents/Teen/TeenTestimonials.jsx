import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import testimonialsImage1 from "../../../assets/images/teen/teenTestimonials/teen_img1.webp";
import testimonialsImage2 from "../../../assets/images/teen/teenTestimonials/teen_img2.webp";
import testimonialsImage3 from "../../../assets/images/teen/teenTestimonials/teen_img3.webp";
import testimonialsImage4 from "../../../assets/images/teen/teenTestimonials/teen_img4.webp";
import testimonialsImage5 from "../../../assets/images/teen/teenTestimonials/teen_img5.webp";

// Testimonials data
const testimonials = [
  {
    id: 1,
    title:
      "Reasonable Prices",
    quote: "Very helpful and accommodating. The price was very good even with buying a product.",
    reviewer: "Braden Letendre",
    role: "Student",
    stars: 5,
    avatar: testimonialsImage1,
  },
  {
    id: 2,
    title:
      "Highly Recommended",
    quote: "If i could give 6 stars, I would. Ehsan’s attention to detail and skill with the scissors and razor are exceptional!",
    reviewer: "Jairus Shulman",
    role: "Student",
    stars: 5,
    avatar: testimonialsImage2,
  },
  {
    id: 3,
    title:
      "Genuinely Care About Their Clients",
    quote: "These guys are hands down the best! I've been coming here for nearly 7 years, and there's a reason why. They genuinely care about their clients, treat everyone with respect, and always look sharp. The quality is always on point, whether it's clean fades, beard trimming and upkeep, or details like ears, nose, and eyebrows. They do it all. Any negative reviews out there don't reflect the truth; from my experience, this is just competitors trying to tarnish a great business.",
    reviewer: "Kristian R.",
    role: "Student",
    stars: 5,
    avatar: testimonialsImage3,
  },
  {
    id: 4,
    title:
      "Definitely Coming Back",
    quote: "Best haircut I've gotten ina long time. Will be definitely coming back.",
    reviewer: "Ethan DeCoursey",
    role: "Student",
    stars: 5,
    avatar: testimonialsImage4,
  },
  {
    id: 5,
    title:
      "Super Chill",
    quote: "Harvin gave my brother a really clean cut fade was on point! Super chill and know what he’s doing. Definitely recommend!",
    reviewer: "Tanisha",
    role: "Student",
    stars: 5,
    avatar: testimonialsImage5,
  },
];

function TeenTestimonials() {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [snapPoints, setSnapPoints] = React.useState([]);

  React.useEffect(() => {
    if (!api) return;

    setSnapPoints(api.scrollSnapList());
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-4 w-full bg-white md:py-12">
      {/* Max Container Wrapper - 1280px */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Header with Title */}
        <div className="mb-12">
          <h2 className="font-['Cairo'] text-[36px] font-bold text-[#181818] md:text-[48px] lg:leading-[55px]">
            Testimonials
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
            {testimonials.map((testimonial , i) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="flex flex-col gap-[40px] h-full justify-between rounded-[8px] bg-[#f7f7f7] px-[26px] py-[40px]">
                  {/* Top Content */}
                  <div className="flex flex-col gap-[24px] flex-1">
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
                        {testimonial.quote}
                      </p>
                      {i == 3 ? <p className="font-['Urbanist'] text-[16px] font-medium leading-[26px] text-black"><b>Service:</b> Long haircut</p> : ""}
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
            {/* {snapPoints.length > 1 && ( */}
              <div className="flex gap-2 justify-center mt-6">
                {snapPoints.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                      current === index ? "bg-[#d82028] w-4" : "bg-[#d1d1d1]"
                    }`}
                  />
                ))}
              </div>
            {/* )} */}
          </div>
          {/* {snapPoints.length > 1 && ( */}
            <>
            <CarouselPrevious className="md:left-[91%] cursor-pointer left-[74%] md:h-[50px] 
              h-[40px] md:w-[50px] w-[40px] md:top-[-80px] top-[-50px] translate-x-0 translate-y-0" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
              <path d="M3.74634 9.40625L2.83439 10.3182L8.30739 15.7912L9.21934 14.8792L3.74634 9.40625Z" fill="black"/>
              <path d="M2.83439 10.3167L3.74763 11.2287L9.21934 5.7557L8.30739 4.84375L2.83439 10.3167Z" fill="black"/>
              <path d="M18.2428 10.9618V9.67188H4.05401V10.9618H18.2428Z" fill="black"/>
            </svg>
            </CarouselPrevious>
            <CarouselNext className="right-0 cursor-pointer md:top-[-80px] top-[-50px] md:h-[50px] 
              h-[40px] md:w-[50px] w-[40px] translate-x-0 translate-y-0" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
  <path d="M19.8402 9.40625L20.7521 10.3182L15.2791 15.7912L14.3672 14.8792L19.8402 9.40625Z" fill="black"/>
  <path d="M20.7521 10.3167L19.8389 11.2287L14.3672 5.7557L15.2791 4.84375L20.7521 10.3167Z" fill="black"/>
  <path d="M5.34375 10.9618V9.67188H19.5325V10.9618H5.34375Z" fill="black"/>
</svg>
            </CarouselNext>
            </>
          {/* )} */}
        </Carousel>
      </div>
    </section>
  );
}

export default TeenTestimonials;
