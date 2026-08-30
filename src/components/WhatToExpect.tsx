import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'
import { Container } from './ui/Container'
import { IconClock, IconCare, IconScanFrame, IconPin } from './icons'

const items = [
  {
    icon: IconClock,
    title: 'A full hour, every time',
    body: 'Appointments are booked in one-hour slots, so there is room for questions, a proper exam and a plan you leave with.',
  },
  {
    icon: IconCare,
    title: 'Care without judgment',
    body: 'However long it has been since your last visit, you will be met with a starting point rather than a lecture.',
  },
  {
    icon: IconScanFrame,
    title: 'Modern, comfortable tools',
    body: 'Digital iTero scanning, laser dentistry and AirFlow cleanings replace the parts of dentistry people dread most.',
  },
  {
    icon: IconPin,
    title: 'Easy to reach, easy to fit in',
    body: '133 East 58th Street, Suite 409, with evening hours on Mondays and Thursdays and Sundays by request.',
  },
]

export function WhatToExpect() {
  return (
    <section id="expect" className="flex w-full flex-col items-center bg-cream px-4 py-12 md:px-7 md:py-16 lg:px-10 lg:py-[86px] lg:pb-12">
      <Container className="flex flex-col items-start gap-11">
        <Reveal className="flex w-full max-w-[620px] flex-col items-start gap-4">
          <Eyebrow>What to expect</Eyebrow>
          <h2 className="text-balance text-[30px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[36px] lg:text-[44px]">
            A practice built around the way people actually live
          </h2>
        </Reveal>

        <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex h-full flex-col items-start gap-4 rounded-[20px] border border-border bg-white p-[26px] pt-7">
                <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[13px] bg-peach">
                  <item.icon className="h-[22px] w-[22px] text-green" />
                </div>
                <h3 className="text-lg font-semibold leading-[1.3] tracking-[-0.015em] text-ink">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.55] text-stone">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
