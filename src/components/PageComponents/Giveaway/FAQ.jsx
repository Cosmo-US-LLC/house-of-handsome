import React from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const RulesLink = () => (
  <Link
    to="/red-deer-giveaway-rules"
    target="_blank"
    rel="noopener"
    className="font-semibold text-[#d82028] hover:underline"
  >
    official contest rules
  </Link>
);

function FAQ() {
  return (
    <section className="w-full bg-white py-14 md:py-[84px]">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="mb-11">
          <p className="mb-3 font-['Urbanist'] text-[14px] font-semibold uppercase tracking-[0.2em] text-[#d82028]">
            Fair Questions
          </p>
          <h2 className="font-['Cairo'] text-[28px] font-bold tracking-[-0.01em] text-[#111111] md:text-[40px]">
            Frequently Asked <span className="text-[#d82028]">Questions</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3.5">
          <AccordionItem value="item-1" className="rounded-xl border-0 bg-[#f5f5f5] px-6 py-1">
            <AccordionTrigger className="py-5 font-['Urbanist'] text-[24px] font-bold leading-[32px] text-black hover:no-underline [&>svg]:hidden [&[data-state=open]_.plus]:hidden [&[data-state=open]_.minus]:block">
              Is it really free to enter?
              <span className="relative ml-5 flex h-6 w-6 shrink-0 items-center justify-center">
                <span className="plus font-['Cairo'] text-[26px] font-normal leading-none text-[#d82028]">+</span>
                <span className="minus absolute hidden font-['Cairo'] text-[26px] font-normal leading-none text-[#d82028]">&times;</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-[72ch] pb-5 font-['Urbanist'] text-[18px] font-normal leading-[26px] text-[#0b0f19]">
              Completely free. We're new to Red Deer and this is how we'd
              rather introduce ourselves, with free cuts instead of
              billboards. You enter, we draw, somebody wins. The only thing
              you'll get from us is an email about the draw and our opening.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="rounded-xl border-0 bg-[#f5f5f5] px-6 py-1">
            <AccordionTrigger className="py-5 font-['Urbanist'] text-[24px] font-bold leading-[32px] text-black hover:no-underline [&>svg]:hidden [&[data-state=open]_.plus]:hidden [&[data-state=open]_.minus]:block">
              How and when are winners picked?
              <span className="relative ml-5 flex h-6 w-6 shrink-0 items-center justify-center">
                <span className="plus font-['Cairo'] text-[26px] font-normal leading-none text-[#d82028]">+</span>
                <span className="minus absolute hidden font-['Cairo'] text-[26px] font-normal leading-none text-[#d82028]">&times;</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-[72ch] pb-5 font-['Urbanist'] text-[18px] font-normal leading-[26px] text-[#0b0f19]">
              Winners are drawn at our Red Deer opening event, at random from
              all eligible entries. You don't need to be present to win.
              We'll contact winners by email. The full process is in the{" "}
              <RulesLink />.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="rounded-xl border-0 bg-[#f5f5f5] px-6 py-1">
            <AccordionTrigger className="py-5 font-['Urbanist'] text-[24px] font-bold leading-[32px] text-black hover:no-underline [&>svg]:hidden [&[data-state=open]_.plus]:hidden [&[data-state=open]_.minus]:block">
              How does the grand prize work?
              <span className="relative ml-5 flex h-6 w-6 shrink-0 items-center justify-center">
                <span className="plus font-['Cairo'] text-[26px] font-normal leading-none text-[#d82028]">+</span>
                <span className="minus absolute hidden font-['Cairo'] text-[26px] font-normal leading-none text-[#d82028]">&times;</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-[72ch] pb-5 font-['Urbanist'] text-[18px] font-normal leading-[26px] text-[#0b0f19]">
              Twelve free haircuts, one per calendar month for 12 months from
              our opening. Book like any other client through our booking
              system; your cut is on the house every time.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="rounded-xl border-0 bg-[#f5f5f5] px-6 py-1">
            <AccordionTrigger className="py-5 font-['Urbanist'] text-[24px] font-bold leading-[32px] text-black hover:no-underline [&>svg]:hidden [&[data-state=open]_.plus]:hidden [&[data-state=open]_.minus]:block">
              Who can enter?
              <span className="relative ml-5 flex h-6 w-6 shrink-0 items-center justify-center">
                <span className="plus font-['Cairo'] text-[26px] font-normal leading-none text-[#d82028]">+</span>
                <span className="minus absolute hidden font-['Cairo'] text-[26px] font-normal leading-none text-[#d82028]">&times;</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="max-w-[72ch] pb-5 font-['Urbanist'] text-[18px] font-normal leading-[26px] text-[#0b0f19]">
              Open to Alberta residents 18+ (or age of majority). One entry
              per person. Full eligibility details are in the <RulesLink />.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

export default FAQ;
