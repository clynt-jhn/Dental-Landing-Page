import chernImg from '../assets/images/team-inna-chern.jpg'
import elmiraImg from '../assets/images/team-elmira.jpg'
import kianaImg from '../assets/images/team-kiana.jpg'
import deniseImg from '../assets/images/team-denise.jpg'
import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'
import { Container } from './ui/Container'
import { Button } from './ui/Button'

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

export function Team() {
  return (
    <section id="team" className="flex w-full flex-col items-center bg-white px-4 py-14 md:px-7 md:py-[72px] lg:px-10 lg:py-[90px]">
      <Container className="flex flex-col items-start gap-11">
        <Reveal className="flex w-full flex-col items-start gap-6 md:flex-row md:flex-wrap md:items-end md:justify-between">
          <div className="flex max-w-[620px] flex-1 flex-col items-start gap-4">
            <Eyebrow>The team</Eyebrow>
            <h2 className="text-[30px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[36px] lg:text-[44px]">
              A small team, so you see the same faces
            </h2>
          </div>
          <Button to="/about" variant="secondary">
            More about the practice
          </Button>
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
                  <p className="line-clamp-5 text-[15px] leading-[1.55] text-stone">
                    {member.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
