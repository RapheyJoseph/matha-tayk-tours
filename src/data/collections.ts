import {
  getDestinationBySlug,
  type DestinationSlug,
} from "@/data/destinations";

export const COLLECTION_SLUGS = [
  "sikh-heritage",
  "buddhist-journeys",
  "jainism-heritage",
  "pakistan-heritage",
  "uae-luxury",
] as const;

/** Homepage editorial sequence — cultural pacing (Pakistan before UAE) */
export const HOMEPAGE_COLLECTION_ORDER = [
  "sikh-heritage",
  "buddhist-journeys",
  "jainism-heritage",
  "pakistan-heritage",
  "uae-luxury",
] as const satisfies readonly CollectionSlug[];

export type CollectionSlug = (typeof COLLECTION_SLUGS)[number];

export type CollectionAtmosphere =
  | "sikh"
  | "buddhist"
  | "jain"
  | "uae"
  | "pakistan";

export interface CuratedExperience {
  title: string;
  description: string;
}

export interface FeaturedDeparture {
  id: string;
  sectionEyebrow: string;
  sectionTitle: string;
  sectionLead: string;
  title: string;
  dates: string;
  description: string;
  /** Optional inline phrase to render in <strong> within the description */
  descriptionEmphasis?: string;
  ctaLabel: string;
  href: string;
  image: string;
  imageAlt: string;
}

export interface CollectionPageData {
  slug: CollectionSlug;
  title: string;
  shortTitle: string;
  eyebrow: string;
  atmosphere: CollectionAtmosphere;
  hero: {
    headline: string;
    subheadline: string;
    image: string;
    imageAlt: string;
    objectPosition: string;
  };
  introduction: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  destinationSlugs: DestinationSlug[];
  experiences: CuratedExperience[];
  imageSpread: {
    eyebrow: string;
    caption: string;
    image: string;
    imageAlt: string;
    objectPosition: string;
  };
  cta: {
    eyebrow: string;
    headline: string;
    body: string;
  };
  featuredDeparture?: FeaturedDeparture;
}

