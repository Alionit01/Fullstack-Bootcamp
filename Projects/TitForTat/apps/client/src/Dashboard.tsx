// src/components/Dashboard.tsx
import React from 'react';
import Navbar from './assets/components/Navbar';
import './Dashboard.css'; // Assuming you have a CSS file for styles

const offers = [
  {
    id: 1,
    user: 'Ali',
    offer: 'Web Design',
    want: 'Guitar Lessons',
  },
  {
    id: 2,
    user: 'Alina',
    offer: 'Math Tutoring',
    want: 'Cooking Skills',
  },
  {
    id: 4,
    user: 'Aliza',
    offer: 'Photography',
    want: 'Yoga Instruction',
  },
  {
    id: 5,
    user: 'Aliyat',
    offer: 'Swimming',
    want: 'Guitar',
  },
  {
    id: 6,
    user: 'Aliyana',
    offer: 'Poetry',
    want: 'Cooking Skills',
  },
  {
    id: 7,
    user: 'Aliya',
    offer: 'Photography',
    want: 'Yoga Instruction',
  },
  {
    id: 8,
    user: 'Aliza',
    offer: 'Photography',
    want: 'Yoga Instruction',
  },
];

function OfferCard({ user, offer, want }: { user: string; offer: string; want: string }) {
  return (
    <div className="offer-card">
      <h3>{user}</h3>
      <p>
        <strong>Offers:</strong> {offer}
      </p>
      <p>
        <strong>Wants:</strong> {want}
      </p>
      <button>Contact</button>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="dashboard-bg">
      <Navbar />
      <div className="dashboard-container">
        <h2>Skill Trade Offers</h2>
        <div className="offers-grid">
          {offers.map((o) => (
            <OfferCard key={o.id} {...o} />
          ))}
        </div>
      </div>
    </div>
  );
}
