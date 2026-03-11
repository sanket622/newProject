import './AboutLoanApprovedSection.css'
import maskGroup from '../../../assets/Mask group.png'

function AboutLoanApprovedSection() {
  return (
    <section className="about-loan-approved-section" aria-label="loan-approved-section">
      <div className="about-loan-approved-content">
        <img src={maskGroup} alt="Loan approved on digital form" />

        <div className="about-loan-approved-right">
          <h2>Reliable Digital Lending for Modern India</h2>

          <div className="about-loan-approved-copy">
            <p>
              At Rupee Yatra, we make financial access simple and convenient by offering
              instant approvals, secure processing, and smooth operations designed for modern
              lending needs. Our platform combines advanced technology with reliable systems
              to deliver fast and efficient loan services.
            </p>

            <p>
              With our RBI-registered NBFC partnership and innovative fintech platform,
              Rupee Yatra provides a fully digital and seamless lending experience. Our goal
              is to promote financial inclusion for working professionals across India by
              ensuring transparent processes, quick access to credit, and customer-focused
              solutions.
            </p>

            <p>
              Rupee Yatra is a trusted provider of personal loans for salaried professionals
              in India, offering fast and flexible financial support for unexpected expenses,
              medical emergencies, or home improvements-all accessible with just a few
              clicks. As part of an RBI-registered NBFC ecosystem, Rupee Yatra is committed
              to empowering millennials with modern loan options, delivering quick approvals
              and borrower-friendly terms to make financing easier and more accessible.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutLoanApprovedSection
