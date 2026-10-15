import { Phone, Star, MapPin } from 'lucide-react'
import { BIZ } from '../data.js'
import RepairBench from './RepairBench.jsx'
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="loc"><MapPin size={16} aria-hidden="true" /> Fifth Avenue, New York City</p>
          <h1>Broken Device? We’ll Help You Get Back to What Matters.</h1>
          <p className="lede">Professional phone, tablet, and computer repair services in New York City. Tell us what’s wrong with your device and contact our team for a repair quote.</p>
          <div className="ctas">
            <a className="btn btn-primary" href={BIZ.tel}><Phone size={18} aria-hidden="true" />Call for a Quote</a>
            <a className="btn btn-ghost" href="#services">Explore Repair Services</a>
          </div>
          <a className="bignum" href={BIZ.tel} aria-label={'Call ' + BIZ.phone}>{BIZ.phone}</a>
          <p className="trust"><span className="stars" aria-hidden="true">{[0,1,2,3,4].map(i => <Star key={i} size={16} fill="currentColor" />)}</span>
            <span><b>{BIZ.rating} / 5</b> from {BIZ.reviews} Google reviews</span><small>Rating supplied for this concept</small></p>
        </div>
        <RepairBench />
      </div>
    </section>
  )
}
