import frame35 from '../assets/Frame 35.png'
import frame33 from '../assets/Frame 33.png'
import frame331 from '../assets/Frame 33 (1).png'

const features = [
  {
    icon: frame35,
    title: 'Automation',
    text: 'Our solutions enable fintechs and NBFCs to simplify operations with automation and secure infrastructure.',
  },
  {
    icon: frame33,
    title: 'Compliance',
    text: 'Maintain audit readiness and long-term compliance with RBI-aligned processes and documentation.',
  },
  {
    icon: frame331,
    title: 'Operational Enhancement',
    text: 'Reduce loan turnaround times with real-time tracking and efficient workflow coordination.',
  },
]

function FeaturesSection() {
  return (
    <section className="feature-strip" aria-label="service-highlights">
      {features.map((feature) => (
        <article key={feature.title}>
          <div className="feature-icon">
            <img src={feature.icon} alt="" />
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </article>
      ))}
    </section>
  )
}

export default FeaturesSection
