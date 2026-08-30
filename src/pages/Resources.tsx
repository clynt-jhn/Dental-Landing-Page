import { PageHeader } from '../components/ui/PageHeader'
import { Reveal } from '../components/ui/Reveal'
import { Container } from '../components/ui/Container'
import { IconOrbit, IconCare, IconArrowUpRight } from '../components/icons'

const featured = [
  {
    icon: IconOrbit,
    title: 'A parent’s guide to pediatric airway and sleep health',
    excerpt:
      'An educational guide for parents on how breathing, sleep and jaw development are connected in children.',
    href: 'https://newyorkgeneraldentistry.com/an-educational-guide-on-pediatric-airway-sleep-health-for-parents/',
    dark: true,
  },
  {
    icon: IconCare,
    title: 'Community impact: giving back through dental care in Peru',
    excerpt:
      'Dr. Chern on volunteer dental work abroad, and what treating without a full operatory teaches you.',
    href: 'https://newyorkgeneraldentistry.com/dr-chern-giving-back-through-dental-care-in-peru/',
    dark: false,
  },
]

const articles = [
  {
    category: 'White spots',
    date: 'July 14, 2026',
    title: 'Why choose white spot removal: benefits and results',
    excerpt: 'How ICON resin infiltration blends chalky enamel patches back into the surrounding tooth, and who it suits.',
    href: 'https://newyorkgeneraldentistry.com/why-choose-white-spot-removal-benefits-and-results/',
  },
  {
    category: 'Sleep apnea',
    date: 'May 18, 2026',
    title: 'Why choose sleep apnea devices: benefits and results',
    excerpt: 'Comparing CPAP machines with custom oral appliances, and how to tell which route fits your diagnosis.',
    href: 'https://newyorkgeneraldentistry.com/why-choose-sleep-apnea-devices-benefits-and-results/',
  },
  {
    category: 'Sleep apnea',
    date: 'March 18, 2026',
    title: 'The surprising link between weight loss medications and sleep apnea',
    excerpt: 'What changing body weight does to airway tissue, and why it matters for obstructive sleep apnea.',
    href: 'https://newyorkgeneraldentistry.com/the-surprising-link-between-weight-loss-medications-and-sleep-apnea/',
  },
  {
    category: 'Oral health',
    date: 'February 16, 2026',
    title: 'Can peptides influence oral inflammation?',
    excerpt: 'A look at the research on short amino acid chains and whether they support tissue repair in the mouth.',
    href: 'https://newyorkgeneraldentistry.com/can-peptides-influence-oral-inflammation/',
  },
  {
    category: 'TMJ',
    date: 'January 14, 2026',
    title: 'How stress shows up in your mouth and jaw',
    excerpt: 'Jaw tightness, sensitive teeth and headaches are often the first place stress becomes visible.',
    href: 'https://newyorkgeneraldentistry.com/how-stress-shows-up-in-your-mouth-and-jaw/',
  },
  {
    category: 'Oral health',
    date: 'December 17, 2025',
    title: 'The consequences of mouth breathing for dental and whole-body health',
    excerpt: 'Why a mouth-breathing habit reaches past the teeth into gums, jaw development, sleep and energy.',
    href: 'https://newyorkgeneraldentistry.com/the-consequences-of-mouth-breathing-for-dental-health-and-whole-body-health/',
  },
]

export function Resources() {
  return (
    <>
      <PageHeader
        eyebrow="Resources"
        title={
          <>
            Reading, guides and{' '}
            <span className="font-serif italic font-medium text-terracotta">answers</span>
          </>
        }
        intro="Dr. Chern writes about the things patients ask about most: sleep and airway, jaw pain, whitening, and how oral health connects to the rest of the body."
      />

      <section className="flex w-full flex-col items-center bg-cream px-4 pb-10 md:px-7 md:pb-14 lg:px-10 lg:pb-16">
        <Container className="grid w-full grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5">
          {featured.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`flex h-full flex-col items-start gap-4 rounded-[22px] p-7 transition-opacity hover:opacity-90 ${
                  item.dark ? 'bg-green-dark' : 'border border-border bg-white'
                }`}
              >
                <item.icon className={`h-6 w-6 ${item.dark ? 'text-apricot' : 'text-green'}`} />
                <h3
                  className={`text-xl font-semibold leading-[1.25] tracking-[-0.02em] ${
                    item.dark ? 'text-white' : 'text-ink'
                  }`}
                >
                  {item.title}
                </h3>
                <p className={`text-[15px] leading-[1.6] ${item.dark ? 'text-white/66' : 'text-stone'}`}>
                  {item.excerpt}
                </p>
              </a>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="flex w-full flex-col items-center bg-white px-4 py-14 md:px-7 md:py-[72px] lg:px-10 lg:py-[90px]">
        <Container className="flex flex-col items-start gap-8">
          <Reveal>
            <h2 className="text-[30px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[36px] lg:text-[44px]">
              Latest from the practice
            </h2>
          </Reveal>

          <div className="flex w-full flex-col">
            {articles.map((article, i) => (
              <Reveal key={article.title} delay={(i % 6) * 0.05}>
                <a
                  href={article.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex w-full flex-wrap items-center justify-between gap-6 py-7 ${
                    i > 0 ? 'border-t border-border' : ''
                  }`}
                >
                  <div className="flex min-w-[240px] flex-1 flex-col items-start gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-[11px] font-semibold uppercase leading-none tracking-[0.08em] text-green">
                        {article.category}
                      </span>
                      <time className="text-[13px] leading-[1.3] text-stone">{article.date}</time>
                    </div>
                    <h4 className="text-lg font-semibold leading-[1.3] tracking-[-0.015em] text-ink">
                      {article.title}
                    </h4>
                    <p className="max-w-[620px] text-[15px] leading-[1.55] text-stone">
                      {article.excerpt}
                    </p>
                  </div>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:border-green">
                    <IconArrowUpRight className="h-4 w-4 text-green" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
