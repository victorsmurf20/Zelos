import '../../Styles/hero.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-section">
      <h1 className="hero-title">
        Bem-vindo ao Sistema de Chamados do <span className="hero-highlight">SENAI</span>
      </h1>
      <p className="hero-subtitle">
        A plataforma centralizada para abrir e acompanhar suas solicitações, garantindo uma resolução rápida e eficiente para todos.
      </p>
      <Link href="/login" className="login-button">
        Ir para o Login
      </Link>
    </section>
  );
}
