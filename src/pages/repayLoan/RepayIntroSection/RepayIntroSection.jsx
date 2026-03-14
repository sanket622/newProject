import './RepayIntroSection.css'
import instantIcon from '../../../assets/Frame 35.png'
import bankIcon from '../../../assets/Frame 33 4.png'
import secureIcon from '../../../assets/Frame 33 (1).png'

const repayCards = [
  {
    icon: instantIcon,
    title: 'Instant Processing'
  },
  {
    icon: bankIcon,
    title: 'Bank Transfer'
  },
  {
    icon: secureIcon,
    title: 'QR Code Payment'
  },
]

function RepayIntroSection() {
  return (
    <section className="repay-intro-section" aria-label="repay-intro-section">
      <h1>Loan Repayment</h1>
      <p>Secure and convenient payment options for your loan</p>

      <div className="repay-intro-grid">
        {repayCards.map((card) => (
          <article key={card.title} className="repay-intro-card">
            <img src={card.icon} alt="" />
            <h2>{card.title}</h2>
          </article>
        ))}
      </div>
    </section>
  )
}

export default RepayIntroSection
