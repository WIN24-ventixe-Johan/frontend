import '../src/assets/components/styles/App.css'
import { Routes, Route } from 'react-router-dom'
import PortalLayout from './assets/layouts/PortalLayout'
import BookingEventPage from './assets/pages/BookingEventPage'
import Events from './assets/components/Events'
import EventDetailsPage from './assets/pages/EventDetailsPage'


function App() {


  return (
    <>
      <Routes>
        <Route element={<PortalLayout />}>
          <Route path="/" element={<Events />} />
          <Route path="/events/:id" element={<EventDetailsPage />} />
          <Route path="/events/booking/:id" element={<BookingEventPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
