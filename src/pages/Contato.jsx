import Footer from '../shared/Footer';
import '/src/Contato.css';

export default function Contato() {
  return (
    <div className="contato-page">
      <section className="contato-header">
        <h1>Fale Conosco</h1>
        <p>Estamos aqui para ajudar você a planejar sua próxima viagem.</p>
      </section>

      <section className="contato-container">
        <div className="contato-info">
          <h2>Informações de Contato</h2>

          <p>
            <strong>Email:</strong> atendimento@ConnectFlight.com
          </p>
          <p>
            <strong>Telefone:</strong> (63) 90000-0000
          </p>
          <p>
            <strong>Endereço:</strong> Av. Central, 123 - Arapoema, TO
          </p>

          <h3>Horário de Atendimento</h3>
          <p>Segunda a Sexta: 08h às 18h</p>
          <p>Sábado: 08h às 12h</p>

          <h3>Redes Sociais</h3>
          <ul className="social-links">
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">WhatsApp</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
          </ul>
        </div>

        <div className="contato-form">
          <h2>Envie uma Mensagem</h2>

          <form>
            <label>Nome</label>
            <input type="text" placeholder="Digite seu nome" required />

            <label>Email</label>
            <input type="email" placeholder="Digite seu email" required />

            <label>Mensagem</label>
            <textarea
              rows="6"
              placeholder="Como podemos ajudar?"
              required
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
