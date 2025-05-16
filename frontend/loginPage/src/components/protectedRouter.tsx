import { type JSX } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '@reduxjs/toolkit/query';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
 const token = useSelector((state: RootState) => state.auth.token);
 return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;