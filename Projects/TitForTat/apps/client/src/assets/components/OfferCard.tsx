import React from 'react';

interface OfferCardProps {
  user: string;
  offer: string;
  want: string;
  onView?: () => void;
}

const OfferCard: React.FC<OfferCardProps> = ({ user, offer, want, onView }) => (
  <div
    className="offer-card"
    style={{
      minHeight: 180,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}
  >
    <div>
      <h3 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span role="img" aria-label="offer">
          💡
        </span>{' '}
        {offer}
      </h3>
      <p>
        <strong>Wants:</strong> <span style={{ color: '#4A90E2' }}>{want}</span>
      </p>
      <p style={{ fontSize: '0.95rem', color: '#aaa' }}>
        <strong>Posted by:</strong> {user}
      </p>
    </div>
    <button
      style={{
        marginTop: '1rem',
        background: 'linear-gradient(90deg, #4A90E2 0%, #66a6ff 100%)',
        color: '#fff',
        border: 'none',
        borderRadius: '0.5rem',
        padding: '0.6rem 1.2rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'background 0.2s',
      }}
      onClick={onView}
    >
      View
    </button>
  </div>
);

export default OfferCard;