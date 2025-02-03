import { Link } from "react-router-dom";
import Logo from "./assets/Logo.png";
import api from "./service";
import { useEffect, useState } from "react";

function App() {
  const pegarDados = async () => {
    try {
      const response = await api.get(`/home`);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Verficar se possui Token armazenado
  const [token, setToken] = useState(false);
  const VerficarToken = () => {
    if (!localStorage.getItem("token")) {
      setToken(false);
    } else {
      setToken(true);
    }
  };

  //console.log(token);
  useEffect(() => {
    VerficarToken();
    pegarDados();
  }, []);

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center pt-12">
      <header className="flex flex-col items-center">
        <img
          src={Logo}
          alt="Logo"
          className="h-36 w-36 mb-4 shadow-lg rounded-full bg-white p-2"
        />
        <p className="text-3xl text-center font-playfair text-gray-800">
          <span className="font-allura text-6xl text-blue-500">A</span>qua
          <span className="font-allura text-6xl text-blue-500 tracking-[-.10em]">
            G
          </span>
          ás
        </p>
      </header>

      <main className="mt-20 flex flex-col gap-8 items-center">
        <button className="bg-yellow-400 hover:bg-yellow-500 transition-colors shadow-lg rounded-full py-3 px-16 text-lg font-semibold text-gray-800">
          <Link to={"/ListaEmpresas"} className="text-xl">
            Faça seu Pedido
          </Link>
        </button>

        <button className="bg-cyan-500 hover:bg-cyan-600 transition-colors shadow-lg rounded-full py-3 px-12 text-lg font-semibold text-white w-full">
          {token ? (
            <Link to={"/homeEstabelecimento/6"} className="text-xl">
              Estabelecimento
            </Link>
          ) : (
            <Link to={"/login"} className="text-xl">
              Seja um parceiro
            </Link>
          )}
        </button>
      </main>
    </div>
  );
}

export default App;
