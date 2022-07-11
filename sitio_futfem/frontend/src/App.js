import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import ContactoPage from './pages/ContactoPage';
import GaleriaPage from './pages/GaleriaPage';
import TorneosPage from './pages/TorneosPage';
import NovedadesPage from './pages/NovedadesPage';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header/> 
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='Contacto' element={<ContactoPage />} />
            <Route path='Galeria' element={<GaleriaPage />} />
            <Route path='Torneos' element={<TorneosPage />} />
            <Route path='Novedades' element={<NovedadesPage />} />
          </Routes>
      </BrowserRouter>

      <Footer/>
    </div>
  );
}

export default App;
