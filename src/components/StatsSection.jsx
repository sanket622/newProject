const metrics = [
  { value: '75000 +', text: 'Happy customers who got their loans' },
  { value: '99.2%', text: 'Customer Satisfaction Rate' },
  { value: '15 min', text: 'Fastest loan approval ever' },
]

function StatsSection() {
  return (
    <section className="stats grid-bg">
      {metrics.map((metric) => (
        <article key={metric.value}>
          <h3>{metric.value}</h3>
          <p>{metric.text}</p>
        </article>
      ))}
    </section>
  )
}

export default StatsSection
