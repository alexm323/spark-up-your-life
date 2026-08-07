import { useEffect, useRef, useState } from 'react'
import { site, type MenuItem, type Service } from '../content/site'

const MENU_ID = 'service-menu'

export function Services() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [panelService, setPanelService] = useState<Service | null>(null)

  // Keep the last-opened service rendered while the panel animates shut,
  // instead of clearing its content immediately.
  useEffect(() => {
    if (expandedId) {
      setPanelService(site.services.find((s) => s.id === expandedId) ?? null)
    }
  }, [expandedId])

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
        <ServiceMenu service={panelService} isOpen={expandedId !== null} />
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
    <article className={`card${service.comingSoon ? ' is-coming-soon' : ''}`}>
      {service.comingSoon && <span className="soon-ribbon">Coming Soon</span>}
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
          disabled={service.comingSoon}
        >
          {service.comingSoon ? 'Coming soon' : expanded ? 'Show less' : 'See more'}
        </button>
      </div>
    </article>
  )
}

function ServiceMenu({ service, isOpen }: { service: Service | null; isOpen: boolean }) {
  const showGroupTitles = (service?.menuGroups.length ?? 0) > 1
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && menuRef.current) {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      menuRef.current.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      })
    }
  }, [isOpen, service])

  return (
    <div
      className={`service-menu${isOpen ? ' is-open' : ''}`}
      id={MENU_ID}
      aria-hidden={!isOpen}
      ref={menuRef}
    >
      <div className="service-menu-frame">
        <div className="service-menu-inner" key={service?.id ?? 'empty'}>
          {service && (
            <>
              <p className="eyebrow">{service.cardTitle}</p>
              <h3>{service.name}</h3>
              {service.menuGroups.map((group) => (
                <div className="menu-group" key={group.title ?? 'default'}>
                  {showGroupTitles && group.title && (
                    <p className="menu-group-title">{group.title}</p>
                  )}
                  {group.note && <p className="menu-group-note">{group.note}</p>}
                  {group.style === 'tags' ? (
                    <div className="menu-tags">
                      {group.items.map((item) => (
                        <span className="menu-tag" key={item.name}>
                          {item.name}
                          {item.description && ` (${item.description})`}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <ul className="variants">
                      {group.items.map((item) => (
                        <VariantRow item={item} key={item.name} />
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function VariantRow({ item }: { item: MenuItem }) {
  return (
    <li className="variant">
      <div className="variant-top">
        <span className="variant-name">
          {item.name}
          {item.comingSoon && <span className="badge-soon small">Coming Soon</span>}
        </span>
        {item.price && (
          <span className="variant-price">
            {item.price}
            {item.priceNote && ` ${item.priceNote}`}
          </span>
        )}
      </div>
      {item.description && <p className="variant-desc">{item.description}</p>}
      {item.bookingUrl && (
        <div className="variant-actions">
          {item.comingSoon ? (
            <span className="btn is-disabled" aria-disabled="true">
              Coming soon
            </span>
          ) : (
            <a className="btn" href={item.bookingUrl}>
              Book this
            </a>
          )}
        </div>
      )}
    </li>
  )
}
