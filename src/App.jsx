import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import ProjectDetail from './ProjectDetail';

const projectsData = {
  kolaborun: {
    title: 'Kolaborun 2026',
    role: 'Project Manager',
    summary: 'Manage large-scale running collaborative events to raise awareness of the community\'s mental and physical health.',
    heroImg: '/assets/KOLOBORUN 26.jpeg',
    overview: 'Acara ini melibatkan ratusan peserta dengan visi untuk menghubungkan masyarakat dan mempromosikan gaya hidup sehat. Proyek ini bertujuan untuk menciptakan ruang aman bagi diskusi kesehatan.',
    contribution: 'Memimpin koordinasi dengan berbagai komunitas dan sponsor, serta merencanakan rute lari dan logistik acara dari awal hingga akhir.',
    impact: 'Meningkatkan kesadaran masyarakat sekitar 30% dan berhasil mengumpulkan dana substansial untuk kampanye kesehatan mental lokal.',
    gallery: ['/assets/Klbrn 1.jpeg', '/assets/Klbrn 2.jpeg', '/assets/Klbrn 4.jpeg', '/assets/Klbrn 5.jpeg']
  },
  soulinked: {
    title: 'Soulinked',
    role: 'Communication Strategist',
    summary: 'Build brand identity and digital campaign strategies for community-based mental health initiatives.',
    heroImg: '/assets/Soulinked.jpeg',
    overview: 'Kampanye digital komprehensif untuk memfasilitasi dialog seputar kesehatan mental di kalangan pemuda melalui platform interaktif.',
    contribution: 'Merancang visual merek, mengelola strategi penyebaran pesan di media sosial, dan merangkul influencer lokal untuk amplifikasi pesan.',
    impact: 'Menjangkau lebih dari 10.000 pemuda dengan interaksi positif, menghasilkan ratusan diskusi yang bermakna dalam forum daring.',
    gallery: []
  },
  mku: {
    title: 'MKU Bureau Internship',
    role: 'Content Designer & Event Planning',
    summary: 'Develop digital content and academic communication strategies to support campus activities interactively.',
    heroImg: '/assets/Intern MKU.jpg',
    overview: 'Proyek magang ini berfokus pada pembuatan konten visual dan pengelolaan acara untuk biro komunikasi kampus secara profesional.',
    contribution: 'Merancang grafis promosi, mengelola konten media sosial (Instagram, TikTok), dan membantu eksekusi operasional acara seminar kampus.',
    impact: 'Meningkatkan engagement di media sosial kampus hingga 45% dan memperluas partisipasi mahasiswa secara signifikan dalam acara edukatif.',
    gallery: ['/assets/Intern 1.png', '/assets/Intern 2.jpeg', '/assets/Intern 3.jpg', '/assets/Intern 4.jpg']
  },
  aiesec: {
    title: 'AIESEC Impact',
    role: 'Global Volunteer',
    summary: 'Participate in cross-border social projects to promote global education and cultural exchange.',
    heroImg: '/assets/IMPACTED.jpg',
    overview: 'Program sukarelawan internasional yang mengutamakan pertukaran budaya dan peningkatan kapasitas pendidikan di negara berkembang.',
    contribution: 'Mengajar kelas budaya dan komunikasi dasar, serta mengatur loka karya kreativitas dan kepemimpinan untuk anak-anak lokal.',
    impact: 'Meningkatkan antusiasme belajar pada anak-anak yang berpartisipasi dan memperkuat ikatan toleransi dan budaya antar-relawan dari 10+ negara.',
    gallery: ['/assets/Exhibition.jpg']
  }
};

