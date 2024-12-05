import { ReactNode, FC } from 'react'
import SomeContext from './someContext';

interface UseContextProps {
  children: ReactNode;
}

const UseConntext: FC<UseContextProps>  = ({ children }) => {

  const valor = 'teste';

  return (
    <SomeContext.Provider value={{valor}}>
        {children}
    </SomeContext.Provider>
  )
}

export default UseConntext