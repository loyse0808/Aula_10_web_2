import React from 'react';
import { Link } from 'react-router-dom';
import wave from '../assets/wave.svg';
import '/src/linha.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <hr class="linha-decorativa"></hr>
      <img src={wave} className="wave" alt="onda decorativa" />
      <nav className="footer-nav">
        <Link to="/">Início</Link>
        <Link to="/destinos">Destinos</Link>
        <Link to="/ofertas">Ofertas</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </footer>
  );
}
