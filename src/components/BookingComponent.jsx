import React, { useState } from "react";
import { locations, onCallDoctors, userDetails } from "../users";
import { useNavigate } from "react-router-dom";

export default function BookingComponent({ onBooking }) {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const navigate = useNavigate();
  console.log(selectedLocation);
  console.log(selectedDoctor);
  const handleBooking = () => {
    onBooking(selectedLocation, selectedDoctor);
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>Book a Ride and Doctor</h2>
      <div>
        <label>Select Location:</label>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">Select Location</option>
          {locations.map((location) => (
            <option key={location.name} value={location.name}>
              {location.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Doctor:</label>
        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
        >
          <option value="">Select Doctor</option>
          {onCallDoctors.map((doctor, idx) => (
            <option key={idx} value={doctor.name}>
              {doctor.name}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleBooking}
        disabled={!selectedLocation || !selectedDoctor}
      >
        Book
      </button>
    </div>
  );
}
