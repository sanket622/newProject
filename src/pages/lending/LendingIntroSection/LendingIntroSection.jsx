import './LendingIntroSection.css'
import iconOne from '../../../assets/Frame 33 2.png'
import iconTwo from '../../../assets/Frame 33 (1) 2.png'
import iconThree from '../../../assets/Frame 33 (2) 2.png'

const lendingPoints = [
  {
    icon: iconOne,
    text:
      'As a fully accredited NBFC, we specialize in offering secure personal financing with market-leading interest rates you can rely on.',
  },
  {
    icon: iconTwo,
    text:
      'Take control of your finances with instant credit approvals and flexible payment schedules, all delivered through a seamless, mobile-first banking experience.',
  },
  {
    icon: iconThree,
    text:
      'Next-generation finance meets intelligent technology. Our AI-driven platform streamlines the path from application to payout in seconds.',
  },
]

function LendingIntroSection() {
  return (
    <section className="lending-intro-section" aria-label="lending-intro-section">
      <h1>Our Lending Partners</h1>
      <p className="lending-intro-lead">
        We hand-select our lending partners to ensure you always get the most competitive
        rates and a smooth, stress-free path to the funding you need.
      </p>
      <h1 className="lending-intro-second-title">Trusted Lending Partners</h1>
      <p className="lending-intro-sublead">
        We&apos;ve built a vetted network of lenders to give you more options, ensuring you
        find a loan with the best rates and terms that fit your life.
      </p>

      <div className="lending-intro-grid">
        {lendingPoints.map((point) => (
          <article key={point.text}>
            <img src={point.icon} alt="" />
            <p>{point.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default LendingIntroSection
