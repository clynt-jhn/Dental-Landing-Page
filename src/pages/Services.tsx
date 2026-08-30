import { PageHeader } from '../components/ui/PageHeader'
import { Reveal } from '../components/ui/Reveal'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import {
  IconTooth,
  IconScanFrame,
  IconBolt,
  IconLeaf,
  IconShieldCheck,
  IconOrbit,
  IconGear,
  IconSparkleWand,
  IconCrown,
  IconClock,
  IconCheckCircle,
  IconCare,
  IconWaves,
  IconSparkle,
  IconStar,
} from '../components/icons'

const categories = [
  {
    id: 'general',
    label: 'General',
    name: 'General dentistry',
    description:
      'Exams, cleanings, gum health and the diagnostic work that keeps small problems small.',
    sectionBg: 'bg-white',
    cardBg: 'bg-cream',
    services: [
      {
        title: 'Comprehensive exams & cleanings',
        body: 'A thorough exam, digital imaging and a professional cleaning, with time to actually talk through what we find.',
        icon: IconTooth,
      },
      {
        title: 'iTero Element digital scanning',
        body: 'A digital scanner replaces messy impression trays and lets you see your own scan on screen in minutes.',
        icon: IconScanFrame,
      },
      {
        title: 'Laser dentistry',
        body: 'Laser-assisted treatment for soft-tissue procedures, often with less bleeding and a faster recovery.',
        icon: IconBolt,
      },
      {
        title: 'Periodontal & gum health',
        body: 'Ongoing care for gum disease and bleeding gums, including AirFlow cleanings for stubborn stain and buildup.',
        icon: IconLeaf,
      },
      {
        title: 'Oral surgery',
        body: 'Extractions and minor surgical procedures handled in-office, with sedation options discussed in advance.',
        icon: IconShieldCheck,
      },
      {
        title: 'Sleep apnea & snoring',
        body: 'Screening for sleep-disordered breathing and custom oral appliances as an alternative to CPAP for suitable patients.',
        icon: IconOrbit,
      },
      {
        title: 'TMJ treatment',
        body: 'Care for jaw pain, clenching and grinding, including night guards and BOTOX for muscle-driven discomfort.',
        icon: IconGear,
      },
      {
        title: 'BOTOX for dental concerns',
        body: 'Therapeutic BOTOX used to relieve clenching, grinding and TMJ-related muscle tension.',
        icon: IconSparkleWand,
      },
    ],
  },
  {
    id: 'restorative',
    label: 'Restorative',
    name: 'Restorative dentistry',
    description:
      'Rebuilding teeth that are damaged, worn or missing, so your bite works the way it should.',
    sectionBg: 'bg-cream',
    cardBg: 'bg-white',
    services: [
      {
        title: 'Porcelain crowns',
        body: 'Full-coverage crowns that rebuild a damaged or root-treated tooth and are shade-matched to the teeth beside it.',
        icon: IconCrown,
      },
      {
        title: 'Dental bridges',
        body: 'A fixed replacement for a missing tooth, anchored to the healthy teeth on either side of the gap.',
        icon: IconCheckCircle,
      },
      {
        title: 'Dental bonding',
        body: 'Tooth-coloured composite used to repair chips, close small gaps and reshape edges in a single visit.',
        icon: IconCare,
      },
      {
        title: 'Inlays & onlays',
        body: 'Custom-made restorations for teeth too damaged for a filling but not yet in need of a full crown.',
        icon: IconGear,
      },
      {
        title: 'Root canal therapy',
        body: 'Treatment that removes infection from inside the tooth so the tooth itself can be kept.',
        icon: IconShieldCheck,
      },
      {
        title: 'Dentures',
        body: 'Full and partial dentures, fitted and adjusted for comfortable everyday function.',
        icon: IconTooth,
      },
      {
        title: 'Full mouth rehabilitation',
        body: 'A staged plan that rebuilds function, bite and appearance when several areas need attention at once.',
        icon: IconClock,
      },
    ],
  },
  {
    id: 'cosmetic',
    label: 'Cosmetic',
    name: 'Cosmetic dentistry',
    description:
      'Changing the shape, alignment and colour of a smile without making it look done.',
    sectionBg: 'bg-white',
    cardBg: 'bg-cream',
    services: [
      {
        title: 'Invisalign clear aligners',
        body: 'Removable clear aligners that straighten teeth gradually, planned digitally from your own scan.',
        icon: IconWaves,
      },
      {
        title: 'Porcelain veneers',
        body: 'Thin custom porcelain facings designed to change shape, alignment and colour while looking natural.',
        icon: IconSparkle,
      },
      {
        title: 'Smile design consultation',
        body: 'A planning session where we map what is achievable for your smile before any treatment begins.',
        icon: IconStar,
      },
      {
        title: 'Professional teeth whitening',
        body: 'In-office and take-home whitening, matched to your enamel and sensitivity.',
        icon: IconSparkleWand,
      },
      {
        title: 'ICON white spot removal',
        body: 'A minimally invasive resin treatment that blends white spot lesions back into the surrounding enamel.',
        icon: IconCheckCircle,
      },
      {
        title: 'Vivera retainers',
        body: 'Custom retainers from Invisalign that hold your result steady after orthodontic treatment.',
        icon: IconShieldCheck,
      },
      {
        title: 'Facial aesthetics',
        body: 'Conservative facial treatments offered alongside dental care to support a natural, rested look.',
        icon: IconCare,
      },
    ],
  },
  {
    id: 'specialty',
    label: 'Specialty',
    name: 'Specialty care',
    description:
      'The parts of dentistry that sit alongside everything else: gum aesthetics and whole-body wellness.',
    sectionBg: 'bg-cream',
    cardBg: 'bg-white',
    services: [
      {
        title: 'Gum contouring',
        body: 'Reshaping the gum line to even out a gummy or uneven smile, often paired with veneers or bonding.',
        icon: IconLeaf,
      },
      {
        title: 'Wellness in dentistry',
        body: 'Care that connects oral health to sleep, airway, nutrition and overall wellbeing rather than treating teeth in isolation.',
        icon: IconCare,
      },
    ],
  },
]

