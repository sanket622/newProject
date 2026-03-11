import { useMemo, useState } from 'react'
import './HeroSection.css'

function HeroSection() {
  const [loanAmount, setLoanAmount] = useState(5000)
  const [loanTenureDays, setLoanTenureDays] = useState(1)
  const [dailyInterestRate, setDailyInterestRate] = useState(1)

  const { dailyInterest, totalInterest, totalRepayment } = useMemo(() => {
    const perDayInterest = (loanAmount * dailyInterestRate) / 100
    const fullInterest = perDayInterest * loanTenureDays
    return {
      dailyInterest: perDayInterest,
      totalInterest: fullInterest,
      totalRepayment: loanAmount + fullInterest,
    }
  }, [loanAmount, loanTenureDays, dailyInterestRate])

  const formatINR = (value) =>
    new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 2,
      minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    }).format(value)

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

      <div className="loan-card-wrap">
        <aside className="loan-card">
          <h2>Calculate your Loan</h2>
          <p>Calculate your daily interest and plan your short-term loan repayment</p>

          <div className="slider-block">
            <div className="row">
              <strong>Loan Amount</strong>
              <strong>Rs. {formatINR(loanAmount)}</strong>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="500"
              value={loanAmount}
              onChange={(event) => setLoanAmount(Number(event.target.value))}
            />
          </div>

          <div className="slider-block">
            <div className="row">
              <strong>Loan Tenure (Days)</strong>
              <strong>
                {loanTenureDays} day{loanTenureDays > 1 ? 's' : ''}
              </strong>
            </div>
            <input
              type="range"
              min="1"
              max="90"
              value={loanTenureDays}
              onChange={(event) => setLoanTenureDays(Number(event.target.value))}
            />
          </div>

          <div className="slider-block">
            <div className="row">
              <strong>Daily Interest Rate (%)</strong>
              <strong>{dailyInterestRate}%</strong>
            </div>
            <input
              type="range"
              min="1"
              max="5"
              step="0.1"
              value={dailyInterestRate}
              onChange={(event) => setDailyInterestRate(Number(event.target.value))}
            />
          </div>

          <div className="summary-box">
            <div>
              <span>Loan Amount</span>
              <strong>Rs. {formatINR(loanAmount)}</strong>
            </div>
            <div>
              <span>Daily Interest Rate (%)</span>
              <strong>{dailyInterestRate}% per day</strong>
            </div>
            <div>
              <span>Loan Tenure</span>
              <strong>
                {loanTenureDays} day{loanTenureDays > 1 ? 's' : ''}
              </strong>
            </div>
            <div>
              <span>Daily Interest</span>
              <strong>Rs. {formatINR(dailyInterest)}</strong>
            </div>
            <div>
              <span>Total Interest</span>
              <strong>Rs. {formatINR(totalInterest)}</strong>
            </div>
            <div className="total-row">
              <span>Total Repayment</span>
              <strong>Rs. {formatINR(totalRepayment)}</strong>
            </div>
          </div>

          <button className="btn btn-outline" type="button">
            Apply For Loan
          </button>
        </aside>
      </div>
    </section>
  )
}

export default HeroSection
