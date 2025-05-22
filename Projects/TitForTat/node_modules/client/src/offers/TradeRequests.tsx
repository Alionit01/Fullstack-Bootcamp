import { useEffect, useState } from 'react';
import { useAuth } from '../auth/AuthContext';

export default function TradeRequests() {
  const { user } = useAuth();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    fetch(`http://localhost:3000/api/exchange-requests/${user.id}`)
      .then(res => res.json())
      .then(setRequests)
      .finally(() => setLoading(false));
  }, [user]);

  async function handleDecision(id, status) {
    await fetch(`http://localhost:3000/api/exchange-requests/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status } : r))
    );
  }

  return (
    <div style={{ padding: 32 }}>
      <h2>Incoming Trade Requests</h2>
      {loading ? (
        <div>Loading...</div>
      ) : requests.length ? (
        requests.map((r) => (
          <div key={r.id} style={{ background: '#232526', color: '#e0e0e0', borderRadius: 8, padding: 16, marginBottom: 12 }}>
            <div>
              <strong>Offer ID:</strong> {r.offerId}
            </div>
            <div>
              <strong>Requester ID:</strong> {r.requesterId}
            </div>
            <div>
              <strong>Status:</strong> {r.status}
            </div>
            {r.status === 'pending' && (
              <div style={{ marginTop: 8 }}>
                <button
                  style={{ marginRight: 8, background: '#43e97b', color: '#232526', border: 'none', borderRadius: 4, padding: '0.4rem 1rem', fontWeight: 600, cursor: 'pointer' }}
                  onClick={() => handleDecision(r.id, 'accepted')}
                >
                  Accept
                </button>
                <button
                  style={{ background: '#ff4d4f', color: '#fff', border: 'none', borderRadius: 4, padding: '0.4rem 1rem', fontWeight: 600, cursor: 'pointer' }}
                  onClick={() => handleDecision(r.id, 'declined')}
                >
                  Decline
                </button>
              </div>
            )}
          </div>
        ))
      ) : (
        <div>No trade requests yet.</div>
      )}
    </div>
  );
}