import React from "react";
import agua from "../../assets/garrafao.png";

const DetalhesPedidos = () => {
  return (
    <div>
      <div className="">
        <img className="h-40 mx-auto my-0" src={agua} />

        <form>
          <div>
            <div className="flex justify-center">
              <button>-</button>
              <p>01</p>
              <button>+</button>
            </div>

            <div>
                <label htmlFor="comentario">Cometário</label>
                <input type="text" placeholder="adicionar comentário"/>
            </ div>
          </div>
          <button type="submit">
            Pedir
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetalhesPedidos;
