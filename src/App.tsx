import { Link } from "react-router-dom";
import Logo from "./assets/Logo.png";

function App() {
  return (
    <div className="bg-custom-gradient h-screen flex flex-col items-center pt-8">
      <header>
        <img src={Logo} alt="" className="h-36 w-36" />
        <p className="text-3xl text-center font-playfair">
          <span className="font-allura text-6xl">A</span>qua
          <span className="font-allura text-6xl tracking-[-.10em]">G</span>ás
        </p>
      </header>

      <main className="mt-16">
        <div className="flex flex-col gap-8 ">
          <button className="bg-[rgba(253,187,45,1)] rounded-3xl py-1 my-0 mx-auto px-14">
            <Link to={"/ListaEmpresas"} className="text-2xl">
              Pedidos
            </Link>
          </button>

          <button className=" bg-[rgba(34,193,195,1)] rounded-3xl py-1 my-0 mx-auto px-5">
            <Link to={"/login"} className="text-2xl">
              Seja um parceiro
            </Link>
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
