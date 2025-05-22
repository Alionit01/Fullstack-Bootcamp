export async function requestTrade(offerId: number, requesterId: number) {
  const res = await fetch('http://localhost:3000/api/exchange-requests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ offerId, requesterId }),
  });
  return res.json();
}