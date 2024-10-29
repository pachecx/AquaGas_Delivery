import { Link } from "react-router-dom";

function App() {
  return (
    <div className="border-2 border-red-500 h-screen">
      <header>
        <h1 className="text-3xl font-bold underline text-center">Logo</h1>
      </header>
      <main className="mt-36">
        <div className="flex flex-col gap-2 ">
          <button className="rounded py-1 border  border-red-500 w-4/6 my-0 mx-auto">
            <Link to={'/ListaEmpresas'}>Pedir aguá ou gás</Link>
          </button>

          <button className="rounded py-1 border  border-red-500 w-4/6 my-0 mx-auto">
            <Link to={''}>Seja um parceiro</Link>
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
