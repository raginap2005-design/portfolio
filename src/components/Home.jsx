import { useState } from 'react'

function Home() {
  const [imgError, setImgError] = useState(false)

  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-text fade-in">
          <p className="greeting">Hello 👋</p>
          <h1>
            Hi, I'm <span>Ragina P</span>
          </h1>
          <h2>MERN Stack Developer</h2>
          <p className="description">
            I build responsive and user-friendly web applications using modern
            web technologies. Passionate about developing full-stack
            applications, solving problems, and continuously improving my
            programming skills.
          </p>
          <p className="location">📍 Kerala, India</p>

          <div className="buttons">
            <a href="#projects" className="btn btn-primary">View My Projects</a>
            <a href="/resume.pdf" download className="btn btn-outline">Download Resume</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>

        <div className="home-image fade-in">
          {imgError ? (
            <div className="photo-placeholder">RR</div>
          ) : (
            <img
              src="/images/profile.jpg"
              alt="Ragina P"
              onError={() => setImgError(true)}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Home