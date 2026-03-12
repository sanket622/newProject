import DashboardShell from '../layout/DashboardShell'
import './DashboardPage.css'
import panIcon from '../../../assets/Frame 2121453375 2.png'
import personalIcon from '../../../assets/Frame 2121453375 (1) 2.png'
import addressIcon from '../../../assets/Frame 2121453375 (2) 2.png'
import incomeIcon from '../../../assets/Frame 2121453375 (3) 2.png'
import selfieIcon from '../../../assets/Frame 2121453375 (4).png'

const profileCards = [
  {
    icon: panIcon,
    title: 'PAN Authentication',
    text: 'Please enter your PAN Card number. Your identity is secure with us.',
  },
  {
    icon: personalIcon,
    title: 'Personal Information',
    text: 'Share with us a bit about yourself.',
  },
  {
    icon: addressIcon,
    title: 'Current Residence Address',
    text: 'Ensure to provide correct residence address. No Surprise Visits, We Promise.',
  },
  {
    icon: incomeIcon,
    title: 'Income Details',
    text: 'Share your Income Details.',
  },
  {
    icon: selfieIcon,
    title: 'Selfie Upload',
    text: 'Share your selfie and complete the registration.',
  },
]

function DashboardPage({ onNavigate, currentPath }) {
  return (
    <DashboardShell
      onNavigate={onNavigate}
      currentPath={currentPath}
      title="Profile Registration"
      description="Register now to explore a range of tailored services just for you. Once registered, our loan service will be available to meet your financial needs."
      progress={10}
    >
      <div className="dashboard-card-grid">
        {profileCards.map((card) => (
          <article key={card.title} className="dashboard-item-card">
            <img className="dashboard-item-icon" src={card.icon} alt="" />
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </DashboardShell>
  )
}

export default DashboardPage
