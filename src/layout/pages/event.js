import React, { useState } from "react";
import "../../css/event.css";

const Event = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    ticketType: "",
    ticketQuantity: 1,
    notes: "",
    image: null,
  });

  const [dragOver, setDragOver] = useState(false);

  const onNext = () => {
    // Prevent moving forward without required fields
    if (step === 2 && (!userData.name || !userData.email)) {
      alert("Please enter your name and email.");
      return;
    }
    if (step < 3) setStep((prevStep) => prevStep + 1);
  };

  const onBack = () => {
    if (step > 1) setStep((prevStep) => prevStep - 1);
  };

  const handleImageUpload = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prevData) => ({ ...prevData, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="main">
      <div className="card ">
        <div className="progress-container container-fluid ">
          <div className="progress-header">
            <h2>
              {step === 1
                ? "Ticket Selection"
                : step === 2
                  ? "Attendee Details"
                  : "Ready"}
            </h2>
            <span>Step {step}/3</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="card-body col-sm-4 col-md-6">
          {step === 1 && (
            <>
              <div className="event-info">
                <h2>Techember Fest '25</h2>
                <p>Join us for an unforgettable experience at <br />Techember Fest ”25! Secure your spot now.</p>
                <p>📍 04 Rumens road, Ikoyi, Lagos | March 15, 2025 | 7:00 PM</p>
              </div>
              <div className="divider"></div>

              <h4>Select Ticket Type:</h4>
              <div className="ticket-options">
                {["free", "vip", "vvip"].map((type) => (
                  <div
                    key={type}
                    className={`ticket ${selectedTicket === type ? "selected" : ""}`}
                    onClick={() => {
                      setSelectedTicket(type);
                      setUserData((prevData) => ({ ...prevData, ticketType: type }));
                    }}
                  >
                    <h3>{type === "free" ? "Free" : "$150"}</h3>
                    <p>{type.toUpperCase()} ACCESS</p>
                    <p>20/52</p>
                  </div>
                ))}
              </div>

              <h4>Number of Tickets</h4>
              <div className="select-box">
                <select
                  value={userData.ticketQuantity}
                  onChange={(e) =>
                    setUserData((prevData) => ({
                      ...prevData,
                      ticketQuantity: parseInt(e.target.value),
                    }))
                  }
                >
                  {[1, 2, 3].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <div className="button-group d-flex justify-content-between mt-3">
                <button className="button cancel">Cancel</button>
                <button className="button next" onClick={onNext}>
                  Next
                </button>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="attendee-form">
                <div className="innerForm">
                  <h2>Upload Profile Photo</h2>

                  <div className="upload-container">

                    <div
                      className={`upload-area ${dragOver ? "drag-over" : ""}`}
                      onDragOver={(e) => {
                        e.preventDefault();
                        setDragOver(true);
                      }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setDragOver(false);
                        handleImageUpload(e.dataTransfer.files[0]);
                      }}
                      onClick={() => document.getElementById("imageUpload").click()}
                    >
                      {userData.image ? (
                        <img src={userData.image} alt="Uploaded" className="uploaded-image img-fluid" />
                      ) : (
                        <p>📤 Drag & drop or click to upload</p>
                      )}
                    </div>
                  </div>
                </div>
                <input
                  type="file"
                  id="imageUpload"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => handleImageUpload(e.target.files[0])}
                />

                <div className="upload-divider"></div>

                <label>Enter your name:</label>
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData((prevData) => ({ ...prevData, name: e.target.value }))
                  }
                />

                <label>Enter your email:</label>
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData((prevData) => ({ ...prevData, email: e.target.value }))
                  }
                />

                <label>Special Requests:</label>
                <textarea
                  value={userData.notes}
                  onChange={(e) =>
                    setUserData((prevData) => ({ ...prevData, notes: e.target.value }))
                  }
                  placeholder="Textarea"
                ></textarea>

                <div className="button-group d-flex justify-content-between mt-3">
                  <button className="button-back" onClick={onBack}>
                    Back
                  </button>
                  <button className="button-next" onClick={onNext}>
                    Get My Free Ticket
                  </button>
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <div className="container-fluid d-flex ms-auto justify-content-center ticket-container">
             
              <h2 className="confirmation-title">Your Ticket is Booked!</h2>
              <p className="confirmation-text">
                Check your email for a copy or <span className="highlight">download</span> your ticket.
              </p>

              <div className="ready-ticket">
            
                <div className="innerTicketContainer border-green ">

                  <h3 className="event-title">Techember Fest '25</h3>
                  <p className="event-location">📍 04 Rumens road, Ikoyi, Lagos</p>
                  <p className="event-time">📅 March 15, 2025 | 7:00 PM</p>

                  <div className="ticket-body">
                    {userData.image ? (
                      <img src={userData.image} alt="User Avatar" className="avatar img-fluid" />
                    ) : (
                      <img src="/path-to-avatar.png" alt="User Avatar" className="avatar img-fluid" />
                    )}
                    <div className="attendee-details">
                      <table className="table-responsive">
                        <tbody>
                          <tr><td><strong>Enter your name:</strong></td><td>{userData.name || "N/A"}</td></tr>
                          <tr><td><strong>Enter your email:</strong></td><td>{userData.email || "N/A"}</td></tr>
                          <tr><td><strong>Ticket Type:</strong></td><td>{userData.ticketType || "General"}</td></tr>
                          <tr><td><strong>Number of Tickets:</strong></td><td>{userData.ticketQuantity || 1}</td></tr>
                          <tr><td><strong>Special Requests:</strong></td><td>{userData.notes || "None"}</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="barcode">
                    <img src="./code.png" alt="Barcode" className="barcode-img" />
                  </div>
                </div>
              </div>

              <div className="button-group d-flex justify-content-between mt-3">
                <button className="new-button" onClick={onBack}>
                  Book Another Ticket
                </button>
                <button className="download-button" onClick={() => alert("Downloading ticket...")}>
                  Download Ticket
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Event;