const quickLinks = [
  { href: '#general', label: 'General dentistry' },
  { href: '#restorative', label: 'Restorative dentistry' },
  { href: '#cosmetic', label: 'Cosmetic dentistry' },
  { href: '#specialty', label: 'Specialty care' },
]

export function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Everything this practice does, in one place"
        intro="General, restorative, cosmetic and specialty care are all delivered under one roof at 133 East 58th Street, which means fewer referrals, fewer repeated scans, and one team that knows your history."
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-green"
            >
              {link.label}
            </a>
          ))}
        </div>
      </PageHeader>

      {categories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className={`flex w-full flex-col items-center ${category.sectionBg} px-4 py-14 md:px-7 md:py-[72px] lg:px-10 lg:py-[90px]`}
        >
          <Container className="flex flex-col items-start gap-11">
            <Reveal className="flex max-w-[680px] flex-col items-start gap-4">
              <Eyebrow>{category.label}</Eyebrow>
              <h2 className="text-[26px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[30px] lg:text-[36px]">
                {category.name}
              </h2>
              <p className="max-w-[620px] text-[15px] leading-[1.6] text-stone lg:text-base">
                {category.description}
              </p>
            </Reveal>

            <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-[18px]">
              {category.services.map((service, i) => (
                <Reveal key={service.title} delay={(i % 3) * 0.06}>
                  <div
                    className={`flex h-full flex-col items-start gap-3.5 rounded-[20px] border border-border ${category.cardBg} p-6`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-white">
                        <service.icon className="h-[21px] w-[21px] text-green" />
                      </div>
                      <span className="rounded-full bg-peach px-[11px] py-[5px] text-[11px] font-semibold uppercase leading-none tracking-[0.08em] text-green">
                        {category.label}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold leading-[1.3] tracking-[-0.015em] text-ink">
                      {service.title}
                    </h3>
                    <p className="text-[15px] leading-[1.55] text-stone">{service.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section className="flex w-full flex-col items-center bg-white px-4 py-14 md:px-7 md:py-[72px] lg:px-10 lg:py-[90px]">
        <Container>
          <Reveal>
            <div className="flex w-full flex-col items-start gap-7 rounded-[22px] bg-green-dark px-6 py-9 md:flex-row md:flex-wrap md:items-center md:justify-between md:rounded-[26px] md:px-10 md:py-12 lg:rounded-[30px] lg:px-14 lg:py-[60px]">
              <div className="flex max-w-[560px] flex-col items-start gap-3">
                <h2 className="text-[26px] font-bold leading-[1.08] tracking-[-0.03em] text-white md:text-[32px] lg:text-[40px]">
                  Not sure where to{' '}
                  <span className="font-serif italic font-medium text-apricot">start</span>?
                </h2>
                <p className="max-w-[480px] text-base leading-[1.6] text-white/66 lg:text-[17px]">
                  Book a consultation and we will walk through what is going on, what your
                  options are, and what we would actually recommend.
                </p>
              </div>

              <Button to="/contact" variant="primary">
                Book a visit
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
