import React from "react";
import ContactForm from "./ContactForm";

function ContactSection() {
    return (
        <div
            id="contact"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundImage: "url('/images/first.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "60px 40px",
                flexWrap: "wrap",
                color: "white",
                gap: "40px",
            }}
        >
            <div
                style={{
                    flex: "1",
                    minWidth: "280px",
                    marginBottom: "20px",
                    textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "15px",
                }}
            >
                <h2 style={{ fontSize: "28px", fontWeight: "700", margin: 0 }}>
                    Consultation, Design and Marketing
                </h2>
                <p style={{ fontSize: "16px", lineHeight: "1.5", margin: 0 }}>
                    Get expert guidance for your projects and business solutions.
                </p>
            </div>

            <div
                style={{
                    flex: "1",
                    minWidth: "280px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ContactForm />
            </div>

            <style>
                {`
                    @media (max-width: 768px) {
                        div[style*="display: flex"] {
                            flex-direction: column;
                            padding: 40px 20px;
                            gap: 30px;
                        }
                    }
                `}
            </style>
        </div>
    );
}

export default ContactSection;
