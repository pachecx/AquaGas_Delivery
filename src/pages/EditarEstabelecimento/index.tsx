
import { useContext } from "react";
import SomeContext from "../../Hook/SomeContext";

const EditarEstabelecimento = () => {
  const context = useContext(SomeContext);
    console.log(context)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Editar Perfil
        </h1>

        <form className="space-y-5">
          <div className="flex flex-col">
            <label
              htmlFor="nomeEmpresa"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Nome da Empresa<span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              type="text"
              name="nomeEmpresa"
              placeholder="Ex: Água do Seu Zé"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="cidade"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Cidade<span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              type="text"
              name="cidade"
              placeholder="Ex: São Luís"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="bairro"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Bairro<span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              type="text"
              name="bairro"
              placeholder="Ex: Turu"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="rua"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Rua<span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              type="text"
              name="rua"
              placeholder="Ex: Rua 25"
              required
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="numero"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Número<span className="text-red-500">*</span>
            </label>
            <input
              className="border border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
              type="text"
              name="numero"
              placeholder="Ex: 26"
              required
            />
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Delivery</h3>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  className="border-gray-300 focus:ring-blue-500"
                  type="radio"
                  name="entrega"
                  value="Sim"
                  required
                />
                <span className="text-gray-700">Sim</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  className="border-gray-300 focus:ring-blue-500"
                  type="radio"
                  name="entrega"
                  value="Não"
                  required
                />
                <span className="text-gray-700">Não</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-500 transition"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditarEstabelecimento;
