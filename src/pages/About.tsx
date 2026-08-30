import portraitImg from '../assets/images/about-dr-chern-portrait.jpg'
import chernImg from '../assets/images/team-inna-chern.jpg'
import elmiraImg from '../assets/images/team-elmira.jpg'
import kianaImg from '../assets/images/team-kiana.jpg'
import deniseImg from '../assets/images/team-denise.jpg'
import { PageHeader } from '../components/ui/PageHeader'
import { Reveal } from '../components/ui/Reveal'
import { Eyebrow } from '../components/ui/Eyebrow'
import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { IconPerson, IconLeaf, IconHeartPulse, IconPhone } from '../components/icons'

const timeline = [
  { year: '1999', text: 'Undergraduate degree in psychology, New York University' },
  { year: '2003', text: 'Doctor of Dental Surgery, SUNY Stony Brook School of Dental Medicine' },
  {
    year: '2004',
    text: 'General practice residency at Long Island College Hospital, and the founding of New York General Dentistry',
  },
  {
    year: '2005',
    text: 'Appointed attending at Bronx-Lebanon Hospital Center and the Albert Einstein College of Medicine',
  },
  {
    year: '2023',
    text: "Completed the Master's level of the Aesthetic Advantage programme at the Rosenthal Center for Aesthetic Education, NYU",
  },
  { year: '2024', text: 'Awarded Fellowship of the Academy of General Dentistry (FAGD)' },
]

const team = [
  {
    name: 'Dr. Inna Chern, DDS FAGD',
    role: 'Founder & dentist',
    image: chernImg,
    bio: 'Dr. Chern opened New York General Dentistry in 2004 and has practiced for more than twenty years. She studied psychology at New York University, earned her dental degree at SUNY Stony Brook School of Dental Medicine, and completed a general practice residency at Long Island College Hospital. In 2024 she was awarded Fellowship of the Academy of General Dentistry.',
  },
  {
    name: 'Elmira',
    role: 'Hygienist',
    image: elmiraImg,
    bio: 'Elmira handles hygiene visits and periodontal maintenance, including AirFlow cleanings, and coaches patients through the home routine that keeps results holding between appointments.',
  },
  {
    name: 'Kiana',
    role: 'Clinical dental assistant',
    image: kianaImg,
    bio: 'Kiana assists chairside through restorative and cosmetic treatment, prepares the operatory and digital scans, and is usually the person keeping you comfortable during longer appointments.',
  },
  {
    name: 'Denise',
    role: 'Office manager',
    image: deniseImg,
    bio: 'Denise runs scheduling, insurance questions and treatment estimates. If you are calling about a time, a claim or what something will cost, you are most likely speaking to her.',
  },
]

const commitments = [
  {
    icon: IconPerson,
    title: 'Personalised care',
    body: 'Plans are built around your history, your budget and how much you can take in one sitting, not a standard template applied to everyone.',
  },
  {
    icon: IconLeaf,
    title: 'A comfortable office',
    body: 'A calm room, a gentle touch and equipment chosen to remove the parts of dentistry people dread most.',
  },
  {
    icon: IconHeartPulse,
    title: 'A health-first approach',
    body: 'Sleep apnea, snoring, TMJ and gum health are treated as part of your overall wellbeing, not as separate complaints.',
  },
]

const steps = [
  {
    title: 'History before hardware',
    body: 'We start with a conversation about what has changed, what hurts, what you have been putting off and why.',
  },
  {
    title: 'A full exam and digital scan',
    body: 'Teeth, gums, bite and soft tissue are examined, with iTero Element scanning in place of impression trays where it applies.',
  },
  {
    title: 'Findings explained in plain language',
    body: 'You see what we see on screen, and hear what is urgent, what can wait and what is purely optional.',
  },
  {
    title: 'A plan you leave with',
    body: 'Sequenced treatment with costs and timing set out, so nothing gets decided while you are still in the chair.',
  },
]

