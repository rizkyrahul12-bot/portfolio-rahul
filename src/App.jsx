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
    desc: "Sistem Python untuk membaca invoice dan voucher dari foto, mengekstrak data penting, lalu menyimpan hasilnya ke Excel.",
    tech: ["Python", "Tesseract OCR", "Excel", "Regex"],
  },
  {
    title: "ERP Automation with Selenium",
    desc: "Otomasi input data ke sistem ERP menggunakan Selenium, termasuk handling tab, popup, error invoice, dan voucher tidak ditemukan.",
    tech: ["Python", "Selenium", "Firefox", "ERP"],
  },
  {
    title: "Telegram OCR Bot",
    desc: "Bot Telegram yang membantu proses input invoice dan voucher secara step-by-step dari foto langsung ke file Excel.",
    tech: ["Telegram Bot", "Python", "OCR", "Automation"],
  },
  {
    title: "AI Video Content Workflow",
    desc: "Workflow produksi video pendek menggunakan AI video generator, narasi, potongan scene, dan penggabungan klip otomatis.",
    tech: ["AI Video", "Python", "Content Workflow", "Automation"],
  },
  {
    title: "Expense Tracker Telegram Bot",
    desc: "Bot pencatat pengeluaran harian dengan sistem multi-user agar setiap pengguna memiliki laporan pengeluarannya sendiri.",
    tech: ["Telegram Bot", "CSV", "Python", "Data"],
  },
];

function App() {
  return (
    <main className="page">
      <nav className="navbar">
        <div className="logo">
          RAHUL<span>.</span>
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#workflow">Workflow</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="badge">Python Automation • OCR • AI Workflow</p>

          <h1>
            Hi, I'm <span>Rizky Rahul Sidabutar</span>
          </h1>

          <h2>I Build Automation Systems With Python & AI</h2>

          <p className="hero-text">
            Saya membangun sistem otomasi untuk mempercepat pekerjaan manual:
            mulai dari OCR invoice, Selenium ERP automation, Telegram bot,
            hingga workflow produksi konten AI.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View Projects
            </a>
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>

          <div className="mini-terminal">
            <div className="terminal-top">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>{`> python automation.py
[OK] OCR invoice detected
[OK] Voucher validated
[OK] Excel updated
[READY] System complete`}</pre>
          </div>
        </div>

        <div className="hero-card">
          <img src={foto} alt="Rahul" className="profile-image" />

          <div className="profile-badge">
            <strong>Automation Builder</strong>
            <small>Python • OCR • Selenium</small>
          </div>
        </div>
      </section>

      <section id="about" className="section about">
        <p className="section-label">About Me</p>
        <h2>From Operational Admin to Automation Builder</h2>
        <p>
          Saya bekerja di bidang administrasi operasional dan sering menghadapi
          pekerjaan manual yang berulang. Dari situ saya mulai belajar Python
          untuk membuat alat bantu sendiri: membaca data dari gambar, mengisi
          sistem ERP, membuat bot Telegram, dan membangun workflow kerja yang
          lebih cepat.
        </p>
      </section>

      <section id="skills" className="section">
        <p className="section-label">Skills</p>
        <h2>Tools & Technologies</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-label">Projects</p>
        <h2>Real Automation Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
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

      <section id="workflow" className="section workflow">
        <p className="section-label">Workflow</p>
        <h2>How I Solve Problems</h2>

        <div className="workflow-grid">
          <div>
            <strong>01</strong>
            <p>Identify repetitive manual work</p>
          </div>

          <div>
            <strong>02</strong>
            <p>Build Python automation script</p>
          </div>

          <div>
            <strong>03</strong>
            <p>Test with real work data</p>
          </div>

          <div>
            <strong>04</strong>
            <p>Improve speed, accuracy, and error handling</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="section-label">Contact</p>
        <h2>Let's Build Something Useful</h2>
        <p>
          Tertarik dengan automation, OCR, bot Telegram, atau workflow AI?
          Hubungi saya untuk diskusi project.
        </p>

        <a href="mailto:your-email@example.com" className="btn primary">
          Send Email
        </a>
      </section>
    </main>
  );
}

export default App;
