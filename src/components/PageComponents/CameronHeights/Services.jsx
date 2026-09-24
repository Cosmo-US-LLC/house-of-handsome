import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SERVICE_CATEGORIES } from "./data";

function Services() {
  return (
    <section id="services" className="w-full bg-[#1a1512] py-16 text-white md:py-20">
      <div className="mx-auto max-w-[1280px] px-4 md:px-8">
        <div className="mb-2 h-[3px] w-9 bg-[#d82028]" aria-hidden="true" />
        <h2 className="font-['Cairo'] text-[32px] font-bold text-white md:text-[40px]">Cut Above The Rest</h2>
        <p className="mt-2 max-w-[60ch] font-['Urbanist'] text-[15px] text-white/60">
          Every cut, trim, and treatment is built around one standard: precision that holds its shape long after
          you leave the chair.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATEGORIES.map((category) => (
            <Accordion key={category.id} type="single" collapsible>
              <AccordionItem
                value={category.id}
                className="rounded-[6px] border border-white/10 bg-[#221c19] px-5"
              >
                <AccordionTrigger className="py-5 font-['Urbanist'] text-[15px] font-bold text-white hover:no-underline [&>svg]:text-[#d82028]">
                  <span className="flex flex-col items-start gap-1">
                    {category.name}
                    <span className="font-['Urbanist'] text-[12px] font-normal text-white/50">
                      {category.items.length} {category.items.length === 1 ? "service" : "services"}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-0">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-baseline justify-between gap-3 border-t border-white/10 py-2.5 first:border-t-0"
                      >
                        <span className="font-['Urbanist'] text-[13.5px] text-white/80">{item.name}</span>
                        <span className="whitespace-nowrap font-['Urbanist'] text-[13.5px] font-bold text-[#d82028]">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        <p className="mt-6 font-['Urbanist'] text-[13px] text-white/50">
          $5 off for Police, EMS, Firefighters, and Students with valid ID.
        </p>
      </div>
    </section>
  );
}

export default Services;