const collectionPages: CollectionPageData[] = [
  {
    slug: "sikh-heritage",
    title: "Sacred Sikh Heritage",
    shortTitle: "Sikh Heritage",
    eyebrow: "Collection I",
    atmosphere: "sikh",
    hero: {
      headline: "Where devotion becomes geography",
      subheadline:
        "Janam Asthan, Kartarpur, and the gurdwaras of Punjab—composed with reverence, not spectacle.",
      image: "/images/collections/sikh-heritage-hero.jpg",
      imageAlt:
        "Gurdwara Darbar Sahib Kartarpur at twilight—illuminated white marble domes reflected across a vast courtyard under a purple and rose sky",
      objectPosition: "54% 44%",
    },
    introduction: {
      eyebrow: "Sacred collection",
      title: "A fellowship of stillness across Punjab",
      paragraphs: [
        "This collection is for travellers who seek the sangat’s heartlands—not as a checklist, but as chapters read slowly beside rivers, in courtyards, and beneath domes warmed by kirtan.",
        "We choreograph corridor crossings, scholar-led context, and restorative stays so your journey honours both protocol and prayer.",
        "Every itinerary is composed privately—never crowded, never hurried.",
      ],
    },
    featuredDeparture: {
      id: "autumn-departure",
      sectionEyebrow: "Featured departure",
      sectionTitle: "Historic places connected to Guru Nanak",
      sectionLead:
        "Hidden and historic places connected to Guru Nanak Dev Ji. Experience sacred sites, local history, culture, and untold stories with knowledgeable guides while connecting with the spiritual journey and legacy of Guru Nanak Ji.",
      title: "Heritage Package",
      dates: "September 18 – September 25, 2026",
      description:
        "Explore Pakistan's sacred Sikh heritage with guided visits to Lahore, Kartarpur, Nankana Sahib, Eminabad, Sialkot, and Islamabad. Highlights include Gurdwara Darbar Sahib Ji, Gurdwara Janam Asthaan, and Panja Sahib Hassan Abdal. Experience rich culture, spiritual landmarks, and local hospitality with daily vegetarian meals and 3–4-star accommodations. Includes professional Punjabi-speaking staff, private AC transport, and full itinerary-based site access. Ideal for groups of 20+ pilgrims seeking a meaningful darshan yatra at a cost of US$ 1999/person. Includes visa support, all entry fees, and twin-sharing lodging in Lahore & Islamabad.",
      descriptionEmphasis: "US$ 1999/person",
      ctaLabel: "Book Now",
      href: "/#contact",
      image: "/images/banners/autumn-departures-kartarpur-nankana.webp",
      imageAlt:
        "Gurdwara beside a calm river at golden hour—white marble domes, warm sunset reflections, and soft atmospheric light across the water",
    },
    destinationSlugs: [
      "nankana-sahib",
      "kartarpur-sahib",
      "hasan-abdal",
      "eminabad",
    ],
    experiences: [
      {
        title: "Dawn ardas & private darshan",
        description:
          "Morning programmes arranged with discretion—space for worship before the day unfolds.",
      },
      {
        title: "Scholar-led heritage walks",
        description:
          "Janamsakhi and history framed as living geography, offered in whispers rather than lectures.",
      },
      {
        title: "Corridor choreography",
        description:
          "Kartarpur crossings composed with liaison support, briefings, and rested pacing.",
      },
      {
        title: "Evenings of kirtan",
        description:
          "Unscheduled windows for reflection, journal time, or return to the gurdwara at twilight.",
      },
    ],
    imageSpread: {
      eyebrow: "Atmosphere",
      caption:
        "Ivory marble, gold domes, and the particular silence of a faith born in light—this is the visual language of the collection.",
      image: "/images/destinations/nankana-sahib.png",
      imageAlt:
        "Gurdwara Janam Asthan Nankana Sahib in warm daylight—golden dome above white marble",
      objectPosition: "50% 42%",
    },
    cta: {
      eyebrow: "Compose your pilgrimage",
      headline: "Enter the sacred arc with us",
      body:
        "Share who travels, which gurdwaras call to you, and the pace that feels right. A senior curator will return within two studio days.",
    },
  },
  {
    slug: "buddhist-journeys",
    title: "Discover Buddhism in Pakistan",
    shortTitle: "Buddhist Heritage",
    eyebrow: "Collection II",
    atmosphere: "buddhist",
    hero: {
      headline: "Discover Buddhism in Pakistan",
      subheadline:
        "A land rich with ancient Buddhist history, sacred monasteries, and archaeological wonders. From the majestic ruins of Taxila and Takht-i-Bahi to hidden monasteries, stupas, and forgotten Gandharan landscapes, discover the spiritual and historical legacy of Buddhism across Pakistan.",
      image: "/images/collections/buddhist-silk-route.webp",
      imageAlt:
        "Ancient Buddhist monastery at golden hour—seated Buddha statue, stone ruins, snow-capped mountains, and sunset sky",
      objectPosition: "center",
    },
    introduction: {
      eyebrow: "Heritage collection",
      title: "An expedition through Pakistan’s Buddhist past",
      paragraphs: [
        "A land rich with ancient Buddhist history, sacred monasteries, and archaeological wonders. From the majestic ruins of Taxila and Takht-i-Bahi to hidden monasteries, stupas, and forgotten Gandharan landscapes, discover the spiritual and historical legacy of Buddhism across Pakistan.",
      ],
    },
    destinationSlugs: [
      "takht-i-bahi",
      "dharmarajika-stupa",
      "jaulian-monastery",
      "bhamala-stupa",
    ],
    experiences: [
      {
        title: "Monastery immersions",
        description:
          "Access arranged with respect—time for meditation, not photography for its own sake.",
      },
      {
        title: "Gandhara archaeology",
        description:
          "Taxila and museum hours with specialists who read stone as scripture.",
      },
      {
        title: "Highland passages",
        description:
          "Mountain routes composed for comfort, altitude, and unhurried revelation.",
      },
      {
        title: "Tea & manuscript hours",
        description:
          "Private conversations with custodians of oral and material heritage.",
      },
    ],
    imageSpread: {
      eyebrow: "Gandhara & mist",
      caption:
        "Stupa courts, mountain haze, and the patience of centuries—Pakistan’s Buddhist past, composed as a luxury heritage journal.",
      image:
        "https://images.unsplash.com/photo-1528360983277-85fe9d6ad4e4?auto=format&fit=crop&w=2000&q=85",
      imageAlt:
        "Weathered stone Buddhist stupa detail in soft mountain light—earthy tones and ancient texture",
      objectPosition: "50% 45%",
    },
    cta: {
      eyebrow: "Walk the ancient way",
      headline: "Compose your Gandhara arc",
      body:
        "Share your interests—archaeology, meditation, highland sanctuaries—and we will shape a private journey through Pakistan’s Buddhist heritage.",
    },
  },
  {
    slug: "jainism-heritage",
    title: "Discover Jainism in Pakistan",
    shortTitle: "Jain Heritage",
    eyebrow: "Heritage collection",
    atmosphere: "jain",
    hero: {
      headline: "Discover Jainism in Pakistan",
      subheadline:
        "Explore Pakistan's remarkable Jain heritage through ancient temples, sacred pilgrimage routes, intricate architecture, and centuries of spiritual tradition. From historic shrines to forgotten monuments, uncover the enduring legacy of Jain communities across the region.",
      image: "/images/collections/jainism-heritage-hero.jpg",
      imageAlt:
        "Jain Temple Sirkap at golden hour—7th–8th century stone shrine with tiered shikhara, carved pavilion, and warm sunset light across the Taxila valley",
      objectPosition: "62% 42%",
    },
    introduction: {
      eyebrow: "Heritage collection",
      title: "Temples, routes, and a living spiritual legacy",
      paragraphs: [
        "Explore Pakistan's remarkable Jain heritage through ancient temples, sacred pilgrimage routes, intricate architecture, and centuries of spiritual tradition. From historic shrines to forgotten monuments, uncover the enduring legacy of Jain communities across the region.",
      ],
    },
    destinationSlugs: [],
    experiences: [
      {
        title: "Temple & shrine immersions",
        description:
          "Historic Jain sites approached with scholarly context and unhurried time for reflection.",
      },
      {
        title: "Pilgrimage route composition",
        description:
          "Sacred paths across the region, composed privately with local custodians and heritage guides.",
      },
      {
        title: "Architectural heritage walks",
        description:
          "Intricate stone carving, courtyard geometry, and centuries of craft read as living scripture.",
      },
      {
        title: "Manuscript & community hours",
        description:
          "Private conversations with historians and custodians of Jain material and oral heritage.",
      },
    ],
    imageSpread: {
      eyebrow: "Sacred stone",
      caption:
        "Temple courts, carved thresholds, and the patience of centuries—Pakistan's Jain past, composed as a luxury heritage journal.",
      image: "/images/collections/jainism-heritage-hero.jpg",
      imageAlt:
        "Jain Temple Sirkap at golden hour—ancient stone temple and pavilion bathed in warm sunset light",
      objectPosition: "62% 42%",
    },
    cta: {
      eyebrow: "Walk the ancient way",
      headline: "Compose your Jain heritage arc",
      body:
        "Share your interests—temples, pilgrimage routes, architectural history—and we will shape a private journey through Pakistan's Jain heritage.",
    },
  },
  {
    slug: "pakistan-heritage",
    title: "Discover the breathtaking beauty of Northern Pakistan",
    shortTitle: "Northern Pakistan",
    eyebrow: "Collection III",
    atmosphere: "pakistan",
    hero: {
      headline: "Discover the breathtaking beauty of Northern Pakistan",
      subheadline:
        "Home to majestic mountains, crystal-clear lakes, lush green valleys, ancient cultures, and some of the world’s most scenic travel destinations.",
      image: "/images/collections/northern-pakistan-hero.jpg",
      imageAlt:
        "Northern Pakistan valley at golden hour—snow-capped peaks, a turquoise river, evergreen forest, and a traditional lodge terrace overlooking the landscape",
      objectPosition: "48% 42%",
    },
    introduction: {
      eyebrow: "Expedition collection",
      title: "Heritage as adventure, told with grace",
      paragraphs: [
        "Home to majestic mountains, crystal-clear lakes, lush green valleys, ancient cultures, and some of the world’s most scenic travel destinations.",
      ],
    },
    destinationSlugs: ["lahore", "taxila", "hasan-abdal", "eminabad"],
    experiences: [
      {
        title: "Walled-city immersions",
        description:
          "Lahore at golden hour—forts, mosques, and gurdwaras connected by narrative, not noise.",
      },
      {
        title: "Archaeological days",
        description:
          "Taxila and museum access with specialists who make stone feel immediate.",
      },
      {
        title: "Ancestral village extensions",
        description:
          "Optional roots journeys composed separately—with local intelligence and dignity.",
      },
      {
        title: "Chef-led regional tables",
        description:
          "Punjab’s ingredients interpreted in refined settings, never touristic buffets.",
      },
    ],
    imageSpread: {
      eyebrow: "Cinematic heritage",
      caption:
        "Sunset sandstone, old-city lanes, and the texture of centuries—this collection lives in golden hour.",
      image: "/images/destinations/lahore.png",
      imageAlt:
        "Badshahi Mosque Lahore at golden hour—sandstone minarets and dramatic sky",
      objectPosition: "48% 40%",
    },
    cta: {
      eyebrow: "Begin the expedition",
      headline: "Compose your Pakistan heritage arc",
      body:
        "Tell us your interests—architecture, ancestry, archaeology—and we will design days that feel like private editorials.",
    },
  },
  {
    slug: "uae-luxury",
    title: "UAE Luxury Escapes",
    shortTitle: "UAE Luxury",
    eyebrow: "Collection IV",
    atmosphere: "uae",
    hero: {
      headline: "Desert gold, architectural silence",
      subheadline:
        "Dubai and the Emirates—refined resorts, private desert evenings, and modern heritage told with restraint.",
      image: "/images/collections/uae-luxury-escapes.webp",
      imageAlt:
        "Dubai skyline at sunset—Burj Khalifa, Burj Al Arab, Jumeirah coastline, and luxury towers reflected in calm turquoise water",
      objectPosition: "center",
    },
    introduction: {
      eyebrow: "Exclusive collection",
      title: "Modern luxury with editorial calm",
      paragraphs: [
        "This collection speaks a different dialect of beauty—architectural precision, desert horizons, and service that anticipates without intruding.",
        "We pair iconic addresses with private experiences: dhow dinners, design atelier visits, and desert camps arranged as intimate salons rather than tourist spectacles.",
        "The palette is minimal, golden, and confidently contemporary.",
      ],
    },
    destinationSlugs: ["dubai"],
    experiences: [
      {
        title: "Private desert salons",
        description:
          "Evenings composed for twelve or fewer—firelight, silence, and unobtrusive service.",
      },
      {
        title: "Architectural immersions",
        description:
          "Museum and district walks with design historians—not checklist sightseeing.",
      },
      {
        title: "Resort curation",
        description:
          "Properties chosen for discretion, spa restoration, and suites with genuine quiet.",
      },
      {
        title: "Seamless transfers",
        description:
          "Chauffeured movement between emirates—helicopter or sedan, composed to your preference.",
      },
    ],
    imageSpread: {
      eyebrow: "Desert minimalism",
      caption:
        "Black accents, sunset architecture, and the hush of exclusive resorts—luxury as atmosphere, not ornament.",
      image:
        "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=85",
      imageAlt:
        "Luxury desert resort architecture at dusk—clean lines and warm ambient light",
      objectPosition: "50% 42%",
    },
    cta: {
      eyebrow: "Reserve quietly",
      headline: "Compose your Emirates escape",
      body:
        "Share dates, party size, and the mood you seek—urban, desert, or both. Our concierge will respond with a composed proposal.",
    },
  },
];

