import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
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
//import Error404 from "./pages/Error404";
import PedidoRealizado from "./pages/PedidoRealizado";

import "./index.css";
import UseConntext from "./Hook/UseConntext.tsx";

const isAuthenticated = () => {
  // Verifique o token ou estado de autenticação real
  if(localStorage.getItem("token")) return true
};

// proteção de rota
const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/Login" replace />;
};

// Roteador
const router = createBrowserRouter([
  // Rotas públicas
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
    path: "/esqueceusenha",
    element: <EsqueceuSenha />,
  },
  // {
  //   path: "/error",
  //   element: <Error404/>,
  // },
  {
    path: "/detalhespedido/:id",
    element: <DetalhesPedidos />,
  },
  {
    path: "/PedidoRealizado",
    element: <PedidoRealizado />,
  },
  // Rotas protegidas
  {
    element: <PrivateRoute />, // rotas privadas
    children: [
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
        path: "/editarproduto/:id",
        element: <EditarProduto />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UseConntext>
      <RouterProvider router={router} />
    </UseConntext>
  </StrictMode>
);
