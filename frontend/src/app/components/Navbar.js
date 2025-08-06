export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="text-xl font-bold text-gray-800">
        <span className="text-green-600">Zelos</span> | Sistema de Chamados
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Acessar
      </button>
    </nav>
  );
}
