const apiUrl = import.meta.env.VITE_API_URL;

export async function login(email, password) {
  try {
    const res = await fetch(`${apiUrl}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) return false;

    const data = await res.json();
    localStorage.setItem('token', data.token);
    localStorage.setItem('isLoggedIn', 'true');
    return true;
  } catch (err) {
    console.error('Login failed', err);
    return false;
  }
}

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('isLoggedIn');
};

export const isLoggedIn = () => {
  return localStorage.getItem('isLoggedIn') === 'true';
};

export const getToken = () => {
  return localStorage.getItem('token');
};
