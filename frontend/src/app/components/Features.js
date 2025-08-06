export default function Features() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-12">Uma plataforma integrada para todos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
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
    <div className="border border-gray-200 rounded-lg shadow-md p-6 bg-gray-50">
      <h3 className="text-xl font-semibold mb-2 text-blue-700">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}
