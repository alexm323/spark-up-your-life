export interface Business {
  name: string
  practitioner: string
  tagline: string
  email: string
  instagram: {
    handle: string
    url: string
  }
  venmoUrl: string
  cashAppUrl: string
  zelle: string
  bookingUrl: string
  siteUrl: string
}

export interface MenuItem {
  name: string
  price?: string
  priceNote?: string
  description?: string
  bookingUrl?: string
  comingSoon?: boolean
}

export interface MenuGroup {
  title?: string
  note?: string
  style?: 'list' | 'tags'
  items: MenuItem[]
}

export interface Service {
  id: string
  numeral: string
  name: string
  cardTitle: string
  description: string
  price: string
  priceNote?: string
  menuGroups: MenuGroup[]
  comingSoon?: boolean
}

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

export interface About {
  heading: string
  paragraphs: string[]
  gallery: GalleryImage[]
}

export interface PreviousSpells {
  heading: string
  gallery: GalleryImage[]
}

export interface ProcessStep {
  title: string
  description: string
}

export interface Process {
  heading: string
  steps: ProcessStep[]
}

export interface AnnouncementBanner {
  enabled: boolean
  message: string
}

export interface SiteContent {
  business: Business
  announcementBanner: AnnouncementBanner
  services: Service[]
  previousSpells: PreviousSpells
  about: About
  process: Process
}

