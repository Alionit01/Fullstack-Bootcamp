import Navbar from './assets/components/Navbar';
import './Dashboard.css';

const allOffers = [
  { id: 1, user: 'Alice', offer: 'Web Design', want: 'Guitar Lessons' },
  { id: 2, user: 'Bob', offer: 'Math Tutoring', want: 'Cooking Skills' },
  { id: 3, user: 'Alice', offer: 'Logo Design', want: 'Yoga Instruction' },
];

const currentUser = 'Alice'; // Replace with real user logic

function OfferCard({ user, offer, want }: { user: string; offer: string; want: string }) {
  return (
    <div className="offer-card" style={{ minHeight: 180, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span role="img" aria-label="offer">💡</span> {offer}
        </h3>
        <p>
          <strong>Wants:</strong> <span style={{ color: '#4A90E2' }}>{want}</span>
        </p>
        <p style={{ fontSize: '0.95rem', color: '#aaa' }}>
          <strong>Posted by:</strong> {user}
        </p>
      </div>
      <button style={{
        marginTop: '1rem',
        background: 'linear-gradient(90deg, #4A90E2 0%, #66a6ff 100%)',
        color: '#fff',
        border: 'none',
        borderRadius: '0.5rem',
        padding: '0.6rem 1.2rem',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'background 0.2s'
      }}>
        View
      </button>
    </div>
  );
}

export default function MyOffers() {
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
              fontSize: '1rem'
            }}
            onClick={() => alert('Show create offer modal!')}
          >
            + Create Offer
          </button>
        </div>
        <div className="offers-grid">
          {myOffers.length ? (
            myOffers.map((o) => <OfferCard key={o.id} {...o} />)
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
                  fontSize: '1rem'
                }}
                onClick={() => alert('Show create offer modal!')}
              >
                + Create Offer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}