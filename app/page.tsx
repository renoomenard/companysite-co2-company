import HeroSection from './components/HeroSection'
import CountryGrid from './components/CountryGrid'
import BenefitsSection from './components/BenefitsSection'
import ReviewsSection from './components/ReviewsSection'
import FifiSection from './components/FifiSection'
import FaqSection from './components/FaqSection'
import BuyingGuide from './components/BuyingGuide'
import CompanySection from './components/CompanySection'
import CtaSection from './components/CtaSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CountryGrid />
      <BenefitsSection />
      <ReviewsSection />
      <FifiSection />
      <FaqSection />
      <BuyingGuide />
      <CompanySection />
      <CtaSection />
    </>
  )
}