function App() {
  const [view, setView] = useState('home');
  const [activeProject, setActiveProject] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view, activeProject]);

  if (view === 'detail' && activeProject && projectsData[activeProject]) {
    return (
      <>
        <ProjectDetail project={projectsData[activeProject]} onBack={(targetId) => {
          setView('home');
          if (targetId && typeof targetId === 'string') {
            setTimeout(() => {
              const el = document.getElementById(targetId);
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }
        }} />
        <footer className="footer">
          <p>© 2026 DEVAL KERENHAK — INTERNATIONAL RELATIONS & DIGITAL COMMUNICATION</p>
        </footer>
      </>
    );
  }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo">DEVAL Kerenhak <span>S. Kati</span></a>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#contact" className="btn btn-nav" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
          
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-container">
          
          {/* Layout Editorial 3 Kolom */}
          <div className="hero-columns">
            
            {/* Kiri: Headline rata kanan */}
            <div className="hero-left">
              <h1>
                Elevating <br />
                <span className="highlight">Global Impact</span> <br />
                Through Digital <br /> Communication
              </h1>
            </div>

            {/* Tengah: Foto Profil dengan Ornamen (Teal ke Pink Gradient) */}
            <div className="hero-center">
              <div className="hero-ornament circle-glow"></div>
              <div className="hero-ornament abstract-shape"></div>
              <div className="hero-ornament fine-lines"></div>
              
              {/* Ganti src dengan lokasi foto profil asli Anda jika sudah ada */}
              <img src="/assets/foto.png" alt="Deval Profile" className="hero-image" />
            </div>

            {/* Kanan: Teks penjelasan rata kiri */}
            <div className="hero-right">
              <p className="tagline" style={{ color: '#475569' }}>
                I am an International Relations student who is passionate about combining strategic analysis with engaging visual storytelling. I am dedicated to helping various initiatives tell their stories and build connections around the world.
              </p>
            </div>
            
          </div>

          {/* CTA Button di bawah susunan 3 kolom, tepat di tengah-tengah */}
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Let's Collaborate</a>
          </div>
          
        </div>
      </section>

      {/* 2. SECTION ABOUT ME */}
      <section id="about" className="section bg-light">
        <div className="container">
          
          <div className="section-header">
            <h2>About Me</h2>
            <div className="line"></div>
          </div>

          <div className="about-content-wrapper">
            <div className="about-centered">
              <p>
                Hello! I am an International Relations student with a deep interest in <strong>Digital Communication</strong> and <strong>Social Impact</strong>. I believe that every campaign and initiative has a unique story capable of inspiring positive change on a global scale.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SECTION EXPERIENCE & PROJECTS */}
      <section id="projects" className="section">
        <div className="container">
          
          <div className="section-header">
            <h2>Experience & Projects</h2>
            <div className="line"></div>
          </div>

          <div className="cards-grid">
            
            {/* Project 1: Kolaborun 2026 */}
            <div className="card">
              <div className="card-img-wrapper">
                <img src="/assets/KOLOBORUN 26.jpeg" alt="Kolaborun 2026" className="card-img" />
              </div>
              <div className="card-body">
                <h3>Kolaborun 2026</h3>
                <p className="card-role">Project Manager</p>
                <p>Manage large-scale running collaborative events to raise awareness of the community's mental and physical health.</p>
                <button 
                  className="btn btn-sm btn-outline" 
                  onClick={() => { setView('detail'); setActiveProject('kolaborun'); }}
                >
                  View Project
                </button>
              </div>
            </div>

            {/* Project 2: Soulinked */}
            <div className="card">
              <div className="card-img-wrapper">
                <img src="/assets/Soulinked.jpeg" alt="Soulinked" className="card-img" />
              </div>
              <div className="card-body">
                <h3>Soulinked</h3>
                <p className="card-role">Communication Strategist</p>
                <p>Build brand identity and digital campaign strategies for community-based mental health initiatives.</p>
                <button 
                  className="btn btn-sm btn-outline" 
                  onClick={() => { setView('detail'); setActiveProject('soulinked'); }}
                >
                  View Project
                </button>
              </div>
            </div>

            {/* Project 3: MKU Bureau */}
            <div className="card">
              <div className="card-img-wrapper">
                <img src="/assets/Intern MKU.jpg" alt="MKU Bureau" className="card-img" />
              </div>
              <div className="card-body">
                <h3>MKU Bureau</h3>
                <p className="card-role">Content Designer & Event Planning</p>
                <p>Develop digital content and academic communication strategies to support campus activities interactively.</p>
                <button 
                  className="btn btn-sm btn-outline" 
                  onClick={() => { setView('detail'); setActiveProject('mku'); }}
                >
                  View Project
                </button>
              </div>
            </div>

            {/* Project 4: AIESEC */}
            <div className="card">
              <div className="card-img-wrapper">
                <img src="/assets/IMPACTED.jpg" alt="AIESEC" className="card-img" />
              </div>
              <div className="card-body">
                <h3>AIESEC Impact</h3>
                <p className="card-role">Global Volunteer</p>
                <p>Participate in cross-border social projects to promote global education and cultural exchange.</p>
                <button 
                  className="btn btn-sm btn-outline" 
                  onClick={() => { setView('detail'); setActiveProject('aiesec'); }}
                >
                  View Project
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. WHAT I DO BEST */}
      <section id="skills" className="what-i-do-best-section">
          <h2 className="section-title-center underline-teal">What I Do Best</h2>
          <p className="section-subtitle">Applied across events, campaigns, and communication-driven projects.</p>
          
          <div className="skills-triple-grid">
              {/* Kolom 1 */}
              <div className="skill-status-card">
                  <div className="skill-card-icon"><i className="fas fa-bullhorn"></i></div>
                  <h3>Communication & Content</h3>
                  <ul>
                      <li><i className="fas fa-check check-teal"></i> Content Writing & Copywriting</li>
                      <li><i className="fas fa-check check-teal"></i> Digital Communication</li>
                      <li><i className="fas fa-check check-teal"></i> Social Media Strategy</li>
                      <li><i className="fas fa-check check-teal"></i> Visual Content Creation</li>
                  </ul>
              </div>

              {/* Kolom 2 */}
              <div className="skill-status-card">
                  <div className="skill-card-icon"><i className="fas fa-calendar-check"></i></div>
                  <h3>Event & Project Execution</h3>
                  <ul>
                      <li><i className="fas fa-check check-teal"></i> Event Planning & Coordination</li>
                      <li><i className="fas fa-check check-teal"></i> Project Execution</li>
                      <li><i className="fas fa-check check-teal"></i> Public Speaking & Facilitation</li>
                  </ul>
              </div>

              {/* Kolom 3 */}
              <div className="skill-status-card">
                  <div className="skill-card-icon"><i className="fas fa-handshake"></i></div>
                  <h3>Collaboration & Leadership</h3>
                  <ul>
                      <li><i className="fas fa-check check-teal"></i> Cross-cultural Communication</li>
                      <li><i className="fas fa-check check-teal"></i> Team Collaboration</li>
                      <li><i className="fas fa-check check-teal"></i> Adaptability</li>
                      <li><i className="fas fa-check check-teal"></i> Creative Problem Solving</li>
                  </ul>
              </div>
          </div>
      </section>

      {/* 5. SECTION LANGUAGES */}
      <section className="languages-section">
          <h2 className="section-title-center">Languages</h2>
          <p className="languages-list">Indonesian (Native) • English (Fluent) • Mandarin (Intermediate)</p>
      </section>

      {/* 6. SECTION HOW I WORK */}
      <section className="how-i-work-section">
          <h2 className="section-title-center underline-teal">How I Work</h2>
          <div className="how-i-work-grid">
              
              {/* Card 01 */}
              <div className="work-card">
                  <div className="card-header">
                      <i className="fas fa-search icon-teal"></i>
                      <span className="card-number">01</span>
                  </div>
                  <h3>Understand the Context</h3>
                  <p className="card-description">I start by understanding the audience, goals, and the broader context behind each project.</p>
              </div>
              
              {/* Card 02 */}
              <div className="work-card">
                  <div className="card-header">
                      <i className="fas fa-pen-nib icon-teal"></i>
                      <span className="card-number">02</span>
                  </div>
                  <h3>Shape the Narrative</h3>
                  <p className="card-description">I translate ideas into clear and engaging messages that are relevant and easy to connect with.</p>
              </div>
              
              {/* Card 03 */}
              <div className="work-card">
                  <div className="card-header">
                      <i className="fas fa-users-cog icon-teal"></i>
                      <span className="card-number">03</span>
                  </div>
                  <h3>Execute & Collaborate</h3>
                  <p className="card-description">I work closely with teams to bring ideas into action through events, content, and coordinated efforts.</p>
              </div>
              
              {/* Card 04 */}
              <div className="work-card">
                  <div className="card-header">
                      <i className="fas fa-rocket icon-teal"></i>
                      <span className="card-number">04</span>
                  </div>
                  <h3>Engage & Deliver Impact</h3>
                  <p className="card-description">I focus on creating meaningful experiences that are not only delivered well, but also resonate with the audience.</p>
              </div>

          </div>
      </section>
      {/* SECTION CONTACT - FULL DARK NAVY CENTERED */}
      <section id="contact" className="contact-dark-section">
          <div className="contact-dark-container">
              
              {/* Teks Konten Rata Tengah */}
              <h2 className="contact-dark-title">Let’s Build Something Meaningful</h2>
              <p className="contact-dark-text">
                  I’m interested in working on projects that combine communication, creativity, and real-world impact. 
                  I’m open to opportunities, collaborations, and experiences that allow me to grow and contribute meaningfully. 
                  If you’re building something impactful, I’d love to connect.
              </p>
              
              {/* 3 Tombol Icon Bulat Sejajar di Tengah */}
              <div className="contact-dark-icons-row">
                  
                  {/* 1. Tombol Email (Langsung Mailto) */}
                  <a href="mailto:devlkati7@gmail.com" className="social-white-circle" title="Email Me">
                      <FaEnvelope />
                  </a>
                  
                  {/* 2. Tombol Instagram */}
                  <a href="https://instagram.com/devalk._" target="_blank" rel="noopener noreferrer" className="social-white-circle" title="Instagram Profile">
                      <FaInstagram />
                  </a>
                  
                  {/* 3. Tombol LinkedIn */}
                  <a href="https://linkedin.com/in/deval-kerenhak-syenazar-kati" target="_blank" rel="noopener noreferrer" className="social-white-circle" title="LinkedIn Profile">
                      <FaLinkedinIn />
                  </a>
                  
              </div>

          </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 DEVAL KERENHAK — INTERNATIONAL RELATIONS & DIGITAL COMMUNICATION</p>
      </footer>
    </>
  );
}

export default App;
