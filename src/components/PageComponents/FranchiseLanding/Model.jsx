import { MODEL_PROVIDE, MODEL_RUN } from "./data";

function List({ items }) {
  return (
    <ul className="flex list-disc flex-col gap-2.5 pl-5 font-['Urbanist'] text-[16px] font-medium leading-[24px] text-[#333130] marker:text-[#d82028]">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

function Model() {
  return (
    <section id="model" className="bg-white py-14 md:py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 md:gap-10 md:px-8">
        <div className="max-w-[760px]">
          <p className="mb-3 font-['Urbanist'] text-[14px] font-bold uppercase tracking-[0.14em] text-[#d82028]">
            One model, clearly explained
          </p>
          <h2 className="mb-3 font-['Cairo'] text-[32px] font-bold leading-[1.15] text-[#181818] md:text-[48px]">
            How Shop-in-Shop works
          </h2>
          <p className="font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#4a4744] md:text-[18px]">
            As a licensed operator, you run a House of Handsome barbershop under our brand and standards.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="flex flex-col gap-4 rounded-[10px] border border-[#e6e3de] p-6 md:p-8">
            <h3 className="font-['Cairo'] text-[24px] font-bold text-[#181818] md:text-[28px]">What we provide</h3>
            <List items={MODEL_PROVIDE} />
          </div>
          <div className="flex flex-col gap-4 rounded-[10px] border border-[#e6e3de] p-6 md:p-8">
            <h3 className="font-['Cairo'] text-[24px] font-bold text-[#181818] md:text-[28px]">What you run</h3>
            <List items={MODEL_RUN} />
          </div>
          <div className="flex flex-col gap-4 rounded-[10px] bg-[#111111] p-6 text-white md:p-8">
            <h3 className="font-['Cairo'] text-[24px] font-bold md:text-[28px]">How you earn</h3>
            <p className="font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#d6d3ce]">
              You earn performance-based revenue and share in the profits of the shop you run.
            </p>
            <p className="font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#d6d3ce]">
              Investment details, fees and how the revenue share works are shared once our franchise team reaches out.
            </p>
            <a href="#apply" className="mt-auto inline-flex self-start rounded-[10px] bg-[#d82028] px-5 py-3.5 font-['Urbanist'] text-[15px] font-bold text-white transition-colors hover:bg-[#b91219]">
              Explore Franchise Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Model;
