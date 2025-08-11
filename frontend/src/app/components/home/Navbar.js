import '../../Styles/navbar.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="navbar-highlight">Zelos</span> | Sistema de Chamados
      </div>
      <Link href="/login" className="navbar-button">
        Acessar
      </Link>
    </nav>
  );
}
