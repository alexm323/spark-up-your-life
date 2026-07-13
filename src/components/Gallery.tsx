import { useEffect, useState } from 'react'
import type { GalleryImage } from '../content/site'

export function Gallery({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = () => setActiveIndex(null)
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length))
  const showNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % images.length))

  useEffect(() => {
    if (activeIndex === null) return

    document.body.style.overflow = 'hidden'
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex, images.length])

  if (images.length === 0) {
    return (
      <div className="portrait" role="img" aria-label="Photo coming soon">
        <div className="portrait-inner">Photo coming soon</div>
      </div>
    )
  }

  return (
    <>
      <div className="gallery-grid">
        {images.map((image, i) => (
          <button
            type="button"
            className="gallery-thumb"
            key={image.src}
            onClick={() => setActiveIndex(i)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={images[activeIndex].alt}
          onClick={close}
        >
          <button type="button" className="lightbox-close" onClick={close} aria-label="Close">
            ✕
          </button>
          {images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-prev"
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation()
                showPrev()
              }}
            >
              ‹
            </button>
          )}
          <img
            className="lightbox-image"
            src={images[activeIndex].src}
            alt={images[activeIndex].alt}
            onClick={(e) => e.stopPropagation()}
          />
          {images.length > 1 && (
            <button
              type="button"
              className="lightbox-nav lightbox-next"
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation()
                showNext()
              }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </>
  )
}
