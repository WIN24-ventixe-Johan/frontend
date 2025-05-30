import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import videoBackground from './images/Ventixevideo.mp4'; 
import './styles/Login.css'; 

const Register = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    if (form.password !== form.confirmPassword) {
      alert("Lösenorden matchar inte!");
      return;
    }

    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      alert('Registrering lyckades! Kolla din e-post för att verifiera ditt konto.');
      navigate('/login');
    } else {
      const msg = await res.text();
      alert(`Något gick fel: ${msg}`);
    }
  };

  return (
    <div className="login-wrapper">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={videoBackground} type="video/mp4" />
      </video>

      <div className="login-container">
        <div className="login-box">
          <h2>Skapa konto</h2>

          <div className="login-boxes">
            <input
              name="firstName"
              placeholder="Förnamn"
              value={form.firstName}
              onChange={handleChange}
              className="login-input"
              required
            />
            <input
              name="lastName"
              placeholder="Efternamn"
              value={form.lastName}
              onChange={handleChange}
              className="login-input"
              required
            />
            <input
              name="email"
              placeholder="E-post"
              value={form.email}
              onChange={handleChange}
              className="login-input"
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Lösenord"
              value={form.password}
              onChange={handleChange}
              className="login-input"
              required
            />
            <input
              name="confirmPassword"
              type="password"
              placeholder="Bekräfta lösenord"
              value={form.confirmPassword}
              onChange={handleChange}
              className="login-input"
              required
            />

            <button onClick={handleRegister} className="login-btn">
              Registrera
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
