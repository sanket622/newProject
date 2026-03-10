import './Pages.css'

function ContactPage() {
  return (
    <section className="inner-page paper-bg">
      <div className="inner-page-head">
        <h1>Contact Us</h1>
        <p>
          Our support team is available to help you with loan applications, repayment,
          account access, and security-related questions.
        </p>
      </div>

      <div className="contact-grid">
        <article>
          <h2>Customer Support</h2>
          <p>Email: support@rupeeyatra.example</p>
          <p>Phone: +91 00000 00000</p>
          <p>Hours: Mon-Sat, 9:00 AM to 7:00 PM</p>
        </article>

        <article>
          <h2>Office</h2>
          <p>Rupee Yatra Financial Services</p>
          <p>4th Floor, Finance Plaza</p>
          <p>Bengaluru, Karnataka 560001</p>
        </article>
      </div>
    </section>
  )
}

export default ContactPage
