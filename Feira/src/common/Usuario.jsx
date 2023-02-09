import { createContext } from "react";
import { useState } from 'react';

export const UsuarioContext = createContext();

UsuarioContext.displayName = 'Usuario'

export const UsuarioProvider = ({children}) => {

    const [valor, setValor] = useState('0.00');
    const [nome, setNome] = useState('');
    
    return (
        <UsuarioContext.Provider value={{valor, setValor, nome, setNome}}>
            {children}
        </UsuarioContext.Provider>
    )
}
