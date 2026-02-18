import { useParams, Link } from "react-router-dom";

function User() {
  const { id } = useParams();

  return (
    <div className="page-card">
      <h2>Perfil do Usuário</h2>
      <p>ID do usuário: {id}</p>

      <div className="page-links">
        <Link to="/" className="btn">
          Voltar para pagina inicial
        </Link>
      </div>
    </div>
  );
}

export default User;
