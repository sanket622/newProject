import './AboutWhyChooseSection.css'
import frame58 from '../../../assets/Frame 58.png'
import frame581 from '../../../assets/Frame 58 (1).png'

const cards = [
  {
    title: 'Scalable Systems',
    text:
      'Our industry expertise guarantees quality and reliability, while our platform efficiently handles thousands of applications at the same time with no downtime.',
  },
  {
    title: 'Reliable Compliance',
    text:
      'We maintain full regulatory compliance to ensure risk-free operations, supported by an RBI-registered NBFC and backed by bank-level security protocols and data protection.',
  },
  {
    title: 'Advanced Technology',
    icon: frame58,
    text:
      'By leveraging advanced AI and machine learning, we enable smarter growth and innovation with real-time credit evaluation and instant loan approval systems.',
  },
  {
    title: 'Customer-Oriented',
    icon: frame581,
    text:
      'We enhance the borrower experience through secure and efficient operations, supported by round-the-clock customer assistance and tailored loan solutions.',
  },
]

function AboutWhyChooseSection() {
  return (
    <section className="about-why-choose" aria-label="about-why-choose">
      <h2>
        Why Choose Rupee
        <br />
        Yatra?
      </h2>

      <div className="about-why-choose-grid">
        {cards.map((card) => (
          <article key={card.title} className="about-why-card">
            <span className="about-why-icon" aria-hidden="true">
              {card.icon ? <img src={card.icon} alt="" /> : '☆'}
            </span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutWhyChooseSection
