"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { siteConfig } from "@/data/home";
import { cn } from "@/lib/utils";

interface LuxuryCTAProps {
  eyebrow: string;
  headline: string;
  body: string;
  image: string;
  imageAlt: string;
  objectPosition?: string;
  atmosphereClass?: string;
}

export function LuxuryCTA({
  eyebrow,
  headline,
  body,
  image,
  imageAlt,
  objectPosition = "50% 42%",
  atmosphereClass = "autumn-departures-gradient",
}: LuxuryCTAProps) {
  return (
    <section className="relative overflow-hidden bg-brand-charcoal pt-12 sm:pt-14 lg:pt-16">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          loading="lazy"
          quality={85}
          className="object-cover opacity-40"
          style={{ objectPosition }}
          sizes="100vw"
        />
        <div
          className={cn(
            "pointer-events-none absolute inset-0",
            atmosphereClass,
          )}
          aria-hidden
        />
        <div
          className="destination-page-cta-overlay pointer-events-none absolute inset-0"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] gutter-x">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-brand-gold-soft">{eyebrow}</p>
            <h2 className="heading-section mt-5 text-white sm:mt-6">{headline}</h2>
            <p className="body-lead mx-auto mt-6 max-w-lg text-white/85 sm:mt-7">
              {body}
            </p>
            <motion.div
              className="mt-9 flex flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button asChild size="lg" className="autumn-departures-cta min-w-[220px]">
                <Link href="/#contact">
                  <Mail className="size-4" />
                  Plan your journey
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="min-w-[220px] border-white/20 bg-white/10 text-white hover:bg-white/15"
              >
                <a href={siteConfig.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" />
                  WhatsApp concierge
                </a>
              </Button>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
