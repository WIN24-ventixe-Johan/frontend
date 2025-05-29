import '../src/assets/components/styles/App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import PortalLayout from './assets/layouts/PortalLayout'
import BookingEventPage from './assets/pages/BookingEventPage'
import Events from './assets/components/Events'
import EventDetailsPage from './assets/pages/EventDetailsPage'
import Login from './assets/components/Login'
import Register from './assets/components/Register'
import ProtectedRoute from './assets/components/ProtectedRoute';


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute><PortalLayout /></ProtectedRoute>}>
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetailsPage />} />
          <Route path="/events/booking/:id" element={<BookingEventPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
