import { site } from '../content/site'

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
            <article className="card" key={service.id}>
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
                <a className="btn" href={service.bookingUrl}>
                  {service.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
