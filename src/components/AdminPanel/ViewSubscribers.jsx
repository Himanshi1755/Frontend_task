import React, { useEffect, useState } from "react";
import { API } from "../../api/api";

function ViewSubscribers() {
  const [subscribers, setSubscribers] = useState([]);

  useEffect(() => {
    API.get("/newsletter")
      .then((res) => setSubscribers(res.data.AllSubscriber || []))
      .catch((err) => console.log("Error fetching subscribers:", err));
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
    backgroundColor: "#4CAF50",
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
      <h2 style={{ marginBottom: "20px" }}>Subscribed Users</h2>
      <div style={responsiveWrapper}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Email Address</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.length === 0 ? (
              <tr>
                <td style={{ ...tdStyle, textAlign: "center" }}>
                  No subscribers found.
                </td>
              </tr>
            ) : (
              subscribers.map((s, i) => (
                <tr key={i}>
                  <td style={tdStyle}>{s.email}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewSubscribers;
