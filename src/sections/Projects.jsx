import React from 'react';

const Projects = ({ t, onEnter, onLeave }) => {
  return (
    <section id="projects" className="projects">
      {/* Background Number */}
      <div className="section-number">03</div>
      
      <div className="container">
        <h2 className="section-title">{t.projects.title}</h2>
        <p className="section-desc">{t.projects.desc}</p>
        
        <div className="projects-grid">
          {t.projects.items.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              onMouseEnter={onEnter} 
              onMouseLeave={onLeave}
            >
              {/* Nomor urut proyek di pojok kartu */}
              <div className="project-number">{project.num}</div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Tombol link jika ada, bisa kamu tambahkan nanti */}
                <div className="project-link">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;