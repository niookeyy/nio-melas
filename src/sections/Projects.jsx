import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

import wiseWallet from "../assets/wise-wallet.png";
import domainSearch from "../assets/domain-search.png";
import portfolioImage from "../assets/Foto-saya-hero.jpeg";

const imageMap = {
  "wise-wallet.png": wiseWallet,
  "domain-search.png": domainSearch,
  // "Foto-saya-hero.jpeg": portfolioImage,
};

const Projects = ({ t, onEnter, onLeave }) => {
  return (
    <section id="projects" className="projects">
      <div className="section-number">03</div>

      <div className="container">
        <div className="section-head">
          <span className="section-label">Selected Work</span>
          <h2 className="section-title">My Projects</h2>
          <p className="section-desc">{t.projects.desc}</p>
        </div>

        <div className="project-list">
          {t.projects.items.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            >
              <div className="project-image">
                <img src={imageMap[project.image]} alt={project.title} />
              </div>

              <div className="project-content">
                <span className="project-num">{project.num}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link primary"
                    >
                      Live Demo
                      <ArrowUpRight size={17} />
                    </a>
                  ) : (
                    <span className="project-link disabled">Demo Coming Soon</span>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <Github size={17} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;