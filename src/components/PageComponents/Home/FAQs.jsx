import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import faqsImage from "../../../assets/images/home/faqs/faqs_image.webp";

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
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <h2 className="mb-12 font-['Cairo'] text-[36px] font-bold capitalize text-[#181818] md:text-[48px] lg:leading-[55px]">
          Frequently asked questions
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col gap-5">
            <Accordion
              type="single"
              collapsible
              className="space-y-5 w-full cursor-pointer"
            >
              {faqsData.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="rounded-[8px] cursor-pointer border border-gray-200 bg-white px-[24px] py-[34px] data-[state=open]:border-gray-200"
                >
                  <AccordionTrigger className="flex w-full items-center gap-[16px] text-left hover:no-underline outline-none [&[data-state=open]>p]:text-[#d82028] [&>svg]:hidden [&[data-state=open]_.plus-icon]:hidden   
    [&[data-state=open]_.minus-icon]:block">
                    <p className="flex-1 font-['Urbanist'] text-[24px] font-bold cursor-pointer leading-[32px] text-black transition-colors">
                      {faq.question}
                    </p>
                    <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center cursor-pointer relative">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute h-8 w-8 plus-icon"
                        data-state="closed" 
                      >
                        <path
                          d="M16 8V24M8 16H24" 
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute minus-icon h-8 w-8 "
                        data-state="open" 
                      >
                        <path
                          d="M8 16H24"
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
