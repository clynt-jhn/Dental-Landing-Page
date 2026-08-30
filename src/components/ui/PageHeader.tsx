import type { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { Eyebrow } from './Eyebrow'
import { Container } from './Container'

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string
  title: ReactNode
  intro?: string
  children?: ReactNode
}) {
  return (
    <section className="w-full bg-cream px-4 pb-10 pt-[126px] md:px-7 md:pb-14 md:pt-[150px] lg:px-10 lg:pb-16 lg:pt-[168px]">
      <Container>
        <Reveal className="flex flex-col items-start gap-4">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="max-w-[820px] text-[32px] font-bold leading-[1.08] tracking-[-0.03em] text-ink md:text-[42px] lg:text-[52px]">
            {title}
          </h1>
          {intro && (
            <p className="max-w-[620px] text-base leading-[1.62] text-stone lg:text-[18px]">
              {intro}
            </p>
          )}
          {children}
        </Reveal>
      </Container>
    </section>
  )
}
