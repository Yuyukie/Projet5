import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Acceuil from "./pages/Acceuil/Acceuil.jsx";
import About from "./pages/About/About.jsx";
import Logement from "./pages/Logement/Logement.jsx";
import Erreur404 from "./pages/Erreur404/Erreur.jsx";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/About" element={<About />} />
        <Route path="/Logement" element={<Logement />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

