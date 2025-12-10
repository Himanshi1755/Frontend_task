import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from "../api/api";

function HappyClients() {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        API.get("/clients")
            .then((res) => setClients(res.data.AllClients))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div
            className="container py-5 text-center"
            style={{
                backgroundColor: "#f9fbff",
                borderRadius: "10px",
                padding: "40px",

            }}
        >
            <h2 className="fw-bold mb-4" style={{ color: "#060606ff" }}>
                Happy Clients
            </h2>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(5, 1fr)",
                    gap: "30px",
                    justifyContent: "center",
                    boxSizing: "border-box",
                }}
            >
                {clients.map((client) => (
                    <div
                        key={client._id}
                        className="shadow-sm"
                        style={{
                            backgroundColor: "white",
                            borderRadius: "10px",
                            padding: "20px",
                            textAlign: "left",
                            minHeight: "250px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}
                    >

                        <img
                            src={client.image}
                            alt={client.name}
                            style={{
                                width: "70px",
                                height: "70px",
                                borderRadius: "50%",
                                objectFit: "cover",
                                marginBottom: "10px",
                                boxShadow: "0 0 5px rgba(0,0,0,0.1)"
                            }}
                        />


                        <p
                            style={{
                                fontSize: "14px",
                                color: "#555",
                                flexGrow: 1,
                                marginBottom: "10px"
                            }}
                        >
                            {client.description}
                        </p>


                        <h6
                            className="fw-bold"
                            style={{ color: "#007BFF", marginBottom: "5px" }}
                        >
                            {client.name}
                        </h6>


                        <small style={{ color: "#999" }}>{client.designation}</small>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HappyClients;
