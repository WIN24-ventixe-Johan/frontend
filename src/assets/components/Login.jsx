import { useNavigate } from 'react-router-dom';
import { login } from './authService';
import './styles/Login.css';
import videoBackground from './images/loginvideo.mp4'; 

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/events');
  };

  return (
    <div className="login-container">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={videoBackground} type="video/mp4" />
      </video>

      <div className="login-box">
        <h2>Välkommen tillbaka</h2>
        <p>Logga in som admin för att fortsätta</p>
        <button onClick={handleLogin} className="login-btn">
          Logga in som admin
        </button>
      </div>
    </div>
  );
};

export default Login;
