
import { Link } from 'react-router-dom';
import defaultEventImage from './images/defaultEventImage.jpg'

const EventItem = ({ item, onDelete }) => {

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!window.confirm('Vill du verkligen ta bort eventet?')) return;

    try {
      const res = await fetch(
        `https://cloud-eventservice-f3fcgse9c3h7hcdf.swedencentral-01.azurewebsites.net/api/events/${item.id}`,
        { method: 'DELETE' }
      );
      if (!res.ok) {
        console.error('Delete failed:', res.status, await res.text());
        alert('Kunde inte ta bort eventet.');
        return;
      }
      onDelete(item.id);
    } catch (err) {
      console.error('Error deleting event:', err);
      alert('Något gick fel vid borttagning.');
    }
  };


  return (
    <div className="event-card">
      <Link to={`/events/${item.id}`} className="event-card-content">

        <div
          className="event-image-placeholder"
          style={{
            backgroundImage: `url(${item.image || defaultEventImage})`
          }}
        />
        <p className="event-date">
          {new Date(item.eventDate).toLocaleDateString('sv-SE', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}{' – '}{new Date(item.eventDate).toLocaleTimeString('sv-SE', {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>

        <h4 className="event-title">{item.title}</h4>

      </Link>
      <div className="event-footer">
        <p className="event-location"> {item.location}</p>
        <button className="event-delete-btn" onClick={handleDelete}>Ta bort event</button>
      </div>
    </div>

  );
};

export default EventItem;
