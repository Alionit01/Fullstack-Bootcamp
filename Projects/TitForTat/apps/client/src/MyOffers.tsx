import { useState } from 'react';
import Navbar from './assets/components/Navbar';
import OfferCard from './assets/components/OfferCard';
import './Dashboard.css';

const allOffers = [
  { id: 1, user: 'Alice', offer: 'Web Design', want: 'Guitar Lessons' },
  { id: 2, user: 'Bob', offer: 'Math Tutoring', want: 'Cooking Skills' },
  { id: 3, user: 'Alice', offer: 'Logo Design', want: 'Yoga Instruction' },
];

const currentUser = 'Alice'; // Replace with real user logic

export default function MyOffers() {
  const [viewOffer, setViewOffer] = useState<null | typeof allOffers[0]>(null);
  const myOffers = allOffers.filter((o) => o.user === currentUser);

  return (
    <div className="dashboard-bg">
      <Navbar />
      <div className="dashboard-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h2 style={{ margin: 0 }}>My Offers</h2>
          <button
            style={{
              background: 'linear-gradient(90deg, #4A90E2 0%, #66a6ff 100%)',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              padding: '0.6rem 1.2rem',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '1rem',
            }}
            onClick={() => alert('Show create offer modal!')}
          >
            + Create Offer
          </button>
        </div>
        <div className="offers-grid">
          {myOffers.length ? (
            myOffers.map((o) => (
              <OfferCard
                key={o.id}
                {...o}
                onView={() => setViewOffer(o)}
              />
            ))
          ) : (
            <div style={{ color: '#aaa', textAlign: 'center', width: '100%' }}>
              <div style={{ fontSize: 48, marginBottom: 8 }}>🗂️</div>
              <div>You have not posted any offers yet.</div>
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
                onClick={() => alert('Show create offer modal!')}
              >
                + Create Offer
              </button>
            </div>
          )}
        </div>
        {/* Simple modal for viewing offer details */}
        {viewOffer && (
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999
          }}>
            <div style={{
              background: '#232526', color: '#e0e0e0', borderRadius: 12, padding: 32, minWidth: 320, boxShadow: '0 8px 32px rgba(0,0,0,0.35)'
            }}>
              <h3 style={{ marginTop: 0, color: '#4A90E2' }}>{viewOffer.offer}</h3>
              <p><strong>Wants:</strong> {viewOffer.want}</p>
              <p><strong>Posted by:</strong> {viewOffer.user}</p>
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
    </div>
  );
}