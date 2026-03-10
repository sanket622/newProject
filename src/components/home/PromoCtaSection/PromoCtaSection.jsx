import './PromoCtaSection.css'

function PromoCtaSection() {
  return (
    <section className="promo-cta" aria-label="promo-call-to-action">
      <h2 className="promo-heading">
        Ready to Begin Your Journey Today?
      </h2>

      <p>
        Don&apos;t just dream about financial freedom-start living it today. Join
        thousands of happy customers who have transformed their lives with Jhatpat Cash.
      </p>

      <div className="promo-actions">
        <button type="button" className="promo-btn promo-btn-primary">
          Get Started Now
        </button>
        <button type="button" className="promo-btn promo-btn-secondary">
          Talk to Expert
        </button>
      </div>
    </section>
  )
}

export default PromoCtaSection
