import '../Pages.css'
import './AboutPage.css'
import AboutIntroSection from './AboutIntroSection/AboutIntroSection'
import AboutSecurityCtaSection from './AboutSecurityCtaSection/AboutSecurityCtaSection'
import AboutLoanApprovedSection from './AboutLoanApprovedSection/AboutLoanApprovedSection'
import AboutProcessSection from './AboutProcessSection/AboutProcessSection'
import AboutWhyChooseSection from './AboutWhyChooseSection/AboutWhyChooseSection'
import AboutTestimonialsSection from './AboutTestimonialsSection/AboutTestimonialsSection'
import AboutIntegritySection from './AboutIntegritySection/AboutIntegritySection'
import AboutAchievementsSection from './AboutAchievementsSection/AboutAchievementsSection'

function AboutPage() {
  return (
    <section className="inner-page paper-bg about-page">
      <AboutIntroSection />
      <AboutSecurityCtaSection />
      <AboutLoanApprovedSection />
      <AboutProcessSection />
      <AboutWhyChooseSection />
      <AboutTestimonialsSection />
      <AboutIntegritySection />
      <AboutAchievementsSection />
    </section>
  )
}

export default AboutPage
