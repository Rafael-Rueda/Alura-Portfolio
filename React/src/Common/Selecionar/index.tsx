import { createContext, useState, SetStateAction} from 'react'
import { Tarefa } from '../../Types/Tarefa';

export const SelecionarContext = createContext<{selecionar: Tarefa, setSelecionar: React.Dispatch<SetStateAction<Tarefa>>}>({
    selecionar: {name: '', id: null, time: ''},
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
