import "./App.css"
import rahulPhoto from "./assets/rahul.png"
import ocrBot from "./assets/projects/ocr-bot.png"

function App() {
  const projects = [
    {
      title: "OCR Voucher Telegram Bot",
      image: ocrBot,
      desc: "Bot Telegram berbasis Python yang membaca invoice dan voucher menggunakan OCR lalu otomatis menyimpan data ke Excel.",
      result: "Mempercepat pekerjaan admin dan mengurangi input manual.",
      tools: ["Python", "OCR", "Telegram Bot", "Excel"],
    },

    {
      title: "Web Automation Selenium",
      image: ocrBot,
      desc: "Automation input invoice ke website menggunakan Selenium.",
      result: "Menghemat waktu input data.",
      tools: ["Python", "Selenium", "Automation"],
    },

    {
      title: "PDF Auto Print System",
      image: ocrBot,
      desc: "Sistem otomatis mendeteksi PDF baru lalu langsung print ke printer default.",
      result: "Workflow print menjadi otomatis.",
      tools: ["Python", "PDF", "Printer"],
    },
  ]

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-text">
          <p className="badge">PYTHON AUTOMATION DEVELOPER</p>

          <h1 className="title">
            Rahul <span className="blue">Sidabutar</span>
          </h1>

          <p className="subtitle">
            Saya membuat automation sederhana untuk membantu pekerjaan admin
            menjadi lebih cepat, rapi, dan mengurangi input manual.
          </p>

          <div className="buttons">
            <a
              className="primary-btn"
              href="https://wa.me/628xxxxxxxxxx"
            >
              Hubungi Saya
            </a>

            <a className="secondary-btn" href="#projects">
              Lihat Project
            </a>
          </div>
        </div>

        <div className="profile-card">
          <img
            src={rahulPhoto}
            alt="Rahul"
            className="profile-photo"
          />

          <h3>Automation Portfolio</h3>

          <p className="profile-text">
            Python • OCR • Selenium • Excel
          </p>
        </div>
      </section>

      <section id="projects" className="section">
        <h2 className="section-title">Project Automation</h2>

        <div className="grid">
          {projects.map((project, index) => (
            <div className="card" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="number">
                0{index + 1}
              </div>

              <h3 className="card-title">
                {project.title}
              </h3>

              <p className="card-desc">
                {project.desc}
              </p>

              <p className="project-result">
                {project.result}
              </p>

              <div className="tool-wrap">
                {project.tools.map((tool) => (
                  <span className="tool" key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <h2 className="section-title">Kontak</h2>

        <p className="subtitle">
          Butuh automation untuk pekerjaan admin,
          invoice, Excel, atau website?
          Saya bisa bantu membuat workflow otomatis
          menggunakan Python.
        </p>
      </section>
    </div>
  )
}

export default App