import { useState, type FormEvent } from 'react'
import { PageHeader } from '../components/ui/PageHeader'
import { Reveal } from '../components/ui/Reveal'
import { Container } from '../components/ui/Container'
import { IconPhone, IconMessage, IconPin, IconInstagram, IconArrowRight } from '../components/icons'

const quickContact = [
  {
    icon: IconPhone,
    title: 'Call the office',
    value: '(212) 838-0842',
    href: 'tel:+12128380842',
  },
  {
    icon: IconMessage,
    title: 'Send a text',
    value: '(929) 244-8140',
    href: 'sms:+19292448140',
  },
  {
    icon: IconPin,
    title: 'Visit the practice',
    value: '133 East 58th Street, Suite 409, New York, NY 10022',
  },
  {
    icon: IconInstagram,
    title: 'Follow along',
    value: '@newyorkgeneraldentistry',
    href: 'https://www.instagram.com/newyorkgeneraldentistry/',
  },
]

const hours = [
  { day: 'Monday', time: '8:00am – 7:00pm' },
  { day: 'Tuesday', time: '8:00am – 5:00pm' },
  { day: 'Wednesday', time: '8:00am – 5:00pm' },
  { day: 'Thursday', time: '8:00am – 7:00pm' },
  { day: 'Friday', time: '8:00am – 5:00pm' },
  { day: 'Saturday', time: 'Closed', muted: true },
  { day: 'Sunday', time: 'By request' },
]

const inputClass =
  'w-full rounded-xl border border-border bg-white px-3.5 py-[13px] text-[15px] text-ink placeholder:text-stone focus:border-green focus:outline-none'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book a visit, or just ask a question"
        intro="The fastest way to be seen is to call the office. If it is not urgent, send the form below and the front desk will call you back to confirm a time that works."
      />

      <section className="flex w-full flex-col items-center bg-cream px-4 pb-10 md:px-7 md:pb-14 lg:px-10 lg:pb-16">
        <Container className="grid w-full grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-4">
          {quickContact.map((item, i) => {
            const content = (
              <>
                <item.icon className="h-5 w-5 text-green" />
                <div className="flex flex-col items-start gap-0.5">
                  <h3 className="text-base font-semibold leading-[1.3] tracking-[-0.015em] text-ink">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-[1.5] text-stone">{item.value}</p>
                </div>
              </>
            )
            const className =
              'flex h-full flex-col items-start gap-3 rounded-2xl border border-border bg-white p-5 transition-colors hover:border-green'
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noreferrer" className={className}>
                    {content}
                  </a>
                ) : (
                  <div className={className}>{content}</div>
                )}
              </Reveal>
            )
          })}
        </Container>
      </section>

      <section className="flex w-full flex-col items-center bg-white px-4 py-14 md:px-7 md:py-[72px] lg:px-10 lg:py-[90px]">
        <Container className="flex w-full flex-wrap items-start gap-6">
          <Reveal delay={0.05} className="min-w-[300px] flex-1 md:min-w-[340px]">
            <div className="flex flex-col items-start gap-4 rounded-3xl border border-border bg-cream p-[22px] md:p-9">
              {submitted ? (
                <div className="flex w-full flex-col items-start gap-2 py-6">
                  <h3 className="text-lg font-semibold text-ink">Thank you — request received</h3>
                  <p className="text-[15px] leading-[1.55] text-stone">
                    The front desk will call you back shortly to confirm a time. If it is urgent,
                    please call (212) 838-0842 directly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex w-full flex-col items-start gap-4">
                  <h2 className="text-xl font-semibold leading-[1.3] tracking-[-0.015em] text-ink">
                    Request an appointment
                  </h2>
                  <div className="flex w-full flex-wrap gap-3.5">
                    <label className="flex min-w-[150px] flex-1 flex-col items-start gap-2">
                      <span className="text-[13px] font-medium text-ink">Full name</span>
                      <input required type="text" name="name" placeholder="Jordan Reyes" className={inputClass} />
                    </label>
                    <label className="flex min-w-[150px] flex-1 flex-col items-start gap-2">
                      <span className="text-[13px] font-medium text-ink">Phone</span>
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="(212) 555-0142"
                        className={inputClass}
                      />
                    </label>
                  </div>
                  <label className="flex w-full flex-col items-start gap-2">
                    <span className="text-[13px] font-medium text-ink">Email</span>
                    <input required type="email" name="email" placeholder="you@email.com" className={inputClass} />
                  </label>
                  <div className="flex w-full flex-wrap gap-3.5">
                    <label className="flex min-w-[150px] flex-1 flex-col items-start gap-2">
                      <span className="text-[13px] font-medium text-ink">Preferred time</span>
                      <select name="preferredTime" defaultValue="morning" className={inputClass}>
                        <option value="morning">Weekday morning</option>
                        <option value="afternoon">Weekday afternoon</option>
                        <option value="evening">Evening — Monday or Thursday</option>
                        <option value="sunday">Sunday by request</option>
                      </select>
                    </label>
                    <label className="flex min-w-[150px] flex-1 flex-col items-start gap-2">
                      <span className="text-[13px] font-medium text-ink">Type of visit</span>
                      <select name="visitType" defaultValue="new" className={inputClass}>
                        <option value="new">New patient exam & cleaning</option>
                        <option value="returning">Returning patient</option>
                        <option value="cosmetic">Cosmetic consultation</option>
                        <option value="second">Second opinion</option>
                        <option value="other">Something else</option>
                      </select>
                    </label>
                  </div>
                  <label className="flex w-full flex-col items-start gap-2">
                    <span className="text-[13px] font-medium text-ink">Anything we should know?</span>
                    <textarea
                      name="notes"
                      placeholder="Insurance questions, anxiety about the chair, a tooth that has been bothering you — all useful."
                      className={`${inputClass} h-24 resize-none`}
                    />
                  </label>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-between rounded-[14px] bg-apricot px-6 py-4 text-[15px] font-medium tracking-[-0.01em] text-ink transition-opacity hover:opacity-90"
                  >
                    Send request
                    <IconArrowRight className="h-5 w-5 text-white" />
                  </button>
                  <p className="text-[13px] leading-[1.5] text-stone">
                    Please do not send urgent or emergency details through this form. For
                    same-day pain, call (212) 838-0842.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="flex w-full min-w-[300px] flex-1 flex-col gap-6 md:w-auto md:max-w-[380px]">
            <div className="h-[220px] w-full overflow-hidden rounded-2xl border border-border">
              <iframe
                title="New York General Dentistry on Google Maps"
                src="https://www.google.com/maps?q=133+East+58th+Street+Suite+409+New+York+NY+10022&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col items-start gap-3 rounded-3xl bg-green-dark p-[22px] md:p-9">
              <p className="text-xs font-semibold uppercase leading-none tracking-[0.12em] text-white/45">
                Office hours
              </p>
              {hours.map((row) => (
                <div key={row.day} className="flex w-full items-center justify-between">
                  <span className="text-[15px] leading-[1.7] text-white/72">{row.day}</span>
                  <span
                    className={`text-[15px] leading-[1.7] ${
                      row.muted ? 'text-white/55' : 'font-medium text-white'
                    }`}
                  >
                    {row.time}
                  </span>
                </div>
              ))}
              <p className="pt-2 text-sm leading-[1.55] text-white/60">
                Sundays are kept for emergencies and special cases. Call the office to ask.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
