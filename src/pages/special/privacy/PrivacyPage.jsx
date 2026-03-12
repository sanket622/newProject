import DashboardShell from '../layout/DashboardShell'

function PrivacyPage({ onNavigate, currentPath }) {
  return (
    <DashboardShell
      onNavigate={onNavigate}
      currentPath={currentPath}
      title="Privacy Policy"
      description="Understand how your personal information is collected, processed, and protected."
      progress={10}
    >
      <div className="dashboard-placeholder">Privacy Policy Page</div>
    </DashboardShell>
  )
}

export default PrivacyPage
