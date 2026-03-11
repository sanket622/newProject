import './AboutIntroSection.css'
import rectangle from '../../../assets/Rectangle 8.png'

function AboutIntroSection() {
  return (
    <section className="about-intro-section">
      <div className="about-intro-copy">
        <h1>About Rupee Yatra</h1>
        <p>
          Rupee Yatra empowers individuals with instant financial solutions powered by
          advanced technology. As your trusted partner for personal loans in India, we
          offer fast approvals and competitive interest rates to make borrowing simple and
          accessible.
          <br />
          <br />
          With our RBI-registered NBFC partnership and modern fintech platform, Rupee
          Yatra delivers a smooth and fully digital lending experience. Our mission is to
          promote financial inclusion for working professionals across India by providing
          transparent processes, quick access to credit, and customer-focused financial
          solutions.
        </p>
      </div>
      <img src={rectangle} alt="Business growth analytics on laptop" />
    </section>
  )
}

export default AboutIntroSection
