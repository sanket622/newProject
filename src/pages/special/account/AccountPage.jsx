import DashboardShell from '../layout/DashboardShell'

function AccountPage({ onNavigate, currentPath }) {
  return (
    <DashboardShell
      onNavigate={onNavigate}
      currentPath={currentPath}
      title="My Account"
      description="Manage your account details and keep your profile information up to date."
      progress={10}
    >
      <div className="dashboard-placeholder">Account Page</div>
    </DashboardShell>
  )
}

export default AccountPage
