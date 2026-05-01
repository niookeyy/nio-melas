import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Target, TrendingUp } from "lucide-react";

const icons = [Sparkles, Target, TrendingUp];

const About = ({ t }) => {
  return (
    <section id="about" className="about">
      <div className="section-number">01</div>

      <div className="container about-container">
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Introduction</span>
          <h2 className="section-title">{t.about.title}</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="about-lead">{t.about.lead}</p>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
          </motion.div>

          <div className="about-cards">
            {t.about.cards.map((card, index) => {
              const Icon = icons[index] || Sparkles;

              return (
                <motion.div
                  key={card.title}
                  className="about-card"
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                >
                  <div className="about-card-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;