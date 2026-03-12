import DashboardShell from '../layout/DashboardShell'

function TermsPage({ onNavigate, currentPath }) {
  return (
    <DashboardShell
      onNavigate={onNavigate}
      currentPath={currentPath}
      title="Terms & Condition"
      description="Review all applicable terms and conditions for platform usage and lending services."
      progress={10}
    >
      <div className="dashboard-placeholder">Terms & Condition Page</div>
    </DashboardShell>
  )
}

export default TermsPage
