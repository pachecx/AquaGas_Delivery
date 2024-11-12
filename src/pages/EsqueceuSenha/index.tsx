import React from "react";
import { useState } from "react";
import { redirect } from "react-router-dom";

const EsqueceuSenha = () => {
  const [redefinir, setRedefinir] = useState({});

  const handleEnviar = (e) => {
    const { name, value } = e.target;

    setRedefinir((prev) => {
      const newRedefinir = { ...prev, [name]: value };
      return newRedefinir;
    });
  };

  const Enviar = (e) => {
    e.preventDefault();

    console.log(redefinir);
  };

  return (
    <div>
      <div>
        <form onSubmit={Enviar}>
          <label>Digite seu Email para redefinir a senha</label>
          <input name="email" type="email" onChange={handleEnviar} />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default EsqueceuSenha;
