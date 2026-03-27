import './RepayPaymentSection.css'

const bankDetails = [
  { label: 'Bank Name', value: 'ICICI BANK' },
  {
    label: 'Account Name',
    value: 'LOAN2GROW FINCAP PRIVATE LIMITED JC COLLECTION',
  },
  { label: 'Account No.', value: '006505008199' },
  { label: 'IFSC Code', value: 'ICIC0000065' },
  { label: 'Account Type', value: 'Current' },
]

function RepayPaymentSection() {
  return (
    <section className="repay-payment-section" aria-label="repay-payment-section">
      <div className="repay-payment-grid">
        <article className="repay-payment-panel">
          <header className="repay-payment-header">
            <h2>Bank Transfer Details</h2>
          </header>

          <div className="repay-bank-details">
            {bankDetails.map((item) => (
              <div key={item.label} className="repay-bank-row">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="repay-payment-panel">
          <header className="repay-payment-header">
            <h2>QR Code Payment</h2>
          </header>

          <div className="repay-qr-placeholder">
            <div className="repay-qr-box" aria-hidden="true" />
            <p>QR code can be placed here for direct repayment.</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default RepayPaymentSection
