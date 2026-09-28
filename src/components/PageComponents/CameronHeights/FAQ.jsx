import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "./data";

function FAQ() {
  return (
    <section className="w-full bg-[#1a1512] py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="mb-2 h-[3px] w-9 bg-[#d82028]" aria-hidden="true" />
        <h2 className="font-['Cairo'] text-[32px] font-bold text-white md:text-[40px]">Questions, Answered</h2>

        <Accordion type="single" collapsible className="mt-8 w-full">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border-white/10">
              <AccordionTrigger className="py-5 font-['Urbanist'] text-[16px] font-semibold text-white hover:no-underline [&>svg]:text-[#d82028]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-['Urbanist'] text-[14.5px] leading-[1.6] text-white/60">
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
