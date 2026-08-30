import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'
import { Container } from './ui/Container'
import { IconStar, IconArrowUpRight } from './icons'

const GOOGLE_URL =
  'https://www.google.com/search?q=New+York+General+Dentistry,+133+E+58th+St+Ste+409,+New+York,+NY+10022&ludocid=5736620447149251065#lrd=0x89c258e5a66f638f:0x4f9c91e71b92d9f9,1'

const reviews = [
  {
    initial: 'T',
    name: 'Tamar Chokhonelidze',
    time: 'a month ago',
    text: "I can't say enough good things about this office! The front desk is super organized and friendly, making appointments and insurance stress-free. Dr. Chern is incredibly knowledgeable, professional and kind, and my regular cleaning was top-notch. Truly a fantastic team!",
  },
  {
    initial: 'D',
    name: 'David Westover',
    time: '2 months ago',
    text: 'New York General Dentistry offers exceptional dental services. The staff is extremely nice and well-organized, and most importantly, they genuinely care for their patients. I got a filling done there, and everything was very fast and hassle-free. The environment is pleasant and modern technology is used.',
  },
  {
    initial: 'A',
    name: 'Asela Baena',
    time: '5 months ago',
    text: 'Fantastic dental clinic! The staff is welcoming, professional, and attentive, making every visit comfortable. The dentist explained each step clearly and ensured a painless experience. The clinic is clean, modern, and well-equipped. I left feeling confident in my treatment and highly recommend this clinic for quality dental care.',
  },
  {
    initial: 'C',
    name: 'Christine Persinger',
    time: '5 months ago',
    text: "Dr. Chern is amazing. She is so patient, listens, and is gentle but thorough. I've never felt so comfortable at a dentist before.",
  },
  {
    initial: 'S',
    name: 'Sirena S',
    time: '5 months ago',
    text: "I got Icon treatment done here, my experience was amazing. Dr. Chern was so nice, took me through the whole process and treated me with such care. I've always been scared when it came to coming to the dentist, but this was my best dental experience! 10/10",
  },
  {
    initial: 'N',
    name: 'Nicholas Kee',
    time: '5 months ago',
    text: 'Dr Chern and her team continue to provide our family with excellent dental care from regular appointments to urgent care. Thank you!',
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="flex w-full flex-col items-center bg-cream px-4 py-14 md:px-7 md:py-[72px] lg:px-10 lg:py-[90px]">
      <Container className="flex flex-col items-start gap-11">
        <Reveal className="flex w-full flex-col items-start gap-6 md:flex-row md:flex-wrap md:items-end md:justify-between">
          <div className="flex max-w-[620px] flex-1 flex-col items-start gap-4">
            <Eyebrow>Google reviews</Eyebrow>
            <h2 className="text-[30px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[36px] lg:text-[44px]">
              What patients say afterwards
            </h2>
          </div>
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 rounded-full border border-border bg-white px-[22px] py-3 transition-shadow hover:shadow-lg"
          >
            <IconStar className="h-4 w-4 text-green" />
            <span className="text-[15px] font-medium leading-[1.4] tracking-[-0.005em] text-ink">
              4.9 on Google, read all reviews
            </span>
            <IconArrowUpRight className="h-[15px] w-[15px] text-green" />
          </a>
        </Reveal>

        <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[18px]">
          {reviews.map((review, i) => (
            <Reveal key={review.name} delay={(i % 3) * 0.06}>
              <a
                href={GOOGLE_URL}
                target="_blank"
                rel="noreferrer"
                className="flex h-full flex-col items-start gap-5 rounded-[20px] border border-border bg-white p-7"
              >
                <div className="flex items-center gap-[3px] text-[#f5a623]">
                  {Array.from({ length: 5 }).map((_, starIdx) => (
                    <IconStar key={starIdx} className="h-[17px] w-[17px]" />
                  ))}
                </div>
                <p className="line-clamp-5 flex-1 text-[15px] leading-[1.65] tracking-[-0.005em] text-ink">
                  {review.text}
                </p>
                <div className="flex w-full items-center gap-3 border-t border-border pt-4">
                  <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-peach text-sm font-semibold text-green">
                    {review.initial}
                  </div>
                  <div className="flex flex-col items-start gap-0.5">
                    <span className="text-sm font-semibold leading-[1.3] text-ink">
                      {review.name}
                    </span>
                    <span className="text-[13px] leading-[1.3] text-stone">{review.time}</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
