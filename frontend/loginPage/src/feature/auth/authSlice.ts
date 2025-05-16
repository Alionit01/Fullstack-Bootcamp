import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
 token: string | null;
}

const initialState: AuthState = {
 token: localStorage.getItem('token'),
};

const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {
   setToken: (state, action) => {
     state.token = action.payload;
     localStorage.setItem('token', action.payload);
   },
   logout: (state) => {
     state.token = null;
     localStorage.removeItem('token');
   },
 },
});
export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer