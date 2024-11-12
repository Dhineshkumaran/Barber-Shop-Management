import React, { useEffect, useState } from "react";

function Appointments() {
  const [appointments, setAppointments] = useState([]);

  // Fetch appointments from the API
  useEffect(() => {
    async function fetchAppointments() {
      try {
        const response = await fetch("http://localhost:5000/getappointments");
        const data = await response.json();
        console.log(data);
        
        setAppointments(data); // Assuming the API returns an array of appointments
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    }

    fetchAppointments();
  }, []);

  return (
    <div className="appointment-container" style={{ padding: "20px" }}>
      <h2>Appointments List</h2>
      {appointments.length > 0 ? (
        <div className="appointments-list" style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {appointments.map((appointment) => (
            <div key={appointment._id} className="appointment-card" style={cardStyles}>
              <h3>{appointment.name}</h3>
              <p><strong>Email:</strong> {appointment.email_address}</p>
              <p><strong>Services:</strong> {appointment.category}</p>
              <p><strong>Gender:</strong> {appointment.gender}</p>
              <p><strong>Date:</strong> {appointment.date || "Not scheduled"}</p>
              <p><strong>Time:</strong> {appointment.time || "Not scheduled"}</p>
              <p><strong>Payment Status:</strong> {appointment.isPaid ? "Paid" : "Pending"}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No appointments found.</p>
      )}
    </div>
  );
}

// Inline styles for card
const cardStyles = {
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "15px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  width: "250px",
};

export default Appointments;
