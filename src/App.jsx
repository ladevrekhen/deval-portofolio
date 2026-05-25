import React, { useState, useEffect, useLayoutEffect } from 'react';
import { FaEnvelope, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const allExperiencesData = [
  // ===== WORK & ORGANIZATIONAL EXPERIENCE =====
  {
    id: 1,
    title: 'MKU Bureau – President University',
    category: 'work',
    role: 'Internship as Content Designer & Event Planning',
    year: '2024 - 2025',
    achievements: [
      'Developed digital content and visual materials for academic programs and university activities.',
      'Assisted in coordinating academic events, guest lectures, and student engagement initiatives.',
      'Collaborated with teams to support communication strategies and smooth event execution.'
    ],
    photos: ['/assets/Intern 1.png', '/assets/Intern 2.jpeg', '/assets/Intern 3.jpg', '/assets/Intern 4.jpg']
  },
  {
    id: 2,
    title: 'FPCI Chapter President University',
    category: 'work',
    role: 'Treasurer',
    year: '2024 - 2025',
    achievements: [
      'Assisted in budgeting, expense monitoring, and financial documentation for organizational programs.',
      'Supported financial planning to ensure effective allocation of organizational resources.',
      'Collaborated with internal divisions to maintain transparent and organized financial management.'
    ],
    photos: []
  },
  {
    id: 3,
    title: 'KOLABORAKSI',
    category: 'work',
    role: 'Public Relations Team',
    year: '2025 - Present',
    achievements: [
      'Supported organizational communication and promotional activities for various programs.',
      'Assisted in maintaining audience engagement through media outreach and public relations strategies.',
      'Collaborated with team members to strengthen organizational branding and partnerships.'
    ],
    photos: []
  },
  {
    id: 4,
    title: 'Yayasan Gema Simpul Berdaya',
    category: 'work',
    role: 'LinkedIn Coordinator (Core Team)',
    year: '2025 - Present',
    achievements: [
      'Managed LinkedIn communication and strengthened the foundation\'s professional digital branding.',
      'Developed engaging content strategies to increase organizational visibility and audience reach.',
      'Coordinated publication planning and supported external networking through digital platforms.'
    ],
    photos: []
  },
  {
    id: 5,
    title: 'Jaber Zilenial Kab. Bekasi',
    category: 'work',
    role: 'Head of Entrepreneurship Division',
    year: '2025 - Present',
    achievements: [
      'Led entrepreneurship programs focused on youth creativity, innovation, and community empowerment.',
      'Coordinated division activities, project planning, and collaboration among members.',
      'Encouraged the development of entrepreneurial initiatives and partnership opportunities.'
    ],
    photos: []
  },
  {
    id: 6,
    title: 'ADIWIYATA SMANTI – SMAN 3 Sorong',
    category: 'work',
    role: 'Chairperson',
    year: '2022 - 2023',
    achievements: [
      'Led environmental awareness programs and sustainability campaigns within the school community.',
      'Coordinated members in organizing environmental and social responsibility initiatives.',
      'Encouraged active student participation in building an environmentally conscious school culture.'
    ],
    photos: []
  },
  {
    id: 7,
    title: 'Cinema SMANTI – SMAN 3 Sorong',
    category: 'work',
    role: 'Creative Team',
    year: '2022 - 2023',
    achievements: [
      'Contributed to creative concepts and visual preparations for school performances and productions.',
      'Assisted in organizing artistic and cinematography-related activities within the organization.',
      'Collaborated with team members to create engaging and audience-focused creative content.'
    ],
    photos: []
  },
  {
    id: 8,
    title: 'PMR – SMAN 3 Sorong',
    category: 'work',
    role: 'Member',
    year: '2022 - 2023',
    achievements: [
      'Participated in health, humanitarian, and student service activities organized by the school.',
      'Assisted in teamwork-based programs focused on social care and community support.',
      'Contributed to activities promoting responsibility, discipline, and collaboration.'
    ],
    photos: []
  },

  // ===== PROJECT & EVENT EXPERIENCE =====
  {
    id: 9,
    title: 'INNOVERSE',
    category: 'projects',
    role: 'Internal Public Relations Team',
    year: '2026',
    achievements: [
      'Supported internal communication and coordination among event committees.',
      'Assisted in maintaining information flow and committee engagement during preparations.',
      'Contributed to communication-related activities supporting smooth event implementation.'
    ],
    photos: []
  },
  {
    id: 10,
    title: 'BOGORUN 2026',
    category: 'projects',
    role: 'Traffic Flow & Route Marshal',
    year: '2026',
    achievements: [
      'Directed traffic flow and monitored restricted road access during the running event.',
      'Assisted in ensuring participant safety and smooth vehicle coordination around race areas.',
      'Collaborated with field teams to maintain organized event operations in public road sections.'
    ],
    photos: []
  },
  {
    id: 11,
    title: 'KOLABORUN 2026',
    category: 'projects',
    role: 'Coordinator of Public Relations',
    year: '2026',
    achievements: [
      'Led communication strategies and branding initiatives for the event.',
      'Coordinated promotional campaigns and audience engagement across multiple platforms.',
      'Collaborated with partners and committees to strengthen event visibility and outreach.'
    ],
    photos: ['/assets/Klbrn 1.jpeg', '/assets/Klbrn 2.jpeg', '/assets/Klbrn 4.jpeg', '/assets/Klbrn 5.jpeg']
  },
  {
    id: 12,
    title: 'Soulinked Social Project',
    category: 'projects',
    role: 'Vice Project Manager',
    year: '2025',
    achievements: [
      'Assisted in project planning, team coordination, and seminar implementation activities.',
      'Supported stakeholder communication and participant engagement throughout the program.',
      'Contributed to the successful execution of community-based educational initiatives.'
    ],
    photos: ['/assets/Soulinked.jpeg']
  },
  {
    id: 13,
    title: 'HEARTFEST',
    category: 'projects',
    role: 'Liaison Officer (LO)',
    year: '2025',
    achievements: [
      'Managed communication and coordination with performers and external stakeholders.',
      'Assisted in preparing agreements and maintaining professional event relations.',
      'Supported event execution while ensuring smooth coordination between parties involved.'
    ],
    photos: []
  },
  {
    id: 14,
    title: 'President University Sport Tournament',
    category: 'projects',
    role: 'Internal Public Relations',
    year: '2025',
    achievements: [
      'Managed internal communication and information distribution among committees.',
      'Developed promotional captions and communication materials for social media platforms.',
      'Assisted as Master of Ceremony to maintain audience engagement during the event.'
    ],
    photos: []
  },
  {
    id: 15,
    title: 'Global Impact Day',
    category: 'projects',
    role: 'Event Organizer',
    year: '2025',
    achievements: [
      'Contributed to event planning and development of promotional content ideas.',
      'Assisted in coordinating audience engagement and communication strategies.',
      'Collaborated with teams to support effective event implementation and outreach.'
    ],
    photos: []
  },
  {
    id: 16,
    title: "FPCI's 9th Birthday",
    category: 'projects',
    role: 'Internal Public Relations',
    year: '2025',
    achievements: [
      'Supported internal communication and event coordination activities.',
      'Assisted in delivering event information and maintaining committee engagement.',
      'Contributed as Master of Ceremony to support audience interaction during the program.'
    ],
    photos: []
  },
  {
    id: 17,
    title: 'INTERACT',
    category: 'projects',
    role: 'Ticketing & Marketing Team',
    year: '2025',
    achievements: [
      'Assisted in promotional campaigns to increase event participation and audience reach.',
      'Managed ticket distribution and participant inquiries during registration processes.',
      'Collaborated with teams to support marketing communication and operational activities.'
    ],
    photos: []
  },
  {
    id: 18,
    title: '4th Economic Survival Exhibition',
    category: 'projects',
    role: 'Treasurer',
    year: '2025',
    achievements: [
      'Managed budgeting, financial records, and expense tracking for the exhibition.',
      'Assisted in ensuring financial transparency and efficient allocation of resources.',
      'Coordinated financial planning and reporting with related committees.'
    ],
    photos: ['/assets/Exhibition.jpg']
  },
  {
    id: 19,
    title: 'Guest Lecture: Climate-Tech Business Idea',
    category: 'projects',
    role: 'Project Manager',
    year: '2025',
    achievements: [
      'Led planning and coordination for guest lecture implementation.',
      'Managed communication with speakers and event stakeholders professionally.',
      'Supervised logistical preparation to ensure smooth and organized event execution.'
    ],
    photos: []
  },
  {
    id: 20,
    title: 'Guest Lecture: Future of Fashion Business',
    category: 'projects',
    role: 'Project Manager',
    year: '2025',
    achievements: [
      'Coordinated speaker engagement and event preparation activities.',
      'Managed operational planning and teamwork during the program.',
      'Ensured all event activities were conducted effectively and professionally.'
    ],
    photos: []
  },
  {
    id: 21,
    title: 'Guest Lecture: Religion in Entrepreneurship',
    category: 'projects',
    role: 'Project Manager',
    year: '2025',
    achievements: [
      'Organized event preparation and coordinated communication with guest speakers.',
      'Supervised technical arrangements and audience engagement during the session.',
      'Worked collaboratively with committees to ensure successful program delivery.'
    ],
    photos: []
  },
  {
    id: 22,
    title: 'PresUniv Student Housing Cup',
    category: 'projects',
    role: 'Sport Organizer – Tug of War Division',
    year: '2025',
    achievements: [
      'Developed competition rules and tournament structures for participants.',
      'Coordinated match schedules and operational activities during the competition.',
      'Ensured fair, organized, and efficient implementation of sports activities.'
    ],
    photos: []
  },
  {
    id: 23,
    title: 'KOLABORAKSI Event',
    category: 'projects',
    role: 'Operational Committee',
    year: '2025',
    achievements: [
      'Assisted in preparing event logistics, equipment, and venue arrangements before activities began.',
      'Coordinated operational needs to ensure smooth event implementation during the program.',
      'Collaborated with committees to maintain efficient workflow and event readiness.'
    ],
    photos: []
  },
  {
    id: 24,
    title: 'OCEAN CARE',
    category: 'projects',
    role: 'Volunteer Participant',
    year: '2025',
    achievements: [
      'Participated in environmental clean-up activities focused on coastal sustainability and awareness.',
      'Collaborated with volunteers to maintain cleanliness and proper waste management practices.',
      'Supported community-driven initiatives promoting environmental responsibility.'
    ],
    photos: []
  },
  {
    id: 25,
    title: 'AIESEC – IMPACTED 2.0',
    category: 'projects',
    role: 'Volunteer Participant',
    year: '2025',
    achievements: [
      'Assisted in educational activities introducing Sustainable Development Goals (SDGs) to students.',
      'Engaged participants through interactive discussions, games, and learning sessions.',
      'Supported community outreach initiatives focused on sustainability and social awareness.'
    ],
    photos: ['/assets/IMPACTED.jpg']
  },
  {
    id: 26,
    title: 'Peduly Social Project',
    category: 'projects',
    role: 'Volunteer Participant',
    year: '2024',
    achievements: [
      'Participated in social activities supporting children through educational games and entertainment programs.',
      'Assisted in creating a positive and engaging environment during community service activities.',
      'Collaborated with volunteers to encourage social interaction and community engagement.'
    ],
    photos: []
  },
  {
    id: 27,
    title: 'IR Education Festival',
    category: 'projects',
    role: 'Debate Competition Coordinator',
    year: '2024',
    achievements: [
      'Coordinated technical preparation and execution of debate competition activities.',
      'Managed communication with participants, judges, and committee members.',
      'Ensured the competition operated effectively according to event regulations.'
    ],
    photos: []
  },
  {
    id: 28,
    title: 'AVIRAMA ART SMANTI Festival',
    category: 'projects',
    role: 'Public Relations Coordinator & MC',
    year: '2023',
    achievements: [
      'Led the public relations division and supervised communication activities during the festival.',
      'Acted as Master of Ceremony to maintain audience engagement and event flow.',
      'Assisted in promoting the event through coordinated communication strategies.'
    ],
    photos: []
  }
];

const ExperienceCategoryPage = ({ category, onBack }) => {
  const [activeExpId, setActiveExpId] = useState(null);
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const updateCols = () => {
      if (window.innerWidth <= 768) setColumns(1);
      else if (window.innerWidth <= 1024) setColumns(2);
      else setColumns(4);
    };
    updateCols();
    window.addEventListener('resize', updateCols);
    return () => window.removeEventListener('resize', updateCols);
  }, []);



  const handleCardClick = (id) => {
    if (activeExpId === id) {
      setActiveExpId(null);
    } else {
      setActiveExpId(id);
      setTimeout(() => {
        const panel = document.getElementById(`panel-${id}`);
        if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  const filteredData = allExperiencesData.filter(exp => exp.category === category);

  const rows = [];
  for (let i = 0; i < filteredData.length; i += columns) {
    rows.push(filteredData.slice(i, i + columns));
  }

  return (
    <div className="experience-page-wrapper">
      <div className="experience-header">
        <button className="back-btn" onClick={onBack}>
          &larr; Back
        </button>
        <h1 className="experience-title">
          {category === 'work' ? 'WORK & ORGANIZATION' : 'PROJECTS & EVENTS'}
        </h1>
      </div>

      <div className="experience-grid">
        {rows.map((row, rowIndex) => {
          const activeItemInRow = row.find(exp => exp.id === activeExpId);
          return (
            <React.Fragment key={rowIndex}>
              {row.map(exp => (
                <div 
                  key={exp.id} 
                  className={`experience-card ${activeExpId === exp.id ? 'active' : ''}`}
                  onClick={() => handleCardClick(exp.id)}
                >
                  <h3>{exp.title}</h3>
                  <p className="exp-meta">{exp.role} &bull; {exp.year}</p>
                  <button className="exp-view-btn">View</button>
                </div>
              ))}
              
              {activeItemInRow && (
                <div id={`panel-${activeItemInRow.id}`} className="experience-detail-panel">
                  <div className="detail-info-block">
                    <h4 className="detail-role">{activeItemInRow.role}</h4>
                    <p className="detail-year">{activeItemInRow.year}</p>
                    <ul className="detail-achievements">
                      {activeItemInRow.achievements.map((ach, i) => (
                        <li key={i}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                  {activeItemInRow.photos.length > 0 && (
                    <div className="detail-photos-layout">
                      {activeItemInRow.photos.slice(0, 4).map((photo, i) => (
                        <div key={i} className={`detail-photo-wrapper photo-${i}`}>
                          <img src={photo} alt={`${activeItemInRow.title} ${i}`} />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

function App() {
  const [view, setView] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollTarget, setScrollTarget] = useState(null);

  useLayoutEffect(() => {
    if (scrollTarget) {
      const el = document.getElementById(scrollTarget);
      if (el) {
        el.scrollIntoView({ behavior: 'instant' });
      }
      setScrollTarget(null);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [view]);


  if (view === 'work' || view === 'projects') {
    return (
      <>
        <ExperienceCategoryPage category={view} onBack={() => {
          setScrollTarget('projects');
          setView('home');
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
          <a href="#" className="nav-logo">DEVAL Kerenhak</a>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#contact" className="btn btn-nav" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
          
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="container hero-container">
          {/* Layout Split Screen 2 Kolom */}
          <div className="hero-split">
            
            {/* Kolom Kiri: Visual & Foto */}
            <div className="hero-visual-left">
              <div className="hero-ornament circle-glow"></div>
              <div className="hero-ornament abstract-shape"></div>
              <div className="hero-ornament fine-lines"></div>
              <img src="/assets/foto.png" alt="Deval Profile" className="hero-image" />
            </div>

            {/* Kolom Kanan: Teks dan Tombol */}
            <div className="hero-content-right">
              <p className="hero-eyebrow">Deval Kerenhak Syenazar Kati &bull; International Relation Student</p>
              <h1>
                Elevating <span className="highlight">Global Impact</span> <br /> Through Digital Communication
              </h1>
              <p className="tagline">
                I am an International Relations student who is passionate about combining strategic analysis with engaging visual storytelling. I am dedicated to helping various initiatives tell their stories and build connections around the world.
              </p>
              <div className="hero-actions-inline">
                <a href="/assets/CV.pdf" download="CV_Deval_Kerenhak.pdf" className="btn btn-outline">Download CV</a>
                <a href="#contact" className="btn btn-primary">Let's Collaborate</a>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>

      {/* 2. AREAS OF EXPERTISE */}
      <section id="skills" className="what-i-do-best-section">
          <h2 className="section-title-center underline-teal">Areas of Expertise</h2>
          
          <div className="skills-triple-grid">
              {/* Kolom 1 */}
              <div className="skill-status-card">
                  <div className="skill-card-icon"><i className="fas fa-bullhorn"></i></div>
                  <h3>Communication & Public Relations</h3>
                  <ul>
                      <li><i className="fas fa-check check-teal"></i> Public Relations Strategy</li>
                      <li><i className="fas fa-check check-teal"></i> Internal & External Communication</li>
                      <li><i className="fas fa-check check-teal"></i> Social Media & Digital Branding</li>
                      <li><i className="fas fa-check check-teal"></i> Content Writing & Copywriting</li>
                  </ul>
              </div>

              {/* Kolom 2 */}
              <div className="skill-status-card">
                  <div className="skill-card-icon"><i className="fas fa-calendar-check"></i></div>
                  <h3>Event & Project Management</h3>
                  <ul>
                      <li><i className="fas fa-check check-teal"></i> Event Planning & Coordination</li>
                      <li><i className="fas fa-check check-teal"></i> Project Execution</li>
                      <li><i className="fas fa-check check-teal"></i> Stakeholder Coordination</li>
                      <li><i className="fas fa-check check-teal"></i> Public Speaking & MCing</li>
                  </ul>
              </div>

              {/* Kolom 3 */}
              <div className="skill-status-card">
                  <div className="skill-card-icon"><i className="fas fa-handshake"></i></div>
                  <h3>Leadership & Collaboration</h3>
                  <ul>
                      <li><i className="fas fa-check check-teal"></i> Team Leadership</li>
                      <li><i className="fas fa-check check-teal"></i> Cross-functional Collaboration</li>
                      <li><i className="fas fa-check check-teal"></i> Community Engagement</li>
                      <li><i className="fas fa-check check-teal"></i> Problem Solving & Adaptability</li>
                  </ul>
              </div>
          </div>
      </section>

      {/* 3. LANGUAGES */}
      <section className="languages-section">
          <h2 className="section-title-center">Languages</h2>
          <p className="languages-list">Indonesian (Native) • English (Fluent) • Mandarin (Intermediate)</p>
      </section>

      {/* 4. EXPERIENCE */}
      <section id="projects" className="section">
        <div className="container">
          
          <div className="section-header">
            <h2>Experience</h2>
            <div className="line"></div>
          </div>

          <div className="dual-banners-container">
            {/* Banner Kiri: Work & Organization */}
            <div className="banner banner-work" onClick={() => setView('work')}>
              <div className="banner-content">
                <h2>Work & Organization</h2>
                <p>Professional roles, internships, & structural experiences.</p>
                <div className="banner-arrow">&rarr;</div>
              </div>
            </div>

            {/* Banner Kanan: Projects & Events */}
            <div className="banner banner-projects" onClick={() => setView('projects')}>
              <div className="banner-content">
                <h2>Projects & Events</h2>
                <p>Event management, campaigns, & creative initiatives.</p>
                <div className="banner-arrow">&rarr;</div>
              </div>
            </div>
          </div>

        </div>
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
                  <a href="https://www.linkedin.com/in/devalkerenhakskati" target="_blank" rel="noopener noreferrer" className="social-white-circle" title="LinkedIn Profile">
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
