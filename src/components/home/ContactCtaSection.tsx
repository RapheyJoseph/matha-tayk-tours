"use client";

import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionFadeInView } from "@/components/shared/MotionFadeInView";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/data/home";

export function ContactCtaSection() {
  return (
    <SectionContainer id="contact" variant="night" paddedTop={false}>
      <Reveal>
        <div
          data-nav-section="contact"
          className="editorial-card-static relative overflow-hidden rounded-2xl px-6 py-9 sm:px-12 sm:py-12 lg:px-14 lg:py-14"
        >
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_80%_20%,rgba(200,169,107,0.08),transparent_60%)]"
            aria-hidden
          />
          <div className="editorial-intro-row relative z-[1] min-w-0 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-12">
            <div className="min-w-0">
              <p className="eyebrow">Begin quietly, begin well</p>
              <h2 className="heading-section home-heading max-w-full text-balance sm:text-4xl lg:text-[2.85rem]">
                Share the outline of your journey—we&apos;ll return with a
                composed proposal.
              </h2>
              <p className="body-lead home-prose-gap max-w-xl">
                Tell us who travels, which gurdwaras call to you, and the pace
                that feels right. Within two studio days, a senior curator will
                respond with thoughtful next steps.
              </p>
            </div>
            <MotionFadeInView className="flex flex-col gap-4">
              <Button asChild size="lg" variant="secondary" className="w-full justify-center">
                <a href={`mailto:${siteConfig.email}`}>
                  <span className="inline-flex items-center gap-2">
                    <Mail className="size-4" />
                    Write to the atelier
                  </span>
                </a>
              </Button>
              <Button asChild size="lg" className="w-full justify-center">
                <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                  <span className="inline-flex items-center gap-2">
                    <MessageCircle className="size-4" />
                    WhatsApp concierge
                  </span>
                </a>
              </Button>
              <p className="body-copy mt-2 text-center text-xs lg:text-left">
                Studio hours follow GMT, with coverage for North American
                evenings by appointment.
              </p>
            </MotionFadeInView>
          </div>
        </div>
      </Reveal>
    </SectionContainer>
  );
}
