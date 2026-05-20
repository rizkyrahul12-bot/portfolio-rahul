import "./App.css";
import foto from "./assets/fotoku.png";

const skills = [
  "Python",
  "Selenium",
  "OCR",
  "Telegram Bot",
  "Excel Automation",
  "AI Workflow",
  "React",
  "Vite",
];

const projects = [
  {
    title: "OCR Invoice & Voucher Automation",
    desc: "Membaca invoice dan voucher dari foto, memvalidasi pola data, lalu menyimpan hasilnya ke Excel.",
    tech: ["Python", "Tesseract OCR", "Excel", "Regex"],
  },
  {
    title: "ERP Automation with Selenium",
    desc: "Otomasi proses input ke ERP, handling popup, multi-tab workflow, dan error recovery.",
    tech: ["Python", "Selenium", "Firefox", "ERP"],
  },
  {
    title: "Telegram OCR Bot",
    desc: "Bot Telegram step-by-step untuk membantu input invoice dan voucher langsung dari foto.",
    tech: ["Telegram Bot", "Python", "OCR"],
  },
  {
    title: "AI Video Content Workflow",
    desc: "Workflow produksi video pendek AI, mulai dari prompt, scene, narasi, sampai penggabungan klip.",
    tech: ["AI Video", "Python", "Content Workflow"],
  },
];

function App() {
  return (
    <main className="page">
      <div className="noise"></div>
      <div className="orb orb-one"></div>
      <div className="orb orb-two"></div>

      <nav className="navbar">
        <div className="brand">
          <span className="brand-icon">&lt;/&gt;</span>
          RAHUL<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="talk-btn" href="#contact">Let's Talk</a>
      </nav>

      <section id="home" className="hero">
        <div className="hero-left">
          <div className="available">
            <span></span>
            Available for Freelance & Opportunities
          </div>

          <h1>
            I Build Automation Systems With <b>Python & AI</b>
          </h1>

          <p className="hero-subtitle">
            Saya membantu pekerjaan manual menjadi lebih cepat dengan Python,
            OCR, Selenium, Telegram Bot, Excel Automation, dan AI workflow.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn primary">View My Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>

          <div className="cyber-terminal">
            <div className="terminal-head">
              <div>
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <p>automation@rahul:~</p>
            </div>

            <div className="terminal-body">
              <p><span>&gt;</span> scanning invoice... <b>[██████████] 100%</b></p>
              <p><span>&gt;</span> extracting data... <b>[██████████] 100%</b></p>
              <p><span>&gt;</span> exporting to excel... <b>[██████████] 100%</b></p>
              <p><span>&gt;</span> selenium submit... <strong>success ✅</strong></p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="lanyard lanyard-left">
            <span>AUTOMATION BUILDER</span>
          </div>
          <div className="lanyard lanyard-right">
            <span>PYTHON • OCR • AI</span>
          </div>

          <div className="badge-wrap">
            <div className="hook"></div>
            <div className="id-card">
              <div className="id-inner">
                <img src={foto} alt="Rizky Rahul Sidabutar" />
                <h3>RAHUL</h3>
                <p>Automation Builder</p>
                <small>Python • OCR • Selenium • AI</small>
                <div className="barcode"></div>
              </div>
            </div>
          </div>

          <p className="swing-label">goyang~</p>
        </div>
      </section>

      <section id="about" className="section about">
        <p className="section-label">About Me</p>
        <h2>Operational Admin Who Builds Automation Tools</h2>
        <p>
          Saya memulai dari pekerjaan administrasi operasional yang penuh tugas
          manual dan berulang. Dari masalah nyata itu saya belajar Python untuk
          membangun alat bantu: OCR invoice, Excel automation, ERP automation,
          Telegram bot, dan workflow konten berbasis AI.
        </p>
      </section>

      <section id="skills" className="section">
        <p className="section-label">Tech Stack</p>
        <h2>Tools I Use</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>{skill}</div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-label">Projects</p>
        <h2>Real Automation Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">0{index + 1}</div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="tech-list">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="section-label">Contact</p>
        <h2>Let's Build Something Useful</h2>
        <p>
          Tertarik dengan automation, OCR, bot Telegram, atau workflow AI?
          Hubungi saya untuk diskusi project.
        </p>
        <a href="mailto:your-email@example.com" className="btn primary">Send Email</a>
      </section>
    </main>
  );
}

export default App;
