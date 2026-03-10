import './StepsSection.css'
import frame33 from '../../../assets/Frame 33 (2).png'
import frame34 from '../../../assets/Frame 34.png'
import frame35 from '../../../assets/Frame 35.png'
import frame36 from '../../../assets/Frame 36.png'

function StepsSection() {
  return (
    <section className="steps-showcase">
      <h2>
        From Application to
        <br />
        Cash in 4 Simple Steps
      </h2>

      <div className="steps-diagram" aria-label="Loan process in four steps">
        <svg className="flow-line" viewBox="0 0 1200 760" preserveAspectRatio="none" aria-hidden="true">
          <path d="M433 169 H700 C790 169 853 190 853 240" />
          <path d="M853 358 C853 410 790 430 700 430 H535 C430 430 374 450 374 482" />
          <path d="M374 600 C374 650 430 673 535 673 H820 C860 673 881 650 881 614" />
        </svg>

        <article className="step-copy copy-1">
          <h3>Tell Us Your Dream</h3>
          <p>
            Let us know your financial plans—be it launching a business,
            renovating your home, or handling unexpected expenses. We're here to
            turn your plans into reality.
          </p>
        </article>

        <article className="step-copy copy-2">
          <h3>Easy Document Upload</h3>
          <p>
            Easily capture photos of your essential documents through our smart app—no
            queues and no complex paperwork required.
          </p>
        </article>

        <article className="step-copy copy-3">
          <h3>AI-Powered Instant Approval</h3>
          <p>
            Our AI-powered technology evaluates your application within seconds and
            delivers immediate approval, eliminating delays and uncertainty.
          </p>
        </article>

        <article className="step-copy copy-4">
          <h3>Funds in Minutes</h3>
          <p>
            Once your loan is approved, the funds are quickly transferred to your bank
            account within minutes instead of days.
          </p>
        </article>

        <div className="node node-1">
          <span className="node-number">1</span>
          <div className="node-icon">
            <img src={frame33} alt="Step 1" />
          </div>
        </div>

        <div className="node node-2">
          <span className="node-number">2</span>
          <div className="node-icon">
            <img src={frame34} alt="Step 2" />
          </div>
        </div>

        <div className="node node-3">
          <span className="node-number">3</span>
          <div className="node-icon">
            <img src={frame35} alt="Step 3" />
          </div>
        </div>

        <div className="node node-4">
          <span className="node-number">4</span>
          <div className="node-icon">
            <img src={frame36} alt="Step 4" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default StepsSection
