import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import testimonialsImage1 from "../../../assets/images/teen/teenTestimonials/teenrev (5).png";
import testimonialsImage2 from "../../../assets/images/teen/teenTestimonials/teenrev (4).png";
import testimonialsImage3 from "../../../assets/images/teen/teenTestimonials/teenrev (3).png";
import testimonialsImage4 from "../../../assets/images/teen/teenTestimonials/teenrev (2).png";
import testimonialsImage5 from "../../../assets/images/teen/teenTestimonials/teenrev (1).png";
import googleIcon from "../../../assets/images/home/testimonials/icons (2).webp";
import StarsIcon from "../../../assets/images/home/testimonials/icons (1).webp";
import verIcon from "../../../assets/images/home/testimonials/icons (3).webp";

// Testimonials data
const testimonials = [
{
     id: 1,
     name:"Braden Letendre",
     title: "Reasonable Prices",
     quote:
       "Very helpful and accommodating. The price was very good even with buying a product",
     avatar: testimonialsImage1,
   },
   {
     id: 2,
     name:"Jairus Shulman",
     title: "Highly Recommended ",
     quote:
       "If i could give 6 stars, I would. Ehsan’s attention to detail and skill with the scissors and razor are exceptional!",
     avatar: testimonialsImage2,
   },
   {
     id: 3,
     name:"Kristian R.",
     title: "Genuinely Care About Their Clients",
     quote:
       "These guys are hands down the best! I've been coming here for nearly 7 years, and there's a reason why. They genuinely care about their clients, treat everyone...",
     readmore: true,
     avatar: testimonialsImage3,
   },
   {
     id: 4,
     name:"Tanisha",
     title: "Super Chill ",
     quote:
       "Harvin gave my brother a really clean cut fade was on point! Super chill and know what he’s doing. Definitely recommend!",
     avatar: testimonialsImage4,
   },
   {
     id: 5,
     name:"Ethan DeCoursey",
     title: "Definitely Coming Back",
     quote:
       "Best haircut I've gotten ina long time. Will be definitely coming back <br/> <strong>Service:</strong> Long haircut",
 
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
            {testimonials.map((testimonial, i) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 md:basis-1/2 py-6 lg:basis-1/3"
              >
                <div className="flex flex-col gap-[40px] h-full justify-between rounded-[20px] bg-[#fff] px-[26px] py-[40px]"
                  style={{border: "1px solid rgba(222, 222, 222, 0.50)", boxShadow: "0 15px 30px 0 rgba(0, 0, 0, 0.08)"}}
                >
                  <div className="flex flex-col gap-[24px]">
                    {/* Title */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <img
                          src={testimonial.avatar}
                          className="w-[50px] h-[50px]"
                          alt=""
                        />
                        <h3 className="font-['Urbanist'] text-[20px] font-bold leading-[26px] text-black">
                          {testimonial.name}
                        </h3>
                      </div>
                      <img
                        className="h-[40px] w-[40px]"
                        src={googleIcon}
                        alt=""
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <img className="h-[22px]" src={StarsIcon} alt="" />
                      <img className="h-[22px]" src={verIcon} alt="" />
                    </div>

                    <div className="flex flex-col gap-[16px]">
                      <h3 className="font-['Urbanist'] text-[20px] font-bold leading-[26px] text-black">
                        {testimonial.title}
                      </h3>
                      <p
                        className="font-['Urbanist'] min-h-[20px] text-[16px] font-medium leading-[26px] text-black"
                        dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                      />
                      {testimonial.readmore === true ? (
                        <p className="text-[#808080] text-[16px] font-[600] leading-[26px]">
                          Read more
                        </p>
                      ) : null}
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
            <CarouselPrevious
              className="md:left-[91%] cursor-pointer left-[74%] md:h-[50px] 
              h-[40px] md:w-[50px] w-[40px] md:top-[-80px] top-[-50px] translate-x-0 translate-y-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
              >
                <path
                  d="M3.74634 9.40625L2.83439 10.3182L8.30739 15.7912L9.21934 14.8792L3.74634 9.40625Z"
                  fill="black"
                />
                <path
                  d="M2.83439 10.3167L3.74763 11.2287L9.21934 5.7557L8.30739 4.84375L2.83439 10.3167Z"
                  fill="black"
                />
                <path
                  d="M18.2428 10.9618V9.67188H4.05401V10.9618H18.2428Z"
                  fill="black"
                />
              </svg>
            </CarouselPrevious>
            <CarouselNext
              className="right-0 cursor-pointer md:top-[-80px] top-[-50px] md:h-[50px] 
              h-[40px] md:w-[50px] w-[40px] translate-x-0 translate-y-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="21"
                viewBox="0 0 24 21"
                fill="none"
              >
                <path
                  d="M19.8402 9.40625L20.7521 10.3182L15.2791 15.7912L14.3672 14.8792L19.8402 9.40625Z"
                  fill="black"
                />
                <path
                  d="M20.7521 10.3167L19.8389 11.2287L14.3672 5.7557L15.2791 4.84375L20.7521 10.3167Z"
                  fill="black"
                />
                <path
                  d="M5.34375 10.9618V9.67188H19.5325V10.9618H5.34375Z"
                  fill="black"
                />
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
