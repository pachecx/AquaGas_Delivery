import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import ListaEmpresas from "./pages/ListaEmpresas";
import Login from "./pages/Login";
import Cadastro from "./pages/FormCadastro";
import HomeEstabelecimento from "./pages/HomeEstabelecimento/index.tsx";
import EditarEstabelecimento from "./pages/EditarEstabelecimento/index.tsx";
import CadastrarProduto from "./pages/CadastrarProduto/index.tsx";
import EsqueceuSenha from "./pages/EsqueceuSenha/index.tsx";
import DetalhesPedidos from "./pages/DetalhesPedido/index.tsx";
import EditarProduto from "./pages/EditarProduto/index.tsx";

import "./index.css";
import UseConntext from "./Hook/UseConntext.tsx";

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
    path: "/homeEstabelecimento/:id",
    element: <HomeEstabelecimento />,
  },
  {
    path: "/editarEstabelecimento/:id",
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
  {
    path: "/detalhespedido/:id",
    element: <DetalhesPedidos />,
  },
  {
    path: "/editarproduto/:id",
    element: <EditarProduto />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UseConntext>
      <RouterProvider router={router} />
    </UseConntext>
  </StrictMode>
);
