import '../Pages.css'
import LendingIntroSection from './LendingIntroSection/LendingIntroSection'
import LendingWhyPartnersSection from './LendingWhyPartnersSection/LendingWhyPartnersSection'
import LendingBenefitsSection from './LendingBenefitsSection/LendingBenefitsSection'
import LendingFinalCtaSection from './LendingFinalCtaSection/LendingFinalCtaSection'

function LendingPage() {
  return (
    <section className="inner-page paper-bg">
      <LendingIntroSection />
      <LendingWhyPartnersSection />
      <LendingBenefitsSection />
      <LendingFinalCtaSection />
    </section>
  )
}

export default LendingPage
