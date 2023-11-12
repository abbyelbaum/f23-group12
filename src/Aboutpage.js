import React, { useState } from "react";
import {redirect } from "react-router-dom"

function AboutPage({ formData, setFormData, setEvents, events }) {
  const [showFormData, setShowFormData] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setShowFormData(true);
    // update Events array to include the new event

    const newEvent = {
      name: formData.name,
      location: formData.location,
      eventType: formData.eventType,
      textArea: formData.textAreas,
    }

    setEvents([...events, newEvent])

    
    // reset form (Set all teh values in the form to "")
    setFormData({
      name: "",
      location: "",
      eventType: "",
      textArea: ""
    })

    return redirect("/")
    
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <center>
          <header>
            <big>Upload Your Own Event!!</big>
          </header>
          <label>
            Name of the Event:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="event-type">Choose Your Event Type:</label>
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleInputChange}
          >
            <option value=""></option>
            <option value="Club">Club</option>
            <option value="Frat">Frat</option>
            <option value="Food-And-Drink">Food and Drink</option>
            <option value="Concert">Concert</option>
            <option value="Other">Other</option>
          </select>
          <br />
          Description:
          <textarea
            name="textArea"
            description="description"
            cols="50"
            rows="10"
            value={formData.textArea}
            onChange={handleInputChange}
          ></textarea>
          <br />
          <button type="submit">Create!</button>
        </center>
      </form>

      {/* {showFormData && (
        <div>
          <h2>Form Data</h2>
          <p>Name: {formData.name}</p>
          <p>Location: {formData.location}</p>
          <p>Event Type: {formData.eventType}</p>
          <p>Description: {formData.textArea}</p>
        </div>
      )} */}
    </div>
  );
}

export default AboutPage;
