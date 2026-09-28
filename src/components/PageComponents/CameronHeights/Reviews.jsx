import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { REVIEWS } from "./data";

function Reviews() {
  const autoplay = useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  const [api, setApi] = useState();
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const update = () => {
      setCount(api.scrollSnapList().length);
      setSelected(api.selectedScrollSnap());
    };

    update();
    api.on("select", update).on("reInit", update);
    return () => {
      api.off("select", update).off("reInit", update);
    };
  }, [api]);

  if (REVIEWS.length === 0) return null;

  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <section className="w-full bg-[#0e0b0a] py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="mb-2 h-[3px] w-9 bg-[#d82028]" aria-hidden="true" />
            <h2 className="font-['Cairo'] text-[32px] font-bold text-white md:text-[40px]">What Clients Say</h2>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              aria-label="Previous review"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-[#d82028] hover:text-[#d82028]"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              aria-label="Next review"
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-[#d82028] hover:text-[#d82028]"
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true }}
          plugins={prefersReducedMotion ? [] : [autoplay.current]}
          className="mt-8 w-full"
        >
          <CarouselContent className="-ml-5">
            {REVIEWS.map((review) => (
              <CarouselItem key={review.text} className="pl-5 md:basis-1/2 lg:basis-1/3">
                <div className="flex h-full flex-col rounded-[6px] border border-white/10 bg-[#221c19] p-6">
                  <div className="mb-2.5 flex items-center gap-0.5 text-[#d82028]" aria-label="Rated 5 out of 5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4" fill="#d82028" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="font-['Urbanist'] text-[14.5px] leading-[1.6] text-white/70">{review.text}</p>
                  <span className="mt-auto block pt-3 font-['Urbanist'] text-[12px] text-white/45">
                    {review.author} · Google review
                  </span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => api?.scrollTo(i)}
              aria-label={`Go to review ${i + 1}`}
              aria-current={selected === i}
              className={`h-2 cursor-pointer rounded-full transition-all ${selected === i ? "w-4 bg-[#d82028]" : "w-2 bg-white/25"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
