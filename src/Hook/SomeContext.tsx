import { createContext } from 'react';

// Define o tipo do valor do contexto (ajuste conforme necessário)
interface SomeContextType {
  valor: string;
  id: string;
  cnpj: string;
}

// Criação do contexto com valor inicial nulo
const SomeContext = createContext<SomeContextType | null>(null);

export default SomeContext;
