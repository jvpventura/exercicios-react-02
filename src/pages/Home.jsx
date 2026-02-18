import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-card">
      <h2>Pagina Inicial</h2>
      <p>Bem-vindo ao meu projeto React Router.</p>

      <div className="page-links">
        <Link to="/about" className="btn">
          Ir para Sobre
        </Link>
        <Link to="/contact" className="btn">
          Ir para Contato
        </Link>
      </div>
    </div>
  );
}

export default Home;
