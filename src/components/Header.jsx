import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", id: "home" },
    { name: "SERVICES", id: "services" },
    { name: "ABOUT", id: "about" },
    { name: "PROJECTS", id: "projects" },
    { name: "TESTIMONIAL", id: "testimonial" },
    { name: "CONTACT", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false);
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 20px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        fontFamily: "Arial, sans-serif",
      }}
    >
      
      <div style={{ display: "flex", alignItems: "center", gap: "0" }}>
        <img
          src="/images/logo.png"
          alt="Logo"
          style={{ height: "40px", width: "auto" }}
        />
        <span
          style={{
            fontWeight: "750",
            fontSize: "15px",
            color: "#333",
            marginLeft: "4px",
            position: "relative",
            top: "3px",
          }}
        >
          Real
        </span>
        <span
          style={{
            fontSize: "15px",
            color: "#333",
            position: "relative",
            top: "3px",
            paddingLeft: "2px",
          }}
        >
          Trust
        </span>
      </div>

     
      <nav className="desktop-nav" style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: link.id === "contact" ? "#ff8c00" : "#000",
              padding: link.id === "contact" ? "6px 12px" : "0",
              borderRadius: link.id === "contact" ? "4px" : "0",
              fontWeight: "600",
              fontSize: "14px",
            }}
          >
            {link.name}
          </button>
        ))}

        
        <a
          href="/admin"
          style={{
            color: "#000",
            fontWeight: "600",
            fontSize: "14px",
            textDecoration: "none",
            padding: "6px 12px",
            border: "1px solid #ddd",
            borderRadius: "6px",
          }}
        >
          Admin
        </a>
      </nav>

      
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          flexDirection: "column",
          cursor: "pointer",
          gap: "5px",
        }}
      >
        <span style={{ width: "25px", height: "3px", backgroundColor: "#333" }} />
        <span style={{ width: "25px", height: "3px", backgroundColor: "#333" }} />
        <span style={{ width: "25px", height: "3px", backgroundColor: "#333" }} />
      </div>

      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            right: "20px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
            borderRadius: "8px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            zIndex: 1000,
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: link.id === "contact" ? "#ff8c00" : "#000",
                padding: "6px 12px",
                fontWeight: "600",
                fontSize: "14px",
                textAlign: "left",
              }}
            >
              {link.name}
            </button>
          ))}

          
          <a
            href="/admin"
            onClick={() => setMenuOpen(false)}
            style={{
              color: "#000",
              fontWeight: "600",
              fontSize: "14px",
              padding: "6px 12px",
              textDecoration: "none",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          >
            Admin
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;
