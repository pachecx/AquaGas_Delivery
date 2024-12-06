import { ReactNode, FC } from "react";
import SomeContext from "./someContext";

interface UseContextProps {
  children: ReactNode;
}

const UseConntext: FC<UseContextProps> = ({ children }) => {
  const valor = "teste";
  const id = "6";
  const cnpj = "2545452";

  return (
    <SomeContext.Provider value={{ valor, id, cnpj }}>
      {children}
    </SomeContext.Provider>
  );
};

export default UseConntext;
