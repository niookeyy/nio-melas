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
              {/* Mengubah pembungkus menjadi ul untuk daftar poin */}
              <ul className="skill-list-vertical">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill-item-point">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .skills {
          background: #ffffff;
          padding: 8rem 4rem;
          position: relative;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-top: 4rem;
        }

        .skill-category h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          border-bottom: 2px solid #dc143c;
          padding-bottom: 0.5rem;
          display: inline-block;
        }

        /* Gaya baru untuk poin-poin */
        .skill-list-vertical {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .skill-item-point {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: #333;
          position: relative;
          padding-left: 1.5rem;
          transition: all 0.3s ease;
        }

        /* Membuat Bullet Point Custom Merah */
        .skill-item-point::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 6px;
          background-color: #dc143c;
          border-radius: 50%;
        }

        .skill-item-point:hover {
          color: #dc143c;
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .skills {
            padding: 4rem 2rem;
          }
          .skills-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;