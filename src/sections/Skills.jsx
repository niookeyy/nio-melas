import React from 'react';

const Skills = ({ t }) => {
  return (
    <section id="skills" className="skills">
      {/* Background Number */}
      <div className="section-number">02</div>
      
      <div className="container">
        <h2 className="section-title text-center">{t.skills.title}</h2>
        
        <div className="skills-grid">
          {t.skills.categories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;