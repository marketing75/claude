import HeroSection from '@/components/sections/home/HeroSection'
import StatsBar from '@/components/sections/home/StatsBar'
import AboutSection from '@/components/sections/home/AboutSection'
import ServicesGrid from '@/components/sections/home/ServicesGrid'
import WhyUs from '@/components/sections/home/WhyUs'
import HowItWorks from '@/components/sections/home/HowItWorks'
import Industries from '@/components/sections/home/Industries'
import Testimonials from '@/components/sections/home/Testimonials'
import LocationsGrid from '@/components/sections/home/LocationsGrid'
import FaqAccordion from '@/components/sections/home/FaqAccordion'
import FinalCta from '@/components/sections/home/FinalCta'
import TrustBar from '@/components/sections/shared/TrustBar'

const aggregateRatingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'NetTrackers',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '127',
    bestRating: '5',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingJsonLd),
        }}
      />
      <HeroSection />
      <StatsBar />
      <TrustBar />
      <AboutSection />
      <ServicesGrid />
      <WhyUs />
      <HowItWorks />
      <Industries />
      <Testimonials />
      <LocationsGrid />
      <FaqAccordion />
      <FinalCta />
    </>
  )
}
