import { useEffect, useMemo, useState } from 'react'
import './styles/common.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import HomePage from './pages/home/HomePage'
import AboutPage from './pages/about/AboutPage'
import ContactPage from './pages/contact/ContactPage'
import LendingPage from './pages/lending/LendingPage'
import RepayLoanPage from './pages/repayLoan/RepayLoanPage'
import LoginPage from './pages/login/LoginPage'
import DashboardPage from './pages/special/dashboard/DashboardPage'
import AccountPage from './pages/special/account/AccountPage'
import SupportPage from './pages/special/support/SupportPage'
import LoanHistoryPage from './pages/special/loanHistory/LoanHistoryPage'
import TermsPage from './pages/special/terms/TermsPage'
import PrivacyPage from './pages/special/privacy/PrivacyPage'

const routeMap = {
  '/': HomePage,
  '/about': AboutPage,
  '/contact': ContactPage,
  '/lending': LendingPage,
  '/repay-loan': RepayLoanPage,
  '/login': LoginPage,
  '/dashboard': DashboardPage,
  '/dashboard/account': AccountPage,
  '/dashboard/support': SupportPage,
  '/dashboard/loan-history': LoanHistoryPage,
  '/dashboard/terms': TermsPage,
  '/dashboard/privacy': PrivacyPage,
}

const normalizePath = (path) => {
  if (!path) {
    return '/'
  }

  if (path.length > 1 && path.endsWith('/')) {
    return path.slice(0, -1)
  }

  return path
}

function App() {
  const [currentPath, setCurrentPath] = useState(normalizePath(window.location.pathname))
  const isAuthOrDashboard = currentPath === '/login' || currentPath.startsWith('/dashboard')

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = (path) => {
    const nextPath = normalizePath(path)

    if (nextPath === currentPath) {
      return
    }

    window.history.pushState({}, '', nextPath)
    setCurrentPath(nextPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const CurrentPage = useMemo(() => routeMap[currentPath] || HomePage, [currentPath])

  return (
    <div className="page-shell">
      {!isAuthOrDashboard ? <Navbar onNavigate={navigate} currentPath={currentPath} /> : null}
      <main>
        <CurrentPage onNavigate={navigate} currentPath={currentPath} />
      </main>
      {!isAuthOrDashboard ? <Footer onNavigate={navigate} /> : null}
    </div>
  )
}

export default App
