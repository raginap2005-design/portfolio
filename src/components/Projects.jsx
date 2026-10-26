const projects = [
  {
    title: 'StyleHub',
    subtitle: 'Full-Stack E-Commerce Application',
    desc: 'A responsive online shopping application with product management, authentication, cart, wishlist, order tracking, payment integration, and an admin dashboard.',
    tech: ['React.js', 'Vite', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Socket.IO', 'Razorpay'],
    features: [
      'User registration, login, forgot-password and OTP',
      'Product search, category filter, cart and wishlist',
      'Cash on Delivery and Razorpay payments',
      'Order history, status tracking and product reviews',
      'Admin dashboard to manage products, orders and users',
      'JWT authentication, bcrypt hashing, role-based access',
      'Real-time order updates using Socket.IO',
    ],
    images: ['/images/stylehub-home.png', '/images/stylehub-admin.png'],
    live: 'https://fashion-store-frontend-zco2.onrender.com',
    github: 'https://github.com/raginap2005-design/fashion-store',
  },
  {
    title: 'Personal Portfolio Website',
    subtitle: 'React.js Portfolio',
    desc: 'A responsive personal portfolio website showcasing my technical skills, internship experience, projects, and contact information.',
    tech: ['React.js', 'CSS3', 'JavaScript'],
    features: [],
    images: [],
    live: '',
    github: '',
    status: 'In Development',
  },
]

function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-list">
          {projects.map((p) => (
            <div className="project-card" key={p.title}>
              {p.images.length > 0 && (
                <div className="project-images">
                  {p.images.map((img) => (
                    <img
                      key={img}
                      src={img}
                      alt={`${p.title} screenshot`}
                      onError={(e) => (e.target.style.display = 'none')}
                    />
                  ))}
                </div>
              )}

              <div className="project-body">
                <h3>{p.title}</h3>
                <p className="project-subtitle">{p.subtitle}</p>
                {p.status && <span className="status-badge">{p.status}</span>}
                <p className="project-desc">{p.desc}</p>

                {p.features.length > 0 && (
                  <ul className="project-features">
                    {p.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                )}

                <div className="skill-tags">
                  {p.tech.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>

                {(p.live || p.github) && (
                  <div className="buttons project-buttons">
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                        Live Demo
                      </a>
                    )}
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-outline">
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects