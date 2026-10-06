import { SUPPORT_ITEMS } from "./data";

function Support() {
  return (
    <section id="support" className="bg-white py-14 md:py-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 md:gap-10 md:px-8">
        <div className="max-w-[720px]">
          <h2 className="mb-3 font-['Cairo'] text-[32px] font-bold leading-[1.15] text-[#181818] md:text-[48px]">
            You are not doing this alone
          </h2>
          <p className="font-['Urbanist'] text-[16px] font-medium leading-[26px] text-[#4a4744] md:text-[18px]">
            From your first call to your first full week of bookings, our team works alongside you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {SUPPORT_ITEMS.map((item) => (
            <div key={item.title} className="flex flex-col gap-2 border-t-[3px] border-[#d82028] pt-5">
              <h3 className="font-['Cairo'] text-[22px] font-bold text-[#181818]">{item.title}</h3>
              <p className="font-['Urbanist'] text-[15px] font-medium leading-[24px] text-[#4a4744]">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Support;
