import { site } from '../content/site'

const [firstName, ...restName] = site.business.practitioner.split(' ')

export function Header() {
  return (
    <header>
      <div className="wrap">
        <a className="wordmark" href="/">
          {firstName}{' '}
          <span className="glint" aria-hidden="true">
            ✦
          </span>{' '}
          {restName.join(' ')}
        </a>
        <nav aria-label="Primary">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#process">How it works</a>
          <a href="#book">Book</a>
        </nav>
      </div>
    </header>
  )
}
