// src/components/Dashboard.tsx

import  { useState } from 'react';
import { useOffers, type Offer } from './assets/hooks/useOffers';
import Navbar from './assets/components/NavBar';
import './Dashboard.css';
import { useAuth } from './auth/AuthContext';
import { requestTrade } from './assets/api/exhangeApi';

export default function Dashboard() {
  const { offers, loading } = useOffers();
  const { user } = useAuth();
  const [viewOffer, setViewOffer] = useState<Offer | null>(null);

  return (
    <div className="dashboard-bg">
      <Navbar />
      <div className="dashboard-container">
        <h2>All Offers</h2>
        <div className="offers-grid">
          {loading ? (
            <div>Loading...</div>
          ) : offers.length ? (
            offers.map((o) => (
              <div
                key={o.id}
                className="offer-card"
                style={{
                  background: '#232526',
                  color: '#e0e0e0',
                  borderRadius: 12,
                  padding: 24,
                  marginBottom: 16,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                  minWidth: 280,
                  maxWidth: 340,
                  cursor: 'pointer',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
                  Trading: <span style={{ color: '#4A90E2' }}>{o.title}</span>
                </div>
                <div style={{ marginBottom: 8 }}>
                  <strong>Wants:</strong> <span style={{ color: '#66a6ff' }}>{o.want}</span>
                </div>
                <div style={{ fontSize: 14, color: '#aaa', marginBottom: 8 }}>
                  Posted by: {o.user?.name || o.user?.email || 'Unknown'}
                </div>
                <div style={{ marginBottom: 8 }}>
                  <button
                    style={{
                      background: 'linear-gradient(90deg, #4A90E2 0%, #66a6ff 100%)',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '0.5rem',
                      padding: '0.4rem 1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '1rem',
                    }}
                    onClick={() => setViewOffer(o)}
                  >
                    View
                  </button>
                  {o.userId !== user?.id && (
                    <button
                      style={{
                        background: 'linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)',
                        color: '#232526',
                        border: 'none',
                        borderRadius: '0.5rem',
                        padding: '0.4rem 1rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        fontSize: '1rem',
                        marginLeft: 8,
                      }}
                      onClick={async () => {
                        await requestTrade(o.id, user.id);
                        alert('Trade request sent!');
                      }}
                    >
                      Request Trade
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div>No offers yet.</div>
          )}
        </div>
      </div>
      {viewOffer && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
          }}
          onClick={() => setViewOffer(null)}
        >
          <div
            style={{
              background: '#232526',
              color: '#e0e0e0',
              borderRadius: 12,
              padding: 32,
              minWidth: 320,
              boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ marginTop: 0, color: '#4A90E2' }}>{viewOffer.title}</h3>
            <p>
              <strong>Description:</strong> {viewOffer.description}
            </p>
            <p>
              <strong>Wants:</strong> {viewOffer.want}
            </p>
            <button
              style={{
                marginTop: 16,
                background: 'linear-gradient(90deg, #4A90E2 0%, #66a6ff 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.6rem 1.2rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '1rem',
              }}
              onClick={() => setViewOffer(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
