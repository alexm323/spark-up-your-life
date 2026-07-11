import type { ReactNode } from 'react'
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from '@tanstack/react-router'
import appCss from '../styles/app.css?url'
import { site } from '../content/site'

const pageTitle = `${site.business.practitioner} · ${site.business.name} — Tarot, Reiki & Spellwork`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: pageTitle },
      { name: 'description', content: site.business.tagline },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: site.business.name },
      { property: 'og:title', content: pageTitle },
      { property: 'og:description', content: site.business.tagline },
      { property: 'og:url', content: site.business.siteUrl },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: pageTitle },
      { name: 'twitter:description', content: site.business.tagline },
    ],
    links: [
      { rel: 'canonical', href: site.business.siteUrl },
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Karla:wght@400;500;700&display=swap',
      },
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
