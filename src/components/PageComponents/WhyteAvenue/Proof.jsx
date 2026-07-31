import { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Eyebrow from "./Eyebrow";
import { TRANSFORMATIONS, TESTIMONIALS } from "./data";

const getInitials = (name) =>
  name
    .split(" ")
    .map((word) => word.replace(".", "")[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function TransformationCard({ item }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-200/60">
      <div className="relative h-[340px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>
      <div className="p-5">
        <h4 className="font-['Cairo'] font-semibold text-[16px] mb-1 text-[#181818]">{item.title}</h4>
        <p className="font-['Urbanist'] text-[14px] text-neutral-600">{item.body}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <div className="group relative flex flex-col h-full rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-200/60 hover:border-[#d82028]/20">
      <Quote
        className="absolute top-5 right-5 w-9 h-9 text-[#d82028]/10 transition-colors duration-300 group-hover:text-[#d82028]/20"
        fill="currentColor"
        strokeWidth={0}
        aria-hidden="true"
      />

      <div className="relative z-10 flex items-center gap-1 mb-4 text-[#d82028]" aria-label="Rated 5 out of 5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4" fill="#d82028" strokeWidth={0} />
        ))}
      </div>

      <p className="relative z-10 font-['Urbanist'] text-[14px] leading-[23px] text-neutral-700 flex-grow">
        {testimonial.quote}
      </p>

      <div className="relative z-10 flex items-center gap-3 mt-6 pt-5 border-t border-neutral-100">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#d82028] to-[#b91219] font-['Cairo'] font-semibold text-[13px] text-white shrink-0">
          {getInitials(testimonial.name)}
        </div>
        <div>
          <div className="font-['Cairo'] font-semibold text-[14px] text-[#181818]">{testimonial.name}</div>
          <div className="font-['Urbanist'] text-[12px] text-neutral-500">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

function Proof() {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="portfolio" className="py-14 sm:py-16 md:py-24 w-full bg-[#F6F6F6]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex justify-between items-center gap-8 mb-10 md:mb-14 flex-wrap">
          <div>
            <Eyebrow>Proof, Not Promises</Eyebrow>
            <h2 className="font-['Cairo'] text-[36px] md:text-[48px] font-bold leading-tight text-[#181818] max-w-[560px]">
              Recent transformations at the Whyte Ave chair.
            </h2>
          </div>
          <p className="font-['Urbanist'] max-w-[360px] text-neutral-600 text-[15px]">
            A snapshot of the work walking out our door every week.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10 md:mb-12">
          {TRANSFORMATIONS.map((item) => (
            <TransformationCard key={item.title} item={item} />
          ))}
        </div>

        {/* Mobile: swipeable carousel */}
        <div className="sm:hidden">
          <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {TESTIMONIALS.map((t) => (
                <CarouselItem key={t.name} className="pl-4 basis-[88%]">
                  <TestimonialCard testimonial={t} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex gap-2 justify-center mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-2 rounded-full transition-all ${
                  current === i ? "w-4 bg-[#d82028]" : "w-2 bg-neutral-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Tablet/desktop: static grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proof;
