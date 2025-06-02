import { useEffect, useState} from 'react';
import avatar from './images/avatar.jpg'
import './styles/App.css'
import './styles/header.css'
import { getToken } from './authService';

const Header = () => {
const [userInfo, setUserInfo] = useState(null);

useEffect(() => {
    const fetchUserInfo = async () => {
        const token = getToken();
        if(!token) return;

        const res = await fetch (`${import.meta.env.VITE_API_URL}/api/register/userinfo`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (res.ok) {
            const data = await res.json();
            setUserInfo(data);
        } else {
            console.error("Kunde inte hämta användare")
        }
    };
    
    fetchUserInfo();
}, []);

    return (
        <header>
            <div className="header-content">
                <h3>
                    <span className="page-title">Dashboard</span> / Events
                </h3>
                <div className="login-content">
                    <img src={avatar} className="avatar-image"></img>
                    <h2 className="user-title">{userInfo && userInfo.name}</h2>
                    <h4>Admin</h4>
                </div>
            </div>
        </header>
    )
}

export default Header