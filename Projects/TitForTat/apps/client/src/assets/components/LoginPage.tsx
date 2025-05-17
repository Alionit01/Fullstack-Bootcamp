import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext'; // <-- import your context hook
import './AuthForm.css';

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { user, login } = useAuth(); // <-- use context

  useEffect(() => {
    if (user) {
      navigate('/dashboard'); // if already logged in, redirect
    }
  }, [navigate, user]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    setSubmitted(true);

    // Simulate login (replace with real API call)
    login({ name: 'Demo User', email: form.email }, 'demo-token');
    navigate('/dashboard');
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
          autoComplete="username"
          required
        />
        <label htmlFor="password">Password</label>
        <div style={{ position: 'relative' }}>
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
            style={{ width: '100%' }}
          />
          <span
            onClick={() => setShowPassword((v) => !v)}
            style={{
              position: 'absolute',
              right: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: '#888',
              fontSize: '0.9rem'
            }}
            title={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>
        {error && <div style={{ color: '#ff4d4f', marginTop: '0.5rem' }}>{error}</div>}
        <button type="submit">Log In</button>
        <div style={{ marginTop: '1rem', textAlign: 'center', color: '#aaa' }}>
          Don't have an account?{' '}
          <Link to="/" style={{ color: '#66a6ff', textDecoration: 'underline' }}>
            Sign Up
          </Link>
        </div>
        {submitted && <div className="auth-success">Login submitted!</div>}
      </form>
    </div>
  );
}


