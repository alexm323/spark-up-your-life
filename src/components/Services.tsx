import { useState } from 'react'
import { site, type Service } from '../content/site'

const MENU_ID = 'service-menu'

export function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const expandedService = site.services.find((s) => s.id === expandedId) ?? null

  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Offerings</p>
          <h2>Choose your card</h2>
        </div>
        <div className="cards">
          {site.services.map((service) => (
            <ServiceCard
              service={service}
              key={service.id}
              expanded={service.id === expandedId}
              onToggle={() =>
                setExpandedId((current) => (current === service.id ? null : service.id))
              }
            />
          ))}
        </div>
        {expandedService && <ServiceMenu service={expandedService} />}
      </div>
    </section>
  )
}

function ServiceCard({
  service,
  expanded,
  onToggle,
}: {
  service: Service
  expanded: boolean
  onToggle: () => void
}) {
  return (
    <article className="card">
      <span className="corner" aria-hidden="true">
        ✦
      </span>
      <div className="card-inner">
        <span className="numeral">{service.numeral}</span>
        <h3>{service.name}</h3>
        <p className="sub">{service.cardTitle}</p>
        <p>{service.description}</p>
        <p className="price">
          {service.price}{' '}
          {service.priceNote && <small>{service.priceNote}</small>}
        </p>
        <button
          type="button"
          className="btn"
          aria-expanded={expanded}
          aria-controls={MENU_ID}
          onClick={onToggle}
        >
          {expanded ? 'Show less' : 'See more'}
        </button>
      </div>
    </article>
  )
}

function ServiceMenu({ service }: { service: Service }) {
  return (
    <div className="service-menu" id={MENU_ID}>
      <div className="service-menu-inner">
        <p className="eyebrow">{service.cardTitle}</p>
        <h3>{service.name}</h3>
        <ul className="variants">
          {service.variants.map((variant) => (
            <li className="variant" key={variant.name}>
              <span className="variant-info">
                <span className="variant-name">{variant.name}</span>
                <span className="variant-price">
                  {variant.price}
                  {variant.priceNote && ` ${variant.priceNote}`}
                </span>
              </span>
              <a className="btn" href={variant.bookingUrl}>
                Book this
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
