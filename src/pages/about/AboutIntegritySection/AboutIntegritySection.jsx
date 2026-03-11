import './AboutIntegritySection.css'
import frame35 from '../../../assets/Frame 35.png'
import frame33 from '../../../assets/Frame 33.png'
import frame331 from '../../../assets/Frame 33 (1).png'

const featureCards = [
  {
    icon: frame35,
    title: 'AI-Enhanced Protection Logic',
    text:
      'Get an answer in seconds, not days. Our smart technology scans thousands of details instantly to give you a safe, accurate decision without the wait.',
  },
  {
    icon: frame33,
    title: 'Blockchain-Powered Security',
    text:
      'By using a shared digital ledger, we build an unchangeable record of every transaction. This ensures total openness and makes fraud virtually impossible.',
  },
  {
    icon: frame331,
    title: 'Quantum-Leap Protection',
    text:
      'Utilizing post-quantum cryptographic standards, our architecture is designed to neutralize emerging threats and maintain data integrity for decades to come.',
  },
]

const statCards = [
  { value: '99.99%', label: 'Security Score' },
  { value: '0.001s', label: 'Response Time' },
  { value: '\u221e', label: 'Scalability' },
]

function AboutIntegritySection() {
  return (
    <section className="about-integrity-section" aria-label="about-integrity-section">
      <h2>Driving Integrity Through Advancement</h2>
      <p className="about-integrity-subtext">
        Discover the next generation of secure lending. We pair advanced innovation with a
        total dedication to your fiscal protection, transforming digital security from a
        feature into a fundamental promise.
      </p>

      <div className="about-integrity-feature-grid">
        {featureCards.map((card) => (
          <article key={card.title} className="about-integrity-feature-card">
            <img src={card.icon} alt="" />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>

      <div className="about-integrity-stats-grid">
        {statCards.map((card) => (
          <article key={card.label} className="about-integrity-stat-card">
            <strong>{card.value}</strong>
            <p>{card.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutIntegritySection
