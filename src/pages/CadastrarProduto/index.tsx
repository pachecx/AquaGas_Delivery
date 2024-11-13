import React from "react";

const CadastrarProduto = () => {
  return (
    <div>
      <h1>Novo Produto</h1>
      <form>
        <div className="flex flex-col">
          <label htmlFor="nomeProduto">Nome do Produto</label>
          <input className="border" type="text" name="nomeProduto" />
        </div>

        <div className="flex flex-col">
          <label htmlFor="volume">volume ou peso</label>
          <input className="border" type="text" name="volume" placeholder="Ex: 5L"/>
        </div>

        <div className="flex flex-col">
          <label htmlFor="valor">Valor</label>
          <input className="border" type="text" name="valor" />
        </div>

        <div className="flex flex-col">
          <p >Adicione uma Foto</p>
          <label>Agua</label>
          <input className="border"  type="radio" name="aguagas" />
          <label>Gás</label>
          <input className="border"  type="radio" name="aguagas" />

        </div>

        <div className="flex flex-col">
          <label htmlFor="imagem">Adicione uma Foto</label>
          <input className="border" type="file" name="imagem" />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default CadastrarProduto;
