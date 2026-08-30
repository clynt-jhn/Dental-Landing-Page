import { Reveal } from './ui/Reveal'
import { Container } from './ui/Container'
import { Button } from './ui/Button'
import { IconPhone } from './icons'

export function ClosingCTA() {
  return (
    <section className="flex w-full flex-col items-center bg-cream px-4 pb-16 pt-10 md:px-7 md:pb-[84px] md:pt-14 lg:px-10 lg:pb-24 lg:pt-[70px]">
      <Container>
        <Reveal>
          <div className="flex w-full flex-wrap items-center justify-between gap-9 rounded-[22px] bg-green-dark px-6 py-9 md:rounded-[26px] md:px-10 md:py-12 lg:rounded-[30px] lg:px-14 lg:py-[60px]">
            <div className="flex min-w-[320px] max-w-[560px] flex-1 flex-col items-start gap-4">
              <h2 className="text-[26px] font-bold leading-[1.08] tracking-[-0.03em] text-white md:text-[32px] lg:text-[40px]">
                Whenever you are ready,{' '}
                <span className="font-serif italic font-medium text-apricot">we are</span>
              </h2>
              <p className="max-w-[480px] text-base leading-[1.6] text-white/66 lg:text-[17px]">
                New patients are welcome at 133 East 58th Street, Suite 409. Request a time
                online, or call the office and speak to someone directly.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button to="/contact" variant="light">
                Request an appointment
              </Button>
              <a
                href="tel:+12128380842"
                className="flex items-center gap-2.5 rounded-full border border-white/[0.22] px-[22px] py-3.5 text-[15px] font-medium text-white"
              >
                <IconPhone className="h-[17px] w-[17px]" />
                (212) 838-0842
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
