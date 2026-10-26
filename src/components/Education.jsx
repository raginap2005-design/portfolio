const education = [
  {
    title: 'Bachelor of Science in Computer Science',
    period: '2022 – 2025',
    desc: 'Completed undergraduate studies in Computer Science.',
  },
  {
    title: 'Higher Secondary Education — Computer Science',
    period: '2020 – 2022',
    desc: '',
  },
  {
    title: 'SSLC',
    period: '2019 – 2020',
    desc: '',
  },
]

function Education() {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Education</h2>

        <div className="timeline">
          {education.map((e) => (
            <div className="timeline-item" key={e.title}>
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <h3>{e.title}</h3>
                <p className="company">{e.period}</p>
                {e.desc && <p className="timeline-desc">{e.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education