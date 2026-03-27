import '../Pages.css'
import RepayIntroSection from './RepayIntroSection/RepayIntroSection'
import RepayPaymentSection from './RepayPaymentSection/RepayPaymentSection'

function RepayLoanPage() {
  return (
    <section className="inner-page paper-bg">
      <RepayIntroSection />
      <RepayPaymentSection />
    </section>
  )
}

export default RepayLoanPage
