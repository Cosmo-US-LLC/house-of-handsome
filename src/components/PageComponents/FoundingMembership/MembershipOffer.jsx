import React from "react";

const ROWS = [
  {
    title: "Price of every service",
    detail:
      "Haircuts, shaves, everything on the menu. Locked for life, even as prices rise.",
    regular: "Full price",
    founding: "20% off, forever",
  },
  {
    title: "Head massage",
    detail: "Complimentary with every appointment. Not on the regular menu.",
    regular: "Not available",
    founding: "Free, every visit",
  },
  {
    title: "Booking",
    detail:
      "A private booking link. When the calendar fills up, you skip the line.",
    regular: "General queue",
    founding: "Priority access",
  },
  {
    title: "Founding Card",
    detail: "Numbered, one of 150 ever printed. Proof you were here first.",
    regular: "Never available",
    founding: "Yours for life",
  },
];

function MembershipOffer() {
  return (
    <section className="w-full bg-[#f5f5f5] py-14 md:py-[72px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="mb-10">
          <p className="mb-3 font-['Urbanist'] text-[14px] font-semibold uppercase tracking-[0.2em] text-[#d82028]">
            The Membership
          </p>
          <h2 className="font-['Cairo'] text-[28px] font-bold tracking-[-0.01em] text-[#111111] md:text-[38px]">
            What Founding Members Get. <span className="text-[#d82028]">For Life.</span>
          </h2>
        </div>

        <div className="overflow-x-auto rounded-xl bg-white px-2 pb-2 pt-1 shadow-[0_6px_24px_rgba(0,0,0,0.06)] md:px-6 md:pb-5">
          <table className="w-full min-w-[560px] border-collapse">
            <thead>
              <tr>
                <th className="w-[44%]"></th>
                <th className="border-b border-[#ececec] px-3.5 py-4 text-left font-['Urbanist'] text-[14px] font-semibold uppercase tracking-[0.08em] text-[#6b6b6b] md:px-4">
                  Regular Client
                </th>
                <th className="border-b border-[#ececec] bg-[#fdf3f3] px-3.5 py-4 text-left font-['Urbanist'] text-[14px] font-semibold uppercase tracking-[0.08em] text-[#6b6b6b] md:px-4">
                  Founding Member
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr key={row.title}>
                  <td
                    className={`px-3.5 py-4 align-top md:px-4 ${
                      i !== ROWS.length - 1 ? "border-b border-[#ececec]" : ""
                    }`}
                  >
                    <strong className="block font-['Cairo'] text-[16px] font-bold text-[#111111]">
                      {row.title}
                    </strong>
                    <small className="mt-0.5 block font-['Urbanist'] text-[14px] font-normal text-[#6b6b6b]">
                      {row.detail}
                    </small>
                  </td>
                  <td
                    className={`px-3.5 py-4 align-top font-['Urbanist'] text-[16px] text-[#333333] md:px-4 ${
                      i !== ROWS.length - 1 ? "border-b border-[#ececec]" : ""
                    }`}
                  >
                    {row.regular}
                  </td>
                  <td
                    className={`bg-[#fdf3f3] px-3.5 py-4 align-top font-['Urbanist'] text-[16px] font-semibold text-[#d82028] md:px-4 ${
                      i !== ROWS.length - 1 ? "border-b border-[#ececec]" : ""
                    }`}
                  >
                    {row.founding}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default MembershipOffer;
