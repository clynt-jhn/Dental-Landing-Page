import smileDesign from '../assets/images/gallery-smile-design.jpg'
import veneers from '../assets/images/gallery-veneers.jpg'
import compositeBonding from '../assets/images/gallery-composite-bonding.jpg'
import porcelainCrowns from '../assets/images/gallery-porcelain-crowns.jpg'
import fullMouth from '../assets/images/gallery-full-mouth.jpg'
import invisalign from '../assets/images/gallery-invisalign.jpg'
import zoomWhitening from '../assets/images/gallery-zoom-whitening.jpg'
import whiteSpots from '../assets/images/gallery-white-spots.jpg'
import laserSurgery from '../assets/images/gallery-laser-surgery.jpg'
import dentures from '../assets/images/gallery-dentures.jpg'
import { PageHeader } from '../components/ui/PageHeader'
import { Reveal } from '../components/ui/Reveal'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { CompareSlider } from '../components/ui/CompareSlider'
import { IconGear } from '../components/icons'

const items = [
  {
    label: 'Smile design',
    description:
      'Full cosmetic planning cases where shape, alignment and shade were mapped before treatment began.',
    image: smileDesign,
  },
  {
    label: 'Porcelain veneers',
    description:
      'Thin custom porcelain facings used to change the shape, alignment and colour of front teeth.',
    image: veneers,
  },
  {
    label: 'Composite bonding',
    description:
      'Cracked, chipped and broken teeth repaired with tooth-coloured composite in a single visit.',
    image: compositeBonding,
  },
  {
    label: 'Porcelain crowns',
    description:
      'Damaged and root-treated teeth rebuilt with crowns shade-matched to the teeth beside them.',
    image: porcelainCrowns,
  },
  {
    label: 'Full mouth rehabilitation',
    description: 'Staged cases that rebuilt bite, function and appearance across the whole mouth.',
    image: fullMouth,
  },
  {
    label: 'Invisalign',
    description: 'Clear aligner cases showing movement from the starting scan to the finished alignment.',
    image: invisalign,
  },
  {
    label: 'Zoom whitening',
    description: 'In-office laser whitening results, in some cases seven to eight shades lighter.',
    image: zoomWhitening,
  },
  {
    label: 'White spot removal',
    description: 'ICON resin infiltration blending white spot lesions back into the surrounding enamel.',
    image: whiteSpots,
  },
  {
    label: 'Laser surgery',
    description: 'Minimally invasive hard and soft tissue treatment carried out with a dental laser.',
    image: laserSurgery,
  },
  {
    label: 'Dentures',
    description: 'Full and partial dentures in acrylic resin or porcelain, fitted for everyday function.',
    image: dentures,
  },
]

export function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Before & after"
        title={
          <>
            Real cases, treated in{' '}
            <span className="font-serif italic font-medium text-terracotta">this chair</span>
          </>
        }
        intro="Every case below was planned and completed at 133 East 58th Street. Browse by the kind of work involved (cosmetic, restorative or a full rebuild) and ask to see comparable cases when you come in."
      />

      <section className="flex w-full flex-col items-center bg-white px-4 py-14 md:px-7 md:py-[72px] lg:px-10 lg:py-[90px]">
        <Container className="flex flex-col items-start gap-8">
          <Reveal>
            <h2 className="text-[30px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[36px] lg:text-[44px]">
              Browse by treatment
            </h2>
          </Reveal>

          <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
            {items.map((item, i) => (
              <Reveal key={item.label} delay={(i % 5) * 0.06}>
                <div className="flex h-full flex-col items-start overflow-hidden rounded-[20px] border border-border bg-white">
                  <CompareSlider src={item.image} alt={`${item.label} case`} />
                  <div className="flex flex-col items-start gap-1.5 px-[18px] pb-[18px] pt-2.5">
                    <h4 className="text-lg font-semibold leading-[1.3] tracking-[-0.015em] text-ink">
                      {item.label}
                    </h4>
                    <p className="text-[15px] leading-[1.55] text-stone">{item.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="w-full">
            <div className="flex w-full items-start gap-3 rounded-2xl border border-border bg-cream p-5">
              <IconGear className="mt-0.5 h-4 w-4 shrink-0 text-stone" />
              <p className="text-[15px] leading-[1.55] text-stone">
                Every case shown was treated by Dr. Inna Chern at New York General Dentistry and
                is published with patient consent. Individual results vary. Ask at your
                consultation to see cases comparable to your own.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="flex w-full flex-col items-center bg-cream px-4 pb-16 pt-10 md:px-7 md:pb-[84px] md:pt-14 lg:px-10 lg:pb-24 lg:pt-[70px]">
        <Container>
          <Reveal>
            <div className="flex w-full flex-wrap items-center justify-between gap-9 rounded-[22px] bg-green-dark px-6 py-9 md:rounded-[26px] md:px-10 md:py-12 lg:rounded-[30px] lg:px-14 lg:py-[60px]">
              <div className="flex min-w-[320px] max-w-[560px] flex-1 flex-col items-start gap-4">
                <h2 className="text-[26px] font-bold leading-[1.12] tracking-[-0.03em] text-white md:text-[32px] lg:text-[36px]">
                  Curious what is realistic for your smile?
                </h2>
                <p className="max-w-[480px] text-base leading-[1.6] text-white/66 lg:text-[17px]">
                  A smile design consultation maps what is achievable before any treatment
                  starts, including what you would rather leave alone.
                </p>
              </div>
              <Button to="/contact" variant="light">
                Book a consultation
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
