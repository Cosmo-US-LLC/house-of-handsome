import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import testimonialsImage1 from "../../../assets/images/home/testimonials/home_review (5).webp";
import testimonialsImage2 from "../../../assets/images/home/testimonials/home_review (4).webp";
import testimonialsImage3 from "../../../assets/images/home/testimonials/home_review (3).webp";
import testimonialsImage4 from "../../../assets/images/home/testimonials/home_review (2).webp";
import testimonialsImage5 from "../../../assets/images/home/testimonials/home_review (1).webp";
import googleIcon from "../../../assets/images/home/testimonials/icons (2).webp";
import StarsIcon from "../../../assets/images/home/testimonials/icons (1).webp";
import verIcon from "../../../assets/images/home/testimonials/icons (3).webp";

const testimonials = [
  {
    id: 1,
    name:"Garth Potter",
    title: "Great attention to detail",
    quote:
      "Great attention to detail, was attentive to request and engaged throughout the experience. Will definitely be back again ",
    avatar: testimonialsImage1,
  },
  {
    id: 2,
    name:"Joseph Wagner",
    title: "An amazing job",
    quote:
      "Ehsan did an amazing job at House of Handsome. Really appreciate his skills and this barbar shop. Recommend this place!",
    avatar: testimonialsImage2,
  },
  {
    id: 3,
    name:"Boris Chavez",
    title: "The staff is friendly",
    quote:
      "Just moved to Edmonton and found my new go-to barber shop! The staff is friendly, the atmosphere is welcoming, and the attention to detail is top-notch...",
    avatar: testimonialsImage3,
    readmore: true,
  },
  {
    id: 4,
    name:"Hiram D.",
    title: "Recommend 10 out of 10",
    quote:
      "i had a amazing experience here, great enviroment, great people, would recommend 10/10. great price great service. i’ll definitely becoming back here...",
    avatar: testimonialsImage4,
    readmore: true,
  },
  {
    id: 5,
    name:"Mahyar Gholizadeh",
    title: "Definitely recommend! ",
    quote:
      "Super professional and talented! Always happy with the results and the friendly vibe. Definitely recommend! ✂️",

    avatar: testimonialsImage5,
  },
];

function Testimonials() {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  const itemCount = testimonials.length;
  const showDesktopArrows = itemCount > 3;

  // Calculate number of dots based on screen size
  // Desktop: 3 cards per page, so dots = total - 2 (or total - cardsPerPage + 1)
  // Mobile: 1 card per page, so dots = total
  const cardsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.max(1, itemCount - cardsPerPage + 1);
  const dotsToShow = isMobile ? itemCount : totalPages;

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <section className="py-8 w-full bg-white md:py-[45px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="mb-12">
          <h2 className="font-['Cairo'] text-[36px] font-bold text-[#181818] md:text-[48px] lg:leading-[55px]">
            Testimonials
          </h2>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: false,
            slidesToScroll: 1,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-4 md:basis-1/3 lg:basis-1/3"
              >
                <div className="flex flex-col justify-between gap-[20px] min-h-[390px] rounded-[8px] bg-[#f7f7f7] px-[26px] pt-[48px]">
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
            {Array.from({ length: dotsToShow }).map((_, index) => {
              // On desktop, each dot represents a page (3 cards per page)
              // On mobile, each dot represents a single card
              const slideIndex = index;
              const isActive = current === slideIndex;

              return (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(slideIndex)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    isActive ? "bg-[#d82028] w-4" : "bg-[#d1d1d1]"
                  }`}
                  aria-label={`Go to ${isMobile ? "testimonial" : "page"} ${
                    index + 1
                  }`}
                />
              );
            })}
          </div>
          <CarouselPrevious className="md:left-[91%] left-[74%] cursor-pointer md:h-[50px] h-[40px] md:w-[50px] w-[40px] md:top-[-80px] top-[-50px] translate-x-0 translate-y-0">
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

          <CarouselNext className="right-0 md:top-[-80px] top-[-50px] cursor-pointer md:h-[50px] h-[40px] md:w-[50px] w-[40px] translate-x-0 translate-y-0">
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
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
