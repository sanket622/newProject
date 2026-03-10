import './FeaturesSection.css'
import frame35 from '../../../assets/Frame 35.png'
import frame33 from '../../../assets/Frame 33.png'
import frame331 from '../../../assets/Frame 33 (1).png'

const features = [
  {
    icon: frame35,
    title: 'Automation',
    text: 'Our solutions enable fintechs and NBFCs to simplify operations with automation, strong compliance frameworks, and secure infrastructure, allowing them to concentrate on growth.',
  },
  {
    icon: frame33,
    title: 'Compliance',
    text: 'Maintain audit readiness and long-term compliance with RBI-aligned protocols, automated monitoring, and well-structured regulatory documentation',
  },
  {
    icon: frame331,
    title: 'Operational Enhancement',
    text: 'Reduce loan turnaround times through real-time tracking, efficient workflows, and stronger team coordination, leading to better borrower experiences.',
  },
]

function FeaturesSection() {
  return (
    <section className="feature-strip" aria-label="service-highlights">
      <h2 className="feature-heading">
        Built for Fast, Compliant
        <br />
        and Scalable Operations
      </h2>
      {features.map((feature) => (
        <article key={feature.title}>
          <div className="feature-icon">
            <img src={feature.icon} alt={feature.title} />
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </article>
      ))}
    </section>
  )
}

export default FeaturesSection
