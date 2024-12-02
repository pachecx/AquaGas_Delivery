import { useState } from "react";
import agua from "../../assets/garrafao.png";

const DetalhesPedidos = () => {
  const [pedido, setPedido] = useState({
    nome: "",
    rua: "",
    bairro: "",
    quantidade: 1,
    pagamento: "",
    comentario: "",
  });

  const hadlePedido = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;

    setPedido((prev) => {
      const newdados = { ...prev, [name]: value };
      return newdados;
    });
  };

  // Função para adicionar quantidade
  const adicionar = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setPedido((prev) => ({
      ...prev,
      quantidade: prev.quantidade + 1,
    }));
  };

  // Função para remover quantidade
  const remover = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (pedido.quantidade > 1) {
      setPedido((prev) => ({
        ...prev,
        quantidade: prev.quantidade - 1,
      }));
    }
  };

  const pedir = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(pedido);
    console.log("rodou");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex items-center justify-center p-6">
  <div className="p-6 bg-white shadow-lg rounded-lg max-w-md w-full">
    <img className="h-40 mx-auto my-4" src={agua} alt="Produto Água" />

    <form onSubmit={pedir} className="border rounded-lg p-4 bg-blue-50">
      <div className="mb-4">
        <div className="flex justify-center items-center gap-2">
          <button
            onClick={remover}
            type="button"
            className="bg-red-400 text-white rounded px-2 py-1 font-bold hover:bg-red-500 transition"
          >
            -
          </button>
          <input
            className="w-16 text-center border border-gray-300 rounded px-2"
            type="number"
            onChange={hadlePedido}
            value={pedido.quantidade}
            name="quantidade"
            min="1"
          />
          <button
            onClick={adicionar}
            type="button"
            className="bg-green-400 text-white rounded px-2 py-1 font-bold hover:bg-green-500 transition"
          >
            +
          </button>
        </div>
      </div>

      <div className="my-4">
        <p className="font-bold text-lg text-gray-700 mb-2">Endereço</p>
        <div className="mb-3">
          <label htmlFor="nome" className="block text-sm font-semibold text-gray-600">
            Nome:
          </label>
          <input
            required
            minLength={5}
            onChange={hadlePedido}
            type="text"
            name="nome"
            placeholder="Quem vai receber"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rua" className="block text-sm font-semibold text-gray-600">
            Rua:
          </label>
          <input
            required
            min={2}
            onChange={hadlePedido}
            type="text"
            name="rua"
            placeholder="Rua e número"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bairro" className="block text-sm font-semibold text-gray-600">
            Bairro:
          </label>
          <input
            required
            min={5}
            onChange={hadlePedido}
            type="text"
            name="bairro"
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
      </div>

      <div className="my-4">
        <p className="font-bold text-lg text-gray-700 mb-2">Pagamento</p>
        <div className="flex items-center gap-2 mb-2">
          <input
            onChange={hadlePedido}
            type="radio"
            name="pagamento"
            value="dinheiro"
            required
            className="w-4 h-4"
          />
          <label htmlFor="dinheiro" className="text-sm font-medium text-gray-600">
            Dinheiro
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            onChange={hadlePedido}
            type="radio"
            name="pagamento"
            value="cartao"
            className="w-4 h-4"
          />
          <label htmlFor="cartao" className="text-sm font-medium text-gray-600">
            Cartão
          </label>
        </div>
      </div>

      <div className="my-4">
        <label htmlFor="comentario" className="block text-sm font-semibold text-gray-600">
          Comentário
        </label>
        <input
          name="comentario"
          onChange={hadlePedido}
          className="w-full border border-gray-300 rounded p-2"
          type="text"
          placeholder="Adicionar comentário"
        />
      </div>

      <button
        type="submit"
        className="block w-full bg-blue-500 text-white text-lg font-semibold rounded py-2 mt-4 hover:bg-blue-600 transition"
      >
        Pedir
      </button>
    </form>
  </div>
</div>


  );
};

export default DetalhesPedidos;

 /*to={'https://api.whatsapp.com/send?phone=5598982283717'}*/