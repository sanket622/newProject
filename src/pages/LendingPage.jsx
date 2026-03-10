function LendingPage() {
  return (
    <section className="inner-page">
      <div className="inner-page-head">
        <h1>Lending Services</h1>
        <p>
          Choose a plan that fits your immediate needs and complete your application in
          minutes with a straightforward digital process.
        </p>
      </div>

      <div className="lending-grid">
        <article>
          <h2>Instant Personal Loan</h2>
          <p>Loan size: Rs. 1,000 to Rs. 50,000</p>
          <p>Tenure: 1 to 90 days</p>
          <p>Quick approval for urgent expenses.</p>
          <button className="btn btn-primary" type="button">
            Apply Now
          </button>
        </article>

        <article>
          <h2>Business Micro Loan</h2>
          <p>Loan size: Rs. 10,000 to Rs. 2,00,000</p>
          <p>Flexible repayment options</p>
          <p>Designed for working capital and short-term growth needs.</p>
          <button className="btn btn-primary" type="button">
            Start Application
          </button>
        </article>
      </div>
    </section>
  )
}

export default LendingPage
