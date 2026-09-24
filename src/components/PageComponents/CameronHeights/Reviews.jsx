import { Star } from "lucide-react";
import { REVIEWS } from "./data";

function Reviews() {
  return (
    <section className="w-full bg-[#0e0b0a] py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="mb-2 h-[3px] w-9 bg-[#d82028]" aria-hidden="true" />
        <h2 className="font-['Cairo'] text-[32px] font-bold text-white md:text-[40px]">Cameron Heights Loves Us</h2>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <div key={review.text} className="rounded-[6px] border border-white/10 bg-[#221c19] p-6">
              <div className="mb-2.5 flex items-center gap-0.5 text-[#d82028]" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" fill="#d82028" strokeWidth={0} />
                ))}
              </div>
              <p className="font-['Urbanist'] text-[14.5px] leading-[1.6] text-white/70">{review.text}</p>
              <span className="mt-2.5 block font-['Urbanist'] text-[12px] text-white/45">{review.author}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
