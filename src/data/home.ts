export const siteConfig = {
  name: "Matha Tayk Tours",
  tagline: "Luxury Heritage & Cultural Journeys",
  /** Fixed at build time — avoids rare SSR/client year boundary mismatches in footer */
  copyrightYear: 2026,
  email: "contact@mttours.travel",
  phones: ["+1 214 606 7800", "+1 833 207 3324"] as const,
  whatsapp: "https://wa.me/442079460128",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
} as const;

export const heroMedia = {
  /** Authentic panoramic — Gurdwara Darbar Sahib, Kartarpur (local asset) */
  image: "/media/hero-kartarpur-panorama.png",
  imageAlt:
    "Panoramic view of Gurdwara Darbar Sahib Kartarpur at golden hour—white marble courtyard, perimeter wall, and the main dome bathed in soft light",
} as const;

export const navLinks = [
  { href: "/#collections", label: "Journeys" },
  { href: "/#contact", label: "Contact" },
] as const;

export const collectionNavLinks = [
  { href: "/collections/sikh-heritage", label: "Sikh Heritage" },
  { href: "/collections/buddhist-journeys", label: "Buddhist Heritage" },
  { href: "/collections/pakistan-heritage", label: "Pakistan" },
  { href: "/collections/uae-luxury", label: "UAE Luxury" },
] as const;

export const featuredTours = [
  {
    slug: "nankana-sacred-circle",
    chapter: "I",
    title: "The Sacred Circle of Nankana Sahib",
    shortTitle: "Nankana Sahib",
    duration: "6 days · 5 nights",
    description:
      "Walk the soil where Guru Nanak Dev Ji first illuminated the path—measured pacing, private reflections, and evenings shaped by kirtan and stillness.",
    highlights: [
      "Dawn ardas at Gurdwara Janam Asthan",
      "Scholar-led heritage walks",
      "Boutique stays with warm Punjabi hospitality",
    ],
    priceFrom: "£2,450",
    currencyNote: "per guest, twin share",
    image: "/images/tours/nankana-sacred-circle.png",
    imageAlt:
      "Gurdwara Janam Asthan Nankana Sahib at golden hour—white domes and detailed façade above the lawn, warm sky behind",
  },
  {
    slug: "kartarpur-corridor",
    chapter: "II",
    title: "Kartarpur: The Corridor of Devotion",
    shortTitle: "Kartarpur Sahib",
    duration: "4 days · 3 nights",
    description:
      "A contemplative passage to Guru Nanak Dev Ji’s final resting place—seamless crossings, curated briefings, and time to simply be present.",
    highlights: [
      "Priority corridor coordination",
      "On-ground spiritual liaison",
      "Quiet luxury in Lahore & surrounds",
    ],
    priceFrom: "£1,890",
    currencyNote: "per guest, twin share",
    image: "/images/destinations/kartarpur-sahib.png",
    imageAlt:
      "Gurdwara Darbar Sahib Kartarpur at twilight—illuminated marble, golden dome, and courtyard reflections at sacred dusk",
  },
  {
    slug: "punjab-heritage-expanse",
    chapter: "III",
    title: "Punjab Heritage: Lahore to the Villages",
    shortTitle: "Lahore & Punjab",
    duration: "8 days · 7 nights",
    description:
      "A cinematic sweep through walled cities, ancestral villages, and living gurdwaras—crafted for families tracing their own stories home.",
    highlights: [
      "Private art & architecture immersions",
      "Ancestral village day (on request)",
      "Chef-led regional tasting menus",
    ],
    priceFrom: "£3,280",
    currencyNote: "per guest, twin share",
    image: "/images/destinations/lahore.png",
    imageAlt:
      "Badshahi Mosque Lahore at golden hour—sandstone minarets, marble domes, and a cinematic sunset sky",
  },
] as const;

export { destinationSummaries as destinations } from "@/data/destinations";

export const whyChooseUs = [
  {
    title: "Trusted Guides",
    description:
      "Heritage scholars and local custodians who speak with clarity, humility, and deep respect for sacred spaces.",
    icon: "compass" as const,
  },
  {
    title: "Comfortable Accommodation",
    description:
      "Handpicked stays where restorative sleep and gracious service mirror the dignity of your journey.",
    icon: "hotel" as const,
  },
  {
    title: "Spiritual Heritage Expertise",
    description:
      "Itineraries shaped around ardas, sangat, and silence—never spectacle—so devotion always leads the day.",
    icon: "sparkles" as const,
  },
  {
    title: "Seamless Travel Experience",
    description:
      "Corridors, visas, and private transfers orchestrated quietly—so your attention stays where it belongs.",
    icon: "route" as const,
  },
] as const;

/** Consumed by `TestimonialsSection` when re-enabled on the homepage. */
export const testimonials = [
  {
    name: "Harpreet Kaur",
    location: "London, United Kingdom",
    quote:
      "Matha Tayk did more than plan a trip—they composed a pilgrimage. Every threshold was explained, every moment felt held.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=88",
    imageAlt: "Portrait of a smiling traveller in soft natural light",
  },
  {
    name: "Inderjit Singh",
    location: "Toronto, Canada",
    quote:
      "We crossed as a family with aging parents. The team anticipated fatigue, dietary needs, and emotional weight without us asking.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=88",
    imageAlt: "Portrait of a traveller outdoors with warm tones",
  },
  {
    name: "Simran Dhaliwal",
    location: "Melbourne, Australia",
    quote:
      "Cinematic, calm, and profoundly respectful. I returned with photographs—and a quieter heart.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=800&q=88",
    imageAlt: "Portrait of a traveller in gentle side light",
  },
] as const;

export const faqPreview = [
  {
    question: "Do you support UK, EU, and North American travellers?",
    answer:
      "Yes. Our concierge coordinates documentation guidance, corridor protocols, and pre-departure briefings tailored to your passport and city of origin.",
  },
  {
    question: "Are journeys suitable for elders and young children?",
    answer:
      "We design pacing around your sangat—wheelchair-aware routes, restful afternoons, and private transport where crowds might overwhelm.",
  },
  {
    question: "How far ahead should we reserve?",
    answer:
      "For peak gurpurab seasons and corridor slots, we recommend twelve to sixteen weeks. Intimate departures can sometimes be composed sooner—ask our team.",
  },
  {
    question: "Will we have space for private worship?",
    answer:
      "Always. We build unscheduled windows around ardas and personal meditation, alongside optional group reflections led by your guide.",
  },
] as const;

