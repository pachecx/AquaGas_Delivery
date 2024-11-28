
const CadastrarProduto = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Novo Produto
        </h1>

        <form className="space-y-5">
          <div className="flex flex-col">
            <label
              htmlFor="nomeProduto"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Nome do Produto<span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              type="text"
              name="nomeProduto"
              placeholder="Ex: Garrafão 20L"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="volume"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Volume ou Peso<span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              type="text"
              name="volume"
              placeholder="Ex: 5L ou 13kg"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="valor"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Valor<span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              type="text"
              name="valor"
              placeholder="Ex: R$ 50,00"
              required
            />
          </div>

          <div className="flex flex-col">
            <p className="text-sm font-medium text-gray-700 mb-2">Categoria</p>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  className="border-gray-300 focus:ring-blue-500"
                  type="radio"
                  name="aguagas"
                  value="agua"
                  required
                />
                <span className="text-gray-700">Água</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  className="border-gray-300 focus:ring-blue-500"
                  type="radio"
                  name="aguagas"
                  value="gas"
                  required
                />
                <span className="text-gray-700">Gás</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="imagem"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Adicione uma Foto
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              type="file"
              name="imagem"
              accept="image/*"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-500 transition"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastrarProduto;
