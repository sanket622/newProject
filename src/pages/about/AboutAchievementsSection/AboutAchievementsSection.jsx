import './AboutAchievementsSection.css'

const achievements = [
  { value: '50,000+', label: 'Happy customers' },
  { value: '30 min', label: 'Average Disbursal' },
  { value: '\u20b9500Cr+', label: 'Total Disbursed' },
]

function AboutAchievementsSection() {
  return (
    <section className="about-achievements-section" aria-label="about-achievements">
      <h2>Our Achievements</h2>

      <div className="about-achievements-grid">
        {achievements.map((item) => (
          <article key={item.label} className="about-achievement-card">
            <strong>{item.value}</strong>
            <p>{item.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutAchievementsSection
