import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import { faqPreview } from "@/data/home";

export function FaqPreviewSection() {
  return (
    <SectionContainer id="faq" variant="cream" paddedTop>
      <div className="grid gap-16 lg:grid-cols-12 lg:items-start lg:gap-14">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">Questions, answered with calm</p>
          <h2 className="heading-section mt-6 text-3xl sm:text-4xl">
            The details that make heritage travel feel effortless.
          </h2>
          <p className="body-copy mt-6">
            Should you wish to speak with our concierge before browsing
            itineraries, we are never more than a message away.
          </p>
        </Reveal>
        <Reveal variant="fade" delay={0.08} className="lg:col-span-7 lg:col-start-6">
          <div className="editorial-card-static rounded-2xl px-6 py-2 sm:px-10 sm:py-4">
            <Accordion type="single" collapsible className="w-full">
              {faqPreview.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`}>
                  <AccordionTrigger className="py-6 text-left font-serif text-lg text-brand-charcoal sm:text-xl">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-[15px] leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Reveal>
      </div>
    </SectionContainer>
  );
}
