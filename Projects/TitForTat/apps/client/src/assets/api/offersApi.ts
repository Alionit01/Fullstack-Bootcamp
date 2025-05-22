export async function fetchOffers() {
  const res = await fetch('http://localhost:3000/api/offers');
  return res.json();
}

export async function createOffer(offer: any) {
  const res = await fetch('http://localhost:3000/api/offers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(offer),
  });
  return res.json();
}

export async function deleteOffer(id: number) {
  await fetch(`http://localhost:3000/api/offers/${id}`, {
    method: 'DELETE',
  });
}