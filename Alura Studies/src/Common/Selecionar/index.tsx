import { createContext, useState, SetStateAction} from 'react'
import { Tarefa } from '../../Types/Tarefa';

export const SelecionarContext = createContext<{selecionar: {}, setSelecionar: React.Dispatch<SetStateAction<Tarefa>>}>({
    selecionar: {},
    setSelecionar: () => {}
});

export const SelecionarProvider = ({children}: {children: React.ReactNode}) => {
    const [selecionar, setSelecionar] = useState<Tarefa>({name: '', id: null, time: ''});
    
    return (
        <SelecionarContext.Provider value={{selecionar, setSelecionar}}>
            {children}
        </SelecionarContext.Provider>
    )
}

export const useSelecionar = (): {} => {

    

    return {}
}