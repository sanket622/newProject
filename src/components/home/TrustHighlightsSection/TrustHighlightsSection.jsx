import './TrustHighlightsSection.css'
import frame35 from '../../../assets/Frame 35.png'
import frame33 from '../../../assets/Frame 33.png'
import frame331 from '../../../assets/Frame 33 (1).png'
import ellipse2 from '../../../assets/Ellipse 2.png'

const highlights = [
  {
    icon: frame35,
    title: 'Lightning Fast',
    text: 'Minutes to get approved, hours to receive your money.',
  },
  {
    icon: frame33,
    title: 'No Hidden Fees',
    text: 'Honest pricing with no hidden charges.',
  },
  {
    icon: frame331,
    title: 'Smart Approval',
    text: 'Our AI verifies your trust instantly-no endless paperwork required.',
  },
]

function TrustHighlightsSection() {
  return (
    <section className="trust-highlights" aria-label="trust-highlights">
      <h2>The Benefits of Choosing Rupee Yatra</h2>
      <p className="trust-subtext">
        We&apos;re not just another lending company. We&apos;re a trusted financial partner who
        understands the urgency of your needs-offering quick solutions with no delays or
        complications.
      </p>

      <div className="trust-grid">
        <img src={ellipse2} alt="" className="trust-connector trust-connector-1" aria-hidden="true" />
        <img src={ellipse2} alt="" className="trust-connector trust-connector-2" aria-hidden="true" />
        {highlights.map((item) => (
          <article key={item.title}>
            <img src={item.icon} alt="" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TrustHighlightsSection
