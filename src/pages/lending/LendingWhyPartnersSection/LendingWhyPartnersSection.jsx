import './LendingWhyPartnersSection.css'
import centerNode from '../../../assets/Frame 2121453378.png'
import iconRegulated from '../../../assets/Frame 2121453375 (2).png'
import iconRates from '../../../assets/Frame 2121453375 (3).png'
import iconResults from '../../../assets/Frame 2121453375.png'
import iconSupport from '../../../assets/Frame 2121453375 (1).png'

const items = [
  {
    icon: iconRegulated,
    title: 'Licensed & Regulated',
    text:
      'We only work with RBI-regulated institutions. This ensures that every lender we connect you with has been strictly audited for safety and reliability.',
  },
  {
    icon: iconRates,
    title: 'Fair-Market Rates',
    text:
      'Leverage our established relationships with top-tier lenders to secure highly favorable terms and industry-best pricing.',
  },
  {
    icon: iconResults,
    title: 'Instant Results',
    text:
      "Fast-tracked approvals. Instant disbursements. We provide the quick financial support you need to handle life's urgent moments.",
  },
  {
    icon: iconSupport,
    title: 'Expert Support',
    text:
      "You're never alone on your financial journey. Our friendly team is here to walk you through every step of the loan process, from start to finish.",
  },
]

function LendingWhyPartnersSection() {
  return (
    <section className="lending-why-partners" aria-label="lending-why-partners">
      <h2>Why Choose Our Lending Partners?</h2>
      <p>
        Your peace of mind is our priority. That&apos;s why we hand-pick our partners based on
        their dedication to great service, affordability, and a history of happy borrowers.
      </p>

      <div className="lending-why-layout">
        <div className="lending-cross lending-cross-h" aria-hidden="true" />
        <div className="lending-cross lending-cross-v" aria-hidden="true" />
        <div className="lending-center-node" aria-hidden="true">
          <img src={centerNode} alt="" />
        </div>

        {items.map((item) => (
          <article key={item.title} className="lending-why-card">
            <img src={item.icon} alt="" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default LendingWhyPartnersSection
