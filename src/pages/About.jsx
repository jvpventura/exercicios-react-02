import { Link } from "react-router-dom";

function About() {
  return (
    <div className="page-card">
      <h2>Sobre</h2>
      <p>Informações sobre o projeto.</p>

      <div className="page-links">
        <Link to="/" className="btn">
          Voltar para pagina inicial
        </Link>
      </div>
    </div>
  );
}

export default About;
