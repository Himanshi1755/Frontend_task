import React from "react";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        background: "#1e1e2d",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        position: "fixed",
        left: 0,
        top: 0,
      }}
    >
      <h2 style={{ marginBottom: "30px", fontSize: "20px" }}>Admin Panel</h2>

      <Link to="/admin/add-project" style={linkStyle}>Add Project</Link>
      <Link to="/admin/add-client" style={linkStyle}>Add Client</Link>
      <Link to="/admin/contacts" style={linkStyle}>View Contacts</Link>
      <Link to="/admin/subscribers" style={linkStyle}>Subscribers</Link>
    </div>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "10px 0",
  fontSize: "16px",
  cursor: "pointer"
};

export default AdminSidebar;
