import '../Pages.css'
import ContactHeroSection from './ContactHeroSection/ContactHeroSection'
import FeaturesSection from '../../components/home/FeaturesSection/FeaturesSection'

function ContactPage() {
  return (
    <section className="inner-page paper-bg">
      <ContactHeroSection />
      <FeaturesSection />
    </section>
  )
}

export default ContactPage
