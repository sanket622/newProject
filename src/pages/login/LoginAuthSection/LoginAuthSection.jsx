import { useMemo, useRef, useState } from 'react'
import './LoginAuthSection.css'
import maskGroup2 from '../../../assets/Mask group 2.png'

const MOBILE_LENGTH = 10
const OTP_LENGTH = 4

const onlyDigits = (value) => value.replace(/\D/g, '')

function LoginAuthSection({ onNavigate }) {
  const [step, setStep] = useState('mobile')
  const [mobile, setMobile] = useState('')
  const [otp, setOtp] = useState('')
  const [consent, setConsent] = useState(false)
  const mobileRefs = useRef([])
  const otpRefs = useRef([])

  const maskedMobile = useMemo(() => {
    if (mobile.length < MOBILE_LENGTH) {
      return '******2918'
    }
    return `******${mobile.slice(-4)}`
  }, [mobile])

  const fillDigits = (source, startIndex, pastedDigits, maxLength) => {
    const next = source.split('')
    pastedDigits
      .slice(0, maxLength - startIndex)
      .split('')
      .forEach((digit, offset) => {
        next[startIndex + offset] = digit
      })
    return next.join('').slice(0, maxLength)
  }

  const handleMobileChange = (index, value) => {
    const digits = onlyDigits(value)
    if (!digits) {
      const next = mobile.split('')
      next[index] = ''
      setMobile(next.join('').slice(0, MOBILE_LENGTH))
      return
    }

    setMobile(fillDigits(mobile, index, digits, MOBILE_LENGTH))
    const nextIndex = Math.min(index + digits.length, MOBILE_LENGTH - 1)
    mobileRefs.current[nextIndex]?.focus()
  }

  const handleOtpChange = (index, value) => {
    const digits = onlyDigits(value)
    if (!digits) {
      const next = otp.split('')
      next[index] = ''
      setOtp(next.join('').slice(0, OTP_LENGTH))
      return
    }

    setOtp(fillDigits(otp, index, digits, OTP_LENGTH))
    const nextIndex = Math.min(index + digits.length, OTP_LENGTH - 1)
    otpRefs.current[nextIndex]?.focus()
  }

  const handleMobilePaste = (index, event) => {
    event.preventDefault()
    const digits = onlyDigits(event.clipboardData.getData('text'))
    if (!digits) {
      return
    }
    setMobile(fillDigits(mobile, index, digits, MOBILE_LENGTH))
    const nextIndex = Math.min(index + digits.length, MOBILE_LENGTH - 1)
    mobileRefs.current[nextIndex]?.focus()
  }

  const handleOtpPaste = (index, event) => {
    event.preventDefault()
    const digits = onlyDigits(event.clipboardData.getData('text'))
    if (!digits) {
      return
    }
    setOtp(fillDigits(otp, index, digits, OTP_LENGTH))
    const nextIndex = Math.min(index + digits.length, OTP_LENGTH - 1)
    otpRefs.current[nextIndex]?.focus()
  }

  const handleMobileKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !mobile[index] && index > 0) {
      mobileRefs.current[index - 1]?.focus()
    }
  }

  const handleOtpKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus()
    }
  }

  const canGetOtp = mobile.length === MOBILE_LENGTH && consent
  const canVerifyOtp = otp.length === OTP_LENGTH

  return (
    <section className="login-auth-section" aria-label="login-auth-section">
      <img className="login-side-image" src={maskGroup2} alt="User holding card" />

      <div className="login-auth-panel">
        <h1>Apply for a Personal Loan</h1>

        {step === 'mobile' ? (
          <>
            <p className="login-helper">Enter your 10 digit mobile number to get started</p>

            <div className="digit-box-row" aria-label="mobile-number-boxes">
              {Array.from({ length: MOBILE_LENGTH }).map((_, index) => (
                <input
                  key={`mobile-${index}`}
                  ref={(node) => {
                    mobileRefs.current[index] = node
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={mobile[index] || ''}
                  onChange={(event) => handleMobileChange(index, event.target.value)}
                  onPaste={(event) => handleMobilePaste(index, event)}
                  onKeyDown={(event) => handleMobileKeyDown(index, event)}
                  aria-label={`Mobile digit ${index + 1}`}
                />
              ))}
            </div>

            <label className="login-consent">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
              />
              <span>
                By selecting this checkbox, I authorize the receipt of digital communications,
                such as phone calls, SMS, emails, and Whats...
              </span>
            </label>

            <button
              className="btn btn-primary login-submit-btn"
              type="button"
              disabled={!canGetOtp}
              onClick={() => setStep('otp')}
            >
              Get Otp
            </button>
          </>
        ) : (
          <>
            <p className="login-mobile-text">Mobile number : {maskedMobile}</p>
            <p className="login-helper">Please enter the OTP to unlock your next step.</p>

            <div className="digit-box-row otp-box-row" aria-label="otp-boxes">
              {Array.from({ length: OTP_LENGTH }).map((_, index) => (
                <input
                  key={`otp-${index}`}
                  ref={(node) => {
                    otpRefs.current[index] = node
                  }}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={otp[index] || ''}
                  onChange={(event) => handleOtpChange(index, event.target.value)}
                  onPaste={(event) => handleOtpPaste(index, event)}
                  onKeyDown={(event) => handleOtpKeyDown(index, event)}
                  aria-label={`OTP digit ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="btn btn-primary login-submit-btn"
              type="button"
              disabled={!canVerifyOtp}
              onClick={() => {
                if (canVerifyOtp) {
                  onNavigate('/dashboard')
                }
              }}
            >
              Verify Otp
            </button>

            <button className="login-link-btn" type="button" onClick={() => setOtp('')}>
              Resend Otp
            </button>
          </>
        )}
      </div>
    </section>
  )
}

export default LoginAuthSection
