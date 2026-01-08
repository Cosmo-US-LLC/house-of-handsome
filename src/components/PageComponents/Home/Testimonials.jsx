import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import testimonialsImage1 from "../../../assets/images/home/testimonials/user (1).png";
import testimonialsImage2 from "../../../assets/images/home/testimonials/user (2).png";
import testimonialsImage3 from "../../../assets/images/home/testimonials/user (3).png";
import testimonialsImage4 from "../../../assets/images/home/testimonials/user (4).png";
import testimonialsImage5 from "../../../assets/images/home/testimonials/user (5).png";
import testimonialsImage6 from "../../../assets/images/home/testimonials/user (6).png";
import testimonialsImage7 from "../../../assets/images/home/testimonials/user (7).png";

const testimonials = [
  {
    id: 1,
    title: "Professional, clean, and consistent every visit.",
    quote: "My husband and i are regular customer at this barbershop and we’re always satisfied with the excellent service.",
    reviewer: "Mona Khoshraftar Yazdi",
    role: "Client",
    stars: 5,
    avatar: testimonialsImage1,
  },
  {
    id: 2,
    title: "Exactly the style I wanted",
    quote: "They’ve always  done an amazing job with my brothers hair & have shown a lot of patience and respect when it comes to him as well. 10/10 service! 100% recommend!",
    reviewer: "Aleesha Chaudry",
    role: "Client",
    stars: 5,
    avatar: testimonialsImage2,
  },
  {
    id: 3,
    title: "Highly Recommended ",
    quote: "If i could give 6 stars, I would. Ehsan’s attention to detail and skill with the scissors and razor are exceptional!",
    reviewer: "Jairus Shulman",
    role: "Student",
    stars: 5,
    avatar: testimonialsImage3,
  },
  {
    id: 4,
    title: "Definitely Coming Back",
    quote: "Best haircut I've gotten ina long time. Will be definitely coming back. <br/><strong>Service:</strong> Long haircut",
    reviewer: "Ethan DeCoursey",
    role: "Student",
    stars: 5,
    avatar: testimonialsImage4,
  },
    {
    id: 5,
    title: "Super Chill ",
    quote: "Harvin gave my brother a really clean cut fade was on point! Super chill and know what he’s doing. Definitely recommend!",
    reviewer: "Tanisha",
    role: "Student",
    stars: 5,
    avatar: testimonialsImage5,
  },
  {
    id: 6,
    title: "Happy with the Haircut",
    quote: "Excellent haircut, My son and i are happy with the haircut by Zaza as always. ",
    reviewer: "Tatiana B",
    role: "Parent",
    stars: 5,
    avatar: testimonialsImage6,
  },
   {
    id: 7,
    title: "Incredible Experience",
    quote: "Always an amazing experience. The staff are very friendly and professional. Definitely my favorite place to go.<br/>Once again, thank you guys for the incredible service. ",
    reviewer: "Kerry Crocker",
    role: "Parent",
    stars: 5,
    avatar: testimonialsImage7,
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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
            Our Testimonials
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
                <div className="flex flex-col justify-between gap-[20px] min-h-[400px] rounded-[8px] bg-[#f7f7f7] px-[26px] py-[48px]">
                  <div className="flex flex-col gap-[24px]">
                    {/* Title */}
                    <h3 className="font-['Urbanist'] text-[20px] font-bold leading-[26px] text-black">
                      {testimonial.title}
                    </h3>

                    <div className="flex flex-col gap-[16px]">
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

                      <p 
                        className="font-['Urbanist'] min-h-[20px] text-[16px] font-medium leading-[26px] text-black"
                        dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                      />
                      
                    </div>
                  </div>

                  <div className="flex items-center gap-[16px]">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.reviewer}
                      className="h-[48px] w-[48px] rounded-full object-cover"
                    />

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
                  aria-label={`Go to ${isMobile ? 'testimonial' : 'page'} ${index + 1}`}
                />
              );
            })}
          </div>
          <CarouselPrevious
            className="md:left-[91%] left-[74%] cursor-pointer md:h-[50px] h-[40px] md:w-[50px] w-[40px] md:top-[-80px] top-[-50px] translate-x-0 translate-y-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
              <path d="M3.74634 9.40625L2.83439 10.3182L8.30739 15.7912L9.21934 14.8792L3.74634 9.40625Z" fill="black"/>
              <path d="M2.83439 10.3167L3.74763 11.2287L9.21934 5.7557L8.30739 4.84375L2.83439 10.3167Z" fill="black"/>
              <path d="M18.2428 10.9618V9.67188H4.05401V10.9618H18.2428Z" fill="black"/>
            </svg>
          </CarouselPrevious>

          <CarouselNext
            className="right-0 md:top-[-80px] top-[-50px] cursor-pointer md:h-[50px] h-[40px] md:w-[50px] w-[40px] translate-x-0 translate-y-0"
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
  <path d="M19.8402 9.40625L20.7521 10.3182L15.2791 15.7912L14.3672 14.8792L19.8402 9.40625Z" fill="black"/>
  <path d="M20.7521 10.3167L19.8389 11.2287L14.3672 5.7557L15.2791 4.84375L20.7521 10.3167Z" fill="black"/>
  <path d="M5.34375 10.9618V9.67188H19.5325V10.9618H5.34375Z" fill="black"/>
</svg>
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
