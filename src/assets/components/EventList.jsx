
import EventItem from './EventItem'
import '../components/styles/events.css'

const EventList = ({ events, onDelete }) => {

 return (
  <div className="event-grid">
    {events.map(evt => (
      <EventItem key={evt.id} item={evt} onDelete={onDelete} />
    ))}
  </div>
  )
}

export default EventList
