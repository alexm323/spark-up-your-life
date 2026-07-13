import { site } from '../content/site'
import { Gallery } from './Gallery'

export function PreviousSpells() {
  return (
    <section id="spells" className="spells">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Past Work</p>
          <h2>{site.previousSpells.heading}</h2>
        </div>
        <div className="spells-gallery">
          <Gallery images={site.previousSpells.gallery} />
        </div>
      </div>
    </section>
  )
}
