export default function Hero() {
  return (
    <section className="text-center py-20 bg-gray-50">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-800">
        Bem-vindo ao Sistema de Chamados do <span className="text-blue-600">SENAI</span>
      </h1>
      <p className="text-gray-600 mb-6">
        A plataforma centralizada para abrir e acompanhar suas solicitações, garantindo uma resolução rápida e eficiente para todos.
      </p>
      <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600">
        Ir para o Login
      </button>
    </section>
  );
}
