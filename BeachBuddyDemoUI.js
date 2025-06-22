import React from 'react';
import './App.css'; // Ensure this file exists for styles

function BeachBuddyDemo() {
  return (
    <div className="App">
      <header>
        <div className="logo" aria-label="Beach Buddy Platform Logo">Beach Buddy</div>
        <nav role="navigation" aria-label="Main Navigation">
          <a href="#events">Events</a>
          <a href="#volunteer">Volunteer</a>
          <a href="#organizer">Organizer</a>
          <a href="#rewards">Rewards</a>
          <a href="/auth">Login/Signup</a>
        </nav>
      </header>

      <main>
        <Section 
          id="events" 
          title="Event Discovery" 
          icon="event" 
          imgSrc="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/622058fe-e4fa-4e12-8347-5fb1dcbbb69c.png" 
          description="Easily discover and filter upcoming beach clean-up events by location and date on our smart interactive map." 
          buttonText="Find Events" 
        />

        <Section 
          id="volunteer" 
          title="Volunteer Registration" 
          icon="person_add" 
          imgSrc="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d34c7603-a1bf-4849-b682-1b9d845a752c.png" 
          description="Register quickly and securely for any available event, check in onsite via QR code, and log your waste collection contributions." 
          buttonText="Register Now" 
        />

        <Section 
          id="organizer" 
          title="Organizer Tools" 
          icon="dashboard" 
          imgSrc="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9444f881-a8f3-45c1-9baa-cff5f2e7c4c8.png" 
          description="Manage events, track volunteer registrations and attendance, and access real-time analytics on waste collected and impact metrics." 
          buttonText="Manage Events" 
        />

        <Section 
          id="rewards" 
          title="Rewards & Community" 
          icon="card_giftcard" 
          imgSrc="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a53f5858-1c17-4558-b3d9-417ea6de07b5.png" 
          description="Earn points through participation and educational modules, then redeem brand partner vouchers and discounts. Connect with fellow volunteers to share your impact stories." 
          buttonText="View Rewards" 
        />
      </main>

      <footer>
        &copy; 2025 Beach Buddy Platform — Empowering Coastal Conservation
      </footer>
    </div>
  );
}

function Section({ id, title, icon, imgSrc, description, buttonText }) {
  return (
    <section id={id} className="card" aria-label={title}>
      <h2>
        <span className="material-icons" aria-hidden="true" style={{ verticalAlign: 'middle' }}>{icon}</span> 
        {title}
      </h2>
      <div className="img-placeholder">
        <img src={imgSrc} alt={`Image for ${title}`} />
      </div>
      <p>{description}</p>
      <button className="cta-button" type="button">{buttonText}</button>
    </section>
  );
}

export default BeachBuddyDemo;
