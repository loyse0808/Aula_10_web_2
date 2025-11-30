import React from 'react';
import Footer from '../shared/Footer';
import '/src/Ofertas.css';

export default function Ofertas() {
  const OFERTAS = [
    {
      id: 1,
      title: 'Fortaleza – Pacote 4 dias',
      description:
        'Aproveite praias incríveis e gastronomia local. Pacote completo com passagem e hotel.',
      oldPrice: 'R$ 1.499',
      newPrice: 'R$ 999',
      discount: '-34%',
      img: 'https://cdn.pixabay.com/photo/2021/05/20/13/12/travel-6268605_1280.jpg',
    },
    {
      id: 2,
      title: 'Porto de Galinhas – Pacote completo',
      description:
        'Paisagens serranas, fondue, boa gastronomia e clima encantador.',
      oldPrice: 'R$ 2.199',
      newPrice: 'R$ 1.499',
      discount: '-31%',
      img: 'https://cdn.pixabay.com/photo/2017/05/27/20/43/lagoon-2349401_1280.jpg',
    },
    {
      id: 3,
      title: 'Rio de Janeiro – 3 dias',
      description:
        'Visite os principais cartões-postais da Cidade Maravilhosa.',
      oldPrice: 'R$ 1.299',
      newPrice: 'R$ 899',
      discount: '-30%',
      img: 'https://cdn.pixabay.com/photo/2020/04/30/02/14/bali-5111131_1280.jpg',
    },
    {
      id: 4,
      title: 'Maceió – Pacote 3 dias',
      description:
        'Águas cristalinas, culinária nordestina e praias paradisíacas.',
      oldPrice: 'R$ 999',
      newPrice: 'R$ 749',
      discount: '-25%',
      img: 'https://cdn.pixabay.com/photo/2020/05/05/23/08/africa-5135407_1280.jpg',
    },
  ];

  return (
    <div className="page-root">
      <main className="offers-page">
        <h1 className="offers-title">Ofertas Imperdíveis</h1>
        <p className="offers-subtitle">
          Promoções especiais por tempo limitado! Garanta seu pacote com
          descontos exclusivos.
        </p>

        <div className="offers-grid">
          {OFERTAS.map(item => (
            <div className="offer-card" key={item.id}>
              <div className="offer-img-wrapper">
                <img src={item.img} alt={item.title} className="offer-img" />
                <span className="offer-discount">{item.discount}</span>
              </div>

              <div className="offer-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="prices">
                  <span className="old-price">{item.oldPrice}</span>
                  <span className="new-price">{item.newPrice}</span>
                </div>

                <button className="offer-btn">Reservar Agora</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
