import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

    const Verify = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const params = new URLSearchParams(location.search);
    const email = params.get('email');
    const token = params.get('token');

    useEffect(() => {
        const verifyEmail = async () => {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/verify`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, token })
                });

            if (res.ok) {
                navigate('/login?verified=true');
            } else {
                alert("Verifikationen misslyckades");
                navigate('/login');
            }
        };

        if (email && token) {
            verifyEmail();
        }
    }, [email, token, navigate]);

  return (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h2>Verifierar din e-postadress...</h2>
    <p>Vänligen vänta ett ögonblick.</p>
  </div>
);
};
    export default Verify;