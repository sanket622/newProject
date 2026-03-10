import { useEffect, useMemo, useState } from 'react'
import './styles/common.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LendingPage from './pages/LendingPage'

const routeMap = {
  '/': HomePage,
  '/about': AboutPage,
  '/contact': ContactPage,
  '/lending': LendingPage,
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
      <Navbar onNavigate={navigate} currentPath={currentPath} />
      <main>
        <CurrentPage />
      </main>
      <Footer onNavigate={navigate} />
    </div>
  )
}

export default App
