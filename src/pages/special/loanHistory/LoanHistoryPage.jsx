import DashboardShell from '../layout/DashboardShell'

function LoanHistoryPage({ onNavigate, currentPath }) {
  return (
    <DashboardShell
      onNavigate={onNavigate}
      currentPath={currentPath}
      title="Loan History"
      description="Track your previous and active loans with complete timeline visibility."
      progress={10}
    >
      <div className="dashboard-placeholder">Loan History Page</div>
    </DashboardShell>
  )
}

export default LoanHistoryPage
