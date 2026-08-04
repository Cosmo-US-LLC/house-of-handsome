import Eyebrow from "./Eyebrow";
import { TRANSFORMATIONS } from "./data";

function TransformationCard({ item }) {
  return (
    <div className="relative overflow-hidden transition-all duration-300 bg-white border group rounded-2xl border-neutral-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-200/60">
      <div className="flex overflow-hidden">
        <div className="relative w-1/2 aspect-[4/5] overflow-hidden">
          <img
            src={item.before}
            alt={`${item.title} before`}
            loading="lazy"
            decoding="async"
            className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-3 left-3 z-10 rounded-full bg-black/70 px-2.5 py-1 font-['Urbanist'] text-[10px] font-bold uppercase tracking-[0.04em] text-white">
            Before
          </span>
        </div>
        <div className="relative w-1/2 aspect-[4/5] overflow-hidden border-l-2 border-white">
          <img
            src={item.after}
            alt={`${item.title} after`}
            loading="lazy"
            decoding="async"
            className="object-cover object-center w-full h-full transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-3 right-3 z-10 rounded-full bg-[#d82028] px-2.5 py-1 font-['Urbanist'] text-[10px] font-bold uppercase tracking-[0.04em] text-white">
            After
          </span>
        </div>
      </div>
      <div className="p-5">
        <h4 className="font-['Cairo'] font-semibold text-[16px] mb-1 text-[#181818]">{item.title}</h4>
        <p className="font-['Urbanist'] text-[14px] text-neutral-600">{item.body}</p>
      </div>
    </div>
  );
}

function Proof() {
  return (
    <section id="portfolio" className="py-14 sm:py-16 md:py-24 w-full bg-[#F6F6F6]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-8 mb-10 md:mb-14">
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
          {TRANSFORMATIONS.map((item) => (
            <TransformationCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proof;
