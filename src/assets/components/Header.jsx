import avatar from './images/avatar.jpg'
import './styles/App.css'
import './styles/header.css'

const Header = () => {

    return (
        <header>
            <div className="header-content">
                <h3>
                    <span className="page-title">Dashboard</span> / Events
                </h3>
                <div className="login-content">
                    <img src={avatar} className="avatar-image"></img>
                    <h2 className="user-title">Orlando Laurentius</h2>
                    <h4>Admin</h4>
                </div>
            </div>
        </header>
    )
}

export default Header