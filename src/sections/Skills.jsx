import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Wrench } from "lucide-react";

const icons = [Code2, Palette, Wrench];

const Skills = ({ t }) => {
  return (
    <section id="skills" className="skills">
      <div className="section-number">02</div>

      <div className="container">
        <div className="section-head">
          <span className="section-label">Capabilities</span>
          <h2 className="section-title">{t.skills.title}</h2>
          <p className="section-desc">{t.skills.desc}</p>
        </div>

        <div className="skills-grid">
          {t.skills.categories.map((category, index) => {
            const Icon = icons[index] || Code2;

            return (
              <motion.div
                key={category.title}
                className="skill-card"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
              >
                <div className="skill-icon">
                  <Icon size={24} />
                </div>

                <h3>{category.title}</h3>

                <div className="skill-tags">
                  {category.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;