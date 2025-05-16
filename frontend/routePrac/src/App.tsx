import { useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './assets/components/pages/home';
import About from './assets/components/pages/about';
import Dashboard from './assets/components/pages/dashboard';
import Navbar from './assets/components/navBar/NavBar';

function App() {
 return (  
   <div>
     <Navbar />
     <Routes>
       <Route path="/" element={<Navigate to="/home" replace />} />
       <Route path="/home" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/dashboard" element={<Dashboard />} />
     </Routes>
   </div>
 )
}
export default App;