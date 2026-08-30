import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'
import { Container } from './ui/Container'
import { Button } from './ui/Button'
import {
  IconTooth,
  IconScanFrame,
  IconLeaf,
  IconOrbit,
  IconShieldCheck,
  IconCrown,
  IconWaves,
  IconSparkle,
} from './icons'

const services = [
  {
    category: 'General',
    title: 'Comprehensive exams & cleanings',
    body: 'A thorough exam, digital imaging and a professional cleaning, with time to actually talk through what we find.',
    icon: IconTooth,
  },
  {
    category: 'General',
    title: 'iTero Element digital scanning',
    body: 'A digital scanner replaces messy impression trays and lets you see your own scan on screen in minutes.',
    icon: IconScanFrame,
  },
  {
    category: 'General',
    title: 'Periodontal & gum health',
    body: 'Ongoing care for gum disease and bleeding gums, including AirFlow cleanings for stubborn stain and buildup.',
    icon: IconLeaf,
  },
  {
    category: 'General',
    title: 'Sleep apnea & snoring',
    body: 'Screening for sleep-disordered breathing and custom oral appliances as an alternative to CPAP for suitable patients.',
    icon: IconOrbit,
  },
  {
    category: 'Restorative',
    title: 'Porcelain crowns',
    body: 'Full-coverage crowns that rebuild a damaged or root-treated tooth and are shade-matched to the teeth beside it.',
    icon: IconShieldCheck,
  },
  {
    category: 'Restorative',
    title: 'Full mouth rehabilitation',
    body: 'A staged plan that rebuilds function, bite and appearance when several areas need attention at once.',
    icon: IconCrown,
  },
  {
    category: 'Cosmetic',
    title: 'Invisalign clear aligners',
    body: 'Removable clear aligners that straighten teeth gradually, planned digitally from your own scan.',
    icon: IconWaves,
  },
  {
    category: 'Cosmetic',
    title: 'Porcelain veneers',
    body: 'Thin custom porcelain facings designed to change shape, alignment and colour while looking natural.',
    icon: IconSparkle,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="flex w-full flex-col items-center bg-white px-4 py-14 md:px-7 md:py-[72px] lg:px-10 lg:py-[90px]">
      <Container className="flex flex-col items-start gap-11">
        <Reveal className="flex w-full flex-col items-start gap-6 md:flex-row md:flex-wrap md:items-end md:justify-between">
          <div className="flex max-w-[620px] flex-1 flex-col items-start gap-4">
            <Eyebrow>Our services</Eyebrow>
            <h2 className="text-[30px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[36px] lg:text-[44px]">
              General, restorative and cosmetic care under one roof
            </h2>
          </div>
          <Button to="/services" variant="secondary">
            See all services
          </Button>
        </Reveal>

        <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-[18px]">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 0.06}>
              <div className="flex h-full flex-col items-start gap-3.5 rounded-[20px] border border-border bg-cream p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-white">
                    <service.icon className="h-[21px] w-[21px] text-green" />
                  </div>
                  <span className="rounded-full bg-peach px-[11px] py-[5px] text-[11px] font-semibold uppercase leading-none tracking-[0.08em] text-green">
                    {service.category}
                  </span>
                </div>
                <h4 className="text-lg font-semibold leading-[1.3] tracking-[-0.015em] text-ink">
                  {service.title}
                </h4>
                <p className="text-[15px] leading-[1.55] text-stone">{service.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
