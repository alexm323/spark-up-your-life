import { site } from '../content/site'

export function About() {
  return (
    <section id="about" className="about">
      <div className="wrap">
        <div className="portrait" role="img" aria-label={`Portrait of ${site.business.practitioner}`}>
          <div className="portrait-inner">{site.business.practitioner}'s photo here</div>
        </div>
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
