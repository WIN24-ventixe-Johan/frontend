import {NavLink} from 'react-router-dom'
import { logout } from './authService'
import { useNavigate } from 'react-router-dom'
import './styles/App.css'
import './styles/Nav.css'
import {FaCalendarAlt,FaSignOutAlt,FaEnvelope,FaImage, FaClipboardList,  FaTicketAlt,  FaInbox,  FaUsers,  FaChartBar} from 'react-icons/fa';
import Ventixe from './images/Ventixe.svg'

const Nav = () => {

  const navigate = useNavigate();

    const handleLogout = () => {
        logout()
        navigate("/login")
    }

  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <img src={Ventixe} className="ventixe-logo"></img>
        <h2 className="logo">Ventixe</h2>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/dashboard"><FaClipboardList /> Dashboard</NavLink></li>
        <li><NavLink to="/bookings"><FaTicketAlt /> Bookings</NavLink></li>
        <li><NavLink to="/invoices"><FaEnvelope /> Invoices</NavLink></li>
        <li><NavLink to="/inbox"><FaInbox /> Inbox</NavLink></li>
        <li><NavLink to="/calendar"><FaCalendarAlt /> Calendar</NavLink></li>
        <li><NavLink to="/events"><FaUsers /> Events</NavLink></li>
        <li><NavLink to="/financials"><FaChartBar /> Financials</NavLink></li>
        <li><NavLink to="/gallery"><FaImage /> Gallery</NavLink></li>
        <li><NavLink to="/feedback"><FaEnvelope /> Feedback</NavLink></li>
      </ul>
      <div className="signout-section">
        <button className="signout-btn" onClick={handleLogout}><FaSignOutAlt /> Sign Out</button>
      </div>
    </nav>
  );
};

export default Nav