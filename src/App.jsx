import '../src/assets/components/styles/App.css'
import { Routes, Route } from 'react-router-dom'
import PortalLayout from './assets/layouts/PortalLayout'
import BookingEventPage from './assets/pages/BookingEventPage'
import Events from './assets/components/Events'
import EventDetailsPage from './assets/pages/EventDetailsPage'
import Login from './assets/components/Login'


function App() {


  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PortalLayout />}>
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetailsPage />} />
          <Route path="/events/booking/:id" element={<BookingEventPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
