import { useParams, Link } from "react-router-dom";

function User() {
  const { id } = useParams();

  return (
    <div className="page-card">
      <h2>Perfil do Usuário</h2>
      <p>ID do usuário: {id}</p>

      <Link to="/" className="btn">
        Voltar para pagina inicial
      </Link>
    </div>
  );
}

export default User;
