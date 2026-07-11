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
  bookingUrl: string
  siteUrl: string
}

export interface Service {
  id: string
  numeral: string
  name: string
  cardTitle: string
  description: string
  price: string
  priceNote?: string
  bookingUrl: string
  ctaLabel: string
}

export interface About {
  heading: string
  paragraphs: string[]
}

export interface ProcessStep {
  title: string
  description: string
}

export interface Process {
  heading: string
  steps: ProcessStep[]
}

export interface SiteContent {
  business: Business
  services: Service[]
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
      handle: '@yourhandle',
      url: 'https://instagram.com/yourhandle',
    },
    venmoUrl: 'https://venmo.com/u/her-username',
    bookingUrl: 'https://cal.com/stina-sparkles',
    siteUrl: 'https://example.com',
  },
  services: [
    {
      id: 'tarot-reading',
      numeral: 'I',
      name: 'Tarot Reading',
      cardTitle: 'The Cards',
      description:
        "A full spread built around whatever you're actually dealing with right now. Could be a relationship, a job, a decision you can't make up your mind about. We can do it over video, or I'll write it up for you to read on your own time.",
      price: '$65',
      priceNote: '/ 45 min',
      bookingUrl: 'https://cal.com/stina-sparkles/tarot-reading',
      ctaLabel: 'Book this',
    },
    {
      id: 'reiki-session',
      numeral: 'II',
      name: 'Reiki Session',
      cardTitle: 'The Hands',
      description:
        "Energy work to help you feel less drained and more like yourself.",
      price: '$80',
      priceNote: '/ 60 min',
      bookingUrl: 'https://cal.com/stina-sparkles/reiki-session',
      ctaLabel: 'Book this',
    },
    {
      id: 'custom-spellwork',
      numeral: 'III',
      name: 'Custom Spellwork',
      cardTitle: 'The Craft',
      description:
        "A spell built around what you actually need, whether that's protection, letting something go, or drawing something in. We talk through the details first, and you get a full video of the spell afterward.",
      price: 'from $95',
      bookingUrl: 'https://cal.com/stina-sparkles/spellwork-consult',
      ctaLabel: 'Inquire',
    },
  ],
  about: {
    heading: "Hi, I'm Stina",
    paragraphs: [
      "I was born sensitive. I picked up on things long before I had words for them, and tarot gave me a way to work with that instead of just carrying it around.",
      "I trained in traditional tarot and Usui reiki, and I still learn something new with almost every reading.",
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