const collectionBySlug = new Map(
  collectionPages.map((c) => [c.slug, c]),
);

export function getAllCollectionSlugs(): CollectionSlug[] {
  return [...COLLECTION_SLUGS];
}

export function getCollectionBySlug(
  slug: string,
): CollectionPageData | undefined {
  return collectionBySlug.get(slug as CollectionSlug);
}

export const collectionSummaries = collectionPages.map(
  ({
    slug,
    title,
    shortTitle,
    eyebrow,
    atmosphere,
    hero,
    introduction,
  }) => ({
    slug,
    href: `/collections/${slug}` as const,
    title,
    shortTitle,
    eyebrow,
    atmosphere,
    lead: introduction.paragraphs[0],
    image: hero.image,
    imageAlt: hero.imageAlt,
    objectPosition: hero.objectPosition,
  }),
);

export type CollectionSummary = (typeof collectionSummaries)[number];

export const homepageCollectionSummaries = HOMEPAGE_COLLECTION_ORDER.map(
  (slug) => collectionSummaries.find((c) => c.slug === slug)!,
);

export function getCollectionForDestination(
  destinationSlug: string,
): CollectionPageData | undefined {
  const destination = getDestinationBySlug(destinationSlug);
  if (!destination) return undefined;
  return collectionBySlug.get(destination.collectionSlug);
}
