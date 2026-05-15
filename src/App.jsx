import "./App.css"
import rahulPhoto from "./assets/rahul.png"
import ocrBot from "./assets/projects/ocr-bot.png"

function App() {
  const projects = [
    {
      title: "OCR Voucher Telegram Bot",
      image: ocrBot,
      desc: "Bot Telegram berbasis Python untuk membaca invoice dan voucher dari foto, lalu menyimpan hasilnya ke Excel otomatis.",
      tools: ["Python", "OCR", "Telegram Bot", "Excel"],
    },
    {
      title: "Selenium Web Automation",
      image: ocrBot,
      desc: "Automation untuk input data invoice ke website, memilih dropdown, submit form, dan skip error otomatis.",
      tools: ["Python", "Selenium", "Web Automation"],
    },
    {
      title: "AI Video Automation Pipeline",
      image: ocrBot,
      desc: "Workflow otomatis untuk membuat video AI dari gambar, prompt, download hasil, dan gabung video.",
      tools: ["Python", "AI Video", "Automation"],
    },
  ]

  return (
    <div className="page">
      <nav className="navbar">
        <div className="logo">RS</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-left">
          <p className="badge">AI AUTOMATION DEVELOPER</p>

          <h1>
            Halo, saya <br />
            <span className="gradient-text typing-text">
              Rizky Rahul Sidabutar
            </span>
          </h1>

          <p className="hero-desc">
            Saya belajar dan membangun automation menggunakan Python untuk
            membantu pekerjaan admin, OCR, input data website, Telegram bot,
            dan workflow konten AI.
          </p>

          <div className="hero-buttons">
            <a className="primary-btn" href="#projects">
              View Projects
            </a>
            <a className="secondary-btn" href="https://wa.me/628xxxxxxxxxx">
              Contact Me
            </a>
          </div>

          <div className="mini-skills">
            <span>⚡ Python</span>
            <span>🤖 Automation</span>
            <span>🎬 AI Content</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="photo-glow">
            <img src={rahulPhoto} alt="Rahul" />
          </div>
        </div>
      </section>

      <section id="about" className="section glass">
        <h2>About Me</h2>
        <p>
          Saya fokus membuat sistem sederhana yang bisa mempercepat pekerjaan
          manual. Project yang saya buat meliputi OCR invoice, Telegram bot,
          Selenium automation, Excel automation, PDF automation, dan pipeline
          konten AI.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="skills">
          {[
            "Python",
            "Selenium",
            "OCR",
            "Excel Automation",
            "Telegram Bot",
            "PDF Automation",
            "GitHub",
            "React Portfolio",
            "AI Video Workflow",
          ].map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />

              <div className="project-content">
                <p className="project-number">0{index + 1}</p>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <div className="tools">
                  {project.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact glass">
        <h2>Let’s Build Automation</h2>
        <p>
          Butuh automation untuk pekerjaan admin, invoice, Excel, website, atau
          workflow konten AI? Saya siap membantu membuat solusi sederhana dengan
          Python.
        </p>

        <a className="primary-btn" href="https://wa.me/628xxxxxxxxxx">
          Hubungi Saya
        </a>
      </section>
    </div>
  )
}

export default App