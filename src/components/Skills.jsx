const skillGroups = [
  {
    title: 'Frontend Development',
    icon: '🎨',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Responsive Web Design'],
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js', 'REST API Development'],
  },
  {
    title: 'Database',
    icon: '🗄️',
    skills: ['MongoDB', 'Mongoose'],
  },
  {
    title: 'Authentication & Security',
    icon: '🔐',
    skills: ['JWT Authentication', 'bcrypt Password Hashing', 'Role-Based Access Control'],
  },
  {
    title: 'Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
  {
    title: 'Additional Technologies',
    icon: '🚀',
    skills: ['Socket.IO', 'Razorpay Integration'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3>
                <span className="skill-icon">{group.icon}</span> {group.title}
              </h3>
              <div className="skill-tags">
                {group.skills.map((s) => (
                  <span className="tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills