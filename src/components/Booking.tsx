import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'
import { Container } from './ui/Container'
import { AppointmentForm } from './AppointmentForm'
import { OfficeInfoPanel } from './OfficeInfoPanel'

export function Booking() {
  return (
    <section id="booking" className="flex w-full flex-col items-center bg-white px-4 py-14 md:px-7 md:py-[72px] lg:px-10 lg:py-[90px]">
      <Container className="flex flex-col items-start gap-11">
        <Reveal className="flex w-full max-w-[620px] flex-col items-start gap-4">
          <Eyebrow>Appointments</Eyebrow>
          <h2 className="text-[30px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[36px] lg:text-[44px]">
            Request a visit in under a minute
          </h2>
          <p className="text-base leading-[1.62] text-stone lg:text-[17px]">
            Send a few details and the front desk will call you back to confirm a time. If it is
            urgent, call the office directly and ask about a same-week opening.
          </p>
        </Reveal>

        <div className="flex w-full flex-wrap items-start gap-6">
          <Reveal delay={0.1} className="min-w-[300px] flex-1 md:min-w-[340px]">
            <AppointmentForm />
          </Reveal>
          <Reveal delay={0.18} className="w-full min-w-[300px] flex-1 md:w-auto md:max-w-[380px]">
            <OfficeInfoPanel />
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
