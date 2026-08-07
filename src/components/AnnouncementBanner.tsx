import { site } from '../content/site'

// Scattered star positions across the banner strip, echoing the hero's
// star field. Kept off the vertical center so they don't sit on top of
// the message text.
const stars = [
  { top: '15%', left: '6%' },
  { top: '75%', left: '13%' },
  { top: '18%', left: '45%' },
  { top: '78%', left: '58%' },
  { top: '20%', left: '90%' },
  { top: '72%', left: '95%' },
]

export function AnnouncementBanner() {
  const { announcementBanner } = site

  if (!announcementBanner.enabled) return null

  return (
    <div className="announcement-banner" role="status">
      <div className="banner-stars" aria-hidden="true">
        {stars.map((star, i) => (
          <i key={i} style={{ top: star.top, left: star.left }}>
            ✦
          </i>
        ))}
      </div>
      <p className="eyebrow announcement-message">{announcementBanner.message}</p>
    </div>
  )
}
