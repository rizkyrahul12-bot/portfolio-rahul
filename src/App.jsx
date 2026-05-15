import rahulPhoto from "./assets/rahul.png"

function App() {
  const projects = [
    {
      title: "OCR Invoice & Voucher Automation",
      desc: "Sistem untuk membaca invoice dan voucher dari foto, lalu menyimpan hasilnya ke Excel secara otomatis.",
      tools: ["Python", "OCR", "Excel"],
    },
    {
      title: "Web Automation Selenium",
      desc: "Automation untuk input invoice ke website, memilih dropdown, submit form, dan skip error otomatis.",
      tools: ["Python", "Selenium", "Web Automation"],
    },
    {
      title: "Auto PDF Print System",
      desc: "Sistem yang mendeteksi PDF baru lalu mencetak otomatis ke printer default.",
      tools: ["Python", "PDF", "Printer"],
    },
  ]

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div>
          <p style={styles.badge}>PYTHON AUTOMATION DEVELOPER</p>

          <h1 style={styles.title}>
            Rahul <span style={styles.blue}>Sidabutar</span>
          </h1>

          <p style={styles.subtitle}>
            Saya membuat automation sederhana untuk membantu pekerjaan admin
            menjadi lebih cepat, rapi, dan mengurangi input manual.
          </p>

          <div style={styles.buttons}>
            <a style={styles.primaryBtn} href="https://wa.me/6281234567890">
              Hubungi Saya
            </a>

            <a style={styles.secondaryBtn} href="#projects">
              Lihat Project
            </a>
          </div>
        </div>

        <div style={styles.profileCard}>
          <img src={rahulPhoto} alt="Rahul Sidabutar" style={styles.photo} />
          <h3>Automation Portfolio</h3>
          <p style={styles.profileText}>Python • OCR • Selenium • Excel</p>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Skill Utama</h2>

        <div style={styles.skills}>
          {[
            "Python",
            "Selenium",
            "OCR",
            "Excel Automation",
            "Telegram Bot",
            "PDF Automation",
            "Web Automation",
            "Data Processing",
          ].map((skill) => (
            <span style={styles.skill} key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>Project Automation</h2>

        <div style={styles.grid}>
          {projects.map((project, index) => (
            <div style={styles.card} key={index}>
              <div style={styles.number}>0{index + 1}</div>

              <h3 style={styles.cardTitle}>{project.title}</h3>

              <p style={styles.cardDesc}>{project.desc}</p>

              <div style={styles.toolWrap}>
                {project.tools.map((tool) => (
                  <span style={styles.tool} key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.contact}>
        <h2 style={styles.sectionTitle}>Kontak</h2>
        <p style={styles.subtitle}>
          Butuh automation untuk pekerjaan admin, invoice, Excel, atau website?
          Saya bisa bantu membuat workflow otomatis menggunakan Python.
        </p>
      </section>
    </div>
  )
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top left, #1e3a8a, transparent 30%), linear-gradient(135deg, #020617, #0f172a)",
    color: "white",
    padding: "40px",
  },

  hero: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "90px 0",
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "40px",
    alignItems: "center",
  },

  badge: {
    display: "inline-block",
    color: "#38bdf8",
    background: "rgba(56, 189, 248, 0.12)",
    border: "1px solid rgba(56, 189, 248, 0.3)",
    padding: "10px 14px",
    borderRadius: "999px",
    fontWeight: "bold",
    fontSize: "13px",
    letterSpacing: "1px",
  },

  title: {
    fontSize: "68px",
    lineHeight: "1.05",
    margin: "24px 0 20px",
    color: "#ffffff",
  },

  blue: {
    color: "#38bdf8",
  },

  subtitle: {
    color: "#cbd5e1",
    fontSize: "20px",
    lineHeight: "1.7",
    maxWidth: "720px",
  },

  buttons: {
    display: "flex",
    gap: "15px",
    marginTop: "34px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "#38bdf8",
    color: "#020617",
    padding: "15px 24px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "bold",
  },

  secondaryBtn: {
    background: "rgba(255,255,255,0.08)",
    color: "white",
    padding: "15px 24px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "bold",
    border: "1px solid rgba(255,255,255,0.15)",
  },

  profileCard: {
    background: "rgba(15, 23, 42, 0.85)",
    border: "1px solid rgba(148, 163, 184, 0.25)",
    borderRadius: "30px",
    padding: "35px",
    textAlign: "center",
    boxShadow: "0 30px 80px rgba(0,0,0,0.45)",
  },

  photo: {
    width: "190px",
    height: "190px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #38bdf8",
    boxShadow: "0 0 45px rgba(56,189,248,0.55)",
    margin: "0 auto 22px",
    display: "block",
  },

  profileText: {
    color: "#94a3b8",
  },

  section: {
    maxWidth: "1100px",
    margin: "0 auto 80px",
  },

  sectionTitle: {
    fontSize: "34px",
    marginBottom: "28px",
  },

  skills: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },

  skill: {
    background: "rgba(30, 41, 59, 0.85)",
    border: "1px solid #334155",
    padding: "13px 17px",
    borderRadius: "999px",
    color: "#e2e8f0",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "22px",
  },

  card: {
    background: "rgba(15, 23, 42, 0.9)",
    border: "1px solid rgba(148, 163, 184, 0.22)",
    borderRadius: "26px",
    padding: "28px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
  },

  number: {
    color: "#38bdf8",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "16px",
  },

  cardTitle: {
    fontSize: "24px",
    marginBottom: "14px",
  },

  cardDesc: {
    color: "#cbd5e1",
    lineHeight: "1.7",
  },

  toolWrap: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    marginTop: "22px",
  },

  tool: {
    background: "#020617",
    color: "#38bdf8",
    padding: "8px 11px",
    borderRadius: "10px",
    fontSize: "13px",
    border: "1px solid rgba(56, 189, 248, 0.25)",
  },

  contact: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "55px 0",
    borderTop: "1px solid #334155",
  },
}

export default App