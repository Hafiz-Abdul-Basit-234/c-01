import { MapPin, Layers, Star, PhoneCall, MessageSquareText } from 'lucide-react'
import { BIZ } from '../data.js'
const items = [
  [MapPin, 'A Manhattan address', 'Based on 5th Ave in New York, easy to find with directions one tap away.'],
  [Layers, 'Several device types, one shop', 'Phones, tablets and MacBooks are all on the repair list.'],
  [Star, 'Reviews to read', `Rated ${BIZ.rating} from ${BIZ.reviews} Google reviews (figures supplied for this concept).`],
  [PhoneCall, 'Contact made simple', 'Call, or send your device details through the enquiry form.'],
  [MessageSquareText, 'Direct quote enquiries', 'Describe the problem and ask the team about your repair options.'],
]
export default function Why() {
  return (
    <section id="why" className="sec sec-dark">
      <div className="wrap why">
        <div className="why-lead"><h2>Why customers might choose Mr. Fix My Phone</h2>
          <p>A local shop with a clear way to get in touch, and repairs across the devices people rely on most.</p></div>
        <dl className="why-list">{items.map(([I, t, d]) => <div key={t}><dt><I size={20} aria-hidden="true" />{t}</dt><dd>{d}</dd></div>)}</dl>
      </div>
    </section>
  )
}
