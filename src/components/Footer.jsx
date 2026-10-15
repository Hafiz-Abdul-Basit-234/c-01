import { BIZ, NAV, SERVICES } from '../data.js'
export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-grid">
        <div><p className="logo">MR. FIX <b>MY PHONE</b></p><p>Phone, tablet and computer repair in New York City.</p>
          <p><a href={BIZ.tel}>{BIZ.phone}</a></p><address>{BIZ.address}</address></div>
        <nav aria-label="Footer"><h2>Navigate</h2><ul>{NAV.map(([l, id]) => <li key={id}><a href={'#' + id}>{l}</a></li>)}</ul></nav>
        <div><h2>Repairs</h2><ul>{SERVICES.map(s => <li key={s[0]}><a href="#services">{s[0]}</a></li>)}</ul></div>
        <div><h2>Need a repair?</h2><a className="btn btn-primary" href={BIZ.tel}>Call for a Quote</a></div>
      </div>
      <p className="wrap fine">Website design concept for MR. FIX MY PHONE. Not an official website.</p>
    </footer>
  )
}
