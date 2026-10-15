import { useEffect, useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { BIZ, NAV } from '../data.js'
export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    NAV.forEach(([, id]) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  useEffect(() => { const k = e => e.key === 'Escape' && setOpen(false); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [])
  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <a href="#home" className="logo" aria-label="MR. FIX MY PHONE home"><span className="logo-mark" aria-hidden="true" />MR. FIX <b>MY PHONE</b></a>
        <nav id="nav" className={'nav' + (open ? ' open' : '')} aria-label="Primary">
          {NAV.map(([l, id]) => <a key={id} href={'#' + id} onClick={() => setOpen(false)} aria-current={active === id ? 'true' : undefined}>{l}</a>)}
          <a className="btn btn-primary nav-cta" href={BIZ.tel}><Phone size={16} aria-hidden="true" />Call for a Quote</a>
        </nav>
        <button className="burger" aria-expanded={open} aria-controls="nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  )
}
