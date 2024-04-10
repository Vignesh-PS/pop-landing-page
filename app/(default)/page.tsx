export const metadata = {
  title: 'Proof of Passport',
  description: 'Home page of Proof of Passport',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Roadmap from '@/components/roadmap'
import Contribute from '@/components/contribute'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Contribute />
      <Roadmap />
      <Testimonials />

    </>
  )
}
