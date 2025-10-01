import React from 'react';     // 👈 Ajoute cette ligne
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Login from "./pages/Login.jsx";
import Inscription from "./pages/Inscription";
import DashboardClient from "./pages/DashboardClient";   
import Loyout from "./components/SideContenaire.jsx";  
import Track from "./pages/track.jsx";  
import Telechargement from "./pages/telechargement.jsx";  
import { AuthProvider } from './context/AuthContext.jsx';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/dashboard" element={<Loyout><DashboardClient /></Loyout>} />
        <Route path="/dashboard/Track" element={<Loyout><Track/></Loyout>} />
        <Route path="/dashboard/telechargement" element={<Loyout><h1><Telechargement/></h1></Loyout>} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
