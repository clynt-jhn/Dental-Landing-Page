import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'
import { Container } from './ui/Container'
import { IconPlus } from './icons'

const faqs = [
  {
    q: 'How long is a typical appointment?',
    a: "Most visits are booked in one-hour slots, whether it's a cleaning or a more involved procedure. That leaves room for a proper exam, a few questions, and a plan you actually understand before you leave.",
  },
  {
    q: 'It has been years since I saw a dentist. Will I get a lecture?',
    a: "No. However long it's been, you'll be met with a starting point rather than a lecture. The exam focuses on where things stand now and what makes sense next.",
  },
  {
    q: 'Do you offer evening or weekend appointments?',
    a: 'Yes. The office is open until 7pm on Mondays and Thursdays, and Sundays are available by request for emergencies and special cases.',
  },
  {
    q: 'What should I bring to my first visit?',
    a: "A photo ID, your insurance card if you have one, and a list of any medications you're taking. Forwarding recent X-rays ahead of time can save you a repeat scan.",
  },
  {
    q: 'Do you still take impressions with putty?',
    a: 'Rarely. The iTero Element digital scanner replaces messy impression trays for most cases, so you see your own scan on screen in minutes instead.',
  },
  {
    q: 'I am in pain today. What should I do?',
    a: "Call the office directly at (212) 838-0842 and let the front desk know you're in pain — same-week and, when needed, same-day openings are held for exactly this. This booking form isn't monitored for emergencies.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="flex w-full flex-col items-center bg-white px-4 py-14 md:px-7 md:py-[72px] lg:px-10 lg:py-[90px]">
      <Container className="flex flex-wrap items-start gap-14">
        <Reveal className="min-w-[280px] max-w-[380px] flex-1">
          <div className="flex flex-col items-start gap-4">
            <Eyebrow>Good to know</Eyebrow>
            <h2 className="text-[28px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[34px] lg:text-[38px]">
              Questions people ask before their first visit
            </h2>
            <p className="text-[15px] leading-[1.6] text-stone lg:text-base">
              Anything not covered here, call the office and ask. The front desk would rather
              answer it now than have you wonder.
            </p>
          </div>
        </Reveal>

        <div className="min-w-[280px] flex-1 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div className="w-full rounded-[18px] border border-border bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <h3 className="text-[17px] font-semibold leading-[1.35] tracking-[-0.015em] text-ink">
                      {item.q}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-peach">
                      <IconPlus
                        className="h-3.5 w-3.5 text-green transition-transform duration-300"
                        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-[15px] leading-[1.55] text-stone">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
