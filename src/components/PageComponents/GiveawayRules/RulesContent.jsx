import React from "react";
import { Link } from "react-router-dom";
import headerBg from "@/assets/images/home/hero/hairdresser_barber_shop_styling_hair_client.webp";

const Tbc = ({ children }) => (
  <span className="rounded bg-[#fdecec] px-1.5 py-0.5 font-semibold text-[#c01218]">
    {children}
  </span>
);

const sectionHeading =
  "mt-9 mb-2.5 font-['Cairo'] text-[20px] font-bold text-[#111111]";
const paragraph = "font-['Urbanist'] text-[16px] text-[#333333]";
const list = "my-2 list-disc space-y-1.5 pl-[22px] font-['Urbanist'] text-[16px] text-[#333333]";

function RulesContent() {
  return (
    <div>
      <header
        className="relative overflow-hidden bg-black bg-cover bg-center py-16 md:py-20"
        style={{ backgroundImage: `url(${headerBg})` }}
      >
        <div className="absolute inset-0 bg-black/85" />
        <div className="relative z-10 mx-auto max-w-[820px] px-4 md:px-6">
          <p className="mb-3.5 font-['Urbanist'] text-[14px] font-semibold uppercase tracking-[0.22em] text-[#f2b8ba]">
            Win Free Haircuts For A Year
          </p>
          <h1 className="font-['Cairo'] text-[28px] font-extrabold leading-[1.15] text-white md:text-[42px]">
            Official Contest Rules
          </h1>
          <p className="mt-3.5 font-['Urbanist'] text-[16px] text-white/70">
            House of Handsome Red Deer Opening Draw. Last updated: July 17, 2026
          </p>
        </div>
      </header>

      <main className="py-14 md:py-[72px]">
        <div className="mx-auto max-w-[820px] px-4 md:px-6">
          <Link
            to="/red-deer-giveaway"
            className="mb-8 inline-block font-['Cairo'] text-[14px] font-semibold text-[#d82028] hover:underline"
          >
            &larr; Back to the Draw
          </Link>

          <div className="mb-10 rounded-[10px] border border-[#f0d9a8] bg-[#fff6e6] px-4.5 py-3.5 font-['Urbanist'] text-[14px] text-[#7a5c14]">
            DRAFT: for internal and legal review before publishing. All{" "}
            <strong>[TBC]</strong> items must be confirmed, and these rules
            should be reviewed for compliance with Alberta and federal
            contest law before the campaign goes live.
          </div>

          <h2 className={sectionHeading}>
            <span className="mr-2 text-[#d82028]">1.</span>Sponsor
          </h2>
          <p className={paragraph}>
            This contest (the "Contest") is sponsored by House of Handsome
            Barbershop Ltd. (the "Sponsor"), House Of Handsome Red Deer, 408
            Lantern Street, Unit 103, Red Deer, Alberta T4E 0A5, Canada.
          </p>

          <h2 className={sectionHeading}>
            <span className="mr-2 text-[#d82028]">2.</span>Contest Period
          </h2>
          <p className={paragraph}>
            The Contest begins on <Tbc>[START DATE, TIME MT]</Tbc> and closes
            at the end of August 2026 (the "Contest Period"). Entries
            received after the close of the Contest Period will not be
            eligible.
          </p>

          <h2 className={sectionHeading}>
            <span className="mr-2 text-[#d82028]">3.</span>Eligibility
          </h2>
          <ul className={list}>
            <li>
              Open to legal residents of Alberta, Canada who have reached the
              age of majority (18+) at the time of entry.
            </li>
            <li>
              Employees of the Sponsor, its marketing agencies, and members
              of their immediate households are not eligible.
            </li>
            <li>
              Limit of one (1) entry per person for the duration of the
              Contest Period. Duplicate entries will be removed.
            </li>
          </ul>

          <h2 className={sectionHeading}>
            <span className="mr-2 text-[#d82028]">4.</span>How to Enter
          </h2>
          <p className={paragraph}>
            No purchase is necessary to enter or win. Enter by either method
            below:
          </p>
          <ul className={list}>
            <li>
              <strong>Online:</strong> complete the entry form at{" "}
              <Tbc>[GIVEAWAY PAGE URL]</Tbc> with your name, phone number,
              and email address during the Contest Period.
            </li>
            <li>
              <strong>Alternate free entry:</strong> send a direct message
              with your full name, phone number, and email address to the
              House of Handsome Instagram account{" "}
              <span className="font-semibold">
                @house.of.handsome.barbershop
              </span>{" "}
              with the words "Red Deer Draw" during the Contest Period.
            </li>
          </ul>
          <p className={paragraph}>
            Both entry methods have an equal chance of winning. Purchasing a
            Founding 150 membership does not affect your odds of winning.
          </p>

          <h2 className={sectionHeading}>
            <span className="mr-2 text-[#d82028]">5.</span>Prizes
          </h2>
          <ul className={list}>
            <li>
              <strong>Grand Prize (1 winner):</strong> twelve (12) haircuts
              at House of Handsome Red Deer, redeemable at a rate of one (1)
              haircut per calendar month for twelve (12) months from the
              shop's opening date. Approximate retail value:{" "}
              <Tbc>[$ TBC]</Tbc>.
            </li>
            <li>
              <strong>Secondary Prizes (10 winners):</strong> one (1) first
              visit at House of Handsome Red Deer, consisting of a haircut
              and hot towel shave, redeemable within three (3) months of the
              shop's opening date. Approximate retail value:{" "}
              <Tbc>[$ TBC]</Tbc> each.
            </li>
          </ul>
          <p className={paragraph}>
            Prizes are non-transferable, have no cash value, and may not be
            exchanged or redeemed for cash or other services. Unused monthly
            haircuts do not roll over or accumulate.
          </p>

          <h2 className={sectionHeading}>
            <span className="mr-2 text-[#d82028]">6.</span>Winner Selection
          </h2>
          <p className={paragraph}>
            Winners will be selected by random draw from all eligible
            entries at the House of Handsome Red Deer opening event, taking
            place end of August 2026. Entrants do not need to be present at the
            draw to win. Odds of winning depend on the total number of
            eligible entries received. Before being declared a winner, each
            selected entrant must correctly answer, unaided, a time-limited
            mathematical skill-testing question, as required under Canadian
            law.
          </p>

          <h2 className={sectionHeading}>
            <span className="mr-2 text-[#d82028]">7.</span>Winner
            Notification and Claim
          </h2>
          <ul className={list}>
            <li>
              Selected entrants will be notified by email at the address
              provided at entry, within forty-eight (48) hours of the draw.
            </li>
            <li>
              Selected entrants must respond and complete the skill-testing
              question within <Tbc>[X DAYS TBC]</Tbc> of notification,
              failing which the prize will be forfeited and may be
              re-drawn.
            </li>
            <li>
              The Sponsor is not responsible for failed notification due to
              incorrect or inactive contact details provided at entry.
            </li>
          </ul>

          <h2 className={sectionHeading}>
            <span className="mr-2 text-[#d82028]">8.</span>Publicity
          </h2>
          <p className={paragraph}>
            By accepting a prize, winners consent to the Sponsor's
            reasonable use of their first name, likeness, and photographs
            taken at prize redemption for promotional purposes, without
            additional compensation, unless prohibited by law. A winner may
            decline photography while still claiming their prize by
            informing the Sponsor in writing.
          </p>

          <h2 className={sectionHeading}>
            <span className="mr-2 text-[#d82028]">9.</span>Privacy
          </h2>
          <p className={paragraph}>
            Personal information collected at entry is used to administer
            the Contest and, with consent, to send updates about the draw
            and the Red Deer opening. Entrants may unsubscribe from
            marketing communications at any time. Information is handled in
            accordance with the Sponsor's{" "}
            <Link to="/privacy-policy" className="font-semibold text-[#d82028] hover:underline">
              privacy policy
            </Link>{" "}
            and applicable Canadian privacy law.
          </p>

          <h2 className={sectionHeading}>
            <span className="mr-2 text-[#d82028]">10.</span>General
            Conditions
          </h2>
          <ul className={list}>
            <li>
              The Sponsor reserves the right to disqualify any entry that is
              incomplete, fraudulent, or generated by automated means.
            </li>
            <li>
              If the Red Deer location's opening is delayed, prize
              redemption periods will begin from the actual opening date.
            </li>
            <li>
              The Sponsor may amend these rules or suspend the Contest where
              required for legal or administrative reasons, subject to
              applicable law.
            </li>
            <li>
              This Contest is subject to all applicable federal, provincial,
              and municipal laws of Canada and the Province of Alberta.
            </li>
            <li>
              Decisions of the Sponsor regarding all aspects of the Contest
              are final.
            </li>
          </ul>

          <h2 className={sectionHeading}>
            <span className="mr-2 text-[#d82028]">11.</span>Contact
          </h2>
          <p className={paragraph}>
            Questions about the Contest or these rules can be directed to{" "}
            <a
              href="mailto:info@houseofhandsome.ca"
              className="font-semibold text-[#d82028] hover:underline"
            >
              info@houseofhandsome.ca
            </a>
            .
          </p>

          <Link
            to="/red-deer-giveaway"
            className="mt-12 inline-block font-['Cairo'] text-[14px] font-semibold text-[#d82028] hover:underline"
          >
            &larr; Back to the Draw
          </Link>
        </div>
      </main>
    </div>
  );
}

export default RulesContent;
