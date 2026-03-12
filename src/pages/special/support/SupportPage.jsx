import DashboardShell from '../layout/DashboardShell'

function SupportPage({ onNavigate, currentPath }) {
  return (
    <DashboardShell
      onNavigate={onNavigate}
      currentPath={currentPath}
      title="Support"
      description="Get help from our team for any application, account, or repayment issue."
      progress={10}
    >
      <div className="dashboard-placeholder">Support Page</div>
    </DashboardShell>
  )
}

export default SupportPage
