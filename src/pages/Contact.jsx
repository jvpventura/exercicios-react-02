import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="page-card">
      <h2>Contato</h2>
      <p>Email: victor@email.com</p>
      <p>Telefone: (85) 99999-9999</p>

      <div className="page-links">
        <Link to="/" className="btn">
          Voltar para pagina inicial
        </Link>
      </div>
    </div>
  );
}

export default Contact;
