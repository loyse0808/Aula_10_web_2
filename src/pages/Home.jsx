import React from 'react';
import Footer from '../shared/Footer';

const heroImage = '/src/image.jpg';

export default function Home() {
  return (
    <div className="page-root">
      <main className="hero">
        <img src={heroImage} alt="hero" className="hero-figure" />
        <h1 className="title">
          O seu próximo <span className="accent">destino</span> pode estar
          aqui...
        </h1>
        <p className="lead">
          Aqui você encontra uma seleção de <strong>pacotes completos</strong>{' '}
          para as suas férias!
        </p>
        <div className="description">
          <p>
            No <strong>ConnectFlight</strong> você encontra pacotes de viagens
            nacionais e internacionais que incluem: passagens aéreas, hotéis,
            café da manhã, e até seguro viagem com{' '}
            <strong>preços arrasadores</strong>!
          </p>
          <p>
            Se você ainda não tem um destino definido, confira nossa seção de
            ofertas.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
