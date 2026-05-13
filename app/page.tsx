import Hero from '@/components/sections/Hero'
import ExperienceGrid from '@/components/sections/ExperienceGrid'
import PackageCards from '@/components/sections/PackageCards'
import HowItWorks from '@/components/sections/HowItWorks'
import Testimonials from '@/components/sections/Testimonials'
import StatsCounter from '@/components/sections/StatsCounter'
import UrgencyCTA from '@/components/sections/UrgencyCTA'
import TrustBadgeBar from '@/components/shared/TrustBadgeBar'
import LeadForm from '@/components/forms/LeadForm'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadgeBar />
      <ExperienceGrid />
      <PackageCards />
      <HowItWorks />
      <StatsCounter />
      <Testimonials />
      <section id="lead-form" className="py-20">
        <div className="container mx-auto px-4">
          <LeadForm />
        </div>
      </section>
      <UrgencyCTA />
    </>
  )
}