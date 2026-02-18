import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Página não encontrada</h2>
      <p>A rota que você tentou acessar não existe ou foi removida.</p>

      <Link to="/" className="btn">
        Voltar para Home
      </Link>
    </div>
  );
}

export default NotFound;
