// Volunteer.js
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import QRCode from 'react-qr-code';
import './Volunteer.css';

const VolunteerPage = () => {
  const [formData, setFormData] = useState({
    eventId: '',
    userId: '',
    name: '',
    date: '',
    location: '',
    time: '',
  });
  const [showQR, setShowQR] = useState(false);
  const [photo, setPhoto] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateQRCode = () => {
    const { eventId, userId, name, date, location, time } = formData;
    if (eventId && userId && name && date && location && time) {
      setShowQR(true);
    } else {
      alert('Please fill in all event and user details.');
    }
  };

  return (
    <div className="volunteer-container">
      <header className="volunteer-header">
        <h1>Volunteer</h1>
        <nav>
          <a href="#events">Events</a>
          <a href="#attendance">Attendance</a>
          <a href="#waste">Waste Upload</a>
          <a href="#rewards">Rewards</a>
        </nav>
      </header>

      <section id="events" className="volunteer-card">
        <h2>Register for Beach Clean-up Events</h2>
        <MapContainer center={[19.076, 72.8777]} zoom={11} style={{ height: '350px', borderRadius: '1rem' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[19.11, 72.82]}>
            <Popup>Juhu Beach Clean-up</Popup>
          </Marker>
          <Marker position={[19.14, 72.85]}>
            <Popup>Versova Beach Clean-up</Popup>
          </Marker>
        </MapContainer>
      </section>

      <section id="attendance" className="volunteer-card">
        <h2>Mark Attendance</h2>
        <p>Please enter your Event ID and User ID to verify your registration before QR Code generation.</p>
        <div className="form-grid">
          <input name="eventId" placeholder="Event ID" onChange={handleInputChange} />
          <input name="userId" placeholder="User ID" onChange={handleInputChange} />
          <input name="name" placeholder="Event Name" onChange={handleInputChange} />
          <input type="date" name="date" onChange={handleInputChange} />
          <input name="location" placeholder="Location" onChange={handleInputChange} />
          <input type="time" name="time" onChange={handleInputChange} />
        </div>
        <button className="btn-gradient" onClick={generateQRCode}>Get QR Code</button>

        {showQR && (
          <div className="qr-preview">
            <h4>Scan this QR Code at the event site</h4>
            <QRCode value={JSON.stringify(formData)} size={180} />
          </div>
        )}
      </section>

      <section id="waste" className="volunteer-card">
        <h2>Upload Waste Collection Photo</h2>
        <input type="file" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
        {photo && <p>Photo selected: {photo.name}</p>}
        <p className="note">* Please ensure your GPS is enabled for verification.</p>
      </section>

      <section id="rewards" className="volunteer-card">
        <h2>Rewards & Points</h2>
        <div className="rewards-grid">
          <div className="reward-item">
            <h4>Points Earned</h4>
            <p>🌱 120 EcoPoints</p>
          </div>
          <div className="reward-item">
            <h4>Available Coupons</h4>
            <ul>
              <li>10% off @ EcoMart</li>
              <li>₹50 off at CleanCafe</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerPage;
