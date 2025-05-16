import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './assets/components/LoginPage';
import SignupPage from './assets/components/SignupPage';
import './index.css'; // You can keep global styles here
import Dashboard from './Dashboard';
import MyOffers from './MyOffers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<SignupPage />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/my-offers" element={<MyOffers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
