import { PROCESS_STEPS } from "./data";

function Process() {
  return (
    <section className="bg-[#111111] py-14 text-white md:py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 md:gap-10 md:px-8">
        <h2 className="font-['Cairo'] text-[32px] font-bold leading-[1.15] md:text-[48px]">From first call to grand opening</h2>
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS_STEPS.map((s) => (
            <li key={s.num} className="flex flex-col gap-2.5 rounded-[10px] bg-[#1e1c1b] p-6">
              <div className="font-['Cairo'] text-[40px] font-bold leading-none text-[#ff6b72]">{s.num}</div>
              <div className="font-['Urbanist'] text-[18px] font-bold">{s.title}</div>
              <div className="font-['Urbanist'] text-[15px] font-medium leading-[24px] text-[#cfcbc6]">{s.body}</div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Process;
