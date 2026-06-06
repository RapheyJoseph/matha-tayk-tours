export const DESTINATION_SLUGS = [
  "lahore",
  "nankana-sahib",
  "kartarpur-sahib",
  "hasan-abdal",
  "eminabad",
  "taxila",
  "takht-i-bahi",
  "dharmarajika-stupa",
  "jaulian-monastery",
  "bhamala-stupa",
  "dubai",
] as const;

export type DestinationSlug = (typeof DESTINATION_SLUGS)[number];

export interface HeritageHighlight {
  category: string;
  title: string;
  description: string;
}

export interface DestinationImageSection {
  image: string;
  imageAlt: string;
  eyebrow?: string;
  caption: string;
  objectPosition?: string;
  variant?: "wide" | "editorial";
}

export interface JourneyMoment {
  time: string;
  title: string;
  description: string;
}

export interface LuxuryDetail {
  title: string;
  description: string;
}

export interface DestinationPageData {
  slug: DestinationSlug;
  collectionSlug:
    | "sikh-heritage"
    | "buddhist-journeys"
    | "jainism-heritage"
    | "uae-luxury"
    | "pakistan-heritage";
  name: string;
  tag: string;
  /** Region label shown on collection chapter cards */
  region?: string;
  lead: string;
  narrative: string;
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
  highlights: HeritageHighlight[];
  imageSections: DestinationImageSection[];
  journey: JourneyMoment[];
  luxuryDetails: LuxuryDetail[];
  cta: {
    eyebrow: string;
    headline: string;
    body: string;
  };
}

