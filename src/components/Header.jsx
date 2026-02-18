import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Meu Projeto React</h1>
      <nav>
        <Link to="/">Pagina Inicial</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
