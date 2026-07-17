import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// [CONFIRM WITH ALEX] items: answers ported verbatim from the draft copy and
// still need sign-off before this page goes live.
const FAQ_DATA = [
  {
    id: "item-1",
    question: "Why is a $100 membership only $50?",
    answer:
      "Simple: we're new to Red Deer and we'd rather give our best price to the first 150 men who back us than spend that money on ads. You back us before the doors open; we make it worth your while permanently.",
  },
  {
    id: "item-2",
    question: "When does my membership start?",
    answer:
      "The day we open in Red Deer. Your founding number is reserved from the moment you join, and if the opening date shifts, your membership simply starts from the actual opening day. You never lose a single day of perks.",
  },
  {
    id: "item-3",
    question: "Are there any renewals, monthly fees, or hidden conditions?",
    answer:
      "None. It's a one-time payment, the discount applies from your first visit with no minimums or waiting periods, and nothing expires.",
  },
  {
    id: "item-4",
    question: "What if I move away from Red Deer?",
    answer:
      "[CONFIRM WITH ALEX] Your membership is honoured at any House of Handsome location in Alberta, so a move to Edmonton or the surrounding area changes nothing. If you leave the province entirely, contact us and we will sort out a fair resolution.",
  },
  {
    id: "item-5",
    question: "Can I get a refund if I change my mind?",
    answer:
      "[CONFIRM WITH ALEX] Yes. Any time before opening day, you can cancel for a full refund of your $50. After we open and your perks are active, the membership is non-refundable.",
  },
  {
    id: "item-6",
    question: "Can I transfer my membership to someone else?",
    answer:
      "The membership and card are personal to you. That's what makes being one of the 150 worth having. You're always welcome to bring a son, brother, or friend along to their own appointment.",
  },
];

function FAQ() {
  return (
    <section className="w-full bg-white py-14 md:py-[72px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6">
        <div className="mb-10">
          <p className="mb-3 font-['Urbanist'] text-[13px] font-semibold uppercase tracking-[0.2em] text-[#d82028]">
            Fair Questions
          </p>
          <h2 className="font-['Cairo'] text-[28px] font-bold tracking-[-0.01em] text-[#111111] md:text-[38px]">
            Frequently Asked <span className="text-[#d82028]">Questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3.5">
          {FAQ_DATA.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-xl border-0 bg-[#f5f5f5] px-6 py-1"
            >
              <AccordionTrigger className="py-5 font-['Cairo'] text-[17px] font-semibold text-[#111111] hover:no-underline [&>svg]:hidden [&[data-state=open]_.plus]:hidden [&[data-state=open]_.minus]:block">
                {faq.question}
                <span className="relative ml-5 flex h-6 w-6 shrink-0 items-center justify-center">
                  <span className="plus font-['Cairo'] text-[26px] font-normal leading-none text-[#d82028]">
                    +
                  </span>
                  <span className="minus absolute hidden font-['Cairo'] text-[26px] font-normal leading-none text-[#d82028]">
                    &times;
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="max-w-[72ch] pb-5 font-['Urbanist'] text-[15.5px] text-[#6b6b6b]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;
