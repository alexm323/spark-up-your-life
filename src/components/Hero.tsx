import { site } from '../content/site'

const stars = [
  { top: '18%', left: '14%' },
  { top: '30%', left: '82%' },
  { top: '64%', left: '8%' },
  { top: '12%', left: '60%' },
  { top: '70%', left: '88%' },
  { top: '52%', left: '26%' },
]

export function Hero() {
  return (
    <section className="hero">
      <div className="stars" aria-hidden="true">
        {stars.map((star, i) => (
          <i key={i} style={{ top: star.top, left: star.left }}>
            ✦
          </i>
        ))}
      </div>
      <div className="wrap">
        <p className="eyebrow">Tarot · Reiki · Spellwork</p>
        <h1>
          Spark up
          <br />
          <em>your life</em>
        </h1>
        <p>{site.business.tagline}</p>
        <a className="btn solid" href="#book">
          Book a session
        </a>
        <div className="spark-divider" aria-hidden="true">
          <span>✦</span>
          <span>✦</span>
          <span>✦</span>
        </div>
      </div>
    </section>
  )
}
