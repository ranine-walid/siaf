import React from 'react';     // 👈 Ajoute cette ligne
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './context/AuthContext.jsx';
import Acceuil from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import Inscription from "./Pages/Inscription.jsx";
import DashboardClient from "./Pages/DashboardClient.jsx";
import Loyout from "./components/SideContenaire.jsx";
import Telechargement from "./Pages/telechargement.jsx";
import Track from "./Pages/track.jsx";


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
