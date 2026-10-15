export default function RepairBench() {
  return (
    <figure className="bench">
      <svg viewBox="0 0 520 560" role="img" aria-label="Illustration of a smartphone opened on a repair mat with precision tools and a technician's gloved hands">
        <defs>
          <linearGradient id="mat" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1a2338" /><stop offset="1" stopColor="#0f1626" /></linearGradient>
          <linearGradient id="scr" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#3B82F6" /><stop offset="1" stopColor="#1e3a8a" /></linearGradient>
          <radialGradient id="lamp" cx=".5" cy=".1" r=".8"><stop offset="0" stopColor="#3B82F6" stopOpacity=".28" /><stop offset="1" stopColor="#3B82F6" stopOpacity="0" /></radialGradient>
        </defs>
        <rect width="520" height="560" rx="18" fill="url(#mat)" /><rect width="520" height="560" rx="18" fill="url(#lamp)" />
        <g stroke="#94A3B8" strokeOpacity=".12">{[80,160,240,320,400,480].map(y => <line key={y} x1="0" x2="520" y1={y} y2={y} />)}{[80,160,240,320,400,480].map(x => <line key={x} y1="0" y2="560" x1={x} x2={x} />)}</g>
        <g transform="rotate(-8 260 290)">
          <rect x="150" y="90" width="210" height="400" rx="34" fill="#0B1020" stroke="#94A3B8" strokeOpacity=".5" strokeWidth="2" />
          <rect x="162" y="104" width="186" height="372" rx="24" fill="#121826" />
          <rect x="176" y="150" width="158" height="120" rx="10" fill="#1b2437" stroke="#94A3B8" strokeOpacity=".25" />
          <circle cx="205" cy="180" r="14" fill="#3B82F6" fillOpacity=".85" /><circle cx="205" cy="180" r="6" fill="#0B1020" />
          <rect x="236" y="168" width="82" height="8" rx="4" fill="#94A3B8" fillOpacity=".4" /><rect x="236" y="186" width="56" height="8" rx="4" fill="#94A3B8" fillOpacity=".25" />
          <rect x="176" y="288" width="158" height="62" rx="10" fill="#1b2437" stroke="#3B82F6" strokeOpacity=".7" />
          <rect x="186" y="298" width="88" height="42" rx="6" fill="#0B1020" stroke="#94A3B8" strokeOpacity=".4" />
          <g fill="#F8FAFC" fillOpacity=".7">{[0,1,2,3,4,5].map(i => <circle key={i} cx={186+i*29} cy="372" r="3" />)}</g>
          <rect x="176" y="392" width="158" height="62" rx="10" fill="#1b2437" stroke="#94A3B8" strokeOpacity=".25" />
          <path d="M162 90 C210 40 300 40 350 70 L360 110 L150 110z" fill="url(#scr)" opacity=".9" transform="translate(40 -30) rotate(18 250 100)" />
        </g>
        <g transform="rotate(32 420 220)"><rect x="410" y="80" width="14" height="190" rx="7" fill="#94A3B8" /><rect x="408" y="60" width="18" height="46" rx="6" fill="#3B82F6" /><rect x="414" y="268" width="6" height="24" fill="#F8FAFC" /></g>
        <g><rect x="60" y="470" width="150" height="10" rx="5" fill="#94A3B8" fillOpacity=".6" /><path d="M60 470 L40 440 M210 470 L240 430" stroke="#F8FAFC" strokeWidth="3" strokeLinecap="round" /></g>
        <g fill="#94A3B8" fillOpacity=".7">{[0,1,2,3].map(i => <circle key={i} cx={330+i*26} cy="510" r="7" />)}</g>
        <path d="M0 560 C60 470 120 440 190 450 L210 560z" fill="#1d4ed8" fillOpacity=".25" /><path d="M0 560 C50 490 110 470 170 478 L180 560z" fill="#0B1020" fillOpacity=".7" />
      </svg>
      <figcaption>Concept illustration. Replace with shop photography when available.</figcaption>
    </figure>
  )
}
