import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './assets/components/LoginPage';
import SignupPage from './assets/components/SignupPage';
import './index.css'; // You can keep global styles here
import Dashboard from './Dashboard';
import MyOffers from './MyOffers';
import { AuthProvider } from './auth/AuthContext';
import ProtectedRoute from './assets/components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SignupPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/my-offers"
            element={
              <ProtectedRoute>
                <MyOffers />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
