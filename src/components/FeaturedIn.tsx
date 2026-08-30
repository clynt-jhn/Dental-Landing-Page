import gq from '../assets/images/press-gq.png'
import wellGood from '../assets/images/press-wellgood.png'
import shape from '../assets/images/press-shape.png'
import theHealthy from '../assets/images/press-thehealthy.png'
import eatThisNotThat from '../assets/images/press-eatthisnotthat.png'
import bestLift from '../assets/images/press-bestlift.png'
import { Reveal } from './ui/Reveal'
import { Container } from './ui/Container'

const logos = [
  { src: gq, alt: 'GQ', width: 84 },
  { src: wellGood, alt: 'Well+Good', width: 132 },
  { src: shape, alt: 'Shape', width: 108 },
  { src: theHealthy, alt: 'The Healthy', width: 128 },
  { src: eatThisNotThat, alt: 'Eat This, Not That', width: 122 },
  { src: bestLift, alt: 'BestLift', width: 112 },
]

export function FeaturedIn() {
  return (
    <section className="flex w-full flex-col items-center px-4 pb-3 pt-9 md:px-7 md:pb-4 md:pt-11 lg:px-10 lg:pb-5 lg:pt-14">
      <Reveal>
        <Container className="flex flex-col items-center gap-[18px] lg:gap-[26px]">
          <p className="text-center text-[13px] font-medium leading-[1.4] tracking-[0.02em] text-stone">
            Dr. Chern&rsquo;s work has been featured in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-9 lg:gap-[38px]">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                style={{ width: logo.width }}
                className="h-auto opacity-[0.62]"
              />
            ))}
          </div>
        </Container>
      </Reveal>
    </section>
  )
}
