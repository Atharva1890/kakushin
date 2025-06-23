// Organizer.js
import React, { useState } from 'react';
import './Organizer.css';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, PieChart, Pie, Cell, Legend
} from 'recharts';

const wasteData = [
  { name: 'Juhu', waste: 180 },
  { name: 'Versova', waste: 140 },
  { name: 'Girgaon', waste: 110 },
  { name: 'Dadar', waste: 90 }
];

const pieData = [
  { name: 'Plastic', value: 220 },
  { name: 'Glass', value: 80 },
  { name: 'Metal', value: 70 },
  { name: 'Organic', value: 150 }
];

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50'];

const OrganizerPage = () => {
  const [eventData, setEventData] = useState({
    name: '',
    date: '',
    location: '',
    time: '',
    description: ''
  });

  const handleInputChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };

  const handleCreateEvent = () => {
    if (Object.values(eventData).some(val => !val)) {
      alert('Please fill all fields.');
      return;
    }
    alert('Event Created Successfully!');
    console.log(eventData);
  };

  return (
    <div className="organizer-container">
      <header className="organizer-header">
        <h1>Organizer</h1>
        <nav>
          <a href="#create">Create Event</a>
          <a href="#attendance">Attendance</a>
          <a href="#analytics">Analytics</a>
          <a href="#ai">AI Reports</a>
        </nav>
      </header>

      <section id="create" className="organizer-card">
        <h2>Create New Event</h2>
        <div className="form-grid">
          <input name="name" placeholder="Event Name" onChange={handleInputChange} />
          <input type="date" name="date" onChange={handleInputChange} />
          <input name="location" placeholder="Location" onChange={handleInputChange} />
          <input type="time" name="time" onChange={handleInputChange} />
        </div>
        <textarea name="description" placeholder="Event Description" onChange={handleInputChange}></textarea>
        <button className="btn-gradient" onClick={handleCreateEvent}>Create Event</button>
      </section>

      <section id="attendance" className="organizer-card">
        <h2>Track Attendance</h2>
        <p>Use the event dashboard to view volunteer sign-ins and validate attendance via QR scan logs.</p>
        <ul className="mock-attendance">
          <li>Juhu Beach - 132 Volunteers Signed In</li>
          <li>Versova Beach - 85 Volunteers Signed In</li>
        </ul>
      </section>

      <section id="analytics" className="organizer-card">
        <h2>Waste & Impact Analytics</h2>
        <div className="chart-grid">
          <div className="chart-box">
            <h4>Waste Collected per Beach (kg)</h4>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={wasteData} margin={{ top: 20, right: 30, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" label={{ value: 'Beach', position: 'bottom', offset: 20 }} />
                <YAxis label={{ value: 'Waste (kg)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="waste" fill="#4e54c8" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-box">
            <h4>Types of Waste Collected</h4>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

      <section id="ai" className="organizer-card">
        <h2>AI Reports & Social Content</h2>
        <p><strong>Summary:</strong> 250 volunteers helped clean 4 beaches, collecting 520 kg waste. Great impact on marine health 🌊.</p>
        <p><strong>Instagram Post Caption:</strong><br />
          🧹🌍 250 volunteers. 520 kg waste. 4 beaches. <br />
          Together, we made waves of change! 💪💙 #BeachBuddy #CleanCoast #EcoWarriors
        </p>
        <button className="btn-gradient">Download Report</button>
        <button className="btn-gradient">Copy Caption</button>
      </section>
    </div>
  );
};

export default OrganizerPage;
