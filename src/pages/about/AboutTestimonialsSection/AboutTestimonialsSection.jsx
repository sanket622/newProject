import './AboutTestimonialsSection.css'
import avatar1 from '../../../assets/Ellipse 109.png'
import avatar2 from '../../../assets/Ellipse 109 (1).png'
import avatar3 from '../../../assets/Ellipse 109 (2).png'
import avatar4 from '../../../assets/Ellipse 109 (3).png'
import avatar5 from '../../../assets/Ellipse 109 (4).png'

const tags = ['RBI Registered', '24/7 Support', 'Customer First']
const testimonials = [
  {
    avatar: avatar1,
    name: 'Amit Yadav',
    role: 'Founder, company',
    headline: 'Best Lending Partner',
    message:
      'I have worked with many platforms, but Rupee Yatra stands out for its speed, trust, and clean process. Highly recommend!',
  },
  {
    avatar: avatar2,
    name: 'Virat Gupta',
    role: 'CEO, company',
    headline: 'Top-Notch Quality',
    message:
      'Rupee Yatra transformed our borrowing journey. The process is modern, user-friendly, and saved us countless hours.',
  },
  {
    avatar: avatar3,
    name: 'Kiran Chauhan',
    role: 'CFO, company',
    headline: "Freelancer's Ally",
    message:
      'As a freelancer, Rupee Yatra has been my go-to for quick and reliable funding. It feels like having a dependable partner.',
  },
  {
    avatar: avatar4,
    name: 'Rahul Chadda',
    role: 'COO, company',
    headline: 'Quick Portfolio Fix',
    message:
      'The intuitive process and clean flow helped me arrange funds quickly for urgent priorities. Super smooth experience.',
  },
  {
    avatar: avatar5,
    name: 'Sourabh Choudhary',
    role: 'CMO, company',
    headline: 'Stunning Experience',
    message:
      'Rupee Yatra feels visually simple but operationally powerful. It has elevated the quality and speed of our finance decisions.',
  },
  {
    avatar: avatar1,
    name: 'Karan Sharma',
    role: 'CTO, company',
    headline: 'Website Success',
    message:
      'We revamped our cash flow planning with this platform. The support and speed have been excellent throughout.',
  },
]

function AboutTestimonialsSection() {
  return (
    <section className="about-testimonials-section" aria-label="about-testimonials-intro">
      <h2>Serving 50,000+ Happy Customers</h2>

      <p>See what our happy customers are saying about their experience.</p>
 <div className="about-testimonials-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="about-testimonials-grid">
        {testimonials.map((item) => (
          <article key={item.name} className="about-testimonial-card">
            <header>
              <img className="about-testimonial-avatar" src={item.avatar} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <small>{item.role}</small>
              </div>
            </header>

            <div className="about-testimonial-divider" />

            <h4>{item.headline}</h4>
            <p>{item.message}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutTestimonialsSection
