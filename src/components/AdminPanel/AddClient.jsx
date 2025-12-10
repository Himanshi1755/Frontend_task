import React, { useState } from "react";
import { API } from "../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddClient() {
  const [client, setClient] = useState({
    name: "",
    description: "",
    designation: "",
    image: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", client.name);
      formData.append("description", client.description);
      formData.append("designation", client.designation);
      formData.append("image", client.image);

      const { data } = await API.post("/clients", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(data.message || "Client added successfully!");
      setClient({ name: "", description: "", designation: "", image: null });
    } catch (error) {
      console.error(error);
      toast.error("Failed to add client!");
    }
  };

  // Styles
  const containerStyle = {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const labelStyle = {
    alignSelf: "flex-start",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const buttonStyle = {
    padding: "12px 25px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: "20px" }}>Add New Client</h2>

      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <label style={labelStyle}>Client Name</label>
        <input
          type="text"
          placeholder="Enter client name"
          value={client.name}
          onChange={(e) => setClient({ ...client, name: e.target.value })}
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Client Description</label>
        <textarea
          placeholder="Enter description"
          value={client.description}
          onChange={(e) => setClient({ ...client, description: e.target.value })}
          style={{ ...inputStyle, height: "100px", resize: "vertical" }}
          required
        ></textarea>

        <label style={labelStyle}>Designation</label>
        <input
          type="text"
          placeholder="CEO, Designer, Web Developer..."
          value={client.designation}
          onChange={(e) => setClient({ ...client, designation: e.target.value })}
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Client Image</label>
        <input
          type="file"
          onChange={(e) => setClient({ ...client, image: e.target.files[0] })}
          style={{ marginBottom: "20px" }}
          accept="image/*"
          required
        />

        <button type="submit" style={buttonStyle}>
          Add Client
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default AddClient;
