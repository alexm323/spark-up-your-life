import { site } from '../content/site'
import { Gallery } from './Gallery'

export function About() {
  return (
    <section id="about" className="about">
      <div className="wrap">
        <Gallery images={site.about.gallery} />
        <div>
          <p className="eyebrow">About</p>
          <h2>
            {site.about.heading} <span className="glint" aria-hidden="true">✦</span>
          </h2>
          {site.about.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
