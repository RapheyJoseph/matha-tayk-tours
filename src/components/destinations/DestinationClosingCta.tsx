"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionFadeInView } from "@/components/shared/MotionFadeInView";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/data/home";
import type { DestinationPageData } from "@/data/destinations";

interface DestinationClosingCtaProps {
  destination: DestinationPageData;
}

export function DestinationClosingCta({ destination }: DestinationClosingCtaProps) {
  const { cta, hero } = destination;

  return (
    <section className="relative overflow-hidden bg-brand-charcoal editorial-inset-y">
      <div className="absolute inset-0">
        <Image
          src={hero.image}
          alt=""
          fill
          loading="lazy"
          quality={75}
          className="object-cover opacity-35"
          style={{ objectPosition: hero.objectPosition }}
          sizes="100vw"
          aria-hidden
        />
        <div
          className="destination-page-cta-overlay pointer-events-none absolute inset-0"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full min-w-0 max-w-[1440px] gutter-x">
        <Reveal>
          <div className="mx-auto w-full min-w-0 max-w-2xl text-center">
            <p className="eyebrow text-brand-gold-soft">{cta.eyebrow}</p>
            <h2 className="heading-section editorial-heading text-balance text-white">
              {cta.headline}
            </h2>
            <p className="body-lead editorial-lead-gap mx-auto max-w-full text-pretty text-white/85 sm:max-w-lg">
              {cta.body}
            </p>
            <MotionFadeInView className="editorial-cta-gap flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto sm:min-w-[220px]">
                <Link href="/#contact">
                  <Mail className="size-4" />
                  Plan your journey
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full border-white/20 bg-white/10 text-white hover:bg-white/15 sm:w-auto sm:min-w-[220px]"
              >
                <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" />
                  WhatsApp concierge
                </a>
              </Button>
            </MotionFadeInView>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
