import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'
import { Container } from './ui/Container'
import { IconScanFrame, IconBolt, IconWaves, IconSparkleWand } from './icons'

const items = [
  {
    icon: IconScanFrame,
    title: 'iTero Element scanner',
    body: 'A digital scan of your teeth in minutes, with no impression putty, and you see the result on screen.',
  },
  {
    icon: IconBolt,
    title: 'Laser dentistry',
    body: 'Soft-tissue procedures handled with a dental laser, often meaning less bleeding and a quicker recovery.',
  },
  {
    icon: IconWaves,
    title: 'AirFlow cleanings',
    body: 'Fine powder and warm water lift stain and biofilm, which is gentler than traditional scaling for many patients.',
  },
  {
    icon: IconSparkleWand,
    title: 'Digital smile design',
    body: 'Plan veneers, whitening or alignment against a preview of the result before any treatment starts.',
  },
]

export function Technology() {
  return (
    <section id="technology" className="flex w-full flex-col items-center bg-cream px-4 py-14 md:px-7 md:py-[72px] lg:px-10 lg:py-[90px]">
      <Container>
        <Reveal>
          <div className="flex w-full flex-wrap items-start gap-8 rounded-[22px] bg-peach p-[22px] md:gap-9 md:rounded-[26px] md:p-9 lg:gap-14 lg:rounded-[28px] lg:p-12">
            <div className="flex min-w-[280px] max-w-[380px] flex-1 flex-col items-start gap-[18px]">
              <Eyebrow>In the operatory</Eyebrow>
              <h2 className="text-[28px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[34px] lg:text-[38px]">
                Technology chosen to make visits easier
              </h2>
              <p className="text-[15px] leading-[1.6] text-stone lg:text-base">
                Every piece of equipment here earns its place by removing something
                uncomfortable: the impression tray, the scraping, the guesswork about what happens
                next.
              </p>
            </div>

            <div className="grid min-w-[280px] flex-1 grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
              {items.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08} className="h-full">
                  <div className="flex h-full flex-col items-start gap-3 rounded-2xl bg-white p-[22px]">
                    <item.icon className="h-6 w-6 text-green" />
                    <h3 className="text-lg font-semibold leading-[1.3] tracking-[-0.015em] text-ink">
                      {item.title}
                    </h3>
                    <p className="text-[15px] leading-[1.55] text-stone">{item.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
