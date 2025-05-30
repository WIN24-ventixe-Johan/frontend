
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom'

import '../components/styles/App.css'


const PortalLayout = () => {
  return (
    <div className="portal-wrapper">
      <Nav />
      <Header />
      <div className="main-area">
          <Outlet />
      </div>
      <Footer />
    </div>

  )
}

export default PortalLayout