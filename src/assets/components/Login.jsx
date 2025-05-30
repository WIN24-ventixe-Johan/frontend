import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { login } from './authService';
import './styles/Login.css';
import videoBackground from './images/Ventixevideo.mp4';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const isVerified = params.get('verified') === 'true';

  const handleLogin = async () => {
    const success = await login(email, password);
    if (success) {
      navigate("/events");
    } else {
      alert("Felaktig e-post, lösenord eller icke-verifierad e-post");
    }
  };

   return (
    <div className="login-wrapper">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={videoBackground} type="video/mp4" />
      </video>

      <div className="login-container">
        <div className="login-box">
          {isVerified && (
            <p className="verified-message">✅ Ditt konto är nu verifierat! Du kan logga in.</p>
          )}

          <h2>Välkommen tillbaka</h2>
          <p>Logga in som admin för att fortsätta</p>

          <div className="login-boxes">
            <input
              type="email"
              placeholder="E-post"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
            />

            <input
              type="password"
              placeholder="Lösenord"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <button onClick={handleLogin} className="login-btn">
              Logga in som admin
            </button>
          </div>

          <p className="register-account">
            Har du inget konto?
            <span className="create-account-here">
              <Link to="/register">Skapa ett konto här!</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
