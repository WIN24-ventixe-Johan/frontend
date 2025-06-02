
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../components/styles/bookingform.css'

const BookingEventPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [event, setEvent] = useState([])
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState
    ({
      eventId: id,
      firstName: '',
      lastName: '',
      email: '',
      streetName: '',
      postalCode: '',
      city: '',
      ticketQuantity: 1
    })

  useEffect(() => {
    getEvents()
  }, [])


  const getEvents = async () => {
    try {
      const res = await fetch(`https://cloud-eventservice-f3fcgse9c3h7hcdf.swedencentral-01.azurewebsites.net/api/events/${id}`)
      if (!res.ok) throw new Error("Failed to fetch event")

      const data = await res.json()
      setEvent(data.result)
    } catch (err) {
      console.error(err)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch(`https://cloud-bookingservice-efdaf3dzd8cwgud4.swedencentral-01.azurewebsites.net/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (!res.ok) {
        console.error("Booking failed")
      } else {
        
        setToastMessage("Bokningen är skickad och bekräftelsemail har skickats!")
        setShowToast(true);
        
        setTimeout(() => {
          setShowToast(false);
          navigate('/events') 
        }, 3000);
      }
    } catch (err) {
      console.error("Error submitting booking", err)
    }
  }


  return (
    <div className="bookingform-page">
      <div className="bookingform">
      <h1>Book event - {event.title}</h1>
      <form className="bookevent" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Street</label>
          <input type="text" name="streetName" value={formData.streetName} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Postal Code</label>
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>City</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn-submit">Book Now</button>
      </form>
    </div >
    {showToast && (
  <div style={{
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'rgba(0,0,0,0.7)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    zIndex: 9999,
    boxShadow: '0 0 10px rgba(0,0,0,0.5)'
  }}>
    {toastMessage}
  </div>
)}
    </div>


  )
}

export default BookingEventPage