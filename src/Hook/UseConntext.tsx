import { ReactNode, FC } from "react";
import SomeContext from "./SomeContext";
import { jwtDecode } from "jwt-decode";

interface UseContextProps {
  children: ReactNode;
}

interface DecodedToken {
  nome: string;
  email: string;
  cnpj: string;
  id: string;
}

const UseConntext: FC<UseContextProps> = ({ children }) => {
  const token = localStorage.getItem("token"); // Obtém o token armazenado

  let decoded: DecodedToken | null = null;

  try {
    if (token) {
      decoded = jwtDecode<DecodedToken>(token); // Tenta decodificar o token
    } else {
      console.error("Token não encontrado no localStorage.");
    }
  } catch (error) {
    console.error("Erro ao decodificar o token:", error);
  }

  if (!decoded) {
    // Define valores padrão caso o token não seja decodificado
    decoded = { id: "", nome: "", email: "", cnpj: "" };
  }

  const { id, nome, email, cnpj } = decoded;

  return (
    <SomeContext.Provider value={{ id, nome, email, cnpj }}>
      {children}
    </SomeContext.Provider>
  );
};

export default UseConntext;
