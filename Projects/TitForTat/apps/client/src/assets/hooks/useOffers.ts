import { useEffect, useState } from 'react';

export type Offer = {
  user: any;
  id: number;
  title: string;
  description: string;
  want: string;
  userId: number;
};

export function useOffers() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/offers')
      .then(res => res.json())
      .then(data => setOffers(data))
      .finally(() => setLoading(false));
  }, []);

  return { offers, loading, setOffers };
}