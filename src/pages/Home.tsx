import { Hero } from '../components/Hero'
import { FeaturedIn } from '../components/FeaturedIn'
import { WhatToExpect } from '../components/WhatToExpect'
import { AboutSection } from '../components/AboutSection'
import { Team } from '../components/Team'
import { ServicesSection } from '../components/ServicesSection'
import { Technology } from '../components/Technology'
import { GalleryTeaser } from '../components/GalleryTeaser'
import { Booking } from '../components/Booking'
import { Affiliations } from '../components/Affiliations'
import { Reviews } from '../components/Reviews'
import { FAQ } from '../components/FAQ'
import { InsightsTeaser } from '../components/InsightsTeaser'
import { ClosingCTA } from '../components/ClosingCTA'

export function Home() {
  return (
    <>
      <Hero />
      <FeaturedIn />
      <WhatToExpect />
      <AboutSection />
      <Team />
      <ServicesSection />
      <Technology />
      <GalleryTeaser />
      <Booking />
      <Affiliations />
      <Reviews />
      <FAQ />
      <InsightsTeaser />
      <ClosingCTA />
    </>
  )
}
