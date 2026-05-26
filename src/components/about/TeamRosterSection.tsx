"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { Reveal } from "@/components/shared/Reveal";
import { StaggerInView } from "@/components/shared/StaggerInView";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogCloseButton,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { teamPage } from "@/data/about";
import { staggerParent, slideUp } from "@/lib/motion-variants";

type TeamMember = (typeof teamPage)["members"][number];

interface TeamRosterSectionProps {
  roster: (typeof teamPage)["roster"];
  members: readonly TeamMember[];
}

export function TeamRosterSection({ roster, members }: TeamRosterSectionProps) {
  const [activeMember, setActiveMember] = useState<TeamMember | null>(null);

  return (
    <SectionContainer
      variant="cream"
      paddedTop={false}
      atmosphere={false}
      className="about-team-roster-section about-chapter-band"
    >
      <Reveal className="mx-auto w-full min-w-0 max-w-2xl">
        <p className="eyebrow">{roster.eyebrow}</p>
        <h2 className="heading-section collection-heading text-balance">
          {roster.title}
        </h2>
        <p className="body-lead about-block-gap max-w-xl">{roster.lead}</p>
      </Reveal>

      <StaggerInView
        as="ul"
        className="team-roster-grid about-block-gap"
        variants={staggerParent}
        viewportMargin="-6%"
        role="list"
      >
        {members.map((member) => (
          <motion.li key={member.slug} variants={slideUp} role="listitem">
            <article className="team-roster-card editorial-card flex h-full flex-col overflow-hidden rounded-2xl">
              <div className="team-portrait-frame relative w-full shrink-0">
                <Image
                  src={member.image}
                  alt={member.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  style={{ objectPosition: member.objectPosition ?? "50% 40%" }}
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-charcoal/35 via-transparent to-transparent"
                  aria-hidden
                />
              </div>

              <div className="flex flex-1 flex-col px-6 py-6 sm:px-7 sm:py-7">
                <p className="label-meta text-[9px] text-brand-body/80">
                  {member.role}
                </p>
                <h3 className="heading-card mt-2 text-xl text-brand-charcoal">
                  {member.name}
                </h3>
                <p className="body-copy mt-4 flex-1 text-pretty leading-[1.78] text-brand-body">
                  {member.philosophy}
                </p>
                <Button
                  type="button"
                  variant="editorial"
                  size="sm"
                  className="team-profile-trigger mt-6 self-start"
                  onClick={() => setActiveMember(member)}
                >
                  View Profile
                  <ArrowRight
                    className="size-3.5 transition-transform duration-500 group-hover/btn:translate-x-0.5"
                    aria-hidden
                  />
                </Button>
              </div>
            </article>
          </motion.li>
        ))}
      </StaggerInView>

      <Dialog
        open={activeMember !== null}
        onOpenChange={(open) => {
          if (!open) setActiveMember(null);
        }}
      >
        {activeMember && (
          <DialogContent className="team-profile-dialog grid max-h-[min(92dvh,56rem)] overflow-y-auto p-0 sm:max-w-3xl">
            <DialogCloseButton />
            <div className="grid min-h-0 sm:grid-cols-[minmax(0,14rem)_1fr]">
              <div className="team-profile-portrait relative aspect-[4/5] min-h-[220px] w-full sm:aspect-auto sm:min-h-full">
                <Image
                  src={activeMember.image}
                  alt={activeMember.imageAlt}
                  fill
                  className="object-cover"
                  style={{
                    objectPosition: activeMember.objectPosition ?? "50% 40%",
                  }}
                  sizes="(max-width: 640px) 100vw, 14rem"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 via-brand-charcoal/10 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:via-transparent sm:to-brand-ivory/20"
                  aria-hidden
                />
              </div>

              <div className="flex flex-col px-6 py-8 sm:px-8 sm:py-10">
                <DialogHeader>
                  <p className="label-meta text-[9px] text-brand-body/80">
                    {activeMember.role}
                  </p>
                  <DialogTitle className="mt-2">{activeMember.name}</DialogTitle>
                  <DialogDescription className="mt-3 text-pretty leading-[1.78]">
                    {activeMember.philosophy}
                  </DialogDescription>
                </DialogHeader>

                <div className="collection-prose-stack mt-6">
                  {activeMember.profile.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="body-copy text-pretty leading-[1.78] text-brand-body"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {activeMember.profile.focus && activeMember.profile.focus.length > 0 && (
                  <div className="mt-8 border-t border-brand-charcoal/[0.06] pt-6">
                    <p className="label-meta text-[9px]">Focus areas</p>
                    <ul className="mt-4 space-y-2.5">
                      {activeMember.profile.focus.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-sm leading-relaxed text-brand-body"
                        >
                          <span
                            className="mt-2 size-1 shrink-0 rounded-full bg-brand-gold"
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </SectionContainer>
  );
}
