import React, { useState } from "react";
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

  const hadlePedido = (e: { target: { name: any; value: any } }) => {
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
    <div>
      <div className="p-3">
        <img className="h-40 mx-auto my-0" src={agua} />

        <form onSubmit={pedir} className="border">
          <div>
            <div className="flex justify-center">
              <button onClick={remover} className="border px-1">
                -
              </button>
              <input
                className="text-center"
                type="number"
                onChange={hadlePedido}
                value={pedido.quantidade} 
                name="quantidade"
                min="1"
              />
              <button onClick={adicionar} className="border px-1">
                +
              </button>
            </div>

            <div className="my-4">
              <p>Endereço</p>
              <div>
                <label htmlFor="nome">Nome:</label>
                <input
                  required
                  minLength={5}
                  onChange={hadlePedido}
                  type="text"
                  name="nome"
                  placeholder="Quem vai receber"
                />
              </div>
              <div>
                <label htmlFor="rua">Rua:</label>
                <input
                  required
                  min={2}
                  onChange={hadlePedido}
                  type="text"
                  name="rua"
                  placeholder="Rua e numero"
                />
              </div>

              <div>
                <label htmlFor="bairro">Bairro:</label>
                <input
                  onChange={hadlePedido}
                  required
                  min={5}
                  type="text"
                  name="bairro"
                />
              </div>
            </div>

            <div>
              <p>Pagamento</p>
              <div>
                <input
                  onChange={hadlePedido}
                  type="radio"
                  name="pagamento"
                  value="dinheiro"
                  required
                />
                <label htmlFor="dinheiro">Dinheiro</label>
              </div>

              <div>
                <input
                  onChange={hadlePedido}
                  type="radio"
                  name="pagamento"
                  value="cartao"
                />
                <label htmlFor="cartao">Cartão</label>
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="comentario">Cometário</label>
              <input
                name="comentario"
                onChange={hadlePedido}
                className="p-1 min-h-20"
                type="text"
                placeholder="adicionar comentário"
              />
            </div>
          </div>
          <button className="mx-auto my-0 border" type="submit">
            Pedir
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetalhesPedidos;
