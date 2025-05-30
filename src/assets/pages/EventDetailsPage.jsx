import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import '../components/styles/EventDetailsPage.css'
const EventDetailsPage = () => {
  
  const {id} = useParams()

   const [event, setEvent] = useState([])
    
  
    const getEvent = async () => {
      const res = await fetch(`https://cloud-eventservice-f3fcgse9c3h7hcdf.swedencentral-01.azurewebsites.net/api/events/${id}`)
  
      if (res.ok) {
        const response = await res.json()
        setEvent(response.result)
      }
    }
  
    useEffect (() => {
    getEvent()
    }, [])
  
    return (
    <div className="event-details-wrapper">
      <img src={event.image} alt={event.title} className="event-image" />
      <div className="event-content">
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <Link to={`/events/booking/${id}`} className="book-now-btn">
          Boka nu
        </Link>
      </div>
    </div>
  )
}

export default EventDetailsPage