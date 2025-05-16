import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {
    localStorage.removeItem('authToken');
    navigate('/login');
  }

  const navStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.7rem 0',
    background: '#18191a', // dark navbar background
    color: '#e0e0e0',
    boxShadow: '0 2px 8px rgba(31, 38, 135, 0.08)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '1200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 auto',
    padding: '0 2rem',
  };

  const logoStyle: React.CSSProperties = {
    fontWeight: 700,
    fontSize: '1.5rem',
    letterSpacing: 2,
    color: '#4A90E2', // blue accent for logo
    textShadow: '0 2px 8px rgba(31,38,135,0.10)',
    fontFamily: 'Segoe UI, Arial, sans-serif',
  };

  const ulStyle: React.CSSProperties = {
    display: 'flex',
    gap: '1.5rem',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  };

  const linkBase: React.CSSProperties = {
    color: '#e0e0e0',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1.07rem',
    padding: '0.4rem 1rem',
    borderRadius: '0.5rem',
    transition: 'background 0.2s, color 0.2s',
  };

  const activeLink: React.CSSProperties = {
    background: '#232526',
    color: '#4A90E2',
    fontWeight: 700,
  };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>TitForTat</div>
        <ul style={ulStyle}>
          <li>
            <Link
              to="/dashboard"
              style={{
                ...linkBase,
                ...(location.pathname === '/dashboard' ? activeLink : {}),
              }}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/my-offers"
              style={{
                ...linkBase,
                ...(location.pathname === '/my-offers' ? activeLink : {}),
              }}
            >
              My Offers
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              style={{
                ...linkBase,
                background: 'rgba(74,144,226,0.12)',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1.07rem',
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}