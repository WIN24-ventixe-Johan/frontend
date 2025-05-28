// Events.jsx
import { useState, useEffect } from 'react';
import './styles/App.css'
import './styles/events.css'
import EventList      from './EventList';
import AddEventForm   from './AddEventForm';

const Events = () => {
  const [events, setEvents]     = useState([]);
  const [showForm, setShowForm] = useState(false);
 

  const fetchEvents = async () => {
    try {
      const res  = await fetch(
        'https://cloud-eventservice-f3fcgse9c3h7hcdf.swedencentral-01.azurewebsites.net/api/events'
      );
      if (!res.ok) throw new Error(res.statusText);

      const data = await res.json();
      
      setEvents(data.result);
    } catch (err) {
      console.error('Kunde inte hämta events:', err);
    }
  };

  
  useEffect(() => {
    fetchEvents();
  }, []);

  
  const AddEvent = newEvent => {
    
    setEvents(prev => [newEvent, ...prev]);
    setShowForm(false);
  };

  const handleDeleteEvent = id => {
    setEvents(prev => prev.filter(evt => evt.id !== id));
  }

  return (
    <section className="event-page">
      <button className="add-event-btn" onClick={() => setShowForm(true)}>Lägg till event</button>

      {showForm && (
        <AddEventForm
          onAddEvent={AddEvent}
          onCancel={() => setShowForm(false)}
        />
      )}

      <div className="event-list">
        <EventList events={events} onDelete={handleDeleteEvent} />
      </div>
    </section>
  );
};

export default Events;
