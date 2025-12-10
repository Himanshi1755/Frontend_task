import React, { useState } from "react";
import { API } from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        city: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await API.post("/contacts", formData);


            toast.success(response.data.message || "Contact submitted successfully!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            setFormData({ fullName: "", email: "", mobile: "", city: "" });
        } catch (err) {

            toast.error(
                err.response?.data?.message || "Something went wrong. Please try again.",
                {
                    position: "top-right",
                    autoClose: 3000,
                }
            );
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    backgroundColor: "rgba(50, 0, 75, 0.7)", // semi-transparent purple
                    padding: "25px",
                    borderRadius: "12px",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    gap: "15px",
                }}
            >
                <h3
                    style={{
                        color: "white",
                        fontWeight: "700",
                        marginBottom: "20px",
                        fontSize: "20px",
                    }}
                >
                    Get a Free Consultation
                </h3>

                {["fullName", "email", "mobile", "city"].map((field) => (
                    <input
                        key={field}
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        placeholder={
                            field === "fullName"
                                ? "Full Name"
                                : field === "email"
                                    ? "Email"
                                    : field === "mobile"
                                        ? "Mobile Number"
                                        : "City"
                        }
                        value={formData[field]}
                        onChange={handleChange}
                        required
                        style={{
                            padding: "10px",
                            borderRadius: "5px",
                            border: "none",
                            borderBottom: "2px solid white",
                            borderLeft: "2px solid white",
                            borderRight: "2px solid white",
                            backgroundColor: "transparent",
                            color: "white",
                            outline: "none",
                            fontSize: "14px",
                        }}
                    />
                ))}

                <button
                    type="submit"
                    style={{
                        padding: "12px",
                        borderRadius: "6px",
                        border: "none",
                        backgroundColor: "#FFA500",
                        color: "white",
                        fontWeight: "700",
                        fontSize: "14px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff8c00")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#FFA500")}
                >
                    Submit
                </button>
            </form>

            <ToastContainer />
        </div>
    );
}

export default ContactForm;
