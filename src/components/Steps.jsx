import { DIRECTIONS, BIZ } from '../data.js'
export default function Steps() {
  return (
    <section className="sec sec-alt" aria-labelledby="how">
      <div className="wrap">
        <div className="sec-head"><h2 id="how">How it works</h2></div>
        <ol className="steps">
          <li><span className="n">01</span><h3>Tell Us About Your Device</h3><p>Contact the shop and describe what’s wrong with your device.</p></li>
          <li><span className="n">02</span><h3>Discuss Your Repair</h3><p>Talk through the available repair options and request a quote.</p></li>
          <li><span className="n">03</span><h3>Visit the Shop</h3><p>{BIZ.address}</p><a className="link" href={DIRECTIONS} target="_blank" rel="noopener noreferrer">Get directions (opens Google Maps)</a></li>
        </ol>
      </div>
    </section>
  )
}
