import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import Why from './components/Why.jsx'
import Reviews from './components/Reviews.jsx'
import Steps from './components/Steps.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
export default function App() {
  const [service, setService] = useState('')
  return (<><a className="skip" href="#main">Skip to content</a><Header /><main id="main"><Hero /><Services onPick={setService} /><Why /><Reviews /><Steps /><Contact service={service} setService={setService} /></main><Footer /></>)
}
