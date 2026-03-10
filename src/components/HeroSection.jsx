function HeroSection() {
  return (
    <section className="hero grid-bg">
      <div className="hero-copy">
        <div className="pill-row">
          <span>Lightning Fast Approval</span>
          <span>Bank-Grade Security</span>
          <span>Zero Hidden Fees</span>
        </div>
        <h1>Get Funds in Your Pocket Today</h1>
        <p>
          Make your financial dreams come true with lightning-fast personal loans.
          Enjoy instant approval and quick money transfer within minutes.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary" type="button">
            Get Cash Now
          </button>
          <button className="btn btn-secondary" type="button">
            Learn How it Works
          </button>
        </div>
      </div>

      <aside className="loan-card">
        <h2>Calculate your Loan</h2>
        <p>Calculate your daily interest and plan your short-term loan repayment</p>

        <div className="slider-block">
          <div className="row">
            <strong>Loan Amount</strong>
            <strong>Rs. 5,000</strong>
          </div>
          <input type="range" min="1000" max="50000" defaultValue="5000" />
        </div>

        <div className="slider-block">
          <div className="row">
            <strong>Loan Tenure (Days)</strong>
            <strong>1 day</strong>
          </div>
          <input type="range" min="1" max="90" defaultValue="1" />
        </div>

        <div className="slider-block">
          <div className="row">
            <strong>Daily Interest Rate (%)</strong>
            <strong>1%</strong>
          </div>
          <input type="range" min="1" max="5" defaultValue="1" />
        </div>

        <div className="summary-box">
          <div>
            <span>Loan Amount</span>
            <strong>Rs. 5,000</strong>
          </div>
          <div>
            <span>Daily Interest Rate (%)</span>
            <strong>1% per day</strong>
          </div>
          <div>
            <span>Loan Tenure</span>
            <strong>1 day</strong>
          </div>
          <div>
            <span>Daily Interest</span>
            <strong>Rs. 50</strong>
          </div>
          <div>
            <span>Total Interest</span>
            <strong>Rs. 50</strong>
          </div>
          <div className="total-row">
            <span>Loan Amount</span>
            <strong>Rs. 5,000</strong>
          </div>
        </div>

        <button className="btn btn-outline" type="button">
          Apply For Loan
        </button>
      </aside>
    </section>
  )
}

export default HeroSection
