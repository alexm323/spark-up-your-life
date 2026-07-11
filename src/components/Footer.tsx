import { site } from '../content/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="spark-divider" aria-hidden="true">
        <span>✦</span>
        <span>✦</span>
        <span>✦</span>
      </div>
      <p>
        © {year} {site.business.practitioner} · {site.business.name} · Readings are for
        insight and reflection, not a substitute for medical, legal, or financial advice.
      </p>
    </footer>
  )
}
