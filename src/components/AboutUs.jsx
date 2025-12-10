import React from "react";

function AboutUs() {
  return (
    <section
      id="about"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 40px",
        backgroundColor: "#f5f3ff",
        gap: "40px",
      }}
    >
      <div
        style={{
          flex: "1",
          minWidth: "280px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <img
          src="/images/a1.png"
          alt="About Main"
          style={{
            width: "220px",
            borderRadius: "15px",
            boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
            transform: "rotate(-5deg)",
            zIndex: 2,
          }}
        />
        <img
          src="/images/a2.png"
          alt="About Secondary"
          style={{
            width: "180px",
            borderRadius: "15px",
            boxShadow: "0 12px 25px rgba(0,0,0,0.1)",
            position: "absolute",
            top: "15%",
            left: "20%",
            transform: "rotate(5deg)",
            zIndex: 1,
            opacity: 0.9,
          }}
        />
      </div>

      <div
        style={{
          flex: "1",
          minWidth: "280px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h2 style={{ fontSize: "32px", fontWeight: "700", color: "#3a0ca3" }}>
          About Real Trust
        </h2>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#555" }}>
          Real Trust combines creativity, design, and marketing expertise to deliver
          innovative business solutions. Our approach ensures measurable results
          and lasting impact.
        </p>
        <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#555" }}>
          We focus on understanding your goals, designing thoughtfully, and
          executing strategies that drive success. Let’s build the future together.
        </p>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            section {
              flex-direction: column-reverse;
              padding: 50px 20px;
              gap: 30px;
            }
            div[style*="position: relative"] img {
              position: static !important;
              transform: none !important;
              opacity: 1 !important;
              width: 70% !important;
              margin: 0 auto;
            }
          }
        `}
      </style>
    </section>
  );
}

export default AboutUs;
