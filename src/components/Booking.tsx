import { site } from '../content/site'

function InstagramIcon() {
  return (
    <svg
      className="instagram-icon"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function Booking() {
  return (
    <section id="book" className="contact">
      <div className="wrap">
        <p className="eyebrow">Booking &amp; payment</p>
        <h2>Ready when you are</h2>
        <p>
          Book directly below, or reach out first with questions at{' '}
          <a className="instagram-link" href={site.business.instagram.url}>
            <InstagramIcon />
            {site.business.instagram.handle}
          </a>
        </p>
        <div className="paylinks">
          <a className="btn solid" href={site.business.bookingUrl}>
            Book a time
          </a>
          <a className="btn" href={site.business.venmoUrl}>
            Pay with Venmo
          </a>
        </div>

        {/*
          OPTIONAL: embed the calendar directly on the page instead of
          linking out. Once Stina has a Cal.com account, replace the
          paylinks block above with the markup below (and re-add the
          equivalent of this script via a useEffect or a <script> tag in
          __root.tsx) and swap "stina-sparkles" for her real Cal username.
          Clients then pick a time (and pay, if Stripe is connected)
          without ever leaving the site.

        <div id="cal-embed" style={{ width: '100%', minHeight: 640, marginTop: 48, border: '1px solid var(--hairline)', padding: 10 }} />
        <script type="text/javascript">
          {`
            (function (C, A, L) {
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;
              C.Cal = C.Cal || function () {
                let cal = C.Cal, ar = arguments;
                if (!cal.loaded) {
                  cal.ns = {}; cal.q = cal.q || [];
                  d.head.appendChild(d.createElement("script")).src = A;
                  cal.loaded = true;
                }
                p(cal, ar);
              };
            })(window, "https://app.cal.com/embed/embed.js", "init");
            Cal("init", { origin: "https://cal.com" });
            Cal("inline", {
              elementOrSelector: "#cal-embed",
              calLink: "stina-sparkles",
              config: { theme: "dark" }
            });
          `}
        </script>
        */}
      </div>
    </section>
  )
}
