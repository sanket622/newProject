import Navbar1 from '../../../components/navbar1/Navbar1'
import './DashboardShell.css'

const sideItems = [
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'My Account', path: '/dashboard/account' },
  { label: 'Support', path: '/dashboard/support' },
  { label: 'Loan History', path: '/dashboard/loan-history' },
  { label: 'Terms & Condition', path: '/dashboard/terms' },
  { label: 'Privacy Policy', path: '/dashboard/privacy' },
]

function DashboardShell({
  onNavigate,
  currentPath,
  title,
  description,
  progress = 10,
  children,
}) {
  return (
    <section className="dashboard-page">
      <Navbar1 />

      <div className="dashboard-layout">
        <aside className="dashboard-sidebar">
          {sideItems.map((item) => (
            <button
              type="button"
              key={item.path}
              className={`dashboard-side-link ${currentPath === item.path ? 'active' : ''}`}
              onClick={() => onNavigate(item.path)}
            >
              <span aria-hidden="true">{currentPath === item.path ? '◼' : '◻'}</span>
              {item.label}
            </button>
          ))}

          <button
            type="button"
            className="dashboard-side-link dashboard-logout"
            onClick={() => onNavigate('/login')}
          >
            <span aria-hidden="true">◻</span>
            Logout
          </button>
        </aside>

        <article className="dashboard-main-card">
          <div className="dashboard-main-head">
            <div>
              <h1>{title}</h1>
              {description ? <p>{description}</p> : null}
            </div>

            <div className="dashboard-progress">
              <span>{progress}%</span>
            </div>
          </div>

          <div className="dashboard-divider" />
          {children}
        </article>
      </div>
    </section>
  )
}

export default DashboardShell
