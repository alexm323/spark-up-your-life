import { useEffect, useState } from 'react'
import type { GalleryImage } from '../content/site'

const AUTO_ADVANCE_MS = 30000

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, AUTO_ADVANCE_MS)

    return () => clearInterval(timer)
  }, [index, images.length])

  if (images.length === 0) {
    return (
      <div className="portrait" role="img" aria-label="Photo coming soon">
        <div className="portrait-inner">Photo coming soon</div>
      </div>
    )
  }

  const current = images[index]

  return (
    <button
      type="button"
      className="portrait gallery-portrait"
      onClick={() => setIndex((i) => (i + 1) % images.length)}
      aria-label={`${current.caption ? current.caption + '. ' : ''}${current.alt}. Photo ${index + 1} of ${images.length}. Click for the next photo.`}
    >
      <span className="portrait-inner">
        <img src={current.src} alt={current.alt} />
        {current.caption && <span className="gallery-caption">{current.caption}</span>}
      </span>
      {images.length > 1 && (
        <span className="gallery-dots" aria-hidden="true">
          {images.map((image, i) => (
            <span
              key={image.src}
              className={`gallery-dot${i === index ? ' is-active' : ''}`}
            />
          ))}
        </span>
      )}
    </button>
  )
}
