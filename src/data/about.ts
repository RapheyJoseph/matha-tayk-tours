import { heroMedia } from "@/data/home";

export const aboutPage = {
  hero: {
    eyebrow: "About Matha Tayk",
    headline: "Where pilgrimage meets quiet excellence",
    subheadline:
      "A travel atelier devoted to sacred journeys across Pakistan—composed with reverence, discretion, and the warmth of those who understand what it means to walk in faith.",
    image: heroMedia.image,
    imageAlt: heroMedia.imageAlt,
    objectPosition: "50% 38%",
  },
  origin: {
    eyebrow: "Our beginning",
    title: "About us",
    paragraphs: [
      "Matha Tayk Tours was conceived in 2018 by two friends—one a businessman with a background in hotels and tourism, the other a banker—who shared a simple conviction: to help Sikh friends visit the holy sites of Pakistan with dignity and ease.",
      "What began as a heartfelt idea soon revealed the depth of the work ahead. The logistical nuances of cross-border pilgrimage, corridor protocols, and the care required at every threshold demanded more time than a side project could allow.",
      "The vision was further paused by the COVID-19 pandemic. Yet the calling remained—patient, clear, and unchanged.",
    ],
  },
  philosophy: {
    eyebrow: "Revival & purpose",
    title: "Turning travel dreams into seamless experiences",
    lead: "In 2023, the idea was revitalized—with a wider circle of colleagues from corporate life in strategy, marketing, and project management, each bringing discipline to a mission rooted in devotion.",
    image: "/images/collections/sikh-heritage-hero.jpg",
    imageAlt:
      "Gurdwara architecture at golden hour—domes and marble bathed in warm light, evoking sacred Punjab heritage",
    objectPosition: "50% 42%",
    pillars: [
      {
        label: "Our goal",
        body: "To bridge gaps, celebrate shared values, promote brotherhood, and foster interfaith harmony through comfortable, experiential journeys shaped for learning as much as arrival.",
      },
      {
        label: "Values & commitment",
        body: "We hold deep respect for the sanctity of religious sites, encourage mindful cultural approaches, and support ethical tourism and local charitable initiatives wherever we travel.",
      },
      {
        label: "The team",
        body: "Travel professionals, theologians, historians, and cultural mediators work as one studio—dedicated to empathy, dialogue, and spiritually fulfilling journeys for every yatri.",
      },
    ],
    closing:
      "Together, we embarked on this renewed chapter in the last quarter of 2023—ready to welcome the sangat with the composure and care their pilgrimage deserves.",
  },
  unity: {
    eyebrow: "Pilgrimage as bridge",
    title: "Upholding unity through the journey of pilgrimage",
    paragraphs: [
      "We design meaningful pilgrimages that honour diverse faiths and the dignity of human connection. Respectful travel, we believe, reveals what communities share—not only what distinguishes them.",
      "Compassion, hospitality, integrity, wisdom, humility, and mindfulness guide every itinerary we compose. These are not marketing words; they are the standards by which we measure a journey well made.",
    ],
  },
  missionVision: {
    eyebrow: "Mission & vision",
    title: "Our mission & vision",
    mission:
      "We are committed to advancing interfaith harmony—especially within the global Sikh community—by creating transformative experiences that bridge divides with grace, preparation, and presence.",
    vision:
      "Our vision is to compose journeys that transcend cultural, spiritual, and geographical borders—building lasting harmony through shared pilgrimage, thoughtful encounter, and the quiet confidence of ethical travel.",
  },
  approach: {
    eyebrow: "The Matha Tayk approach",
    title: "Spiritual experience, not sightseeing",
    quote:
      "Our pilgrimages are not just journeys—they are spiritual experiences rooted in reflection, respect, and connection.",
    body: "Every departure is paced for contemplation. Every briefing honours sacred protocol. Every evening leaves room for ardas, rest, and the unhurried conversations that bind a sangat together.",
  },
  values: [
    {
      title: "Faith-focused travel",
      description:
        "Every tour is thoughtfully designed to honour sacred spaces and deepen spiritual understanding.",
      accent: "gold" as const,
    },
    {
      title: "Community & connection",
      description:
        "We foster heartfelt bonds among yatrees and with the communities we visit.",
      accent: "sage" as const,
    },
    {
      title: "Meaning over mileage",
      description:
        "We prioritise depth of experience over ticking off destinations.",
      accent: "amber" as const,
    },
    {
      title: "Inclusive & respectful",
      description:
        "While rooted in Sikh values, we welcome all faiths with openness and humility.",
      accent: "warm" as const,
    },
    {
      title: "Responsible & ethical",
      description:
        "We support local communities and promote mindful, respectful tourism.",
      accent: "slate" as const,
    },
  ],
  cta: {
    eyebrow: "Walk with us",
    headline: "Begin your pilgrimage with a studio that listens first",
    body: "Share who travels, which sacred sites call to you, and the pace that feels right. We will respond with a composed proposal—never a catalogue.",
    image: "/images/collections/sikh-heritage-hero.jpg",
    imageAlt:
      "Sacred heritage landscape at dusk—inviting the beginning of a curated pilgrimage",
    objectPosition: "50% 40%",
  },
} as const;