export const site: SiteContent = {
  business: {
    name: 'Spark Up Your Life',
    practitioner: 'Stina Sparkles',
    tagline:
      "Tarot readings, reiki, and custom spellwork with Stina Sparkles. No judgment, no doom and gloom, just useful answers.",
    email: 'hello@example.com',
    instagram: {
      handle: '@stststina',
      url: 'https://instagram.com/stststina',
    },
    venmoUrl: 'https://venmo.com/u/Steenuhmarr',
    cashAppUrl: 'https://cash.app/$StinaSparkles',
    zelle: 'alebensti@gmail.com',
    bookingUrl: 'https://cal.com/stina-sparkles',
    siteUrl: 'https://www.stinasparkles.com',
  },
  announcementBanner: {
    enabled: true,
    message: 'New magic coming soon: Reiki & Chakra Alignment sessions',
  },
  services: [
    {
      id: 'tarot-reading',
      numeral: 'I',
      name: 'Tarot Reading',
      cardTitle: 'The Cards',
      description:
        "A full spread built around whatever you're actually dealing with right now. Could be a relationship, a job, a decision you can't make up your mind about. Delivered as a voice note, with video available on request.",
      price: '$65',
      priceNote: '/ 45 min',
      menuGroups: [
        {
          title: 'Reading Types',
          items: [
            {
              name: 'General Reading',
              price: '$65',
              priceNote: '/ 45 min',
              description:
                "A full spread built around whatever you're actually dealing with right now. Delivered as a voice note, with video available on request.",
              bookingUrl: 'https://cal.com/stina-sparkles/general-reading',
            },
            {
              name: 'Love Read',
              price: 'Ask for pricing',
              description:
                'Voice note plus video, one to two questions about one specific person. For when you need clarity on where things stand.',
              bookingUrl: 'https://cal.com/stina-sparkles/love-read',
            },
            {
              name: 'In-Depth Love Read',
              price: 'Ask for pricing',
              description:
                "Voice note plus video, up to five questions about a specific situation. The deep-dive version when one question isn't enough.",
              bookingUrl: 'https://cal.com/stina-sparkles/in-depth-love-read',
            },
            {
              name: 'Career Read',
              price: 'Ask for pricing',
              description:
                'Voice note, one focused question about work, direction, or a decision on the table.',
              bookingUrl: 'https://cal.com/stina-sparkles/career-read',
            },
            {
              name: 'Yes/No Question',
              price: 'Ask for pricing',
              description:
                'Voice note plus video, one direct question. Quick clarity when you need a straight answer.',
              bookingUrl: 'https://cal.com/stina-sparkles/yes-no-question',
            },
            {
              name: 'Choose Your Own Deck',
              price: 'Ask for pricing',
              description: 'You pick the deck, one main topic. A more personal, collaborative read.',
              bookingUrl: 'https://cal.com/stina-sparkles/choose-your-own-deck',
            },
          ],
        },
        {
          title: 'Live Reads (Real-Time, Scheduled)',
          note: "Pricing for these isn't set yet.",
          items: [
            {
              name: '15 Minutes',
              price: 'Ask for pricing',
              bookingUrl: 'https://cal.com/stina-sparkles/live-read-15',
            },
            {
              name: '30 Minutes',
              price: 'Ask for pricing',
              bookingUrl: 'https://cal.com/stina-sparkles/live-read-30',
            },
            {
              name: '45 Minutes',
              price: 'Ask for pricing',
              bookingUrl: 'https://cal.com/stina-sparkles/live-read-45',
            },
            {
              name: '60 Minutes',
              price: 'Ask for pricing',
              bookingUrl: 'https://cal.com/stina-sparkles/live-read-60',
            },
          ],
        },
      ],
    },
    {
      id: 'reiki-session',
      numeral: 'II',
      name: 'Reiki Session',
      cardTitle: 'The Hands',
      description: 'Energy work to help you feel less drained and more like yourself.',
      price: '$80',
      priceNote: '/ 60 min',
      comingSoon: true,
      menuGroups: [
        {
          items: [
            {
              name: 'Reiki Session',
              price: '$80',
              priceNote: '/ 60 min',
              description: 'Energy work to help you feel less drained and more like yourself.',
              bookingUrl: 'https://cal.com/stina-sparkles/reiki-session',
              comingSoon: true,
            },
            {
              name: 'Chakra Alignment (In Person)',
              price: '$222',
              description:
                'A hands-on session focused on identifying and clearing blockages across your energy centers. In-person only.',
              bookingUrl: 'https://cal.com/stina-sparkles/chakra-alignment',
              comingSoon: true,
            },
            {
              name: 'Reiki Cleansing',
              price: '$88',
              description:
                'A clearing-focused energy session, resetting your field rather than a full alignment.',
              bookingUrl: 'https://cal.com/stina-sparkles/reiki-cleansing',
            },
            {
              name: 'Cleanse (In Person)',
              price: '$45',
              description: 'A lighter, space-or-person cleansing session done face to face.',
              bookingUrl: 'https://cal.com/stina-sparkles/cleanse-in-person',
            },
          ],
        },
      ],
    },
    {
      id: 'custom-spellwork',
      numeral: 'III',
      name: 'Custom Spellwork',
      cardTitle: 'The Craft',
      description:
        'Ritual craft built around your intention, from protection and love work to oils, candles, and art.',
      price: '$3–$222',
      priceNote: 'by item',
      // TODO: one illegible spellwork item (maybe "Uncrossing") couldn't be
      // read from the source photos. Add it once Stina confirms.
      menuGroups: [
        {
          title: 'Spellwork',
          items: [
            {
              name: 'Binding (Non-Baneful)',
              price: '$75',
              description:
                'A binding spell intended to restrict or contain without ill intent. Commonly used for protection or behavior-limiting purposes rather than harm.',
              bookingUrl: 'https://cal.com/stina-sparkles/binding-non-baneful',
            },
            {
              name: 'Binding (Baneful)',
              price: '$91',
              description:
                'A binding spell with harsher intent, meant to restrict someone more forcefully.',
              bookingUrl: 'https://cal.com/stina-sparkles/binding-baneful',
            },
            {
              name: 'Reconciliation',
              price: '$88.88',
              description: 'A spell aimed at repairing a relationship and bringing someone back together.',
              bookingUrl: 'https://cal.com/stina-sparkles/reconciliation',
            },
            {
              name: 'Sweetener',
              price: '$50',
              description: "A spell to soften someone's feelings or smooth over tension in a relationship.",
              bookingUrl: 'https://cal.com/stina-sparkles/sweetener',
            },
            {
              name: 'Separation',
              price: '$101',
              description: 'A spell intended to create distance or end a connection between two people.',
              bookingUrl: 'https://cal.com/stina-sparkles/separation',
            },
            {
              name: 'Hex',
              price: '$45',
              description: 'A spell intended to bring bad luck or misfortune to a target.',
              bookingUrl: 'https://cal.com/stina-sparkles/hex',
            },
            {
              name: 'Jinx',
              price: '$33.33',
              description: 'A lighter, more mischievous version of a hex. Minor bad luck rather than serious harm.',
              bookingUrl: 'https://cal.com/stina-sparkles/jinx',
            },
            {
              name: 'Curse',
              price: '$222',
              description: 'The most intense negative-intent working offered. Significant misfortune directed at a target.',
              bookingUrl: 'https://cal.com/stina-sparkles/curse',
            },
            {
              name: 'Protection',
              price: '$44.44',
              description: 'A shielding spell to guard you (or someone else) from negative energy or harm.',
              bookingUrl: 'https://cal.com/stina-sparkles/protection-spell',
            },
            {
              name: 'Domination',
              price: '$75',
              description: 'A spell intended to give you influence or control in a specific situation or relationship.',
              bookingUrl: 'https://cal.com/stina-sparkles/domination',
            },
            {
              name: 'Bracelets',
              price: '$3.33',
              description: 'Small spell-charged bracelets tied to a specific intention.',
              bookingUrl: 'https://cal.com/stina-sparkles/bracelets',
            },
            {
              name: 'Communication',
              price: '$33.33',
              description: 'A spell to open honest dialogue or improve communication between people.',
              bookingUrl: 'https://cal.com/stina-sparkles/communication',
            },
            {
              name: 'Money Spell',
              price: '$44.44',
              description: 'A spell to draw financial abundance or open up money opportunities.',
              bookingUrl: 'https://cal.com/stina-sparkles/money-spell',
            },
            {
              name: 'Self Love',
              price: '$50',
              description: 'A spell focused on healing your relationship with yourself.',
              bookingUrl: 'https://cal.com/stina-sparkles/self-love-spell',
            },
            {
              name: 'Cleansing',
              price: '$44.44',
              description: 'A spell to clear negative or stagnant energy from a person or space.',
              bookingUrl: 'https://cal.com/stina-sparkles/cleansing-spell',
            },
            {
              name: 'Custom Sigil',
              price: '$11.11',
              description: 'A symbol designed and charged around your specific intention.',
              bookingUrl: 'https://cal.com/stina-sparkles/custom-sigil',
            },
            {
              name: 'Think of Me',
              price: '$45',
              description: "A spell meant to keep you present in someone's thoughts.",
              bookingUrl: 'https://cal.com/stina-sparkles/think-of-me',
            },
            {
              name: 'Glamour',
              price: '$50',
              description: 'A spell to enhance charm, attractiveness, or presence.',
              bookingUrl: 'https://cal.com/stina-sparkles/glamour',
            },
            {
              name: 'Road Opener',
              price: '$88',
              description: 'A spell to clear obstacles and open a path forward. Often used before a big decision or new venture.',
              bookingUrl: 'https://cal.com/stina-sparkles/road-opener',
            },
            {
              name: 'Magic Opening',
              price: '$55',
              description: 'A working meant to open you up to receiving magic, opportunity, or intuition more fully.',
              bookingUrl: 'https://cal.com/stina-sparkles/magic-opening-spell',
            },
            {
              name: 'Bay Leaf Burn',
              price: '$11.11',
              description: 'A quick, focused ritual using a written intention burned on a bay leaf. A fast, small working.',
              bookingUrl: 'https://cal.com/stina-sparkles/bay-leaf-burn',
            },
            {
              name: 'Weenie/Kitty Bind',
              price: '$66.66',
              description: 'A binding spell focused on fidelity or intimate connection between partners.',
              bookingUrl: 'https://cal.com/stina-sparkles/fidelity-bind',
            },
            {
              name: 'All Express Spellwork (Single Candle)',
              price: '$22.22',
              description: 'A fast, simplified version of any spell using a single candle working.',
              bookingUrl: 'https://cal.com/stina-sparkles/express-spellwork',
            },
          ],
        },
        {
          title: 'Oils',
          note: 'No session required, just ask to order.',
          style: 'tags',
          items: [
            { name: 'Make It Rain', description: 'Money / abundance' },
            { name: 'Protection', description: 'Shielding from harm' },
            { name: 'Grounding', description: 'Stability, presence' },
            { name: 'Willing Fantasy', description: 'Self love' },
            { name: 'Princess Treatment', description: 'Domination' },
            { name: 'Magnetic', description: 'Reconciliation / drawing someone back' },
            { name: 'Cleansing', description: 'Clearing negative energy' },
            { name: 'Magic Opening', description: 'Opening to magic and intuition' },
          ],
        },
        {
          title: 'Premade Candles',
          note: 'Cute designs. Message to order.',
          style: 'tags',
          items: [
            { name: 'Self Love' },
            { name: 'Obsession' },
            { name: 'Reconciliation' },
            { name: 'Money' },
            { name: 'Cleansing' },
            { name: 'Protection' },
            { name: 'Tranquil Home' },
            { name: '3rd Eye Opening' },
            { name: 'Road Opener' },
            { name: 'Chakra Candle' },
            { name: 'Focus' },
          ],
        },
        {
          title: '7-Day Candles',
          note: "Choose how you'd like the burn read.",
          items: [
            {
              name: 'Ship & Return',
              price: 'Ask for pricing',
              description:
                'I send the candle to you at full price. You burn it, ship it back at your own cost, and I interpret the burn for you.',
              bookingUrl: 'https://cal.com/stina-sparkles/candle-ship-return',
            },
            {
              name: 'Photo/Video Interpretation',
              price: 'Ask for pricing',
              description:
                'You take pictures and video of the candle as it burns and send them to me. I interpret it from those.',
              bookingUrl: 'https://cal.com/stina-sparkles/candle-photo-video',
            },
            {
              name: 'Burned In-House',
              price: 'Ask for pricing',
              description: 'I light, burn, and interpret the candle myself, in my own space, on your behalf.',
              bookingUrl: 'https://cal.com/stina-sparkles/candle-burned-in-house',
            },
          ],
        },
        {
          title: 'Witchy Art',
          note: 'Message for pricing and availability.',
          style: 'tags',
          items: [
            { name: 'Rune Paintings' },
            { name: 'Tarot Card Paintings' },
            { name: 'Affirmation Paintings' },
          ],
        },
      ],
    },
  ],
  previousSpells: {
    heading: 'Previous Spells',
    gallery: [
      {
        src: '/images/spells/cord-cutting.jpg',
        alt: 'Two tall candles burning with dramatic flames beside scissors and dried leaves for a cord-cutting ritual',
        caption: 'Cord Cutting',
      },
      {
        src: '/images/spells/domination-1.jpg',
        alt: 'A red figure candle burning during a domination working',
        caption: 'Domination Spell',
      },
      {
        src: '/images/spells/domination-2.jpg',
        alt: 'A red poppet candle set among stones and shells for a domination spell',
        caption: 'Domination Spell',
      },
      {
        src: '/images/spells/domination-3.jpg',
        alt: 'A red figure candle with pins burning on a plate of herbs and crystals for a domination working',
        caption: 'Domination Spell',
      },
      {
        src: '/images/spells/domination-4.jpg',
        alt: 'A red human-shaped candle with pins in its head standing in a bowl of herbs',
        caption: 'Domination Spell',
      },
      {
        src: '/images/spells/glamour-1.jpg',
        alt: 'A curved red candle burning on a plate of herbs, stones, and shells for a glamour spell',
        caption: 'Glamour Spell',
      },
      {
        src: '/images/spells/glamour-2.jpg',
        alt: 'Two slender candles set in ritual soil for a glamour working',
        caption: 'Glamour Spell',
      },
      {
        src: '/images/spells/love-spell.jpg',
        alt: 'A two-wick red candle tied with a ribbon bow, burning for a love spell',
        caption: 'Love Spell',
      },
      {
        src: '/images/spells/road-opener-well-rounded.jpg',
        alt: 'A ring of candles, citrus slices, and seashells arranged for a road opener ritual',
        caption: 'Road Opener',
      },
      {
        src: '/images/spells/separation.jpg',
        alt: 'A black candle marked with sigils and coated in chili flakes for a separation spell',
        caption: 'Separation Spell',
      },
    ],
  },
  about: {
    heading: "Hi, I'm Stina",
    paragraphs: [
      'My name is Stina Sparkles. I am classically trained in Santeria and baptized into voodoo. I am certified in Reiki clearing and chakra alignment. I have been practicing tarot reading for the past 15 years and casting publicly for the last eight years.',
      'I thrive by giving guidance and helping people where they need it most. I enjoy having people think differently and outside of the box with my spell work, guidance and oils. Everything I do is custom to the client and situation so there will be no repeat of anything. I fully embrace light magic work, but I also am not afraid to do baneful.',
      'Allow me to help you, spark up your life!',
    ],
    gallery: [
      { src: '/images/about/beach_air_is_the_best.jpg', alt: 'Stina at the beach, eyes closed, facing the ocean breeze' },
      { src: '/images/about/bunger_at_the_observatory.jpg', alt: 'Stina standing in front of Griffith Observatory on a sunny day' },
      { src: '/images/about/ducks_and_trees.jpg', alt: 'Stina leaning on a railing surrounded by autumn trees' },
      { src: '/images/about/heart_as_big_as_mine.jpg', alt: 'Stina smiling inside a giant lit-up wooden heart installation' },
      { src: '/images/about/heart_at_beach.jpg', alt: "Stina making a heart shape with her hands on a pier at sunset" },
      { src: '/images/about/its_always_staples_center.jpg', alt: 'Stina posing on a balcony overlooking the arena in downtown LA' },
      { src: '/images/about/meditation_at_the_beach.jpg', alt: 'Stina sitting cross-legged on the beach with her eyes closed' },
      { src: '/images/about/more_meditation_at_the_beach.jpg', alt: 'Stina meditating on the beach, profile view facing the ocean' },
      { src: '/images/about/tree_lover_1.jpg', alt: 'Stina standing beneath a tree with golden autumn leaves' },
      { src: '/images/about/tree_lover_2.jpg', alt: 'Stina perched in the branches of a gnarled tree, looking up' },
    ],
  },
  process: {
    heading: 'What to expect',
    steps: [
      {
        title: 'Book your session',
        description:
          "Pick what you need and grab a time that works. You'll get a confirmation email with everything you need to know.",
      },
      {
        title: 'Set your intention',
        description:
          "Before we meet, think about what you actually want to ask. It doesn't need to be polished, just show up curious.",
      },
      {
        title: 'The session',
        description:
          "We'll meet over video or in person, whichever works better for you. I'll send you notes afterward so you've got something to look back on.",
      },
    ],
  },
}
