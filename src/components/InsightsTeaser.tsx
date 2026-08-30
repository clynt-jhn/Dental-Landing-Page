import { Reveal } from './ui/Reveal'
import { Eyebrow } from './ui/Eyebrow'
import { Container } from './ui/Container'
import { Button } from './ui/Button'

const insights = [
  {
    category: 'White spots',
    date: 'July 14, 2026',
    title: 'Why choose white spot removal: benefits and results',
    excerpt:
      'How ICON resin infiltration blends chalky enamel patches back into the surrounding tooth, and who it suits.',
    href: 'https://newyorkgeneraldentistry.com/why-choose-white-spot-removal-benefits-and-results/',
  },
  {
    category: 'Sleep apnea',
    date: 'May 18, 2026',
    title: 'Why choose sleep apnea devices: benefits and results',
    excerpt:
      'Comparing CPAP machines with custom oral appliances, and how to tell which route fits your diagnosis.',
    href: 'https://newyorkgeneraldentistry.com/why-choose-sleep-apnea-devices-benefits-and-results/',
  },
  {
    category: 'Sleep apnea',
    date: 'March 18, 2026',
    title: 'The surprising link between weight loss medications and sleep apnea',
    excerpt:
      'What changing body weight does to airway tissue, and why it matters for obstructive sleep apnea.',
    href: 'https://newyorkgeneraldentistry.com/the-surprising-link-between-weight-loss-medications-and-sleep-apnea/',
  },
]

export function InsightsTeaser() {
  return (
    <section id="insights" className="flex w-full flex-col items-center bg-white px-4 py-14 md:px-7 md:py-[72px] lg:px-10 lg:py-[88px]">
      <Container className="flex flex-col items-start gap-10">
        <Reveal className="flex w-full flex-col items-start gap-6 md:flex-row md:flex-wrap md:items-end md:justify-between">
          <div className="flex max-w-[620px] flex-1 flex-col items-start gap-4">
            <Eyebrow>Resources</Eyebrow>
            <h2 className="text-[28px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[34px] lg:text-[38px]">
              Written by Dr. Chern, for the questions that come up
            </h2>
          </div>
          <Button to="/resources" variant="secondary">
            All resources
          </Button>
        </Reveal>

        <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-[18px]">
          {insights.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <a
                href={post.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-full flex-col items-start gap-3.5 rounded-[20px] border border-border bg-cream p-[26px]"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-peach px-[11px] py-[5px] text-[11px] font-semibold uppercase leading-none tracking-[0.08em] text-green">
                    {post.category}
                  </span>
                  <time className="text-[13px] leading-[1.3] text-stone">{post.date}</time>
                </div>
                <h4 className="text-lg font-semibold leading-[1.3] tracking-[-0.015em] text-ink">
                  {post.title}
                </h4>
                <p className="text-[15px] leading-[1.55] text-stone">{post.excerpt}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
