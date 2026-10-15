import { useState } from 'react'
import { Phone, MapPin } from 'lucide-react'
import { BIZ, DIRECTIONS, SERVICES } from '../data.js'
export default function Contact({ service, setService }) {
  const [v, setV] = useState({ name: '', contact: '', device: '', issue: '' })
  const [err, setErr] = useState({})
  const [done, setDone] = useState(false)
  const set = k => e => setV({ ...v, [k]: e.target.value })
  const submit = e => {
    e.preventDefault()
    const x = {}
    if (!v.name.trim()) x.name = 'Enter your name.'
    const c = v.contact.trim()
    if (!c) x.contact = 'Enter an email address or phone number.'
    else if (!(/^\S+@\S+\.\S+$/.test(c) || c.replace(/\D/g, '').length >= 7)) x.contact = 'Enter a valid email or phone number.'
    if (!v.device.trim()) x.device = 'Enter your device model.'
    if (v.issue.trim().length < 5) x.issue = 'Describe the issue in a few words.'
    setErr(x); setDone(Object.keys(x).length === 0)
  }
  const F = ({ id, label, children }) => <div className="field"><label htmlFor={id}>{label}</label>{children}{err[id] && <p className="err" id={id + '-e'} role="alert">{err[id]}</p>}</div>
  const a = id => ({ id, 'aria-invalid': !!err[id], 'aria-describedby': err[id] ? id + '-e' : undefined })
  return (
    <section id="contact" className="sec sec-dark">
      <div className="wrap contact">
        <div>
          <h2>Ask for a repair quote</h2>
          <p className="lede">Call the shop, or fill in the form with your device and the problem.</p>
          <address><p><MapPin size={18} aria-hidden="true" />{BIZ.address}</p><p><Phone size={18} aria-hidden="true" /><a href={BIZ.tel}>{BIZ.phone}</a></p></address>
          <div className="ctas"><a className="btn btn-primary" href={BIZ.tel}>Call for a Quote</a><a className="btn btn-ghost" href={DIRECTIONS} target="_blank" rel="noopener noreferrer">Get Directions</a></div>
        </div>
        <form onSubmit={submit} noValidate>
          <p className="demo">Frontend demo: this form is not connected to a backend, so nothing is sent or stored.</p>
          <F id="name" label="Name"><input {...a('name')} autoComplete="name" value={v.name} onChange={set('name')} /></F>
          <F id="contact" label="Email or phone"><input {...a('contact')} autoComplete="email" value={v.contact} onChange={set('contact')} /></F>
          <div className="field"><label htmlFor="service">Repair type</label>
            <select id="service" value={service} onChange={e => setService(e.target.value)}><option value="">Not sure yet</option>{SERVICES.map(s => <option key={s[0]}>{s[0]}</option>)}</select></div>
          <F id="device" label="Device model"><input {...a('device')} placeholder="e.g. iPhone 13" value={v.device} onChange={set('device')} /></F>
          <F id="issue" label="Issue description"><textarea {...a('issue')} rows="4" value={v.issue} onChange={set('issue')} /></F>
          <button className="btn btn-primary" type="submit">Check my enquiry</button>
          {done && <p className="ok" role="status">Your details look complete. This demo can’t send them, so please call <a href={BIZ.tel}>{BIZ.phone}</a> to get your quote.</p>}
        </form>
      </div>
    </section>
  )
}
