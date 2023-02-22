import {createContext, useState, SetStateAction} from 'react';
import { Tarefa } from '../../Types/Tarefa';

// Tarefas será um array que conterá objetos contendo as propriedades name, id, e time.

type TarefaContext = {
    tarefas: Tarefa[];
    setTarefas: React.Dispatch<SetStateAction<Tarefa[]>>
}



export const TarefasContext = createContext<TarefaContext>({
    tarefas: [],
    setTarefas: () => {}
});


export const TarefasProvider = ({children}: {children: React.ReactNode}) => {
    const [tarefas, setTarefas] = useState<Tarefa[]>([])
    
    return (
        <TarefasContext.Provider value={{tarefas, setTarefas}}>
            {children}
        </TarefasContext.Provider>
    )
}
