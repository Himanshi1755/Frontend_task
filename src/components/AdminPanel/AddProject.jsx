import React, { useState } from "react";
import { API } from "../../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProject() {
  const [project, setProject] = useState({
    pName: "",
    pDescription: "",
    pImage: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("pName", project.pName);           
      formData.append("pDescription", project.pDescription); 
      formData.append("pImage", project.pImage);        

      const { data } = await API.post("/projects", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(data.message || "Project added successfully!");
      setProject({ pName: "", pDescription: "", pImage: null });
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "Failed to add project!");
    }
  };

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
    backgroundColor: "#326c9c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: "20px" }}>Add New Project</h2>

      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <label style={labelStyle}>Project Name</label>
        <input
          type="text"
          placeholder="Enter project name"
          value={project.pName}
          onChange={(e) => setProject({ ...project, pName: e.target.value })}
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Project Description</label>
        <textarea
          placeholder="Enter project description"
          value={project.pDescription}
          onChange={(e) =>
            setProject({ ...project, pDescription: e.target.value })
          }
          style={{ ...inputStyle, height: "100px", resize: "vertical" }}
          required
        ></textarea>

        <label style={labelStyle}>Project Image</label>
        <input
          type="file"
          onChange={(e) => setProject({ ...project, pImage: e.target.files[0] })}
          style={{ marginBottom: "20px" }}
          accept="image/*"
          required
        />

        <button type="submit" style={buttonStyle}>
          Add Project
        </button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default AddProject;
