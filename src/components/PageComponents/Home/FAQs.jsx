import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqsImage from "../../../assets/images/faqs/faqs_image.webp";

// FAQs data
const faqsData = [
  {
    id: "item-1",
    question: "Do I need to book an appointment?",
    answer:
      "We recommend booking ahead to secure your preferred time and barber. Walk-ins are always welcome based on availability.",
  },
  {
    id: "item-2",
    question: "How can I book a service?",
    answer:
      "You can book a service through our website, by calling any of our six locations, or by visiting us in person. We also offer online booking for your convenience.",
  },
  {
    id: "item-3",
    question: "What products do you use?",
    answer:
      "We use premium grooming products from top brands in the industry, ensuring the best quality care for your hair, beard, and skin. All products are carefully selected for their effectiveness and safety.",
  },
  {
    id: "item-4",
    question: "What services do you offer?",
    answer:
      "We offer a full range of men's grooming services including precision haircuts, beard styling and trimming, hot towel shaves, skin care treatments, and grooming consultations. Each service is tailored to your individual style and needs.",
  },
];

function FAQs() {
  return (
    <section className="py-20 w-full bg-white">
      {/* Max Container Wrapper - 1280px */}
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        {/* Section Title */}
        <h2 className="mb-12 font-['Cairo'] text-3xl font-bold capitalize text-[#181818] md:text-4xl lg:text-[48px] lg:leading-[55px]">
          Frequently asked questions
        </h2>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          {/* Left Column - FAQ Accordion List */}
          <div className="flex flex-col gap-5">
            <Accordion type="single" collapsible className="space-y-5 w-full">
              {faqsData.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="rounded-[8px] border border-gray-200 bg-white px-[24px] py-[40px] data-[state=open]:border-gray-200"
                >
                  <AccordionTrigger className="flex w-full items-center gap-[16px] text-left hover:no-underline [&[data-state=open]>p]:text-[#d82028] [&>svg]:hidden">
                    <p className="flex-1 font-['Urbanist'] text-[24px] font-bold leading-[32px] text-black transition-colors">
                      {faq.question}
                    </p>
                    {/* Custom Icon */}
                    <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 transition-transform data-[state=closed]:rotate-0 data-[state=open]:rotate-45"
                      >
                        <path
                          d="M16 8V24M8 16H24"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-[12px] font-['Urbanist'] text-[18px] font-normal leading-[26px] text-[#0b0f19]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column - Image */}
          <div className="order-first lg:order-last">
            <div className="h-[400px] w-full overflow-hidden rounded-lg lg:h-[642px] grayscale">
              <img
                src={faqsImage}
                alt="Man getting professional hair wash treatment"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQs;
