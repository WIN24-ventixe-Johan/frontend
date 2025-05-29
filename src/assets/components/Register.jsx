import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        setForm({...form, [e.target.name]: e.target.value })
    };

    const handleRegister = async () => {

        if (form.password !== form.confirmPassword) {
            alert("Lösenorden matchar inte!");
            return;
        }

        const res = await fetch (`${import.meta.env.VITE_API_URL}/api/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(form)

        });

        if (res.ok) {
            alert('Registrering lyckades! Kolla din e-post för att verifiera ditt konto.');
            navigate('/login');
        } else {
            const msg = await res.text();
            alert(`Något gick fel: ${msg}`)
        }
    };

    return (
        <div className='register-container'>
            <h2> Skapa konto</h2>
            <input name="firstName" required placeholder="Förnamn" value={form.firstName} onChange={handleChange} />
            <input name="lastName" required placeholder="Efternamn" value={form.lastName} onChange={handleChange} />
            <input name="email" required placeholder="E-post" value={form.email} onChange={handleChange} />
            <input name="password" required placeholder="Lösenord" value={form.password} type="password" onChange={handleChange} />
            <input name="confirmPassword" required placeholder="Bekräfta lösenord" value={form.confirmPassword} type="password" onChange={handleChange} />

            <button onClick={handleRegister}>Registrera</button>
        </div>
    );
};

export default Register;