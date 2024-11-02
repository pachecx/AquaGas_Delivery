import React from "react";
import imgEstabelecimento from "../../assets/Logo.png";
import "./style.css";
import { Link } from "react-router-dom";
import imgProduto from '../../assets/garrafao.png'

const HomeEstabelecimento = () => {
  return (
    <div className="w-full h-screen p-3">
      <div className="flex items-center gap-2">
        <img className="h-12" src={imgEstabelecimento} />
        <h1 className="">Agua do seu Zé</h1>
      </div>
      <div className=" mt-10 border flex justify-between">
        <div className="">
          <h3>Endereço</h3>
          <p>
            Cidade: <span>São luis</span>
          </p>
          <p>
            Bairro: <span>Turu</span>
          </p>
          <p>
            Rua: <span>25</span>
          </p>
          <p>
            Numero: <span>26</span>
          </p>
        </div>
        <button className="bg-gray-300">
          <Link to={"/editarEstabelecimento"}>Editar</Link>
        </button>
      </div>
      <div className=" mt-8 border">
        <h3>Produtos Cadastrados</h3>

        <button className="bg-gray-300">
          <Link to={"/cadastrarProduto"}>Cadastrar</Link>
        </button>
        <div className="border border-red-500 flex justify-between items-center mt-7">
          <div>
          <h1>garrafão</h1>
          <p>20L</p>
          <p>valor: <span>7,00</span></p>
          </div>


          <div>
          <img className="h-11" src={imgProduto}/>
          <div>
            <button  className="bg-gray-300">Editar</button>
            <button  className="bg-gray-300">Excluir</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEstabelecimento;
