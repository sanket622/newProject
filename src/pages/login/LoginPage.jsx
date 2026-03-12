import '../Pages.css'
import LoginAuthSection from './LoginAuthSection/LoginAuthSection'

function LoginPage({ onNavigate }) {
  return (
    <section className="inner-page paper-bg">
      <LoginAuthSection onNavigate={onNavigate} />
    </section>
  )
}

export default LoginPage
