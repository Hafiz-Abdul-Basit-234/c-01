export const BIZ = {
  name: 'MR. FIX MY PHONE',
  phone: '+1 646-542-0532',
  tel: 'tel:+16465420532',
  address: '267 5th Ave, Suite #106, LL1, New York, NY 10016, USA',
  rating: '5.0', reviews: 285,
}
export const DIRECTIONS = 'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(BIZ.address)
export const NAV = [
  ['Home', 'home'], ['Repair Services', 'services'], ['Why Choose Us', 'why'], ['Reviews', 'reviews'], ['Contact', 'contact'],
]
export const SERVICES = [
  ['iPhone Repair', 'Diagnosis and repair for iPhone problems, from cracked displays to faults you can’t pin down.', 'Smartphone'],
  ['Screen Replacement', 'Cracked or unresponsive screen on your phone? Ask about replacing it.', 'PanelTop'],
  ['Battery Replacement', 'Phone dying early or shutting off? Ask about a new battery.', 'BatteryCharging'],
  ['Samsung Repair', 'Repairs for Samsung phones. Tell us the model and the issue.', 'TabletSmartphone'],
  ['iPad & Tablet Repair', 'Help with damaged or faulty iPads and other tablets.', 'Tablet'],
  ['MacBook Repair', 'Describe what’s wrong with your MacBook and we’ll discuss options.', 'Laptop'],
  ['LCD & Glass Repair', 'Display and glass damage on phones and tablets.', 'Layers'],
  ['Screen Protector Installation', 'Get a protector fitted so your screen starts with extra cover.', 'ScanLine'],
]
export const EXCERPTS = ['Quick repair and fair price.', 'Superfast repaired at good price.', 'Fast, easy and cheap repairs.']
