import { site } from '../content/site'

export function Process() {
  return (
    <section id="process">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">How it works</p>
          <h2>{site.process.heading}</h2>
        </div>
        <div className="steps">
          {site.process.steps.map((step) => (
            <div className="step" key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
