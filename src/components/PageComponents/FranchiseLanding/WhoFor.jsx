import { WHO_FOR } from "./data";

function WhoFor() {
  return (
    <section className="bg-[#f4f2ef] py-14 md:py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 md:gap-10 md:px-8">
        <div className="max-w-[720px]">
          <h2 className="mb-3 font-['Cairo'] text-[32px] font-bold leading-[1.15] text-[#181818] md:text-[48px]">
            Who we are looking for
          </h2>
          <p className="font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#4a4744] md:text-[18px]">
            We grow carefully, one operator at a time. The right partner cares about craft and is ready to lead a team day to day.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {WHO_FOR.map((item) => (
            <div key={item.title} className="flex flex-col gap-2.5 rounded-[10px] bg-white p-6 md:p-7">
              <h3 className="font-['Cairo'] text-[22px] font-bold text-[#181818] md:text-[24px]">{item.title}</h3>
              <p className="font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#4a4744]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoFor;
