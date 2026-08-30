import ada from '../assets/images/affil-ada.png'
import nysda from '../assets/images/affil-nysda.png'
import aacd from '../assets/images/affil-aacd.png'
import agd from '../assets/images/affil-agd.png'
import spear from '../assets/images/affil-spear.png'
import usnews from '../assets/images/affil-usnews.png'
import { Reveal } from './ui/Reveal'
import { Container } from './ui/Container'

const logos = [
  { src: ada, alt: 'American Dental Association', width: 120 },
  { src: nysda, alt: 'New York State Dental Association', width: 120 },
  { src: aacd, alt: 'American Academy of Cosmetic Dentistry', width: 128 },
  { src: agd, alt: 'Academy of General Dentistry', width: 130 },
  { src: spear, alt: 'Spear Education', width: 104 },
  { src: usnews, alt: 'U.S. News', width: 96 },
]

export function Affiliations() {
  return (
    <section className="flex w-full flex-col items-center bg-cream px-4 py-12 md:px-7 md:py-[60px] lg:px-10 lg:py-[76px]">
      <Container>
        <Reveal>
          <div className="flex w-full flex-col items-center gap-7 rounded-[28px] bg-green-dark px-5 py-9 md:gap-[30px] md:px-10 md:py-11">
            <p className="text-center text-sm font-medium leading-[1.4] tracking-[-0.005em] text-white/60">
              Professional memberships and affiliations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-[46px]">
              {logos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  style={{ width: logo.width }}
                  className="h-auto opacity-75"
                />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
