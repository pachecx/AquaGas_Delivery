import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-6 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
        <div className="mb-6 text-9xl font-bold text-red-500">404</div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🚫 Página não encontrada
        </h1>

        <p className="text-gray-600 mb-6">
          Oops! Parece que você se perdeu. A página que você está procurando não
          existe ou foi movida.
        </p>

        <div className="flex justify-center space-x-4">
          <button
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-500 transition 
            flex items-center"
          >
            <Link to="/" className="flex items-center">
              🏠 Voltar para Home
            </Link>
          </button>

          <button
            className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-bold hover:bg-indigo-50 
            transition flex items-center"
          >
            <Link to="/contato" className="flex items-center">
              📞 Ajuda
            </Link>
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Código de erro: 404_NOT_FOUND</p>
          <p>Se precisar de ajuda, entre em contato com nosso suporte</p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
