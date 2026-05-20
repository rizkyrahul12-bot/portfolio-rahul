import { useEffect, useRef, useState } from "react";
import "./App.css";
import foto from "./assets/fotoku.png";

const whatsappLink = "https://wa.me/6282170252082";

const tools = [
  { name: "Python", short: "Py" },
  { name: "Selenium", short: "Se" },
  { name: "OCR", short: "OCR" },
  { name: "Pandas", short: "Pd" },
  { name: "Telegram", short: "Tg" },
  { name: "Excel", short: "Xl" },
  { name: "GitHub", short: "Git" },
  { name: "Docker", short: "Dc" },
];

const problems = [
  ["Input data manual memakan waktu berjam-jam", "Otomatis input data dari berbagai sumber ke sistem Anda"],
  ["Sering terjadi salah ketik dan data tidak valid", "Validasi otomatis untuk mengurangi kesalahan"],
  ["Copy-paste berulang yang membosankan", "Bot otomatis untuk tugas berulang"],
  ["Rekap laporan dari banyak file & sumber", "Gabungkan dan olah data otomatis"],
  ["Deadline mepet karena pekerjaan menumpuk", "Proses lebih cepat, Anda bisa fokus ke pekerjaan penting"],
];

function ElasticNameTag() {
  const tagRef = useRef(null);
  const leftRubberRef = useRef(null);
  const rightRubberRef = useRef(null);
  const draggingRef = useRef(false);
  const posRef = useRef({ x: 0, y: 0 });
  const velRef = useRef({ x: 0, y: 0 });
  const pointerRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const animate = () => {
      const pos = posRef.current;
      const vel = velRef.current;

      if (draggingRef.current) {
        vel.x += (pointerRef.current.x - pos.x) * 0.22;
        vel.y += (pointerRef.current.y - pos.y) * 0.22;
      } else {
        vel.x += (0 - pos.x) * 0.075;
        vel.y += (0 - pos.y) * 0.075;
      }

      vel.x *= 0.7;
      vel.y *= 0.7;
      pos.x += vel.x;
      pos.y += vel.y;

      const distance = Math.min(1, Math.hypot(pos.x, pos.y) / 260);
      const rotate = pos.x * 0.038 + 4;
      const scaleY = 1 + distance * 0.035;
      const scaleX = 1 - distance * 0.012;

      if (tagRef.current) {
        tagRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) rotate(${rotate}deg) scale(${scaleX}, ${scaleY})`;
      }

      const ropeHeight = 190 + Math.max(0, pos.y) * 0.62 + Math.abs(pos.x) * 0.12;
      const ropeTilt = Math.max(-22, Math.min(22, pos.x * 0.07));

      if (leftRubberRef.current) {
        leftRubberRef.current.style.height = `${ropeHeight}px`;
        leftRubberRef.current.style.transform = `rotate(${-12 + ropeTilt * 0.35}deg)`;
      }
      if (rightRubberRef.current) {
        rightRubberRef.current.style.height = `${ropeHeight}px`;
        rightRubberRef.current.style.transform = `rotate(${12 + ropeTilt * 0.35}deg)`;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const getPoint = (e) => (e.touches ? e.touches[0] : e);

  const startDrag = (e) => {
    const point = getPoint(e);
    draggingRef.current = true;
    setDragging(true);
    pointerRef.current = {
      x: point.clientX - window.innerWidth / 2,
      y: point.clientY - window.innerHeight / 2,
    };
  };

  const moveDrag = (e) => {
    if (!draggingRef.current) return;
    const point = getPoint(e);
    pointerRef.current = {
      x: point.clientX - window.innerWidth / 2,
      y: point.clientY - window.innerHeight / 2,
    };
  };

  const endDrag = () => {
    draggingRef.current = false;
    setDragging(false);
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveDrag);
    window.addEventListener("mouseup", endDrag);
    window.addEventListener("touchmove", moveDrag, { passive: true });
    window.addEventListener("touchend", endDrag);
    return () => {
      window.removeEventListener("mousemove", moveDrag);
      window.removeEventListener("mouseup", endDrag);
      window.removeEventListener("touchmove", moveDrag);
      window.removeEventListener("touchend", endDrag);
    };
  }, []);

  return (
    <div className="elastic-stage">
      <div ref={leftRubberRef} className="rubber rubber-left"></div>
      <div ref={rightRubberRef} className="rubber rubber-right"></div>

      <div
        ref={tagRef}
        className={`badge-wrap ${dragging ? "is-dragging" : ""}`}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        <div className="metal-ring"></div>
        <div className="id-card">
          <div className="id-hole"></div>
          <div className="id-shine"></div>
          <div className="photo-frame">
            <img src={foto} alt="Rizky Rahul Sidabutar" draggable="false" />
          </div>
          <div className="id-info">
            <h3>RAHUL</h3>
            <p>Automation Builder</p>
            <small>Python • OCR • Selenium • AI</small>
            <div className="barcode"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="page">
      <div className="grid-bg"></div>
      <div className="orb orb-a"></div>
      <div className="orb orb-b"></div>

      <nav className="navbar">
        <div className="brand">
          <span className="code-icon">&lt;/&gt;</span>
          RAHUL
        </div>

        <div className="nav-links">
          <a className="active" href="#home">Home</a>
          <a href="#about">Tentang</a>
          <a href="#projects">Proyek</a>
          <a href="#skills">Keahlian</a>
          <a href="#contact">Kontak</a>
        </div>

        <a href={whatsappLink} target="_blank" rel="noreferrer" className="wa-top">
          Hubungi Saya
        </a>
      </nav>

      <section id="home" className="hero">
        <div className="hero-left">
          <h1 className="reveal-title">
            Saya Membangun Sistem Otomatisasi dengan <b>Python & AI</b>
          </h1>

          <p className="hero-text">
            Saya membantu pekerjaan manual menjadi lebih cepat dengan Python,
            OCR, Selenium, Telegram Bot, Excel Automation, dan workflow AI.
          </p>

          <div className="hero-actions">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn wa-btn">
              Hubungi Saya <span>→</span>
            </a>
            <a href="#projects" className="btn outline-btn">
              Lihat Proyek Saya <span>→</span>
            </a>
          </div>

          <div className="terminal">
            <div className="terminal-head">
              <span className="lamp red"></span>
              <span className="lamp yellow"></span>
              <span className="lamp green"></span>
              <p>terminal@rahul:~</p>
            </div>
            <div className="terminal-body">
              <p><span>&gt;</span> memindai dokumen... <b>100%</b></p>
              <p><span>&gt;</span> mengekstrak data... <b>100%</b></p>
              <p><span>&gt;</span> memproses data... <b>100%</b></p>
              <p><span>&gt;</span> menyimpan hasil... <b>100%</b></p>
              <p><span>&gt;</span> otomatisasi selesai <strong>berhasil ●</strong></p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="lanyard lanyard-left"><span>AUTOMATION BUILDER</span></div>
          <div className="lanyard lanyard-right"><span>PYTHON • OCR • AI</span></div>
          <ElasticNameTag />
        </div>
      </section>

      <section id="skills" className="panel-section tools-section">
        <div className="section-title">
          <span></span>
          <h2>Tools & Teknologi</h2>
        </div>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div className="tool-card" style={{ "--i": index }} key={tool.name}>
              <div className="tool-icon">{tool.short}</div>
              <p>{tool.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="admin-solution">
        <div className="admin-left">
          <small>UNTUK PARA ADMIN</small>
          <h2>Masih input data manual setiap hari?</h2>
          <h3>Saatnya kerja lebih mudah & efisien.</h3>
          <p>
            Pekerjaan repetitif seperti input data, copy-paste, validasi file,
            dan rekap laporan bisa diotomatisasi. Saya bantu Anda menghemat
            waktu, mengurangi kesalahan, dan fokus pada hal yang lebih penting.
          </p>

          <a href={whatsappLink} target="_blank" rel="noreferrer" className="btn wa-btn">
            Hubungi Saya <span>→</span>
          </a>

          <div className="trust-list">
            <span>Aman</span>
            <span>Cepat</span>
            <span>Terpercaya</span>
          </div>
        </div>

        <div className="admin-right">
          <div className="solution-head">
            <h3>Masalah yang Sering Dihadapi</h3>
            <h3>Solusi Otomatisasi</h3>
          </div>

          {problems.map(([problem, solution], index) => (
            <div className="solution-row" key={problem}>
              <div className="problem-icon">{index + 1}</div>
              <p>{problem}</p>
              <span>→</span>
              <p>{solution}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="panel-section projects">
        <div className="section-title row">
          <div>
            <span></span>
            <h2>Proyek Unggulan</h2>
          </div>
          <a href="#contact">Lihat Semua Proyek →</a>
        </div>

        <div className="project-grid">
          <article className="project-card">
            <div className="project-preview">OCR</div>
            <div>
              <small className="done">Selesai</small>
              <h3>Sistem Otomatisasi Invoice</h3>
              <p>OCR invoice, validasi data, export Excel, dan proses siap untuk workflow ERP.</p>
              <div className="tech-list"><span>Python</span><span>OCR</span><span>Excel</span></div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-preview">BOT</div>
            <div>
              <small className="done">Selesai</small>
              <h3>Bot Telegram OCR</h3>
              <p>Bot untuk membaca invoice/voucher dari foto dan menyimpan hasil ke Excel.</p>
              <div className="tech-list"><span>Python</span><span>Telegram</span><span>OCR</span></div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-preview">AI</div>
            <div>
              <small className="progress">Dalam Proses</small>
              <h3>AI Video Workflow</h3>
              <p>Workflow video AI dari prompt, scene, narasi, hingga penggabungan klip.</p>
              <div className="tech-list"><span>AI</span><span>Python</span><span>Video</span></div>
            </div>
          </article>
        </div>
      </section>

      <section id="about" className="panel-section about">
        <div className="section-title">
          <span></span>
          <h2>Tentang Saya</h2>
        </div>
        <p>
          Saya memulai dari pekerjaan administrasi operasional yang penuh tugas
          manual dan berulang. Dari masalah nyata itu saya belajar Python untuk
          membangun alat bantu: OCR invoice, Excel automation, ERP automation,
          Telegram bot, dan workflow konten berbasis AI.
        </p>
      </section>

      <section id="contact" className="contact-panel">
        <div className="rocket">↗</div>
        <div>
          <h2>Ubah pekerjaan manual menjadi otomatis.</h2>
          <p>Lebih cepat, lebih akurat, lebih efisien.</p>
        </div>
        <a href={whatsappLink} target="_blank" rel="noreferrer" className="wa-contact">
          Hubungi Saya
        </a>
      </section>

      <footer>© 2025 Rahul. All rights reserved.</footer>
    </main>
  );
}

export default App;
