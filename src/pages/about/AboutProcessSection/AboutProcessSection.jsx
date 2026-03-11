import './AboutProcessSection.css'
import frame35 from '../../../assets/Frame 35.png'
import frame33 from '../../../assets/Frame 33.png'
import frame331 from '../../../assets/Frame 33 (1).png'

const processItems = [
  {
    icon: frame35,
    text:
      'Start by submitting our straightforward online loan application with your personal details, employment information, and the amount you wish to borrow.',
  },
  {
    icon: frame33,
    text:
      'Our advanced system quickly evaluates your documents and credit profile, enabling you to receive a preliminary loan decision within minutes.',
  },
  {
    icon: frame331,
    text:
      'After approval, the loan amount is deposited directly into your bank account. Unlike the typical 24-48 hour processing time, our system can deliver funds in just 5 minutes.',
  },
]

function AboutProcessSection() {
  return (
    <section className="about-process-section" aria-label="about-process">
      <h2>How It Works</h2>

      <div className="about-process-grid">
        {processItems.map((item) => (
          <article key={item.text}>
            <img src={item.icon} alt="" />
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutProcessSection
