import { Smartphone, PanelTop, BatteryCharging, TabletSmartphone, Tablet, Laptop, Layers, ScanLine } from 'lucide-react'
const Icons = { Smartphone, PanelTop, BatteryCharging, TabletSmartphone, Tablet, Laptop, Layers, ScanLine }
import { SERVICES } from '../data.js'
export default function Services({ onPick }) {
  return (
    <section id="services" className="sec">
      <div className="wrap">
        <div className="sec-head"><h2>Repair services for phones, tablets and laptops</h2>
          <p>Pick the closest match and we’ll start your quote enquiry with it. Pricing is given by the shop on request.</p></div>
        <ul className="svc">
          {SERVICES.map(([name, desc, icon]) => { const I = Icons[icon]; return (
            <li key={name}>
              <span className="svc-ic"><I size={22} aria-hidden="true" /></span>
              <div><h3>{name}</h3><p>{desc}</p></div>
              <a className="link" href="#contact" onClick={() => onPick(name)} aria-label={'Request a quote for ' + name}>Request a Quote</a>
            </li>) })}
        </ul>
      </div>
    </section>
  )
}
