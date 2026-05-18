import React, { useState } from 'react';

function ProjectDetail({ project, onBack }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!project) return null;

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="#" className="nav-logo" onClick={(e) => { e.preventDefault(); onBack(); }}>
            DEVAL Kerenhak <span>S. Kati</span>
          </a>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#about" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onBack('about'); }}>About</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onBack('projects'); }}>Experience</a>
            <a href="#skills" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onBack('skills'); }}>Skills</a>
            <a href="#contact" className="btn btn-nav" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); onBack('contact'); }}>Contact</a>
          </div>
          
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>

      <section className="section" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
        <div className="container">
          
          <div className="project-hero">
            <h1>{project.title}</h1>
            <p className="role-context">{project.role}</p>
            <p className="summary">{project.summary}</p>
          </div>

          <img src={project.heroImg} alt={project.title} className="project-hero-img" />

          <div className="project-content-grid">
            <div className="left-col">
              <div className="content-block">
                <h2>Overview</h2>
                <p>{project.overview}</p>
              </div>
              <div className="content-block">
                <h2>Role & Contribution</h2>
                <p>{project.contribution}</p>
              </div>
            </div>
            <div className="right-col">
              <div className="content-block">
                <h2>Impact</h2>
                <p>{project.impact}</p>
              </div>
            </div>
          </div>

          {project.gallery && project.gallery.length > 0 && (
            <div className="gallery-container">
              <h2>Gallery</h2>
              <div className="detail-gallery-grid">
                {project.gallery.map((imgSrc, index) => (
                  <img key={index} src={imgSrc} alt={`Gallery ${index + 1}`} className="gallery-img" />
                ))}
              </div>
            </div>
          )}

        </div>
      </section>
    </>
  );
}

export default ProjectDetail;
