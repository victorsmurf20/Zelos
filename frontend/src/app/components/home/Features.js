import '../../Styles/features.css';

export default function Features() {
  return (
    <section className="features-section">
      <h2 className="features-title">Uma plataforma integrada para todos</h2>
      <div className="features-grid">
        <FeatureCard 
          title="Para Alunos e Usuários" 
          desc="Abra chamados de forma simples e acompanhe o status da sua solicitação em tempo real." 
        />
        <FeatureCard 
          title="Para a Equipe Técnica" 
          desc="Gerencie, visualize e solucione chamados com uma visão clara das demandas." 
        />
        <FeatureCard 
          title="Para a Administração" 
          desc="Tenha relatórios e dados para tomada de decisões sobre manutenção e suporte." 
        />
      </div>
    </section>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="feature-card">
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc">{desc}</p>
    </div>
  );
}
