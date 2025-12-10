import React, { useState } from "react";
import { API } from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Subscribe() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error("Please enter a valid email address");
            return;
        }
        setLoading(true);
        try {
            const response = await API.post("/newsletter", { email });
            toast.success(response.data.message || "Subscribed successfully!");
            setEmail("");
        } catch (err) {
            toast.error(err.response?.data?.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer id="services" style={{ fontFamily: "Arial, sans-serif", color: "white" }}>
            <div style={{ backgroundImage: "url('/images/p2.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", width: "100%", minHeight: "300px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "0 20px", color: "white" }}>
                <div style={{ padding: "20px 30px" }}>
                    <p style={{ fontWeight: 550, fontSize: "18px", maxWidth: "600px", margin: "0 0 20px" }}>
                        Learn more about our listing process, as well as our additional staging and design work.
                    </p>
                    <button style={{ backgroundColor: "transparent", color: "white", border: "2px solid white", padding: "8px 20px", borderRadius: "5px", fontWeight: 700, cursor: "pointer", fontSize: "14px" }}>LEARN MORE</button>
                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 40px", backgroundColor: "rgba(53, 19, 244, 0.82)", backdropFilter: "blur(6px)", flexWrap: "wrap", gap: "15px" }}>
                <nav style={{ display: "flex", gap: "30px", fontWeight: "600", fontSize: "14px", flexWrap: "wrap", color: "white" }}>
                    {["Home", "Services", "Projects", "Testimonials", "Connect"].map((link) => (
                        <a key={link} href="#" style={{ color: "white", textDecoration: "none", whiteSpace: "nowrap" }}>{link}</a>
                    ))}
                </nav>

                <form onSubmit={handleSubscribe} style={{ display: "flex", gap: "10px", flexWrap: "nowrap", minWidth: "300px" }}>
                    <input type="email" placeholder="Enter Email Address" value={email} onChange={(e) => setEmail(e.target.value)} style={{ flexGrow: 1, padding: "10px 15px", borderRadius: "4px", border: "none", fontSize: "14px", outline: "none" }} required />
                    <button type="submit" disabled={loading} style={{ backgroundColor: "white", color: "#2d7bff", border: "none", padding: "10px 25px", borderRadius: "4px", cursor: "pointer", fontWeight: "600", fontSize: "14px" }}>
                        {loading ? "Subscribing..." : "Subscribe"}
                    </button>
                </form>
            </div>

            <div style={{ backgroundColor: "#000000", padding: "10px 20px", display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "10px" }}>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src="/images/linkdin.png" alt="LinkedIn" style={{ width: "24px", height: "24px" }} /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="/images/insta.png" alt="Instagram" style={{ width: "24px", height: "24px" }} /></a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src="/images/facebook.png" alt="Facebook" style={{ width: "24px", height: "24px" }} /></a>
            </div>

            <ToastContainer position="top-right" autoClose={3000} />
        </footer>
    );
}

export default Subscribe;
