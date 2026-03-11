import './LendingBenefitsSection.css'
import iconService from '../../../assets/Frame 33 3.png'
import iconCustom from '../../../assets/Frame 33 (1) 3.png'
import iconSafety from '../../../assets/Frame 33 (1) 2.png'

const cards = [
  {
    icon: iconService,
    title: 'Top-Rated Service',
    text:
      'Our partners uphold the highest standards of quality in loan processing and customer service.',
  },
  {
    icon: iconCustom,
    title: 'Customized Solutions',
    text:
      'Loan packages that are tailored to your unique financial needs and objectives.',
  },
  {
    icon: iconSafety,
    title: 'Transparent & Safe',
    text:
      'Total terms and conditions transparency and transaction security at the bank level.',
  },
]

function LendingBenefitsSection() {
  return (
    <section className="lending-benefits-section" aria-label="lending-benefits-section">
      <h2>Partnership Benefits</h2>
      <p>
        Our deep-rooted ties with major lenders guarantee you access to highly favorable
        rates and top-quality support throughout your borrowing journey.
      </p>

      <div className="lending-benefits-grid">
        {cards.map((card) => (
          <article key={card.title}>
            <img src={card.icon} alt="" />
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default LendingBenefitsSection