const destinationPages: DestinationPageData[] = [
  {
    slug: "nankana-sahib",
    collectionSlug: "sikh-heritage",
    name: "Nankana Sahib",
    tag: "Janam Asthan",
    lead: "Where the first chapter of a faith was written in light, song, and soil.",
    narrative:
      "We arrive before the heat rises—shawls folded, shoes in hand—so the Janam Asthan reveals itself without hurry. Your guide frames the janamsakhi not as folklore, but as living geography you can still walk.",
    hero: {
      headline: "The soil where a path began",
      subheadline:
        "Janam Asthan, measured mornings, and evenings shaped by kirtan—not spectacle.",
      image: "/images/destinations/nankana-sahib.png",
      imageAlt:
        "Gurdwara Janam Asthan Nankana Sahib—golden dome and white marble courtyard in warm daylight",
      objectPosition: "54% 45%",
    },
    introduction: {
      eyebrow: "Sacred origin",
      title: "A pilgrimage composed in stillness",
      paragraphs: [
        "Nankana Sahib is not a monument to photograph and leave. It is the geography of Guru Nanak Dev Ji’s first light—a place where devotion is felt in the hush between ardas and the first notes of kirtan.",
        "We choreograph your days around the rhythm of the sangat: unhurried darshan, scholar-led context at the thresholds that matter, and private space when you need silence more than commentary.",
        "Every crossing, every meal, every rest is arranged so your attention remains where it belongs—in presence, not logistics.",
      ],
    },
    highlights: [
      {
        category: "Architecture",
        title: "Marble thresholds & golden domes",
        description:
          "The Janam Asthan complex reveals itself in layers—courtyards that open to sky, filigree in afternoon light, and the quiet geometry of a space designed for collective remembrance.",
      },
      {
        category: "History",
        title: "Janamsakhi as living map",
        description:
          "Your heritage scholar connects scripture to stone—so the stories of Guru Nanak Dev Ji’s early years feel less like distant myth and more like footsteps you can still trace.",
      },
      {
        category: "Sacred significance",
        title: "The first light of Sikhi",
        description:
          "For many in the diaspora, Nankana is the emotional homecoming. We honour that weight with pacing that never rushes grief, gratitude, or private prayer.",
      },
      {
        category: "Curated experience",
        title: "Dawn ardas & private reflection",
        description:
          "Priority access to morning programmes where possible, followed by unscheduled windows—tea on a terrace, journal time, or simply sitting with the sound of shabads across the lawn.",
      },
    ],
    imageSections: [
      {
        image: "/images/destinations/nankana-sahib.png",
        imageAlt:
          "Gurdwara Janam Asthan Nankana Sahib at golden hour—domes and courtyard in warm light",
        eyebrow: "Atmosphere",
        caption:
          "Golden hour softens the marble—when the Janam Asthan feels most intimate, and the sangat gathers in unhurried circles.",
        objectPosition: "50% 40%",
        variant: "wide",
      },
    ],
    journey: [
      {
        time: "Pre-dawn",
        title: "Arrival in reverence",
        description:
          "Private transfer from Lahore or your corridor point. Light breakfast, briefing on etiquette, and a quiet approach as the complex awakens.",
      },
      {
        time: "Morning",
        title: "Darshan & heritage walk",
        description:
          "Ardas at Janam Asthan, then a measured walk through associated sites with your scholar—context offered in whispers, not lectures.",
      },
      {
        time: "Midday",
        title: "Scholar session & rest",
        description:
          "Curated conversation over langar or a private meal. Afternoon rest at your boutique stay before the heat peaks.",
      },
      {
        time: "Evening",
        title: "Kirtan & reflection",
        description:
          "Return for evening programme or private contemplation on the grounds. The day closes without a forced schedule.",
      },
      {
        time: "Night",
        title: "Restorative stay",
        description:
          "Handpicked accommodation where service is discreet, rooms are cool and quiet, and tomorrow’s pace is already arranged.",
      },
    ],
    luxuryDetails: [
      {
        title: "Boutique stays",
        description:
          "Small properties with gracious Punjabi hospitality—restorative sleep between sacred mornings.",
      },
      {
        title: "Private transport",
        description:
          "Climate-controlled vehicles, experienced drivers, and routes that respect both comfort and corridor timing.",
      },
      {
        title: "Heritage scholars",
        description:
          "Guides who speak with clarity and humility—never performance, always reverence.",
      },
      {
        title: "Concierge coordination",
        description:
          "Documentation, corridor briefings, and sangat logistics handled quietly before you depart.",
      },
    ],
    cta: {
      eyebrow: "Compose your journey",
      headline: "Let Nankana reveal itself at your pace",
      body:
        "Share who travels, your preferred season, and the gurdwaras that call to you. A senior curator will return with a composed proposal within two studio days.",
    },
  },
  {
    slug: "kartarpur-sahib",
    collectionSlug: "sikh-heritage",
    name: "Kartarpur Sahib",
    tag: "Guru’s final years",
    lead: "A riverbank where time thins—and devotion feels almost audible.",
    narrative:
      "The Ravi has shifted; the sangat has not. We choreograph corridor crossings so you meet Kartarpur with rested eyes, then linger in the stillness Guru Nanak Dev Ji chose for his final years.",
    hero: {
      headline: "Where the Guru chose stillness",
      subheadline:
        "Corridor crossings composed with care—so Kartarpur meets you rested, not rushed.",
      image: "/images/destinations/kartarpur-sahib.png",
      imageAlt:
        "Gurdwara Darbar Sahib Kartarpur at twilight—illuminated marble, golden dome, and courtyard reflections",
      objectPosition: "50% 38%",
    },
    introduction: {
      eyebrow: "Corridor of devotion",
      title: "A passage designed for presence",
      paragraphs: [
        "Kartarpur Sahib holds a particular stillness—the place where Guru Nanak Dev Ji spent his final years, where the river once ran close and the sangat gathered in simplicity.",
        "The corridor has made this threshold accessible to many; our role is to ensure accessibility never becomes haste. We coordinate crossings, briefings, and on-ground liaison so your first view of Darbar Sahib is composed, not chaotic.",
        "You arrive with rested eyes. You leave with time unaccounted for—because some moments refuse to be scheduled.",
      ],
    },
    highlights: [
      {
        category: "Architecture",
        title: "Darbar Sahib at twilight",
        description:
          "White marble luminous against evening sky—the dome, the courtyard, the reflections that make Kartarpur feel suspended between earth and light.",
      },
      {
        category: "History",
        title: "The Guru’s final chapter",
        description:
          "Context on Guru Nanak Dev Ji’s years here, the shifting Ravi, and why this site remains among the most emotionally charged in the Panth.",
      },
      {
        category: "Sacred significance",
        title: "Corridor as pilgrimage",
        description:
          "We navigate protocols with discretion—so your crossing feels like a threshold, not a transaction.",
      },
      {
        category: "Curated experience",
        title: "Liaison & quiet luxury",
        description:
          "On-ground spiritual liaison, priority coordination where possible, and seamless connection to Lahore or Nankana within the same journey arc.",
      },
    ],
    imageSections: [
      {
        image: "/images/destinations/kartarpur-sahib.png",
        imageAlt:
          "Gurdwara Darbar Sahib Kartarpur at twilight—illuminated courtyard and golden dome",
        eyebrow: "Twilight",
        caption:
          "When marble catches the last light and the courtyard stills—the hour we protect for unhurried darshan.",
        objectPosition: "50% 36%",
        variant: "wide",
      },
    ],
    journey: [
      {
        time: "Dawn",
        title: "Corridor briefing",
        description:
          "Clear guidance on documentation, timing, and etiquette—so the crossing itself feels calm and dignified.",
      },
      {
        time: "Morning",
        title: "Crossing & first darshan",
        description:
          "Coordinated passage to Kartarpur. Your liaison meets you on arrival; the first walk to Darbar Sahib is unhurried.",
      },
      {
        time: "Midday",
        title: "Courtyard & langar",
        description:
          "Time within the complex—darshan, langar, private reflection. No forced movement between checkpoints.",
      },
      {
        time: "Afternoon",
        title: "Scholar conversation",
        description:
          "Optional session on Kartarpur’s history and the Guru’s final years—held away from crowds, in a quiet setting.",
      },
      {
        time: "Evening",
        title: "Return or linger",
        description:
          "Same-day return or overnight stay nearby, depending on your composed itinerary and corridor windows.",
      },
    ],
    luxuryDetails: [
      {
        title: "Corridor coordination",
        description:
          "Priority guidance, timing intelligence, and liaison support from briefing through return.",
      },
      {
        title: "Lahore & surrounds",
        description:
          "Quiet luxury stays when your arc includes the city—restorative bases between sacred days.",
      },
      {
        title: "Spiritual liaison",
        description:
          "On-ground contact who understands both protocol and the emotional weight of the visit.",
      },
      {
        title: "Private transport",
        description:
          "Door-to-corridor and return—climate-controlled, discreet, and timed to your crossing slot.",
      },
    ],
    cta: {
      eyebrow: "Begin quietly",
      headline: "Compose your Kartarpur passage",
      body:
        "Tell us your passport, dates, and who travels. We will shape corridor timing, liaison, and stays into one reverent arc.",
    },
  },
  {
    slug: "lahore",
    collectionSlug: "pakistan-heritage",
    name: "Lahore",
    tag: "Culture & courts",
    lead: "A city of courts and courtyards—where Sikh memory rests inside Mughal stone.",
    narrative:
      "Beyond postcard monuments, we open private doors: manuscript rooms, hushed museum hours, and walks that connect Ranjit Singh’s Lahore to the neighbourhoods where sangat still gathers.",
    hero: {
      headline: "Courts, courtyards, and memory",
      subheadline:
        "Ranjit Singh’s Lahore, Mughal stone, and private doors opened for the discerning sangat.",
      image: "/images/destinations/lahore.png",
      imageAlt:
        "Badshahi Mosque Lahore at golden hour—sandstone minarets, marble domes, and cinematic sunset sky",
      objectPosition: "48% 38%",
    },
    introduction: {
      eyebrow: "Imperial & spiritual",
      title: "A city read slowly, with scholarly grace",
      paragraphs: [
        "Lahore is the hinge of most journeys—where Mughal grandeur and Sikh sovereignty share the same skyline. The Badshahi Mosque and the Lahore Fort are not backdrops; they are chapters in a longer story your guide helps you read.",
        "We avoid the hurried tour-bus rhythm. Instead: private museum hours, walks through neighbourhoods where gurdwaras still anchor community, and meals that taste of the region’s complexity—refined, never touristic.",
        "Whether Lahore is your base for Nankana and Kartarpur or a cultural immersion in its own right, the pace remains editorial—calm, curious, and never performative.",
      ],
    },
    highlights: [
      {
        category: "Architecture",
        title: "Mughal mastery & Sikh courts",
        description:
          "Badshahi Mosque, Lahore Fort, and the architectural dialogue between empires—experienced with context, not crowds.",
      },
      {
        category: "History",
        title: "Ranjit Singh’s capital",
        description:
          "The Maharaja’s Lahore lives in archives, armouries, and stories your scholar connects to the present sangat.",
      },
      {
        category: "Sacred significance",
        title: "Gurdwaras within the walled city",
        description:
          "Sites of memory and gathering—approached with the same reverence we bring to rural Punjab.",
      },
      {
        category: "Curated experience",
        title: "Private art & manuscript viewings",
        description:
          "Where possible, after-hours access and conversations with custodians who treat heritage as trust, not spectacle.",
      },
    ],
    imageSections: [
      {
        image: "/images/destinations/lahore.png",
        imageAlt:
          "Badshahi Mosque Lahore at golden hour—minarets and domes against a dramatic sky",
        eyebrow: "Golden hour",
        caption:
          "Sandstone catches the last sun—a moment we schedule deliberately, away from peak crowds.",
        objectPosition: "50% 40%",
        variant: "wide",
      },
    ],
    journey: [
      {
        time: "Morning",
        title: "Fort & mosque immersions",
        description:
          "Early access where arranged. Measured walks with architectural context—not a checklist of photo stops.",
      },
      {
        time: "Midday",
        title: "Chef-led tasting",
        description:
          "Regional flavours in a refined setting—Punjab’s table as cultural narrative, not fuel between sites.",
      },
      {
        time: "Afternoon",
        title: "Gurdwara & neighbourhood walk",
        description:
          "Connect walled-city history to living community—gurdwaras, lanes, and the stories elders still tell.",
      },
      {
        time: "Evening",
        title: "Manuscript or museum hour",
        description:
          "Private viewing when available—a quiet encounter with objects that carry the Panth’s material memory.",
      },
      {
        time: "Night",
        title: "Boutique restoration",
        description:
          "Return to a handpicked stay where tomorrow’s departures—to corridor or countryside—are already composed.",
      },
    ],
    luxuryDetails: [
      {
        title: "Boutique hotels",
        description:
          "Properties chosen for service, silence, and location—your Lahore base between sacred days.",
      },
      {
        title: "Private guides",
        description:
          "Art historians and heritage scholars who open the city with discretion and depth.",
      },
      {
        title: "Dining curation",
        description:
          "Reservations at tables that honour Punjab’s ingredients without tourist cliché.",
      },
      {
        title: "Journey orchestration",
        description:
          "Lahore as hub—corridor, Nankana, and village days woven into one seamless arc.",
      },
    ],
    cta: {
      eyebrow: "Open the city",
      headline: "Compose your Lahore chapter",
      body:
        "Share your interests—architecture, ancestry, cuisine, or corridor—and we will design days that feel like a private editorial, not a tour.",
    },
  },
  {
    slug: "hasan-abdal",
    collectionSlug: "sikh-heritage",
    name: "Hasan Abdal",
    tag: "Panja Sahib",
    lead: "A mountainside imprint—small in scale, infinite in meaning.",
    narrative:
      "Panja Sahib asks for reverence, not spectacle. We approach with context, space for ardas, and routes that respect both pilgrims and the quiet dignity of the hills.",
    hero: {
      headline: "An imprint held in stone",
      subheadline:
        "Panja Sahib—where scale is modest, meaning is boundless, and approach demands reverence.",
      image: "/images/destinations/hasan-abdal.png",
      imageAlt:
        "Gurdwara Panja Sahib Hasan Abdal at golden hour—ivory architecture, stone bridge, and mountain backdrop",
      objectPosition: "48% 40%",
    },
    introduction: {
      eyebrow: "Mountain sanctuary",
      title: "Pilgrimage without spectacle",
      paragraphs: [
        "Hasan Abdal rises where hills meet horizon—home to Gurdwara Panja Sahib and the sacred imprint that has drawn sangat for generations. This is not a site that rewards loud tourism; it rewards preparation, context, and space for ardas.",
        "We coordinate approaches that respect both the gurdwara’s dignity and the rhythm of fellow pilgrims. Your scholar frames the story of Guru Nanak Dev Ji and Bhai Mardana here—not as anecdote, but as theology written in stone.",
        "The journey feels smaller in scale than Lahore or Kartarpur, but often larger in the heart. We keep it that way.",
      ],
    },
    highlights: [
      {
        category: "Architecture",
        title: "Ivory façades & mountain light",
        description:
          "The gurdwara’s presence against the hills—bridges, water, and the particular gold of sunset on white stone.",
      },
      {
        category: "History",
        title: "The Panja Sahib tradition",
        description:
          "The narrative of the rock, the Guru’s hand, and centuries of sangat who have climbed to this threshold.",
      },
      {
        category: "Sacred significance",
        title: "Reverence over display",
        description:
          "We build time for ardas and silence—never treating Panja Sahib as a stop on a crowded circuit.",
      },
      {
        category: "Curated experience",
        title: "Hill routes & pilgrim pacing",
        description:
          "Accessible paths, rest points, and transport that honours elders and young children alike.",
      },
    ],
    imageSections: [
      {
        image: "/images/destinations/hasan-abdal.png",
        imageAlt:
          "Gurdwara Panja Sahib Hasan Abdal—ivory architecture and river reflections at golden hour",
        eyebrow: "Sanctuary",
        caption:
          "Water, stone, and mountain air—the triad that makes Hasan Abdal feel removed from the world’s hurry.",
        objectPosition: "50% 42%",
        variant: "wide",
      },
    ],
    journey: [
      {
        time: "Morning",
        title: "Approach from Islamabad or Lahore",
        description:
          "Private transfer with briefing en route. Light refreshment before the final ascent to the complex.",
      },
      {
        time: "Late morning",
        title: "Darshan & ardas",
        description:
          "Unhurried time at Panja Sahib. Your guide offers context, then steps back for personal worship.",
      },
      {
        time: "Midday",
        title: "Langar & reflection",
        description:
          "Shared meal in the spirit of the sangat. Afternoon option for quiet walking near the water.",
      },
      {
        time: "Afternoon",
        title: "Scholar session",
        description:
          "Conversation on the site’s history—held in a calm setting, away from the main flow of pilgrims.",
      },
      {
        time: "Evening",
        title: "Return in stillness",
        description:
          "Descent and transfer to your base. The day closes without stacking another site on fatigue.",
      },
    ],
    luxuryDetails: [
      {
        title: "Accessible transport",
        description:
          "Vehicles and routing that reduce strain for elders—without removing the sense of pilgrimage.",
      },
      {
        title: "Heritage guidance",
        description:
          "Scholars who understand both theology and the practical dignity of crowded sacred days.",
      },
      {
        title: "Regional stays",
        description:
          "Boutique bases in Islamabad or Lahore—composed as part of a longer Punjab arc.",
      },
      {
        title: "Private coordination",
        description:
          "Timing, etiquette, and crowd intelligence handled before you arrive at the hills.",
      },
    ],
    cta: {
      eyebrow: "Approach with care",
      headline: "Compose your Hasan Abdal day",
      body:
        "Tell us who travels and how you wish to pace the hills. We will shape a day that honours Panja Sahib’s quiet gravity.",
    },
  },
  {
    slug: "eminabad",
    collectionSlug: "pakistan-heritage",
    name: "Eminabad",
    tag: "Guru Hargobind Sahib",
    lead: "Lanes where resilience is remembered in whispers, not headlines.",
    narrative:
      "Eminabad rewards slow footsteps. We pair you with custodians of oral history—so the gurdwara’s stones feel less like a stop, and more like a conversation across generations.",
    hero: {
      headline: "Memory carried in quiet lanes",
      subheadline:
        "Guru Ka Bagh and the stories custodians still tell—at the pace conversation requires.",
      image: "/images/destinations/eminabad.webp",
      imageAlt:
        "Eminabad Guru Ka Bagh at golden hour—white heritage gateway and sunlit pathway through trees",
      objectPosition: "46% 40%",
    },
    introduction: {
      eyebrow: "Living history",
      title: "A village that rewards slowness",
      paragraphs: [
        "Eminabad is not framed for mass tourism—and that is its gift. Guru Ka Bagh and the surrounding lanes hold memories of Guru Hargobind Sahib and the resilience of a community that endured and rebuilt.",
        "We introduce you to custodians of oral history—people who speak not from scripts but from inheritance. The gurdwara’s stones become a doorway into conversation across generations.",
        "This is a day for slow footsteps, unhurried photography, and the kind of discovery that cannot be scheduled on a spreadsheet—only invited.",
      ],
    },
    highlights: [
      {
        category: "Architecture",
        title: "Heritage gateways & pathways",
        description:
          "White archways, tree-lined approaches, and the particular warmth of evening light through dust and leaves.",
      },
      {
        category: "History",
        title: "Guru Hargobind Sahib’s legacy",
        description:
          "The sixth Guru’s presence here—context that connects personal devotion to collective survival.",
      },
      {
        category: "Sacred significance",
        title: "Oral history as scripture",
        description:
          "Meetings with local custodians who treat storytelling as seva—not performance for visitors.",
      },
      {
        category: "Curated experience",
        title: "Village immersion",
        description:
          "Optional extensions to ancestral villages nearby—composed for families tracing their own maps home.",
      },
    ],
    imageSections: [
      {
        image: "/images/destinations/eminabad.webp",
        imageAlt:
          "Eminabad Guru Ka Bagh—heritage gateway and golden pathway at dusk",
        eyebrow: "Pathway",
        caption:
          "The walk in matters as much as the arrival—light through trees, dust in gold, silence ahead.",
        objectPosition: "48% 42%",
        variant: "wide",
      },
    ],
    journey: [
      {
        time: "Morning",
        title: "Drive through Punjab",
        description:
          "Scenic transfer from Lahore or Gujranwala. En-route briefing on Eminabad’s place in the Panth’s story.",
      },
      {
        time: "Late morning",
        title: "Guru Ka Bagh",
        description:
          "Darshan and time on the grounds. Your guide introduces custodians when appropriate—always with permission and respect.",
      },
      {
        time: "Midday",
        title: "Oral history encounter",
        description:
          "Conversation in a shaded setting—stories of resilience, rebuild, and the sangat that remained.",
      },
      {
        time: "Afternoon",
        title: "Lane walk & photography",
        description:
          "Slow exploration of surrounding lanes—optional, never forced. Space for personal connection.",
      },
      {
        time: "Evening",
        title: "Return to Lahore",
        description:
          "Transfer to your boutique base. The day remains singular—never compressed into a crowded circuit.",
      },
    ],
    luxuryDetails: [
      {
        title: "Village coordination",
        description:
          "Introductions arranged with dignity—never treating residents as exhibits.",
      },
      {
        title: "Family ancestry",
        description:
          "Optional village days for guests tracing lineage—composed separately, with local intelligence.",
      },
      {
        title: "Private transport",
        description:
          "Comfortable vehicles for rural roads—experienced drivers who know the pace of pilgrimage.",
      },
      {
        title: "Scholar companions",
        description:
          "Guides who translate context without overshadowing personal discovery.",
      },
    ],
    cta: {
      eyebrow: "Walk slowly",
      headline: "Invite Eminabad into your arc",
      body:
        "Share whether you seek a single contemplative day or a family roots journey. We will compose it with the village’s quiet dignity intact.",
    },
  },
  {
    slug: "taxila",
    collectionSlug: "buddhist-journeys",
    name: "Taxila",
    tag: "Gandhara & the Silk Route",
    lead: "Stone that remembers empires—Buddhist, Greek, and Gandharan light in one valley.",
    narrative:
      "Taxila rewards the patient eye. We walk the ruins with archaeologists who treat every stupa and frieze as part of a continuing story—not a museum exhibit behind rope.",
    hero: {
      headline: "Where empires left their light in stone",
      subheadline:
        "Gandhara archaeology, monastery silence, and scholar-led context across the valley.",
      image:
        "https://images.unsplash.com/photo-1589308079984-d6e2e29a0940?auto=format&fit=crop&w=2200&q=85",
      imageAlt:
        "Ancient Taxila archaeological ruins at golden hour—weathered stone and warm desert light",
      objectPosition: "50% 42%",
    },
    introduction: {
      eyebrow: "Ancient valley",
      title: "Archaeology composed as contemplation",
      paragraphs: [
        "Taxila is among the great crossroads of the Buddhist world—where Gandhara art flourished and the Silk Route moved ideas as much as goods.",
        "Our days here are measured: morning immersions in the ruins, afternoon museum conversations, evenings for rest and reflection away from crowds.",
        "You leave with stone etched in memory—not photographs rushed between bus stops.",
      ],
    },
    highlights: [
      {
        category: "Architecture",
        title: "Stupas & monastic terraces",
        description:
          "Layers of Buddhist, Persian, and Hellenistic influence—read slowly with expert context.",
      },
      {
        category: "History",
        title: "Gandhara civilisation",
        description:
          "The valley as living textbook—empires, trade, and the spread of dharma westward.",
      },
      {
        category: "Sacred significance",
        title: "Buddhist pilgrimage",
        description:
          "Approached with the same reverence we bring to gurdwaras—space for silence and study.",
      },
      {
        category: "Curated experience",
        title: "Private museum hours",
        description:
          "Where possible, after-hours access to collections that rarely meet the public eye.",
      },
    ],
    imageSections: [
      {
        image:
          "https://images.unsplash.com/photo-1528360983277-85fe9d6ad4e4?auto=format&fit=crop&w=2000&q=85",
        imageAlt: "Weathered Buddhist stone relief in soft mountain light",
        eyebrow: "Texture",
        caption:
          "Earthy stone, patient light—the visual rhythm of Taxila is ancient and unhurried.",
        objectPosition: "50% 45%",
        variant: "wide",
      },
    ],
    journey: [
      {
        time: "Morning",
        title: "Valley approach",
        description:
          "Private transfer from Islamabad or Lahore with en-route briefing on Gandhara history.",
      },
      {
        time: "Late morning",
        title: "Ruins immersion",
        description:
          "Measured walk through key sites—context offered, then space for personal observation.",
      },
      {
        time: "Midday",
        title: "Museum conversation",
        description:
          "Curated session with a specialist amid sculpture and manuscript fragments.",
      },
      {
        time: "Afternoon",
        title: "Tea & reflection",
        description:
          "Quiet setting away from crowds—journal time or continued dialogue as you prefer.",
      },
      {
        time: "Evening",
        title: "Return to base",
        description:
          "Transfer to your boutique stay in Islamabad or Lahore—tomorrow composed separately.",
      },
    ],
    luxuryDetails: [
      {
        title: "Scholar guides",
        description:
          "Archaeologists and historians who speak with clarity, never performance.",
      },
      {
        title: "Private transport",
        description:
          "Climate-controlled vehicles for valley roads—comfort without removing the sense of expedition.",
      },
      {
        title: "Regional stays",
        description:
          "Boutique bases in Islamabad or Lahore as part of a longer heritage arc.",
      },
      {
        title: "Expedition pacing",
        description:
          "One significant site per day when preferred—fatigue never competes with wonder.",
      },
    ],
    cta: {
      eyebrow: "Read the stone",
      headline: "Compose your Taxila chapter",
      body:
        "Share your interests—Buddhist history, archaeology, photography—and we will shape a private valley day.",
    },
  },
  {
    slug: "takht-i-bahi",
    collectionSlug: "buddhist-journeys",
    name: "Takht-i-Bahi",
    tag: "UNESCO Gandhara Heritage",
    region: "Khyber Pakhtunkhwa",
    lead: "A remarkably preserved 1st-century Buddhist monastery perched high above Mardan—stone courtyards, meditation chambers, and ancient stupas untouched by time.",
    narrative:
      "We ascend to Takht-i-Bahi with unhurried reverence—scholar guides framing each terrace as part of a living Gandharan story, not a ruin to rush through.",
    hero: {
      headline: "A monastery suspended above the valley",
      subheadline:
        "UNESCO stone, mountain air, and the silence of meditation chambers still legible in light.",
      image: "/images/destinations/takht-i-bahi.jpg",
      imageAlt:
        "Takht-i-Bahi monastery courtyard—ancient stone stupas, arched chambers, and Gandharan ruins overlooking green hills at golden hour",
      objectPosition: "50% 42%",
    },
    introduction: {
      eyebrow: "UNESCO sanctuary",
      title: "Stone that outlived empires",
      paragraphs: [
        "Takht-i-Bahi is among the most complete Buddhist monastic complexes in South Asia—a hilltop world of courtyards, cells, and stupas that still reads as sacred geography.",
        "We compose your visit for clarity and contemplation: measured ascents, expert context, and time alone among terraces where monks once walked.",
        "The experience is archaeological, spiritual, and profoundly still.",
      ],
    },
    highlights: [
      {
        category: "Architecture",
        title: "Hilltop monastic terraces",
        description:
          "Layered stone courts and meditation chambers—Gandharan craft read with specialist guides.",
      },
      {
        category: "History",
        title: "First-century foundations",
        description:
          "A UNESCO testament to Buddhism’s northwestern flowering—context without spectacle.",
      },
      {
        category: "Sacred significance",
        title: "Living silence",
        description:
          "Space for personal reflection between scholar-led passages through the complex.",
      },
      {
        category: "Curated experience",
        title: "Private pacing",
        description:
          "Early-morning or late-afternoon immersions when light and crowd favour reverence.",
      },
    ],
    imageSections: [
      {
        image: "/images/destinations/takht-i-bahi.jpg",
        imageAlt:
          "Takht-i-Bahi monastery courtyard with stone stupas and hilltop ruins in warm afternoon light",
        eyebrow: "Elevation",
        caption:
          "Above Mardan—the valley falls away; stone endures in mountain air.",
        objectPosition: "50% 42%",
        variant: "wide",
      },
    ],
    journey: [
      {
        time: "Morning",
        title: "Valley approach",
        description:
          "Private transfer from Islamabad or Peshawar with briefing on Gandhara history.",
      },
      {
        time: "Late morning",
        title: "Monastery ascent",
        description:
          "Measured walk through courtyards and stupas—context, then personal silence.",
      },
      {
        time: "Midday",
        title: "Scholar conversation",
        description:
          "Tea and dialogue on UNESCO conservation and monastic life in Gandhara.",
      },
      {
        time: "Afternoon",
        title: "Terrace reflection",
        description:
          "Unscheduled time among stone before a gentle descent.",
      },
      {
        time: "Evening",
        title: "Return to base",
        description:
          "Transfer to your boutique stay—tomorrow composed to your arc.",
      },
    ],
    luxuryDetails: [
      {
        title: "Archaeology guides",
        description:
          "Historians who honour both scholarship and the sanctity of the site.",
      },
      {
        title: "Private transport",
        description:
          "Comfortable vehicles for mountain roads—quiet, climate-controlled.",
      },
      {
        title: "Regional stays",
        description:
          "Curated bases in Islamabad or Peshawar within a longer heritage journey.",
      },
      {
        title: "Expedition pacing",
        description:
          "One profound site per day when preferred—never tour-bus haste.",
      },
    ],
    cta: {
      eyebrow: "Ascend in stillness",
      headline: "Compose your Takht-i-Bahi chapter",
      body:
        "Share your dates and interests—we will shape a private monastery day with scholar companions.",
    },
  },
  {
    slug: "dharmarajika-stupa",
    collectionSlug: "buddhist-journeys",
    name: "Dharmarajika Stupa",
    tag: "Sacred Buddhist Relics",
    region: "Taxila, Punjab",
    lead: "One of the oldest Buddhist stupas in Taxila, originally built by Emperor Ashoka to house sacred relics of Lord Buddha.",
    narrative:
      "Dharmarajika rewards patience—Ashokan stone, relic history, and the warm sandstone light of a valley that shaped Buddhism’s westward path.",
    hero: {
      headline: "Ashoka’s stone, Buddha’s relics",
      subheadline:
        "Among Taxila’s oldest stupas—sacred archaeology composed with scholar depth.",
      image: "/images/destinations/dharmarajika-stupa.jpg",
      imageAlt:
        "Aerial view of Dharmarajika Stupa at Taxila—central stone dome surrounded by ancient votive stupas and ruins in a green valley",
      objectPosition: "50% 42%",
    },
    introduction: {
      eyebrow: "Ashokan legacy",
      title: "Relics in sandstone light",
      paragraphs: [
        "The Dharmarajika Stupa stands at the heart of Taxila’s Buddhist inheritance—commissioned in the Ashokan age to enshrine sacred relics.",
        "We walk its circumference with archaeologists who treat every course of stone as testimony, not backdrop.",
        "Your day balances museum context, ruin immersion, and the unhurried rhythm this valley demands.",
      ],
    },
    highlights: [
      {
        category: "Architecture",
        title: "Stupa circumference",
        description:
          "Ashokan foundations and later Gandharan layers—read stone by stone.",
      },
      {
        category: "History",
        title: "Emperor Ashoka",
        description:
          "The spread of dharma westward—relics, empire, and sacred geography.",
      },
      {
        category: "Sacred significance",
        title: "Relic sanctuary",
        description:
          "Approached with the reverence due a site that held the Buddha’s remains.",
      },
      {
        category: "Curated experience",
        title: "Taxila in context",
        description:
          "Combined with museum hours and companion sites across the valley.",
      },
    ],
    imageSections: [
      {
        image: "/images/destinations/dharmarajika-stupa.jpg",
        imageAlt:
          "Dharmarajika Stupa complex—main hemispherical stupa and surrounding stone foundations in bright valley light",
        eyebrow: "Sandstone",
        caption:
          "Terracotta warmth, patient centuries—the stupa endures in valley light.",
        objectPosition: "50% 42%",
        variant: "wide",
      },
    ],
    journey: [
      {
        time: "Morning",
        title: "Taxila approach",
        description:
          "Transfer with briefing on Ashoka, relics, and Gandhara chronology.",
      },
      {
        time: "Late morning",
        title: "Stupa immersion",
        description:
          "Circumambulation and context—then space for private observation.",
      },
      {
        time: "Midday",
        title: "Museum session",
        description:
          "Curated time with sculpture and fragments that illuminate the site.",
      },
      {
        time: "Afternoon",
        title: "Valley companion sites",
        description:
          "Optional linked ruins composed without crowding the day.",
      },
      {
        time: "Evening",
        title: "Return",
        description:
          "Quiet transfer to Islamabad or Lahore—reflection encouraged.",
      },
    ],
    luxuryDetails: [
      {
        title: "Scholar guides",
        description:
          "Archaeologists fluent in Buddhist history and Gandhara material culture.",
      },
      {
        title: "Private transport",
        description:
          "Valley roads in comfort—sedan or SUV to your party’s preference.",
      },
      {
        title: "Museum access",
        description:
          "Measured hours at Taxila Museum with specialist narration.",
      },
      {
        title: "Composed pacing",
        description:
          "Fatigue never competes with wonder—rest built into the arc.",
      },
    ],
    cta: {
      eyebrow: "Walk the circumference",
      headline: "Compose your Dharmarajika day",
      body:
        "Tell us your interests in relic history and archaeology—we will shape a private Taxila chapter.",
    },
  },
  {
    slug: "jaulian-monastery",
    collectionSlug: "buddhist-journeys",
    name: "Jaulian Monastery",
    tag: "Ancient Buddhist University",
    region: "Taxila, Punjab",
    lead: "An exceptionally preserved Buddhist learning center featuring serene courtyards, detailed stucco reliefs, and meditative stone chapels.",
    narrative:
      "Jaulian reveals Gandhara at human scale—chapels, reliefs, and courtyards where learning and meditation once shared the same breath.",
    hero: {
      headline: "Where monks studied in stone light",
      subheadline:
        "Stucco Buddha, quiet courts, and the atmosphere of an ancient university restored to calm.",
      image:
        "https://images.unsplash.com/photo-1548013304-b4ccf7150b0e?auto=format&fit=crop&w=2200&q=85",
      imageAlt:
        "Gandharan monastery complex with carved Buddha imagery and peaceful stone corridors in warm light",
      objectPosition: "50% 42%",
    },
    introduction: {
      eyebrow: "Monastic learning",
      title: "Courtyards of contemplation",
      paragraphs: [
        "Jaulian is among Taxila’s most eloquent ruins—a monastery complex where stucco Buddhas and chapel niches still speak across centuries.",
        "We guide you through its courts with specialists who read relief and plan as chapters of monastic life.",
        "The mood is scholarly, serene, and warmly lit by Punjab’s golden hours.",
      ],
    },
    highlights: [
      {
        category: "Architecture",
        title: "Stucco reliefs",
        description:
          "Fine Gandharan carving in chapel niches—detail revealed with expert light and context.",
      },
      {
        category: "History",
        title: "Buddhist university",
        description:
          "A centre of learning on the Silk Route’s intellectual map.",
      },
      {
        category: "Sacred significance",
        title: "Meditative chapels",
        description:
          "Stone chambers that still invite silence after the commentary ends.",
      },
      {
        category: "Curated experience",
        title: "Taxila pairing",
        description:
          "Naturally composed with Dharmarajika and valley museum hours.",
      },
    ],
    imageSections: [
      {
        image:
          "https://images.unsplash.com/photo-1548013304-b4ccf7150b0e?auto=format&fit=crop&w=2000&q=85",
        imageAlt:
          "Ancient Buddhist stucco relief and monastery stone in soft spiritual light",
        eyebrow: "Relief",
        caption:
          "Stucco still bears expression—Gandhara’s hand visible in afternoon gold.",
        objectPosition: "50% 40%",
        variant: "wide",
      },
    ],
    journey: [
      {
        time: "Morning",
        title: "Valley transfer",
        description:
          "Approach Jaulian with historical framing en route from your base city.",
      },
      {
        time: "Late morning",
        title: "Monastery walk",
        description:
          "Courtyards, chapels, and reliefs—scholar context, then private time.",
      },
      {
        time: "Midday",
        title: "Stucco study",
        description:
          "Close reading of carving and iconography with your guide.",
      },
      {
        time: "Afternoon",
        title: "Linked sites",
        description:
          "Optional continuation to companion Taxila ruins as energy allows.",
      },
      {
        time: "Evening",
        title: "Return to base",
        description:
          "Transfer to Islamabad or Lahore—evening at your discretion.",
      },
    ],
    luxuryDetails: [
      {
        title: "Art historians",
        description:
          "Guides who read Gandharan stucco as fluently as scripture.",
      },
      {
        title: "Private pacing",
        description:
          "No crowded coaches—your party, your rhythm.",
      },
      {
        title: "Photography windows",
        description:
          "Timing composed for warm light on stone and relief.",
      },
      {
        title: "Regional logistics",
        description:
          "Seamless coordination within a longer Buddhist heritage arc.",
      },
    ],
    cta: {
      eyebrow: "Enter the courts",
      headline: "Compose your Jaulian chapter",
      body:
        "Share whether you seek art history, meditation, or a full Taxila day—we will design accordingly.",
    },
  },
  {
    slug: "bhamala-stupa",
    collectionSlug: "buddhist-journeys",
    name: "Bhamala Stupa",
    tag: "Nirvana Buddha Site",
    region: "Khyber Pakhtunkhwa",
    lead: "A sacred Buddhist site near Haripur known for its rare Sleeping Buddha sculpture and striking ancient architecture.",
    narrative:
      "Bhamala holds one of Gandhara’s most poignant images—the Sleeping Buddha—stone and river light composing a chapter of rare archaeological grace.",
    hero: {
      headline: "The Sleeping Buddha in river light",
      subheadline:
        "Near Haripur—a stupa complex where nirvana iconography meets hill and water.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2200&q=85",
      imageAlt:
        "Ancient Buddhist stupa ruins near hills with soft atmospheric light and archaeological textures",
      objectPosition: "50% 44%",
    },
    introduction: {
      eyebrow: "Sacred sculpture",
      title: "Nirvana in stone",
      paragraphs: [
        "Bhamala is distinguished by its Sleeping Buddha—a Gandharan masterpiece that transforms archaeological visit into quiet encounter.",
        "We approach with scholars who frame the site’s sculpture, stupa form, and landscape as one continuous narrative.",
        "Hills, river atmosphere, and ancient texture make this among the collection’s most cinematic chapters.",
      ],
    },
    highlights: [
      {
        category: "Architecture",
        title: "Stupa complex",
        description:
          "Ancient forms set against Khyber Pakhtunkhwa’s hills and river valleys.",
      },
      {
        category: "History",
        title: "Sleeping Buddha",
        description:
          "Rare nirvana iconography—context that deepens rather than distances.",
      },
      {
        category: "Sacred significance",
        title: "Haripur sanctuary",
        description:
          "A site approached with the gravity due sacred sculpture and relic tradition.",
      },
      {
        category: "Curated experience",
        title: "Northern arc",
        description:
          "Composed with Takht-i-Bahi or Islamabad bases within a private journey.",
      },
    ],
    imageSections: [
      {
        image:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=2000&q=85",
        imageAlt:
          "Weathered stupa ruins with hills and soft river-valley atmospheric light",
        eyebrow: "Landscape",
        caption:
          "Hills hold the horizon; stone holds the story—Bhamala in evening calm.",
        objectPosition: "50% 42%",
        variant: "wide",
      },
    ],
    journey: [
      {
        time: "Morning",
        title: "Haripur approach",
        description:
          "Private transfer with briefing on the Sleeping Buddha and site history.",
      },
      {
        time: "Late morning",
        title: "Stupa immersion",
        description:
          "Complex walk with scholar context—sculpture, form, and landscape.",
      },
      {
        time: "Midday",
        title: "Sculpture study",
        description:
          "Dedicated time at the nirvana image and related remains.",
      },
      {
        time: "Afternoon",
        title: "Valley light",
        description:
          "Photography and reflection as atmospheric conditions allow.",
      },
      {
        time: "Evening",
        title: "Return",
        description:
          "Transfer to Islamabad or onward—pacing honours your energy.",
      },
    ],
    luxuryDetails: [
      {
        title: "Specialist guides",
        description:
          "Experts in Gandharan sculpture and Khyber Pakhtunkhwa archaeology.",
      },
      {
        title: "Private vehicles",
        description:
          "Comfort for river-valley roads—discreet, well-maintained fleet.",
      },
      {
        title: "Northern composition",
        description:
          "Linked days with Takht-i-Bahi when your arc seeks depth.",
      },
      {
        title: "Contemplative pacing",
        description:
          "Silence built in—never a checklist march through ruins.",
      },
    ],
    cta: {
      eyebrow: "Witness nirvana in stone",
      headline: "Compose your Bhamala chapter",
      body:
        "Share your interest in sculpture and sacred sites—we will shape a private Haripur day.",
    },
  },
  {
    slug: "dubai",
    collectionSlug: "uae-luxury",
    name: "Dubai",
    tag: "Emirates & desert",
    lead: "Architectural ambition met with desert silence—luxury as atmosphere, not display.",
    narrative:
      "Dubai in our collection is curated restraint: iconic skyline, yes—but also private desert evenings, design conversations, and suites chosen for genuine quiet.",
    hero: {
      headline: "Modern heritage in gold and glass",
      subheadline:
        "Resorts, desert salons, and architectural immersions—composed with editorial calm.",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2200&q=85",
      imageAlt:
        "Dubai skyline at sunset with warm light reflecting on water and towers",
      objectPosition: "50% 38%",
    },
    introduction: {
      eyebrow: "Contemporary luxury",
      title: "The Emirates, composed privately",
      paragraphs: [
        "Dubai need not feel loud. We design stays and days that emphasise restoration—spa mornings, private marina walks, museum hours before crowds, and desert camps scaled for intimacy.",
        "Service is anticipatory but invisible. The palette is desert gold, black accents, and the hush of well-run suites.",
        "Whether as a standalone escape or a restorative pause within a longer journey, Dubai becomes breathable again.",
      ],
    },
    highlights: [
      {
        category: "Architecture",
        title: "Skyline & design districts",
        description:
          "Walks with design historians—form, light, and the story of a city built in decades.",
      },
      {
        category: "History",
        title: "Pearl to metropolis",
        description:
          "Old Dubai and the creek contextualised—not nostalgia, but narrative depth.",
      },
      {
        category: "Experience",
        title: "Private desert evenings",
        description:
          "Salons for twelve or fewer—firelight, silence, unobtrusive service.",
      },
      {
        category: "Curated luxury",
        title: "Resort curation",
        description:
          "Properties chosen for discretion, spa quality, and suites that actually rest.",
      },
    ],
    imageSections: [
      {
        image:
          "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=2000&q=85",
        imageAlt:
          "Luxury desert resort at dusk—minimal architecture and warm ambient light",
        eyebrow: "Desert calm",
        caption:
          "Beyond the skyline—the collection’s Dubai is golden hour in sand and silence.",
        objectPosition: "50% 42%",
        variant: "wide",
      },
    ],
    journey: [
      {
        time: "Morning",
        title: "Restorative start",
        description:
          "Late breakfast, spa, or private marina walk—your day begins without alarm.",
      },
      {
        time: "Midday",
        title: "Design or museum hour",
        description:
          "Curated cultural visit—architecture, art, or heritage quarter at measured pace.",
      },
      {
        time: "Afternoon",
        title: "Suite time",
        description:
          "Unscheduled hours for rest before the desert or evening reservation.",
      },
      {
        time: "Sunset",
        title: "Desert salon",
        description:
          "Private camp experience—dining, firelight, and desert hush.",
      },
      {
        time: "Night",
        title: "Return to the city",
        description:
          "Chauffeured transfer to your address—tomorrow composed to preference.",
      },
    ],
    luxuryDetails: [
      {
        title: "Suite curation",
        description:
          "Rooms selected for quiet, view, and service that does not perform.",
      },
      {
        title: "Chauffeur fleet",
        description:
          "Discreet transfers throughout the emirate—sedan or SUV to preference.",
      },
      {
        title: "Private dining",
        description:
          "Reservations at tables that honour ingredients and atmosphere equally.",
      },
      {
        title: "Concierge composition",
        description:
          "Helicopter, yacht, or spa—arranged only when it serves your arc.",
      },
    ],
    cta: {
      eyebrow: "Reserve quietly",
      headline: "Compose your Dubai escape",
      body:
        "Share dates, party size, and mood—urban, desert, or restorative. Our concierge responds within two studio days.",
    },
  },
];

const destinationBySlug = new Map(
  destinationPages.map((d) => [d.slug, d]),
);

export function getAllDestinationSlugs(): DestinationSlug[] {
  return [...DESTINATION_SLUGS];
}

export function getDestinationBySlug(
  slug: string,
): DestinationPageData | undefined {
  return destinationBySlug.get(slug as DestinationSlug);
}

/** Homepage grid summaries — derived from full destination records */
export const destinationSummaries = destinationPages.map(
  ({ slug, name, tag, lead, narrative, hero }) => ({
    slug,
    href: `/destinations/${slug}` as const,
    name,
    tag,
    lead,
    narrative,
    image: hero.image,
    imageAlt: hero.imageAlt,
  }),
);

export type DestinationSummary = (typeof destinationSummaries)[number];
