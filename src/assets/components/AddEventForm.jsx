import { useState } from 'react';
import currentDateTime from './helpers.js'

const AddEventForm = ({ onAddEvent, onCancel }) => {
 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(currentDateTime);   
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');

 
  const handleSubmit = async e => {
    e.preventDefault();

    const payload = {
      image,
      description,
      title,
      eventDate: date,  
      location
    };

    try {
      const res = await fetch(
        'https://cloud-eventservice-f3fcgse9c3h7hcdf.swedencentral-01.azurewebsites.net/api/events',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        }
      );
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`${res.status}: ${text}`);
      }

      const created = await res.json(); 
      onAddEvent(created);
      onCancel();         
    } catch (err) {
      console.error('Kunde inte spara event:', err);
    }
  };

  return (
    <form className="add-event-form" onSubmit={handleSubmit}>
      <h3>Lägg till nytt event</h3>

      <label>
        Titel
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </label>

      <label>
        Beskrivning
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </label>

      <label>
        Datum & tid
        <input
          type="datetime-local"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />
      </label>

      <label>
        Plats
        <input
          type="text"
          value={location}
          onChange={e => setLocation(e.target.value)}
          required
        />
      </label>

      <label>
        Bild-URL
        <input
          type="text"
          value={image}
          onChange={e => setImage(e.target.value)}
          placeholder="https://exempel.se/bild.jpg"
        />
      </label>

      <div className="form-buttons">
        <button type="submit">Spara</button>
        <button type="button" onClick={onCancel}>Avbryt</button>
      </div>
    </form>
  );
};

export default AddEventForm;