export function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            A Midtown East practice built on{' '}
            <span className="font-serif italic font-medium text-terracotta">time</span>, not
            turnover
          </>
        }
        intro="New York General Dentistry is led by Dr. Inna Chern at 133 East 58th Street, Suite 409. The practice is deliberately unhurried: appointments run for an hour, general, restorative and cosmetic work happen in the same office, and nobody is made to feel bad about the gap since their last visit."
      />

      <section className="flex w-full flex-col items-center bg-white px-4 py-9 md:px-7 md:py-12 lg:px-10 lg:py-[60px]">
        <Reveal className="w-full max-w-[1120px]">
          <Container className="flex flex-col overflow-hidden rounded-[22px] border border-border bg-cream p-4 md:rounded-[26px] lg:flex-row lg:rounded-[28px]">
            <img
              src={portraitImg}
              alt="Dr. Inna Chern at New York General Dentistry"
              className="h-[240px] w-full rounded-[20px] object-cover object-[62%_center] md:h-[460px] lg:h-[480px] lg:w-[420px]"
            />
            <div className="flex flex-1 flex-col items-start gap-[18px] px-[22px] pb-8 pt-8 md:gap-[22px] md:px-10 md:py-11 lg:py-10 lg:pl-9 lg:pr-10">
              <Eyebrow>Meet the dentist</Eyebrow>
              <h2 className="text-[28px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[34px] lg:text-[42px]">
                Dr. Inna Chern
              </h2>
              <p className="text-base leading-[1.62] text-stone lg:text-[17px]">
                Dr. Chern leads New York General Dentistry and treats general, restorative and
                cosmetic cases herself. Her practice is organised around three commitments she
                makes to every patient: personalised care, a comfortable office, and a
                health-first approach that reads the mouth as part of the whole body, including
                sleep, airway and jaw function.
              </p>
              <p className="text-[15px] leading-[1.6] text-stone lg:text-base">
                She keeps her training current through the American Dental Association, the New
                York State Dental Association, the American Academy of Cosmetic Dentistry, the
                Academy of General Dentistry and continuing education at Spear Education, and her
                work has been recognised by U.S. News.
              </p>
              <Button to="/contact" variant="primary">
                Book with Dr. Chern
              </Button>
            </div>
          </Container>
        </Reveal>
      </section>

      <section className="flex w-full flex-col items-center bg-cream px-4 py-14 md:px-7 md:py-[72px] lg:px-10 lg:py-[90px]">
        <Container className="flex flex-col items-start gap-11">
          <Reveal className="flex w-full max-w-[620px] flex-col items-start gap-4">
            <Eyebrow>Training &amp; credentials</Eyebrow>
            <h2 className="text-[30px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[36px] lg:text-[44px]">
              Twenty years of practice, and still in the classroom
            </h2>
            <p className="text-base leading-[1.62] text-stone lg:text-[17px]">
              Dr. Chern holds a DDS and a Fellowship of the Academy of General Dentistry, and is a
              member of the ADA, NYSDA, AACD and AGD.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="w-full">
            <div className="flex w-full flex-col rounded-[20px] border border-border bg-white p-6 md:p-9">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`flex flex-col items-start gap-1.5 py-4 md:flex-row md:items-baseline md:gap-8 md:py-5 ${
                    i < timeline.length - 1 ? 'border-b border-border' : ''
                  } ${i === 0 ? 'pt-0' : ''} ${i === timeline.length - 1 ? 'pb-0' : ''}`}
                >
                  <span className="w-[52px] shrink-0 text-[15px] font-semibold leading-[1.5] tabular-nums text-green">
                    {item.year}
                  </span>
                  <p className="text-[15px] leading-[1.55] text-stone">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section id="team" className="flex w-full flex-col items-center bg-white px-4 py-14 md:px-7 md:py-[72px] lg:px-10 lg:py-[90px]">
        <Container className="flex flex-col items-start gap-11">
          <Reveal className="flex w-full max-w-[680px] flex-col items-start gap-4">
            <Eyebrow>Meet the team</Eyebrow>
            <h2 className="text-[30px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[36px] lg:text-[44px]">
              The people you will actually see
            </h2>
            <p className="text-base leading-[1.62] text-stone lg:text-[17px]">
              The practice is deliberately small. Dr. Chern does her own cleanings, and the same
              three people handle your hygiene, your chairside care and your scheduling every
              time you come in.
            </p>
          </Reveal>

          <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-[20px] border border-border bg-cream">
                  <img src={member.image} alt="" className="h-[250px] w-full object-cover" />
                  <div className="flex flex-col items-start gap-2 px-[22px] pb-[26px] pt-[22px]">
                    <h4 className="text-lg font-semibold leading-[1.3] tracking-[-0.015em] text-ink">
                      {member.name}
                    </h4>
                    <p className="text-[13px] font-medium uppercase leading-[1.3] tracking-[0.06em] text-green">
                      {member.role}
                    </p>
                    <p className="text-[15px] leading-[1.55] text-stone">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="flex w-full flex-col items-center bg-cream px-4 py-14 md:px-7 md:py-[72px] lg:px-10 lg:py-[90px]">
        <Container className="flex flex-col items-start gap-11">
          <Reveal className="flex w-full max-w-[620px] flex-col items-start gap-4">
            <h2 className="text-[30px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[36px] lg:text-[44px]">
              Three commitments that shape every visit
            </h2>
          </Reveal>

          <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
            {commitments.map((item, i) => (
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

      <section className="flex w-full flex-col items-center bg-white px-4 py-14 md:px-7 md:py-[72px] lg:px-10 lg:py-[90px]">
        <Container className="flex flex-col items-start gap-11">
          <Reveal className="flex w-full max-w-[620px] flex-col items-start gap-4">
            <Eyebrow>Your first hour</Eyebrow>
            <h2 className="text-[30px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[36px] lg:text-[44px]">
              What a first appointment actually looks like
            </h2>
            <p className="text-base leading-[1.62] text-stone lg:text-[17px]">
              One hour, start to finish. Long enough to be thorough, short enough to fit into a
              working day in Midtown.
            </p>
          </Reveal>

          <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="flex h-full flex-col items-start gap-4 rounded-[20px] border border-border bg-cream p-[26px] pt-7">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-green text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <h3 className="text-lg font-semibold leading-[1.3] tracking-[-0.015em] text-ink">
                    {step.title}
                  </h3>
                  <p className="text-[15px] leading-[1.55] text-stone">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="flex w-full flex-col items-center bg-cream px-4 pb-16 pt-10 md:px-7 md:pb-[84px] md:pt-14 lg:px-10 lg:pb-24 lg:pt-[70px]">
        <Container>
          <Reveal>
            <div className="flex w-full flex-wrap items-center justify-between gap-9 rounded-[22px] bg-green-dark px-6 py-9 md:rounded-[26px] md:px-10 md:py-12 lg:rounded-[30px] lg:px-14 lg:py-[60px]">
              <div className="flex min-w-[320px] max-w-[560px] flex-1 flex-col items-start gap-4">
                <h2 className="text-[26px] font-bold leading-[1.12] tracking-[-0.03em] text-white md:text-[32px] lg:text-[36px]">
                  Come in and see the difference an hour makes
                </h2>
                <p className="max-w-[480px] text-base leading-[1.6] text-white/66 lg:text-[17px]">
                  New patients are welcome. Request a time online, or call the office and speak
                  to someone directly.
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
    </>
  )
}
