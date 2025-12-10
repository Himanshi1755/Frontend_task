import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from "../api/api";

function OurProjects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        API.get("/projects")
            .then((res) => setProjects(res.data.AllProjects))
            .catch((err) => console.log(err));
    }, []);


    const backendURL = "https://backend-task-1-hgla.onrender.com";

    return (
        <section
            id="projects"
            className="container py-5 text-center"
            style={{
                backgroundColor: "#f9f9f9",
                borderRadius: "10px",
                padding: "60px 20px",
            }}
        >
            <h2 className="fw-bold mb-3">Our Projects</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "15px", color: "#555" }}>
                We know what buyers are looking for and suggest projects that will bring clients top dollar.
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "20px",
                    marginTop: "30px",
                }}
            >
                {projects.map((project) => (
                    <div key={project._id}>
                        <div
                            className="card h-100 shadow-sm border-0"
                            style={{
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: "10px",
                                overflow: "hidden",
                                transition: "transform 0.3s",
                            }}
                        >
                            <img
                                src={`${backendURL}/${project.pImage}`}
                                alt={project.pName}
                                className="card-img-top"
                                style={{
                                    height: "150px",
                                    objectFit: "cover",
                                    transition: "transform 0.3s",
                                }}
                            />

                            <div
                                className="card-body d-flex flex-column text-start"
                                style={{ padding: "12px" }}
                            >
                                <h6 className="fw-bold text-primary mb-2">{project.pName}</h6>
                                <p className="text-muted mb-3" style={{ fontSize: "13px", flexGrow: 1, lineHeight: "1.3" }}>
                                    {project.pDescription}
                                </p>
                                <button
                                    className="btn btn-sm text-white"
                                    style={{ backgroundColor: "#FF8C00", padding: "6px 14px", fontSize: "13px" }}
                                >
                                    READ MORE
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
                html {
                    scroll-behavior: smooth;
                }
                .card:hover img {
                    transform: scale(1.05);
                }
                .card:hover {
                    transform: translateY(-5px);
                }
            `}</style>
        </section>
    );
}

export default OurProjects;
