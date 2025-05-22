import { useState } from 'react';
import { useOffers } from './assets/hooks/useOffers';
import { createOffer, deleteOffer } from './assets/api/offersApi';
import Navbar from './assets/components/NavBar';
import { useAuth } from './auth/AuthContext';
import './Dashboard.css';

export type Offer = {
  id: number;
  userId: number;
  title: string;
  description: string;
  want: string;
};

export default function MyOffers() {
  const [viewOffer, setViewOffer] = useState<Offer | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const { offers, loading, setOffers } = useOffers();
  const { user } = useAuth();

  async function handleCreate(newOffer: Omit<Offer, 'id' | 'userId'>) {
    if (!user) return;
    const created = await createOffer({ ...newOffer, userId: user.id });
    setOffers((prev: Offer[]) => [...prev, created]);
  }

  const myOffers = offers.filter((o: Offer) => o.userId === user?.id);

  return (
    <div className="dashboard-bg">
      <Navbar />
      <div className="dashboard-container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
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
            onClick={() => setShowCreateModal(true)}
          >
            + Create Offer
          </button>
        </div>
        <div className="offers-grid">
          {loading ? (
            <div>Loading...</div>
          ) : myOffers.length ? (
            myOffers.map((o) => (
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
                  Posted by: {user?.name || "You"}
                </div>
                <div style={{ marginBottom: 8, display: 'flex', gap: 8 }}>
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
                  <button
                    style={{
                      background: '#ff4d4f',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '0.5rem',
                      padding: '0.4rem 1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      fontSize: '1rem',
                    }}
                    onClick={async () => {
                      if (window.confirm('Are you sure you want to delete this offer?')) {
                        await deleteOffer(o.id);
                        setOffers((prev: Offer[]) => prev.filter((offer) => offer.id !== o.id));
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div
              style={{
                color: '#aaa',
                textAlign: 'center',
                width: '100%',
              }}
            >
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
                onClick={() => setShowCreateModal(true)}
              >
                + Create Offer
              </button>
            </div>
          )}
        </div>
        {/* View Offer Modal */}
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
              onClick={e => e.stopPropagation()}
            >
              <h3 style={{ marginTop: 0, color: '#4A90E2' }}>
                {viewOffer.title}
              </h3>
              <p>
                <strong>Description:</strong> {viewOffer.description}
              </p>
              <p>
                <strong>Posted by:</strong> {user?.name || "You"}
              </p>
              <p>
                <strong>Trading:</strong> {viewOffer.title}
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
        {/* Create Offer Modal */}
        {showCreateModal && (
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
          >
            <form
              style={{
                background: '#232526',
                color: '#e0e0e0',
                borderRadius: 12,
                padding: 32,
                minWidth: 320,
                boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const title = (form.elements.namedItem('title') as HTMLInputElement).value;
                const description = (form.elements.namedItem('description') as HTMLInputElement).value;
                const want = (form.elements.namedItem('want') as HTMLInputElement).value;
                await handleCreate({ title, description, want });
                setShowCreateModal(false);
              }}
            >
              <h3 style={{ marginTop: 0, color: '#4A90E2' }}>Create Offer</h3>
              <input name="title" placeholder="Title" required />
              <textarea name="description" placeholder="Description" required />
              <input name="want" placeholder="What do you want in exchange?" required />
              <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
                <button type="submit" style={{
                  background: 'linear-gradient(90deg, #4A90E2 0%, #66a6ff 100%)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '0.5rem',
                  padding: '0.6rem 1.2rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontSize: '1rem',
                }}>Create</button>
                <button type="button" onClick={() => setShowCreateModal(false)}
                  style={{
                    background: '#444',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '0.5rem',
                    padding: '0.6rem 1.2rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontSize: '1rem',
                  }}
                >Cancel</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
