import '../Pages.css'
import './AboutPage.css'
import AboutIntroSection from './AboutIntroSection/AboutIntroSection'
import AboutSecurityCtaSection from './AboutSecurityCtaSection/AboutSecurityCtaSection'
import AboutLoanApprovedSection from './AboutLoanApprovedSection/AboutLoanApprovedSection'

function AboutPage() {
  return (
    <section className="inner-page paper-bg about-page">
      <AboutIntroSection />
      <AboutSecurityCtaSection />
      <AboutLoanApprovedSection />
    </section>
  )
}

export default AboutPage
