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
      "Intuitive tarot readings, reiki energy work, and custom spellwork with Stina Sparkles — honest magic, offered with warmth.",
    email: 'hello@example.com',
    instagram: {
      handle: '@yourhandle',
      url: 'https://instagram.com/yourhandle',
    },
    venmoUrl: 'https://venmo.com/u/her-username',
  },
  services: [
    {
      id: 'tarot-reading',
      numeral: 'I',
      name: 'Tarot Reading',
      cardTitle: 'The Cards',
      description:
        "A full-spread intuitive reading for the question you're carrying — love, work, crossroads, or the thing you can't quite name. Over video or in writing.",
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
        "Gentle energy work to clear what's stagnant and restore what's depleted. Distance sessions available — energy doesn't check the mileage.",
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
        'Ritual craft built around your intention — protection, release, drawing in, letting go. Includes a consultation and a full write-up of the working.',
      price: 'from $95',
      bookingUrl: 'https://cal.com/stina-sparkles/spellwork-consult',
      ctaLabel: 'Inquire',
    },
  ],
  about: {
    heading: "Hi, I'm Stina",
    paragraphs: [
      'I came to the cards the way most of us do — in a season when the ordinary answers stopped being enough. Years later, this work is how I help people hear what they already know.',
      'My practice blends traditional tarot, Usui reiki, and folk craft studied with care. No doom, no fear-selling, no telling you you\'re cursed for an upsell. Just honest magic, done with love.',
    ],
  },
  process: {
    heading: 'Three simple steps',
    steps: [
      {
        title: 'Choose & book',
        description:
          "Pick an offering and grab a time that works for you. You'll get a confirmation with everything you need.",
      },
      {
        title: 'Set your intention',
        description:
          "Before we meet, sit with your question. You don't need it polished — arriving curious is enough.",
      },
      {
        title: 'The session',
        description:
          "We meet over video or in person. Afterward you'll receive notes from your reading or working to keep.",
      },
    ],
  },
}
