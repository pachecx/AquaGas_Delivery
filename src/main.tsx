import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ListaEmpresas from "./pages/ListaEmpresas";
import Login from "./pages/Login";
import Cadastro from './pages/FormCadastro'
import HomeEstabelecimento from "./pages/HomeEstabelecimento/index.tsx";
import EditarEstabelecimento from "./pages/EditarEstabelecimento/index.tsx";
import CadastrarProduto from "./pages/CadastrarProduto/index.tsx";
import EsqueceuSenha from "./pages/EsqueceuSenha/index.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ListaEmpresas",
    element: <ListaEmpresas />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Cadastro",
    element: <Cadastro />,
  },
  {
    path: "/homeEstabelecimento",
    element: <HomeEstabelecimento />,
  },
  {
    path: "/editarEstabelecimento",
    element: <EditarEstabelecimento />,
  },
  {
    path: "/cadastrarProduto",
    element: <CadastrarProduto />,
  },
  {
    path: "/esqueceusenha",
    element: <EsqueceuSenha />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
