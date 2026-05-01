import React from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ t, activeSection, menuOpen, setMenuOpen }) => {
  const navItems = [
    { id: "home", label: t.nav[0] },
    { id: "about", label: t.nav[1] },
    { id: "skills", label: t.nav[2] },
    { id: "projects", label: t.nav[3] },
    { id: "certificates", label: t.nav[4] },
    { id: "contact", label: t.nav[5] },
  ];

  return (
    <nav className="nav">
      <div className="nav-container">
        <a href="#home" className="nav-brand" onClick={() => setMenuOpen(false)}>
          <span>Tristanio</span>
          <strong>Armanto</strong>
        </a>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="nav-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;