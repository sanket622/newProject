import './ContactHeroSection.css'

const supportItems = [
  { title: 'Call Us', value: '9650302076' },
  { title: 'Email Us', value: 'info@jhatpatcash.com' },
  { title: 'Support', value: 'support@jhatpatcash.com' },
  {
    title: 'Visit Us',
    value: '2ND FLOOR, PLOT NO. 4, MINARCH TOWER, SECTOR-44, GURGAON SECTOR 45, HARYANA-122003 INDIA',
  },
]

function ContactHeroSection() {
  return (
    <section className="contact-hero-section" aria-label="contact-hero-section">
      <div className="contact-hero-left">
        <h1>Get In Touch</h1>
        <p>
          Got questions about our loans or need a hand with your application? Our team is
          here to give you the one-on-one expert help you deserve. Whether you&apos;re curious
          about our rates or just want a faster path to approval, we&apos;re dedicated to keeping
          your experience simple, clear, and stress-free. Just reach out-we&apos;re ready when
          you are.
        </p>

        <div className="contact-support-list">
          {supportItems.map((item) => (
            <article key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.value}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="contact-complaint-card">
        <h2>Submit a Complaint</h2>
        <p>
          We prioritize every concern and are committed to a swift resolution. To help us
          investigate thoroughly, please provide a detailed account of your issue in the
          space below.
        </p>

        <form className="contact-complaint-form">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email Id" />
          <input type="tel" placeholder="Mobile Number" />
          <textarea rows={5} placeholder="Message" />
          <button className="btn btn-primary" type="button">
            Submit Complain
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactHeroSection
