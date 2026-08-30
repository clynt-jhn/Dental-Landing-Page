import officeImg from '../assets/images/about-office.jpg'
import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'
import { Container } from './ui/Container'
import { Button } from './ui/Button'
import { IconCheckCircle } from './icons'

const bullets = [
  'Hour-long appointments so treatment is explained, not rushed',
  'Sleep, airway and wellness considered alongside your teeth',
  'Emergencies and special cases seen on Sundays by request',
]

export function AboutSection() {
  return (
    <section id="about" className="flex w-full flex-col items-center bg-cream px-4 py-9 md:px-7 md:py-12 lg:px-10 lg:py-[60px]">
      <Reveal className="w-full max-w-[1120px]">
        <Container className="flex flex-col overflow-hidden rounded-[22px] border border-border bg-white p-4 md:rounded-[26px] lg:flex-row lg:rounded-[28px]">
          <img
            src={officeImg}
            alt="Dr. Inna Chern, DDS FAGD"
            className="h-[240px] w-full rounded-[20px] object-cover object-[center_18%] md:h-[520px] lg:h-[540px] lg:w-[420px]"
          />
          <div className="flex flex-1 flex-col items-start gap-[18px] px-[22px] pb-8 pt-8 md:gap-[22px] md:px-10 md:py-11 lg:py-10 lg:pl-9 lg:pr-10">
            <Eyebrow>About the practice</Eyebrow>
            <h2 className="text-[28px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[34px] lg:text-[42px]">
              Led by Dr. Inna Chern, with{' '}
              <span className="font-serif italic font-medium text-terracotta">patience</span> as
              the method
            </h2>
            <p className="text-base leading-[1.62] text-stone lg:text-[17px]">
              New York General Dentistry is a Midtown East practice where general, restorative and
              cosmetic care all happen in one place. Dr. Chern built it around three commitments:
              personalised care, a genuinely comfortable office, and a health-first approach that
              treats your mouth as part of the rest of you.
            </p>
            <ul className="flex flex-col items-start gap-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-[11px]">
                  <IconCheckCircle className="mt-0.5 h-[18px] w-[18px] shrink-0 text-green" />
                  <span className="text-[15px] leading-[1.55] text-stone">{bullet}</span>
                </li>
              ))}
            </ul>
            <Button to="/about" variant="secondary">
              Meet Dr. Chern
            </Button>
          </div>
        </Container>
      </Reveal>
    </section>
  )
}
