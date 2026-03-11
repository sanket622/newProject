import './AboutSecurityCtaSection.css'

function AboutSecurityCtaSection() {
  return (
    <section className="about-security-cta" aria-label="security-call-to-action">
      <h2>Ready to Experience Next-Level Security?</h2>
      <p>
        Join thousands of customers who trust Jhatpat Cash with their financial future.
        <br />
        Apply now and experience the most secure lending platform in India.
      </p>

      <div className="about-security-actions">
        <button className="btn btn-primary" type="button">
          Get Started Now
        </button>
        <button className="btn btn-secondary" type="button">
          Talk to Expert
        </button>
      </div>
    </section>
  )
}

export default AboutSecurityCtaSection
