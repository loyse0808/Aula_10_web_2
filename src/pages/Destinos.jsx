/*import React from 'react'
import Footer from '../shared/Footer'
export default function Destinos(){return(<div className='page-root'><main className='content'><h2>Destinos</h2></main><Footer/></div>)} */

// src/pages/Destinos.jsx
import React, { useState, useMemo } from 'react';
import Footer from '../shared/Footer';
import { Link } from 'react-router-dom';

const DATA = [
  {
    id: 1,
    title: 'Praia do Encanto',
    region: 'Bahia',
    description:
      'Águas cristalinas, areia branca e trilhas leves. Perfeito para relaxar.',
    price: 'R$ 1.499',
    rating: 4.8,
    img: 'https://cdn.pixabay.com/photo/2021/05/29/03/00/beach-6292382_1280.jpg',
    type: 'praia',
  },
  {
    id: 2,
    title: 'Serra Azul',
    region: 'Minas Gerais',
    description:
      'Montanhas com mirantes e trilhas — ideal para ecoturismo e gastronomia.',
    price: 'R$ 1.199',
    rating: 4.7,
    img: 'https://cdn.pixabay.com/photo/2016/11/18/18/39/beach-1836335_1280.jpg',
    type: 'serra',
  },
  {
    id: 3,
    title: 'Porto das Dunas',
    region: 'Ceará',
    description: 'Sol o ano todo, praias extensas e ótima infraestrutura.',
    price: 'R$ 999',
    rating: 4.6,
    img: 'https://cdn.pixabay.com/photo/2019/09/06/00/32/beach-4455224_1280.jpg',
    type: 'praia',
  },
  {
    id: 4,
    title: 'Centro Histórico',
    region: 'Olinda',
    description:
      'Cultura, arte e festas populares. Roteiros urbanos incríveis.',
    price: 'R$ 749',
    rating: 4.5,
    img: 'https://cdn.pixabay.com/photo/2016/11/19/15/38/beach-1839922_1280.jpg',
    type: 'cidade',
  },
];

function DestinationCard({ d }) {
  return (
    <article className="dest-card" aria-labelledby={`dest-${d.id}-title`}>
      <div className="dest-image-wrap">
        <img src={d.img} alt={`${d.title} — ${d.region}`} />
      </div>

      <div className="dest-body">
        <div className="dest-meta">
          <span className="dest-type">{d.type}</span>
          <span className="dest-price">{d.price}</span>
        </div>

        <h3 id={`dest-${d.id}-title`} className="dest-title">
          {d.title}
        </h3>

        <p className="dest-desc">{d.description}</p>

        <div className="dest-footer">
          <div className="rating">⭐ {d.rating}</div>
          Ver pacote
        </div>
      </div>
    </article>
  );
}

export default function Destinos() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    return DATA.filter(d => {
      const matchesQuery =
        d.title.toLowerCase().includes(query.toLowerCase()) ||
        d.region.toLowerCase().includes(query.toLowerCase());
      const matchesFilter = filter === 'all' ? true : d.type === filter;
      return matchesQuery && matchesFilter;
    });
  }, [query, filter]);

  return (
    <div className="page-root">
      <main className="content">
        <header className="dest-header">
          <div>
            <h2>Destinos</h2>
            <p className="muted">
              Explore nossos destinos mais procurados e encontre o pacote ideal.
            </p>
          </div>

          <div className="controls">
            <input
              type="search"
              aria-label="Pesquisar destinos"
              placeholder="Pesquisar por nome ou região..."
              value={query}
              onChange={e => setQuery(e.target.value)}
            />

            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              aria-label="Filtrar por tipo"
            >
              <option value="all">Todos</option>
              <option value="praia">Praia</option>
              <option value="serra">Serra</option>
              <option value="cidade">Cidade</option>
            </select>
          </div>
        </header>

        <section className="dest-grid" aria-live="polite">
          {filtered.length === 0 ? (
            <div className="empty">Nenhum destino encontrado.</div>
          ) : (
            filtered.map(d => <DestinationCard key={d.id} d={d} />)
          )}
        </section>

        <section className="cta">
          <div className="cta-inner">
            <h3>Não encontrou o que procurava?</h3>
            <p className="muted">
              Fale com nossos consultores e receba um roteiro personalizado.
            </p>
            <Link to="/contato" className="btn primary">
              Peça um roteiro
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
