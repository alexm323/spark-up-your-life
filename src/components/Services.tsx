import { useState } from 'react'
import { site, type Service } from '../content/site'

export function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Offerings</p>
          <h2>Choose your card</h2>
        </div>
        <div className="cards">
          {site.services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  const [expanded, setExpanded] = useState(false)
  const menuId = `${service.id}-menu`

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
          aria-controls={menuId}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? 'Show less' : 'See more'}
        </button>
        {expanded && (
          <ul className="variants" id={menuId}>
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
        )}
      </div>
    </article>
  )
}
