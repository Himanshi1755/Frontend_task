import React, { useEffect, useState } from "react";
import { API } from "../../api/api";

function ViewContacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    API.get("/contacts")
      .then((res) => setContacts(res.data.AllResponse || []))
      .catch((err) => console.log("Error fetching contacts:", err));
  }, []);

  const containerStyle = {
    marginLeft: "270px",
    padding: "20px",
    maxWidth: "95%",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  };

  const thStyle = {
    backgroundColor: "#989ea0ff",
    color: "white",
    padding: "10px",
    textAlign: "left",
  };

  const tdStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  };

  const responsiveWrapper = {
    overflowX: "auto",
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ marginBottom: "20px" }}>Contact Form Responses</h2>
      <div style={responsiveWrapper}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Full Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Mobile</th>
              <th style={thStyle}>City</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ ...tdStyle, textAlign: "center" }}>
                  No contacts found.
                </td>
              </tr>
            ) : (
              contacts.map((c, i) => (
                <tr key={i}>
                  <td style={tdStyle}>{c.fullName}</td>
                  <td style={tdStyle}>{c.email}</td>
                  <td style={tdStyle}>{c.mobile}</td>
                  <td style={tdStyle}>{c.city}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewContacts;
