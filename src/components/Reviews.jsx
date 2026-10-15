import { Star } from 'lucide-react'
import { BIZ, EXCERPTS } from '../data.js'
export default function Reviews() {
  return (
    <section id="reviews" className="sec">
      <div className="wrap">
        <div className="sec-head"><h2>What customers say</h2>
          <p className="score"><span className="stars" aria-hidden="true">{[0,1,2,3,4].map(i => <Star key={i} size={18} fill="currentColor" />)}</span> <b>{BIZ.rating} / 5 — {BIZ.reviews} Google reviews</b></p>
          <p className="note">Rating and excerpts supplied for this concept. This is a static reference, not a live Google integration.</p></div>
        <div className="quotes">{EXCERPTS.map((q, i) => (
          <blockquote key={q} className={i === 0 ? 'q-main' : ''}><p>“{q}”</p><footer>Google review excerpt</footer></blockquote>))}</div>
      </div>
    </section>
  )
}
