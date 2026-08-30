import smileDesign from '../assets/images/gallery-smile-design.jpg'
import veneers from '../assets/images/gallery-veneers.jpg'
import invisalign from '../assets/images/gallery-invisalign.jpg'
import zoomWhitening from '../assets/images/gallery-zoom-whitening.jpg'
import fullMouth from '../assets/images/gallery-full-mouth.jpg'
import whiteSpots from '../assets/images/gallery-white-spots.jpg'
import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'
import { Container } from './ui/Container'
import { Button } from './ui/Button'

const cases = [
  { image: smileDesign, label: 'Smile design' },
  { image: veneers, label: 'Porcelain veneers' },
  { image: invisalign, label: 'Invisalign' },
  { image: zoomWhitening, label: 'Zoom whitening' },
  { image: fullMouth, label: 'Full mouth rehab' },
  { image: whiteSpots, label: 'White spot removal' },
]

export function GalleryTeaser() {
  return (
    <section id="gallery" className="flex w-full flex-col items-center bg-cream px-4 py-12 md:px-7 md:py-16 lg:px-10 lg:py-20">
      <Container>
        <Reveal>
          <div className="flex w-full flex-col items-start gap-7 rounded-[22px] bg-peach p-5 md:gap-9 md:rounded-[26px] md:p-10 lg:flex-row lg:flex-wrap lg:items-center lg:gap-12 lg:rounded-[28px] lg:p-12">
            <div className="flex min-w-[280px] max-w-[420px] flex-1 flex-col items-start gap-4">
              <Eyebrow>Before &amp; after</Eyebrow>
              <h2 className="text-[28px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[34px] lg:text-[38px]">
                See the work before you commit to it
              </h2>
              <p className="text-[15px] leading-[1.6] text-stone lg:text-base">
                Ten categories of finished cases: smile design, veneers, bonding, crowns,
                Invisalign, whitening, white spot removal and full mouth rebuilds.
              </p>
              <Button to="/gallery" variant="primary">
                Open the gallery
              </Button>
            </div>

            <div className="grid min-w-[300px] flex-1 grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-3">
              {cases.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-start gap-2.5 rounded-2xl bg-white p-[18px] pt-5"
                >
                  <img
                    src={item.image}
                    alt={`${item.label} case, before and after`}
                    className="aspect-square w-full rounded-[10px] object-cover"
                  />
                  <p className="text-[15px] font-medium leading-[1.4] tracking-[-0.005em] text-ink">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
