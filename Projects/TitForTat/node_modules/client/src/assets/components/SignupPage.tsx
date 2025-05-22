import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../auth/AuthContext';
import './AuthForm.css';

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { user, login } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [navigate, user]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    setSubmitted(true);

    try {
      const res = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || 'Signup failed');
      }
      const data = await res.json();
      login(data.user, data.token);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Signup failed. Please try again.');
      setSubmitted(false);
    }
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
          required
        />
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
            autoComplete="new-password"
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
        <button type="submit" disabled={submitted}>Sign Up</button>
        <div style={{ marginTop: '1rem', textAlign: 'center', color: '#aaa' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: '#66a6ff', textDecoration: 'underline' }}>
            Log In
          </Link>
        </div>
        {submitted && <div className="auth-success">Signup submitted!</div>}
      </form>
    </div>
  );
}
