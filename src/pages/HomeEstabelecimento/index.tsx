import imgEstabelecimento from "../../assets/Logo.png";
import "./style.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import imgProduto from "../../assets/garrafao.png";
import imgProdutoGas from "../../assets/Gas-gas.png";
import { useEffect, useState } from "react";
import api from "../../service";

interface PropsProdutos {
  idprodutos: string;
  nomeProduto: string;
  volumePeso: string;
  valor: string;
  tipo: string;
  cnpj: string;
}

interface PropsEmpresa {
  idusuarios: string;
  nome: string;
  email: string;
  tel: string;
  cnpj: string;
}

const HomeEstabelecimento = () => {
  const [dados, setDados] = useState<PropsEmpresa[]>([
    {
      idusuarios: "",
      nome: "",
      email: "",
      tel: "",
      cnpj: "",
    },
  ]);
  const [produtos, setProdutos] = useState<PropsProdutos[]>([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const CarregarPerfil = async () => {
    try {
      const response = await api.get(`/empresa/${id}`);
      const paraArray = response.data;
      const ddd = [paraArray];
      setDados(ddd);
    } catch (error) {
      console.log(error);
    }
  };

  const ProdutosCadastrados = async () => {
    try {
      const response = await api.get(`/produtos/listar`);
      setProdutos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const produtosComEmpresa = produtos.filter((produto) => {
    return dados.some((empresa) => empresa.cnpj === produto.cnpj);
  });

  // const DeletarProduto = async () => {
  //   try {
  //     const response = await api.delete(`/deletar/produto/$`)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  //console.log("dados:",dados)
  //console.log(produtos);
  //console.log(ProdutosDaEmpresa);
  console.log("FIND:", produtosComEmpresa);

  // const DeletarProduto = async () => {
  //   try {
  //     const response = await api.delete(`/deletar/produto/${''}`)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    CarregarPerfil();
    ProdutosCadastrados();
  }, []);

  console.log(dados);
  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <img
          className="w-full rounded-lg mb-4"
          src={imgEstabelecimento}
          alt="Imagem do Estabelecimento"
        />
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          {dados[0].nome}
        </h1>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Endereço</h3>
          <p className="text-gray-600">
            Cidade: <span className="font-medium text-gray-800">São Luís</span>
          </p>
          <p className="text-gray-600">
            Bairro: <span className="font-medium text-gray-800">Turu</span>
          </p>
          <p className="text-gray-600">
            Rua: <span className="font-medium text-gray-800">25</span>
          </p>
          <p className="text-gray-600">
            Número: <span className="font-medium text-gray-800">26</span>
          </p>
          <button className="mt-4 w-full bg-indigo-600 text-white p-3 rounded-lg font-bold hover:bg-indigo-500 transition">
            <Link to={`/editarEstabelecimento/${id}`}>
              Editar Estabelecimento
            </Link>
          </button>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Produtos Cadastrados
          </h3>
          <button className="mb-6 w-full bg-green-600 text-white p-3 rounded-lg font-bold hover:bg-green-500 transition">
            <Link to="/cadastrarProduto">Cadastrar Produto</Link>
          </button>

          {produtosComEmpresa.length === 0 ? (
            <p>Nenhum produto cadastrado!</p>
          ) : (
            <>
              {produtosComEmpresa.map((lista) => (
                <div
                  key={lista.idprodutos}
                  className="bg-gray-100 p-4 rounded-lg flex justify-between items-center mb-4"
                >
                  <div>
                    <h1 className="text-lg font-semibold text-gray-700">
                      {lista.nomeProduto}
                    </h1>
                    <p className="text-gray-600">{lista.volumePeso}</p>
                    <p className="text-gray-600">
                      Valor:{" "}
                      <span className="font-medium text-gray-800">
                        R$ {lista.valor},00
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <img
                      className="h-16 w-16 object-cover rounded-lg"
                      src={lista.tipo === "agua" ? imgProduto : imgProdutoGas}
                      alt="Produto"
                    />
                    <div className="flex flex-col">
                      <button
                        onClick={() =>
                          navigate(`/editarproduto/${lista.idprodutos}`)
                        }
                        className="bg-yellow-500 text-white p-2 rounded-lg font-bold hover:bg-yellow-400 transition mb-2"
                      >
                        Editar
                      </button>
                      <button
                        className="bg-red-500 text-white p-2 rounded-lg font-bold hover:bg-red-400 transition"
                        onClick={async () => {
                          try {
                            const response = await api.delete(
                              `/deletar/produto/${lista.idprodutos}`
                            );
                            if(response.status === (200)){
                              window.location.reload()
                            }
                          } catch (error) {
                            console.log(error);
                          }
                        }}
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeEstabelecimento;
